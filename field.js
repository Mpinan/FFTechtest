class Field {
  constructor(name, width, length, crop, lastSprayed) {
    this.name = name,
    this.width = width;
    this.length = length;
    this.crop = crop;
    this.lastSprayed = lastSprayed;
  }

  calculateHectares = () => {
    let hectare = (this.width * this.length) / 10000
    return hectare
  }

}


module.exports = Field;