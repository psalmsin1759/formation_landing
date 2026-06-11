import puppeteer from 'puppeteer';
const browser = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
await page.goto('http://localhost:3199/', { waitUntil: 'networkidle0' });
await new Promise(r => setTimeout(r, 2500));
await page.screenshot({ path: '/tmp/fexl-hero.png' });
// stats section
await page.evaluate(() => window.scrollTo(0, 950));
await new Promise(r => setTimeout(r, 1800));
await page.screenshot({ path: '/tmp/fexl-stats.png' });
// categories + featured
await page.evaluate(() => window.scrollTo(0, 2000));
await new Promise(r => setTimeout(r, 1800));
await page.screenshot({ path: '/tmp/fexl-courses.png' });
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight - 900));
await new Promise(r => setTimeout(r, 1800));
await page.screenshot({ path: '/tmp/fexl-footer.png' });
await browser.close();
