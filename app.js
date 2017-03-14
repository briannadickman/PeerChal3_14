var http = require('http');
// var getRandom = require('./modules/module1.js');
// var toUSD = require('./modules/module2.js');
var getBalance = require('./modules/module3.js');
var balance = "";

http.createServer(function(request, response){
  balance = getBalance();
  response.writeHead(200);
  response.write("Your new balance is: " + balance);
  console.log("Your new balance is: " + balance);
  response.end();
}).listen(8000);

console.log("listening!");
