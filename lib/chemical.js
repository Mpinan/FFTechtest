class Chemical {
  constructor(name, cropUsage, pricePerLitre, applicationFrequency) {
    this.name = name,
    this.cropUsage = cropUsage;
    this.pricePerLitre = pricePerLitre;
    this.applicationFrequency = applicationFrequency
  }

  getPricePerLitre = () => {
    let pricePerLitre = this.pricePerLitre.replace(/\D/g, "")

    return parseInt(pricePerLitre)
  }

  getApplicationsFrequency = () => {
    return this.applicationFrequency
  }

  getChemicalName = () => {
    return this.name
  }


}


module.exports = Chemical;