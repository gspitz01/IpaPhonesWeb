import { RandomSymbolGame } from './random-symbol-game';
import { IpaPhone } from './ipa-phone';
import { RandomSymbolGameData } from './random-symbol-game-data';

describe("RandomSymbolGame", () => {
  let game: RandomSymbolGame;
  const notEnoughPhones = [new IpaPhone("105", "0069", "Close front unrounded", "Close_front_unrounded.ogg.mp3")];
  const justEnoughPhones = [new IpaPhone("105", "0069", "Close front unrounded", "Close_front_unrounded.ogg.mp3"),
                            new IpaPhone("105", "0069", "Close front unrounded", "Close_front_unrounded.ogg.mp3"),
                            new IpaPhone("105", "0069", "Close front unrounded", "Close_front_unrounded.ogg.mp3"),
                            new IpaPhone("105", "0069", "Close front unrounded", "Close_front_unrounded.ogg.mp3")];
  const plentyOfPhones = [new IpaPhone("105", "0069", "Close front unrounded", "Close_front_unrounded.ogg.mp3"),
                          new IpaPhone("105", "0069", "Close front unrounded", "Close_front_unrounded.ogg.mp3"),
                          new IpaPhone("105", "0069", "Close front unrounded", "Close_front_unrounded.ogg.mp3"),
                          new IpaPhone("105", "0069", "Close front unrounded", "Close_front_unrounded.ogg.mp3"),
                          new IpaPhone("105", "0069", "Close front unrounded", "Close_front_unrounded.ogg.mp3"),
                          new IpaPhone("105", "0069", "Close front unrounded", "Close_front_unrounded.ogg.mp3"),
                          new IpaPhone("105", "0069", "Close front unrounded", "Close_front_unrounded.ogg.mp3"),
                          new IpaPhone("105", "0069", "Close front unrounded", "Close_front_unrounded.ogg.mp3")];
  
  beforeEach(() => {
    game = new RandomSymbolGame(plentyOfPhones);
  });
  
  afterEach(() => {
    game = null;
  });
  
  it("should create an instance", () => {
    expect(game).toBeTruthy();
  });
  
  it("should start with 0 questions and corrects", () => {
    expect(game.corrects).toBe(0);
    expect(game.questions).toBe(0);
  });
  
  it("should return null on startRound with not enough IpaPhones, does not increase questions", () => {
    game = new RandomSymbolGame(notEnoughPhones);
    const result = game.startRound();
    expect(result).toBe(null);
    expect(game.questions).toBe(0);
  });
  
  it("should return RandomSymbolGameData with 3 wrongs on startRound, increases questions by 1", () => {
    const result = game.startRound();
    expect(result.correct).toBeTruthy();
    expect(result.wrong.length).toBe(3);
    expect(game.questions).toBe(1);
  });
  
  it("should increase corrects by 1 on correct", () => {
    game.correct();
    expect(game.corrects).toBe(1);
  });
});