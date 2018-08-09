import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { EscapeHtmlPipe } from '../pipes/keep-html.pipe';
import { VowelsComponent } from '../vowels/vowels.component';
import { SoundsGameBoardComponent } from '../sounds-game-board/sounds-game-board.component';
import { AdvancedVowelSoundsGameComponent } from './advanced-vowel-sounds-game.component';

describe('AdvancedVowelSoundsGameComponent', () => {
  let component: AdvancedVowelSoundsGameComponent;
  let fixture: ComponentFixture<AdvancedVowelSoundsGameComponent>;
  let startRoundButton: DebugElement;
  let ipaCharListItem: DebugElement;
  let hintArea: DebugElement;
  let messagesArea; DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AdvancedVowelSoundsGameComponent,
        VowelsComponent,
        SoundsGameBoardComponent,
        EscapeHtmlPipe
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedVowelSoundsGameComponent);
    component = fixture.componentInstance;
    startRoundButton = fixture.debugElement.query(By.css("#startRoundButton"));
    hintArea = fixture.debugElement.query(By.css(".hint"));
    messagesArea = fixture.debugElement.query(By.css(".messages"));
    fixture.detectChanges();
    ipaCharListItem = fixture.debugElement.query(By.css("li"));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it("startRoundButton should display 'Start'", () => {
    expect(startRoundButton.nativeElement.textContent).toBe("Start");
  });
  
  it("click startRoundButton makes it display 'Next' and be disabled", () => {
    startRoundButton.nativeElement.click();
    fixture.detectChanges();
    expect(startRoundButton.nativeElement.textContent).toBe("Next");
    expect(startRoundButton.nativeElement.disabled).toBeTruthy();
  });
});
