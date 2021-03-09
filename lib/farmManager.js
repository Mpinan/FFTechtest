const ChemicalProvider = require("./chemicalProvider")

class FarmManager {
  constructor() {
    this.fields = []
    this.currentField;
    this.currentChemical;
    this.chemicalProvider = new ChemicalProvider
    this.chemicalsNames = []
    this.newApplicationDate;
    this.errors;

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
    if (!this.currentField) {
      return
    }
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
      console.log(chemical.name + "------" + chemical.cropUsage)
    })
  }


  orderChemical = (chemicalName) => {

    let chemicals = this.chemicalProvider.getChemicals()
    let i = 0
    chemicals.forEach(chemical => {
      if (chemicalName === chemical.name) {
        this.currentChemical = chemical
        console.log("Chemical ordered " + this.currentChemical.name + "\nApplication frequency " + "\n" + this.currentChemical.applicationFrequency)
      }
    })

    return this.currentChemical

  }

  checkChemicalArrival = () => {
    this._handleErrors()
    if (this.errors) {
      console.log(this.errors)
      return
    }
    // this._handleErrors()
    let months = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ]
    let dateOfArrival = this.currentField.getFormatedDate()
    let dateOfApplication = this.currentField.getFormatedDate()
    let frequency = this.currentChemical.getApplicationsFrequency().replace(/\D/g, "")

    let days = (parseInt(frequency) * 7)

    let applicationDay = dateOfApplication.setDate(dateOfApplication.getDate() + days)
    let arrivalDate = dateOfArrival.setDate(dateOfArrival.getDate() + (days - 7))
    this.newApplicationDate = this._addOrd(new Date(applicationDay).getDate()) + " " + months[new Date(applicationDay).getMonth()]
    console.log("Arriving\n" + this._addOrd(new Date(arrivalDate).getDate()) + " " + months[new Date(arrivalDate).getMonth()])
    console.log("")
    console.log("Spraying date\n" + this.newApplicationDate)
    console.log("")
    this._updateFieldNewDate()
    console.log("")
    console.log("Total Price")
    this.calculateTotalPrice()
  }



  _addOrd = (n) => {
    let ords = [, 'st', 'nd', 'rd'];
    let m = n % 100;
    return n + ((m > 10 && m < 14) ? 'th' : ords[m % 10] || 'th')
  }


  _updateFieldNewDate = () => {
    this.fields.map(field => {
      if (field.name === this.currentField.name)
        field.lastSprayed = this.newApplicationDate
      console.log(field.name + "    ||    " + field.width + "    ||    " + field.length + "    ||    " + field.crop + "    ||    " + field.lastSprayed)
    })
  }

  _handleErrors = () => {
    if (!this.currentField) {
      this.errors = "This field does not exist"
      return
    }
    if (!this.currentChemical) {
      this.errors = "Chemical does not exist"
      return
    }
    if (this.currentChemical.cropUsage !== this.currentField.crop) {
      this.errors = "WARNING, Wrong type of chemical for this field"
      return
    }
  }
}

module.exports = FarmManager