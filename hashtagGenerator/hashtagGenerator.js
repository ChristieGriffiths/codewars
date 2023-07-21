function generateHashtag (str) {
  if(str.trim().length === 0) return false 
  let result = "#"
  result = result + str.charAt(0).toUpperCase() + str.slice(1);
  result = result.replace(/\s+/g, '');
  if(result.length > 140) {
    return false;
  } else {
    return result;
  }
}

module.exports = generateHashtag;