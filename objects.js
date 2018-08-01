//objects
var book = {
  title: "Exploring jS",
  author: {
    first: "kyle",
    last: "simpson"
  },
  chapters: ["ch1", "ch2", "ch3"],
  describe: function() {
    console.log("Title:", this.title);
  },
  isPublished: true,

  get authorName() {
    return this.author.first + ", " + this.author.last;
  },

  set authorName(value) {
    let names = value.split(",");
    if (names.length != 2) {
      throw new Error("Name must be exactly in ##first##,##last## format");
    }
    this.author.first = names[0];
    this.author.last = names[1];
  }
};

// . (dot)
console.log(book.title);
book.describe();
book.chapters.forEach(function(c) {
  console.log(c);
});
console.log(book.author.first);

//array notation
console.log(book["title"]);
book.describe();
book.chapters.forEach(function(c) {
  console.log(c);
});
console.log(book["author"].first);

var propName = "title";
book[propName];
book["some strange property"] = "$$$$";

book.authorName = "Bala,Ragala,krishna";

// 2. constructor functions

function Book(title, chapters) {
  this.title = title;
  this.chapters = chapters;
  this.describe = function() {
    console.log("Title:", this.title);
  };
}

var b1 = new Book("awesome js", ["c1", "c2", "c3"]);
var b2 = new Book("good points js", ["c1", "c2", "c3"]);

// 3 Object constructor

var o = new Object();

Object.defineProperty(o, "title", {
  value: "Dark parts of JS",
  writable: false,
  configurable: true,
  enumerable: true
});

Object.defineProperty(o, "chapters", {
  value: ["c1", "c2", "c3"],
  writable: false,
  configurable: true,
  enumerable: false
});

function makeImmutable({}) {
  var o = new Object();

  Object.defineProperty(o, "title", {
    value: "Dark parts of JS",
    writable: false,
    configurable: true,
    enumerable: true
  });

  Object.defineProperty(o, "chapters", {
    value: ["c1", "c2", "c3"],
    writable: false,
    configurable: true,
    enumerable: false
  });
}

// Object methods

var part1 = { prop1: "prop1", author: { first: "aa", last: "bb" } };
var part2 = { prop2: "prop2" };

// var part = { prop1: part1.prop1, prop2: part2.prop2 };

var part = Object.assign({}, part1, part2, { prop3: "prop3" });
Object.keys(part);
Object.values(part);
