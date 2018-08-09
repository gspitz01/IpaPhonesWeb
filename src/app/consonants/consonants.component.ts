import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import { IpaPhone } from '../ipa-phone';
import { CONSONANTS } from '../consonants';

@Component({
  selector: 'app-consonants',
  templateUrl: './consonants.component.html',
  styleUrls: ['./consonants.component.css']
})
export class ConsonantsComponent implements OnInit {
  @Input() hint: string;
  @Output() consonantClicked = new EventEmitter<IpaPhone>();
  @Output() consonantEntered = new EventEmitter<IpaPhone>();
  @Output() consonantLeft = new EventEmitter<IpaPhone>();
  
  consonants = CONSONANTS;

  constructor() {}

  ngOnInit() {}
  
  mouseEnter(consonant: IpaPhone): void {
    this.consonantEntered.emit(consonant);
  }
  
  mouseLeave(consonant: IpaPhone): void {
    this.consonantLeft.emit(consonant);
  }
  
  consonantClick(consonant: IpaPhone): void {
    this.consonantClicked.emit(consonant);
  }
}
