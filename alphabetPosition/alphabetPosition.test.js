const alphabetPositon = require ('./alphabetPosition');

describe('', () => {
  it('returns a 1 for the letter a', () => {
    expect(alphabetPositon('a')).toEqual('1')
  })
  it('returns a 1 for the letter a and 2 for b', () => {
    expect(alphabetPositon('ab')).toEqual('1 2')
  })
  it('returns a 1 for the letter a and 2 for b but nothing if it\'s not a letter', () => {
    expect(alphabetPositon('ab3')).toEqual('1 2')
  })
  it('replace every letter with its position in the alphabet', () => {
    expect(alphabetPositon("The sunset sets at twelve o' clock.")).toEqual("20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11")
  })
})