function validBraces(braces) {
  let result = true;
  let storeOpeningBraces = []
  const splitInput = braces.split("")
  console.log('the split input', splitInput)
  const openingBrackets = ["(", "[", "{"]
  for (let i = 0; i < splitInput.length; i++) {
    const brace = splitInput[i];
    const lastElement = storeOpeningBraces.length - 1
    
    if (openingBrackets.includes(brace)) {
      storeOpeningBraces.push(brace);
    } else if (
      (brace === ")" && storeOpeningBraces[lastElement] === "(" ) ||
      (brace === "}" && storeOpeningBraces[lastElement] === "{") ||
      (brace === "]" && storeOpeningBraces[lastElement] === "[")
    ) {
      storeOpeningBraces.splice(lastElement, 1)
    } else {
      result = false;
      break;
    }
  }

  function evenParentheses() {
    let openCount = 0
    let closedCount = 0
    for (let i = 0; i < splitInput.length; i++) {
      if (splitInput[i] === "(") {
        openCount++;
      } else if (splitInput[i] === ")") {
        closedCount++;
      }
    }
    if(openCount !== closedCount) {
      return false 
    } else {
      return true
    }
  }
  function evenBrackets() {
    let openCount = 0
    let closedCount = 0
    for (let i = 0; i < splitInput.length; i++) {
      if (splitInput[i] === "[") {
        openCount++;
      } else if (splitInput[i] === "]") {
        closedCount++;
      }
    }
    if(openCount !== closedCount) {
      return false 
    } else {
      return true
    }
  }
  function evenBraces() {
    let openCount = 0
    let closedCount = 0
    for (let i = 0; i < splitInput.length; i++) {
      if (splitInput[i] === "{") {
        openCount++;
      } else if (splitInput[i] === "}") {
        closedCount++;
      }
    }
    if(openCount !== closedCount) {
      return false 
    } else {
      return true
    }
  }
  console.log('even Parentheses result' , evenParentheses())

  if ((evenParentheses() && evenBrackets() && evenBraces()) === false) { 
    result = false;
}


    return result 
}










// const countParentheses = braces.split('').filter(char => char === '(' || char === ')').length;
// const countBrackets = braces.split('').filter(char => char === '[' || char === ']').length;
// const countBraces = braces.split('').filter(char => char === '{' || char === '}').length;

// if (countParentheses % 2 === 0 && (countBrackets % 2 === 0) && (countBraces% 2 === 0)) {
//   return true;
// } else {
//   return false;
// }
// const regex = /.{1,2}/g;
// const pairedString = braces.match(regex);

// for (let i = 0; i < pairedString.length; i++) {
//     if (['()', '[]', '{}'].includes(pairedString[i])) {
//       continue; 
//     } else {
//       return false 
//     }
//   }
//   return true 


module.exports = validBraces;
