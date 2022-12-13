const puppeteer = require('puppeteer');
const randomUseragent = require('random-useragent');


const PageColombia = async () => {
    /* Banco Colombia */
    

    const header = randomUseragent.getRandom()
    const browser = await puppeteer.launch({heandless: false });
    const page = await browser.newPage();
    await page.setUserAgent(header)
    await page.goto("https://www.banrep.gov.co/es");
    await page.setViewport({ width: 1920, height: 1080 });
    await page.screenshot({path: '01-Banco Colombia.png'});
        
    const grabParagraphBANCOco= await page.evaluate(() =>{
        const pgTag = document.querySelector("#block-banrepindicatorsblock > div > div.column.large-3.indicator.indicator--trm > div.indicator__value > a");
        return pgTag.innerHTML;
    });

    let procesad
    procesad = grabParagraphBANCOco.replace(/\s+/g," ");

    console.log("Banco colombia", procesad);

    /* EURCOP */
    setTimeout(async function()  {
    }, 2000);

    await page.setUserAgent(header)
    await page.goto("https://www.oanda.com/currency-converter/es/?from=EUR&to=COP&amount=1");
    await page.setViewport({ width: 1200, height:750 });
    await page.screenshot({path: '05-Tasa EURCOP.png'});

    const grabParagraphEURCOP= await page.evaluate(() =>{
        const pgTag = document.querySelector("#cc-time-series-plot > div > div > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td:nth-child(2)");
        return pgTag.innerHTML;
    })
    console.log("EUR/COP", grabParagraphEURCOP);


    /* EURUSD */

    await page.setUserAgent(header)
    await page.goto("https://www.oanda.com/currency-converter/es/?from=EUR&to=USD&amount=1");
    await page.setViewport({ width: 1200, height:750 });
    await page.screenshot({path: '06-Tasa EURUSD.png'});

    const grabParagraphEURUSD= await page.evaluate(() =>{
        const pgTag = document.querySelector("#cc-time-series-plot > div > div > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td:nth-child(2)");
        return pgTag.innerHTML;
    })
    console.log("EUR/USD", grabParagraphEURUSD);


  /* CNYUSD */
  
  await page.setUserAgent(header)
  await page.goto("https://www.oanda.com/currency-converter/es/?from=CNY&to=USD&amount=1");
  await page.setViewport({ width: 1200, height:750 });
  await page.screenshot({path: '07-Tasa CNYUSD.png'});

  const grabParagraphCNYUSD= await page.evaluate(() =>{
      const pgTag = document.querySelector("#cc-time-series-plot > div > div > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td:nth-child(2)");
      return pgTag.innerHTML;
  })
  console.log("CNY/USD", grabParagraphCNYUSD);

  /* JPYUSD */
  
  await page.setUserAgent(header)
  await page.goto("https://www.oanda.com/currency-converter/es/?from=JPY&to=USD&amount=1");
  await page.setViewport({ width: 1200, height:750 });
  await page.screenshot({path: '08-Tasa JPYUSD.png'});

  const grabParagraphJPYUSD= await page.evaluate(() =>{
      const pgTag = document.querySelector("#cc-time-series-plot > div > div > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td:nth-child(2)");
      return pgTag.innerHTML;
  })
  console.log("JPY/USD", grabParagraphJPYUSD);


   /* CNYCOP */
  
   await page.setUserAgent(header)
   await page.goto("https://www.oanda.com/currency-converter/es/?from=CNY&to=COP&amount=1");
   await page.setViewport({ width: 1200, height:750 });
   await page.screenshot({path: '10-Tasa CNYCOP.png'});
 
   const grabParagraphCNYCOP= await page.evaluate(() =>{
       const pgTag = document.querySelector("#cc-time-series-plot > div > div > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td:nth-child(2)");
       return pgTag.innerHTML;
   })
   console.log("CNY/COP", grabParagraphCNYCOP);
  
  /* JPYCOP */
  
  await page.setUserAgent(header)
  await page.goto("https://www.oanda.com/currency-converter/es/?from=JPY&to=COP&amount=1");
  await page.setViewport({ width: 1200, height:750 });
  await page.screenshot({path: '11-Tasa JPYCOP.png'});

  const grabParagraphJPYCOP= await page.evaluate(() =>{
      const pgTag = document.querySelector("#cc-time-series-plot > div > div > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td:nth-child(2)");
      return pgTag.innerHTML;
  })
  console.log("JPY/COP", grabParagraphJPYCOP);

/* BRLUSD */
  
await page.setUserAgent(header)
await page.goto("https://www.oanda.com/currency-converter/es/?from=BRL&to=USD&amount=1");
await page.setViewport({ width: 1200, height:750 });
await page.screenshot({path: '12-Tasa BRLUSD.png'});

const grabParagraphBRLUSD= await page.evaluate(() =>{
    const pgTag = document.querySelector("#cc-time-series-plot > div > div > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td:nth-child(2)");
    return pgTag.innerHTML;
})
console.log("BRL/USD", grabParagraphBRLUSD);


await browser.close()

console.log("Proceso Terminado") 

}

module.exports = {
    PageColombia
}