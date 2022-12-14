 const puppeteer = require('puppeteer');
 const randomUseragent = require('random-useragent');
 
 
 const PagePeru = async () => {


 /* Banco  Peru Usd*/
const header = randomUseragent.getRandom()
const browser = await puppeteer.launch({heandless: false });
const page = await browser.newPage();   
 await page.setUserAgent(header)
 await page.goto("https://www.sbs.gob.pe/app/pp/SISTIP_PORTAL/Paginas/Publicacion/TipoCambioPromedio.aspx");
 await page.setViewport({ width: 1920, height: 1080 });
 await page.screenshot({path: '02-Banco Peru.png'});

 const grabParagraphBancoPeruUsd= await page.evaluate(() =>{
     const pgTag =document.querySelector("#ctl00_cphContent_rgTipoCambio_ctl00__0 > td:nth-child(3)");
     return pgTag.innerHTML;
 });

 console.log("Banco Peru", grabParagraphBancoPeruUsd);

 
 /* Banco Peru Eur*/
 await page.setUserAgent(header)
 await page.goto("https://www.sbs.gob.pe/app/pp/SISTIP_PORTAL/Paginas/Publicacion/TipoCambioPromedio.aspx");
 await page.setViewport({ width: 1920, height: 1080 });
 await page.screenshot({path: 'BancoPeur.png'});



        const grabParagraphPeLineaTex5Eur = await page.evaluate((linea5) => {
             const pgTag = document.querySelector("#ctl00_cphContent_rgTipoCambio_ctl00__5 > td.APLI_fila3");
            return pgTag.innerHTML;
        })

    
     const grabParagraphPeLineaTex6Eur = await page.evaluate(() =>{
         const pgTag = document.querySelector("#ctl00_cphContent_rgTipoCambio_ctl00__6 > td.APLI_fila3");
         return pgTag.innerHTML;
        })  
        

     const grabParagraphPeLineaTex7Eur = await page.evaluate(() =>{
         const pgTag = document.querySelector("#ctl00_cphContent_rgTipoCambio_ctl00__7 > td.APLI_fila3");
         return pgTag.innerHTML;
        });
 
 
         const grabParagraphPeLineaTex8Eur = await page.evaluate(() =>{
         const pgTag =                      document.querySelector("#ctl00_cphContent_rgTipoCambio_ctl00__8 > td.APLI_fila3");
         return pgTag.innerHTML;
        });
       
  
 const TasaEur = "Euro";
let linea5 = grabParagraphPeLineaTex5Eur;
let linea6 = grabParagraphPeLineaTex6Eur;
let linea7 = grabParagraphPeLineaTex7Eur;
let linea8 =  grabParagraphPeLineaTex8Eur;

const Miarray = [linea5, linea6 ,linea7 ,linea8 ];
 console.log(Miarray);
 
 
 switch (TasaEur) {
         case linea5:
             
             const grabParagraphPeLinea5Eur = await page.evaluate(() =>{
             const pgTag = document.querySelector("#ctl00_cphContent_rgTipoCambio_ctl00__5 > td:nth-child(3)");
             return pgTag.innerHTML;
         })
         Miarray.push(grabParagraphPeLinea5Eur);
         break;
         case linea6:
                 const grabParagraphPeLinea6Eur = await page.evaluate(() =>{
                 const pgTag = document.querySelector("#ctl00_cphContent_rgTipoCambio_ctl00__6 > td:nth-child(3)");
                 return pgTag.innerHTML;
                 })
                 Miarray.push(grabParagraphPeLinea6Eur);
         break;
         case linea7:
                 const grabParagraphPeLinea7Eur = await page.evaluate(() =>{
                 const pgTag = document.querySelector("#ctl00_cphContent_rgTipoCambio_ctl00__7 > td:nth-child(3)");
                 return pgTag.innerHTML;
                 })
                 Miarray.push(grabParagraphPeLinea7Eur);
             break;            
         case linea8:
         const grabParagraphPeLinea8Eur = await page.evaluate(() =>{
    const pgTag =document.querySelector("#ctl00_cphContent_rgTipoCambio_ctl00__8 > td:nth-child(3)");
                 return pgTag.innerHTML;
                 });
                 Miarray.push(grabParagraphPeLinea8Eur);
                break;
         };
         await browser.close()

let numero = Miarray.pop();
console.log("Banco Peru " + numero);

}




module.exports = {
 PagePeru
}