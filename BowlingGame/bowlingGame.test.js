const Game = require('./bowlingGame')

describe('Game class', () => {
  it('can create game',  () => {
    const game = new Game;
  });

  it('can roll gutter game', () => {
    const game = new Game();
    for (let i = 0; i < 20; i++) {
      game.roll(0)
    }
    expect(game.score()).toBe(0);
  })
});