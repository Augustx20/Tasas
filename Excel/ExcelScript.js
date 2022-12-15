const puppeteer = require('puppeteer');
const randomUseragent = require('random-useragent');
const moment = require ('moment');
const xl = require('excel4node');
const PageHonduras = require('../TasasHonduras/Honduras');



const PageExcel = async () => {
    
    let hoy = moment().format('dddd');
    let fechaexacta = moment('2022-11-28').add(7, 'days').format('dddd');
    
    if (hoy == fechaexacta){
        console.log("son el mismo dia");
    
        PageHonduras.PageHonduras(); // honduras y guatemala
    
    } else {
        console.log("Hoy no se ejecutara la Tasa de Honduras")
        const wb = new xl.Workbook();
        const ws = wb.addWorksheet('Hoja1');

        const style = wb.createStyle({
            fill: {
                type: 'pattern',
                patternType: 'solid',
                bgColor: '#0D4C92',
                fgColor: '#0D4C92',
              },
              font: {
                color: '#FFFFFF',
                size: 13,
              }
        });
        const styleLine2 = wb.createStyle({
            fill: {
                type: 'pattern',
                patternType: 'solid',
                bgColor: '#A5F1E9',
                fgColor: '#A5F1E9',
              },
              font: {
                size: 11,
              }
              
        });
        
        //Primera Linea
        ws.cell(1, 1)
        .style(style);
        ws.cell(1, 2)
        .style(style)
        .string('OANDA');
        ws.cell(1,3)
        .style(style);

        ws.cell(1,5)
        .style(style);
        ws.cell(1,6)
        .style(style)
        .string('BANCO');
        ws.cell(1,7)
        .style(style);

        //Segunda Linea
        ws.cell(2, 1)
        .style(styleLine2)
        .string('TO');
        ws.cell(2, 2)
        .style(styleLine2)
        .string('FROM');
        ws.cell(2,3)
        .style(styleLine2) 
        .string('AMOUNT');

        ws.cell(2,5)
        .style(styleLine2)
        .string('PAISES');
        ws.cell(2,6)
        .style(styleLine2)
        .string('USD');
        ws.cell(2,7)
        .style(styleLine2)
        .string('EUR');

        // OANDA TO
        ws.cell(3,1)
        .string('Eur')
        ws.cell(4,1)
        .string('Eur')
        ws.cell(5,1)
        .string('CNY')
        ws.cell(6,1)
        .string('CNY')
        ws.cell(7,1)
        .string('JPY')
        ws.cell(8,1)
        .string('JPY')
        ws.cell(9,1)
        .string('BRL')
        ws.cell(10,1)
        .string('USD')
        ws.cell(11,1)
        .string('EUR')

        // OANDA FROM
        ws.cell(3,2)
        .string('USD')
        ws.cell(4,2)
        .string('COP')
        ws.cell(5,2)
        .string('USD')
        ws.cell(6,2)
        .string('COP')
        ws.cell(7,2)
        .string('USD')
        ws.cell(8,2)
        .string('COP')
        ws.cell(9,2)
        .string('USD')
        ws.cell(10,2)
        .string('CLP')
        ws.cell(11,2)
        .string('CLP')

        // Exchange Rate
        ws.cell(3,2)
        .string('USD')
        ws.cell(4,2)
        .string('COP')
        ws.cell(5,2)
        .string('USD')
        ws.cell(6,2)
        .string('COP')
        ws.cell(7,2)
        .string('USD')
        ws.cell(8,2)
        .string('COP')
        ws.cell(9,2)
        .string('USD')
        ws.cell(10,2)
        .string('CLP')
        ws.cell(11,2)
        .string('CLP')


wb.write('archivo.xlsx');
        

    }
    

    }

    module.exports  = {
        PageExcel
    }
