import puppeteer from "puppeteer-core";

const browser = await puppeteer.launch({
  executablePath:
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: "new",
  args: ["--no-sandbox", "--disable-gpu"],
});
const page = await browser.newPage();
const logs = [];
page.on("console", (msg) => logs.push(msg.type() + ": " + msg.text()));
page.on("pageerror", (err) => logs.push("PAGEERROR: " + err.message));
page.on("requestfailed", (req) =>
  logs.push("REQFAIL: " + req.url() + " :: " + (req.failure()?.errorText ?? ""))
);
page.on("response", (res) => {
  if (res.status() >= 400) logs.push("HTTP " + res.status() + ": " + res.url());
});

await page.goto(process.argv[2] || "http://localhost:5173", {
  waitUntil: "networkidle2",
  timeout: 60000,
});
await new Promise((r) => setTimeout(r, 15000));

const percent = await page.evaluate(() => {
  const el = document.querySelector(".loading-content-in span");
  return el ? el.textContent : "(loader gone)";
});
console.log("LOADER SHOWS:", percent);
console.log("--- CONSOLE ---");
logs.slice(0, 40).forEach((l) => console.log(l));
await browser.close();
