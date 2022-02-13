class Hamburger {
  // constructor() {
  //   this._drescription = "Unknown Hamburger";
  //   this._price = 0;
  // }
  constructor(description = "", price = 0) {
    this._description = description;
    this._price = price;
  }
  set price(price) {
    this._price = price;
  }
  get price() {
    return this._price;
  }
  get description() {
    return this._description;
  }
  getHamburger() {
    // return `You order is: ${this.description} and the price ${this.price}`;
    return {
      description: this.description,
      price: this.price
    };
  }
}

export default Hamburger;
