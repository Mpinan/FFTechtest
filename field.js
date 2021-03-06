class Field {
  constructor(name, width, length, crop, lastSprayed) {
    this.name = name,
    this.width = width;
    this.length = length;
    this.crop = crop;
    this.lastSprayed = lastSprayed;
  }

  getHectares = () => {
    let width = this.width.replace(/\D/g, "")
    let length = this.length.replace(/\D/g, "")
    let hectare = (width * length) / 10000
    return hectare
  }

  getFieldName = () => {
    return this.name
  }

  getFormatedDate = () => {
    let lastSprayed = new Date(this.lastSprayed.replace(/st|rd|nd|th/g, ""))
    return lastSprayed
  }

}


module.exports = Field;