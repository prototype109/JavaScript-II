// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function sayHi(){
  let greeting = "Hi my name is ";
  function greet(name){
    greeting = greeting + name;
    console.log(greeting);
  }
  return greet;
}

let jhonSpeaks = sayHi();
jhonSpeaks("Jhon");

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let count = 0;
  function increment(){
    count++;
    console.log(count);
  }

  return increment;
  // Return a function that when invoked increments and returns a counter variable.
};
let newCounter = counter();
newCounter();
newCounter();
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let count = 0;
  function process(){
    const countObj = {
      increment: function(){
        count++;
        console.log(count);
      },
      decrement: function(){
        count--;
        console.log(count);
      }
    }
    return countObj;
  }

  return process;
  
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

let counting = counterFactory();

counting().increment();
counting().decrement();
