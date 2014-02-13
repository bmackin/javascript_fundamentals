// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

function greaterNum(numOne, numTwo) {
	if (numOne > numTwo) {
		console.log("The greater number of " + numOne + " and " + numTwo + " is " + numOne);
		}
	else {
		console.log("The greater number of " + numOne + " and " + numTwo + " is " + numTwo);
		}
	}
	greaterNum(3, 5);
	greaterNum(5, 3);
	greaterNum(1, 10);


// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

function helloWorld(language) {
	if (language === "en") {
		console.log("Hello");
	}
	else if (language === "fr") {
		console.log("Bonjour");
	}
	else if (language === "it") {
		console.log("Ciao");
	}
}
	helloWorld("en");
	helloWorld("fr");
	helloWorld("it");


// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

function assignGrade(numScore) {
	if (numScore >=80) {
		grade = "A";
	}
	else if (numScore >=70) {
		grade = "B";
	}
	else if (numScore >= 60) {
		grade = "C";
	}
	else if (numScore >= 50) {
			grade = "D";
	}
		else {
			grade = "F";
	}
		console.log("You're grade is " + grade)
}

assignGrade(75);


// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

function pluralize(noun, number) {
	if (number > 1) {
		console.log(number + " " + noun );
	}
	else {
		console.log(number + " " + noun + "s");
	}
}
		pluralize("dog", 2)

