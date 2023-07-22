function validatePIN (pin) {
  if(pin.length === 4 || pin.length === 6) {
    return true; 
  } else {
    return false;
  }
}

module.exports = validatePIN;