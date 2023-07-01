function validBraces(braces){
  const regex = /.{1,2}/g;
  const pairedString = braces.match(regex);
  console.log(pairedString)
  for (let i = 0; i < pairedString.length; i++) {
    if (['()', '[]', '{}'].includes(pairedString[i])) {
      continue; 
    } else {
      return false 
    }
  }
  return true 
}

module.exports = validBraces;



// split the string 
// loop through the array until the end of the array 
// if array[index] === '(' && array[index + 1] === ')'
 
