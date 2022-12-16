const puppeteer = require('puppeteer');
const randomUseragent = require('random-useragent');
const moment = require ('moment');
const xl = require("excel4node");
const Uruguay = require('./TasasUruguay/Uruguay')
const Chile = require('./TasasChile/Chile')
const Colombia = require('./TasasColombia/Colombia')
const Peru = require('./TasasPeru/Peru');
const Honduras = require('./TasasHonduras/Honduras');
const CostaRica = require('./TasasCostaRica/CostaRica')
moment.updateLocale('en', null);

/*First Test wirh Pupperteer in JavaScript and Copie the secong part in Oanda, so i want copie the principal input conver */
console.log("Incio de Busqueda");

// let hoy = moment().format('dddd');
// let fechaexacta = moment('2022-11-28').add(7, 'days').format('dddd');
  
    Chile.llamada();
    Colombia.llamadaColombia();
    Uruguay.BancoUruguayUSD();
    Peru.BancoPeruEur();
    Peru.BancoPeruUSD();
    CostaRica.BancoCostaRica();
   

    
    

    // if (hoy == fechaexacta){

    //     console.log("Hoy no se ejecutara la Tasa de Honduras")

    //     PageHonduras.PageHonduras();
    // } else{
    //     console.log("No se ejecutara la tasa de Honduras")
    // }



    
