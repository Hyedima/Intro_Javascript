//Hello world 
//strings
console.log("hello Javascripts");
console.log("Hello" + "world");

//Arithmetic operators
console.log(2*4);
console.log(10+2);
console.log(6/2);
console.log("Best of the best");
console.log("Wow it worked");

//Conditional Statement
var number = Number(prompt("Enter a number"));
if(number >= 0)
{
	console.log(number + " is a positive number.")
}
else
{
	console.log(number + " is a nagetive number.");
}

//AND operator
if((number > 0) && (number <100))
{
	console.log(number + " is between 0 to 1000");
}
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)

//OR operator
if((number > 0) || (number <100))
{
	console.log(number + " is between 0 to 1000");
}

console.log(true|| true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

if(!(number > 100))
{
	console.log(number + " is less than 100");
}

//multiples chioce
var weather = prompt("What's the weather like?");
if (weather === "sunny") {
    console.log("T-shirt time!");
} else if (weather === "windy") {
    console.log("Windbreaker life.");
} else if (weather === "rainy") {
    console.log("Bring that umbrella!");
} else if (weather === "snowy") {
    console.log("Just stay inside!");
} else {
    console.log("Not a valid weather type");
}

//Switch case 
var weather = prompt("What's the weather like?");
switch (weather) {
case "sunny":
    console.log("T-shirt time!");
    break;
case "windy":
    console.log("Windbreaker life.");
    break;
case "rainy":
    console.log("Bring that umbrella!");
    break;
case "snowy":
    console.log("Just stay inside!");
    break;
default:
    console.log("Not a valid weather type");
}
//loops
console.log("start of program");
var number = 1;
while (number <= 5) {
    console.log(number);
    number++;
}
console.log("end of program");

var number = 1;
while (number <= 5) {
    console.log(number);
    number++;
    // The number variable is always 1, so the loop will run each time...forever.
}

for (var counter = 1; counter <= 5; counter++) {
    console.log(counter);
    counter++; // the counter variable changes within the loop body
}

var letter = "";
while (letter !== "X") {
    letter = prompt("Type any letter or X to exit:");
    console.log(letter);
}
