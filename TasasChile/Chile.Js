const puppeteer = require('puppeteer');
const Numero = require('../Valores/valores')

const BancoChileUSD = async () => {
    
    /* Banco Chile  Usd*/

    const browser = await puppeteer.launch({heandless: false });
    const page = await browser.newPage();
    await page.goto("https://si3.bcentral.cl/Indicadoressiete/secure/Indicadoresdiarios.aspx");
    await page.setViewport({ width: 1920, height: 1080 });
    await page.screenshot({path: '02-Banco Chile.png'});

    const grabParagraphBancoChileUsd = await page.evaluate(() =>{
        const pgTag = document.querySelector("#lblValor1_3");
        return pgTag.innerHTML;
    });

    console.log("Banco Chile", grabParagraphBancoChileUsd);
    await browser.close()
    Numero.ArrayVar.push(grabParagraphBancoChileUsd)

}

const BancoChileEUR = async () => {

/* Banco Chile  Eur*/
    const browser = await puppeteer.launch({heandless: false });
    const page = await browser.newPage();
    await page.goto("https://si3.bcentral.cl/Indicadoressiete/secure/Indicadoresdiarios.aspx");
    await page.setViewport({ width: 1920, height: 1080 });

    const grabParagraphBancoChileEur= await page.evaluate(() =>{
        const pgTag = document.querySelector("#lblValor1_5");
        return pgTag.innerHTML;
    });

    console.log("Banco Chile", grabParagraphBancoChileEur);
    await browser.close()
    Numero.ArrayVar.push(grabParagraphBancoChileEur)
}

const OandaChileUSD = async () => {
    
const browser = await puppeteer.launch({heandless: false });
const page = await browser.newPage();
await page.goto("https://www.oanda.com/currency-converter/es/?from=USD&to=CLP&amount=1");
await page.setViewport({ width: 1200, height:750 });
await page.screenshot({path: '13-Tasa USDCLP.png'});

const grabParagraphUSDCLP= await page.evaluate(() =>{
    const pgTag = document.querySelector("#cc-time-series-plot > div > div > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td:nth-child(3)");
    return pgTag.innerHTML;
})
console.log("USD/CLP", grabParagraphUSDCLP);
await browser.close()
Numero.ArrayVar.push(grabParagraphUSDCLP)
}

/* EURCLP */

const OandaChileEUR = async () => {
    const browser = await puppeteer.launch({heandless: false });
    const page = await browser.newPage();
    await page.goto("https://www.oanda.com/currency-converter/es/?from=EUR&to=CLP&amount=1");
    page.setDefaultNavigationTimeout(25);
    await page.setViewport({ width: 1200, height:750 });
    await page.screenshot({path: '14-Tasa EURCLP.png'});

    const grabParagraphEURCLP= await page.evaluate(() =>{
    const pgTag = document.querySelector("#cc-time-series-plot > div > div > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td:nth-child(3)");
    return pgTag.innerHTML;
})
console.log("EUR/CLP", grabParagraphEURCLP);

await browser.close()
Numero.ArrayVar.push(grabParagraphEURCLP)

}
 
const llamada = async () =>{
    BancoChileUSD(), 
    BancoChileEUR(), 
    OandaChileUSD(), 
    OandaChileEUR()
 }

module.exports = {
   llamada,
}