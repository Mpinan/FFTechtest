const ChemicalProvider = require("./chemicalProvider")

class FarmManager {
  constructor() {
    this.fields = []
    this.currentField;
    this.currentChemical;
    this.chemicalProvider = new ChemicalProvider
    this.chemicalsNames = []
    this.newApplicationDate;
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

      if (chemicalName === chemical.name && chemical.cropUsage === this.currentField.crop) {
        this.currentChemical = chemical
        console.log(this.currentChemical)
        console.log("Chemical ordered " + this.currentChemical.name + "\nApplication frequency " + "\n" + this.currentChemical.applicationFrequency)
      }
    })
    return this.currentChemical
  }



  checkChemicalArrival = () => {
    let months = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ]
    let dateOfArrival = this.currentField.getFormatedDate()
    let dateOfApplication = this.currentField.getFormatedDate()
    let frequency = this.currentChemical.getApplicationsFrequency().replace(/\D/g, "")

    let days = (parseInt(frequency) * 7)

    let applicationDay = dateOfApplication.setDate(dateOfApplication.getDate() + days)
    let arrivalDate = dateOfArrival.setDate(dateOfArrival.getDate() + (days - 7))
    this.newApplicationDate = this.addOrd(new Date(applicationDay).getDate()) + " " + months[new Date(applicationDay).getMonth()]
    console.log("Arriving\n" + this.addOrd(new Date(arrivalDate).getDate()) + " " + months[new Date(arrivalDate).getMonth()])
    console.log("")
    console.log("Spraying date\n" + this.newApplicationDate)
    console.log("")
    this.updateFieldNewDate()
  }



  addOrd(n) {
    let ords = [, 'st', 'nd', 'rd'];
    let m = n % 100;
    return n + ((m > 10 && m < 14) ? 'th' : ords[m % 10] || 'th')
  }


  updateFieldNewDate() {
    this.fields.map(field => {
      if (field.name === this.currentField.name)
        field.lastSprayed = this.newApplicationDate
      console.log(field.name + "    ||    " + field.width + "    ||    " + field.length + "    ||    " + field.crop + "    ||    " + field.lastSprayed)
    })
  }



}

module.exports = FarmManager