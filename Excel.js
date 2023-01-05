const xlsx = require('xlsx');
const CostaRica = require('../TasasCostaRica/CostaRica');
let hol = CostaRica.valor;
const SaveExcel = async () => {
var workbook = xlsx.readFile("datos.xlsx");
var worksheet = workbook.Sheets['Hoja1'];

let hola = "0"
let CR = CostaRica.valor
var worksheet = xlsx.utils.aoa_to_sheet([
    [hola, "B1", "C1"],
    ["A2", "B2", CR],
    ["A3", "B3", "Chau"]
  ]);

  xlsx.utils.book_append_sheet(workbook, worksheet);

  xlsx.writeFile(workbook, "datos.xlsx");
  
  console.log("Proceso hecho")
}

module.exports = {
    SaveExcel
}