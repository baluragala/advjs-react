const scores = [60, 40, 56, 77, 89];
scores.filter(function(s) {
  return s >= 60;
});

scores.filter(s => {
  return s >= 60;
});

function Person(age) {
  this.age = age;
  this.describe = function() {
    console.log(`Perons age is ${this.age}`);
  };
}

function Person(age) {
  this.age = age;
  this.describe = () => {
    console.log(`Perons age is ${this.age}`);
  };
}

let per = new Person(30);
per.describe();
var describeRef = per.describe;
describeRef();
