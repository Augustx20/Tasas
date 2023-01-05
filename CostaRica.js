const puppeteer = require('puppeteer');
const Cr = []
const url = "https://gee.bccr.fi.cr/indicadoreseconomicos/Cuadros/frmVerCatCuadro.aspx?idioma=1&CodCuadro=%20400"
 const BancoCostaRica = async () => {
    
     // Banco Costa Rica
    const browser = await puppeteer.launch({heandless: false });
    const page = await browser.newPage();
    await page.goto(url);
    page.setDefaultNavigationTimeout(0);
    await page.setViewport({ width: 1920, height: 1080 });
    
        const grabParagraphBancoCr= await page.evaluate(() =>{
        const pgTag = document.querySelector("#theTable400 > tbody > tr:nth-child(2) > td:nth-child(3) > table > tbody > tr > td > table > tbody > tr:nth-child(30) > td").innerHTML;
        return pgTag;
    });
    
    let procesado
    procesado = grabParagraphBancoCr.replace(/\s+/g," ");
    console.log("Banco Costa Rica", procesado);
    await browser.close()

Cr.push(procesado);
}
let valor = Cr[0];
let ObjectoCr = {
    name: valor,}

    console.log(valor)
module.exports ={
    valor ,
    BancoCostaRica
}