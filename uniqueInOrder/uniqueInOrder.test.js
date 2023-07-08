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
  it('takes a two identical characters and returns them inside an array but with removing any duplicates that are next to each other', () =>{
    expect(uniqueInOrder('aaba')).toEqual(['a', 'b', 'a'])
  });
  it('takes a two identical characters and returns them inside an array but with removing any duplicates that are next to each other', () =>{
    expect(uniqueInOrder('AAAABB')).toEqual(['A', 'B'])
  });
  it('takes a two identical characters and returns them inside an array but with removing any duplicates that are next to each other', () =>{
    expect(uniqueInOrder('AAAABBBCCDAABBB')).toEqual(['A', 'B', 'C', 'D', 'A', 'B'])
  });
  // it('takes a two identical characters and returns them inside an array but with removing any duplicates that are next to each other', () =>{
  //   expect(uniqueInOrder('ABBCcAD')).toEqual(['A', 'B', 'C', 'c', 'A', 'D'])
  // });
  it('takes a two identical characters and returns them inside an array but with removing any duplicates that are next to each other', () => {
    expect(uniqueInOrder([1,2,2,3,3])).toEqual([1,2,3])
  });
});