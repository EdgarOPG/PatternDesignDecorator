import CheeseBurger from "./CheeseBurger";
import { HamDecorator, BaconDecorator } from "./groupDecorators";

const cheeseBurger = new CheeseBurger();
const cheeseBurgerWithHam = new HamDecorator(cheeseBurger);
const cheeseBurgerWithHamAndBacon = new BaconDecorator(cheeseBurgerWithHam);
const cheeseBurgerWithHamAndDoubleBacon = new BaconDecorator(
  cheeseBurgerWithHamAndBacon
);

console.log(cheeseBurger.getHamburger());
//output You order is: Cheeseburger and the price 100
console.log(cheeseBurgerWithHam.getHamburger());
//output You order is: Cheeseburger with ham and the price 115
console.log(cheeseBurgerWithHamAndBacon.getHamburger());
//output You order is: Cheeseburger with ham with bacon and the price 124
console.log(cheeseBurgerWithHamAndDoubleBacon.getHamburger());
//output You order is: Cheeseburger with ham with bacon and the price 133
