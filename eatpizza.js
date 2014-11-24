var leonardo = {
  name: "Leonardo",
  color: "blue",
  weapon: "ninjato",
  namedAfter: "Leonardo da Vinci",
  likesPizza: true,
  pizzaEaten: false,
  eatPizza: function() {
    if (this.pizzaEaten === true) {
      console.log("leonardo has already eaten pizza.");
      this.pizzaEaten = false;
    } else if (this.pizzaEaten === false) {
      console.log("Leonardo is eating pizza.");
      this.pizzaEaten = true;
    }
  }
};

var michelangelo = {
  name: "Michelangelo",
  color: "orange",
  weapon: "nunchucks",
  namedAfter: "Michaelangelo Buonarroti",
  likesPizza: true
}

var raphael = {
  name: "Raphael",
  color: "red",
  weapon: "sai",
  namedAfter: "Raffaello Sanzio da Urbino",
  likesPizza: true
}

var donatello = {
  name: "Donatello",
  color: "purple",
  weapon: "bo",
  namedAfter: "Donato di Niccolo di Betto Bardi",
  likesPizza: true
}

var turtles = [leonardo, michelangelo, raphael, donatello];

for (var i = 0; i < turtles.length; i++) {
	console.log(turtles[i].name + " wears a " + turtles[i].color + " bandana, his weapon is a " + turtles[i].weapon + ", he is named after " + turtles[i].namedAfter + " and he likes Pizza.");
}

for (var i = 0; i < 2; i++) {
  leonardo.eatPizza();
}






