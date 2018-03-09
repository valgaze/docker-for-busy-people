const http = require('http')  
const port = process.env.PORT || 8001

const requestHandler = (request, response) => {  
  const val = String(Math.random());
  console.log('Server 2:', val);
  response.end(val);
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {  
  if (err) {
    return console.log('ERROR:', err)
  }

  console.log(`****\n\nSERVER_2 AVAILABLE ON ${port}\n\n****`);
});
