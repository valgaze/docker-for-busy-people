const http = require('http')  
const port = process.env.PORT || 8000 

const retrieve = (url) => {
	return new Promise((resolve, reject) => {
		http.get(url, (res) => {
			  res.setEncoding("utf8");
			  let body = "";
			  res.on("data", data => {
			    body += data;
			  });
			  res.on("end", () => {
			    body = JSON.parse(body);
			    resolve(body);
			  });
		});
	})
}

const requestHandler = (request, response) => {  
	/* 
	   Note: We're referring to 'server2' below
	   since 'localhost' would refer to the container 
	   housing server1 (this server)
	*/
	retrieve('http://server2:8001').then((output) => {
		console.log('Server1', output);
  		response.end('From other server:' + output);
	});
}

const server = http.createServer(requestHandler);


server.listen(port, (err) => {  
  if (err) {
    return console.log('ERROR:', err)
  }

  console.log(`****\n\nSERVER_1 AVAILABLE ON ${port}\n\n****`);
});
