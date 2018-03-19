'use strict';

var rect = require('../Shape/rectangle');
var aCircle = require('../Shape/circle');
var arithmeticMean = require('../Math/arithmetic');
var http = require('http');
var port = 3001;

console.log('==========Lession 1: Print Hello World==========');

console.log("hello world");
// end 1

console.log('==========Lession 2: Module==========');

console.log('The circumference of the rectangle width 10, height 20 is ' + rect.circumference(10, 20));

console.log("hello world");

console.log('' + rect.currentDateTime);
console.log('' + rect.directoryName);
console.log('' + rect.fileName);

console.log('' + aCircle.area(3));
// end 2

console.log('==========Lession 3: Debugger==========');

// debugger;
console.log('Result is : ' + arithmeticMean.arithmeticMean([1, 2, 4]));
// end 3

console.log('==========Lession 3: HTTP module==========');
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
console.log('==========Lession 5: Su dung Babel==========');

var server = http.createServer(function (request, response) {
    // response.write("this is a response for a request !");
    response.writeHead(200, {
        'content-Type': 'text/html'
    });

    response.write('Request\'s url : ' + request.url + ' \r\n');
    response.end();
}).listen(port);
console.log('Server is running with post ' + port);
console.log('thay doi cai nhe ^^');