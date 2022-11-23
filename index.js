const puppeteer = require('puppeteer');
const randomUseragent = require('random-useragent');
const moment = require ('moment');
const xl = require("excel4node");
moment.updateLocale('en', null);

/*First Test wirh Pupperteer in JavaScript and Copie the secong part in Oanda, so i want copie the principal input conver */

const initialization = async () => {
    console.log("Incio de Busqueda");

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

let hoy = moment().format('dddd');
let fechaexacta = moment('2022-11-28').add( 7, 'days').format('dddd');
console.log(hoy);
console.log(fechaexacta);

if (hoy == fechaexacta){
    console.log("son el mismo dia");
//Honduras lunes 

// BRL/HNL
await page.setUserAgent(header)
await page.goto("https://www.oanda.com/currency-converter/es/?from=BRL&to=HNL&amount=1");
await page.setViewport({ width: 1920, height: 1080 });
await page.screenshot({path: 'TasaBRLHNL.png'});

const grabParagraphBRLHNL= await page.evaluate(() =>{
    const pgTag = document.querySelector("#cc-time-series-plot > div > div > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td:nth-child(3)");
    return pgTag.innerHTML;

})
console.log("BRL/HNL", grabParagraphBRLHNL);

// CNY/HNL

await page.setUserAgent(header)
await page.goto("https://www.oanda.com/currency-converter/es/?from=CNY&to=HNL&amount=1");
await page.setViewport({ width: 1920, height: 1080 });
await page.screenshot({path: 'TasaCNYHNL.png'});

const grabParagraphCNYHNL= await page.evaluate(() =>{
    const pgTag = document.querySelector("#cc-time-series-plot > div > div > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td:nth-child(3)");
    return pgTag.innerHTML;

})
console.log("CNY/HNL", grabParagraphCNYHNL);

// EUR/HNL

await page.setUserAgent(header)
await page.goto("https://www.oanda.com/currency-converter/es/?from=EUR&to=HNL&amount=1");
await page.setViewport({ width: 1920, height: 1080 });
await page.screenshot({path: 'TasaEURHNL.png'});

const grabParagraphEURHNL= await page.evaluate(() =>{
    const pgTag = document.querySelector("#cc-time-series-plot > div > div > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td:nth-child(3)");
    return pgTag.innerHTML;

})
console.log("EUR/HNL", grabParagraphEURHNL);

// GBP/HNL

await page.setUserAgent(header)
await page.goto("https://www.oanda.com/currency-converter/es/?from=GBP&to=HNL&amount=1");
await page.setViewport({ width: 1920, height: 1080 });
await page.screenshot({path: 'TasaGBPHNL.png'});

const grabParagraphGBPHNL= await page.evaluate(() =>{
    const pgTag = document.querySelector("#cc-time-series-plot > div > div > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td:nth-child(3)");
    return pgTag.innerHTML;

})
console.log("GBP/HNL", grabParagraphGBPHNL);

// JPY/HNL
await page.setUserAgent(header)
await page.goto("https://www.oanda.com/currency-converter/es/?from=JPY&to=HNL&amount=1");
await page.setViewport({ width: 1920, height: 1080 });
await page.screenshot({path: 'TasaJPYHNL.png'});

const grabParagraphJPYHNL= await page.evaluate(() =>{
    const pgTag = document.querySelector("#cc-time-series-plot > div > div > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td:nth-child(3)");
    return pgTag.innerHTML;

})
console.log("JPY/HNL", grabParagraphJPYHNL);

// MXN/HNL

await page.setUserAgent(header)
await page.goto("https://www.oanda.com/currency-converter/es/?from=MXN&to=HNL&amount=1");
await page.setViewport({ width: 1920, height: 1080 });
await page.screenshot({path: 'TasaMXNHNL.png'});

const grabParagraphMXNHNL= await page.evaluate(() =>{
    const pgTag = document.querySelector("#cc-time-series-plot > div > div > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td:nth-child(3)");
    return pgTag.innerHTML;

})
console.log("MXN/HNL", grabParagraphMXNHNL);


// HKD/USD

await page.setUserAgent(header)
await page.goto("https://www.oanda.com/currency-converter/es/?from=HKD&to=USD&amount=1");
await page.setViewport({ width: 1920, height: 1080 });
await page.screenshot({path: 'TasaHKDUSD.png'});

const grabParagraphHKDUSD= await page.evaluate(() =>{
    const pgTag = document.querySelector("#cc-time-series-plot > div > div > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td:nth-child(3)");
    return pgTag.innerHTML;

})
console.log("HKD/USD", grabParagraphHKDUSD);

// HKD/HNL

await page.setUserAgent(header)
await page.goto("https://www.oanda.com/currency-converter/es/?from=HKD&to=HNL&amount=1");
await page.setViewport({ width: 1920, height: 1080 });
await page.screenshot({path: 'TasaHKDUSD.png'});

const grabParagraphHKDHNL= await page.evaluate(() =>{
    const pgTag = document.querySelector("#cc-time-series-plot > div > div > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td:nth-child(3)");
    return pgTag.innerHTML;

})
console.log("HKD/HNL", grabParagraphHKDHNL);

const wb = new xl.Workbook();
    const ws = wb.addWorksheet('Hoja1');

    const data =[
        {
            "from": "Eur",
            "to": "Usd",
            "amount": grabParagraphEURCOP,
        },
        {
            "from": "Eur",
            "to": "Usd",
            "amount": grabParagraphEURUSD,
        },
        {
            "from": "CNY",
            "to": "USD",
            "amount": grabParagraphCNYUSD,
        },
        {
            "from": "CNY",
            "to": "COP",
            "amount": grabParagraphCNYCOP,
        },
        {
            "from": "JPY",
            "to": "USD",
            "amount": grabParagraphJPYUSD,
        },
        {
            "from": "JPY",
            "to": "COP",
            "amount": grabParagraphJPYCOP,
        },
        {
            "from": "BRL",
            "to": "USD",
            "amount": grabParagraphBRLUSD,
        },
        {
            "from": "USD",
            "to": "CLP",
            "amount": grabParagraphUSDCLP,
        },
        {
            "from": "EUR",
            "to": "CLP",
            "amount": grabParagraphEURCLP,
        },
        //Honduras Lunes
        {
            "from": "BRL",
            "to": "HNL",
            "amount": grabParagraphBRLHNL,
        },
        {
            "from": "CNY",
            "to": "HNL",
            "amount": grabParagraphCNYHNL,
        },
        {
            "from": "EUR",
            "to": "HNL",
            "amount": grabParagraphEURHNL,
        },
        {
            "from": "GBP",
            "to": "HNL",
            "amount": grabParagraphGBPHNL,
        },
        {
            "from": "JPY",
            "to": "HNL",
            "amount": grabParagraphJPYHNL,
        },
        {
            "from": "MXN",
            "to": "HNL",
            "amount": grabParagraphMXNHNL,
        },
        {
            "from": "HKD",
            "to": "USD",
            "amount": grabParagraphHKDUSD,
        },
        {
            "from": "HKD",
            "to": "HNL",
            "amount": grabParagraphHKDHNL,
        },

    ];

    const headingColumnNames = [
        "to",
        "from",
        "amount"
    ]
    let headingColumnIndex = 1;
    headingColumnNames.forEach(heading => {
        ws.cell(1,headingColumnIndex++).string(heading);
    });
    let rowIndex = 2;
    data.forEach(record =>{
        let columnIndex = 1;
        Object.keys(record).forEach(columnName => {
            ws.cell(rowIndex, columnIndex++).string(record[columnName])
        });
        rowIndex++;
    });
    wb.write('archivo.xlsx');

    console.log("Proceso Terminado");
} 
else {
    console.log("Las fecha no coincide con el dia Lunes, no se actualiza el Tc de Honduras")

    const wb = new xl.Workbook();
    const ws = wb.addWorksheet('Hoja1');

    const data =[
        {
            "from": "Eur",
            "to": "Usd",
            "amount": grabParagraphEURCOP,
        },
        {
            "from": "Eur",
            "to": "Usd",
            "amount": grabParagraphEURUSD,
        },
        {
            "from": "CNY",
            "to": "USD",
            "amount": grabParagraphCNYUSD,
        },
        {
            "from": "CNY",
            "to": "COP",
            "amount": grabParagraphCNYCOP,
        },
        {
            "from": "JPY",
            "to": "USD",
            "amount": grabParagraphJPYUSD,
        },
        {
            "from": "JPY",
            "to": "COP",
            "amount": grabParagraphJPYCOP,
        },
        {
            "from": "BRL",
            "to": "USD",
            "amount": grabParagraphBRLUSD,
        },
        {
            "from": "USD",
            "to": "CLP",
            "amount": grabParagraphUSDCLP,
        },
        {
            "from": "EUR",
            "to": "CLP",
            "amount": grabParagraphEURCLP,
        },
    ];

    const headingColumnNames = [
        "to",
        "from",
        "amount"
    ]
    let headingColumnIndex = 1;
    headingColumnNames.forEach(heading => {
        ws.cell(1,headingColumnIndex++).string(heading);
    });
    let rowIndex = 2;
    data.forEach(record =>{
        let columnIndex = 1;
        Object.keys(record).forEach(columnName => {
            ws.cell(rowIndex, columnIndex++).string(record[columnName])
        });
        rowIndex++;
    });
    wb.write('archivo.xlsx');
    console.log("Proceso Terminado");
}

await browser.close();

}
    
    

initialization();