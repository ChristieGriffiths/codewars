function addBinary(a,b) {
  let sum = a + b 
  let binaryResult = []
  do {
    binaryResult.unshift(sum % 2);
    sum = Math.floor(sum / 2);
  } while(sum !== 0)

  return binaryResult.join("");
}

module.exports = addBinary;