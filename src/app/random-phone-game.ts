import { IpaPhone } from './ipa-phone';
import { IpaPhonesGameStats } from './random-phone-game-stats';

// Phones in this case means sounds, not telephones
export class IpaPhonesGame {
  
  nextEnabled: boolean;
  private currentPhone: IpaPhone;
  private sound: HTMLAudioElement;
  private answered: boolean;
  private guesses: number;
  private stats: IpaPhonesGameStats;
  
  
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
    this.stats = new IpaPhonesGameStats(0, 0, 0);
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
    this.stats.questions++;
    this.playSound();
    this.nextEnabled = false;
  }
  
  /**
   * Show the statistics of the game
   *
   * @return The stats in pretty format.
   */
  private getStatsPretty(): string {
    return "You've gotten " + this.stats.corrects + " right out of " + this.stats.questions + ".\n" +
      "Your guess rate is " + (this.stats.guesses / this.stats.questions).toFixed(2) + " guesses per question.\n";
  }
  
  /**
   * Get the stats of the game
   *
   * @return The stats as an IpaPhonesGameStats
   */
  getStats(): IpaPhonesGameStats {
    return this.stats;
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
  private finishRound(): string {
    this.answered = true;
    this.nextEnabled = true;
    return this.getStatsPretty();
  }
  
  /**
   * A correct answer has been given
   *
   * @return The display for that round.
   */
  private correctAnswer(): string {
    this.stats.corrects++;
    this.guesses++;
    this.stats.guesses++;
    return "Correct!\n" + this.finishRound();
  }
  
  /**
   * An incorrect answer has been given
   *
   * @return The display for that guess.
   */
  private incorrectAnswer(): string {
    this.guesses++;
    this.stats.guesses++;
    if (this.guesses >= this.maxGuesses) {
      return "Wrong! You've run out of guesses!\nIt was " + this.currentPhone.symbolAndDescriptionString() + "!\n" +
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
  private chooseRandomPhoneForFile() {
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
}