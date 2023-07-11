const moveZeros = require ("./moveZeros")

describe('moveZeros', () => {
  it('doesn\'t remove non-zeros', () => {
    expect(moveZeros([1])).toEqual([1])
  });
});