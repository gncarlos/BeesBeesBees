var ForagerBee = function() {
  /* START SOLUTION */
  Bee.call(this);

  this.age = 10;
  this.canFly = true;
  this.job = 'find pollen';
  this.treasureChest = [];
  /* END SOLUTION */
};
/* START SOLUTION */
ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forrage = function(treasure) {
  this.treasureChest.push(treasure);  
};
/* END SOLUTION */