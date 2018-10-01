import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import { IpaPhone } from '../ipa-phone';
import { VOWELS, VOWEL_GROUPS } from '../vowels';

@Component({
  selector: 'app-vowels',
  templateUrl: './vowels.component.html',
  styleUrls: ['./vowels.component.scss']
})
export class VowelsComponent implements OnInit {
  @Input() hint: string;
  @Output() vowelClicked = new EventEmitter<IpaPhone>();
  @Output() vowelEntered = new EventEmitter<IpaPhone>();
  @Output() vowelLeft = new EventEmitter<IpaPhone>();

  vowels = VOWELS;
  vowelGroups = VOWEL_GROUPS;
  buttonText: string;
  replaySoundButtonDisabled: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  mouseEnter(vowel: IpaPhone): void {
    this.vowelEntered.emit(vowel);
  }

  mouseLeave(vowel: IpaPhone): void {
    this.vowelLeft.emit(vowel);
  }

  vowelClick(vowel: IpaPhone): void {
    this.vowelClicked.emit(vowel);
  }

}
