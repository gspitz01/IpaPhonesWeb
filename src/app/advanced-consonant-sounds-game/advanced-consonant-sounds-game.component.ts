import { Component, OnInit } from '@angular/core';

import { IpaPhone } from '../ipa-phone';
import { IpaPhonesGame } from '../random-phone-game';
import { IpaPhonesGameStats } from '../random-phone-game-stats';
import { CONSONANTS } from '../consonants';
import { flatMap, updatePhonesGameStatsCookie, calculateStatsDelta } from '../util-functions';
import { CONSONANT_PHONES_GAME_COOKIE_NAME, GAME_COOKIE_EXPIRE_DAYS } from '../constants';
import { CookieService } from '../cookie.service';
import { ConsonantRow } from '../consonant-row';

const soundsFolder = "../../assets/sounds/consonants/";
const initialMessage = "Messages:\n";
const startButtonText = "Start";
const nextButtonText = "Next";

const COOKIE_NAME = CONSONANT_PHONES_GAME_COOKIE_NAME;
const COOKIE_EXPIRE_DAYS = GAME_COOKIE_EXPIRE_DAYS;

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
  previousStats: IpaPhonesGameStats;

  constructor(private cookieService: CookieService) {
    this.consonantsGame = new IpaPhonesGame(flatMap(consonantRow => consonantRow.asArray(), this.consonants), soundsFolder);
    this.messages = initialMessage;
    this.hint = "";
    this.buttonText = startButtonText;
    this.replaySoundButtonDisabled = true;
    this.previousStats = new IpaPhonesGameStats(0, 0, 0);
  }

  ngOnInit() {
  }

  startRound() {
    this.messages = initialMessage;
    this.consonantsGame.playRound();
    this.buttonText = nextButtonText;
    this.replaySoundButtonDisabled = false;
  }

  replaySound() {
    if (this.consonantsGame) {
      this.consonantsGame.playSound();
    }
  }

  makeGuess(consonant: IpaPhone) {
    this.messages += consonant.symbolAndDescriptionString() + "\n";
    if (!this.consonantsGame.nextEnabled) {
      this.messages += this.consonantsGame.makeGuess(consonant.description) + "\n";
      const currentStats = this.consonantsGame.getStats();
      updatePhonesGameStatsCookie(this.cookieService, COOKIE_NAME, COOKIE_EXPIRE_DAYS,
                                 calculateStatsDelta(currentStats, this.previousStats));
      this.previousStats = new IpaPhonesGameStats(currentStats.questions, currentStats.guesses, currentStats.corrects);
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
