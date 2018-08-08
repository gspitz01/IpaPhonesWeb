import { Component, OnInit } from '@angular/core';

import { IpaPhone } from '../ipa-phone';
import { VOWELS, VOWEL_GROUPS } from '../vowels';
import { CONSONANTS } from '../consonants';

const vowelSoundsFolder = "../../assets/sounds/vowels/";
const consonantSoundsFolder = "../../assets/sounds/consonants/";
const flatMap = (f,xs) =>
  xs.reduce((acc,x) =>
    acc.concat(f(x)), []);

@Component({
  selector: 'app-listen',
  templateUrl: './listen.component.html',
  styleUrls: ['./listen.component.css']
})
export class ListenComponent implements OnInit {
  
  vowels = VOWELS;
  vowelGroups = VOWEL_GROUPS;
  consonants = CONSONANTS;
  vowelDescription = "";
  consonantDescription = "";
  sounds = {};

  constructor() { }

  ngOnInit() {
    let flatVowels: IpaPhone[] = flatMap(vowel => flatMap(vow => vow, vowel), this.vowels);
    let flatConsonants: IpaPhone[] = flatMap(consonant => consonant, this.consonants);
    flatVowels.forEach(vowel => {
      if (vowel.file) {
        this.sounds[vowel.hex] = new Audio(vowelSoundsFolder + vowel.file);
      }
    });
    flatConsonants.forEach(consonant => {
      if (consonant.file) {
        this.sounds[consonant.hex] = new Audio(consonantSoundsFolder + consonant.file);
      }
    });
  }
  
  displayHex(phone: IpaPhone): string {
    return phone.hexUtfToHtml();
  }
  
  mouseEnterVowel(phone: IpaPhone) {
    this.vowelDescription = phone.description;
    if (!this.sounds[phone.hex]) {
      this.vowelDescription += " - No Sound";
    }
  }
  
  mouseLeaveVowel(phone: IpaPhone){
    this.vowelDescription = "";
  }
  
  mouseEnterConsonant(phone: IpaPhone) {
    this.consonantDescription = phone.description;
    if (!this.sounds[phone.hex]) {
      this.consonantDescription += " - No Sound";
    }
  }
  
  mouseLeaveConsonant(phone: IpaPhone){
    this.consonantDescription = "";
  }

  playSound(phone: IpaPhone) {
    console.log(phone);
    if (this.sounds[phone.hex]) {
      this.sounds[phone.hex].play();
    }
  }
}
