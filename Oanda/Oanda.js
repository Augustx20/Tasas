
const puppeteer = require('puppeteer');
// const moment = require ('moment');
// moment.updateLocale('en', null);

//  let hoy = moment().format('dddd');
//  let fechaexacta = moment('2022-11-30').add(7, 'days').format('dddd');
  

const Oanda = async () => {

    // if (hoy == fechaexacta){

    //    enlaces.push(
    //     "https://www.oanda.com/currency-converter/es/?from=BRL&to=HNL&amount=1",
    //     "https://www.oanda.com/currency-converter/es/?from=CNY&to=HNL&amount=1",
    //     "https://www.oanda.com/currency-converter/es/?from=EUR&to=HNL&amount=1",
    //     "https://www.oanda.com/currency-converter/es/?from=GBP&to=HNL&amount=1",
    //     "https://www.oanda.com/currency-converter/es/?from=JPY&to=HNL&amount=1",
    //     "https://www.oanda.com/currency-converter/es/?from=MXN&to=HNL&amount=1",
    //     "https://www.oanda.com/currency-converter/es/?from=HKD&to=USD&amount=1",
    //     "https://www.oanda.com/currency-converter/es/?from=HKD&to=HNL&amount=1"
    //    )
 
          
    //  } else{
    //       console.log("No se ejecutara Oanda Honduras")
    //   }
    const enlaces = [

        "https://www.oanda.com/currency-converter/es/?from=EUR&to=USD&amount=1",
        "https://www.oanda.com/currency-converter/es/?from=EUR&to=COP&amount=1",
        "https://www.oanda.com/currency-converter/es/?from=EUR&to=COP&amount=1",
        "https://www.oanda.com/currency-converter/es/?from=CNY&to=USD&amount=1",
        "https://www.oanda.com/currency-converter/es/?from=JPY&to=USD&amount=1",
        "https://www.oanda.com/currency-converter/es/?from=CNY&to=COP&amount=1",
        "https://www.oanda.com/currency-converter/es/?from=JPY&to=COP&amount=1",
        "https://www.oanda.com/currency-converter/es/?from=BRL&to=USD&amount=1",
        ]
    
        const books = [];
        const browser = await puppeteer.launch({ handless: false });
        const page = await browser.newPage();
            for(let enlace of enlaces){
                
                await page.goto(enlace);
                await page.waitForSelector('#cc-time-series-plot');
                await page.screenshot({path: 'nombre.jpg'});
    
                 const book = await page.evaluate(()=>{
                    const tmp = {};
                    tmp.Data = document.querySelector("#cc-time-series-plot > div > div > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td:nth-child(2)").innerHTML;
                    return tmp;
                });
                books.push(book);
            }
            console.log(books)
            await browser.close()
}
module.exports = {
    Oanda
}