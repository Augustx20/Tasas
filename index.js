const puppeteer = require('puppeteer');
const randomUseragent = require('random-useragent')
const ExcelJS = require ('exceljs')

/*First Test wirh Pupperteer in JavaScript and Copie the secong part in Oanda, so i want copie the principal input conver */

const initialization = async () => {
    const header = randomUseragent.getRandom()
    const browser = await puppeteer.launch({heandless: false });
    const page = await browser.newPage();
    await page.setUserAgent(header)
    await page.goto("https://www.oanda.com/currency-converter/es/?from=EUR&to=USD&amount=1");
    await page.setViewport({ width: 1920, height: 1080 });
    await page.screenshot({path: 'TasaEURUSD.png'});

    const grabParagraph= await page.evaluate(() =>{
        const pgTag = document.querySelector("#scroll-wrap > main > div.block.content-cards-lite-row.card-cheat_sheet_row.background--white > div > div > div.col.cheat_sheet > div > div:nth-child(1) > div > div.cheat_table.cc-base > table > tbody > tr:nth-child(1) > td:nth-child(2) > span.cc-rates.hidden");
        return pgTag.innerHTML;

    })
    console.log("EUR/USD", grabParagraph)
    await browser.close()    
};
initialization();