function persistence(num) {
  let result = num;
  while(result.toString().length > 1) {
    let splitInput = result.toString().split("")
    result = splitInput.reduce((accumulator, currentValue) => accumulator * currentValue);
  }
  return result; 
}

module.exports = persistence; 