const http = require('http')  
const uuid = require("node-uuid");
const port = process.env.SPECIAL_PORT || 8000 

const requestHandler = (request, response) => {  
  const message = `Hi there! Your uuid is ${uuid.v4()}, refresh to get a new one`;
  response.end(message);
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {  
  if (err) {
    return console.log('ERROR:', err)
  }

  console.log(`****\n\nSERVER AVAILABLE ON ${port}\n\n****`);
});
