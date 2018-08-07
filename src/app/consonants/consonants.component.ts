import { Component, OnInit } from '@angular/core';

import { IpaPhone } from '../ipa-phone';
import { IpaPhonesGame } from '../random-phone-game';
import { CONSONANTS } from '../consonants';

const soundsFolder = "../../assets/sounds/consonants/"
const initialMessage = "Messages:\n";
const startButtonText = "Start";
const nextButtonText = "Next";
const flatMap = (f,xs) =>
  xs.reduce((acc,x) =>
    acc.concat(f(x)), []);

@Component({
  selector: 'app-consonants',
  templateUrl: './consonants.component.html',
  styleUrls: ['./consonants.component.css']
})
export class ConsonantsComponent implements OnInit {
  consonants = CONSONANTS;
  consonantsGame: IpaPhonesGame;
  messages: string;
  hint: string;
  buttonText: string;
  replaySoundButtonDisabled: boolean;

  constructor() {
    this.consonantsGame = new IpaPhonesGame(flatMap(consonant => consonant, this.consonants), soundsFolder);
    this.messages = initialMessage;
    this.hint = "";
    this.buttonText = startButtonText;
    this.replaySoundButtonDisabled = true;
  }

  ngOnInit() {
  }
  
  startRound(): void {
    this.messages = initialMessage;
    this.consonantsGame.playRound();
    this.buttonText = nextButtonText;
    this.replaySoundButtonDisabled = false;
  }
  
  replaySound(): void {
    if (this.consonantsGame) {
      this.consonantsGame.playSound();
    }
  }
  
  makeGuess(consonant: IpaPhone): void {
    this.messages += IpaPhonesGame.symbolAndDescriptionString(consonant) + "\n";
    if (!this.consonantsGame.nextEnabled) {
      this.messages += this.consonantsGame.makeGuess(consonant.description) + "\n";
    }
  }
  
  displayHex(consonant: IpaPhone): string {
    let display = IpaPhonesGame.hexUtfToHtml(consonant);
    return display;
  }
  
  mouseEnter(consonant: IpaPhone): void {
    this.hint = consonant.description;
  }
  
  mouseLeave(consonant: IpaPhone): void {
    this.hint = "";
  }

  startRoundButtonDisabled(): boolean {
    if (this.consonantsGame) {
      return !this.consonantsGame.nextEnabled;
    }
    return true;
  }


}
