var uniqueInOrder=function(iterable){
  let splitInput;
  if (Array.isArray(iterable)) {
    splitInput = iterable
  } else {
    splitInput = iterable.split('');
  }
  console.log(`split input before loop ${splitInput}`)
  for (let i = 1; i < splitInput.length; i ++) {
    if (splitInput[i] === splitInput[i-1]) {
      splitInput.splice(i-1, 1);
      i -= 1 
    }
  }
  return splitInput
}

module.exports = uniqueInOrder;