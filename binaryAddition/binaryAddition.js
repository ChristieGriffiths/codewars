function addBinary(a,b) {
  let inputSum = a + b 
  let quotient = inputSum
  let binaryResult = []
  do {
    binaryResult.push(quotient % 2);
    // adds remainder to array
    quotient = Math.floor(quotient / 2);
    // resets the quotient to equal itself divided by 2 and rounded down
  } while(quotient !== 0)
  return binaryResult.reverse().join("");

}

module.exports = addBinary;