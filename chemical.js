class Chemical {
  constructor() {
    this.name = "Cowfield",
    this.cropUsage = 300;
    this.pricePerLitre = 400;
    this.applicationFrequency = "6 weeks"
  }

  calculateHectares = () => {
    let hectare = (this.width * this.length) / 10000
    return hectare
  }

}


module.exports = Chemical;