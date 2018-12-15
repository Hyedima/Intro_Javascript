
var contacts = new Array();

var contact = {
	init: function(firstName, lastName){
		
		this.firstName = firstName;
		this.lastName = lastName;

	},

	describe: function(){

		var desc = "Last name: " + this.lastName + ", first name: " + this.firstName
		return desc;
	}
}

function addInitialContacts (){
	
	var contact1 = Object.create(contact);
	contact1.init("John", "Smith");
	contacts.push(contact1);

	var contact2 = Object.create(contact);
	contact2.init("Jane", "Doe");
	contacts.push(contact2);

}

function addContact(){

	var firstName = prompt("Enter the first name of contact:")
	var lastName = prompt("Enter the last name of contact:")
	var newContact =  Object.create(contact);
	contact.init(firstName, lastName);
	contacts.push(contact);
	console.log("Contact added");
}

function displayContacts(){
	contacts.forEach(function (contact){

		console.log(contact.describe())
	})
}

function displayMenu()
{
	console.log("1: List contacts \n2: Add a contact \n0: Quit");
	
}

function exitProgram(){
	console.log("Thank you for using my contact manager.");
}

function menuAction(){

	var option = Number(prompt("Enter option: (0, 1, 0r 2)"));

	switch(option){

		case 1:
			console.log("Here's the list of all your contacts:\n");
			displayContacts();
			break;

		case 2:
			addContact();
			break;

		case 0:
			exitProgram();
			break;

		default:
			console.log("Please enter a valid option.");
	}
	
	return (option);

}


function startProgram(){
	
	addInitialContacts();
	console.log("Welcome to your contacts manager!");
	
	displayMenu();
    option = menuAction();

	while(option !== 0){
		displayMenu();
    	option = menuAction();
	}
}

startProgram();