function alphabetPosition(text) {
  splitText = text.split("")
  result = []
  pattern = /[a-zA-Z]/
  for(i = 0; i < splitText.length; i++) {
    let element = splitText[i]
    if(pattern.test(element)) {
      result.push(element.charCodeAt(0) - 96)
    }
  }
  return result.join(' ')
}

module.exports = alphabetPosition;