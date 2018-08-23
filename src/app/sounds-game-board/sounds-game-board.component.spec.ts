import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { SoundsGameBoardComponent } from './sounds-game-board.component';
import { By } from '@angular/platform-browser';

describe('SoundsGameBoardComponent', () => {
  let component: SoundsGameBoardComponent;
  let fixture: ComponentFixture<SoundsGameBoardComponent>;
  let messagesArea: DebugElement;
  let startButton: DebugElement;
  let replayButton: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoundsGameBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundsGameBoardComponent);
    component = fixture.componentInstance;
    messagesArea = fixture.debugElement.query(By.css(".messages"));
    startButton = fixture.debugElement.query(By.css("#startRoundButton"));
    replayButton = fixture.debugElement.query(By.css("#replaySoundButton"));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display message text', () => {
    const messageText = "This is a message";
    component.messages = messageText;
    fixture.detectChanges();
    expect(messagesArea.nativeElement.value).toContain(messageText);
  });

  it('should display start button text', () => {
    const startButtonText = "Start";
    component.startButtonText = startButtonText;
    fixture.detectChanges();
    expect(startButton.nativeElement.innerHTML).toBe(startButtonText);
  });

  it('should enable and disabled start button', () => {
    component.startRoundButtonDisabled = false;
    fixture.detectChanges();
    expect(startButton.nativeElement.disabled).toBeFalsy();
    component.startRoundButtonDisabled = true;
    fixture.detectChanges();
    expect(startButton.nativeElement.disabled).toBeTruthy();
  });

  it('should enable and disabled replay sound button', () => {
    component.replaySoundButtonDisabled = false;
    fixture.detectChanges();
    expect(replayButton.nativeElement.disabled).toBeFalsy();
    component.replaySoundButtonDisabled = true;
    fixture.detectChanges();
    expect(replayButton.nativeElement.disabled).toBeTruthy();
  });

  it('should emit startButtonClicked event when start clicked', () => {
    spyOn(component.startButtonClicked, "emit");
    startButton.nativeElement.click();
    expect(component.startButtonClicked.emit).toHaveBeenCalled();
  });

  it('should emit replayButtonClicked event when replay clicked', () => {
    spyOn(component.replayButtonClicked, "emit");
    replayButton.nativeElement.click();
    expect(component.replayButtonClicked.emit).toHaveBeenCalled();
  });
});
