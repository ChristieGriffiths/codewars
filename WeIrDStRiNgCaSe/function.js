function toWeirdCase(string){
  let splitLetters = string.split(' ').map(word => word.split(''));
  splitLetters.forEach(function(innerArray) {
    for (let i = 0; i < innerArray.length; i++) {
      if (i % 2 === 0) {
        innerArray[i] = innerArray[i].toUpperCase();
      } else {
        innerArray[i] = innerArray[i].toLowerCase();
      }
    };
  });
  const joinedWords = splitLetters.map(subArray => subArray.join('')).join(' ');
  return joinedWords;
}

module.exports =  toWeirdCase;