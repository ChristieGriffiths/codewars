const isValidWalk = require('./walk10');

describe('walking function', () => {
  it('returns false when given array != 10 elements', () => {
    const result = isValidWalk(['w']);
    expect(result).toEqual('False');
  });
  it('returns false when given array != 10 elements', () => {
    const result = isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']);
    expect(result).toEqual('False');
  });
  it('returns true when user is returned to starting point in time', () => {
    const result = isValidWalk(['n','s','n','s','n','s','n','s','n','s']);
    expect(result).toEqual('True');
  });
  it('returns false when user is not returned to starting point in time', () => {
    const result = isValidWalk(['n','n','n','s','n','s','n','s','n','s']);
    expect(result).toEqual('False');
  });
  
}); 