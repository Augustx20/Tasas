const puppeteer = require('puppeteer');
const randomUseragent = require('random-useragent');
const moment = require ('moment');
const xl = require("excel4node");
const PageWeb = require('./TasasPage/Page')
const PageChile = require('./TasasChile/Chile')
const PageColombia = require('./TasasColombia/Colombia')
const PagePeru = require('./TasasPeru/Peru');
const ExcelScript = require('./Excel/ExcelScript')
moment.updateLocale('en', null);

/*First Test wirh Pupperteer in JavaScript and Copie the secong part in Oanda, so i want copie the principal input conver */
console.log("Incio de Busqueda");

    PageWeb.PageWeb(); // Costa Rica Uruguay
    PageChile.PageChile();
    PagePeru.PagePeru();
    PageColombia.PageColombia();
    ExcelScript.PageExcel();