import Hamburger from "./Hamburger";

class HamburgerDecorator extends Hamburger {
  constructor(burger) {
    super();
    this.burger = burger;
  }
}

export default HamburgerDecorator;
