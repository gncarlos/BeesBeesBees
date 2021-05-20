/* START SOLUTION */
class ForagerBee extends Bee {
  constructor() {
    super(),
    this.age = 10,
    this.job = 'find pollen',
    super.color,
    super.food,
    this.canFly = true,
    this.treasureChest = []
  }

  eat() {
    super.eat()
  }

  forage() {
    this.treasureChest.push('treasure')
  }
}
/* END SOLUTION */
