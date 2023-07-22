function validatePIN (pin) {
  if(pin.length === 4) {
    return true; 
  } else {
    return false;
  }
}

module.exports = validatePIN;