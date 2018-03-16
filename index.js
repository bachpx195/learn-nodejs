const rect = require('./Shape/rectangle');

let aCircle = require('./Shape/circle');

let arithmeticMean = require('./Math/arithmetic');

console.log(`==========Lession 1: Print Hello World==========`);

    console.log("hello world");
    // end 1

console.log(`==========Lession 2: Module==========`);

    console.log(`The circumference of the rectangle width 10, height 20 is ${rect.circumference(10, 20)}`);

    console.log("hello world");

    console.log(`${rect.currentDateTime}`);
    console.log(`${rect.directoryName}`);
    console.log(`${rect.fileName}`);

    console.log(`${aCircle.area(3)}`);
    // end 2

console.log(`==========Lession 3: Debugger==========`);

  debugger;
  console.log(`Result is : ${arithmeticMean.arithmeticMean([1,2,4])}`);
