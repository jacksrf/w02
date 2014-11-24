var Tamagotchi = function() {
  this.hungry = false;
  this.sick = false;
  this.age = 0;
  this.feed = function() {
    if (this.hungry === true) {
      console.log("That was yummy!");
      this.hungry = false;
    } else if (this.hungry === false) {
      console.log("No thanks, I'm full");
      this.hungry = true;
    }
  }
  this.sleep = function() {
    console.log("zzzzzzzzzzzzzzzz");
  }
  this.medicate = function() {
    if (this.sick === true) {
      console.log("I feel much better!");
      this.sick = false;
    } else if (this.sick === false) {
      console.log("No thanks, I feel fine!");
      this.sick = true;
    }
  }
   this.increaseAge = function() {
    this.age =+ 1;
    console.log("Happy Birthday to me! I am " + this.age + " years old!");
    }
}

var dog = new Tamagotchi();

dog.bark = function() {
	console.log("ruff ruff");
}
dog.goOutside = function() {
	console.log("I own that tree now!");
}

var cat = new Tamagotchi();

cat.meow = function() {
	console.log("Meow!");
}
cat.useLitterBox = function() {
	console.log("Burried treasure!");
}

var fish = new Tamagotchi();

fish.swim = function() {
	console.log("Just keep swimming....");
}


//making them do things

dog.feed();
dog.feed();
dog.increaseAge();
dog.increaseAge();
dog.bark();
dog.goOutside();
cat.meow();
cat.sleep();
cat.useLitterBox();
fish.medicate();
fish.medicate();
fish.swim();