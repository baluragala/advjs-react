//asynchronous - single threaded
//dynamically typed

//named functions

add(10, 5);

function add(param1, param2) {
  console.log(arguments);
  if (arguments.length !== 2) {
    throw new Error("Need exactly 2 agruments");
  }
  return param1 + param2;
}

//anonymous functions
var add1;
add1(10, 5);
add1 = function(param1, param2) {
  return param1 + param2;
};

//named function declarations hoist

function sum() {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

// 3 roles of function
// 1. nonmethod function
// 2. constructor function
// 3. methods

// scope and context

var person = {
  name: "bala",
  greet: function(title) {
    console.log("greeting by " + title + "." + this.name);
  }
};
var greetRef = person.greet;
greetRef.call(person);
greetRef.call({ name: "jim" }, "Mr");

/*
call
apply
bind
*/

//constructor

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function(wish) {
    console.log(wish + " - greeting by" + this.name);
  };
}

// closure

function addMaker(a) {
  return function(b) {
    return a + b;
  };
}

//IIFE

var dwightSalary = function() {
  var salary = 60000;
  function changeBy(amount) {
    salary += amount;
  }
  return {
    raise: function() {
      changeBy(5000);
    },
    lower: function() {
      changeBy(-5000);
    },
    currentAmount: function() {
      return salary;
    }
  };
};

function Employee() {
  this.salary = 5000;
  this.inc = function() {
    this.salary += 2000;
  };
}

//iife - immediately invoked function expression

$.on("button", "click", function onClick() {
  setTimeout(function timer() {
    console.log("You clicked the button!");
  }, 12000);
});

console.log("Hi!");

setTimeout(function timeout() {
  console.log("Click the button!");
}, 15000);

console.log("Welcome to loupe.");

for (var i = 0; i < 10; i++) {}

//callback

function step1(next) {
  console.log("step1");
  next();
}
