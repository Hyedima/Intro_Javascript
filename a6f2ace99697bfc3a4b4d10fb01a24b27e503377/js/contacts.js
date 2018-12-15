/* 
Activity: Contact manager
*/

// TODO: Complete the program
var contact = {
	init : function(firstName,lastName){
		this.firstName = firstName;
		this.lastName = lastName;	
	},
	
	describe : function(){
		var desc = "Last name: "+this.lastName+", first name: "+
		this.firstName;	
		return desc;
	}
};

var contact0 = Object.create(contact);
contact0.init("John","Smith");
var contact1 = Object.create(contact);
contact1.init("Jane","Doe");
var contacts = [contact0,contact1];

console.log("Welcome to your contacts manager!");
var quit = 0;

do{
	console.log("1. List contacts");
	console.log("2. Add a contact");
	console.log("0. Quit");
	var choice = prompt("Insert your choice : ");
	
	if(choice==1){
		console.log("Here's the list of all your contacts:");
			for(var i = 0;i<contacts.length;i++){
				console.log(contacts[i].describe());	
			}
	}
	
	else if(choice==2){
		var firstName = prompt("First Name :");
		var lastName = prompt("Last Name :");
		var newContact = Object.create(contact);
		newContact.init(firstName,lastName);
		contacts.push(newContact);
		console.log("Contact added");
	}
	
	else if(choice==0){
		quit = 1;	
	}
	
	else{
		console.log("Option not available, please try again.");	
	}

}while(quit!==1);