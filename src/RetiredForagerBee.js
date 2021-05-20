/* START SOLUTION */
class RetiredForagerBee extends ForagerBee {
  constructor() {
    super(),
    this.age = 40,
    this.job = 'gamble',
    this.canFly = false,
    this.color = 'grey',
    super.food,
    super.treasureChest
  }

  forage() {
    return `I am too old, let me play cards instead`
  }

  eat() {
    super.eat()
  }

  gamble() {
    this.treasureChest.push('treasure')
  }
}
/* END SOLUTION */
