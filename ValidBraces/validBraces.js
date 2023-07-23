function validBraces(braces) {
  let result; 
  let storeOpeningBraces = []
  const splitInput = braces.split("")
  const openingBrackets = ["(", "[", "{"]
  const lastElement = openingBrackets.length - 1
  for (let i = 0; i < splitInput.length; i++) {
    const brace = splitInput[i];
  
    if (openingBrackets.includes(brace)) {
      storeOpeningBraces.push(brace);
    } else if (
      (brace === ")" && storeOpeningBraces[lastElement] === "(") ||
      (brace === "}" && storeOpeningBraces[lastElement] === "{") ||
      (brace === "]" && storeOpeningBraces[lastElement] === "[")
    ) {

      storeOpeningBraces.splice(lastElement, 1)
    } else {
      // Handle the case when the condition is not met
      // For example, you can return false here or do something else
      result = false;
      break 
    }
  }
  if(result === false) { return false }
  return true 
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
  //   if (['()', '[]', '{}'].includes(pairedString[i])) {
  //     continue; 
  //   } else {
  //     return false 
  //   }
  // }
  // return true 


module.exports = validBraces;
