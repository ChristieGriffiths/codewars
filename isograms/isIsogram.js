function isIsogram(str){
  str = str.toLowerCase();
  console.log(str)
  const characterCount = {}
  str.split('').forEach(function(letter) {
    if(characterCount[letter]===undefined) {
      characterCount[letter] = 1;
    } else {
      characterCount[letter] += 1;
    }
  })
  for (const key in characterCount) {
    const value = characterCount[key];
    if (value > 1) { return false }
  }
  return true;
}

module.exports = isIsogram;