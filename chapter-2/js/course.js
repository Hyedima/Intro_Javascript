
//Functions
function sayHello() {
    console.log("Hello!");
}

console.log("Start of program");
sayHello();
console.log("End of program");

//funtions withn return type
function sayHello() {
    return "Hello!";
}

console.log("Start of program");
var result = sayHello();
console.log(result);
console.log("End of programss");

//undefined functions
function myFunction() {
    // No value returned in this function
}

var result = myFunction();

console.log(result); // Will be undefined


//local variables
function sayHello() {
    var message = "Hello!_";
    return message;
}

console.log(sayHello());
//console.log(message); // Error: the message variable doesn't exist here

//Parameters
function sayHello(name) {
    var message = "Hellosss, " + name + "!";
    return message;
}

console.log(sayHello("David"));
console.log(sayHello("Seicha"));

//Strings
console.log("ABC".length); // will be 3
console.log("I am a string".length); // will be 13

var originalWord = "Bora-Bora";
var lowercaseWord = originalWord.toLowerCase();
console.log(lowercaseWord); // will be "bora-bora"
var uppercaseWord = originalWord.toUpperCase();
console.log(uppercaseWord); // will be "BORA-BORA"

//string comparism
var word = "koala";
console.log(word === "koala"); // will be true
console.log(word === "kangaroo"); // will be false

//character index
var name = "Sarah"; // 5 characters
console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
console.log(name[4]);

//looping through characters
var myString = "Hyedima";
for (var i = 0; i < myString.length; i++) {
	console.log(myString[i]);
}

//objects
var pen = {
    type: "ballpoint",
    color: "blue",
    brand: "Bic"
};

console.log(pen.type); // will be "ballpoint"
console.log(pen.color); // will be "blue"
console.log(pen.brand); // will be "Bic"

var cake = {
    flavor: "strawberry",
    levels: 2,
    price: "$10",
    occasion: "birthday",

    // Describe the cake
    describe: function () {
        var description = "The " + this.occasion + " cake has a " + this.flavor + " flavor, " + this.levels + " layers, and costs " + this.price + ".";
        return description;
    }
};

console.log(cake.describe());

// The cake is actually for a wedding!
cake.occasion = "wedding";

// Its number of layers and price both go up.
cake.levels = cake.levels + 8;
cake.price = "$50";

console.log(cake.describe());

//functions and Objects
var muffin = {
    type: "muffin",
    flavor: "blueberry",
    levels: 1,
    price: "$2",
    occasion: "breakfast",

    // Describe the pastry
    describe: function () {
        var description = "The " + this.type + " is a " + this.occasion + " pastry, has a " + this.flavor + " flavor, " + this.levels + " layers, and costs " + this.price + ".";
        return description;
    }
};
console.log(muffin.describe());

//objects and prototype in javascripts
//In addition to its special properties, every JavaScript object has an internal property called prototype . This is a link (known as reference ) to another object. When trying to access a property that does not exist in an object, JavaScript tries to find this property in the prototype of this object.

//Here's an example.
var anObject = {
    a:2
};

var anotherObject = Object.create(anObject);
console.log(anotherObject.a);

//Cake Prototype

var pastry = {
    type: "",
    flavor: "",
    levels: "",
    price: "",
    price: "",
    occasion: "",

    //Describe the pastry
    describe: function (){
        var description = "The "+this.type+" is a "+this.occasion +" pastry, has a "+this.flavor+" flavor, "+this.levels+" layer(s), anf costs "+this.price+".";
        return description;
    }
};

var muffin = Object.create(pastry);
muffin.type = "muffin";
muffin.flavor = "blueberry";
muffin.levels = 3;
muffin.price = "$60";
muffin.occasion = "breakfast";

var cake = Object.create(pastry);
cake.type = "cake";
cake.flavor = "Vanilla";
cake.levels = 5;
cake.price = "$50";
cake.occasion = "Wedding";

console.log(muffin.describe());
console.log(cake.describe());

//baking the pastries
var Pastry ={
    init: function(type,flavor,levels,price,occasion){
        this.type = type;
        this.flavor = flavor;
        this.levels = levels;
        this.price = price;
        this.occasion = occasion;
    },
     // Describe the pastry
    describe: function () {
        var description = "The " + this.type + " is a " + this.occasion + " pastry, has a " + this.flavor + " flavor, " + this.levels + " layer(s), and costs " + this.price + ".";
        return description;
    },
    
    bake: function() {
        var baked = "The " + this.flavor + this.type + " was placed in the oven. It's done!"
    return baked
    }
};


