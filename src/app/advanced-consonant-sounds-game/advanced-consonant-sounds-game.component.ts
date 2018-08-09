import { Component, OnInit } from '@angular/core';

import { IpaPhone } from '../ipa-phone';
import { IpaPhonesGame } from '../random-phone-game';
import { CONSONANTS } from '../consonants';
import { flatMap } from '../util-functions';

const soundsFolder = "../../assets/sounds/consonants/";
const initialMessage = "Messages:\n";
const startButtonText = "Start";
const nextButtonText = "Next";

@Component({
  selector: 'app-advanced-consonant-sounds-game',
  templateUrl: './advanced-consonant-sounds-game.component.html',
  styleUrls: ['./advanced-consonant-sounds-game.component.css']
})
export class AdvancedConsonantSoundsGameComponent implements OnInit {
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
    this.messages += consonant.symbolAndDescriptionString() + "\n";
    if (!this.consonantsGame.nextEnabled) {
      this.messages += this.consonantsGame.makeGuess(consonant.description) + "\n";
    }
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
