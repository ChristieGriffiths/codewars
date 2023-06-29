function maskify (cc) {
  const cardLength = cc.length
  if (cardLength <= 4) {
    return cc; 
  } else { 
    let encryptedCard = Array.from(cc);
    encryptedCard.forEach((char, index) => {
      if (index < encryptedCard.length - 4) {
        encryptedCard[index] = '#';
      }
    });
    return encryptedCard.join("");
  }
}

module.exports = maskify;