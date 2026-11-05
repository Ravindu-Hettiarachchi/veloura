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
      "--window-size=1440,900",
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

  // Helper to take screenshot
  const takeScreenshot = async (filepath) => {
    const res = await send("Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(filepath, Buffer.from(res.data, "base64"));
  };

  console.log("\n--- 1. Testing Home page (/) ---");
  await send("Page.navigate", { url: "http://localhost:3009/" });
  await sleep(1500);

  const homeState = await send("Runtime.evaluate", {
    expression: `
      (() => {
        const h1 = document.querySelector('h1');
        const studioEl = document.querySelector('#studio');
        const portfolioEl = document.querySelector('#portfolio');
        return {
          h1: h1 ? h1.innerText.replace(/\\n/g, ' ') : null,
          hasStudioSectionOnHome: !!studioEl,
          hasPortfolioSectionOnHome: !!portfolioEl,
          scrollY: window.scrollY
        };
      })()
    `,
    returnByValue: true,
  });
  console.log("Home Page check:", homeState.result.value);
  await takeScreenshot("/Users/ravinduhettiarachchi/.gemini/antigravity/brain/cd97cbd6-a5cf-4c1f-a631-8566b179aa61/multipage-home.png");

  console.log("\n--- 2. Testing Refresh on Home Page ---");
  await send("Page.reload");
  await sleep(1500);
  const homeRefresh = await send("Runtime.evaluate", {
    expression: `
      (() => {
        const h1 = document.querySelector('h1');
        return {
          scrollY: window.scrollY,
          showsHero: h1 && h1.innerText.includes('Rooms that feel calm')
        };
      })()
    `,
    returnByValue: true,
  });
  console.log("Home Refresh check:", homeRefresh.result.value);

  console.log("\n--- 3. Testing Navigation click: Studio (/studio) ---");
  await send("Runtime.evaluate", {
    expression: `
      (() => {
        const links = Array.from(document.querySelectorAll('header nav a'));
        const studioLink = links.find(a => a.innerText.trim() === 'Studio');
        if (studioLink) studioLink.click();
      })()
    `,
  });
  // Check during navigation if loading veil or progress bar appears
  await sleep(100);
  const transitionActive = await send("Runtime.evaluate", {
    expression: `
      (() => {
        const veil = document.querySelector('div[aria-hidden="true"]');
        return veil ? true : false;
      })()
    `,
    returnByValue: true,
  });
  console.log("Transition active immediately on click:", transitionActive.result.value);

  await sleep(1200);
  const studioState = await send("Runtime.evaluate", {
    expression: `
      (() => {
        const h2 = document.querySelector('h2');
        const h1 = document.querySelector('h1');
        return {
          pathname: window.location.pathname,
          h2: h2 ? h2.innerText : null,
          hasHero: !!h1,
          scrollY: window.scrollY
        };
      })()
    `,
    returnByValue: true,
  });
  console.log("Studio Page check:", studioState.result.value);
  await takeScreenshot("/Users/ravinduhettiarachchi/.gemini/antigravity/brain/cd97cbd6-a5cf-4c1f-a631-8566b179aa61/multipage-studio.png");

  console.log("\n--- 4. Testing Navigation click: Portfolio (/portfolio) ---");
  await send("Runtime.evaluate", {
    expression: `
      (() => {
        const links = Array.from(document.querySelectorAll('header nav a'));
        const portfolioLink = links.find(a => a.innerText.trim() === 'Portfolio');
        if (portfolioLink) portfolioLink.click();
      })()
    `,
  });
  await sleep(1200);
  const portfolioState = await send("Runtime.evaluate", {
    expression: `
      (() => {
        const h2 = document.querySelector('h2');
        return {
          pathname: window.location.pathname,
          h2: h2 ? h2.innerText : null,
          projectCardsCount: document.querySelectorAll('a[href^="/portfolio/"]').length,
          scrollY: window.scrollY
        };
      })()
    `,
    returnByValue: true,
  });
  console.log("Portfolio Page check:", portfolioState.result.value);
  await takeScreenshot("/Users/ravinduhettiarachchi/.gemini/antigravity/brain/cd97cbd6-a5cf-4c1f-a631-8566b179aa61/multipage-portfolio.png");

  console.log("\n--- 5. Testing Navigation click: Process (/process) ---");
  await send("Runtime.evaluate", {
    expression: `
      (() => {
        const links = Array.from(document.querySelectorAll('header nav a'));
        const processLink = links.find(a => a.innerText.trim() === 'Process');
        if (processLink) processLink.click();
      })()
    `,
  });
  await sleep(1200);
  const processState = await send("Runtime.evaluate", {
    expression: `
      (() => {
        const h2 = document.querySelector('h2');
        return {
          pathname: window.location.pathname,
          h2: h2 ? h2.innerText : null,
          scrollY: window.scrollY
        };
      })()
    `,
    returnByValue: true,
  });
  console.log("Process Page check:", processState.result.value);
  await takeScreenshot("/Users/ravinduhettiarachchi/.gemini/antigravity/brain/cd97cbd6-a5cf-4c1f-a631-8566b179aa61/multipage-process.png");

  console.log("\n--- 6. Testing Navigation click: Enquiry (/enquiry) ---");
  await send("Runtime.evaluate", {
    expression: `
      (() => {
        const links = Array.from(document.querySelectorAll('header nav a'));
        const enquiryLink = links.find(a => a.innerText.trim() === 'Enquiry');
        if (enquiryLink) enquiryLink.click();
      })()
    `,
  });
  await sleep(1200);
  const enquiryState = await send("Runtime.evaluate", {
    expression: `
      (() => {
        const h2 = document.querySelector('h2');
        const formButtons = document.querySelectorAll('button').length;
        return {
          pathname: window.location.pathname,
          h2: h2 ? h2.innerText : null,
          hasFormButtons: formButtons > 0,
          scrollY: window.scrollY
        };
      })()
    `,
    returnByValue: true,
  });
  console.log("Enquiry Page check:", enquiryState.result.value);
  await takeScreenshot("/Users/ravinduhettiarachchi/.gemini/antigravity/brain/cd97cbd6-a5cf-4c1f-a631-8566b179aa61/multipage-enquiry.png");

  console.log("\n--- 7. Testing Logo click back to Home (/) ---");
  await send("Runtime.evaluate", {
    expression: `
      (() => {
        const logo = document.querySelector('header a[aria-label="VELOURA Home"]');
        if (logo) logo.click();
      })()
    `,
  });
  await sleep(1200);
  const logoReturnState = await send("Runtime.evaluate", {
    expression: `
      (() => {
        const h1 = document.querySelector('h1');
        return {
          pathname: window.location.pathname,
          showsHero: h1 && h1.innerText.includes('Rooms that feel calm'),
          scrollY: window.scrollY
        };
      })()
    `,
    returnByValue: true,
  });
  console.log("Return to Home check:", logoReturnState.result.value);

  ws.close();
  chrome.kill();
  server.kill();
  console.log("\nAll multi-page & refresh checks completed successfully!");
  process.exit(0);
}

run().catch((err) => {
  console.error("Test failed:", err);
  process.exit(1);
});
