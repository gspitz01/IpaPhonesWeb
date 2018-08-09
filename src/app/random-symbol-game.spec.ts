import { RandomSymbolGame } from './random-symbol-game';
import { IpaPhone } from './ipa-phone';

describe("RandomSymbolGame", () => {
  let game: RandomSymbolGame;
  const phones = [new IpaPhone("105", "0069", "Close front unrounded", "Close_front_unrounded.ogg.mp3")];
  
  beforeEach(() => {
    game = new RandomSymbolGame(phones);
  });
  
  afterEach(() => {
    game = null;
  });
  
  
});