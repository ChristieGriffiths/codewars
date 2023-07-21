function generateHashtag (str) {
  if(str.trim().length === 0) return false 
  result = "#"
  return result + str 
}

module.exports = generateHashtag;