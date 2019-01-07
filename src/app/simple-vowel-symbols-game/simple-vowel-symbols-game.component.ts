import { Component, OnInit } from '@angular/core';

import { IpaPhone } from '../ipa-phone';
import { RandomSymbolGame } from '../random-symbol-game';
import { RandomSymbolGameData } from '../random-symbol-game-data';
import { VOWELS } from '../vowels';
import { flatMap, shufflePhones } from '../util-functions';

const correctMessage = "Correct!";
const wrongMessage = "Wrong! It was ";
const startButtonText = "Start";
const nextButtonText = "Next";

@Component({
  selector: 'app-simple-vowel-symbols-game',
  templateUrl: './simple-vowel-symbols-game.component.html',
  styleUrls: ['./simple-vowel-symbols-game.component.scss']
})
export class SimpleVowelSymbolsGameComponent implements OnInit {
  vowels: IpaPhone[];
  game: RandomSymbolGame;
  currentRound: RandomSymbolGameData;
  possibleAnswers: IpaPhone[];
  startRoundButtonText = startButtonText;
  startButtonDisabled = false;
  messages = "";

  constructor() {
    this.vowels = flatMap(vowel => flatMap(vow => vow, vowel), VOWELS);
    this.game = new RandomSymbolGame(this.vowels);
  }

  ngOnInit() {
  }

  startRound() {
    this.currentRound = this.game.startRound();
    this.possibleAnswers = this.currentRound.wrong.slice(0);
    this.possibleAnswers.push(this.currentRound.correct);
    shufflePhones(this.possibleAnswers);
    this.startButtonDisabled = true;
    this.startRoundButtonText = nextButtonText;
    this.messages = "";
  }

  makeGuess(phone: IpaPhone) {
    // If the start button is disabled, a round is underway
    // and therefore a guess can be accepted
    if (this.startButtonDisabled) {
      if (phone === this.currentRound.correct) {
        this.game.correct();
        this.messages = correctMessage;
      } else {
        this.messages = wrongMessage + this.currentRound.correct.description;
      }
      this.startButtonDisabled = false;
    }
  }
}
