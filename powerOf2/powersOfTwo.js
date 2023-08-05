function powersOfTwo(n){
  result = [1]
  for(let i = 1; i <= n; i++) {
    result.push(2 ** i); 
  }
  return result; 
}

module.exports = powersOfTwo;