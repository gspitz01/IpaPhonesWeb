import { IpaPhone } from './ipa-phone';
import { RandomSymbolGameData } from './random-symbol-game-data';

export class RandomSymbolGame {
  questions: number;
  corrects: number;
  
  constructor(private phonesArray: IpaPhone[]) {
    this.questions = 0;
    this.corrects = 0;
  }
  
  startRound(): RandomSymbolGameData {
    if (this.phonesArray.length < 4) {
      return null;
    }
    
    let choices = [];
    let attempts = 0;
    while (choices.length < 4) {
      let choice = this.phonesArray[Math.floor(Math.random() * this.phonesArray.length)];
      if (!choices.includes(choice)) {
        choices.push(choice);
      }
      attempts++;
      if (attempts > this.phonesArray.length) {
        break;
      }
    }
    if (choices.length < 4) {
      return null;
    }
    this.questions++;
    let correct = choices.pop();
    return new RandomSymbolGameData(correct, choices);
  }
  
  correct(): void {
    this.corrects++;
  }
}
