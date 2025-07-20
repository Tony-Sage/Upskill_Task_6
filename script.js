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

function runCallbacks(callback1, callback2) {
 callback1();
 callback2();
}

function callbackDefinition() {
 console.log("Callbacks are functions that are passed as arguments into another function")
}

function callExplanation() {
 console.log("I had a function, runCallbacks, that had two parameters which I both defined as functions. \n \nThen I had two other functions that log the explanations of callbacks to the console. When I finally called ran runCallbacks, I passed in the references(names) of these two functions as the arguments. \n \nBecause I had already defined any argument I pass into runCallbacks as functions using its parameters, these two functions are run when I call runCallbacks.")
}

runCallbacks(callbackDefinition, callExplanation);
