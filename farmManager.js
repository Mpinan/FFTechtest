const Field = require("./field")
const ChemicalProvider = require("./chemicalProvider")

let cowfield = new Field("Cowfield", "300 metres", "400 metres", "Barley", "18th February")
let top = new Field("Top", "200 metres", "600 metres", "Barley", "22nd December")
let hillside = new Field("Hillside", "600 metres", "400 metres", "Winter Wheat", "5th February")
let bigField = new Field("Big Field", "800 metres", "500 metres", "Sugar Beet", "9th January")
let upperRiver = new Field("Upper River", "200 metres", "200 metres", "Barley", "18th January")
let lowerRiver = new Field("Lower River", "500 metres", "100 metres", "Sugar Beet", "8th February")
let southside = new Field("South Side", "400 metres", "400 metres", "Winter Wheat", "12th January")

class FarmManager {
  constructor() {
    this.fields = [cowfield, top, hillside, bigField, upperRiver, lowerRiver, southside]
    this.currentField;
    this.currentChemical;
    this.chemicalProvider = new ChemicalProvider
    this.chemicalsNames = []
  }



  checkField = (fieldName) => {
    this.fields.forEach(field => {
      if (field.name === fieldName) {
        this.currentField = field
      }
    })

    return this.currentField
  }

  checkLastSprayed = () => {
    return this.currentField.lastSprayed
  }

  calculateTotalPrice = () => {
    let hectares = this.currentField.getHectares()
    let pricePerLitre = this.currentChemical.getPricePerLitre()
    let totalPrice = hectares * pricePerLitre
    return `£${totalPrice}`

  }

  checkChemicalsFromProvider = () => {
    let chemicals = this.chemicalProvider.getChemicals()
    let names;
    chemicals.map(chemical => {
      names = chemical.getChemicalName()
      console.log(names)
    })
    // return
    // console.log(this.chemicalProvider)
  }


  orderChemical = (chemicalName) => {

    let chemicals = this.chemicalProvider.getChemicals()

    chemicals.forEach(chemical => {
      if (chemicalName === chemical.name) {
        this.currentChemical = chemical
      }
    })
    return this.currentChemical
  }

  checkChemicalArrival = () => {
    let date = this.currentField.getFormatedDate()
    console.log(date)
    let frequency = this.currentChemical.getApplicationsFrequency().replace(/\D/g, "")
    
    let weeks = parseInt(frequency) * 7

    let arrivalDate = date.setDate(date.getDate() + weeks)
    // .replace(/\D/g, "")
    console.log(new Date(arrivalDate))
    console.log(frequency.replace(/\D/g, ""))
  }






}

module.exports = FarmManager