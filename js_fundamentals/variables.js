// Exercises: Variables

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

var myFunction = function () {

}

function tellFortune(numChildren, partner, where, job) {
	var fortune = "You will have " + numChildren + " children and be married to " + partner + " living in " + where + " and working as an " + job;
	return fortune;
}
var result = tellFortune("a few", "someone", "a city", "employed person" );
console.log(result);


// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.

var currentYear = 2014;
var birthYear = 1914;

var a = currentYear - birthYear;
var b = (currentYear - birthYear) - 1;

console.log("They are either " + a + "or " + b + "years old.");

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

var myAge = 25;
var maxAge = 100;
var maxDay = 1;

var lifetimeSupply = ( maxAge - myAge ) * maxDay;

console.log("You will need " + lifetimeSupply + " bags of sunflower seeds to last you until the ripe old age of " + maxAge);

// EXERCISE: The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN"

var radius = 3
var circumference = 2 * Math.PI * radius;

console.log("The circumference is " + circumference )


// Calculate the area based on the radius, and output "The area is NN".

var radius = 3
var area = Math.PI * Math.pow(3,2)

console.log("The area is " + area)



// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

var celsius = 18
var fahrenheit = (celsius * 9)/5 + 32

console.log(fahrenheit + " °F is " + celsius + " °C")











