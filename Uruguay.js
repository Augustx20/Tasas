const puppeteer = require('puppeteer');
const randomUseragent = require('random-useragent');

const url = "https://www.bcu.gub.uy/Estadisticas-e-Indicadores/Paginas/Cotizaciones.aspx "
const BancoUruguayUSD = async () => {
    /* Banco Uruguay*/

    const ArrayUY = []
    
    const header = randomUseragent.getRandom()
        const browser = await puppeteer.launch(
            {
                heandless: false,
                executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
            }
            );
        const page = await browser.newPage();
        await page.setUserAgent(header)
        await page.goto(url);
        await page.waitForSelector('#ctl00_ctl63_g_0723770d_f942_45cc_80db_28dc7fa543a2_ctl00_lstCotizaciones');
        await page.setViewport({ width: 1920, height: 1080 });
        
        const grabParagraphBancoUru= await page.evaluate(() =>{
            const pgTag = document.querySelector("#ctl00_ctl63_g_0723770d_f942_45cc_80db_28dc7fa543a2_ctl00_lstCotizaciones > tbody > tr:nth-child(1) > td.Venta.alt");
            return pgTag.innerHTML;
        
        });
        //console.log("Banco Uruguay", grabParagraphBancoUru);
        ArrayUY.push(grabParagraphBancoUru);
            
        await browser.close()
    
           

let valor = ArrayUY[0];
console.log("Banco Uruguay " + valor);


}


module.exports = {
    BancoUruguayUSD
}