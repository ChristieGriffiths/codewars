function toWeirdCase(string){
  let splitLetters = string.split("");
  for (let i = 0; i < splitLetters.length; i++) {
    if (i % 2 === 0) {
      splitLetters[i] = splitLetters[i].toUpperCase();
    } else {
      splitLetters[i] = splitLetters[i].toLowerCase();
    }
  };
  return splitLetters.join("");
}

module.exports =  toWeirdCase;