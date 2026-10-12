const percentagePageKey = "guideMenuBarPercentage";

const percentageSlugs = {
  en: "show-battery-percentage-mac-menu-bar",
  de: "batterieprozent-mac-menueleiste-anzeigen",
  es: "mostrar-porcentaje-bateria-barra-menus-mac",
  fr: "afficher-pourcentage-batterie-barre-menus-mac",
  hi: "show-battery-percentage-mac-menu-bar",
  it: "mostrare-percentuale-batteria-barra-menu-mac",
  ja: "show-battery-percentage-mac-menu-bar",
  ko: "show-battery-percentage-mac-menu-bar",
  nb: "vis-batteriprosent-menylinjen-mac",
  "pt-BR": "mostrar-porcentagem-bateria-barra-menus-mac",
  ru: "show-battery-percentage-mac-menu-bar",
  "zh-Hans": "show-battery-percentage-mac-menu-bar"
};

function article(copy) {
  return {
    ...copy,
    datePublished: "2026-10-12",
    dateModified: "2026-10-12"
  };
}

const percentageContent = {
  en: article({
    title: "Show Battery Percentage in the Mac Menu Bar | BatteryCountdown",
    description: "See your MacBook battery percentage at a glance with BatteryCountdown. Enable the optional menu bar display once, then check your battery without clicking.",
    ogDescription: "Battery percentage during everyday use. A low battery countdown when you need it. Both in your Mac menu bar.",
    eyebrow: "Mac battery guide",
    h1: "See your Mac battery percentage without clicking",
    lead: "BatteryCountdown can replace its menu bar icon with your current battery percentage. Enable the option once, and the number stays available at a glance during ordinary use. When your low battery countdown starts, the countdown takes over that same space.",
    answerTitle: "A battery level you can read immediately",
    answerParagraphs: [
      "A small battery icon gives you a general impression of charge. A number such as 73% is easier to read precisely while you work. BatteryCountdown offers an optional percentage display in the Mac menu bar, so you can check the charge without opening the app’s dropdown or interrupting what you are doing.",
      "This is useful when you move between meetings, work away from a socket, or want to decide whether to bring a charger. After the initial setup, simply look at the top of your screen. You can still click the menu bar item whenever you want the app’s settings or more battery information."
    ],
    stepsTitle: "How to enable battery percentage in BatteryCountdown",
    steps: [
      "Download BatteryCountdown from the Mac App Store and open the app.",
      "Open the app’s settings and find the Menu Bar section.",
      "Keep the idle menu bar item visible: turn off “Hide menu bar icon” if it is enabled.",
      "Turn on “Replace menu bar icon with battery percentage.”",
      "Return to your work. The percentage appears in the menu bar whenever the app would normally show its idle icon."
    ],
    whyTitle: "Percentage for everyday use, time when battery is low",
    whyParagraphs: [
      "The percentage helps you follow the battery throughout the day. The countdown answers a different question: roughly how much time is left before low battery may shut down your Mac? BatteryCountdown combines these two views in one menu bar item.",
      "When the battery reaches your chosen countdown threshold, the time display takes priority. That means enabling the percentage does not remove the app’s low battery warning. You see charge during normal use and the countdown when the warning becomes active.",
      "Percentage and remaining time are different measurements. A given percentage does not guarantee a fixed number of minutes: your workload and the battery’s condition affect runtime. Treat the countdown as an estimate and save your work before you run out of power."
    ],
    settingsTitle: "Choose the view that suits you",
    settings: [
      "Use the optional percentage instead of BatteryCountdown’s idle icon.",
      "Keep the idle menu bar item visible if you want to check your charge throughout the day.",
      "Choose a low battery countdown threshold between 1% and 20% independently of the percentage display.",
      "Enable Open at Login if you want the app to start after you sign in.",
      "The percentage option is included in BatteryCountdown; it does not require the optional Charger Run Mode unlock."
    ],
    quickTitle: "Questions about the menu bar percentage",
    quick: [
      ["Do I have to click to see my battery percentage?", "Only for the initial setup. With the option enabled and the idle menu bar item visible, you can read the percentage directly in the menu bar during normal use."],
      ["Can I keep the low battery countdown?", "Yes. When your countdown is active, it takes priority over the idle percentage display."],
      ["Is this a separate purchase?", "No. The percentage display is part of BatteryCountdown. Charger Run Mode is a separate optional unlock and is not needed for this feature."],
      ["Can I return to the app icon?", "Yes. Turn off “Replace menu bar icon with battery percentage” in the app’s settings."]
    ],
    finalEyebrow: "BatteryCountdown for Mac",
    finalTitle: "Check your charge with a glance.",
    finalBody: "Choose the percentage display for everyday use and let BatteryCountdown show estimated time when battery is low.",
    linkTitle: "See battery percentage without clicking",
    linkDescription: "Enable BatteryCountdown’s optional percentage display in the Mac menu bar."
  }),

  nb: article({
    title: "Vis batteriprosent i menylinjen på Mac | BatteryCountdown",
    description: "Se batteriprosenten på MacBook med et blikk. Slå på prosentvisning i BatteryCountdown én gang, og les batterinivået i menylinjen uten å klikke.",
    ogDescription: "Batteriprosent i hverdagen og nedtelling når batteriet er lavt. Begge deler i menylinjen på Mac.",
    eyebrow: "Batteriguide for Mac",
    h1: "Se batteriprosenten på Mac uten å klikke",
    lead: "BatteryCountdown kan erstatte sitt ikon i menylinjen med batteriprosenten. Slå på valget én gang, så kan du lese batterinivået med et blikk under vanlig bruk. Når nedtellingen ved lavt batteri starter, overtar tiden den samme plassen.",
    answerTitle: "Et batterinivå du kan lese med en gang",
    answerParagraphs: [
      "Et lite batteriikon gir et omtrentlig inntrykk av hvor mye strøm som er igjen. Et tall som 73 % er enklere å lese presist mens du jobber. BatteryCountdown har valgfri prosentvisning i menylinjen på Mac, slik at du kan sjekke batterinivået uten å åpne appens meny eller avbryte det du holder på med.",
      "Det er praktisk når du går mellom møter, jobber et sted uten stikkontakt eller vurderer om du bør ta med laderen. Etter oppsettet trenger du bare å se øverst på skjermen. Du kan fortsatt klikke på visningen når du vil åpne innstillinger eller se mer batteriinformasjon."
    ],
    stepsTitle: "Slik slår du på batteriprosent i BatteryCountdown",
    steps: [
      "Last ned BatteryCountdown fra Mac App Store og åpne appen.",
      "Åpne appens innstillinger og finn delen Menylinje.",
      "La menylinjeikonet være synlig ved vanlig bruk: slå av «Skjul menylinjeikonet» hvis det er aktivert.",
      "Slå på «Erstatt menylinjeikonet med batteriprosent».",
      "Fortsett arbeidet. Prosenten vises i menylinjen når appen ellers ville vist sitt vanlige ikon."
    ],
    whyTitle: "Prosent i hverdagen, tid når batteriet er lavt",
    whyParagraphs: [
      "Prosenten hjelper deg å følge med på batterinivået gjennom dagen. Nedtellingen svarer på et annet spørsmål: omtrent hvor lang tid er det igjen før Mac-en kan slå seg av på grunn av lite batteri? BatteryCountdown samler begge visningene på ett sted i menylinjen.",
      "Når batteriet når grensen du har valgt for nedtellingen, får tidsvisningen prioritet. Prosentvalget fjerner derfor ikke appens varsel ved lavt batteri. Du ser batterinivået under vanlig bruk og nedtellingen når varslingen blir aktiv.",
      "Batteriprosent og gjenværende tid måler forskjellige ting. En bestemt prosent gir ikke et fast antall minutter: hva du gjør på Mac-en, og batteriets tilstand, påvirker driftstiden. Nedtellingen er et estimat, så lagre arbeidet før du går tom for strøm."
    ],
    settingsTitle: "Velg visningen som passer deg",
    settings: [
      "Vis batteriprosent i stedet for BatteryCountdown sitt vanlige menylinjeikon.",
      "La ikonet være synlig under vanlig bruk hvis du vil følge batterinivået gjennom dagen.",
      "Velg en grense mellom 1 % og 20 % for nedtellingen ved lavt batteri, uavhengig av prosentvisningen.",
      "Slå på Åpne ved innlogging hvis du vil at appen skal starte når du logger inn.",
      "Prosentvisningen er inkludert i BatteryCountdown og krever ikke at du låser opp den valgfrie Charger Run Mode."
    ],
    quickTitle: "Spørsmål om batteriprosent i menylinjen",
    quick: [
      ["Må jeg klikke for å se batteriprosenten?", "Bare under det første oppsettet. Når prosentvalget er aktivert og menylinjeikonet er synlig, leser du prosenten direkte i menylinjen under vanlig bruk."],
      ["Kan jeg fortsatt bruke nedtellingen ved lavt batteri?", "Ja. Når nedtellingen er aktiv, får den prioritet foran den vanlige prosentvisningen."],
      ["Må funksjonen kjøpes separat?", "Nei. Prosentvisningen er en del av BatteryCountdown. Charger Run Mode er en separat, valgfri opplåsing som ikke trengs for denne funksjonen."],
      ["Kan jeg bytte tilbake til appikonet?", "Ja. Slå av «Erstatt menylinjeikonet med batteriprosent» i appens innstillinger."]
    ],
    finalEyebrow: "BatteryCountdown for Mac",
    finalTitle: "Se batterinivået med et blikk.",
    finalBody: "Velg prosentvisning i hverdagen, og la BatteryCountdown vise estimert tid når batteriet er lavt.",
    linkTitle: "Se batteriprosenten uten å klikke",
    linkDescription: "Slå på valgfri prosentvisning i menylinjen på Mac med BatteryCountdown."
  })
};

