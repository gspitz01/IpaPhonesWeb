import { IpaPhonesGame } from './random-phone-game';
import { IpaPhone } from './ipa-phone';

describe("IpaPhonesGame", () => {
  let game: IpaPhonesGame;
  const phonesArray = [new IpaPhone("105", "0069", "Close front unrounded", "Close_front_unrounded_vowel.ogg.mp3")];
  const phonesFolder = "../assets/sounds/vowels/";
  const wrongAnswers = 2;
  
  beforeEach(() => {
    game = new IpaPhonesGame(phonesArray, phonesFolder, wrongAnswers);
  });
  
  afterEach(() => {
    game = null;
  });
  
  it("should set nextEnabled true on construction", () => {
    expect(game.nextEnabled).toBeTruthy();
  });
  
  it("should set nextEnabled false on playRound()", () => {
    game.playRound();
    expect(game.nextEnabled).toBeFalsy();
  });
  
  it("should set nextEnabled to true on correct guess", () => {
    game.playRound();
    game.makeGuess(phonesArray[0].description);
    expect(game.nextEnabled).toBeTruthy();
  });
  
  it("should set nextEnabled to true on enough wrong guesses", () => {
    const badGuess = "Bad guess";
    game.playRound();
    for (let i = 0; i < wrongAnswers; i++) {
      game.makeGuess(badGuess);
    }
    expect(game.nextEnabled).toBeTruthy();
  });
  
  it("should return 'Correct' from makeGuess on correct guess", () => {
    game.playRound();
    expect(game.makeGuess(phonesArray[0].description)).toContain("Correct");
  });
  
  it("should return 'Incorrect' from makeGuess on incorrect guess", () => {
    game.playRound();
    expect(game.makeGuess("A bad guess")).toContain("Incorrect");
  })
});