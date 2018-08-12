import { IpaPhone } from './ipa-phone';

export class RandomSymbolGameData {
  constructor(public correct: IpaPhone, public wrong: IpaPhone[]) {}
}