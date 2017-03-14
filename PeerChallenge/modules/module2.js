var roundNumber = 0;

function toUSD(number){
  // roundNumber = "$" + (number).toFixed(2);
  roundNumber = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(number);
  return roundNumber;
}

module.exports = toUSD;
