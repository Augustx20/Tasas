const puppeteer = require('puppeteer');
const randomUseragent = require('random-useragent');
const Colombia = async () => {
    const header = randomUseragent.getRandom()
    const browser = await puppeteer.launch({ handless: false });
    const page = await browser.newPage();
    await page.setUserAgent(header)
    await page.goto("https://www.banrep.gov.co/es");
    await page.setViewport({ width: 1920, height: 1080 });
    await page.screenshot({path: '01-Banco Colombia.png'});

    const grabParagraphBANCOco = await page.evaluate(() =>{
        const pgTag = document.querySelector("#block-banrepindicatorsblock > div > div.column.large-3.indicator.indicator--trm > div.indicator__value > a");
        return pgTag.innerHTML;
    });
   

    let procesad = grabParagraphBANCOco.replace(/\s+/g," ");
    console.log("Banco colombia", procesad);
    await browser.close()

}   
module.exports = {

    Colombia
}