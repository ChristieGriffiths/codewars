function powersOfTwo(n){
  let result = [];
  for (let i = 0; i <= n; i++) {
    console.log( 2** i)
    result.push(2 ** i);
  }
  return result;
}

module.exports = powersOfTwo;