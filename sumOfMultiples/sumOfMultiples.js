function sumMul(n,m){
  let sum = 0;
  for(let i = 1; i < m; i++) {
    sum += (i * n)
  }
  return sum;
}


module.exports = sumMul;