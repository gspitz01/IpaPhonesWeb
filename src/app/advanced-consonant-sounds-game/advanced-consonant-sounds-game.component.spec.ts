import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

import { IpaPhone } from '../ipa-phone';
import { EscapeHtmlPipe } from '../pipes/keep-html.pipe';
import { ConsonantsComponent } from '../consonants/consonants.component';
import { SoundsGameBoardComponent } from '../sounds-game-board/sounds-game-board.component';
import { AdvancedConsonantSoundsGameComponent } from './advanced-consonant-sounds-game.component';
import { CookieService } from '../cookie.service';
import { CONSONANT_PHONES_GAME_COOKIE_NAME, GAME_COOKIE_EXPIRE_DAYS, TEST_PHONE } from '../constants';

const cookieServiceMock = {
  getCookie: (name: string) => {},
  setCookie: (name: string, value: string, expireDays: number, path: string = "") => {},
  deleteCookie: (name: string) => {}
} as CookieService;

const COOKIE_NAME = CONSONANT_PHONES_GAME_COOKIE_NAME;
const COOKIE_EXPIRE_DAYS = GAME_COOKIE_EXPIRE_DAYS;

describe('AdvancedConsonantSoundsGameComponent', () => {
  let component: AdvancedConsonantSoundsGameComponent;
  let fixture: ComponentFixture<AdvancedConsonantSoundsGameComponent>;
  let startRoundButton: DebugElement;
  let ipaCharListItem: DebugElement;
  let hintArea: DebugElement;
  let messagesArea: DebugElement;
  let cookieService: CookieService;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AdvancedConsonantSoundsGameComponent,
        ConsonantsComponent,
        SoundsGameBoardComponent,
        EscapeHtmlPipe
      ],
      providers: [
        { provide: CookieService, useValue: cookieServiceMock }
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedConsonantSoundsGameComponent);
    component = fixture.componentInstance;
    startRoundButton = fixture.debugElement.query(By.css("#startRoundButton"));
    hintArea = fixture.debugElement.query(By.css(".hint"));
    messagesArea = fixture.debugElement.query(By.css(".messages"));
    cookieService = TestBed.get(CookieService);
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
  
  it("should create new cookie with stats on makeGuess", () => {
    spyOn(cookieService, 'getCookie').and.returnValue("");
    spyOn(cookieService, 'setCookie');
    // Need to start round so that nextEnabled is false
    component.startRound();
    component.makeGuess(TEST_PHONE);
    expect(cookieService.getCookie).toHaveBeenCalled();
    expect(cookieService.setCookie).toHaveBeenCalledWith(COOKIE_NAME, "questions:1,guesses:1,corrects:0", COOKIE_EXPIRE_DAYS);
  });
  
  it("should update cookie with stats on makeGuess", () => {
    spyOn(cookieService, 'getCookie').and.returnValue("questions:3,guesses:5,corrects:2");
    spyOn(cookieService, 'setCookie');
    // Need to start round so that nextEnabled is false
    component.startRound();
    component.makeGuess(TEST_PHONE);
    expect(cookieService.getCookie).toHaveBeenCalled();
    expect(cookieService.setCookie).toHaveBeenCalledWith(COOKIE_NAME, "questions:4,guesses:6,corrects:2", COOKIE_EXPIRE_DAYS);
  });
});
