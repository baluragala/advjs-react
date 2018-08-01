function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};

// var p1 = new Person("Jay", "kay");
// var p2 = new Person("Jim", "Kim");

function Student(firstName, lastName, grade) {
  Person.call(this, firstName, lastName);
  this.grade = grade;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.print = function() {
  console.log(this.firstName, this.lastName, this.grade);
};
