// an object that has my name, age, hobbies as well as a function that prints out "Hi, my name is Tony"
const upskillProfile = {
 name: 'Tony Sage',
 age: 20,
 hobbies: ["reading", "writing", "coding", "sleeping", "learning", "watching movies"],
 greetings: function(){
  console.log(`Hi, my name is ${this.name}`)
 }
}

// a code that accesses and prints my second best hobby to the console
console.log(`My second best hobby is ${upskillProfile.hobbies[0]}`)


// a code that explains a call back function

function jason(message1, message2) {
 message1, message2
}

function callbackDefinition() {
 console.log("Callbacks are functions that are passed as arguments into another function")
}

function callbackExample() {
 console.log("The parameters of a function are used to outline how a function handles the values(arguments) that are passed to it \n \nWhen you call a function, you pass in the arguments in the brackets immediately after the function name. These arguments are handled in the way you outlined when defining the function\n \nI defined two functions that log messages to the console (let's call them A and B). Then I defined another function (let's call it Jason) that has two parameters and stated what it was to do with the parameters \n \nWhen I called Jason, within its brackets, I passed in A and B as its arguments \n \nTherefore, functions A and B were executed even though I didnt call them directly. That's why you see these two messages in the console")
}

jason(callbackDefinition(), callbackExample());
