import { spawn } from "child_process";
import fs from "fs";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function run() {
  console.log("Starting test server...");
  const server = spawn("python3", ["-m", "http.server", "3009", "-d", "/Users/ravinduhettiarachchi/veloura/out"], {
    stdio: "ignore",
  });

  await sleep(1000);

  console.log("Starting Chrome...");
  const chrome = spawn(
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    [
      "--headless=new",
      "--disable-gpu",
      "--user-data-dir=/tmp/chrome-test-multipage",
      "--remote-debugging-port=9228",
      "http://localhost:3009/",
    ],
    { stdio: "ignore" }
  );

  await sleep(2000);

  const targetsRes = await fetch("http://127.0.0.1:9228/json/list");
  const targets = await targetsRes.json();
  const pageTarget = targets.find((t) => t.type === "page" && !t.url.startsWith("chrome://")) || targets[0];
  const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);

  let id = 1;
  const pending = new Map();
  ws.onmessage = (e) => {
    const data = JSON.parse(e.data);
    if (data.id && pending.has(data.id)) {
      const { resolve, reject } = pending.get(data.id);
      pending.delete(data.id);
      if (data.error) reject(data.error);
      else resolve(data.result);
    }
  };

  const send = (method, params = {}) =>
    new Promise((resolve, reject) => {
      const reqId = id++;
      pending.set(reqId, { resolve, reject });
      ws.send(JSON.stringify({ id: reqId, method, params }));
    });

  await new Promise((r) => (ws.readyState === WebSocket.OPEN ? r() : (ws.onopen = r)));
  await send("Page.enable");
  await send("Runtime.enable");

  console.log("\n1. Testing initial Home page load (should show Hero section)...");
  await send("Page.navigate", { url: "http://localhost:3009/" });
  await sleep(1500);

  const homeCheck = await send("Runtime.evaluate", {
    expression: `
      (() => {
        const h1 = document.querySelector('h1');
        const scrollY = window.scrollY;
        return {
          h1Text: h1 ? h1.innerText.replace(/\\n/g, ' ') : null,
          scrollY,
          pathname: window.location.pathname
        };
      })()
    `,
    returnByValue: true,
  });
  console.log("Home check result:", homeCheck.result.value);

  console.log("\n2. Testing refresh on Home page (should still show Hero section)...");
  await send("Page.reload");
  await sleep(1500);

  const refreshCheck = await send("Runtime.evaluate", {
    expression: `
      (() => {
        const h1 = document.querySelector('h1');
        const scrollY = window.scrollY;
        return {
          h1Text: h1 ? h1.innerText.replace(/\\n/g, ' ') : null,
          scrollY,
          showsHero: h1 && h1.innerText.includes('Rooms that feel calm')
        };
      })()
    `,
    returnByValue: true,
  });
  console.log("Refresh check result:", refreshCheck.result.value);

  console.log("\n3. Testing Studio page direct visit (/studio)...");
  await send("Page.navigate", { url: "http://localhost:3009/studio" });
  await sleep(1500);

  const studioCheck = await send("Runtime.evaluate", {
    expression: `
      (() => {
        const h2 = document.querySelector('h2');
        return {
          h2Text: h2 ? h2.innerText : null,
          scrollY: window.scrollY
        };
      })()
    `,
    returnByValue: true,
  });
  console.log("Studio page check result:", studioCheck.result.value);

  console.log("\n4. Testing Portfolio page direct visit (/portfolio)...");
  await send("Page.navigate", { url: "http://localhost:3009/portfolio" });
  await sleep(1500);

  const portfolioCheck = await send("Runtime.evaluate", {
    expression: `
      (() => {
        const h2 = document.querySelector('h2');
        const filters = Array.from(document.querySelectorAll('button')).map(b => b.innerText).filter(t => ['All', 'Residential', 'Commercial'].includes(t));
        return {
          h2Text: h2 ? h2.innerText : null,
          filters
        };
      })()
    `,
    returnByValue: true,
  });
  console.log("Portfolio page check result:", portfolioCheck.result.value);

  ws.close();
  chrome.kill();
  server.kill();
  console.log("\nMulti-page verification completed successfully!");
  process.exit(0);
}

run().catch((err) => {
  console.error("Test failed:", err);
  process.exit(1);
});
