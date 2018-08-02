// Array destructuring
let members = ["jim", "kim", ["lim", "pim"]];
// const manager = members[0];
// const lead = members[1];
// const se1 = members[2];

// const [manager, lead] = members;
// const [, , [e1, e2] = [se1]] = members;
let members = ["jim", "kim", "lim", "pim"];
const [manager, lead] = members;

//object destructuring
const response = {
  title: "JS in 24hrs",
  author: { first: "Kyle", last: "simpson" },
  isAvailable: true,
  p1: 1,
  P2: 3,
  p3: 6
};

const {
  isAvailable,
  author: { first: firstName, middle: middleName = " " },
  title,
  ...others
} = response;
