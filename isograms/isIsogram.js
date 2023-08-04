function isIsogram(str) {
  characterCount = {};
  const lowerCaseInput = str.toLowerCase()
  for(const char of lowerCaseInput) {
    if(characterCount[char] === undefined) {
      characterCount[char] = 1
    } else {
      characterCount[char] += 1
    }
  }
  for (const char in characterCount) {
    if(characterCount[char] > 1) { return false } 
  }
  return true;
}

module.exports = isIsogram;   