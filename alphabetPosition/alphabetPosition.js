function alphabetPosition(text) {
  downcaseSplitText = text.toLowerCase().split("")
  result = []
  pattern = /[a-zA-Z]/
  for(i = 0; i < downcaseSplitText.length; i++) {
    let element = downcaseSplitText[i]
    if(pattern.test(element)) {
      result.push(element.charCodeAt(0) - 96)
    }
  }
  return result.join(' ')
}

module.exports = alphabetPosition;