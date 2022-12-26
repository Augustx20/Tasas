const puppeteer = require('puppeteer');
const randomUseragent = require('random-useragent');
const Excel = require('../Excel/ExcelScript')
const Numero = require('../Valores/valores')

const BancoUruguayUSD = async () => {
    /* Banco Uruguay*/

    const ArrayUY = []
        const header = randomUseragent.getRandom()
        const browser = await puppeteer.launch({heandless: false });
        const page = await browser.newPage();
        await page.setUserAgent(header)
        await page.goto("http://www.bcu.gub.uy/Paginas/Default.aspx");
        await page.setViewport({ width: 1700, height: 1800 });
        await page.screenshot({path: '03-Banco Uruguay.png'});
        
        const grabParagraphBancoUru= await page.evaluate(() =>{
            const pgTag = document.querySelector("#\\32 225 > div > div > span:nth-child(2)");
            return pgTag.innerHTML;
        
        });
        //console.log("Banco Uruguay", grabParagraphBancoUru);
        ArrayUY.push(grabParagraphBancoUru);
            
   
    
            await browser.close()

let valor = ArrayUY[0];
console.log("Banco Uruguay " + valor);


Numero.ArrayVar.push(valor)
}


module.exports = {
    BancoUruguayUSD
}