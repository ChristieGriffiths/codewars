function parse( data ) {
  let counter = 0
  let result = []
  let splitString = data.split('')
  splitString.forEach((character) => {
    if (character === 'i') {
      counter += 1;
    } else if (character === 'o') {
      result.push(counter);
    } else if (character === 's') {
      counter **= 2;
    } else if (character === 'd') {
      counter -= 1;
    }
  })
  return result; 
}

module.exports = parse; 