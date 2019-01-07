import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sounds-game-board',
  templateUrl: './sounds-game-board.component.html',
  styleUrls: ['./sounds-game-board.component.scss']
})
export class SoundsGameBoardComponent implements OnInit {
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
