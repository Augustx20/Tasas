const puppeteer = require('puppeteer');
const randomUseragent = require('random-useragent');

 const PageWeb = async () => {

     // Banco Costa Rica
    const header = randomUseragent.getRandom()
    const browser = await puppeteer.launch({heandless: false });
    const page = await browser.newPage();
    await page.setUserAgent(header)
    await page.goto("https://gee.bccr.fi.cr/indicadoreseconomicos/Cuadros/frmVerCatCuadro.aspx?idioma=1&CodCuadro=%20400");
    await page.setViewport({ width: 1920, height: 1080 });
    await page.screenshot({path: '04-Banco Costa Rica.png'});
    
    const grabParagraphBancoCr= await page.evaluate(() =>{
        const pgTag = document.querySelector("#theTable400 > tbody > tr:nth-child(2) > td:nth-child(3) > table > tbody > tr > td > table > tbody > tr:nth-child(30) > td");
        return pgTag.innerHTML;
    });
    
    let procesado
    procesado = grabParagraphBancoCr.replace(/\s+/g," ");
    console.log("Banco Costa Rica", procesado);
    
    /* Banco Uruguay*/
    
    try {
        await page.setUserAgent(header)
        await page.goto("http://www.bcu.gub.uy/Paginas/Default.aspx");
        await page.setViewport({ width: 1700, height: 1800 });
        await page.screenshot({path: '03-Banco Uruguay.png'});
        
        const grabParagraphBancoUru= await page.evaluate(() =>{
            const pgTag = document.querySelector("#\\32 225 > div > div > span:nth-child(2)");
            return pgTag.innerHTML;
        
        });
        console.log("Banco Uruguay", grabParagraphBancoUru);
            
    } catch (error) {
            console.error(error);    
            }
    
            await browser.close()

}

module.exports = {
    PageWeb
}