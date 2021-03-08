const FarmManager = require("./farmManager")
const Field = require("./field")
farmManager = new FarmManager

let cowfield = new Field("Cowfield", "300 metres", "400 metres", "Barley", "18th February")
let top = new Field("Top", "200 metres", "600 metres", "Barley", "22nd December")
let hillside = new Field("Hillside", "600 metres", "400 metres", "Winter Wheat", "5th February")
let bigField = new Field("Big Field", "800 metres", "500 metres", "Sugar Beet", "9th January")
let upperRiver = new Field("Upper River", "200 metres", "200 metres", "Barley", "18th January")
let lowerRiver = new Field("Lower River", "500 metres", "100 metres", "Sugar Beet", "8th February")
let southside = new Field("South Side", "400 metres", "400 metres", "Winter Wheat", "12th January")




farmManager.addField(cowfield)
farmManager.addField(top)
farmManager.addField(hillside)
farmManager.addField(bigField)
farmManager.addField(upperRiver)
farmManager.addField(lowerRiver)
farmManager.addField(southside)



console.log("")
farmManager.checkAllFields()

console.log("")
console.log("Selecting a new Field")
// Select new field: 
//Cowfield, Top, Hillside, Big Field, Upper River, Lower River, South Side
farmManager.selectField("Hillside")

console.log("")
console.log("Checking Last spread")
farmManager.checkLastSprayed()

console.log("")
console.log("Checking chemicals from provider")
farmManager.checkChemicalsFromProvider()

console.log("")
// Select new chemical: Ryezapon, Quadranis, Berbelikar
console.log("Order new chemical")
farmManager.orderChemical("Ryezapon")


console.log("")
console.log("Checking chemical arrival and application day")
farmManager.checkChemicalArrival()
