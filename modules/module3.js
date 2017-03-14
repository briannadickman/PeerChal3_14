var http = require('http');

var getRandom = require('./module1.js');
var toUSD = require('./module2.js');

function getBalance() {
  var newBalance = toUSD(getRandom(100, 1000000));
  return newBalance;
}

module.exports = getBalance;
