describe('toWeirdCase', () => {
  it('returns index 0 capitalized', () => {
    const result = toWeirdCase('t');
    expect(result).toEqual('T');
  });
  it('returns index 0 capitalized', () => {
    const result = toWeirdCase('x');
    expect(result).toEqual('X');
  });
  it('correctly downcases an uppercase string', () => {
    const result = toWeirdCase('THIS');
    expect(result).toEqual('ThIs');
  });
  it('correctly downcases an uppercase string', () => {
    const result = toWeirdCase('ThIs iS A TeSt');
    expect(result).toEqual('ThIs Is A TeSt');
  });
  
})








const toWeirdCase = require('./function')
