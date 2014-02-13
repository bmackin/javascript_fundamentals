// Exercises: Functions

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.


function tellFortune(numChildren, partner, where, job) {
	var fortune = "You will have " + numChildren + " children and be married to " + partner + " living in " + where + " and working as an " + job;
	return fortune;
}
tellFortune("a few", "someone", "a city", "employed person" );
tellFortune("some", "a person", "a village", "unemployed person" );
tellFortune("no", "yourself", "cave", "employed person" );
console.log(result);

// EXERCISE: The Age Calculator

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.


function calculateAge(currentYear, birthYear){
	var currentAge = currentYear - birthYear;
	var altAge = (currentYear - birthYear) - 1;
		console.log("You are either" + currentAge + " or " + altAge);
}

calculateAge(2014, 1914);
calculateAge(2014, 1970;
calculateAge(2014, 1985;



// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.


function  calculateSupply(age, amountperDay){
	var maxAge = 100
	var lifeSupply = (maxAge - age) * amountperDay;

		console.log("You will need " + lifeSupply + " bags of sunflower seeds to last you until the ripe old age of " + maxAge);
}
		calculateSupply(25, 1);
		calculateSupply(30, 5);
		calculateSupply(35, 10);


// EXERCISE: The Geometrizer

// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:

// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

function calcCircumference(radius) {
	var circumference = 2 * Math.PI * radius;

	console.log("The circumference is " + circumference )
}
	calcCircumference(3);


function calcArea(radius) {
	area = Math.PI * Math.pow(3,2)

	console.log("The area is " + area)
}
	calcArea(3)


// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."	

function celsiustoFahrenheit(celsius){
	fahrenheit = (celsius * 9)/5 + 32;

	console.log(fahrenheit + " °F is " + celsius + " °C");
}

	celsiustoFahrenheit(17);

function fahrenheittoCelsius(fahrenheit){
	celsius = (farenheit / 1.8) - 32;

	console.log(celsius + " °C is " + fahrenheit + " °F");
}

	fahrenheittoCelsius(10);


