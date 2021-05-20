/* START SOLUTION */
class HoneyMakerBee extends Bee {
  constructor() {
    super(),
    this.age = 10,
    this.job = 'make honey',
    super.color,
    super.food,
    this.honeyPot = 0
  }

  eat() {
    super.eat()
  }

  makeHoney() {
    this.honeyPot += 1
  }

  giveHoney() {
    this.honeyPot -= 1
  }
}
/* END SOLUTION */
