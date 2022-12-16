const puppeteer = require('puppeteer');
const randomUseragent = require('random-useragent');

 const BancoCostaRica = async () => {

     // Banco Costa Rica
    const header = randomUseragent.getRandom()
    const browser = await puppeteer.launch({heandless: false });
    const page = await browser.newPage();
    await page.setUserAgent(header)
    await page.goto("https://gee.bccr.fi.cr/indicadoreseconomicos/Cuadros/frmVerCatCuadro.aspx?idioma=1&CodCuadro=%20400");
    page.setDefaultNavigationTimeout(0);
    await page.setViewport({ width: 1920, height: 1080 });
    await page.screenshot({path: '04-Banco Costa Rica.png'});
    
    const grabParagraphBancoCr= await page.evaluate(() =>{
        const pgTag = document.querySelector("#theTable400 > tbody > tr:nth-child(2) > td:nth-child(3) > table > tbody > tr > td > table > tbody > tr:nth-child(30) > td");
        return pgTag.innerHTML;
    });
    
    let procesado
    procesado = grabParagraphBancoCr.replace(/\s+/g," ");
    console.log("Banco Costa Rica", procesado);
    await browser.close()
}
module.exports ={

    BancoCostaRica
}