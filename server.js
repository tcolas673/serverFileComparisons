const http = require('http');
const PORT = 5000;

const requestHandler = (request, response) => {
    console.log(request.url);
    response.end('Hello Node.js Server');
}

const server = http.createServer(requestHandler);

server.listen(PORT, (err) => {
    if(err) {
        return console.log('something bad happened', err);
    }

    console.log(`Server is listening on ${PORT}`);
})