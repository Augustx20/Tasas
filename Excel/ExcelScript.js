const ExcelJS = require('exceljs')

const saveExcel = (data) => {
    const workbook = new ExcelJS.Workbook()

    const filename = 'archivo.xlsx'

    const sheet = workbook.addWorksheet('resultado')

    const reColumns =[
        {header: 'BANCO UYU', key: 'UYU'},
        {header: 'BANCO COP', key: 'COP'},
        {header: 'BANCO CR', key: 'CR'},
        {header: 'BANCO PERU USD', key: 'PER'},
        {header: 'BANCO PERU EUR', key: 'PUS'},
        {header: 'BANCO CHILE USD', key: 'CUSD'},
        {header: 'BANCO CHILE EUR', key: 'CEUR'},
        {header: 'CLP USD', key: 'CLPUSD'},
        {header: 'CLP EUR', key: 'CLPEUR'},
        {header: 'EUR COP', key: 'EURCOP'},
        {header: 'EUR USD', key: 'EURUSD'},
        {header: 'CNY USD', key: 'CNYUSD'},
        {header: 'JPY USD', key: 'JPYUSD'},
        {header: 'JPY COP', key: 'JPYCOP'},
        {header: 'CNY COP', key: 'CNYCOP'},
        {header: 'BRL USD', key: 'BRLUSD'},
    ]

    sheet.columns = reColumns
    sheet.addRows(data)
    workbook.xlsx.writeFile(filename).then((e)=>{
        console.log('Creado Exitosamente')
    })

}

module.exports = {
saveExcel
}
