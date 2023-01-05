const Uruguay = require("./TasasUruguay/Uruguay");
const Chile = require('./TasasChile/Chile');
const Oanda = require('./Oanda/Oanda');
const Peru = require('./TasasPeru/Peru');
const Colombia = require('./TasaColombia/Colombia');
const CostaRica = require('./TasasCostaRica/CostaRica');
const Excel = require('./ExcelScript/Excel')

/*First Tests wirh Pupperteer in JavaScript and Copie the secong part in Oanda, so i want copie the principal input conver */
console.log("Incio de Busqueda");

   Colombia.Colombia();
   CostaRica.BancoCostaRica();
   Peru.BancoPeruEur();
   Peru.BancoPeruUSD();
   Chile.BancoChile();
   Uruguay.BancoUruguayUSD();
   setTimeout(() => {
      Oanda.Oanda();
   }, 20000); 
   
setTimeout(() => {
   Excel.SaveExcel();
}, 50000);
   
