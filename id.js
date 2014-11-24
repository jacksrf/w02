var name = process.argv[2];
var age = parseInt(process.argv[3]);

var id = function(,y,bouncer) {
	var sentence = (x + " is " + y + " years old");
	return sentence;
}
	

var bouncer = function(age) {
	if (age >= 21) {
		console.log("Come in!");
	} else {
		console.log("Psh, nice try!");
	}

}

var id2 = function (x, y, bouncer) {
	if (x >= 21) {
		return bouncer(y);
	} else {
		console.log('Psh, nice try!');
	}
}

console.log(id2(name,age,));

