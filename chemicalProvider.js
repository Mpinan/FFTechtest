const Chemical = require("./chemical")

let ryezapon = new Chemical("Ryezapon", "Winter Wheat", "£240", "6 weeks")
let berbelikar = new Chemical("Berbelikar", "Barley", "£156", "4 weeks")
let quadranis = new Chemical("Quadranis", "Sugar Beet", "£191", "9 weeks")

class ChemicalProvider {
  constructor() {
    this.chemicals = [ryezapon, berbelikar, quadranis]
  }

  getChemicals = () => {
    return this.chemicals
  }

}

module.exports = ChemicalProvider