const percentageHome = {
  en: {
    eyebrow: "Optional menu bar percentage",
    title: "Your battery level. No clicks needed.",
    body: "Replace BatteryCountdown’s idle menu bar icon with your current battery percentage. Set it up once, then read your charge at a glance while you work. The low battery countdown takes over when it is active.",
    settingLabel: "Replace menu bar icon with battery percentage",
    caption: "Percentage during normal use. Countdown when battery is low.",
    link: "Learn how to show battery percentage",
    featureTitle: "Battery percentage at a glance",
    featureBody: "Choose to show your battery percentage instead of the idle app icon, so you can check your charge without opening a menu.",
    faqQ: "Can BatteryCountdown show battery percentage in the menu bar?",
    faqA: "Yes. Keep the idle menu bar item visible and enable “Replace menu bar icon with battery percentage.” You can then read the percentage without clicking during normal use. When the low battery countdown is active, it takes priority."
  },
  nb: {
    eyebrow: "Valgfri prosentvisning i menylinjen",
    title: "Batterinivået ditt. Uten et eneste klikk.",
    body: "Erstatt BatteryCountdown sitt vanlige menylinjeikon med batteriprosenten. Slå på valget én gang, og les batterinivået med et blikk mens du jobber. Nedtellingen ved lavt batteri overtar når den er aktiv.",
    settingLabel: "Erstatt menylinjeikonet med batteriprosent",
    caption: "Prosent under vanlig bruk. Nedtelling når batteriet er lavt.",
    link: "Slik viser du batteriprosent",
    featureTitle: "Batteriprosent med et blikk",
    featureBody: "Velg batteriprosent i stedet for appens vanlige ikon, så kan du sjekke batterinivået uten å åpne en meny.",
    faqQ: "Kan BatteryCountdown vise batteriprosent i menylinjen?",
    faqA: "Ja. La menylinjeikonet være synlig under vanlig bruk og slå på «Erstatt menylinjeikonet med batteriprosent». Da leser du prosenten uten å klikke. Når nedtellingen ved lavt batteri er aktiv, får den prioritet."
  }
};

const {
  percentageContent: europeanPercentageContent,
  percentageHome: europeanPercentageHome
} = require("./menu-bar-percentage-european");
const {
  percentageContent: asianPercentageContent,
  percentageHome: asianPercentageHome
} = require("./menu-bar-percentage-asian");

Object.assign(percentageContent, europeanPercentageContent, asianPercentageContent);
Object.assign(percentageHome, europeanPercentageHome, asianPercentageHome);

module.exports = {
  percentagePageKey,
  percentageSlugs,
  percentageContent,
  percentageHome
};
