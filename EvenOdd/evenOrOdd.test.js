const evenOrOdd = require('./evenOrOdd')

describe ('returns whether number is even or odd', () => {
  it('2 is even', () => {
    expect(evenOrOdd(2)).toEqual('Even')
  })
  it('4 is even', () => {
    expect(evenOrOdd(4)).toEqual('Even')
  })
  it('1 is odd', () => {
    expect(evenOrOdd(1)).toEqual('Odd')
  })
  it('0 is even', () => {
    expect(evenOrOdd(0)).toEqual('Even')
  })
});