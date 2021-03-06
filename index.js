const FarmManager = require("./farmManager")










// let appleTreeFarm = new Farm([cowfield, top, hillside, bigField, upperRiver, lowerRiver, southside], [ryezapon, berbelikar, quadranis])
farmManager = new FarmManager
console.log(farmManager.checkField("Cowfield"))
console.log(farmManager.checkLastSprayed())
console.log(farmManager.checkChemicalsFromProvider())
console.log(farmManager.orderChemical("Ryezapon"))
console.log(farmManager.checkChemicalArrival())
// console.log(farmManager.calculateTotalPrice())