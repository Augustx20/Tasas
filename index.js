const moment = require ('moment');
const Uruguay = require('./TasasUruguay/Uruguay')
const Chile = require('./TasasChile/Chile')
const Colombia = require('./TasasColombia/TestColombia')
const Peru = require('./TasasPeru/Peru');
const Honduras = require('./TasasHonduras/Honduras');
const CostaRica = require('./TasasCostaRica/CostaRica')
moment.updateLocale('en', null);

/*First Test wirh Pupperteer in JavaScript and Copie the secong part in Oanda, so i want copie the principal input conver */
console.log("Incio de Busqueda");

//  let hoy = moment().format('dddd');
//  let fechaexacta = moment('2022-11-28').add(7, 'days').format('dddd');
  
   CostaRica.BancoCostaRica();
   Chile.llamada();
   Uruguay.BancoUruguayUSD();
   Peru.BancoPeruEur();
   Peru.BancoPeruUSD();
   Colombia.Prueba();
   


   //  if (hoy == fechaexacta){

   //     console.log("Hoy no se ejecutara la Tasa de Honduras")

   //       Honduras.PageHonduras();
   //  } else{
   //       console.log("No se ejecutara la tasa de Honduras")
   //   }



    
