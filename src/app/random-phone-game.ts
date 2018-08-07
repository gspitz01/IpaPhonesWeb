import { IpaPhone } from './ipa-phone';

// Phones in this case means sounds, not telephones
export class IpaPhonesGame {
  
  nextEnabled: boolean;
  private currentPhone: IpaPhone;
  private sound: HTMLAudioElement;
  private answered: boolean;
  private guesses: number;
  private totalGuesses: number;
  private totalQuestions: number;
  private corrects: number;
  
  
  /**
   * @param phoneArray An array of sounds for the game to choose from.
   * @param phonesFolder The path of the folder containing the sound files.
   * @param maxGuesses The most guesses allowed in a single round of the game.
   */
  constructor(private phoneArray: IpaPhone[], private phonesFolder: string, private maxGuesses = 8) {
    this.currentPhone = null;
    this.sound = null;
    this.answered = false;
    this.guesses = 0;
    this.totalGuesses = 0;
    this.totalQuestions = 0;
    this.corrects = 0;
    this.nextEnabled = true;
  }
  
  /**
   * Play a round of the random IPA Phone game.
   *
   * Selects randomly from an array of IPA phones, keeping track of the questions, answers
   */
  playRound() {
    this.chooseRandomPhoneForFile();
    // Cache the sound file
    this.sound = new Audio(this.phonesFolder + this.currentPhone.file);
    this.answered = false;
    this.guesses = 0;
    this.totalQuestions++;
    this.playSound();
    this.nextEnabled = false;
  }
  
  /**
   * Show the statistics of the game
   *
   * @return The stats in pretty format.
   */
  getStats(): string {
    return "You've gotten " + this.corrects + " right out of " + this.totalQuestions + ".\n" +
      "Your guess rate is " + (this.totalGuesses / this.totalQuestions).toFixed(2) + " guesses per question.\n";
  }
  
  /**
   * Make a guess in a round of the random IPA phone game.
   *
   * @param guessDescription The description of the IPA phone which was guessed.
   *
   * @return The display for that guess.
   */
  makeGuess(guessDescription: string): string {
    // If a round of the game is in progress
    if (this.currentPhone && !this.answered) {
      // Check if the answer is correct
      if (guessDescription === this.currentPhone.description) {
        return this.correctAnswer();
      } else {
        return this.incorrectAnswer();
      }
    }
    return "";
  }
  
  /**
   * Complete the round
   *
   * @return The display for that round.
   */
  finishRound(): string {
    this.answered = true;
    this.nextEnabled = true;
    return this.getStats();
  }
  
  /**
   * A correct answer has been given
   *
   * @return The display for that round.
   */
  correctAnswer(): string {
    this.corrects++;
    this.guesses++;
    this.totalGuesses++;
    return "Correct!\n" + this.finishRound();
  }
  
  /**
   * An incorrect answer has been given
   *
   * @return The display for that guess.
   */
  incorrectAnswer(): string {
    this.guesses++;
    this.totalGuesses++;
    if (this.guesses >= this.maxGuesses) {
      return "Wrong! You've run out of guesses!\nIt was " + IpaPhonesGame.symbolAndDescriptionString(this.currentPhone) + "!\n" +
          this.finishRound();
    }
    return "Incorrect.";
  }
  
  
  /**
   * Play the sound file
   */
  playSound() {
    if (this.sound) {
      this.sound.play();
    }
  }
  
  /**
   * Choose from a set of IPA phones. The choice must contain the name of a sound file.
   */
  chooseRandomPhoneForFile() {
    let phone = null;
    let attempts = 0;
    while (!phone) {
      var randomPhone = this.phoneArray[Math.floor(Math.random() * this.phoneArray.length)];
      if (randomPhone.file) {
        phone = randomPhone;
      }
      attempts++;
      if (attempts > this.phoneArray.length) {
        return;
      }
    }
    this.currentPhone = phone;
  }
  
  /**
   * Turns a UTF-8 hex character code into an HTML character.
   *
   * Accepts a single UTF-8 character which can be a character with a diacritic, with the codes connected by a '+'.
   *
   * @param before The IpaPhone to show
   *
   * @return {string} An HTML character.
   */
  static hexUtfToHtml(phone: IpaPhone) {
    var htmlUtf8Prefix = "&#x";
    var ipaChar = "";
    if (phone.hex) {
      var splitChar = phone.hex.split("+");
      ipaChar = splitChar.map(singleChar => htmlUtf8Prefix + singleChar + ";").join("");
    }
    return ipaChar;
  }

  /**
   * Extract the symbol and description of an IPA phone object, usually for display purposes.
   *
   * @param phone the IpaPhone which includes the hex value and description to be returned
   *
   * @return The HTML character and description of the IPA phone concatenated.
   */
  static symbolAndDescriptionString(phone: IpaPhone): string {
    return IpaPhonesGame.hexUtfToHtml(phone) + " " + phone.description;
  }
}