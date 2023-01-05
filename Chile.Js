const puppeteer = require('puppeteer');

const url = "https://si3.bcentral.cl/Indicadoressiete/secure/Indicadoresdiarios.aspx";

const BancoChile = async () => {
    
    /* Banco Chile  Usd*/

    const browser = await puppeteer.launch({heandless: false });
    const page = await browser.newPage();
    await page.goto(url);
    await page.setViewport({ width: 1920, height: 1080 });

    const grabParagraphBancoChileUsd = await page.evaluate(() =>{
        const pgTag = document.querySelector("#lblValor1_3").innerHTML;
        return pgTag;
    });

    console.log("Banco Chile", grabParagraphBancoChileUsd);


/* Banco Chile  Eur*/
    await page.goto(url);
    await page.setViewport({ width: 1920, height: 1080 });

    const grabParagraphBancoChileEur= await page.evaluate(() =>{
        const pgTag = document.querySelector("#lblValor1_5").innerHTML;
        return pgTag;
    });

    console.log("Banco Chile", grabParagraphBancoChileEur);
   
    await browser.close()

}



module.exports = {
    BancoChile,
    
}