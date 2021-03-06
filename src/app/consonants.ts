import { IpaPhone } from './ipa-phone';
import { ConsonantRow } from './consonant-row';

export const CONSONANTS: ConsonantRow[] = [
  new ConsonantRow("Nasal",
    [
      new IpaPhone("109+805", "006D+0325", "Voiceless bilabial nasal", null),
      new IpaPhone("109", "006D", "Voiced bilabial nasal", "Bilabial_nasal.ogg.mp3")
    ],
    [
      null,
      new IpaPhone("625", "0271", "Labiodental nasal", "Labiodental_nasal.ogg.mp3")
    ],
    [
      null,
      new IpaPhone("110+828", "006E+033C", "Linguolabial nasal", null)
    ],
    null,
    [
      new IpaPhone("110+805", "006E+0325", "Voiceless alveolar nasal", null),
      new IpaPhone("110", "006E", "Alveolar nasal", "Alveolar_nasal.ogg.mp3")
    ],
    null,
    [
      new IpaPhone("627+778", "0273+030A", "Voiceless retroflex nasal", null),
      new IpaPhone("627", "0273", "Voiced retroflex nasal", "Retroflex_nasal.ogg.mp3")
    ],
    [
      new IpaPhone("626+778", "0272+030A", "Voiceless palatal nasal", null),
      new IpaPhone("626", "0272", "Voiced palatal nasal", "Palatal_nasal.ogg.mp3")
    ],
    [
      new IpaPhone("331+778", "014B+030A", "Voiceless velar nasal", null),
      new IpaPhone("331", "014B", "Voiced velar nasal", "Velar_nasal.ogg.mp3")
    ],
    null,
    [
      null,
      new IpaPhone("628", "0274", "Uvular nasal", "Uvular_nasal.ogg.mp3")
    ], null, null),
  new ConsonantRow("Stop",
    [
      new IpaPhone("112", "0070", "Voiceless bilabial stop", "Voiceless_bilabial_plosive.ogg.mp3"),
      new IpaPhone("98", "0062", "Voiced bilabial stop", "Voiced_bilabial_plosive.ogg.mp3")
    ],
    [
      new IpaPhone("112+810", "0070+032A", "Voiceless labiodental stop", null),
      new IpaPhone("98+810", "0062+032A", "Voiced labiodental stop", null)
    ],
    [
      new IpaPhone("116+828", "0074+033C", "Voiceless linguolabial stop", "Voiceless_dental_stop.ogg.mp3"),
      new IpaPhone("100+828", "0064+033C", "Voiced linguolabial stop", "Voiced_dental_stop.ogg.mp3")
    ],
    null,
    [
      new IpaPhone("116", "0074", "Voiceless alveolar stop", "Voiceless_alveolar_plosive.ogg.mp3"),
      new IpaPhone("100", "0064", "Voiced alveolar stop", "Voiced_alveolar_plosive.ogg.mp3")
    ],
    null,
    [
      new IpaPhone("648", "0288", "Voiceless retroflex stop", "Voiceless_retroflex_stop.oga.mp3"),
      new IpaPhone("598", "0256", "Voiced retroflex stop", "Voiced_retroflex_stop.oga.mp3")
    ],
    [
      new IpaPhone("99", "0063", "Voiceless palatal stop", "Voiceless_palatal_plosive.ogg.mp3"),
      new IpaPhone("607", "025F", "Voiced palatal stop", "Voiced_palatal_plosive.ogg.mp3")
    ],
    [
      new IpaPhone("107", "006B", "Voiceless velar stop", "Voiceless_velar_plosive.ogg.mp3"),
      new IpaPhone("609", "0261", "Voiced velar stop", "Voiced_velar_plosive_02.ogg.mp3")
    ],
    null,
    [
      new IpaPhone("113", "0071", "Voiceless uvular stop", "Voiceless_uvular_plosive.ogg.mp3"),
      new IpaPhone("610", "0262", "Voiced uvular stop", "Voiced_uvular_stop.oga.mp3")
    ],
    [
      new IpaPhone("673", "02A1", "Epiglottal stop", "Epiglottal_stop.ogg.mp3"),
      null
    ],
    [
      new IpaPhone("660", "0294", "Glottal stop", "Glottal_stop.ogg.mp3"),
      null
    ]),
  new ConsonantRow("Sibilant Affricate",
    null, null, null, null,
    [
      new IpaPhone("678", "02A6", "Voiceless alveolar sibilant affricate", "Voiceless_alveolar_sibilant_affricate.oga.mp3"),
      new IpaPhone("675", "02A3", "Voiced alveolar sibilant affricate", "Voiced_alveolar_sibilant_affricate.oga.mp3")
    ],
    [
      new IpaPhone("116+865+643", "0074+0361+0283", "Voiceless palato-alveolar affricate", "Voiceless_palato-alveolar_affricate.ogg.mp3"),
      new IpaPhone("100+865+658", "0064+0361+0292", "Voiced palato-alveolar affricate", "Voiced_palato-alveolar_affricate.ogg.mp3")
    ],
    [
      new IpaPhone("648+865+642", "0288+0361+0282", "Voiceless retroflex affricate", "Voiceless_retroflex_affricate.ogg.mp3"),
      new IpaPhone("598+865+656", "0256+0361+0290", "Voiced retroflex affricate", "Voiced_retroflex_affricate.ogg.mp3")
    ],
    [
      new IpaPhone("680", "02A8", "Voiceless alveolo-palatal affricate", "Voiceless_alveolo-palatal_affricate.ogg.mp3"),
      new IpaPhone("677", "02A5", "Voiced alveolo-palatal affricate", "Voiced_alveolo-palatal_affricate.ogg.mp3")
    ], null, null, null, null, null),
  new ConsonantRow("Non-Sibilan Affricate",
    [
      new IpaPhone("112+632", "0070+0278", "Voiceless bilabial affricate", "Voiceless_bilabial_affricate.ogg.mp3"),
      new IpaPhone("98+946", "0062+03B2", "Voiced bilabial affricate", null)
    ],
    [
      new IpaPhone("112+810+102", "0070+032A+0066", "Voiceless labiodental affricate", "Voiceless_labiodental_affricate.ogg.mp3"),
      new IpaPhone("98+810+118", "0062+032A+0076", "Voiced labiodental affricate", "Voiced_labiodental_affricate.ogg.mp3")
    ],
    null,
    [
      new IpaPhone("116+952", "0074+03B8", "Voiceless dental non-sibilant affricate", "Voiceless_dental_non-sibilant_affricate.oga.mp3"),
      new IpaPhone("100+240", "0064+00F0", "Voiced dental non-sibilant affricate", "Voiced_dental_non-sibilant_affricate.oga.mp3")
    ],
    [
      new IpaPhone("116+633+778+797", "0074+0279+030A+031D", "Voiceless alveolar non-sibilant affricate", null),
      new IpaPhone("100+633+797", "0064+0279+031D", "Voiced alveolar non-sibilant affricate", null)
    ],
    [
      new IpaPhone("116+633+778+797+45", "0074+0279+030A+031D+002D", "Voiceless postalveolar non-sibilant affricate", "Voiceless_postalveolar_non-sibilant_affricate.ogg.mp3"),
      new IpaPhone("100+633+797+45", "0064+0279+031D+002D", "Voiced postalveolar non-sibilant affricate", "Voiced_postalveolar_non-sibilant_affricate.ogg.mp3")
    ],
    null,
    [
      new IpaPhone("99+865+231", "0063+0361+00E7", "Voiceless palatal affricate", "Voiceless_palatal_affricate.ogg.mp3"),
      new IpaPhone("607+865+669", "025F+0361+029D", "Voiced palatal affricate", "Voiced_palatal_affricate.ogg.mp3")
    ],
    [
      new IpaPhone("107+865+120", "006B+0361+0078", "Voiceless velar affricate", "Voiceless_velar_affricate.ogg.mp3"),
      new IpaPhone("103+865+611", "0067+0361+0263", "Voiced velar affricate", "Voiced_velar_affricate.ogg.mp3")
    ],
    null,
    [
      new IpaPhone("113+865+967", "0071+0361+03C7", "Voiceless uvular affricate", "Voiceless_uvular_affricate.ogg.mp3"),
      null
    ],
    [
      null,
      new IpaPhone("673+865+674", "02A1+0361+02A2", "Voiced epiglottal affricate", "Voiced_epiglottal_affricate.ogg.mp3")
    ],
    [
      new IpaPhone("660+104", "0294+0068", "Voiceless glottal affricate", "Voiceless_glottal_affricate.ogg.mp3"),
      null
    ]),
  new ConsonantRow("Sibilant Fricative", null, null, null, null,
    [
      new IpaPhone("115", "0073", "Viceless alveolar sibilant", "Voiceless_alveolar_sibilant.ogg.mp3"),
      new IpaPhone("122", "007A", "Voiced alveolar sibilant", "Voiced_alveolar_sibilant.ogg.mp3")
    ],
    [
      new IpaPhone("643", "0283", "Voiceless palato-alveolar fricative", "Voiceless_palato-alveolar_sibilant.ogg.mp3"),
      new IpaPhone("658", "0292", "Voiced palato-alveolar fricative", "Voiced_palato-alveolar_sibilant.ogg.mp3")
    ],
    [
      new IpaPhone("642", "0282", "Voiceless retroflex fricative", "Voiceless_retroflex_sibilant.ogg.mp3"),
      new IpaPhone("656", "0290", "Voiced retroflex fricative", "Voiced_retroflex_sibilant.ogg.mp3")
    ],
    [
      new IpaPhone("597", "0255", "Voiceless alveolo-palatal fricative", "Voiceless_alveolo-palatal_sibilant.ogg.mp3"),
      new IpaPhone("657", "0291", "Voiced alveolo-palatal fricative", "Voiced_alveolo-palatal_sibilant.ogg.mp3")
    ], null, null, null, null, null),
  new ConsonantRow("Non-Sibilant Fricative",
    [
      new IpaPhone("632", "0278", "Voiceless bilabial fricative", "Voiceless_bilabial_fricative.ogg.mp3"),
      new IpaPhone("946", "03B2", "Voiced bilabial fricative", "Voiced_bilabial_fricative.ogg.mp3")
    ],
    [
      new IpaPhone("102", "0066", "Voiceless labiodental fricative", "Voiceless_labiodental_fricative.ogg.mp3"),
      new IpaPhone("118", "0076", "Voiced labiodental fricative", "Voiced_labiodental_fricative.ogg.mp3")
    ],
    [
      new IpaPhone("952+828", "03B8+033C", "Voiceless linguolabial fricative", null),
      new IpaPhone("240+828", "00F0+033C", "Voiced linguolabial fricative", null)
    ],
    [
      new IpaPhone("952", "03B8", "Voiceless dental fricative", "Voiceless_dental_fricative.ogg.mp3"),
      new IpaPhone("240", "00F0", "Voiced dental fricative", "Voiced_dental_fricative.ogg.mp3")
    ],
    [
      new IpaPhone("952+817", "03B8+0331", "Voiceless alveolar non-sibilant fricative", "Voiceless_alveolar_non-sibilant_fricative.ogg.mp3"),
      new IpaPhone("240+800", "00F0+0320", "Voiced alveolar non-sibilant fricative", "Voiced_alveolar_non-sibilant_fricative.ogg.mp3"),
    ],
    [
      new IpaPhone("633+800+778+797", "0279+0320+030A+031D", "Voiceless postalveolar non-sibilant fricative", null),
      new IpaPhone("633+800+797", "0279+0320+031D", "Voiced postalveolar non-sibilant fricative", null)
    ],
    [
      null,
      new IpaPhone("635+797", "027B+031D", "Voiced retroflex non-sibilant fricative", null)
    ],
    [
      new IpaPhone("231", "00E7", "Voiceless palatal fricative", "Voiceless_palatal_fricative.ogg.mp3"),
      new IpaPhone("669", "029D", "Voiced palatal fricative", "Voiced_palatal_fricative.ogg.mp3")
    ],
    [
      new IpaPhone("120", "0078", "Voiceless velar fricative", "Voiceless_velar_fricative.ogg.mp3"),
      new IpaPhone("611", "0263", "Voiced velar fricative", "Voiced_velar_fricative.ogg.mp3")
    ],
    null,
    [
      new IpaPhone("967", "03C7", "Voiceless uvular fricative", "Voiceless_uvular_fricative.ogg.mp3"),
      new IpaPhone("641", "0281", "Voiced uvular fricative", "Voiced_uvular_fricative.ogg.mp3")
    ],
    [
      new IpaPhone("295", "0127", "Voiceless pharyngeal fricative", "Voiceless_pharyngeal_fricative.ogg.mp3"),
      new IpaPhone("661", "0295", "Voiced pharyngeal fricative", "Voiced_pharyngeal_fricative.ogg.mp3")
    ],
    [
      new IpaPhone("104", "0068", "Voiceless glottal fricative", "Voiceless_glottal_fricative.ogg.mp3"),
      new IpaPhone("614", "0266", "Voiced glottal fricative", "Voiced_glottal_fricative.ogg.mp3")
    ]),
  new ConsonantRow("Approximant", null,
    [
      new IpaPhone("651+805", "028B+0325", "Voiceless labiodental approximant", null),
      new IpaPhone("651", "028B", "Voiced labiodental approximant", "Labiodental_approximant.ogg.mp3")
    ],
    null,
    null,
    [
      new IpaPhone("633+805", "0279+0325", "Voiceless alveolar approximant", null),
      new IpaPhone("633", "0279", "Voiced alveolar approximant", "Alveolar_approximant.ogg.mp3")
    ],
    [
      null,
      new IpaPhone("633+800", "0279+0320", "Voiced postalveolar approximant", "Postalveolar_approximant.ogg.mp3")
    ],
    [
      new IpaPhone("635+778", "027B+030A", "Voiceless retroflex approximant", null),
      new IpaPhone("635", "027B", "Voiced retroflex approximant", "Retroflex_approximant.ogg.mp3")
    ],
    [
      new IpaPhone("106+778", "006A+030A", "Voiceless palatal approximant", null),
      new IpaPhone("106", "006A", "Voiced palatal approximant", "Palatal_approximant.ogg.mp3")
    ],
    [
      new IpaPhone("624+778", "0270+030A", "Voiceless velar approximant", null),
      new IpaPhone("624", "0270", "Voiced velar approximant", "Voiced_velar_approximant.ogg.mp3")
    ],
    [
      new IpaPhone("653", "028D", "Voiceless labialized velar approximant", "Voiceless_labio-velar_fricative.ogg.mp3"),
      new IpaPhone("119", "0077", "Voiced labio-velar approximant", "Voiced_labio-velar_approximant.ogg.mp3")
    ],
    null, null,
    [
      null,
      new IpaPhone("660+798", "0294+031E", "Creaky-voiced glottal approximant", null)
    ]),
  new ConsonantRow("Trill",
    [
      new IpaPhone("665+805", "0299+0325", "Voiceless bilabial trill", "Voiceless_bilabial_trill_with_aspiration.ogg.mp3"),
      new IpaPhone("665", "0299", "Voiced bilabial trill", "Bilabial_trill.ogg.mp3")
    ],
    null, null, null,
    [
      new IpaPhone("114+805", "0072+0325", "Voiceless alveolar trill", "Voiceless_alveolar_trill.ogg.mp3"),
      new IpaPhone("114", "0072", "Voiced alveolar trill", "Alveolar_trill.ogg.mp3")
    ],
    null,
    [
      new IpaPhone("637+778+865+114+778", "027D+030A+0361+0072+030A", "Voiceless retroflex trill", null),
      new IpaPhone("637+865+114", "027D+0361+0072", "Voiced retroflex trill", null)
    ],
    null, null, null,
    [
      new IpaPhone("640+805", "0280+0325", "Voiceless uvular trill", "Voiceless_uvular_trill.ogg.mp3"),
      new IpaPhone("640", "0280", "Voiced uvular trill", "Uvular_trill.ogg.mp3")
    ],
    [
      new IpaPhone("668", "029C", "Voiceless epiglottal trill", "Voiceless_epiglottal_trill.ogg.mp3"),
      new IpaPhone("674", "02A2", "Voiced epiglottal trill", "Voiced_epiglottal_trill.ogg.mp3")
    ], null),
  new ConsonantRow("Lateral Affricate", null, null, null, null,
    [
      new IpaPhone("116+865+620", "0074+0361+026C", "Voiceless alveolar lateral affricate", "Voiceless_alveolar_lateral_affricate.ogg.mp3"),
      new IpaPhone("100+865+622", "0064+0361+026E", "Voiced alveolar lateral affricate", "Voiced_alveolar_lateral_affricate.ogg.mp3")
    ],
    null,
    [
      new IpaPhone("648+865+621+778+797", "0288+0361+026D+030A+031D", "Voiceless retroflex lateral affricate", ""),
      null
    ],
    [
      new IpaPhone("99+865+654+805+797", "0063+0361+028E+0325+031D", "Voiceless palatal lateral affricate", "Voiceless_palatal_lateral_affricate.ogg.mp3"),
      null
    ],
    [
      new IpaPhone("107+865+671+778+797", "006B+0361+029F+030A+031D", "Voiceless velar lateral affricate", "Voiceless_velar_lateral_affricate.ogg.mp3"),
      new IpaPhone("609+865+671+797", "0261+0361+029F+031D", "Voiced velar lateral affricate", "Voiced_velar_lateral_affricate.ogg.mp3")
    ],
    null, null, null, null),
  new ConsonantRow("Lateral Fricative", null, null, null, null,
    [
      new IpaPhone("620", "026C", "Voiceless alveolar lateral fricative", "Voiceless_alveolar_lateral_fricative.ogg.mp3"),
      new IpaPhone("622", "026E", "Voiced alveolar lateral fricative", "Voiced_alveolar_lateral_fricative.ogg.mp3")
    ],
    null,
    [
      new IpaPhone("621+778+797", "026D+030A+031D", "Voiceless retroflex lateral fricative", "Voiceless_retroflex_lateral_fricative.ogg.mp3"),
      new IpaPhone("621+797", "026D+031D", "Voiced retroflex lateral fricative", null)
    ],
    [
      new IpaPhone("654+805+724", "028E+0325+02D4", "Voiceless palatal lateral fricative", "Voiceless_palatal_lateral_fricative.ogg.mp3"),
      new IpaPhone("654+724", "028E+02D4", "Voiced palatal lateral fricative", null)
    ],
    [
      new IpaPhone("671+778+797", "029F+030A+031D", "Voiceless velar lateral fricative", "Voiceless_velar_lateral_fricative.ogg.mp3"),
      new IpaPhone("671+797", "029F+031D", "Voiced velar lateral fricative", "Voiced_velar_lateral_fricative.ogg.mp3")
    ],
    null, null, null, null),
  new ConsonantRow("Lateral Approximant", null, null, null, null,
    [
      new IpaPhone("108+805", "006C+0325", "Voiceless alveolar lateral approximant", null),
      new IpaPhone("108", "006C", "Voiced alveolar lateral approximant", "Alveolar_lateral_approximant.ogg.mp3")
    ],
    [
      null,
      new IpaPhone("108+736", "006C+02E0", "Voiced velarized alveolar lateral approximant", "Velarized_alveolar_lateral_approximant.ogg.mp3")
    ],
    [
      new IpaPhone("621+778", "026D+030A", "Voiceless retroflex lateral approximant", null),
      new IpaPhone("621", "026D", "Voiced retroflex lateral approximant", "Retroflex_lateral_approximant.ogg.mp3")
    ],
    [
      new IpaPhone("654+805", "028E+0325", "Voiceless palatal lateral approximant", null),
      new IpaPhone("654", "028E", "Voiced palatal lateral approximant", "Palatal_lateral_approximant.ogg.mp3")
    ],
    [
      new IpaPhone("671+805", "029F+0325", "Voiceless velar lateral approximant", null),
      new IpaPhone("671", "029F", "Voiced velar lateral approximant", "Velar_lateral_approximant.ogg.mp3")
    ],
    null,
    [
      null,
      new IpaPhone("671+800", "029F+0320", "Uvular lateral approximant", "Uvular_lateral_approximant.ogg.mp3")
    ],
    null, null),
  new ConsonantRow("Lateral Tap/Flap", null, null, null, null,
    [
      null,
      new IpaPhone("634", "027A", "Alveolar lateral flap", "Alveolar_lateral_flap.ogg.mp3")
    ],
    null,
    [
      null,
      new IpaPhone("621+774", "026D+0306", "Retroflex lateral flap", null)
    ],
    [
      null,
      new IpaPhone("654+774", "028E+0306", "Palatal lateral flap", null)
    ],
    [
      null,
      new IpaPhone("671+774", "029F+0306", "Velar lateral tap", null)
    ],
    null, null, null, null)
];
