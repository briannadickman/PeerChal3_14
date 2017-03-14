var http = require('http');
// var getRandom = require('./modules/module1.js');
var toUSD = require('./modules/module2.js');
var getNewBalance = require('./modules/module3.js');
var balance = "";
var print = "";

http.createServer(function(request, response){
  balance = getNewBalance.getBalance();
  print = getNewBalance.printBalance(balance);
  response.writeHead(200);
  console.log(balance);
  response.write(balance);
  response.write(print);
  // response.write("Your new balance is: " + balance);
  // console.log("Your new balance is: " + balance);
  response.end();
}).listen(8000);

console.log("listening!");
