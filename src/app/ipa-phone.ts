export class IpaPhone {
  constructor(readonly decimal: string, readonly hex: string,
              readonly description: string, readonly file: string) {}
  
  /**
   * Turns a UTF-8 hex character code into an HTML character.
   *
   * Accepts a single UTF-8 character which can be a character with a diacritic, with the codes connected by a '+'.
   *
   * @return {string} An HTML character.
   */
  hexUtfToHtml() {
    var htmlUtf8Prefix = "&#x";
    var ipaChar = "";
    if (this.hex) {
      var splitChar = this.hex.split("+");
      ipaChar = splitChar.map(singleChar => htmlUtf8Prefix + singleChar + ";").join("");
    }
    return ipaChar;
  }

  /**
   * Extract the symbol and description of an IPA phone object, usually for display purposes.
   *
   * @return The HTML character and description of the IPA phone concatenated.
   */
  symbolAndDescriptionString(): string {
    return this.hexUtfToHtml() + " " + this.description;
  }
}