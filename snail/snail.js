snail = function(array) {
  let result = array[0]
  if(array.length !== 1) {
    for(let i = 1; i < array.length - 1; i++) {
      let lastElement = array[i].length - 1
      result.push(array[i][lastElement])
      array[i].splice(lastElement, 1)  
    }
    
  } else {
    return array[0];
  }
  console.log(result)
  console.log(array)
}

module.exports = snail;