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
 
  async function linea5() {
 
         const grabParagraphPeLineaTex5Eur = await page.evaluate((linea5) => {
             const pgTag = document.querySelector("#ctl00_cphContent_rgTipoCambio_ctl00__5 > td.APLI_fila3");
             return pgTag.innerHTML;
         });
          let linea5 = console.log(grabParagraphPeLineaTex5Eur)
         
 
     }
 console.log(linea5);
 
 
 async function linea6() {
     const grabParagraphPeLineaTex6Eur = await page.evaluate(() =>{
         const pgTag = document.querySelector("#ctl00_cphContent_rgTipoCambio_ctl00__6 > td.APLI_fila3");
         return pgTag.innerHTML;
         })  
           return grabParagraphPeLineaTex6Eur
     
 }
 
 async function linea7(){
     const grabParagraphPeLineaTex7Eur = await page.evaluate(() =>{
         const pgTag = document.querySelector("#ctl00_cphContent_rgTipoCambio_ctl00__7 > td.APLI_fila3");
         return pgTag.innerHTML;
         });
       return grabParagraphPeLineaTex7Eur
 }
 
 async function linea8() {
         const grabParagraphPeLineaTex8Eur = await page.evaluate(() =>{
         const pgTag = document.querySelector("#ctl00_cphContent_rgTipoCambio_ctl00__7 > td.APLI_fila3");
         return pgTag.innerHTML;
         });
 
         if(grabParagraphPeLineaTex8Eur = false){
             console.error();
         }
 
         return grabParagraphPeLineaTex8Eur
 }
  
 const TasaEur = "Euro";
 
 switch (TasaEur) {
         case linea5:
             
             const grabParagraphPeLinea5Eur = await page.evaluate(() =>{
             const pgTag = document.querySelector("#ctl00_cphContent_rgTipoCambio_ctl00__5 > td:nth-child(3)");
             return pgTag.innerHTML;
         })
         newFunction(grabParagraphPeLinea5Eur);
         break;
         case linea6:
                 const grabParagraphPeLinea6Eur = await page.evaluate(() =>{
                 const pgTag = document.querySelector("#ctl00_cphContent_rgTipoCambio_ctl00__6 > td:nth-child(3)");
                 return pgTag.innerHTML;
                 })
                 console.log("Banco Peru", grabParagraphPeLinea6Eur);
         break;
         case linea7:
                 const grabParagraphPeLinea7Eur = await page.evaluate(() =>{
                 const pgTag = document.querySelector("#ctl00_cphContent_rgTipoCambio_ctl00__7 > td:nth-child(3)");
                 return pgTag.innerHTML;
                 })
                 console.log("Banco Peru", grabParagraphPeLinea7Eur);
             break;            
         case linea8:
             try{
                 const grabParagraphPeLinea8Eur = await page.evaluate(() =>{
                 const pgTag = document.querySelector("#ctl00_cphContent_rgTipoCambio_ctl00__8 > td:nth-child(3)");
                 return pgTag.innerHTML;
                 });
 
             console.log("Banco Peru", grabParagraphPeLinea8Eur);
 
             }
                 catch (error) {console.log("Tabla no llega a la linea 8")  
                     }
                 break;
         };

         await browser.close()

}

module.exports = {
 PagePeru
}