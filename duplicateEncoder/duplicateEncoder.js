function duplicateEncode(word){
    const charMap = {};
    const duplicates = [];  
    for (let char of word) {
        if (charMap[char]) {
            if (!duplicates.includes(char)) {
                duplicates.push(char);
                console.log('this is the duplicate array', duplicates)
            }
        } else {
            charMap[char] = true;
        }
    }
    
    const inputArray = word.split("")
    const result = inputArray.map((character) => {
        if(duplicates.includes(character)) {
            return character = ")"
        } else {
            return character = "("
        }
      });
    return result.join("")
}

module.exports = duplicateEncode;