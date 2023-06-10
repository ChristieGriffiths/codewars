function toCamelCase(str){
  let seperatedWords = str.split(/[-_]/)
  if(/^[a-z]/.test(seperatedWords[0])) {
    let temporarilyRemovedWord = seperatedWords.splice(0, 1);
    seperatedWords = seperatedWords.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1)
    });
    seperatedWords.unshift(temporarilyRemovedWord)
  } else {
    seperatedWords = seperatedWords.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
    });
  };
  return seperatedWords.join("");
};

module.exports = toCamelCase;
