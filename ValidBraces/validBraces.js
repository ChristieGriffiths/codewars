function validBraces(braces) {
  const countParentheses = braces.split('').filter(char => char === '(' || char === ')').length;
  const countBrackets = braces.split('').filter(char => char === '[' || char === ']').length;
  const countBraces = braces.split('').filter(char => char === '{' || char === '}').length;

  if (countParentheses % 2 === 0 && (countBrackets % 2 === 0) && (countBraces% 2 === 0)) {
    return true;
  } else {
    return false;
  }

}
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
