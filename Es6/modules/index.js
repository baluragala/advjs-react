import s from "./stringutil.js";
import { first as arrfirst } from "./arrayutil.js";

let sentence = "JS is awesome";
console.log(s.first(sentence));
console.log(s.last(sentence));
let numbers = [1, 2, 3];
console.log(arrfirst(numbers));
