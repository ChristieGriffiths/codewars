const uniqueInOrder = require('./uniqueInOrder')

describe('uniqueInOrder', () => {
  it('takes a single character and returns it inside an array', () =>{
    expect(uniqueInOrder('a')).toEqual(['a'])
  });
});