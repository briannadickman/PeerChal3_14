var http = require('http');

var getRandom = require('./module1.js');
var toUSD = require('./module2.js');
var newBalance = "";
var statement = "";

function getBalance() {
  newBalance = toUSD(getRandom(100, 1000000));
  return newBalance;
}

function printBalance(newBalance) {
  statement = ("Account Balance: " + newBalance);
  return statement;
}


module.exports = {
  getBalance,
  printBalance
};
