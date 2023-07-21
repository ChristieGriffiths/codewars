function generateHashtag (str) {
  if(str.trim().length === 0) return false 
  let result = "";
  if(!str.startsWith("#")) {
    result = "#"
  }
  splitInput = str.split(" ")
  let capitalizedWords = splitInput.map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  result += capitalizedWords.join("")
  if(result.length > 140) {
    return false;
  } else {
    return result;
  }
}

module.exports = generateHashtag;