const moveZeros = require ("./moveZeros")

describe('moveZeros', () => {
  it('doesn\'t remove non-zeros', () => {
    expect(moveZeros([1])).toEqual([1])
  });
  it('removes 0s and places them at end of array', () => {
    expect(moveZeros([0, 1])).toEqual([1, 0])
  });
  it('removes 0s and places them at end of array', () => {
    expect(moveZeros([1,2,0,1,0,1,0,3,0,1])).toEqual([1, 2, 1, 1, 3, 1, 0, 0, 0, 0])
  });
  it('removes 0s and places them at end of array', () => {
    expect(moveZeros([false,1,0,1,2,0,1,3,"a"])).toEqual([false,1,1,2,1,3,"a",0,0])
  });
  it('removes 0s and places them at end of array', () => {
    console.log(moveZeros([ 9, +0, 9, 1, 2, 1, 1, 3, 1, 9, +0, +0, 9, +0, +0, +0, +0, +0, +0, +0 ]));
    expect(moveZeros([ 9, +0, 9, 1, 2, 1, 1, 3, 1, 9, +0, +0, 9, +0, +0, +0, +0, +0, +0, +0 ])).toEqual([ 9, 9, 1, 2, 1, 1, 3, 1, 9, 9, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0 ])
  });
});