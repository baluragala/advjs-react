var numbers = [1, 2, 3, 4, 5];
var mixed = ["1", 0, true, [], {}];

// mixed[0]
// "1"
// mixed[3]
// []
// mixed[300]
// undefined
// numbers.length
// 5
// numbers[numbers.length-1]
// 5
// numbers[10]=10
// 10
// numbers
// (11) [1, 2, 3, 4, 5, empty × 5, 10]0: 11: 22: 33: 44: 510: 10length: 11__proto__: Array(0)
// typeof numbers
// "object"
// numbers instanceof Array
// true
// numbers instanceof Object
// true
// numbers.myProp=1
// 1
// numbers
// (11) [1, 2, 3, 4, 5, empty × 5, 10, myProp: 1]0: 11: 22: 33: 44: 510: 10myProp: 1length: 11__proto__: Array(0)
// Object.getOwnPropertyDescriptor(numbers,"myProp")
// {value: 1, writable: true, enumerable: true, configurable: true}configurable: trueenumerable: truevalue: 1writable: true__proto__: Object
// for(let n of numbers) { console.log(n) }
// VM7237:1 1
// VM7237:1 2
// VM7237:1 3
// VM7237:1 4
// VM7237:1 5
// 5VM7237:1 undefined
// VM7237:1 10
// undefined
// for(var prop in numbers) { console.log(prop)}
// VM7279:1 0
// VM7279:1 1
// VM7279:1 2
// VM7279:1 3
// VM7279:1 4
// VM7279:1 10
// VM7279:1 myProp
// undefined
// Object.keys(numbers)
// (7) ["0", "1", "2", "3", "4", "10", "myProp"]
// numbers
// (11) [1, 2, 3, 4, 5, empty × 5, 10, myProp: 1]

var arr = new Array();
var arr = new Array(5);
var arr = new Array(1, 2, 3, 4, 5);

var muld = [[1, 2], [3, 4]];
muld[0][0];
muld[1][1];

var numbers = [];
numbers.push(100);
numbers.pop();
numbers.unshift(900);
numbers.shift();
numbers.join("%");

var scores = [24, 55, 23, 66, 87, 45, 99];
scores.filter(function(s) {
  return s % 11 == 0;
});

scores.map(function(s) {
  return s * 2;
});

scores.findIndex(function(s) {
  return s > 60;
});

scores.find(function(s) {
  return s > 60;
});
