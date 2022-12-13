const puppeteer = require('puppeteer');
const randomUseragent = require('random-useragent');


    

const PageHonduras = async () => {

    console.log("Ejecutando Tasas de Honduras");
    
    //Guatemala Lunes
    const header = randomUseragent.getRandom()
    const browser = await puppeteer.launch({heandless: false });
    const page = await browser.newPage();
    await page.setUserAgent(header)
    await page.goto("https://www.oanda.com/currency-converter/es/?from=USD&to=HNL&amount=1");
    await page.setViewport({ width: 1920, height: 1080 });
    await page.screenshot({path: '15-Tasa BRLHNL.png'});
    
    const grabParagraphBancoGua= await page.evaluate(() =>{
        const pgTag = document.querySelector("#cc-time-series-plot > div > div > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td:nth-child(3)");
        return pgTag.innerHTML;
    
    })
    console.log("Banco Guatemala", grabParagraphBancoGua);
    
    
    //Honduras lunes 
    
    //Banco Honduras
    await page.setUserAgent(header)
    await page.goto("https://www.ficohsa.com/hn/honduras/tipo-cambio/");
    await page.setViewport({ width: 1920, height: 1080 });
    await page.screenshot({path: '16-Banco Honduras.png'});
    
    const grabParagraphUSDHNL= await page.evaluate(() =>{
        const pgTag = document.querySelector("#site-banco-honduras > div:nth-child(10) > div.col-8.col-md-8.col-sm-12.padding-main.padding-right-10.tab1-padding-right-0 > article:nth-child(1) > p:nth-child(4) > span:nth-child(2) > span > span > span > span > span > span");
        return pgTag.innerHTML;
    })
    console.log("Banco Honduras", grabParagraphUSDHNL);
    
    // BRL/HNL
    await page.setUserAgent(header)
    await page.goto("https://www.oanda.com/currency-converter/es/?from=BRL&to=HNL&amount=1");
    await page.setViewport({ width: 1200, height:750 });
    await page.screenshot({path: '17-Tasa BRLHNL.png'});
    
    const grabParagraphBRLHNL= await page.evaluate(() =>{
        const pgTag = document.querySelector("#cc-time-series-plot > div > div > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td:nth-child(2)");
        return pgTag.innerHTML;
    })
    console.log("BRL/HNL", grabParagraphBRLHNL);
    
    // CNY/HNL
    
    await page.setUserAgent(header)
    await page.goto("https://www.oanda.com/currency-converter/es/?from=CNY&to=HNL&amount=1");
    await page.setViewport({ width: 1200, height:750 });
    await page.screenshot({path: '18-Tasa CNYHNL.png'});
    
    const grabParagraphCNYHNL= await page.evaluate(() =>{
        const pgTag = document.querySelector("#cc-time-series-plot > div > div > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td:nth-child(2)");
        return pgTag.innerHTML;
    })
    console.log("CNY/HNL", grabParagraphCNYHNL);
    
    // EUR/HNL
    
    await page.setUserAgent(header)
    await page.goto("https://www.oanda.com/currency-converter/es/?from=EUR&to=HNL&amount=1");
    await page.setViewport({ width: 1200, height:750 });
    await page.screenshot({path: '19-Tasa EURHNL.png'});
    
    const grabParagraphEURHNL= await page.evaluate(() =>{
        const pgTag = document.querySelector("#cc-time-series-plot > div > div > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td:nth-child(2)");
        return pgTag.innerHTML;
    })
    console.log("EUR/HNL", grabParagraphEURHNL);
    
    // GBP/HNL
    
    await page.setUserAgent(header)
    await page.goto("https://www.oanda.com/currency-converter/es/?from=GBP&to=HNL&amount=1");
    await page.setViewport({ width: 1200, height:750 });
    await page.screenshot({path: '20-Tasa GBPHNL.png'});
    
    const grabParagraphGBPHNL= await page.evaluate(() =>{
        const pgTag = document.querySelector("#cc-time-series-plot > div > div > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td:nth-child(2)");
        return pgTag.innerHTML;
    })
    console.log("GBP/HNL", grabParagraphGBPHNL);
    
    // JPY/HNL
    await page.setUserAgent(header)
    await page.goto("https://www.oanda.com/currency-converter/es/?from=JPY&to=HNL&amount=1");
    await page.setViewport({ width: 1200, height:750 });
    await page.screenshot({path: '21-Tasa JPYHNL.png'});
    
    const grabParagraphJPYHNL= await page.evaluate(() =>{
        const pgTag =document.querySelector("#cc-time-series-plot > div > div > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td:nth-child(2)");
        return pgTag.innerHTML;
    })
    console.log("JPY/HNL", grabParagraphJPYHNL);
    
    // MXN/HNL
    
    await page.setUserAgent(header)
    await page.goto("https://www.oanda.com/currency-converter/es/?from=MXN&to=HNL&amount=1");
    await page.setViewport({ width: 1200, height:750 });
    await page.screenshot({path: '22-Tasa MXNHNL.png'});
    
    const grabParagraphMXNHNL= await page.evaluate(() =>{
        const pgTag = document.querySelector("#cc-time-series-plot > div > div > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td:nth-child(2)");
        return pgTag.innerHTML;
    })
    console.log("MXN/HNL", grabParagraphMXNHNL);
    
    
    // HKD/USD
    
    await page.setUserAgent(header)
    await page.goto("https://www.oanda.com/currency-converter/es/?from=HKD&to=USD&amount=1");
    await page.setViewport({ width: 1200, height:750 });
    await page.screenshot({path: '23-Tasa HKDUSD.png'});
    
    const grabParagraphHKDUSD= await page.evaluate(() =>{
        const pgTag = document.querySelector("#cc-time-series-plot > div > div > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td:nth-child(2)");
        return pgTag.innerHTML;
    })
    console.log("HKD/USD", grabParagraphHKDUSD);
    
    // HKD/HNL
    
    await page.setUserAgent(header)
    await page.goto("https://www.oanda.com/currency-converter/es/?from=HKD&to=HNL&amount=1");
    await page.setViewport({ width: 1200, height:750 });
    await page.screenshot({path: '24-Tasa HKDUSD.png'});
    
    const grabParagraphHKDHNL= await page.evaluate(() =>{
        const pgTag = document.querySelector("#cc-time-series-plot > div > div > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td:nth-child(2)");
        return pgTag.innerHTML;
    })
    console.log("HKD/HNL", grabParagraphHKDHNL);
    
    await browser.close()

}


module.exports = {
    PageHonduras
}