var muffin = Object.create(Pastry);
muffin.init("muffin", "blueberry", 1, "$2", "breakfast");

var cake = Object.create(Pastry);
cake.init("cake", "vanilla", 3, "$10", "birthday");

console.log(muffin.bake());
console.log(cake.bake());
console.log(muffin.describe());
console.log(cake.describe());

console.log("****************************************************************GAME***********************************************************")
//Game
var Character = {
    initCharacter: function (name,health, force){
        this.name = name;
        this.health = health;
        this.force = force;
    },
    attack: function(target){
        if(this.health > 0){
            var damage = this.force;
            console.log(this.name+ " attacks "+target.name+" and causes "+damage+ " damage poins");
            target.health = target.health - damage;
            if(target.health > 0){
                console.log(target.name + " has "+ target.health + " health pointd left.");
            }else{
                target.health = 0;
                console.log(target.name + " ha been eliminated!");
            }
        }else{
                console.log(this.name+ " can't attack (they've been eliminated).");
            }
        }
    
};

var Player = Object.create(Character);
//intialize player
Player.initPlayer = function(name, health,force){
    this.initCharacter(name,health,force);
    this.xp = 0;
};

//Describe your player 
Player.describe = function(){
    var description = this.name+ " has "+this.health +" health points, "+this.force + " force points "+ this.xp + " experience points";
    return description;
};

//fight an enemy
Player.fight = function(enemy){
    this.attack(enemy);
    if(enemy.health === 0){
        console.log(this.name +" eliminated "+enemy.name+" and wins "+ enemy.value + " experience points");
        this.xp += enemy.value;
    }
};

var Enemy = Object.create(Character);
//initialize the enemy
Enemy.initEnemy = function(name, health,force,species,value){
    this.initCharacter(name, health,force);
    this.species = species;
    this.value = value;
};

//Once modeled, the objects can then interact with one another through method calls:
var player1 = Object.create(Player);
player1.initPlayer("Rainbow Dash", 150,25);

var player2 = Object.create(Player);
player2.initPlayer("Applejack",140,45);

console.log("Welcome to the adventure! Here are our heros: ");
console.log(player1.describe());
console.log(player2.describe());

var monster = Object.create(Enemy);
monster.initEnemy("Spike",40,20,"orc",10);

console.log("a wild monster has appeared: it's a(a) "+monster.species+" named "+ monster.name);

monster.attack(player1);
monster.attack(player2);

player1.fight(monster);
player2.fight(monster);

console.log(player1.describe())
console.log(player2.describe())

console.log("****************************************************************CONSTRUCTORS***********************************************************");
//Prevoius Pastry
var Pastrys = {
  // initialize the pastry
  init: function (type, flavor, levels, price, occasion) {
    this.type = type;
    this.flavor = flavor;
    this.levels = levels;
    this.price = price;
    this.occasion = occasion;
  }
}
//Then initialize as 
Object.create(Pastrys);

//
var equalProtection = "...nor shall any State deprive any person of life, liberty, or property, without due process of law; nor deny to any person within its jurisdiction the equal protection of the laws ";

function newJersey() {
  var noSelfServeGas = "Sorry, you can't pump your own gas.";

  function hunterdonCounty() {
    console.log(noSelfServeGas); // --> Sorry, you can't pump your own gas.
    console.log(equalProtection); // --> ...nor shall any State etc.
  }
}

function Pennsylvania() {
  console.log(noSelfServeGas); // --> Uncaught ReferenceError: noSelfServeGas is not defined
  console.log(equalProtection); // --> ...nor shall any State etc.

}

console.log("****************************************************************Arreys***********************************************************");
var cars = ["Honda", "Toyota", "Benz","BMW"];
cars.push("Volks Wagon");
console.log(cars.length);
console.log(cars);
console.log(cars[4])

//Object Arrey
var Film = {
    // Initialise le film
    init: function (title, year) {
        this.title = title;
        this.year = year;
    },
    // Renvoie la description du film
    describe: function () {
        var description = this.title + " (" + this.year + ")";
        return description;
    }
};

var film1 = Object.create(Film);
film1.init("Jurassic Park", 1993);

var film2 = Object.create(Film);
film2.init("Titanic", 1997);

var film3 = Object.create(Film);
film3.init("Toy Story", 1995);


