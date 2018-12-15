/* 
Activity: Contact manager
*/

// TODO: Complete the program
var contact ={
	init:function(firstname, lastname){
		this.firstname = firstname;
		this.lastname = lastname;
	},

	describe: function(){
		var description = "Contact: firstname is "+this.firstname+", lastname is "+this.lastname;
		return description;
	}
};

var contact1 = Object.create(contact);
contact1.init("John", "Smith");

var contact2 = Object.create(contact);
contact2.init("John", "Doe");

console.log(contact1.describe());
console.log(contact2.describe());

var check = prompt("Do you want add contacts? y/n");

while(check ==="y" || check==="Y"){
	var newContact = Object.create(contact);
	var getFirstname = prompt("Enter firstname");
	var getLastname = prompt("Enter lastname");
	newContact.init(getFirstname,getLastname);
	console.log(newContact.describe());
var check = prompt("Do you want add contacts? y/n");
if(check === "n"||check==="N")
	break;
}
