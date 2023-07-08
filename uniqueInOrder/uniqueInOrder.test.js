const uniqueInOrder = require('./uniqueInOrder')

describe('uniqueInOrder', () => {
  it('takes a single character and returns it inside an array', () =>{
    expect(uniqueInOrder('a')).toEqual(['a'])
  });
  it('takes a two different characters and returns them inside an array', () =>{
    expect(uniqueInOrder('ab')).toEqual(['a', 'b'])
  });
  it('takes a two identical characters and returns them inside an array but with removing any duplicates', () =>{
    expect(uniqueInOrder('aa')).toEqual(['a'])
  });
});