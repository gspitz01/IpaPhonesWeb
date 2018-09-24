import { Component, OnInit } from '@angular/core';

import { CookieService } from '../cookie.service';
import { IpaPhonesGameStats } from '../random-phone-game-stats';
import { IpaSymbolsGameStats } from '../ipa-symbols-game-stats';
import { VOWEL_PHONES_GAME_COOKIE_NAME, CONSONANT_PHONES_GAME_COOKIE_NAME, VOWEL_SYMBOLS_GAME_COOKIE_NAME } from '../constants';
import { parsePhonesGameStatsFromCookie, parseSymbolsGameStatsFromCookie } from '../util-functions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  vowelPhoneGameStats: IpaPhonesGameStats;
  consonantPhoneGameStats: IpaPhonesGameStats;
  vowelSymbolsGameStats: IpaSymbolsGameStats;

  constructor(private cookieService: CookieService) {
    this.vowelPhoneGameStats = parsePhonesGameStatsFromCookie(this.cookieService.getCookie(VOWEL_PHONES_GAME_COOKIE_NAME));
    this.consonantPhoneGameStats = parsePhonesGameStatsFromCookie(this.cookieService.getCookie(CONSONANT_PHONES_GAME_COOKIE_NAME));
    this.vowelSymbolsGameStats = parseSymbolsGameStatsFromCookie(this.cookieService.getCookie(VOWEL_SYMBOLS_GAME_COOKIE_NAME));
  }

  ngOnInit() {
  }

}
