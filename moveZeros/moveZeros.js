function moveZeros(arr) {
  let zeros = []
  for (let i = 0; i < arr.length; i ++) {
    if(arr[i] === 0) {
      zeros.push(0)
      arr.splice(i, 1)
    }
  }
  arr.push(...zeros)
  return arr
}

module.exports = moveZeros;