import {parsePhonesGameStatsFromCookie, updatePhonesGameStatsCookie, createCookieFromStats } from './util-functions';
import { IpaPhonesGameStats } from './random-phone-game-stats';

const cookie = "questions:20,guesses:30,corrects:15";

describe("parsePhonesGameStatsFromCookie", () => {
  it("should create correct stats object", () => {
    const stats = parsePhonesGameStatsFromCookie(cookie);
    expect(stats.questions).toBe(20);
    expect(stats.guesses).toBe(30);
    expect(stats.corrects).toBe(15);
  });
  
  it("should return new stats object from empty cookie", () => {
    const stats = parsePhonesGameStatsFromCookie("");
    expect(stats.questions).toBe(0);
    expect(stats.guesses).toBe(0);
    expect(stats.corrects).toBe(0);
  });
});

describe("createCookieFromStats",() => {
  it("should create the correct cookie string from a stats object", () => {
    const stats = new IpaPhonesGameStats(45, 65, 1030);
    const cook = createCookieFromStats(stats);
    expect(cook).toBe("questions:45,guesses:65,corrects:1030");
  });
});

describe("updatePhonesGameStatsCookie", () => {
  const spy = jasmine.createSpyObj('CookieService', ['getCookie', 'setCookie']);
  const stats = new IpaPhonesGameStats(3, 4, 5);
  const cookieName = "CookieName";
  const expireDays = 30;

  it("should properly update a previously created cookie", () => {
    const cookieServiceGetCookieSpy = spy.getCookie.and.returnValue(cookie);
    const cookieServiceSetCookieSpy = spy.setCookie;
    const expectedCookie = "questions:23,guesses:34,corrects:20";
    updatePhonesGameStatsCookie(spy, cookieName, expireDays, stats);
    expect(cookieServiceGetCookieSpy).toHaveBeenCalledWith(cookieName);
    expect(cookieServiceSetCookieSpy).toHaveBeenCalledWith(cookieName, expectedCookie, expireDays);
  });
  
  it("should properly create a new cookie", () => {
    const cookieServiceGetCookieSpy = spy.getCookie.and.returnValue("");
    const cookieServiceSetCookieSpy = spy.setCookie;
    const expectedCookie = "questions:3,guesses:4,corrects:5";
    updatePhonesGameStatsCookie(spy, cookieName, expireDays, stats);
    expect(cookieServiceGetCookieSpy).toHaveBeenCalledWith(cookieName);
    expect(cookieServiceSetCookieSpy).toHaveBeenCalledWith(cookieName, expectedCookie, expireDays);
  });
});