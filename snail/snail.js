snail = function(array) {
  result = []

  function sumNestedArrays(arrays) {
    let total = 0;
  
    for (let i = 0; i < arrays.length; i++) {
      for (let j = 0; j < arrays[i].length; j++) {
        total += arrays[i][j];
      }
    }
    return total;
  }

  while (sumNestedArrays(array) !== 0) {
    result.push(array[0])
    // add the 0th array to the the result
    array.splice(0, 1);
    // delete the 0th array from the arrays
    for(let i = 0; i < array.length - 1; i++) {
      let lastElement = array[i].length - 1
      result.push(array[i][lastElement])
      // add the last element of every array the result
      array[i].splice(lastElement, 1)  
      // delete the last element of every array
    }
    let lastElements = array[array.length - 1]
    result.push(lastElements);
    // push the last array to the result but in reverse order 
    result.splice(array[array.length - 1, 1]);
    // delete the last array from the arrays
    for(let i = array.length - 0; i === 0; i--) {
      result.push(array[i][0]);
      // add the first element of each array but in reverse order
      result.splice(array[i][0], 1)
      // remove the first element after adding it
    }
  }
  console.log(result);
  return(result);
}

module.exports = snail;