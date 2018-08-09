import { Component, OnInit } from '@angular/core';

import { IpaPhone } from '../ipa-phone';
import { VOWELS } from '../vowels';
import { flatMap } from '../util-functions';

@Component({
  selector: 'app-simple-vowel-symbols-game',
  templateUrl: './simple-vowel-symbols-game.component.html',
  styleUrls: ['./simple-vowel-symbols-game.component.css']
})
export class SimpleVowelSymbolsGameComponent implements OnInit {
  vowels: IpaPhone[];

  constructor() {
    this.vowels = flatMap(vowel => flatMap(vow => vow, vowel), VOWELS);
  }

  ngOnInit() {
  }

}
