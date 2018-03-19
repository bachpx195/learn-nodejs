const rect = require('./Shape/rectangle');
let aCircle = require('./Shape/circle');
let arithmeticMean = require('./Math/arithmetic');
let http = require('http');
const port = 3001

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

  // debugger;
  console.log(`Result is : ${arithmeticMean.arithmeticMean([1,2,4])}`);
  // end 3

console.log(`==========Lession 3: HTTP module==========`);

    const server = http.createServer((request, response) => {
        // response.write("this is a response for a request !");
        const ipAddress = request.socket.remoteAddress;
        response.write(`Your IP address is ${ipAddress} \r\n`);
        response.end();
    }).listen(port);
    console.log(`Server is running with post ${port}`);