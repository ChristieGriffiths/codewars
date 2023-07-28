function powersOfTwo(n){
  let result = [];
  for (let i = 0; i <= n; i++) {
    console.log('makes it into loop');
    console.log('i equals', i);
    console.log( 2** i)
    result.push(2 ** i);
  }
  console.log('result after loop', result);

  return result;
}

module.exports = powersOfTwo;