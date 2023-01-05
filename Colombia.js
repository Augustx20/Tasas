const puppeteer = require('puppeteer');
const randomUseragent = require('random-useragent');

const url = "https://www.banrep.gov.co/es"
const Colombia = async () => {

    
    const header = randomUseragent.getRandom()
    const browser = await puppeteer.launch(
        { 
        handless: false 
        }
        );
    const page = await browser.newPage();
    await page.setUserAgent(header)
    await page.goto(url);
    await page.waitForSelector('#block-banrepindicatorsblock');
    await page.setViewport({ width: 1920, height: 1080 });
   

    const grabParagraphBANCOco = await page.evaluate(() =>{
        const pgTag = document.querySelector("#block-banrepindicatorsblock > div > div.column.large-3.indicator.indicator--trm > div.indicator__value > a").innerHTML;
        return pgTag;
    });
   

    let procesad = grabParagraphBANCOco.replace(/\s+/g," ");
    console.log("Banco colombia", procesad);
    await browser.close()
}  



module.exports = {

    Colombia
}