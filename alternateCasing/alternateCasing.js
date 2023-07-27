String.prototype.toAlternatingCase = function () {
  return this.split('').map((char) => {
    return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
  }).join('');
};