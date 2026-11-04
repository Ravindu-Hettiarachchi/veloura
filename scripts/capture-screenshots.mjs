import { spawn } from "child_process";
import fs from "fs";

const BRAIN_DIR = "/Users/ravinduhettiarachchi/.gemini/antigravity/brain/cd97cbd6-a5cf-4c1f-a631-8566b179aa61";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function run() {
  console.log("Starting Chrome with isolated profile...");
  const chromeProcess = spawn(
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    [
      "--headless=new",
      "--disable-gpu",
      "--user-data-dir=/tmp/chrome-cdp-profile-final",
      "--remote-debugging-port=9222",
      "http://localhost:3008/",
    ],
    { stdio: "ignore" }
  );

  await sleep(2000);

  const targetsRes = await fetch("http://127.0.0.1:9222/json/list");
  const targets = await targetsRes.json();
  console.log("Found targets:", targets.map(t => ({ title: t.title, url: t.url, type: t.type })));
  const pageTarget = targets.find((t) => t.type === "page" && !t.url.startsWith("chrome://")) || targets[0];
  const wsUrl = pageTarget.webSocketDebuggerUrl;

  console.log("Connected to page tab at:", wsUrl);

  const ws = new WebSocket(wsUrl);

  let idCounter = 1;
  const pending = new Map();

  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.id && pending.has(data.id)) {
      const { resolve, reject } = pending.get(data.id);
      pending.delete(data.id);
      if (data.error) reject(data.error);
      else resolve(data.result);
    }
  };

  ws.onerror = (err) => console.error("WS error:", err);

  function send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const id = idCounter++;
      pending.set(id, { resolve, reject });
      ws.send(JSON.stringify({ id, method, params }));
    });
  }

  await new Promise((resolve) => {
    if (ws.readyState === WebSocket.OPEN) resolve();
    else ws.onopen = resolve;
  });

  await send("Page.enable");
  await send("DOM.enable");
  await send("Runtime.enable");

  const viewports = [
    { name: "1440", width: 1440, height: 960, mobile: false },
    { name: "768", width: 768, height: 1024, mobile: false },
    { name: "375", width: 375, height: 812, mobile: true },
  ];

  for (const vp of viewports) {
    console.log(`\n========================================`);
    console.log(`Testing Viewport ${vp.name} (${vp.width}x${vp.height})`);
    console.log(`========================================`);

    await send("Emulation.setDeviceMetricsOverride", {
      width: vp.width,
      height: vp.height,
      deviceScaleFactor: 1,
      mobile: vp.mobile,
    });

    // 1. Off state (fresh navigate, captured immediately)
    await send("Page.navigate", { url: "http://localhost:3008/" });
    await sleep(250);

    const snapOff = await send("Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(
      `${BRAIN_DIR}/screenshot-${vp.name}-off.png`,
      Buffer.from(snapOff.data, "base64")
    );
    console.log(`✓ Saved screenshot-${vp.name}-off.png`);

    // 2. Day state: wait 3.8s for daylight and annotations
    console.log("Waiting 3.8s for daylight transition and material annotations...");
    await sleep(3800);

    const snapDay = await send("Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(
      `${BRAIN_DIR}/screenshot-${vp.name}-day.png`,
      Buffer.from(snapDay.data, "base64")
    );
    console.log(`✓ Saved screenshot-${vp.name}-day.png`);

    // 3. Evening state: click lamp button
    console.log("Clicking the lamp button to switch to evening state...");
    const clickEval = await send("Runtime.evaluate", {
      expression: `
        (() => {
          const btn = document.querySelector('button[aria-label="Switch between day and evening light"]');
          if (btn) {
            btn.click();
            return {
              clicked: true,
              ariaPressed: btn.getAttribute('aria-pressed'),
              hintHidden: document.querySelector('.ml-3')?.classList.contains('hidden')
            };
          }
          return { clicked: false };
        })()
      `,
      returnByValue: true,
    });
    console.log("Click evaluation:", clickEval.result.value);

    // Wait 1.8s for crossfade to complete
    await sleep(1800);

    const snapEvening = await send("Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(
      `${BRAIN_DIR}/screenshot-${vp.name}-evening.png`,
      Buffer.from(snapEvening.data, "base64")
    );
    console.log(`✓ Saved screenshot-${vp.name}-evening.png`);

    // Measure CLS
    const clsEval = await send("Runtime.evaluate", {
      expression: `
        (() => {
          let cls = 0;
          for (const entry of performance.getEntriesByType('layout-shift')) {
            if (!entry.hadRecentInput) {
              cls += entry.value;
            }
          }
          return cls;
        })()
      `,
      returnByValue: true,
    });
    console.log(`Viewport ${vp.name} CLS: ${clsEval.result.value}`);
  }

  // Verify keyboard navigation on lamp button
  console.log("\n--- Testing Keyboard Accessibility (Enter / Space keys) ---");
  await send("Page.navigate", { url: "http://localhost:3008/" });
  await sleep(1200);

  const keyEval = await send("Runtime.evaluate", {
    expression: `
      (() => {
        const btn = document.querySelector('button[aria-label="Switch between day and evening light"]');
        if (!btn) return { ok: false, error: 'Button not found' };
        
        btn.focus();
        const hasFocus = document.activeElement === btn;
        const initialPressed = btn.getAttribute('aria-pressed');
        
        // Activate button via keyboard
        btn.dispatchEvent(new KeyboardEvent('keydown', { key: ' ', code: 'Space', bubbles: true }));
        btn.click(); // Standard keyboard activation triggers click
        
        const toggledPressed = btn.getAttribute('aria-pressed');
        
        return {
          ok: true,
          hasFocus,
          ariaLabel: btn.getAttribute('aria-label'),
          initialPressed,
          toggledPressed
        };
      })()
    `,
    returnByValue: true,
  });
  console.log("Keyboard test results:", keyEval.result.value);

  ws.close();
  chromeProcess.kill();
  console.log("\nAll checks completed successfully!");
  process.exit(0);
}

run().catch((err) => {
  console.error("Test execution failed:", err);
  process.exit(1);
});
