let numbers = [1, 2, 3, 4, 5];

for (let n of numbers) {
  console.log(n);
}
for (let i = 1; i < numbers.length; i++) {
  console.log(numbers[i]);
}

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

book[Symbol.iterator] = function() {
  const props = Object.keys(book);
  var index = 0;
  return {
    next() {
      if (index < props.length) {
        let propName = props[index++];
        return { value: { [propName]: book[propName] }, done: false };
      } else {
        return { value: undefined, done: true };
      }
    }
  };
};

for (const prop in book) {
  console.log(book[prop]);
}

// es6

for (let n of numbers) {
  console.log(n);
}

function forOf(iterable) {
  if (!iterable[Symbol.iterator]) {
    throw new Error("not iterable");
  }

  const it = iterable[Symbol.iterator]();
  let result = it.next();
  while (!result.done) {
    console.log(result.value);
    result = it.next();
  }
}
