const book = { title: "Exploring JS", author: "zeo" };
// const message =
//   "A book title " + book.title + " was authored by " + book.author;

const message = `A book title ${book.title} was authored by ${book.author}`;

//tagged templates

function highlight(pieces, ...values) {
  let highlighted = "<p>";
  pieces.forEach(function(part, index) {
    highlighted += `${part} <span>${values[index] || ""}</span>`;
  });
  return highlighted + "</p>";
}

const name = "jim";
const age = 30;

const title = highlight`Person name is ${name} and he is ${age} years old`;

const placerholderText = "person name is ## and he is ## years old";

placerholderText.split("##");
