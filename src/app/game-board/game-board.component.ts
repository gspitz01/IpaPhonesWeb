import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {
  @Input() messages: string;
  @Input() startButtonText: string;
  @Input() startRoundButtonDisabled: boolean;
  @Input() replaySoundButtonDisabled: boolean;
  @Output() startButtonClicked = new EventEmitter();
  @Output() replayButtonClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  
  startClicked() {
    this.startButtonClicked.emit();
  }
  
  replayClicked() {
    this.replayButtonClicked.emit();
  }

}
