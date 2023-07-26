function sumMul(n,m){
  let sum = 0;
  let counter = 0;
  let result = 0;

  while (result < m) {
    counter += 1 
    sum += result
    result = (counter * n)
  }
  return sum;
}


module.exports = sumMul;