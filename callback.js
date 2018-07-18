// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// setTimeout(function() {
//   console.log(5);
//   console.log(6);
//   console.log(7);
//   setTimeout(function() {
//     console.log(8);
//     console.log(9);
//     console.log(10);
//   }, 500);
// }, 500);

function step1(next) {
  console.log(1);
  console.log(2);
  console.log(3);
  console.log(4);
  next(step3);
}

function step2(next) {
  setTimeout(function() {
    console.log(5);
    console.log(6);
    next(step4);
  }, 1500);
}

function step3(next) {
  console.log(7);
  next();
}

function step4() {
  setTimeout(function() {
    console.log(8);
    console.log(9);
  }, 500);
}

function doWork() {
  step1(step2);
  // step2();
  // step3();
  // step4();
}

var step1 = new Promise(function(resolve, reject) {
  setTimeout(() => {
    console.log(1);
    console.log(2);
    resolve();
  }, 10000);
});

function step2() {
  console.log(3);
  console.log(4);
}

var step3 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    console.log(5);
    console.log(6);
    resolve();
  }, 20000);
});

function step4() {
  console.log(7);
  console.log(8);
}

async function process() {
  try {
    await step1;
    step2();
    await step3;
    step4();
  } catch (e) {}
}

process();
