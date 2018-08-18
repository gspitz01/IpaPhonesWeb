import { IpaPhone } from './ipa-phone';

export class ConsonantRow {
  constructor(readonly name: string, readonly bilabial: IpaPhone[], readonly labioDental: IpaPhone[],
    readonly linguoLabial: IpaPhone[], readonly dental: IpaPhone[], readonly alveolar: IpaPhone[],
    readonly postAlveolar: IpaPhone[], readonly retroflex: IpaPhone[], readonly palatal: IpaPhone[],
    readonly velar: IpaPhone[], readonly labializedVelar: IpaPhone[], readonly uvular: IpaPhone[],
    readonly pharyngeal: IpaPhone[], readonly glottal: IpaPhone[]) {}

  asArray(): IpaPhone[] {
    let arrayToReturn: IpaPhone[] = [];
    if (this.bilabial) {
      this.addToArray(arrayToReturn, this.bilabial);
    }
    if (this.labioDental) {
      this.addToArray(arrayToReturn, this.labioDental);
    }
    if (this.linguoLabial) {
      this.addToArray(arrayToReturn, this.linguoLabial);
    }
    if (this.dental) {
      this.addToArray(arrayToReturn, this.dental);
    }
    if (this.alveolar) {
      this.addToArray(arrayToReturn, this.alveolar);
    }
    if (this.postAlveolar) {
      this.addToArray(arrayToReturn, this.postAlveolar);
    }
    if (this.retroflex) {
      this.addToArray(arrayToReturn, this.retroflex);
    }
    if (this.palatal) {
      this.addToArray(arrayToReturn, this.palatal);
    }
    if (this.velar) {
      this.addToArray(arrayToReturn, this.velar);
    }
    if (this.labializedVelar) {
      this.addToArray(arrayToReturn, this.labializedVelar);
    }
    if (this.uvular) {
      this.addToArray(arrayToReturn, this.uvular);
    }
    if (this.pharyngeal) {
      this.addToArray(arrayToReturn, this.pharyngeal);
    }
    if (this.glottal) {
      this.addToArray(arrayToReturn, this.glottal);
    }
    return arrayToReturn;
  }

  private addToArray(arrayToAddTo: IpaPhone[], phonesToAdd: IpaPhone[]) {
    phonesToAdd.forEach(phone => {
      if (phone !== null) {
        arrayToAddTo.push(phone);
      }
    })
  }
}
