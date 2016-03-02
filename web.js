var http = require('http');

var server = http.createServer(function(req, res) {
    
  console.log('Someone visited our web server!');
  
  var ip = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;
  console.log(ip);
  
  res.end('Hello from NodeJS!\nYour ip is: '+ip+'\n');
});

server.listen(3000, '0.0.0.0');
console.log("NodeJS web server running on 0.0.0.0:3000");

//run with nodejs web.js