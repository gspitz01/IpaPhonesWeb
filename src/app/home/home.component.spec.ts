import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { HomeComponent } from './home.component';
import { CookieService } from '../cookie.service';
import { VOWEL_PHONES_GAME_COOKIE_NAME, CONSONANT_PHONES_GAME_COOKIE_NAME, GAME_COOKIE_EXPIRE_DAYS } from '../constants';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let cookieServiceGetCookieSpy;

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('CookieService', ['getCookie']);
    cookieServiceGetCookieSpy = spy.getCookie.and.returnValue("questions:3,guesses:3,corrects:3");
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [
        { provide: CookieService, useValue: spy }
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create and get cookies from service', () => {
    expect(component).toBeTruthy();
    expect(cookieServiceGetCookieSpy).toHaveBeenCalledWith(VOWEL_PHONES_GAME_COOKIE_NAME);
    expect(cookieServiceGetCookieSpy).toHaveBeenCalledWith(CONSONANT_PHONES_GAME_COOKIE_NAME);
  });
  
  it("should get vowels game cookie from cookie service", () => {
  });
});
