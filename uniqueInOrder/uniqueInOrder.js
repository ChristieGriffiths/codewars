var uniqueInOrder=function(iterable){
  splitInput = iterable.split('');
  const uniq = [...new Set (splitInput)]
  return uniq
}

module.exports = uniqueInOrder;