import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { EscapeHtmlPipe } from '../pipes/keep-html.pipe';
import { ConsonantsComponent } from '../consonants/consonants.component';
import { SoundsGameBoardComponent } from '../sounds-game-board/sounds-game-board.component';
import { AdvancedConsonantSoundsGameComponent } from './advanced-consonant-sounds-game.component';

describe('AdvancedConsonantSoundsGameComponent', () => {
  let component: AdvancedConsonantSoundsGameComponent;
  let fixture: ComponentFixture<AdvancedConsonantSoundsGameComponent>;
  let startRoundButton: DebugElement;
  let ipaCharListItem: DebugElement;
  let hintArea: DebugElement;
  let messagesArea; DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AdvancedConsonantSoundsGameComponent,
        ConsonantsComponent,
        SoundsGameBoardComponent,
        EscapeHtmlPipe
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedConsonantSoundsGameComponent);
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
  
  it("mouseenter and mouseleave events in ipa char element show and remove description in hint area", () => {
    let enterEvent = new Event('mouseenter');
    let leaveEvent = new Event('mouseleave');
    expect(hintArea.nativeElement.textContent).toBeFalsy();
    ipaCharListItem.nativeElement.dispatchEvent(enterEvent);
    fixture.detectChanges();
    expect(hintArea.nativeElement.textContent).toBeTruthy();
    ipaCharListItem.nativeElement.dispatchEvent(leaveEvent);
    fixture.detectChanges();
    expect(hintArea.nativeElement.textContent).toBeFalsy();
  });
  
  it("click ipa char element shows that char in the messages area", () => {
    ipaCharListItem.nativeElement.click();
    fixture.detectChanges();
    expect(messagesArea.nativeElement.textContent).toContain(ipaCharListItem.nativeElement.textContent);
  });
});
