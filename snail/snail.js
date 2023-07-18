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

  while (sumNestedArrays(array) > 0) {
    result.push(...array[0])
    array.splice(0, 1);
    for(let i = 0; i <= array.length - 1 ; i++) {
      let lastElement = array[i].length - 1
      result.push(array[i][lastElement])
      array[i].splice(lastElement, 1) 
    }

    let lastElements = array[array.length - 1]
    Array.isArray(lastElements) ? result.push(...lastElements.reverse()) : console.log("code ran this far");
    array.splice(array.length - 1, 1);
    for(let i = array.length - 1; i > -1; i--) {
      Array.isArray(array[i])? result.push(array[i][0]) : console.log("code ran this far");
      array[i].splice(0, 1)
    }
  }
  return(result);
}

module.exports = snail;