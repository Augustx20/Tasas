const puppeteer = require('puppeteer');
const randomUseragent = require('random-useragent')
const ExcelJS = require ('exceljs')

/*First Test wirh Pupperteer in JavaScript and Copie the secong part in Oanda, so i want copie the principal input conver */

const initialization = async () => {

    /* EURCOP */

    const header = randomUseragent.getRandom()
    const browser = await puppeteer.launch({heandless: false });
    const page = await browser.newPage();
    await page.setUserAgent(header)
    await page.goto("https://www.oanda.com/currency-converter/es/?from=EUR&to=COP&amount=1");
    await page.setViewport({ width: 1920, height: 1080 });
    await page.screenshot({path: 'TasaEURCOP.png'});

    const grabParagraphEURCOP= await page.evaluate(() =>{
        const pgTag = document.querySelector("#scroll-wrap > main > div.block.content-cards-lite-row.card-cheat_sheet_row.background--white > div > div > div.col.cheat_sheet > div > div:nth-child(1) > div > div.cheat_table.cc-base > table > tbody > tr:nth-child(1) > td:nth-child(2) > span.cc-rates.hidden");
        return pgTag.innerHTML;

    })
    console.log("EUR/COP", grabParagraphEURCOP);

    /* EURUSD */

    await page.setUserAgent(header)
    await page.goto("https://www.oanda.com/currency-converter/es/?from=EUR&to=USD&amount=1");
    await page.setViewport({ width: 1920, height: 1080 });
    await page.screenshot({path: 'TasaEURUSD.png'});

    const grabParagraphEURUSD= await page.evaluate(() =>{
        const pgTag = document.querySelector("#scroll-wrap > main > div.block.content-cards-lite-row.card-cheat_sheet_row.background--white > div > div > div.col.cheat_sheet > div > div:nth-child(1) > div > div.cheat_table.cc-base > table > tbody > tr:nth-child(1) > td:nth-child(2) > span.cc-rates.hidden");
        return pgTag.innerHTML;

    })
    console.log("EUR/USD", grabParagraphEURUSD);


  /* CNYUSD */
  
  await page.setUserAgent(header)
  await page.goto("https://www.oanda.com/currency-converter/es/?from=CNY&to=USD&amount=1");
  await page.setViewport({ width: 1920, height: 1080 });
  await page.screenshot({path: 'TasaCNYUSD.png'});

  const grabParagraphCNYUSD= await page.evaluate(() =>{
      const pgTag = document.querySelector("#scroll-wrap > main > div.block.content-cards-lite-row.card-cheat_sheet_row.background--white > div > div > div.col.cheat_sheet > div > div:nth-child(1) > div > div.cheat_table.cc-base > table > tbody > tr:nth-child(1) > td:nth-child(2) > span.cc-rates.hidden");
      return pgTag.innerHTML;

  })
  console.log("CNY/USD", grabParagraphCNYUSD);
  
  
  /* JPYUSD */
  
  await page.setUserAgent(header)
  await page.goto("https://www.oanda.com/currency-converter/es/?from=JPY&to=USD&amount=1");
  await page.setViewport({ width: 1920, height: 1080 });
  await page.screenshot({path: 'TasaJPYUSD.png'});

  const grabParagraphJPYUSD= await page.evaluate(() =>{
      const pgTag = document.querySelector("#scroll-wrap > main > div.block.content-cards-lite-row.card-cheat_sheet_row.background--white > div > div > div.col.cheat_sheet > div > div:nth-child(1) > div > div.cheat_table.cc-base > table > tbody > tr:nth-child(1) > td:nth-child(2) > span.cc-rates.hidden");
      return pgTag.innerHTML;

  })
  console.log("JPY/USD", grabParagraphJPYUSD);


   /* CNYCOP */
  
   await page.setUserAgent(header)
   await page.goto("https://www.oanda.com/currency-converter/es/?from=CNY&to=COP&amount=1");
   await page.setViewport({ width: 1920, height: 1080 });
   await page.screenshot({path: 'TasaCNYCOP.png'});
 
   const grabParagraphCNYCOP= await page.evaluate(() =>{
       const pgTag = document.querySelector("#scroll-wrap > main > div.block.content-cards-lite-row.card-cheat_sheet_row.background--white > div > div > div.col.cheat_sheet > div > div:nth-child(1) > div > div.cheat_table.cc-base > table > tbody > tr:nth-child(1) > td:nth-child(2) > span.cc-rates.hidden");
       return pgTag.innerHTML;
 
   })
   console.log("CNY/COP", grabParagraphCNYCOP);
  
  /* JPYCOP */
  
  await page.setUserAgent(header)
  await page.goto("https://www.oanda.com/currency-converter/es/?from=CNY&to=COP&amount=1");
  await page.setViewport({ width: 1920, height: 1080 });
  await page.screenshot({path: 'TasaCNYCOP.png'});

  const grabParagraphJPYCOP= await page.evaluate(() =>{
      const pgTag = document.querySelector("#scroll-wrap > main > div.block.content-cards-lite-row.card-cheat_sheet_row.background--white > div > div > div.col.cheat_sheet > div > div:nth-child(1) > div > div.cheat_table.cc-base > table > tbody > tr:nth-child(1) > td:nth-child(2) > span.cc-rates.hidden");
      return pgTag.innerHTML;

  })
  console.log("JPY/COP", grabParagraphJPYCOP);

/* BRLUSD */
  
await page.setUserAgent(header)
await page.goto("https://www.oanda.com/currency-converter/es/?from=BRL&to=USD&amount=1");
await page.setViewport({ width: 1920, height: 1080 });
await page.screenshot({path: 'TasaBRLUSD.png'});

const grabParagraphBRLUSD= await page.evaluate(() =>{
    const pgTag = document.querySelector("#scroll-wrap > main > div.block.content-cards-lite-row.card-cheat_sheet_row.background--white > div > div > div.col.cheat_sheet > div > div:nth-child(1) > div > div.cheat_table.cc-base > table > tbody > tr:nth-child(1) > td:nth-child(2) > span.cc-rates.hidden");
    return pgTag.innerHTML;

})
console.log("BRL/USD", grabParagraphBRLUSD);


/* comienzo Tasas De Chile USDCLP*/

await page.setUserAgent(header)
await page.goto("https://www.oanda.com/currency-converter/es/?from=USD&to=CLP&amount=1");
await page.setViewport({ width: 1920, height: 1080 });
await page.screenshot({path: 'TasaUSDCLP.png'});

const grabParagraphUSDCLP= await page.evaluate(() =>{
    const pgTag = document.querySelector("#cc-time-series-plot > div > div > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td:nth-child(3)");
    return pgTag.innerHTML;

})
console.log("USD/CLP", grabParagraphUSDCLP);


/* EURCLP */

await page.setUserAgent(header)
await page.goto("https://www.oanda.com/currency-converter/es/?from=EUR&to=CLP&amount=1");
await page.setViewport({ width: 1920, height: 1080 });
await page.screenshot({path: 'TasaEURCLP.png'});

const grabParagraphEURCLP= await page.evaluate(() =>{
    const pgTag = document.querySelector("#cc-time-series-plot > div > div > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td:nth-child(3)");
    return pgTag.innerHTML;

})
console.log("EUR/CLP", grabParagraphEURCLP);


  
  
    await browser.close()   
}
initialization();