import { Component, OnInit } from '@angular/core';

import { IpaPhone } from '../ipa-phone';
import { IpaPhonesGame } from '../random-phone-game';
import { VOWELS } from '../vowels';

const soundsFolder = "../../assets/sounds/vowels/";
const initialMessage = "Messages:\n";
const startButtonText = "Start";
const nextButtonText = "Next";
const flatMap = (f,xs) =>
  xs.reduce((acc,x) =>
    acc.concat(f(x)), []);

@Component({
  selector: 'app-vowels-game',
  templateUrl: './vowels-game.component.html',
  styleUrls: ['./vowels-game.component.css']
})
export class VowelsGameComponent implements OnInit {
  vowels = VOWELS;
  vowelsGame: IpaPhonesGame;
  messages: string;
  hint: string;
  buttonText: string;
  replaySoundButtonDisabled: boolean;

  constructor() {
    this.vowelsGame = new IpaPhonesGame(flatMap(vowel => flatMap(vow => vow, vowel), this.vowels), soundsFolder);
    this.messages = initialMessage;
    this.hint = "";
    this.buttonText = startButtonText;
    this.replaySoundButtonDisabled = true;
  }

  ngOnInit() {
  }
  
  startRound(): void {
    this.messages = initialMessage;
    this.vowelsGame.playRound();
    this.buttonText = nextButtonText;
    this.replaySoundButtonDisabled = false;
  }
  
  replaySound(): void {
    if (this.vowelsGame) {
      this.vowelsGame.playSound();
    }
  }
  
  makeGuess(vowel: IpaPhone): void {
    this.messages += vowel.symbolAndDescriptionString() + "\n";
    if (!this.vowelsGame.nextEnabled) {
      this.messages += this.vowelsGame.makeGuess(vowel.description) + "\n";
    }
  }
  
  displayHex(vowel: IpaPhone): string {
    return vowel.hexUtfToHtml();
  }
  
  mouseEnter(vowel: IpaPhone): void {
    this.hint = vowel.description;
  }
  
  mouseLeave(vowel: IpaPhone): void {
    this.hint = "";
  }

  startRoundButtonDisabled(): boolean {
    if (this.vowelsGame) {
      return !this.vowelsGame.nextEnabled;
    }
    return true;
  }

}