var Turtle = function(name,color,weapon) {
  this.name = name;
  this.color = color;
  this.weapon = weapon;
  this.likesPizza = true;
  this.pizzaEaten = false;
  this.eatPizza = function() {
    if (this.pizzaEaten) {
      return this.name + " is eating pizza.";
      this.pizzaEaten = true;
    } else if (this.pizzaEaten) {
      return this.name + " has already eaten pizza.";
      this.pizzaEaten = false;
    }
  }
};

var leonardo = new Turtle("leonardo", "blue", "ninjato");
var michelangelo = new Turtle("michelangelo", "orange", "nunchucks");
var raphael = new Turtle("raphael", "red", "sai");
var donatello = new Turtle("donatello", "purple", "bo");

var ninjaTurtles = [leonardo,michelangelo,raphael,donatello];

leonardo.name = "trey";
console.log(leonardo.weapon);

var Giraud = new Turtle("Giraud", "turquoise", "knife");
ninjaTurtles.push(Giraud);

console.log(ninjaTurtles);

