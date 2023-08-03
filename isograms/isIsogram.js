function isIsogram(str) {
  str = str.toLowerCase();
  const characterCount = {};
  for (const char of str) {
    if (characterCount[char] === undefined) {
      characterCount[char] = 1 
    } else {
      characterCount[char] += 1
    }
  }
  for (const key in characterCount) {
    const value = characterCount[key];
    if(value > 1) { return false }
  }
  return true;
} 

module.exports = isIsogram;   