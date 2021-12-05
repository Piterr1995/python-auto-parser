export {};

const ThinkAndGetRichCover = "/images/book-covers/ThinkAndGetRich.svg";
const MeditationsCover = "/images/book-covers/Meditations.svg";
const ProphetCover = "/images/book-covers/Prophet.svg";

export const authors = [
  {
    id: 1,
    name: "Napoleon Hill",
    description:
      "Znany amerykański pisarz oraz prekursor nowoczesnego rodzaju pisarstwa o tematyce coachingu oraz rozwoju osobistego. Jego wybitne dzieła od wielu lat służą jako źródło inspiracji dla ludzi, którzy podążają za sukcesem. Autor w swoich dziełach skupiał się na ukazywaniu tego, w jaki sposób powstają osiągnięcia. Koncentrował się także na formule, niezbędnej do odniesienia sukcesu, będącego możliwym do osiągnięcia przeciętnym osobom. Napoleon Hill twierdził, iż sukces jest sprawą nadrzędną i że to jemu Amerykanie zawdzięczają dobrobyt, jakim cieszyli się przez dwa stulecia. Autor jako pierwszy przedstawił ideę „Określonego Celu Głównego”, która stanowiła wyzwanie dla jego czytelników. Uważał, że większość ludzi nie ma twardych przekonań i już sam ten fakt stawia sukces poza ich zasięgiem.",
  },
  {
    id: 2,
    name: "Khalil Gibran",
    description:
      "Znany na całym świecie libański poeta, pisarz oraz malarz, przedstawiciel szkoły syryjsko-amerykańskiej. Szczególnie ceniony jako autor słynnego dzieła pt. “Prorok”, przetłumaczonego na ponad 100 języków. Uważa się go za najwybitniejszego przedstawiciela literatury arabskiej XX w.",
  },
  {
    id: 3,
    name: "Walace D. Wattles",
    description: `Amerykański pisarz. Autor bestsellera “Sztuka wzbogacania się”, w którym podejmuję nowoczesną (jak na czasy, w których żył) tematykę gromadzenia pieniędzy.  Książka ta skupia się głównie wokół pojęć szczęścia i bogactwa oraz sposobów ich osiągnięcia.
      Ciekawoska: Rhonda Byrne, autorka wydanego w 2006 bestsellera The Secret w wywiadzie dla Newsweeka  przyznała, że inspirację do napisania książki czerpała właśnie z książki The Science of Getting Rich.`,
  },
  {
    id: 4,
    name: "George Samuel Clason",
    description: `Był żołnierzem, biznesmenem oraz pisarzem. Służył w armii Stanów Zjednoczonych podczas wojny hiszpańsko-amerykańskiej. Clason był również założycielem dwóch firm: Clason Map Company z Denver Colorado oraz Clason Publishing Company. Firma Clason Map Company jako pierwsza opublikowała atlas drogowy Stanów Zjednoczonych i Kanady. Clason rozpoczynał od publikowania esejów o ekonomii oraz sukcesie finansowym, w którym wykorzystał formę „przypowieści babilońskich”.Dzieła Clason’a stały się wzorem publikacji z zakresu strategii zdobywania bogactwa, odzwierciedlały mądrość traderów i lichwiarzy. Dzieła Clasona zostały przeczytane przez miliony ludzi, a książka „Najbogatszy człowiek w Babilonie” stała się współczesną klasyczną literaturą ekonomiczną. Książka ta jest uznawana za prawdziwe lekarstwo na ubóstwo i jest w stanie pomóc czytelnikowi przyjrzeć się istocie problemów finansowych.`,
  },
  {
    id: 5,
    name: "Phineas Taylor Barnum",
    description: `Amerykański pisarz, wydawca oraz filantrop. Zasłynął przede wszystkim  z bycia przedsiębiorcą cyrkowym oraz politykiem. Był założycielem cyrku Barnum & Bailey. Uważany za jednego z prekursorów nowoczesnego przemysłu rozrywkowego i reklamy. W 2017 roku, na podstawie jego biografii, powstał film pt. Król rozrywki (ang. The Greatest Showman)`,
  },
  {
    id: 6,
    name: "Cesarz rzymski Marek Aureliusz",
    description: `Cesarz rzymski w latach 161-180 i wyznawca filozofii stoicyzmu. Był ostatnim z władców znanych jako Pięciu Dobrych Cesarzy (termin ten został zdefiniowany około 13 wieków później przez Niccolò Machiavellego) i ostatnim cesarzem Pax Romana (27 p.n.e. do 180 n.e.), czyli epoki względnego pokoju i stabilności w Imperium Rzymskim. Pełnił funkcję rzymskiego konsula w latach 140, 145 i 161.`,
  },
  {
    id: 7,
    name: "William George Jordan",
    description: `Był amerykańskim redaktorem, wykładowcą i eseistą. Spacjalizował się w treningu mentalnym, którego nauczał m. in. w Nowym Jorku, Chicago i Minneapolis. Pomimo tego, że był jednym z najmłodszych redaktorów w Nowym Yorku, nie przeszkodziło mu to w zdobyciu krajowej sławy. Jego dzieła trafiły między innymi do prezydenta Stanów Zjednoczonych Theodore'a Roosevelt'a oraz gubernatorów poszczególnych stanów`,
  },
  {
    id: 8,
    name: "Benjamin Franklin",
    description: `Jeden z Ojców Założycieli Stanów Zjednoczonych, projektant i sygnatariusz Deklaracji Niepodległości Stanów Zjednoczonych, pisarz, wynalazca, dyplomata, mąż stanu, drukarz, wydawca i filozof. Był istotną postacią w historii fizyki i amerykańskiego oświecenia. Jako wynalazca jest znany z piorunochronu.`,
  },
];
export const pills = [
  {
    id: 1,
    cover: ThinkAndGetRichCover,
    title: "Myśl i bogać się",
    authors: ["Napoleon Hill"],
    timeToRead: 10,
    purchaseLink:
      "https://onepress.pl/ksiazki/mysl-i-bogac-sie-wersja-oryginalna-odswiezona-i-zaktualizowana-napoleon-hill-ross-cornwell-editor,mysbog.htm#format/d",
    chapters: [
      {
        title: "The art of thinking",
        text: "<b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin urna erat, ornare quis dui non, sollicitudin interdum dolor. Vivamus purus metus, luctus in placerat et, eleifend eu mi. Fusce in enim luctus, volutpat justo tempus, blandit metus. Proin sed mauris vel nibh blandit luctus sed vel dolor. Cras interdum tortor quis convallis semper. Aenean nec molestie mauris, sit amet bibendum urna. Vestibulum sollicitudin ac turpis fermentum vulputate. Nulla lacinia purus vitae justo placerat ultrices. Phasellus tempus risus erat, eget feugiat dolor placerat a. Etiam convallis mauris eu magna volutpat tempus.</b>",
      },
    ],
  },
  {
    id: 2,
    cover: ProphetCover,
    title: "Prorok",
    authors: ["Khalil Gibran"],

    timeToRead: 10,
    purchaseLink: "https://wydsal.pl/literatura/236-prorok.html",
    chapters: [
      {
        title: "The art of thinking",
        text: "<b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin urna erat, ornare quis dui non, sollicitudin interdum dolor. Vivamus purus metus, luctus in placerat et, eleifend eu mi. Fusce in enim luctus, volutpat justo tempus, blandit metus. Proin sed mauris vel nibh blandit luctus sed vel dolor. Cras interdum tortor quis convallis semper. Aenean nec molestie mauris, sit amet bibendum urna. Vestibulum sollicitudin ac turpis fermentum vulputate. Nulla lacinia purus vitae justo placerat ultrices. Phasellus tempus risus erat, eget feugiat dolor placerat a. Etiam convallis mauris eu magna volutpat tempus.</b>",
      },
    ],
  },
  {
    id: 3,
    cover: MeditationsCover,
    title: "Sztuka wzbogacania się",
    authors: ["Walace D. Wattles"],
    timeToRead: 10,
    purchaseLink:
      "https://www.zlotemysli.pl/prod/6370/sztuka-wzbogacania-sie-wallace-d-wattles.html",
    chapters: [
      {
        title: "The art of thinking",
        text: "<b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin urna erat, ornare quis dui non, sollicitudin interdum dolor. Vivamus purus metus, luctus in placerat et, eleifend eu mi. Fusce in enim luctus, volutpat justo tempus, blandit metus. Proin sed mauris vel nibh blandit luctus sed vel dolor. Cras interdum tortor quis convallis semper. Aenean nec molestie mauris, sit amet bibendum urna. Vestibulum sollicitudin ac turpis fermentum vulputate. Nulla lacinia purus vitae justo placerat ultrices. Phasellus tempus risus erat, eget feugiat dolor placerat a. Etiam convallis mauris eu magna volutpat tempus.</b>",
      },
    ],
  },
  {
    id: 4,
    cover: MeditationsCover,
    title: "Najbogatszy człowiek w Babilonie",
    authors: ["George Samuel Clason"],
    timeToRead: 10,
    purchaseLink:
      "https://studioemka.com.pl/ekonomia-biznes/435-najbogatszy-czlowiek-w-babilonie.html",
    chapters: [
      {
        title: "The art of thinking",
        text: "<b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin urna erat, ornare quis dui non, sollicitudin interdum dolor. Vivamus purus metus, luctus in placerat et, eleifend eu mi. Fusce in enim luctus, volutpat justo tempus, blandit metus. Proin sed mauris vel nibh blandit luctus sed vel dolor. Cras interdum tortor quis convallis semper. Aenean nec molestie mauris, sit amet bibendum urna. Vestibulum sollicitudin ac turpis fermentum vulputate. Nulla lacinia purus vitae justo placerat ultrices. Phasellus tempus risus erat, eget feugiat dolor placerat a. Etiam convallis mauris eu magna volutpat tempus.</b>",
      },
    ],
  },
  {
    id: 5,
    cover: MeditationsCover,
    title: "Benjamin Franklin Autobiografia",
    authors: ["Benjamin Franklin"],
    timeToRead: 10,
    purchaseLink:
      "https://www.empik.com/benjamin-franklin-autobiografia-franklin-benjamin,p1270680680,ebooki-i-mp3-p?gclsrc=ds&gclsrc=ds",
    chapters: [
      {
        title: "The art of thinking",
        text: "<b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin urna erat, ornare quis dui non, sollicitudin interdum dolor. Vivamus purus metus, luctus in placerat et, eleifend eu mi. Fusce in enim luctus, volutpat justo tempus, blandit metus. Proin sed mauris vel nibh blandit luctus sed vel dolor. Cras interdum tortor quis convallis semper. Aenean nec molestie mauris, sit amet bibendum urna. Vestibulum sollicitudin ac turpis fermentum vulputate. Nulla lacinia purus vitae justo placerat ultrices. Phasellus tempus risus erat, eget feugiat dolor placerat a. Etiam convallis mauris eu magna volutpat tempus.</b>",
      },
    ],
  },
  {
    id: 6,
    cover: MeditationsCover,
    title: "Sztuka zdobywania pieniędzy",
    authors: ["Phineas Taylor Barnum"],
    timeToRead: 10,
    purchaseLink:
      "https://www.zlotemysli.pl/prod/13713/wydanie-ii-sztuka-zdobywania-pieniedzy-p-t-barnum.html",
    chapters: [
      {
        title: "The art of thinking",
        text: "<b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin urna erat, ornare quis dui non, sollicitudin interdum dolor. Vivamus purus metus, luctus in placerat et, eleifend eu mi. Fusce in enim luctus, volutpat justo tempus, blandit metus. Proin sed mauris vel nibh blandit luctus sed vel dolor. Cras interdum tortor quis convallis semper. Aenean nec molestie mauris, sit amet bibendum urna. Vestibulum sollicitudin ac turpis fermentum vulputate. Nulla lacinia purus vitae justo placerat ultrices. Phasellus tempus risus erat, eget feugiat dolor placerat a. Etiam convallis mauris eu magna volutpat tempus.</b>",
      },
    ],
  },
  {
    id: 7,
    cover: MeditationsCover,
    title: "Rozmyślania",
    authors: ["Cesarz rzymski Marek Aureliusz"],
    timeToRead: 10,
    purchaseLink:
      "https://www.taniaksiazka.pl/rozmyslania-marek-aureliusz-p-744408.html?utm_source=google&utm_medium=cpc&utm_campaign=shopping",
    chapters: [
      {
        title: "The art of thinking",
        text: "<b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin urna erat, ornare quis dui non, sollicitudin interdum dolor. Vivamus purus metus, luctus in placerat et, eleifend eu mi. Fusce in enim luctus, volutpat justo tempus, blandit metus. Proin sed mauris vel nibh blandit luctus sed vel dolor. Cras interdum tortor quis convallis semper. Aenean nec molestie mauris, sit amet bibendum urna. Vestibulum sollicitudin ac turpis fermentum vulputate. Nulla lacinia purus vitae justo placerat ultrices. Phasellus tempus risus erat, eget feugiat dolor placerat a. Etiam convallis mauris eu magna volutpat tempus.</b>",
      },
    ],
  },
  {
    id: 8,
    cover: MeditationsCover,
    title: "Majestat Spokoju",
    authors: ["William George Jordan"],
    timeToRead: 10,
    purchaseLink: "https://www.enbook.pl/catalog/product/view/id/4944487",
    chapters: [
      {
        title: "The art of thinking",
        text: "<b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin urna erat, ornare quis dui non, sollicitudin interdum dolor. Vivamus purus metus, luctus in placerat et, eleifend eu mi. Fusce in enim luctus, volutpat justo tempus, blandit metus. Proin sed mauris vel nibh blandit luctus sed vel dolor. Cras interdum tortor quis convallis semper. Aenean nec molestie mauris, sit amet bibendum urna. Vestibulum sollicitudin ac turpis fermentum vulputate. Nulla lacinia purus vitae justo placerat ultrices. Phasellus tempus risus erat, eget feugiat dolor placerat a. Etiam convallis mauris eu magna volutpat tempus.</b>",
      },
    ],
  },
];
