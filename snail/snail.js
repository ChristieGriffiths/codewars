snail = function(array) {
  if(array.length !== 1) {
    let result = array[0]
    result.push(array[1][2])
    result.push(...array[2].reverse())
    result.push(...array[1].slice(0, 2));
    console.log(result);
    return result;
  } else {
    return array[0];
  }
  
}

module.exports = snail;