// rest
function sum(a, b, ...args) {
  var total = 0;
  for (var i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}

sum(1, 2, 3, 4);

//spread
const username = "zeolearn";

const chars = [];
for (let i = 0; i < username.length; i++) {
  chars.push(username[i]);
}

// const [...name] = [...username];
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = [a1, a2];
[...a1, ...a2];
[...a1, 0, ...a2, 7, 8];

const o1 = { name: "john", city: "ny" };
const o2 = { age: 26 };
const o3 = { ...o1, ...o2 };

let args = [9, 3, -5, 2, 1, 0];
Math.min(...args);

//apply

function add(a, b) {
  return a + b;
}

add(1, 2);

let args = [1, 2];
add(args);
