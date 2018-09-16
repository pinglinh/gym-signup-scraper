const puppeteer = require("puppeteer");
const credentials = require("./config.js");

let scrape = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto(
    "https://app.glofox.com/portal/#/branch/5908e169fc828f6014000005/classes-week-view"
  );
  await page.waitFor(5000);

  await page.click(".icon-key");
  await page.type("input[type='email']", credentials.EMAIL);

  await page.type("input[type='password']", credentials.PASSWORD);

  await page.click("button[type='submit']");

  await page.waitFor(3000);

  await page.click(".slider-forward.icon-arrow-right");

  await page.waitFor(2000);

  await page.evaluate(() => {
    let h4s = document.querySelectorAll("#day-classes-container-2018-02-12 h4");
    let hiit_h4s = [...h4s].filter(e => e.innerText.match(/HIIT/));
    hiit_h4s[0].id = "found_it_lol";
    $("#found_it_lol").click();
  });
  await page.click("button.full-width.modal-button");
};

scrape().then(value => {
  console.log(value);
});

// to open crontab
// EDITOR=nano crontab -e

// what to put in crontab
// 34 12 * * * cd ~/Documents/metabollic_scraper && node index.js
