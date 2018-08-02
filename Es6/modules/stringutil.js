// export function first(sentence) {
//   return sentence.split(" ")[0];
// }

// export function last(sentence) {
//   let words = sentence.split(" ");
//   return words[words.length - 1];
// }

function first(sentence) {
  return sentence.split(" ")[0];
}

function last(sentence) {
  let words = sentence.split(" ");
  return words[words.length - 1];
}

// function last1(sentence) {
//   let words = sentence.split(" ");
//   return words[words.length - 1];
// }

// function last2(sentence) {
//   let words = sentence.split(" ");
//   return words[words.length - 1];
// }

const StringUtil = { first: first, last: last };
export default StringUtil;
