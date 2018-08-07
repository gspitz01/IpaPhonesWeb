import { IpaPhone } from './ipa-phone';

export const VOWELS: IpaPhone[][] = [
  [
    new IpaPhone("105", "0069", "Close front unrounded", "Close_front_unrounded_vowel.ogg.mp3"),
    new IpaPhone("121", "0079", "Close front rounded", "Close_front_rounded_vowel.ogg.mp3"),
    new IpaPhone("616", "0268", "Close central unrounded", "Close_central_unrounded_vowel.ogg.mp3"),
    new IpaPhone("649", "0289", "Close central rounded", "Close_central_rounded_vowel.ogg.mp3"),
    new IpaPhone("623", "026F", "Close back unrounded", "Close_back_unrounded_vowel.ogg.mp3"),
    new IpaPhone("117", "0075", "Close back rounded", "Close_back_rounded_vowel.ogg.mp3")
  ],
  [
    new IpaPhone("73", "0049", "Near close near front unrounded", "Near-close_near-front_unrounded_vowel.ogg.mp3"),
    new IpaPhone("655", "028F", "Near close near front rounded", "Near-close_near-front_rounded_vowel.ogg.mp3"),
    new IpaPhone("618", "026A", "Near close central unrounded", "Near-close_central_unrounded_vowel.ogg.mp3"),
    new IpaPhone("650+776", "028A+0308", "Near close central rounded", "Near-close_near-back_rounded_vowel.ogg.mp3"),
    new IpaPhone("623+829", "026F+033D", "Near close near back unrounded", null),
    new IpaPhone("650", "028A", "Near close near back rounded", null)
  ],
  [
    new IpaPhone("101", "0065", "Close-mid front unrounded", "Close-mid_front_unrounded_vowel.ogg.mp3"),
    new IpaPhone("248", "00F8", "Close-mid front rounded", "Close-mid_front_rounded_vowel.ogg.mp3"),
    new IpaPhone("600", "0258", "Close-mid central unrounded", "Close-mid_central_unrounded_vowel.ogg.mp3"),
    new IpaPhone("629", "0275", "Close-mid central rounded", "Close-mid_central_rounded_vowel.ogg.mp3"),
    new IpaPhone("612", "0264", "Close-mid back unrounded", "Close-mid_back_unrounded_vowel.ogg.mp3"),
    new IpaPhone("111", "006F", "Close-mid back rounded", "Close-mid_back_rounded_vowel.ogg.mp3")
  ],
  [
    new IpaPhone("101+798", "0065+031E", "Mid front unrounded", "Mid_front_unrounded_vowel.ogg.mp3"),
    new IpaPhone("248+798", "00F8+031E", "Mid front rounded", null),
    new IpaPhone("601", "0259", "Mid central unrounded", "Mid-central_vowel.ogg.mp3"),
    new IpaPhone("629+798", "0275+031E", "Mid central rounded", null),
    new IpaPhone("612+798", "0264+031E", "Mid back unrounded", null),
    new IpaPhone("111+798", "006F+031E", "Mid back rounded", "Mid_back_rounded_vowel.ogg.mp3")
  ],
  [
    new IpaPhone("603", "025B", "Open-mid front unrounded", "Open-mid_front_unrounded_vowel.ogg.mp3"),
    new IpaPhone("339", "0153", "Open-mid front rounded", "Open-mid_front_rounded_vowel.ogg.mp3"),
    new IpaPhone("604", "025C", "Open-mid central unrounded", "Open-mid_central_unrounded_vowel.ogg.mp3"),
    new IpaPhone("606", "025E", "Open-mid central rounded", "Open-mid_central_rounded_vowel.ogg.mp3"),
    new IpaPhone("652", "028C", "Open-mid back unrounded", "Open-mid_back_unrounded_vowel.ogg.mp3"),
    new IpaPhone("596", "0254", "Open-mid back rounded", "Open-mid_back_rounded_vowel.ogg.mp3")
  ],
  [
    new IpaPhone("230", "00E6", "Near open front unrounded", "Near-open_front_unrounded_vowel.ogg.mp3"),
    new IpaPhone("592", "0250", "Near open central unrounded", "Near-open_central_unrounded_vowel.ogg.mp3"),
    new IpaPhone("606+798", "025E+031E", "Near open central rounded", null)
  ],
  [
    new IpaPhone("97", "0061", "Open front unrounded", "Open_front_unrounded_vowel.ogg.mp3"),
    new IpaPhone("630", "0276", "Open front rounded", "Open_front_rounded_vowel.ogg.mp3"),
    new IpaPhone("97+776", "0061+0308", "Open central unrounded", "Open_central_unrounded_vowel.ogg.mp3"),
    new IpaPhone("594+776", "0252+0308", "Open central rounded", null),
    new IpaPhone("593", "0251", "Open back unrounded", "Open_back_unrounded_vowel.ogg.mp3"),
    new IpaPhone("594", "0252", "Open back rounded", "Open_back_rounded_vowel.ogg.mp3")
  ]
];