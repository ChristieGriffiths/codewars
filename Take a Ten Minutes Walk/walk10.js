function isValidWalk(walk) {
  if (walk.length != 10) return 'False';
  let latitude = 0; 
  let longitude = 0;
  walk.forEach((direction) => {
    if (direction === 'n') {
      latitude += 1; 
    } else if (direction === 's') {
      latitude -= 1;
    } else if (direction === 'e') {
      longitude += 1;
    } else if (direction === 'w') {
      longitude -= 1;
    }
  })
  if (longitude == 0 && latitude == 0) {
    return 'True';
  } else {
    return 'False';
  }
}

module.exports = isValidWalk;