const ChemicalProvider = require("./chemicalProvider")

class FarmManager {
  constructor() {
    this.fields = []
    this.currentField;
    this.currentChemical;
    this.chemicalProvider = new ChemicalProvider
    this.chemicalsNames = []
  }

  addField = (field) => {
    this.fields.push(field)
  }

  selectField = (fieldName) => {

    let logField;
    this.fields.forEach(field => {
      if (field.name === fieldName) {
        this.currentField = field
        logField = field.name + "    ||    " + field.width + "    ||    " + field.length + "    ||    " + field.crop + "    ||    " + field.lastSprayed
      }
    })
    console.log(logField)
    return this.currentField
  }

  checkAllFields = () => {
    console.log("Name        ||     Width     ||     Length     ||     Crop     ||     Last Sprayed")
    console.log("")
    this.fields.map(field => {
      console.log(field.name + "    ||    " + field.width + "    ||    " + field.length + "    ||    " + field.crop + "    ||    " + field.lastSprayed)
    })
  }

  checkLastSprayed = () => {
    console.log(this.currentField.lastSprayed)
    return this.currentField.lastSprayed
  }

  calculateTotalPrice = () => {
    let hectares = this.currentField.getHectares()
    let pricePerLitre = this.currentChemical.getPricePerLitre()
    let totalPrice = hectares * pricePerLitre
    console.log(`£${totalPrice}`)

  }

  checkChemicalsFromProvider = () => {
    let chemicals = this.chemicalProvider.getChemicals()
    chemicals.forEach(chemical => {
      console.log(chemical.name)
    })
  }


  orderChemical = (chemicalName) => {

    let chemicals = this.chemicalProvider.getChemicals()

    chemicals.forEach(chemical => {
      if (chemicalName === chemical.name) {
        this.currentChemical = chemical
      }
    })
    console.log("Chemical ordered " + this.currentChemical.name)
    return this.currentChemical
  }

  checkChemicalArrival = () => {
    let date = this.currentField.getFormatedDate()
    console.log(date)
    let frequency = this.currentChemical.getApplicationsFrequency().replace(/\D/g, "")
    console.log(frequency, "Frequency")
    let weeks = parseInt(frequency) * 7

    let arrivalDate = date.setDate(date.getDate() + weeks)
  
    // .replace(/\D/g, "")
    console.log(new Intl.DateTimeFormat('en-US').format(arrivalDate));
    console.log(new Date(arrivalDate))
    console.log(new Date(arrivalDate).getDate().toString())
    console.log(frequency.replace(/\D/g, ""))
    console.log(new Date(arrivalDate).getMonth())
  }


  formatReadableDate = (day) => {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }
}

module.exports = FarmManager