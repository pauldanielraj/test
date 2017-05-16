var person = new Object();

person["firstName"] = "Paul Daniel";
person["lastName"] = "Paul-Balasingh";
var fullName = person.firstName + " " + person.lastName;
console.log(fullName);

var Danny = {firstName:"Paul Daniel Raj",
             lastName: "Paul-Balasingh",
             Address:{
               street:"157 Bull Hill Lane",
               city:"West Haven",
               code:"06516"
             },
           fullName: function(){
             return this.firstName + " " + this.lastName;
           }};

function greet(person){
console.log("Hello " + person.fullName());
}

greet(Danny);
