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
});