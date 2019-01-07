import { Component, OnInit } from '@angular/core';

import { IpaPhone } from '../ipa-phone';
import { CookieService } from '../cookie.service';
import { IpaPhonesGame } from '../random-phone-game';
import { IpaPhonesGameStats } from '../random-phone-game-stats';
import { VOWELS } from '../vowels';
import { flatMap, updatePhonesGameStatsCookie, calculateStatsDelta } from '../util-functions';
import { VOWEL_PHONES_GAME_COOKIE_NAME, GAME_COOKIE_EXPIRE_DAYS } from '../constants';

const soundsFolder = "../../assets/sounds/vowels/";
const initialMessage = "Messages:\n";
const startButtonText = "Start";
const nextButtonText = "Next";

const COOKIE_NAME = VOWEL_PHONES_GAME_COOKIE_NAME;
const COOKIE_EXPIRE_DAYS = GAME_COOKIE_EXPIRE_DAYS;

@Component({
  selector: 'app-advanced-vowel-sounds-game',
  templateUrl: './advanced-vowel-sounds-game.component.html',
  styleUrls: ['./advanced-vowel-sounds-game.component.scss']
})
export class AdvancedVowelSoundsGameComponent implements OnInit {
  vowels = VOWELS;
  vowelsGame: IpaPhonesGame;
  messages: string;
  hint: string;
  buttonText: string;
  replaySoundButtonDisabled: boolean;
  previousStats: IpaPhonesGameStats;

  constructor(private cookieService: CookieService) {
    this.vowelsGame = new IpaPhonesGame(flatMap(vowel => flatMap(vow => vow, vowel), this.vowels), soundsFolder);
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
    this.vowelsGame.playRound();
    this.buttonText = nextButtonText;
    this.replaySoundButtonDisabled = false;
  }

  replaySound() {
    if (this.vowelsGame) {
      this.vowelsGame.playSound();
    }
  }

  makeGuess(vowel: IpaPhone) {
    this.messages += vowel.symbolAndDescriptionString() + "\n";
    if (!this.vowelsGame.nextEnabled) {
      this.messages += this.vowelsGame.makeGuess(vowel.description) + "\n";
      const currentStats = this.vowelsGame.getStats();
      updatePhonesGameStatsCookie(this.cookieService, COOKIE_NAME, COOKIE_EXPIRE_DAYS,
                                  calculateStatsDelta(currentStats, this.previousStats));
      this.previousStats = new IpaPhonesGameStats(currentStats.questions, currentStats.guesses, currentStats.corrects);
    }
  }

  mouseEnter(vowel: IpaPhone) {
    this.hint = vowel.description;
  }

  mouseLeave(vowel: IpaPhone) {
    this.hint = "";
  }

  startRoundButtonDisabled(): boolean {
    if (this.vowelsGame) {
      return !this.vowelsGame.nextEnabled;
    }
    return true;
  }
}
