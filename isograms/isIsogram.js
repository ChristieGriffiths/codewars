function isIsogram(str) {
  const lowerCaseInput = str.toLowerCase();
  const characterCount = {};
  
  for (const char of lowerCaseInput) {
    if (characterCount[char]) {
      return false;
    }
    characterCount[char] = true;
  }
  
  return true;
}

module.exports = isIsogram;   