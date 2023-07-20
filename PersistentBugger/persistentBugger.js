function persistence(num) {
  let result = num;
  let counter = 0;
  while(result.toString().length > 1) {
    let splitInput = result.toString().split("");
    result = splitInput.reduce((accumulator, currentValue) => accumulator * currentValue);
    counter += 1;
  }
  return counter; 
}

module.exports = persistence; 