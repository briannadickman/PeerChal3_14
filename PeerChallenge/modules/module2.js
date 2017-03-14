var roundNumber = "";

function toUSD(number){
  roundNumber = "$" + (number).toFixed(2);
  return roundNumber;
}

module.exports = toUSD;
