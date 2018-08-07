import { IpaPhone } from './ipa-phone';

describe("IpaPhone", () => {
  let phone: IpaPhone;
  
  beforeEach(() => {
    phone = new IpaPhone("105", "0069", "Close front unrounded", "Close_front_unrounded.ogg.mp3");
  });
  
  it("should return HTML format of hex value from hexUtfToHtml", () => {
    expect(phone.hexUtfToHtml()).toBe(`&#x${phone.hex};`);
  });
  
  it("should split make two HTML characters from two UTF-8 chars from hexUtfToHtml", () => {
    const otherPhone = new IpaPhone("123+564", "0123+0445", "Doesn't matter.", "Also doesn't matter");
    expect(otherPhone.hexUtfToHtml()).toBe("&#x0123;&#x0445;");
  });
  
  it("should return HTML formatted hex phone and description from symbolAndDescriptionString", () => {
    const result = phone.symbolAndDescriptionString();
    expect(result).toContain(phone.hex);
    expect(result).toContain(phone.description);
  });
});