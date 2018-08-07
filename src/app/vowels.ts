import { IpaPhone } from './ipa-phone';

export const VOWELS: IpaPhone[][] = [
  [
    {decimal: "105", hex: "0069", description: "Close front unrounded", file: "Close_front_unrounded_vowel.ogg.mp3"},
    {decimal: "121", hex: "0079", description: "Close front rounded", file: "Close_front_rounded_vowel.ogg.mp3"},
    {decimal: "616", hex: "0268", description: "Close central unrounded", file: "Close_central_unrounded_vowel.ogg.mp3"},
    {decimal: "649", hex: "0289", description: "Close central rounded", file: "Close_central_rounded_vowel.ogg.mp3"},
    {decimal: "623", hex: "026F", description: "Close back unrounded", file: "Close_back_unrounded_vowel.ogg.mp3"},
    {decimal: "117", hex: "0075", description: "Close back rounded", file: "Close_back_rounded_vowel.ogg.mp3"}
  ],
  [
    {decimal: "73", hex: "0049", description: "Near close near front unrounded", file: "Near-close_near-front_unrounded_vowel.ogg.mp3"},
    {decimal: "655", hex: "028F", description: "Near close near front rounded", file: "Near-close_near-front_rounded_vowel.ogg.mp3"},
    {decimal: "618", hex: "026A", description: "Near close central unrounded", file: "Near-close_central_unrounded_vowel.ogg.mp3"},
    {decimal: "650+776", hex: "028A+0308", description: "Near close central rounded", file: "Near-close_near-back_rounded_vowel.ogg.mp3"},
    {decimal: "623+829", hex: "026F+033D", description: "Near close near back unrounded", file: null},
    {decimal: "650", hex: "028A", description: "Near close near back rounded", file: null}
  ],
  [
    {decimal: "101", hex: "0065", description: "Close-mid front unrounded", file: "Close-mid_front_unrounded_vowel.ogg.mp3"},
    {decimal: "248", hex: "00F8", description: "Close-mid front rounded", file: "Close-mid_front_rounded_vowel.ogg.mp3"},
    {decimal: "600", hex: "0258", description: "Close-mid central unrounded", file: "Close-mid_central_unrounded_vowel.ogg.mp3"},
    {decimal: "629", hex: "0275", description: "Close-mid central rounded", file: "Close-mid_central_rounded_vowel.ogg.mp3"},
    {decimal: "612", hex: "0264", description: "Close-mid back unrounded", file: "Close-mid_back_unrounded_vowel.ogg.mp3"},
    {decimal: "111", hex: "006F", description: "Close-mid back rounded", file: "Close-mid_back_rounded_vowel.ogg.mp3"}
  ],
  [
    {decimal: "101+798", hex: "0065+031E", description: "Mid front unrounded", file: "Mid_front_unrounded_vowel.ogg.mp3"},
    {decimal: "248+798", hex: "00F8+031E", description: "Mid front rounded", file: null},
    {decimal: "601", hex: "0259", description: "Mid central unrounded", file: "Mid-central_vowel.ogg.mp3"},
    {decimal: "629+798", hex: "0275+031E", description: "Mid central rounded", file: null},
    {decimal: "612+798", hex: "0264+031E", description: "Mid back unrounded", file: null},
    {decimal: "111+798", hex: "006F+031E", description: "Mid back rounded", file: "Mid_back_rounded_vowel.ogg.mp3"}
  ],
  [
    {decimal: "603", hex: "025B", description: "Open-mid front unrounded", file: "Open-mid_front_unrounded_vowel.ogg.mp3"},
    {decimal: "339", hex: "0153", description: "Open-mid front rounded", file: "Open-mid_front_rounded_vowel.ogg.mp3"},
    {decimal: "604", hex: "025C", description: "Open-mid central unrounded", file: "Open-mid_central_unrounded_vowel.ogg.mp3"},
    {decimal: "606", hex: "025E", description: "Open-mid central rounded", file: "Open-mid_central_rounded_vowel.ogg.mp3"},
    {decimal: "652", hex: "028C", description: "Open-mid back unrounded", file: "Open-mid_back_unrounded_vowel.ogg.mp3"},
    {decimal: "596", hex: "0254", description: "Open-mid back rounded", file: "Open-mid_back_rounded_vowel.ogg.mp3"}
  ],
  [
    {decimal: "230", hex: "00E6", description: "Near open front unrounded", file: "Near-open_front_unrounded_vowel.ogg.mp3"},
    {decimal: "592", hex: "0250", description: "Near open central unrounded", file: "Near-open_central_unrounded_vowel.ogg.mp3"},
    {decimal: "606+798", hex: "025E+031E", description: "Near open central rounded", file: null}
  ],
  [
    {decimal: "97", hex: "0061", description: "Open front unrounded", file: "Open_front_unrounded_vowel.ogg.mp3"},
    {decimal: "630", hex: "0276", description: "Open front rounded", file: "Open_front_rounded_vowel.ogg.mp3"},
    {decimal: "97+776", hex: "0061+0308", description: "Open central unrounded", file: "Open_central_unrounded_vowel.ogg.mp3"},
    {decimal: "594+776", hex: "0252+0308", description: "Open central rounded", file: null},
    {decimal: "593", hex: "0251", description: "Open back unrounded", file: "Open_back_unrounded_vowel.ogg.mp3"},
    {decimal: "594", hex: "0252", description: "Open back rounded", file: "Open_back_rounded_vowel.ogg.mp3"}
  ]
];