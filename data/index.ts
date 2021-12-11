export {};

const ThinkAndGrowRichCover = "/images/book-covers/ThinkAndGrowRich.svg";
const MeditationsCover = "/images/book-covers/Meditations.svg";
const TheProphetCover = "/images/book-covers/TheProphet.svg";
const BenjaminFranklinAuutobiographyCover =
  "/images/book-covers/BenjaminFranklinAutobiography.svg";
const TheArtOfMoneyGettingCover =
  "/images/book-covers/TheArtOfMoneyGetting.svg";
const TheRichestManInBabylonCover =
  "/images/book-covers/TheRichestManInBabylon.svg";
const TheScienceOfGettingRichCover =
  "/images/book-covers/TheScienceOfGettingRich.svg";
const TheMajestyOfCalmnessCover =
  "/images/book-covers/TheMajestyOfCalmness.svg";

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
    cover: ThinkAndGrowRichCover,
    title: "Myśl i bogać się",
    authors: [1],
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
    cover: TheProphetCover,
    title: "Prorok",
    authors: [2],

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
    cover: TheArtOfMoneyGettingCover,
    title: "Sztuka wzbogacania się",
    authors: [3],
    timeToRead: 10,
    purchaseLink:
      "https://www.zlotemysli.pl/prod/6370/sztuka-wzbogacania-sie-wallace-d-wattles.html",
    description: `<p>
        <em>The Science of Getting Rich</em> to światowy bestseller autorstwa
        Wallace’a D. Wattles'a, do dziś pozostający w druku. Książka przedstawia
        praktyczne sposoby realizacji założonych celów oraz fundamenty, na których
        opiera się świat. Podkreśla wartość i jakość ludzkich myśli, które stanowią
        najważniejszy element procesu kreacji zjawisk w świecie zewnętrznym. Rhonda
        Byrne, autorka wydanego w 2006 roku bestsellera <em>The Secret</em>, w
        wywiadzie dla <em>Newsweeka</em> przyznała, że inspirację do napisania książki
        czerpała właśnie z <em>The Science of Getting Rich.</em>
      </p>

      <p>W Pillach zostały zawarte informacje na temat następujących zagadnień:</p>
      <ul>
        <li>jak wykorzystać potencjał myśli do realizacji swoich celów;</li>
        <li>
          dlaczego jedni osiągają sukcesy i bogactwo, podczas gdy inni pozostają
          biedni;
        </li>
        <li>jak wdzięczność przyciąga pozytywne zjawiska;</li>
        <li>
          jakie działania należy podjąć, aby jak najszybciej otrzymać obiekt swoich
          pragnień.
        </li>
      </ul>`,
    chapters: [
      {
        id: 1,
        title: "Prawo do bycia bogatym",
        text: `<p>
        Żaden człowiek nie może być w pełni szczęśliwy, dopóki nie osiągnie w swoim
        życiu pewnego poziomu bogactwa. Wynika to między innymi z faktu, że aby
        całkowicie rozwinąć skrzydła, konieczne jest posiadanie odpowiednich środków i
        narzędzi, które zazwyczaj wymagają wkładu finansowego. Sukces w życiu jest
        tożsamy ze staniem się osobą, którą chcieliśmy być. Osiągnięcie tego celu
        poprzedza przebycie określonej drogi, która wymaga odpowiednich zasobów.
        Należy jednak pamiętać, że gotówka nie jest pełnym wyznacznikiem bogactwa.
        Jednostka potrzebuje spełnienia i samorealizacji w trzech obszarach, na które
        składają się: ciało, umysł i dusza.
      </p>
      <p>
        Rozwój sfery cielesnej związany jest z pragnieniem pozostania w dobrym
        zdrowiu. Aby spełnić ten cel, należy między innymi prawidłowo się odżywiać
        oraz zadbać o odpowiednią ilość ruchu. Człowiek pragnie również rozwijać się w
        sferze intelektualnej. W związku z tym potrzebuje dostępu do rozmaitych źródeł
        edukacji – książek, badań, itp. Ostatnim elementem jest rozwój duszy, dla
        którego charakterystyczne jest pragnienie miłości, wewnętrznego spełnienia
        oraz radości życia.
      </p>
      <p>
        Warto podkreślić, że ludzie nie powinni odczuwać wstydu z powodu pragnienia
        bogactwa. Mają pełne prawo chcieć czerpać z życia więcej. Faktem jest, że
        osoba, która osiągnęła szczęście i bogactwo, może w lepszy sposób wpłynąć na
        rozwój społeczeństwa niż jednostka żyjąca w ubóstwie.
      </p>`,
      },
      {
        id: 2,
        title: "Nauka stawania się bogatym",
        text: `<p>
          Dojście do bogactwa jest pewnym procesem, którego działania trzeba się
          nauczyć. Gdyby zależało ono wyłącznie od urodzenia w określonej grupie
          społecznej, jedynie osoby urodzone w bogatej społeczności byłyby szczęśliwe i
          spełnione. Wiemy jednak, że tak nie jest. Istnieją środowiska mniej zamożne, w
          których dojście do bogactwa wymaga o wiele większego wysiłku. Jak jednak
          wytłumaczyć fakt, że w takiej społeczności jedni potrafią dojść do bogactwa,
          rozwijać biznesy i zaspokajać potrzeby ludzi, podczas gdy inni w tej samej
          grupie pozostają w skrajnej nędzy i obwiniają wszystko i wszystkich za swój
          los? Różnica polega na tym, że ci pierwsi obrali w życiu WŁAŚCIWĄ DROGĘ.
        </p>
        <p>
          Często bywa tak, że ludzie niewykształceni i z biedniejszych środowisk
          osiągnęli w życiu wiele za sprawą sprytu i zaradności, której czasem brakuje
          ludziom wykształconym. Biorąc pod uwagę ludzi zamożnych możemy wyróżnić dwie
          grupy – osoby, które pozostają zamożne przez całe życie oraz takie, które
          przez swoją bezmyślność tracą majątek i są zamożne jedynie przez określony
          czas.
        </p>
        <p>
          Jeżeli nie masz kapitału na rozwinięcie interesu, musisz go zdobyć. Jeżeli
          rozpocząłeś albo zainwestowałeś w niewłaściwy biznes, musisz go zmienić lub
          się z niego wycofać. Jeśli Twoja lokalizacja bardzo Cię ogranicza i nie
          pozwala na rozwój, również jej zmiana będzie konieczna. Zacznij więc od
          miejsca, w którym jesteś i wyciągnij wnioski z doświadczonych porażek. Jest to
          pewnego rodzaju cena, którą należy zapłacić.
        </p>`,
      },
      {
        id: 3,
        title: "Czy istnieje monopol na okazje?",
        text: `<p>
        Nikt nie pozostaje w biedzie jedynie z takiego powodu, że rynek został
        opanowany przez bogaczy, którzy zabrali dla siebie wszystkie możliwe okazje.
        Monopol na okazje więc nie istnieje. Ważny jest natomiast spryt i chłodna
        kalkulacja.
      </p>
      <p>
        Często bywa tak, że człowiek całe życie spędza w jednej firmie stale
        narzekając na swojego pracodawcę, zamiast szukać pola do rozwoju. W taki
        sposób sam zdaje się na łaskę i grymasy swojego przełożonego, a jego szansa na
        zmianę sytuacji w sferze finansowej czy społecznej jest bliska zeru. 
      </p>
      <p>
        Ziemia dostarcza nam nieograniczonej liczby surowców i bogactw, które możemy
        spożytkować na tysiące sposobów. Ciągle powstają nowe technologie i
        urządzenia, na które nieustannie wzrasta popyt. Nigdy nie jest tak, że dana
        dziedzina czy surowiec wyczerpią się i będziemy skazani na stagnację z powodu
        jej braku. Świadomość tego zjawiska jest kolejną z istot zrozumienia Właściwej
        Drogi.
      </p>
      `,
      },
      {
        id: 4,
        title: "Pierwsza zasada w nauce zdobywania bogactwa",
        text: `<p>
        Myśl jest jedyną siłą, która może przekształcić niematerialną formę w coś,
        czego można dotknąć lub doświadczyć. Najpierw powstaje myśl, następnie
        pojawiają się zjawiska i ruchy, których zadaniem jest stworzenie przedmiotu
        zgodnego z tą myślą, a na końcu, jako zwieńczenie całego procesu, powstaje
        oczekiwana forma lub zjawisko. Każda myśl, zwłaszcza powtarzana wielokrotnie,
        przyczynia do jej urzeczywistnienia w realnym świecie. Myśląc intensywnie np.
        o drzewie dębu, rozpoczynamy pierwszy krok ku jego stworzeniu. Myśląc o czymś
        większym, np. o nowym domu, również rozpoczynamy proces jego tworzenia. Nie
        dzieje się to oczywiście natychmiastowo, lecz
        <strong
          >to właśnie myśli organizują energię i zasoby, które nas otaczają, aby mogły
          się urzeczywistnić. </strong
        >
      </p>
      <p>
        Pierwszym krokiem, jaki powinien wykonać człowiek, jest założenie istnienia
        pewnej niematerialnej siły, z której powstają wszystkie rzeczy we
        wszechświecie. Rozpoczęcie procesu myśli organizuje i mobilizuje tę energię,
        jednocześnie zbliżając nas otrzymania owoców jej działania. W poprzednich
        rozdziałach zostało poruszone pojęcie Właściwej Drogi, a Właściwa Droga wymaga
        właściwego sposobu myślenia. Człowiek powinien myśleć o upragnionych rzeczach
        jako <strong>już otrzymanych</strong>. Innymi słowy, uznać przedmiot myśli
        jako <strong>już istniejący</strong>. Nie należy kontemplować nad argumentami
        przeczącymi tej teorii i wątpić w jej istnienie. Nauka stawania się bogatym
        zaczyna się właśnie od akceptacji mocy swojej wiary.
      </p>
      `,
      },
      {
        id: 5,
        title: "Zasady dobrych myśli",
        text: `<p>
        Zasiane ziarno rozpoczyna proces tworzenia czegoś nowego i ciągle przekształca
        się w COŚ WIĘCEJ. Podobnie jak ziarno, człowiek powinien ciągle stawać się
        kimś więcej, zamiast wmawiać sobie, że bieda i cierpienie są cnotą.
      </p>
      <p>
        Poniżej przedstawiono listę prawd, które pomogą Ci w zrozumieniu istoty
        Właściwej Drogi:
      </p>
      <ul>
        <li>
          Ta sama siła sprawiająca, że chcesz mieć więcej pieniędzy powoduje wzrost
          ziarna rzuconego na glebę. Jest ona MYŚLĄCĄ SUBSTANCJĄ. 
        </li>
        <li>
          Pożądanie jest czymś naturalnym dla człowieka i stanowi siłę napędową do
          manifestacji jego pragnień.
        </li>
        <li>
          Bóg chce, abyś był bogaty. Chce, abyś osiągał więcej i chce Twojego
          spełnienia.
        </li>
        <li>Wszechświat chce, abyś osiągał rzeczy, które chcesz mieć.</li>
        <li>Natura sprzyja realizacji Twoich planów.</li>
        <li>Wszystkie zjawiska są dla ciebie czymś naturalnym.</li>
        <li>Zaakceptuj, że wszystkie te twierdzenia SĄ PRAWDĄ.</li>
      </ul>
      <p>Kolejna część rad:</p>
      <ul>
        <li>
          Porzuć myśli o konkurowaniu. Masz kreować, a nie walczyć o coś, co już
          istnieje.
        </li>
        <li>Nie musisz brać czegokolwiek od kogokolwiek.</li>
        <li>Nie musisz ganiać za obniżkami i promocjami.</li>
        <li>Nie musisz oszukiwać, by zyskać przewagę. </li>
        <li>
          Nie musisz robić maślanych oczu na widok rzeczy, które posiadają inni,
          ponieważ Ty również możesz je mieć.
        </li>
        <li>Wiedz, że pieniądze, których pożądasz, przyjdą do Ciebie.</li>
        <li>
          Nie obawiaj się, że stracisz to, czego pragniesz, ponieważ inna osoba zajmie
          Twoje miejsce.
        </li>
        <li>
          Nie myśl, że rzeczy, których pragniesz przyjdą natychmiastowo, ponieważ
          wymagają one pewnego procesu.
        </li>
      </ul>
      <p>Pamiętaj o powyższych radach podczas formułowania swoich myśli.</p>
      `,
      },
      {
        id: 6,
        title: "Wdzięczność i jakość myśli",
        text: `<p>
        Cały proces wyszczególniony w poprzednich rozdziałach można zwieńczyć jednym
        słowem – <strong>wdzięczność</strong>. Fundamentalną kwestią jest wiara w
        istnienie Inteligentnej Substancji, która jest źródłem wszystkiego, co nas
        otacza. Drugim krokiem jest wiara w to, że dostarczy Ci ona wszystkiego, czego
        pożądasz. Trzecim krokiem jest odczuwanie bezgranicznej wdzięczności za to, że
        to otrzymasz.
      </p>
      <p>
        Wiele osób pozostaje w sferze ubóstwa między innymi dlatego, że nie potrafi
        odczuwać wdzięczności za otrzymane dary. Nie jest więc sekretem, że osoby
        potrafiące być wdzięczne, dostają jeszcze więcej powodów do bycia wdzięcznymi.
        Są oni zdecydowanie bliżsi zdobycia bogactwa niż ci, którzy o tym fakcie
        zapomnieli. Dodatkowo, uczucie to pozwala bardziej skupić się na rzeczach,
        których pragniemy, niż na myślach o konkurencji i ograniczeniach.
      </p>
      <p>
        Aby jednak otrzymać przedmiot naszych pragnień, oprócz wdzięczności niezwykle
        ważna jest jakość naszych myśli. Czym więcej detali i czym bardziej
        przejrzysty obraz wytworzymy w naszej świadomości, tym większą moc będzie
        miało nasze pragnienie. Czym bardziej czegoś pożądasz, tym mocniej Twój umysł
        będzie w stanie się na tym skupić. Wreszcie, czym więcej czasu przeznaczysz na
        kontemplowanie upragnionej rzeczy, tym większą moc będą miały twoje myśli. Z
        tego powodu warto znaleźć czas na codzienne przemyślenia.
      </p>
      <p>
        Za każdym pragnieniem kryje się powód, dla którego chcemy posiadać daną rzecz
        lub coś osiągnąć. Warto więc być w pełni jego świadomym. Ważnym elementem jest
        także niezachwiana <strong>wiara</strong> w to, że kiedyś założony cel
        zostanie spełniony.
      </p>
      `,
      },
      {
        id: 7,
        title: "Siła woli",
        text: `<p>
        Aby móc rozpocząć inteligentne bogacenie się, nie możesz kierować siły swojej
        woli wobec nikogo ani niczego poza Twoją osobą. Nikt nie ma prawa podejmować
        za nas decyzji, nawet w przypadku, gdy jest pewien swoich racji. My także nie
        powinniśmy ingerować w cudze wybory życiowe. Używaj więc własnej woli wobec
        siebie, ponieważ właśnie w ten sposób osiągniesz najwięcej. Pamiętaj, że
        błądzenie myślami po różnych obszarach nie pozwoli na wystarczające skupienie
        na założonym celu. Pamiętaj, że: 
      </p>
      <ul>
        <li>jeśli chcesz stać się bogaty, nie możesz uczyć się o ubóstwie;</li>
        <li>rzeczy nie powstają poprzez analizę ich przeciwieństw;</li>
        <li>
          zdrowie nie zostanie nigdy osiągnięte poprzez studiowanie chorób i myślenie
          o nich;
        </li>
        <li>
          nie możesz utrzymać mentalnego obrazu, który ma uczynić cię bogatym, jeśli
          wypełniasz swój umysł obrazami ubóstwa;
        </li>
        <li>
          nie czytaj książek ani gazet, które przekazują obraz nędzy dotykającej
          ludzi;
        </li>
        <li>
          nie możesz służyć Bogu i człowiekowi bardziej efektywnie niż poprzez
          bogacenie się.
        </li>
      </ul>
      `,
      },
      {
        id: 8,
        title: "Działanie cz. 1",
        text: `<p>
        Myśl jest siłą napędową, która daje początek procesowi osiągania bogactwa. Nie
        otrzymasz jej jednak do momentu, gdy nie podejmiesz odpowiednich
        <strong>działań</strong>. Innymi słowy, wymagana jest
        <strong>własna ingerencja i własny wysiłek</strong>, aby urzeczywistnić moc
        naszych myśli.
      </p>
      <p>
        Kolejną kwestią, o której nie należy zapominać, jest danie sobie przyzwolenia
        na otrzymanie bogactwa. Często zdarza się tak, że gdy bogactwo do nas napływa,
        nie chcemy wyciągnąć do niego ręki i uznajemy, że ono nam się nie należy. Jest
        to kluczowy punkt w nauce bogacenia się. Znajduje się on dokładnie w miejscu,
        gdzie myśl i działanie łączą się ku realizacji celu. Istnieje bardzo wiele
        osób, które świadomie lub nieświadomie wkładają bardzo wiele wysiłku w
        realizację celu, lecz pozostają biedni, ponieważ nie dają sobie przyzwolenia
        na otrzymanie obiektu swoich dążeń. 
      </p>
      <p>
        Włóż więc całą swoją siłę w <strong>obecne</strong> działanie. Nie odkładaj
        niczego na jutro czy inny punkt w przyszłości. Nie masz wpływu na przeszłość,
        która już minęła, ani też na przyszłość, która dopiero nadejdzie. Mocą, którą
        posiadasz jest skupienie się na tym co <strong>tu i teraz</strong> i
        utrzymanie niezachwianej wiary, że wkrótce twoje wysiłki przyniosą zamierzone
        efekty.
      </p>
      `,
      },
      {
        id: 9,
        title: "Działanie cz. 2",
        text: `<p>
        Musisz pamiętać, że nie wszystkie działania przybliżają Cię do osiągnięcia
        celu. Wynika to z faktu, że mogą być one efektywne lub nieefektywne. Łatwo
        można wywnioskować, które z nich pomagają osiągnąć wyznaczony cel. Poniżej
        znajdziesz listę rad, które pozwolą Ci zrozumieć istotę efektywnych działań: 
      </p>
      <ul>
        <li>
          tak naprawdę nie liczy się liczba rzeczy, które robisz, ale efektywność
          każdej z tych czynności;
        </li>
        <li>każdy czyn jest sam w sobie sukcesem lub porażką;</li>
        <li>każde działanie jest samo w sobie efektywne lub nieefektywne;</li>
        <li>
          każdy nieefektywny czyn jest porażką – jeśli spędzisz swoje życie na tego
          rodzaju działaniach, twoje życie stanie się porażką;
        </li>
        <li>
          każdy efektywny czyn jest sukcesem samym w sobie i jeśli każde działanie w
          twoim życiu jest efektywne, całe twoje życie musi być jednym wielkim
          sukcesem;
        </li>
        <li>
          przyczyną porażki jest robienie zbyt wielu rzeczy w nieefektywny sposób.
        </li>
      </ul>
      `,
      },
      {
        id: 10,
        title: "Wchodzenie we właściwy interes",
        text: `<p>
        Sukces w biznesie jest zależny od wielu czynników. Przykładowo, bez
        odpowiedniego przygotowania i talentu muzycznego nie będziesz w stanie
        efektywnie nauczać muzyki. Często zdarza się jednak, że nawet wykształcone i
        utalentowane osoby nie osiągają sukcesu, ponieważ <strong
          >nie wykonały odpowiedniej pracy</strong
        >
        ku jego osiągnięciu. Będąc uzdolnionym w jakiejś dziedzinie posiadasz unikalne
        NARZĘDZIA, lecz dopiero gdy zostaną odpowiednio wykorzystane, pomogą Ci w
        wykonaniu pracy, która jest konieczna do osiągnięcia celu. 
      </p>
      <p>
        Ważne jest uświadomienie sobie, że nie musisz bogacić się w każdym biznesie.
        Człowiek osiąga najlepsze wyniki, jeśli ma do czegoś naturalne predyspozycje.
        Wtedy wiele rzeczy przychodzi mu z łatwością. Jeżeli więc masz listę biznesów,
        które chciałbyś otworzyć lub do których chciałbyś dołączyć i wszystkie wydają
        się równie atrakcyjne, najlepiej będzie jeśli wybierzesz ten, w którym
        dostrzegasz swoje naturalne zdolności.
      </p>
      <p>
        Natomiast jeżeli w przeszłości popełniłeś błędy, które doprowadziły Cię do
        niekorzystnego biznesu oraz związały Cię z nim na dłuższy czas, nie musisz
        załamywać się. Pamiętaj, że wiele zależy od Ciebie i możesz uczynić nielubianą
        pracę lepszą. Dzieje się to za sprawą postawienia sobie celu, dzięki któremu
        będziesz mógł robić coś ciekawszego w aktualnej pracy lub zupełnie innym
        interesie. Zwróć uwagę na to, że <strong
          >najlepszym sposobem na zmianę biznesu lub środowiska jest rozwój.</strong
        >
      </p>
      <p>
        Warto więc poświęcić dzień lub dwa na zbudowanie wizji na temat swoich
        pragnień oraz na szczerej wdzięczności za to co otrzymujesz. To z kolei
        doprowadzi Twój umysł do bliskiego związku z Inteligentną Substancją – wiary,
        że nie popełnisz błędu podczas swojej drogi do samorealizacji. Jeżeli
        kiedykolwiek zauważysz, że się spieszysz, zatrzymaj się na mentalnym obrazie
        rzeczy, której pragniesz i zacznij dziękować, że ją otrzymałeś.
      </p>
      `,
      },
      {
        id: 11,
        title: "Podsumowanie",
        text: `<p>
        Źródłem naszych myśli i wszystkiego co nas otacza jest Inteligentna
        Substancja. To właśnie ona dostarcza człowiekowi to, czego potrzebuje. Nasze
        myśli uruchamiają proces tworzenia okoliczności i form poprzez Inteligentną
        Substancję, informując ją jednocześnie, że ma rozpocząć procedurę dostarczania
        nam obiektu naszego pożądania. Wdzięczność natomiast powoduje, że doceniamy
        otrzymane dary, co z kolei skutkuje jeszcze większą ich ilością. Bądźmy więc
        wdzięczni za wszystko, co nas spotyka i odrzućmy myśli o konkurowaniu z innymi
        oraz przestańmy skupiać się na negatywnych aspektach życia. Uznajmy, że
        <strong>już otrzymaliśmy to, czego chcemy</strong> i bądźmy za to wdzięczni.
        Działanie jest tym, co prowadzi nas od procesu myśli do momentu otrzymania
        pożądanej rzeczy. Dzięki myślom i kontemplacji oczekiwanego rezultatu
        zwiększamy szansę na to, że nasze działania będą <strong>efektywne</strong>,
        ponieważ to właśnie one przybliżają nas do osiągnięcia tego, czego pragniemy.
      </p>
      `,
      },
    ],
  },
  {
    id: 4,
    cover: TheRichestManInBabylonCover,
    title: "Najbogatszy człowiek w Babilonie",
    authors: [4],
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
    cover: BenjaminFranklinAuutobiographyCover,
    title: "Benjamin Franklin Autobiografia",
    authors: [8],
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
    cover: TheArtOfMoneyGettingCover,
    title: "Sztuka zdobywania pieniędzy",
    authors: [5],
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
    authors: [6],
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
    cover: TheMajestyOfCalmnessCover,
    title: "Majestat Spokoju",
    authors: [7],
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
