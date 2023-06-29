const parse = require('./deadfish');

describe('parse', () => {
  it('takes a string', () => {
    const result = parse('i');
    expect(result).toEqual([]);
  })
  it('takes a string and increments it and returns the result inside an array', () => {
    const result = parse('io');
    expect(result).toEqual([1]);
  })
  it('takes a string and decrements it and returns the result inside an array', () => {
    const result = parse('do');
    expect(result).toEqual([-1]);
  })
  it('takes a string and increments it twice, squares it and returns the result  inside an array', () => {
    const result = parse('iiso');
    expect(result).toEqual([4]);
  })
  it('passes codewars example', () => {
    const result = parse('iiisxxxdoso');
    expect(result).toEqual([ 8, 64 ]);
  })
  it('passes codewars example', () => {
    const result = parse('iiisdoso');
    expect(result).toEqual([ 8, 64 ]);
  })
})











// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// parse("iiisdoso") => [ 8, 64 ]