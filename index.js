const Uruguay = require('./TasasUruguay/Uruguay')
const Chile = require('./TasasChile/Chile')
const Oanda = require('./Oanda/Oanda')
const Peru = require('./TasasPeru/Peru');
const Colombia = require('./TasaColombia/Colombia')
const CostaRica = require('./TasasCostaRica/CostaRica')

/*First Test wirh Pupperteer in JavaScript and Copie the secong part in Oanda, so i want copie the principal input conver */
console.log("Incio de Busqueda");

   CostaRica.BancoCostaRica();
   Chile.llamada();
   Uruguay.BancoUruguayUSD();
   Peru.BancoPeruEur();
   Peru.BancoPeruUSD();
   Oanda.Oanda();
   Colombia.Colombia();
   

   
