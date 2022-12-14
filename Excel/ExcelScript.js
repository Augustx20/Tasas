const puppeteer = require('puppeteer');
const randomUseragent = require('random-useragent');
const moment = require ('moment');
const xl = require("excel4node");
const PageHonduras = require('../TasasHonduras/Honduras')


const PageExcel = async () => {
    
    let hoy = moment().format('dddd');
    let fechaexacta = moment('2022-11-28').add(7, 'days').format('dddd');
    
    if (hoy == fechaexacta){
        console.log("son el mismo dia");
    
        PageHonduras.PageHonduras(); // honduras y guatemala
    
    } else {
        console.log("Hoy no se ejecutara la Tasa de Honduras")
    }
    

    }

    module.exports  = {
        PageExcel
    }
