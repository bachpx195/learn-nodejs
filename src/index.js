const rect = require('../Shape/rectangle');
let aCircle = require('../Shape/circle');
let arithmeticMean = require('../Math/arithmetic');
let http = require('http');
const port = 3001;
let fileManager = require('./fileManager');
const fileName = __dirname + '/../data/temp.txt';
const EventEmitter = require('events');


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
/*
    const server = http.createServer((request, response) => {
        // response.write("this is a response for a request !");
        response.writeHead(200, {
            'content-Type': 'text/html',
            'Trailer': 'Content-MD5'
        });

        const ipAddress = request.socket.remoteAddress;
        response.write(`Your IP address is ${ipAddress} \r\n`);
        response.write(`Request's url : ${request.url} \r\n`);
        // debugger;
        response.write(`Detail request's url: ${JSON.stringify(require('url').parse(request.url, true).query)} \r\n`);
        response.addTrailers({'Content-MD5': '57af5706b6fbf6ba15f4a222993588a5'});
        response.end();
    }).listen(port);
    console.log(`Server is running with post ${port}`);
    // end 4
*/
console.log(`==========Lession 5: Su dung Babel==========`);
/*
    const server = http.createServer((request, response) => {
        // response.write("this is a response for a request !");
        response.writeHead(200, {
            'content-Type': 'text/html',
        });

        response.write(`Request's url : ${request.url} \r\n`);
        response.end();
    }).listen(port);
    console.log(`Server is running with post ${port}`);
    console.log(`thay doi cai nhe ^^`);
*/
    // end 5

console.log(`==========Lession 6: Lam viec voi file==========`);
    console.log(`Working with files`);
    fileManager.createNewFile(fileName);
    let jsonObject = {
      foods: [
          {
              foodName: "Cream tea",
              foodDescription: "This is a cup of tea"
          },
          {
              foodName: "Japanese Salad",
              foodDescription: "Very delicious Japanese Salad"
          },
          {
              foodName: "Karean Kimchi",
              foodDescription: "Tranditional Korean Food"
          },
          {
              foodName: "Fresh mushroom",
              foodDescription: "Fresh mushroom with vegatables"
          },
          {
              foodName: "Oysters",
              foodDescription: "Oysters with ice rock"
          },
          {
              foodName: "Multiple salad",
              foodDescription: "Salad mixed with mushroom"
          },
          {
              foodName: "Vegetable",
              foodDescription: "Fresh vegatables"
          }
      ],
      resultCode: 200,
      restaurantName: "Sasimi BBQ"
    };
    jsonObject.address = "25 Lan Ong, Bang Bang, Hai Phong, Viet Nam";
    fileManager.saveJsonObjectToFile(jsonObject, fileName);
    // fileManager.readJsonObjectFromFile(fileName);
    // end 6

console.log(`==========Lession 7: Events==========`);
    class Customer extends EventEmitter {
        constructor(name, gender) {
            super();
            this.name = name;
            this.gender = gender;
        }
    }
    const mrJohn = new Customer("John", "male");
    const callbackFunction = (foods, customer) => {
        for(let index in foods){
            console.log(`${customer.name} call ${foods[index]}`);
        }
    };
    mrJohn.on('eventCallFoods', callbackFunction);
    console.log("Do something...");
    console.log("Do task 1");
    mrJohn.emit("eventCallFoods", ["Pizza", "Salad"], mrJohn);

    // end 7

