function generateHashtag (str) {
  if(str.trim().length === 0) return false 
  result = "#"
  return result + str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = generateHashtag;