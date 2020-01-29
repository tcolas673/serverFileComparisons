// importing my http library to create server for communication
const http = require('http');

// setting up my port that app will run on
const PORT = 5000;

// set up a request handler to handle traffic it'll take in requests and return a response
const requestHandler = (request, response) => {
    console.log(request.url);
    response.end('Hello Node.js Server');
}

// acutally start up my server
const server = http.createServer(requestHandler);

// have my server handle communication at this port
server.listen(PORT, (err) => {
    if(err) {
        return console.log('something bad happened', err);
    }

    console.log(`Server is listening on ${PORT}`);
})