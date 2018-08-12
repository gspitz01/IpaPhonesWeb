import { IpaPhone } from './ipa-phone';
import { CookieService } from './cookie.service';
import { IpaPhonesGameStats } from './random-phone-game-stats';

export const flatMap = (f,xs) =>
  xs.reduce((acc,x) =>
    acc.concat(f(x)), []);

export function shufflePhones(array: IpaPhone[]) {
  let i = 0,
      j = 0,
      temp = null;
  
  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

export function updatePhonesGameStatsCookie(cookieService: CookieService, cookieName: string,
                                             expireDays: number, stats: IpaPhonesGameStats,) {
  const cookie = cookieService.getCookie(cookieName);
  if (cookie === "") {
    cookieService.setCookie(cookieName, createCookieFromStats(stats), expireDays);
  } else {
    const cookieCrumbles = cookie.split(",");
    const questions = +cookieCrumbles[0].split(":")[1];
    const guesses = +cookieCrumbles[1].split(":")[1];
    const corrects = +cookieCrumbles[2].split(":")[1];
    cookieService.setCookie(cookieName, createCookieFromStats(new IpaPhonesGameStats(stats.questions+questions, stats.guesses+guesses, stats.corrects+corrects)), expireDays);
  }
}

export function createCookieFromStats(stats: IpaPhonesGameStats): string {
  return `questions:${stats.questions},guesses:${stats.guesses},corrects:${stats.corrects}`;
}

export function parsePhonesGameStatsFromCookie(cookie: string): IpaPhonesGameStats {
  if (cookie === "") {
    return new IpaPhonesGameStats(0, 0, 0);
  } else {
    const cookieCrumbles = cookie.split(",");
    const questions = +cookieCrumbles[0].split(":")[1];
    const guesses = +cookieCrumbles[1].split(":")[1];
    const corrects = +cookieCrumbles[2].split(":")[1];
    return new IpaPhonesGameStats(questions, guesses, corrects);
  }
}

export function calculateStatsDelta(currentStats: IpaPhonesGameStats, previousStats: IpaPhonesGameStats): IpaPhonesGameStats {
    return new IpaPhonesGameStats(currentStats.questions - previousStats.questions,
                                 currentStats.guesses - previousStats.guesses,
                                 currentStats.corrects - previousStats.corrects);
}

