const uniqueInOrder = require('./uniqueInOrder')

describe('uniqueInOrder', () => {
  it('takes a single character and returns it inside an array', () =>{
    expect(uniqueInOrder('a')).toEqual(['a'])
  });
  it('takes a two characters and them inside an array', () =>{
    expect(uniqueInOrder('aa')).toEqual(['a', 'a'])
  });
});