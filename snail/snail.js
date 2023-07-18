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

  console.log(sumNestedArrays([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

  while (sumNestedArrays(array) > 0) {
    console.log('I made it into the loop')
    result.push(...array[0])
    console.log(result)
    // add the 0th array to the the result
    array.splice(0, 1);
    console.log(array);
    // delete the 0th array from the arrays
    for(let i = 0; i <= array.length - 1 ; i++) {
      let lastElement = array[i].length - 1
      result.push(array[i][lastElement])
      console.log(`the result when adding the last element of every array: loop: ${i}  : ${result}`)
      // add the last element of every array the result
      array[i].splice(lastElement, 1) 
      console.log(`the array when removing the last element of every array: loop: ${i}  : ${array}`)
      // delete the last element of every array
    }
    console.log('makes it out of the for loop')
    console.log('result after the for loop: ' + result);

    let lastElements = array[array.length - 1]
    Array.isArray(lastElements) ? result.push(...lastElements.reverse()) : console.log("code ran this far");
    console.log('result at line 39: ' + result)
    // push the last array to the result but in reverse order 
    array.splice(array.length - 1, 1);
    // delete the last array from the arrays
    console.log('array at line 43 : ' + array)
    for(let i = array.length - 1; i > -1; i--) {
      console.log(array[i][0])
      console.log(Array.isArray(array[i]));
      Array.isArray(array[i])? result.push(array[i][0]) : console.log("code ran this far");
      console.log(result)

      // add the first element of each array but in reverse order
      console.log(array)
      array[i].splice(0, 1)
      console.log(array)
      // remove the first element after adding it
    }
    console.log(array)
    console.log('sum of arrays at line 51: ' + sumNestedArrays(array))
  }
  console.log('reaches the end: ');
  console.log(result);

  return(result);

}

module.exports = snail;