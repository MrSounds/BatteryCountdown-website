#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const SITE_URL = "__SITE_URL__";
const APP_NAME = "BatteryCountdown";
const APP_STORE_URL = "https://apps.apple.com/app/id6762373837?mt=12";
const SUPPORT_EMAIL = "request@lyder.no";
const SUPPORT_MAILTO = "mailto:request@lyder.no?subject=BatteryCountdown%20Support%20Request";

const locales = [
  { code: "en", prefix: "", hreflang: "en", htmlLang: "en", name: "English", native: "English", guideSlug: "change-low-battery-warning-percentage-mac" },
  { code: "de", prefix: "de", hreflang: "de", htmlLang: "de", name: "German", native: "Deutsch", guideSlug: "mac-akku-warnung-prozent-aendern" },
  { code: "es", prefix: "es", hreflang: "es", htmlLang: "es", name: "Spanish", native: "Español", guideSlug: "cambiar-porcentaje-aviso-bateria-mac" },
  { code: "fr", prefix: "fr", hreflang: "fr", htmlLang: "fr", name: "French", native: "Français", guideSlug: "changer-pourcentage-alerte-batterie-mac" },
  { code: "hi", prefix: "hi", hreflang: "hi", htmlLang: "hi", name: "Hindi", native: "हिन्दी", guideSlug: "mac-low-battery-warning-percentage-change" },
  { code: "it", prefix: "it", hreflang: "it", htmlLang: "it", name: "Italian", native: "Italiano", guideSlug: "cambiare-percentuale-avviso-batteria-mac" },
  { code: "ja", prefix: "ja", hreflang: "ja", htmlLang: "ja", name: "Japanese", native: "日本語", guideSlug: "mac-low-battery-warning-percentage-change" },
  { code: "ko", prefix: "ko", hreflang: "ko", htmlLang: "ko", name: "Korean", native: "한국어", guideSlug: "mac-low-battery-warning-percentage-change" },
  { code: "nb", prefix: "nb", hreflang: "nb", htmlLang: "nb", name: "Norwegian Bokmal", native: "Norsk", guideSlug: "endre-lavt-batteri-varsel-prosent-mac" },
  { code: "pt-BR", prefix: "pt-br", hreflang: "pt-BR", htmlLang: "pt-BR", name: "Portuguese Brazil", native: "Português", guideSlug: "alterar-porcentagem-aviso-bateria-mac" },
  { code: "ru", prefix: "ru", hreflang: "ru", htmlLang: "ru", name: "Russian", native: "Русский", guideSlug: "izmenit-procent-preduprezhdeniya-batarei-mac" },
  { code: "zh-Hans", prefix: "zh-hans", hreflang: "zh-Hans", htmlLang: "zh-Hans", name: "Chinese Simplified", native: "简体中文", guideSlug: "mac-low-battery-warning-percentage-change" }
];

const localeByCode = Object.fromEntries(locales.map((locale) => [locale.code, locale]));
const pageKeys = ["home", "faq", "support", "guide", "demo"];

const t = {
  en: {
    nav: { guide: "Guide", faq: "FAQ", support: "Support", appStore: "Mac App Store" },
    footer: { language: "Language", email: SUPPORT_EMAIL },
    cta: { download: "Download on the Mac App Store", readFaq: "Read the FAQ", email: "Email support", readGuide: "Read the guide" },
    home: {
      title: "Low Battery Warning Mac | BatteryCountdown",
      description: "BatteryCountdown is a low battery shutdown warning for Mac that shows how much time is left before your Mac may shut down.",
      ogDescription: "See how much time is left before low battery shuts down your Mac, right from the menu bar.",
      eyebrow: "Mac menu bar utility",
      h1: ["Low battery", "shutdown", "warning for Mac"],
      hero: "BatteryCountdown shows how much time is left before low battery may shut down your Mac, right from the menu bar.",
      popoverTitle: "BatteryCountdown",
      popoverSubtitle: "14 minutes until low battery shutdown",
      popoverText: "Charging? The dropdown can also show time until fully charged.",
      answerEyebrow: "Answer first",
      answerTitle: "Can you change the low battery warning on Mac?",
      answer: "macOS does not give most users a simple setting to change exactly when the low battery warning appears. BatteryCountdown gives you a clearer workaround: choose when the countdown starts and see remaining time before shutdown in the menu bar.",
      featuresEyebrow: "Built for the moment you need it",
      featuresTitle: "A warning you can actually act on",
      features: [
        ["01", "Start before it is critical", "Choose the battery level where the countdown should begin, from 1% to 20%."],
        ["02", "See time, not just percent", "BatteryCountdown turns low battery into a live estimate, so you know whether you have minutes or seconds."],
        ["03", "Save your work in time", "The goal is simple: notice the warning, save your work, and get the charger before a sudden shutdown."]
      ],
      privateEyebrow: "Lightweight and private",
      privateTitle: "A small Mac utility, not another dashboard",
      privateBody: "BatteryCountdown is a local-only macOS menu bar app. It does not need an account, does not track you, and is designed to use minimal background resources while watching battery status.",
      privateLink: "Contact support",
      principles: [
        ["Menu bar first:", "stays out of the Dock and appears when battery time matters."],
        ["Custom trigger:", "start the low battery warning countdown at your preferred battery percentage."],
        ["Charging estimate:", "while charging, see time remaining until fully charged."]
      ],
      chargerEyebrow: "Optional extra",
      chargerTitle: "Charger Run Mode",
      chargerBody: "Charger Run Mode is an optional one-time unlock for a more visible low battery shutdown warning. It is made for the moments where a quiet menu bar timer is not enough.",
      chargerCta: "Get BatteryCountdown",
      faqEyebrow: "Common questions",
      faqTitle: "Low battery warning Mac FAQ",
      miniFaq: [
        ["Does BatteryCountdown replace the macOS low battery warning?", "No. It adds a clearer menu bar countdown so you can act before the Mac shuts down."],
        ["Can I change battery warning timing on Mac?", "BatteryCountdown lets you choose when its own countdown starts, from 1% to 20% battery."],
        ["Does it work while charging?", "Yes. When charging, the dropdown can show time remaining until fully charged."]
      ],
      seeAll: "See all answers",
      guideLink: "Read the low battery percentage guide",
      finalEyebrow: "BatteryCountdown for Mac",
      finalTitle: "Be ahead of a low battery shutdown.",
      finalBody: "Download BatteryCountdown and keep the warning where you can see it: in your menu bar."
    },
    faq: {
      title: "Low Battery Warning Mac FAQ | BatteryCountdown",
      description: "FAQ about low battery warning on Mac, changing battery warning timing, shutdown warnings, and BatteryCountdown.",
      ogDescription: "Answers about Mac low battery warnings, shutdown countdowns, and BatteryCountdown.",
      eyebrow: "FAQ",
      h1: "Low battery warning Mac FAQ",
      lead: "BatteryCountdown helps Mac users see how much time is left before low battery may cause a shutdown. These answers cover low battery warnings, changing warning timing, shutdown warnings, privacy, and support.",
      finalEyebrow: "Still deciding?",
      finalTitle: "Get a clearer low battery warning on Mac.",
      finalBody: "BatteryCountdown keeps the shutdown countdown visible in the menu bar, so you can save your work and plug in before it is too late.",
      qas: [
        ["Can I change the low battery warning on Mac?", "macOS does not give most users a simple built-in setting to choose exactly when the system low battery warning appears. BatteryCountdown adds its own menu bar countdown that can start at a battery percentage you choose."],
        ["What is a shutdown warning on Mac?", "A shutdown warning tells you when your Mac is close to powering off because the battery is nearly empty. BatteryCountdown turns that risk into a visible countdown in the menu bar."],
        ["Does BatteryCountdown show time until my Mac shuts down?", "Yes. BatteryCountdown estimates how much time is left before low battery may shut down your Mac and shows that countdown in the menu bar."],
        ["Can I choose when the BatteryCountdown warning starts?", "Yes. You can choose a battery percentage from 1% to 20% for when BatteryCountdown should start showing the low battery countdown."],
        ["Does BatteryCountdown replace the macOS battery icon?", "No. BatteryCountdown is a separate menu bar utility. You can use it alongside the normal macOS battery icon."],
        ["Does BatteryCountdown use much CPU or battery?", "BatteryCountdown is designed to be lightweight and use minimal background resources while monitoring battery state."],
        ["Does BatteryCountdown collect data?", "BatteryCountdown is a local-only Mac utility. It does not require an account and is designed without tracking."],
        ["Can BatteryCountdown show time until fully charged?", "Yes. When your Mac is charging, the BatteryCountdown dropdown can show time remaining until fully charged."],
        ["What is Charger Run Mode?", "Charger Run Mode is an optional one-time unlock that gives BatteryCountdown a more visible warning when the Mac is close to low battery shutdown."],
        ["How do I contact BatteryCountdown support?", "Email request@lyder.no for BatteryCountdown support, bug reports, feature requests, or purchase help."]
      ]
    },
    support: {
      title: "BatteryCountdown Support | Contact",
      description: "Contact BatteryCountdown support for bug reports, feature requests, purchase help, and Mac low battery warning questions.",
      ogDescription: "Email BatteryCountdown support at request@lyder.no.",
      eyebrow: "Support",
      h1: "Need help with BatteryCountdown?",
      lead: "Email BatteryCountdown support at request@lyder.no. Use this for bug reports, feature requests, purchase questions, or help with low battery warning behavior on Mac.",
      topics: [
        ["Bug", "Report a bug", "Please include your Mac model, macOS version, BatteryCountdown version, and what you expected to happen."],
        ["Idea", "Request a feature", "Tell us what would make the low battery warning or countdown more useful in your daily Mac workflow."],
        ["IAP", "Purchase or restore help", "If Charger Run Mode does not unlock or restore correctly, email support with the Apple ID region used for the purchase."]
      ],
      beforeEyebrow: "Before emailing",
      beforeTitle: "Useful details to include",
      beforeLead: "The fastest support emails include the exact battery level, whether the Mac was charging, whether the menu bar countdown appeared, and any steps that reproduce the issue.",
      beforeBody: "BatteryCountdown is a local-only utility. It does not use accounts, so support works best when you describe what you saw on your Mac."
    },
    guide: {
      title: "How to Change the Low Battery Warning Percentage on Mac",
      description: "Learn whether you can change the low battery warning percentage on Mac, what macOS allows, and how BatteryCountdown adds a custom low battery countdown.",
      ogDescription: "macOS does not offer a simple low battery warning percentage setting, but BatteryCountdown can add a custom menu bar countdown.",
      eyebrow: "Mac battery guide",
      h1: "How to change the low battery warning percentage on Mac",
      lead: "Short answer: macOS does not give most users a simple built-in setting to change the exact low battery warning percentage. BatteryCountdown solves the practical problem by letting you choose when a visible low battery countdown starts in the menu bar.",
      answerTitle: "Can you change the Mac low battery warning percentage?",
      answerParagraphs: [
        "Not directly with a normal macOS setting. Apple shows low battery warnings automatically, but modern macOS does not expose a simple slider where you can say “warn me at 20%” or “warn me at 5%.”",
        "If your real goal is to get an earlier or clearer low battery warning, BatteryCountdown is built for that exact use case. It lets you choose the battery percentage where its own countdown begins, then shows time remaining before low battery shutdown in the Mac menu bar."
      ],
      stepsTitle: "How to add a custom low battery percentage warning",
      steps: [
        "Download BatteryCountdown from the Mac App Store.",
        "Open BatteryCountdown and choose the battery percentage where the countdown should start.",
        "Keep the menu bar countdown visible, or hide the idle icon and let the timer appear when battery is low.",
        "When the warning starts, save your work and plug in before the Mac shuts down."
      ],
      whyTitle: "Why a countdown is better than another percentage alert",
      whyParagraphs: [
        "A percentage alone can be hard to act on. Five percent can mean different things depending on battery health, current workload, screen brightness, and whether your Mac is under heavy load.",
        "BatteryCountdown focuses on time. Instead of only saying that battery is low, it shows whether you have enough time to finish, save, or get a charger."
      ],
      settingsTitle: "What BatteryCountdown can change",
      settings: [
        "The battery percentage where the countdown starts, from 1% to 20%.",
        "Whether the menu bar item stays visible all the time or appears only when useful.",
        "Critical warning style, including a red blinking countdown in the final minutes.",
        "Optional Charger Run Mode for a more visible low battery shutdown warning."
      ],
      quickTitle: "Quick answers",
      quick: [
        ["Can I set the built-in macOS warning to 20%?", "Not through a normal macOS setting. Use BatteryCountdown if you want a custom low battery warning that starts earlier."],
        ["Does BatteryCountdown change Apple’s system warning?", "No. It adds its own menu bar countdown alongside macOS, so you get a clearer warning without modifying system files."],
        ["Does it work on MacBook?", "Yes. BatteryCountdown is made for Mac laptops running macOS 13.0 or later."]
      ],
      finalEyebrow: "Low battery warning for Mac",
      finalTitle: "Choose when the countdown starts.",
      finalBody: "Use BatteryCountdown to get a clearer warning before low battery shuts down your Mac."
    }
  },
  de: {
    nav: { guide: "Ratgeber", faq: "FAQ", support: "Support", appStore: "Mac App Store" },
    footer: { language: "Sprache", email: SUPPORT_EMAIL },
    cta: { download: "Im Mac App Store laden", readFaq: "FAQ lesen", email: "Support mailen", readGuide: "Ratgeber lesen" },
    home: {
      title: "Mac Akku-Warnung bei niedrigem Batteriestand | BatteryCountdown",
      description: "BatteryCountdown zeigt eine Countdown-Warnung in der Mac-Menueleiste, bevor dein Mac wegen niedrigem Akku herunterfahren kann.",
      ogDescription: "Sieh direkt in der Menueleiste, wie viel Zeit bleibt, bevor niedriger Akku deinen Mac herunterfahren kann.",
      eyebrow: "Mac-Menueleisten-App",
      h1: ["Akku-Warnung", "vor dem", "Herunterfahren"],
      hero: "BatteryCountdown zeigt direkt in der Menueleiste, wie viel Zeit bleibt, bevor niedriger Akku deinen Mac herunterfahren kann.",
      popoverTitle: "BatteryCountdown",
      popoverSubtitle: "14 Minuten bis zum Herunterfahren wegen niedrigem Akku",
      popoverText: "Beim Laden kann das Dropdown auch die Zeit bis zur vollen Ladung anzeigen.",
      answerEyebrow: "Kurzantwort",
      answerTitle: "Kann man die Akku-Warnung auf dem Mac aendern?",
      answer: "macOS bietet den meisten Nutzern keine einfache Einstellung, um den genauen Prozentwert fuer die Akku-Warnung zu aendern. BatteryCountdown loest das praktische Problem: Waehle, wann der Countdown startet, und sieh die verbleibende Zeit bis zum Herunterfahren in der Menueleiste.",
      featuresEyebrow: "Fuer den Moment gebaut, in dem es zaehlt",
      featuresTitle: "Eine Warnung, auf die du reagieren kannst",
      features: [
        ["01", "Frueher starten", "Waehle den Batteriestand, bei dem der Countdown beginnen soll, von 1% bis 20%."],
        ["02", "Zeit statt nur Prozent sehen", "BatteryCountdown macht aus niedrigem Akku eine laufende Schaetzung, damit du Minuten und Sekunden besser einschaetzen kannst."],
        ["03", "Arbeit rechtzeitig sichern", "Die Idee ist einfach: Warnung sehen, Arbeit sichern und den Charger holen, bevor der Mac ploetzlich ausgeht."]
      ],
      privateEyebrow: "Leicht und privat",
      privateTitle: "Eine kleine Mac-App, kein weiteres Dashboard",
      privateBody: "BatteryCountdown ist eine lokale macOS-Menueleisten-App. Sie braucht kein Konto, trackt dich nicht und ist auf minimale Hintergrundaktivitaet ausgelegt.",
      privateLink: "Support kontaktieren",
      principles: [
        ["Menueleiste zuerst:", "bleibt aus dem Dock heraus und erscheint, wenn Akkulaufzeit wichtig wird."],
        ["Eigener Ausloeser:", "starte die Warnung bei deinem bevorzugten Batteriestand."],
        ["Ladeschaetzung:", "beim Laden siehst du die verbleibende Zeit bis 100%."]
      ],
      chargerEyebrow: "Optionales Extra",
      chargerTitle: "Charger Run Mode",
      chargerBody: "Charger Run Mode ist ein optionaler Einmalkauf fuer eine deutlich sichtbarere Warnung vor dem Herunterfahren. Gemacht fuer Momente, in denen ein ruhiger Menueleisten-Timer nicht reicht.",
      chargerCta: "BatteryCountdown laden",
      faqEyebrow: "Haeufige Fragen",
      faqTitle: "FAQ zur Mac Akku-Warnung",
      miniFaq: [
        ["Ersetzt BatteryCountdown die macOS-Akkuwarnung?", "Nein. Es ergaenzt macOS um einen klareren Countdown in der Menueleiste."],
        ["Kann ich den Zeitpunkt der Akku-Warnung aendern?", "BatteryCountdown laesst dich waehlen, wann der eigene Countdown startet: von 1% bis 20%."],
        ["Funktioniert es beim Laden?", "Ja. Beim Laden kann das Dropdown die Zeit bis zur vollen Ladung anzeigen."]
      ],
      seeAll: "Alle Antworten ansehen",
      guideLink: "Ratgeber zum Akku-Prozentwert lesen",
      finalEyebrow: "BatteryCountdown fuer Mac",
      finalTitle: "Sei dem Akku-Shutdown voraus.",
      finalBody: "Lade BatteryCountdown und behalte die Warnung dort, wo du sie siehst: in der Menueleiste."
    },
    faq: {
      title: "Mac Akku-Warnung FAQ | BatteryCountdown",
      description: "FAQ zur Mac Akku-Warnung, zum Aendern des Warnzeitpunkts, zu Shutdown-Warnungen und BatteryCountdown.",
      ogDescription: "Antworten zu Mac Akku-Warnungen, Shutdown-Countdowns und BatteryCountdown.",
      eyebrow: "FAQ",
      h1: "Mac Akku-Warnung FAQ",
      lead: "BatteryCountdown hilft Mac-Nutzern zu sehen, wie viel Zeit bleibt, bevor niedriger Akku zum Herunterfahren fuehren kann. Hier findest du Antworten zu Warnungen, Prozentwerten, Datenschutz und Support.",
      finalEyebrow: "Noch unsicher?",
      finalTitle: "Eine klarere Akku-Warnung fuer Mac.",
      finalBody: "BatteryCountdown haelt den Shutdown-Countdown in der Menueleiste sichtbar, damit du rechtzeitig speichern und einstecken kannst.",
      qas: [
        ["Kann ich die Akku-Warnung auf dem Mac aendern?", "macOS bietet den meisten Nutzern keine einfache eingebaute Einstellung fuer den genauen Prozentwert. BatteryCountdown fuegt einen eigenen Menueleisten-Countdown hinzu, der bei einem gewaehlten Batteriestand startet."],
        ["Was ist eine Shutdown-Warnung auf dem Mac?", "Eine Shutdown-Warnung zeigt dir, wenn dein Mac wegen fast leerem Akku kurz vor dem Ausschalten steht. BatteryCountdown macht daraus einen sichtbaren Countdown."],
        ["Zeigt BatteryCountdown die Zeit bis zum Herunterfahren?", "Ja. BatteryCountdown schaetzt die verbleibende Zeit, bevor niedriger Akku deinen Mac herunterfahren kann, und zeigt sie in der Menueleiste."],
        ["Kann ich waehlen, wann BatteryCountdown startet?", "Ja. Du kannst einen Prozentwert von 1% bis 20% auswaehlen."],
        ["Ersetzt BatteryCountdown das macOS-Akkusymbol?", "Nein. BatteryCountdown ist eine separate Menueleisten-App und kann neben dem normalen macOS-Akkusymbol genutzt werden."],
        ["Verbraucht BatteryCountdown viel CPU oder Akku?", "BatteryCountdown ist bewusst leichtgewichtig und fuer minimale Hintergrundaktivitaet ausgelegt."],
        ["Sammelt BatteryCountdown Daten?", "BatteryCountdown ist eine lokale Mac-App. Sie benoetigt kein Konto und ist ohne Tracking gebaut."],
        ["Kann BatteryCountdown Zeit bis voll geladen anzeigen?", "Ja. Wenn dein Mac laedt, kann das Dropdown die verbleibende Zeit bis zur vollen Ladung anzeigen."],
        ["Was ist Charger Run Mode?", "Charger Run Mode ist ein optionaler Einmalkauf fuer eine sichtbarere Warnung, wenn der Mac kurz vor dem Akku-Shutdown steht."],
        ["Wie kontaktiere ich den Support?", "Schreibe an request@lyder.no fuer Support, Fehlerberichte, Feature-Wuensche oder Kaufhilfe."]
      ]
    },
    support: {
      title: "BatteryCountdown Support | Kontakt",
      description: "Kontaktiere den BatteryCountdown-Support fuer Fehlerberichte, Feature-Wuensche, Kaufhilfe und Fragen zur Mac Akku-Warnung.",
      ogDescription: "Schreibe dem BatteryCountdown-Support unter request@lyder.no.",
      eyebrow: "Support",
      h1: "Brauchst du Hilfe mit BatteryCountdown?",
      lead: "Schreibe an request@lyder.no. Nutze diese Adresse fuer Fehlerberichte, Feature-Wuensche, Kaufprobleme oder Fragen zur Akku-Warnung auf dem Mac.",
      topics: [
        ["Bug", "Fehler melden", "Bitte nenne dein Mac-Modell, deine macOS-Version, die BatteryCountdown-Version und was du erwartet hast."],
        ["Idee", "Feature vorschlagen", "Sag uns, was die Akku-Warnung oder den Countdown in deinem Mac-Alltag hilfreicher machen wuerde."],
        ["IAP", "Kauf oder Wiederherstellung", "Wenn Charger Run Mode nicht korrekt freigeschaltet oder wiederhergestellt wird, schreibe uns mit der Apple-ID-Region des Kaufs."]
      ],
      beforeEyebrow: "Vor der E-Mail",
      beforeTitle: "Hilfreiche Details",
      beforeLead: "Die schnellsten Support-Mails nennen den genauen Akkustand, ob der Mac geladen hat, ob der Countdown erschien und welche Schritte das Problem ausloesen.",
      beforeBody: "BatteryCountdown ist eine lokale App ohne Konten. Support funktioniert am besten, wenn du beschreibst, was du auf deinem Mac gesehen hast."
    },
    guide: {
      title: "Mac Akku-Warnung Prozent aendern: So geht es",
      description: "Kann man den Prozentwert der Akku-Warnung auf dem Mac aendern? Erfahre, was macOS erlaubt und wie BatteryCountdown einen eigenen Countdown hinzufuegt.",
      ogDescription: "macOS bietet keinen einfachen Prozentregler fuer die Akku-Warnung. BatteryCountdown kann einen eigenen Menueleisten-Countdown hinzufuegen.",
      eyebrow: "Mac Akku-Ratgeber",
      h1: "Mac Akku-Warnung Prozent aendern",
      lead: "Kurzantwort: macOS bietet den meisten Nutzern keine einfache eingebaute Einstellung, um den exakten Prozentwert der Akku-Warnung zu aendern. BatteryCountdown loest das praktische Problem, indem du selbst waehlst, wann ein sichtbarer Countdown in der Menueleiste startet.",
      answerTitle: "Kann man den Prozentwert der Mac Akku-Warnung aendern?",
      answerParagraphs: [
        "Nicht direkt ueber eine normale macOS-Einstellung. Apple zeigt Akku-Warnungen automatisch, aber moderne macOS-Versionen bieten keinen einfachen Regler fuer “bei 20% warnen” oder “erst bei 5% warnen”.",
        "Wenn du eigentlich eine fruehere oder deutlichere Warnung willst, ist BatteryCountdown genau dafuer gebaut. Du waehlst den Batteriestand, bei dem der Countdown beginnt, und siehst die verbleibende Zeit bis zum moeglichen Herunterfahren in der Menueleiste."
      ],
      stepsTitle: "So fuegst du eine eigene Akku-Prozent-Warnung hinzu",
      steps: [
        "Lade BatteryCountdown aus dem Mac App Store.",
        "Oeffne BatteryCountdown und waehle den Batteriestand, bei dem der Countdown starten soll.",
        "Lass den Menueleisten-Countdown sichtbar oder blende das Idle-Icon aus, bis der Akku niedrig ist.",
        "Wenn die Warnung startet, speichere deine Arbeit und schliesse den Charger an."
      ],
      whyTitle: "Warum ein Countdown besser ist als nur Prozent",
      whyParagraphs: [
        "Ein Prozentwert allein ist schwer einzuschaetzen. Fuenf Prozent koennen je nach Akkuzustand, Last, Displayhelligkeit und Apps ganz unterschiedlich lange halten.",
        "BatteryCountdown konzentriert sich auf Zeit. Statt nur zu sagen, dass der Akku niedrig ist, zeigt es, ob du noch genug Zeit zum Speichern, Beenden oder Laden hast."
      ],
      settingsTitle: "Was BatteryCountdown aendern kann",
      settings: [
        "Den Prozentwert, bei dem der Countdown startet: 1% bis 20%.",
        "Ob der Menueleisten-Eintrag immer sichtbar bleibt oder nur erscheint, wenn er nuetzlich ist.",
        "Kritische Warnung mit rotem, blinkendem Countdown in den letzten Minuten.",
        "Optionaler Charger Run Mode fuer eine sichtbarere Shutdown-Warnung."
      ],
      quickTitle: "Schnelle Antworten",
      quick: [
        ["Kann ich die eingebaute macOS-Warnung auf 20% stellen?", "Nicht ueber eine normale macOS-Einstellung. Nutze BatteryCountdown, wenn du eine eigene fruehere Warnung moechtest."],
        ["Aendert BatteryCountdown Apples Systemwarnung?", "Nein. Es fuegt einen eigenen Menueleisten-Countdown neben macOS hinzu, ohne Systemdateien zu veraendern."],
        ["Funktioniert es auf MacBook?", "Ja. BatteryCountdown ist fuer Mac-Laptops mit macOS 13.0 oder neuer gemacht."]
      ],
      finalEyebrow: "Akku-Warnung fuer Mac",
      finalTitle: "Waehle, wann der Countdown startet.",
      finalBody: "Nutze BatteryCountdown fuer eine klarere Warnung, bevor niedriger Akku deinen Mac herunterfahren kann."
    }
  },
  es: {
    nav: { guide: "Guía", faq: "FAQ", support: "Soporte", appStore: "Mac App Store" },
    footer: { language: "Idioma", email: SUPPORT_EMAIL },
    cta: { download: "Descargar en Mac App Store", readFaq: "Leer FAQ", email: "Enviar email", readGuide: "Leer la guía" },
    home: {
      title: "Aviso de batería baja en Mac | BatteryCountdown",
      description: "BatteryCountdown muestra en la barra de menús cuánto tiempo queda antes de que la batería baja pueda apagar tu Mac.",
      ogDescription: "Mira cuánto tiempo queda antes de que la batería baja apague tu Mac, directamente en la barra de menús.",
      eyebrow: "Utilidad para la barra de menús",
      h1: ["Aviso de", "apagado por", "batería baja"],
      hero: "BatteryCountdown muestra cuánto tiempo queda antes de que la batería baja pueda apagar tu Mac, directamente en la barra de menús.",
      popoverTitle: "BatteryCountdown",
      popoverSubtitle: "14 minutos hasta el apagado por batería baja",
      popoverText: "¿Cargando? El desplegable también puede mostrar el tiempo hasta la carga completa.",
      answerEyebrow: "Respuesta rápida",
      answerTitle: "¿Se puede cambiar el aviso de batería baja en Mac?",
      answer: "macOS no ofrece a la mayoría de usuarios un ajuste sencillo para cambiar el porcentaje exacto del aviso de batería baja. BatteryCountdown ofrece una alternativa clara: eliges cuándo empieza la cuenta atrás y ves el tiempo restante antes del apagado en la barra de menús.",
      featuresEyebrow: "Pensado para el momento importante",
      featuresTitle: "Un aviso sobre el que sí puedes actuar",
      features: [
        ["01", "Empieza antes de lo crítico", "Elige el nivel de batería donde debe comenzar la cuenta atrás, de 1% a 20%."],
        ["02", "Tiempo, no solo porcentaje", "BatteryCountdown convierte la batería baja en una estimación en vivo, para saber si quedan minutos o segundos."],
        ["03", "Guarda tu trabajo a tiempo", "La idea es simple: ver el aviso, guardar tu trabajo y conectar el cargador antes de un apagado repentino."]
      ],
      privateEyebrow: "Ligera y privada",
      privateTitle: "Una pequeña utilidad para Mac, no otro panel",
      privateBody: "BatteryCountdown es una app local para la barra de menús de macOS. No necesita cuenta, no te rastrea y está diseñada para usar muy pocos recursos en segundo plano.",
      privateLink: "Contactar soporte",
      principles: [
        ["Primero la barra de menús:", "se mantiene fuera del Dock y aparece cuando el tiempo de batería importa."],
        ["Disparador personalizado:", "inicia el aviso de batería baja en el porcentaje que prefieras."],
        ["Estimación de carga:", "mientras carga, muestra el tiempo restante hasta la carga completa."]
      ],
      chargerEyebrow: "Extra opcional",
      chargerTitle: "Charger Run Mode",
      chargerBody: "Charger Run Mode es un desbloqueo opcional de pago único para un aviso de apagado por batería baja más visible. Es para esos momentos en los que un temporizador discreto no basta.",
      chargerCta: "Obtener BatteryCountdown",
      faqEyebrow: "Preguntas frecuentes",
      faqTitle: "FAQ sobre aviso de batería baja en Mac",
      miniFaq: [
        ["¿BatteryCountdown sustituye el aviso de macOS?", "No. Añade una cuenta atrás más clara en la barra de menús para que puedas actuar antes del apagado."],
        ["¿Puedo cambiar cuándo aparece el aviso?", "BatteryCountdown te permite elegir cuándo empieza su cuenta atrás, de 1% a 20%."],
        ["¿Funciona mientras carga?", "Sí. Al cargar, el desplegable puede mostrar el tiempo hasta la carga completa."]
      ],
      seeAll: "Ver todas las respuestas",
      guideLink: "Leer la guía del porcentaje de batería baja",
      finalEyebrow: "BatteryCountdown para Mac",
      finalTitle: "Anticípate al apagado por batería baja.",
      finalBody: "Descarga BatteryCountdown y mantén el aviso donde lo ves: en la barra de menús."
    },
    faq: {
      title: "FAQ de aviso de batería baja Mac | BatteryCountdown",
      description: "Preguntas sobre aviso de batería baja en Mac, cambiar el momento del aviso, apagados y BatteryCountdown.",
      ogDescription: "Respuestas sobre avisos de batería baja, cuentas atrás de apagado y BatteryCountdown.",
      eyebrow: "FAQ",
      h1: "FAQ sobre aviso de batería baja en Mac",
      lead: "BatteryCountdown ayuda a usuarios de Mac a ver cuánto tiempo queda antes de que la batería baja pueda causar un apagado. Aquí respondemos sobre avisos, porcentajes, privacidad y soporte.",
      finalEyebrow: "¿Aún lo estás pensando?",
      finalTitle: "Un aviso de batería baja más claro para Mac.",
      finalBody: "BatteryCountdown mantiene visible la cuenta atrás de apagado en la barra de menús para que puedas guardar y conectar el cargador a tiempo.",
      qas: [
        ["¿Puedo cambiar el aviso de batería baja en Mac?", "macOS no ofrece a la mayoría de usuarios un ajuste integrado sencillo para elegir el porcentaje exacto del aviso. BatteryCountdown añade su propia cuenta atrás en la barra de menús."],
        ["¿Qué es un aviso de apagado en Mac?", "Es un aviso que te indica que el Mac está cerca de apagarse porque la batería está casi vacía. BatteryCountdown lo convierte en una cuenta atrás visible."],
        ["¿BatteryCountdown muestra tiempo hasta el apagado?", "Sí. Estima cuánto tiempo queda antes de que la batería baja pueda apagar tu Mac y lo muestra en la barra de menús."],
        ["¿Puedo elegir cuándo empieza el aviso?", "Sí. Puedes elegir un porcentaje entre 1% y 20%."],
        ["¿Sustituye el icono de batería de macOS?", "No. BatteryCountdown es una utilidad separada de la barra de menús y puede usarse junto al icono normal de macOS."],
        ["¿Usa mucha CPU o batería?", "Está diseñada para ser ligera y usar recursos mínimos mientras vigila el estado de la batería."],
        ["¿Recopila datos?", "BatteryCountdown es una utilidad local para Mac. No necesita cuenta y está diseñada sin seguimiento."],
        ["¿Puede mostrar tiempo hasta carga completa?", "Sí. Cuando el Mac carga, el desplegable puede mostrar el tiempo restante hasta la carga completa."],
        ["¿Qué es Charger Run Mode?", "Es un desbloqueo opcional de pago único para un aviso más visible cuando el Mac se acerca al apagado por batería baja."],
        ["¿Cómo contacto soporte?", "Escribe a request@lyder.no para soporte, errores, ideas o ayuda con compras."]
      ]
    },
    support: {
      title: "Soporte de BatteryCountdown | Contacto",
      description: "Contacta con soporte de BatteryCountdown para errores, ideas, compras y preguntas sobre avisos de batería baja en Mac.",
      ogDescription: "Escribe a BatteryCountdown en request@lyder.no.",
      eyebrow: "Soporte",
      h1: "¿Necesitas ayuda con BatteryCountdown?",
      lead: "Envía un email a request@lyder.no. Usa esta dirección para errores, ideas, preguntas de compra o ayuda con avisos de batería baja en Mac.",
      topics: [
        ["Bug", "Informar de un error", "Incluye el modelo de Mac, versión de macOS, versión de BatteryCountdown y qué esperabas que ocurriera."],
        ["Idea", "Solicitar una función", "Cuéntanos qué haría más útil el aviso o la cuenta atrás en tu flujo diario de Mac."],
        ["IAP", "Compra o restauración", "Si Charger Run Mode no se desbloquea o restaura, escribe con la región del Apple ID usado para la compra."]
      ],
      beforeEyebrow: "Antes de escribir",
      beforeTitle: "Detalles útiles",
      beforeLead: "Los emails de soporte más rápidos incluyen el nivel exacto de batería, si el Mac cargaba, si apareció la cuenta atrás y pasos para reproducir el problema.",
      beforeBody: "BatteryCountdown es una utilidad local. No usa cuentas, así que el soporte funciona mejor cuando describes lo que viste en tu Mac."
    },
    guide: {
      title: "Cómo cambiar el porcentaje del aviso de batería baja en Mac",
      description: "Aprende si puedes cambiar el porcentaje del aviso de batería baja en Mac y cómo BatteryCountdown añade una cuenta atrás personalizada.",
      ogDescription: "macOS no ofrece un ajuste sencillo para el porcentaje de batería baja, pero BatteryCountdown añade una cuenta atrás personalizada.",
      eyebrow: "Guía de batería Mac",
      h1: "Cómo cambiar el porcentaje del aviso de batería baja en Mac",
      lead: "Respuesta rápida: macOS no da a la mayoría de usuarios un ajuste integrado para cambiar el porcentaje exacto del aviso de batería baja. BatteryCountdown resuelve el problema práctico dejando que elijas cuándo empieza una cuenta atrás visible en la barra de menús.",
      answerTitle: "¿Se puede cambiar el porcentaje del aviso de batería baja en Mac?",
      answerParagraphs: [
        "No directamente con un ajuste normal de macOS. Apple muestra avisos de batería automáticamente, pero macOS moderno no expone un selector simple para “avisar al 20%” o “avisar al 5%”.",
        "Si lo que necesitas es un aviso más temprano o más claro, BatteryCountdown está hecho para eso. Eliges el porcentaje donde empieza la cuenta atrás y ves el tiempo restante antes del posible apagado."
      ],
      stepsTitle: "Cómo añadir un aviso personalizado por porcentaje",
      steps: [
        "Descarga BatteryCountdown desde el Mac App Store.",
        "Abre BatteryCountdown y elige el porcentaje de batería donde debe empezar la cuenta atrás.",
        "Mantén visible la cuenta atrás en la barra de menús o deja que aparezca cuando la batería esté baja.",
        "Cuando empiece el aviso, guarda tu trabajo y conecta el cargador."
      ],
      whyTitle: "Por qué una cuenta atrás es mejor que otro porcentaje",
      whyParagraphs: [
        "Un porcentaje por sí solo puede ser difícil de interpretar. Cinco por ciento puede durar distinto según salud de batería, carga del sistema, brillo y apps abiertas.",
        "BatteryCountdown se centra en el tiempo. En lugar de decir solo que la batería está baja, muestra si tienes margen para terminar, guardar o buscar el cargador."
      ],
      settingsTitle: "Qué puede cambiar BatteryCountdown",
      settings: [
        "El porcentaje donde empieza la cuenta atrás, de 1% a 20%.",
        "Si el elemento de la barra de menús permanece siempre visible o solo aparece cuando hace falta.",
        "Estilo crítico con cuenta atrás roja y parpadeante en los últimos minutos.",
        "Charger Run Mode opcional para un aviso de apagado más visible."
      ],
      quickTitle: "Respuestas rápidas",
      quick: [
        ["¿Puedo poner el aviso integrado de macOS al 20%?", "No con un ajuste normal de macOS. Usa BatteryCountdown si quieres un aviso personalizado que empiece antes."],
        ["¿BatteryCountdown cambia el aviso del sistema de Apple?", "No. Añade su propia cuenta atrás en la barra de menús sin modificar archivos del sistema."],
        ["¿Funciona en MacBook?", "Sí. BatteryCountdown está pensado para portátiles Mac con macOS 13.0 o posterior."]
      ],
      finalEyebrow: "Aviso de batería baja para Mac",
      finalTitle: "Elige cuándo empieza la cuenta atrás.",
      finalBody: "Usa BatteryCountdown para recibir un aviso más claro antes de que la batería baja apague tu Mac."
    }
  },
  fr: {
    nav: { guide: "Guide", faq: "FAQ", support: "Support", appStore: "Mac App Store" },
    footer: { language: "Langue", email: SUPPORT_EMAIL },
    cta: { download: "Télécharger sur le Mac App Store", readFaq: "Lire la FAQ", email: "Contacter le support", readGuide: "Lire le guide" },
    home: {
      title: "Alerte batterie faible Mac | BatteryCountdown",
      description: "BatteryCountdown affiche un compte à rebours dans la barre des menus avant qu’une batterie faible puisse éteindre votre Mac.",
      ogDescription: "Voyez le temps restant avant qu’une batterie faible puisse éteindre votre Mac, directement dans la barre des menus.",
      eyebrow: "Utilitaire de barre des menus",
      h1: ["Alerte batterie", "faible avant", "extinction Mac"],
      hero: "BatteryCountdown affiche le temps restant avant qu’une batterie faible puisse éteindre votre Mac, directement dans la barre des menus.",
      popoverTitle: "BatteryCountdown",
      popoverSubtitle: "14 minutes avant extinction sur batterie faible",
      popoverText: "En charge ? Le menu peut aussi afficher le temps restant avant charge complète.",
      answerEyebrow: "Réponse courte",
      answerTitle: "Peut-on modifier l’alerte batterie faible sur Mac ?",
      answer: "macOS ne propose pas à la plupart des utilisateurs un réglage simple pour choisir le pourcentage exact de l’alerte batterie faible. BatteryCountdown apporte une solution claire : choisissez quand le compte à rebours commence et voyez le temps restant avant extinction dans la barre des menus.",
      featuresEyebrow: "Pensé pour le moment critique",
      featuresTitle: "Une alerte vraiment exploitable",
      features: [
        ["01", "Commencer avant le critique", "Choisissez le niveau de batterie qui déclenche le compte à rebours, de 1% à 20%."],
        ["02", "Voir le temps, pas seulement le pourcentage", "BatteryCountdown transforme la batterie faible en estimation en direct, pour savoir s’il reste des minutes ou des secondes."],
        ["03", "Sauver votre travail à temps", "Voir l’alerte, enregistrer votre travail et brancher le chargeur avant l’arrêt soudain."]
      ],
      privateEyebrow: "Léger et privé",
      privateTitle: "Un petit utilitaire Mac, pas un autre tableau de bord",
      privateBody: "BatteryCountdown est une app locale de barre des menus macOS. Elle ne demande pas de compte, ne vous suit pas et vise une activité minimale en arrière-plan.",
      privateLink: "Contacter le support",
      principles: [
        ["Barre des menus d’abord :", "reste hors du Dock et apparaît quand le temps de batterie compte."],
        ["Déclencheur personnalisé :", "démarrez l’alerte au pourcentage de batterie que vous préférez."],
        ["Estimation de charge :", "pendant la charge, voyez le temps restant avant 100%."]
      ],
      chargerEyebrow: "Extra optionnel",
      chargerTitle: "Charger Run Mode",
      chargerBody: "Charger Run Mode est un achat unique optionnel pour une alerte d’extinction plus visible. Il sert quand un simple minuteur discret ne suffit pas.",
      chargerCta: "Obtenir BatteryCountdown",
      faqEyebrow: "Questions fréquentes",
      faqTitle: "FAQ alerte batterie faible Mac",
      miniFaq: [
        ["BatteryCountdown remplace-t-il l’alerte macOS ?", "Non. Il ajoute un compte à rebours plus clair dans la barre des menus."],
        ["Puis-je changer le moment de l’alerte ?", "BatteryCountdown vous laisse choisir quand son compte à rebours démarre, de 1% à 20%."],
        ["Fonctionne-t-il pendant la charge ?", "Oui. Pendant la charge, le menu peut afficher le temps restant avant charge complète."]
      ],
      seeAll: "Voir toutes les réponses",
      guideLink: "Lire le guide du pourcentage de batterie faible",
      finalEyebrow: "BatteryCountdown pour Mac",
      finalTitle: "Anticipez l’extinction sur batterie faible.",
      finalBody: "Téléchargez BatteryCountdown et gardez l’alerte là où vous la voyez : dans la barre des menus."
    },
    faq: {
      title: "FAQ alerte batterie faible Mac | BatteryCountdown",
      description: "FAQ sur l’alerte batterie faible Mac, le changement du seuil, les alertes d’extinction et BatteryCountdown.",
      ogDescription: "Réponses sur les alertes batterie faible Mac, les comptes à rebours d’extinction et BatteryCountdown.",
      eyebrow: "FAQ",
      h1: "FAQ alerte batterie faible Mac",
      lead: "BatteryCountdown aide les utilisateurs Mac à voir le temps restant avant qu’une batterie faible puisse provoquer une extinction. Ces réponses couvrent les alertes, le seuil, la confidentialité et le support.",
      finalEyebrow: "Encore hésitant ?",
      finalTitle: "Une alerte batterie faible plus claire sur Mac.",
      finalBody: "BatteryCountdown garde le compte à rebours visible dans la barre des menus, pour enregistrer et brancher le chargeur à temps.",
      qas: [
        ["Puis-je modifier l’alerte batterie faible sur Mac ?", "macOS ne propose pas à la plupart des utilisateurs un réglage intégré simple pour choisir le pourcentage exact. BatteryCountdown ajoute son propre compte à rebours dans la barre des menus."],
        ["Qu’est-ce qu’une alerte d’extinction sur Mac ?", "C’est une alerte qui indique que votre Mac est proche de s’éteindre parce que la batterie est presque vide. BatteryCountdown la rend visible sous forme de compte à rebours."],
        ["BatteryCountdown affiche-t-il le temps avant extinction ?", "Oui. Il estime le temps restant avant qu’une batterie faible puisse éteindre votre Mac et l’affiche dans la barre des menus."],
        ["Puis-je choisir quand l’alerte commence ?", "Oui. Vous pouvez choisir un pourcentage entre 1% et 20%."],
        ["Remplace-t-il l’icône batterie de macOS ?", "Non. BatteryCountdown est un utilitaire séparé de barre des menus."],
        ["Utilise-t-il beaucoup de CPU ou de batterie ?", "Il est conçu pour être léger et utiliser un minimum de ressources en arrière-plan."],
        ["Collecte-t-il des données ?", "BatteryCountdown est un utilitaire local. Il ne demande pas de compte et est conçu sans suivi."],
        ["Peut-il afficher le temps avant charge complète ?", "Oui. Quand votre Mac charge, le menu peut afficher le temps restant avant charge complète."],
        ["Qu’est-ce que Charger Run Mode ?", "C’est un déverrouillage optionnel par achat unique pour une alerte plus visible avant extinction sur batterie faible."],
        ["Comment contacter le support ?", "Écrivez à request@lyder.no pour le support, les bugs, les idées ou l’aide à l’achat."]
      ]
    },
    support: {
      title: "Support BatteryCountdown | Contact",
      description: "Contactez le support BatteryCountdown pour bugs, demandes de fonctionnalités, achats et questions d’alerte batterie faible Mac.",
      ogDescription: "Écrivez au support BatteryCountdown à request@lyder.no.",
      eyebrow: "Support",
      h1: "Besoin d’aide avec BatteryCountdown ?",
      lead: "Écrivez à request@lyder.no pour les bugs, idées, questions d’achat ou aide sur le comportement d’alerte batterie faible sur Mac.",
      topics: [
        ["Bug", "Signaler un bug", "Indiquez votre modèle de Mac, version de macOS, version de BatteryCountdown et ce que vous attendiez."],
        ["Idée", "Demander une fonctionnalité", "Dites-nous ce qui rendrait l’alerte ou le compte à rebours plus utile au quotidien."],
        ["IAP", "Aide achat ou restauration", "Si Charger Run Mode ne se déverrouille pas ou ne se restaure pas, écrivez avec la région de l’Apple ID utilisée."]
      ],
      beforeEyebrow: "Avant d’écrire",
      beforeTitle: "Détails utiles à inclure",
      beforeLead: "Les emails les plus utiles indiquent le niveau exact de batterie, si le Mac chargeait, si le compte à rebours est apparu et les étapes pour reproduire.",
      beforeBody: "BatteryCountdown est un utilitaire local sans compte. Le support est plus efficace si vous décrivez ce que vous avez vu sur votre Mac."
    },
    guide: {
      title: "Comment changer le pourcentage d’alerte batterie faible sur Mac",
      description: "Découvrez si l’on peut changer le pourcentage d’alerte batterie faible sur Mac et comment BatteryCountdown ajoute un compte à rebours personnalisé.",
      ogDescription: "macOS n’offre pas de réglage simple du pourcentage d’alerte batterie faible, mais BatteryCountdown ajoute un compte à rebours personnalisé.",
      eyebrow: "Guide batterie Mac",
      h1: "Comment changer le pourcentage d’alerte batterie faible sur Mac",
      lead: "Réponse courte : macOS ne propose pas à la plupart des utilisateurs un réglage intégré pour changer le pourcentage exact de l’alerte batterie faible. BatteryCountdown résout le problème en vous laissant choisir quand un compte à rebours visible démarre dans la barre des menus.",
      answerTitle: "Peut-on changer le pourcentage de l’alerte batterie faible Mac ?",
      answerParagraphs: [
        "Pas directement avec un réglage macOS normal. Apple affiche automatiquement des alertes batterie, mais macOS moderne ne fournit pas de simple curseur pour “prévenir à 20%” ou “prévenir à 5%”.",
        "Si votre besoin réel est une alerte plus tôt ou plus claire, BatteryCountdown est fait pour cela. Vous choisissez le pourcentage qui déclenche le compte à rebours et voyez le temps restant avant l’extinction possible."
      ],
      stepsTitle: "Ajouter une alerte personnalisée par pourcentage",
      steps: [
        "Téléchargez BatteryCountdown sur le Mac App Store.",
        "Ouvrez BatteryCountdown et choisissez le pourcentage de batterie qui déclenche le compte à rebours.",
        "Gardez le compte à rebours visible ou laissez-le apparaître quand la batterie devient faible.",
        "Quand l’alerte commence, enregistrez votre travail et branchez le chargeur."
      ],
      whyTitle: "Pourquoi un compte à rebours vaut mieux qu’un pourcentage",
      whyParagraphs: [
        "Un pourcentage seul est difficile à interpréter. Cinq pour cent peuvent durer plus ou moins longtemps selon l’état de la batterie, la charge système, la luminosité et les apps ouvertes.",
        "BatteryCountdown se concentre sur le temps. Au lieu de seulement signaler une batterie faible, il indique si vous avez le temps de finir, enregistrer ou trouver un chargeur."
      ],
      settingsTitle: "Ce que BatteryCountdown peut changer",
      settings: [
        "Le pourcentage où le compte à rebours démarre, de 1% à 20%.",
        "Si l’élément de barre des menus reste toujours visible ou apparaît seulement quand utile.",
        "Mode critique avec compte à rebours rouge clignotant dans les dernières minutes.",
        "Charger Run Mode optionnel pour une alerte d’extinction plus visible."
      ],
      quickTitle: "Réponses rapides",
      quick: [
        ["Puis-je régler l’alerte macOS intégrée à 20% ?", "Pas avec un réglage macOS normal. Utilisez BatteryCountdown si vous voulez une alerte personnalisée plus tôt."],
        ["BatteryCountdown modifie-t-il l’alerte système Apple ?", "Non. Il ajoute son propre compte à rebours dans la barre des menus sans modifier les fichiers système."],
        ["Fonctionne-t-il sur MacBook ?", "Oui. BatteryCountdown est fait pour les portables Mac sous macOS 13.0 ou plus récent."]
      ],
      finalEyebrow: "Alerte batterie faible Mac",
      finalTitle: "Choisissez quand le compte à rebours commence.",
      finalBody: "Utilisez BatteryCountdown pour obtenir une alerte plus claire avant qu’une batterie faible puisse éteindre votre Mac."
    }
  },
  hi: {
    nav: { guide: "गाइड", faq: "FAQ", support: "सपोर्ट", appStore: "Mac App Store" },
    footer: { language: "भाषा", email: SUPPORT_EMAIL },
    cta: { download: "Mac App Store से डाउनलोड करें", readFaq: "FAQ पढ़ें", email: "सपोर्ट ईमेल करें", readGuide: "गाइड पढ़ें" },
    home: {
      title: "Mac low battery warning | BatteryCountdown",
      description: "BatteryCountdown Mac menu bar में दिखाता है कि low battery के कारण Mac बंद होने से पहले कितना समय बचा है.",
      ogDescription: "Low battery से Mac बंद होने से पहले बचा समय सीधे menu bar में देखें.",
      eyebrow: "Mac menu bar utility",
      h1: ["Mac के लिए", "low battery", "shutdown warning"],
      hero: "BatteryCountdown सीधे menu bar में दिखाता है कि low battery के कारण आपका Mac बंद होने से पहले कितना समय बचा है.",
      popoverTitle: "BatteryCountdown",
      popoverSubtitle: "Low battery shutdown तक 14 मिनट",
      popoverText: "Charging? Dropdown full charge तक बचा समय भी दिखा सकता है.",
      answerEyebrow: "सीधा जवाब",
      answerTitle: "क्या Mac पर low battery warning बदली जा सकती है?",
      answer: "macOS में आम users के लिए exact low battery warning percentage बदलने की आसान setting नहीं है. BatteryCountdown इसका practical workaround देता है: आप countdown शुरू होने का percentage चुनते हैं और menu bar में shutdown से पहले बचा समय देखते हैं.",
      featuresEyebrow: "जब सच में जरूरत हो तब काम आए",
      featuresTitle: "ऐसी warning जिस पर आप action ले सकें",
      features: [
        ["01", "Critical होने से पहले शुरू करें", "Countdown शुरू होने का battery level 1% से 20% तक चुनें."],
        ["02", "सिर्फ percent नहीं, time देखें", "BatteryCountdown low battery को live time estimate में बदल देता है."],
        ["03", "समय रहते काम save करें", "Warning देखें, काम save करें और sudden shutdown से पहले charger लगा लें."]
      ],
      privateEyebrow: "Lightweight और private",
      privateTitle: "एक छोटी Mac utility, कोई भारी dashboard नहीं",
      privateBody: "BatteryCountdown local-only macOS menu bar app है. इसे account नहीं चाहिए, tracking नहीं करता और battery status देखते हुए minimal background resources इस्तेमाल करने के लिए बनाया गया है.",
      privateLink: "Support से संपर्क करें",
      principles: [
        ["Menu bar first:", "Dock से बाहर रहता है और battery time मायने रखने पर दिखता है."],
        ["Custom trigger:", "अपने पसंदीदा battery percentage पर low battery countdown शुरू करें."],
        ["Charging estimate:", "charging के दौरान full charge तक बचा समय देखें."]
      ],
      chargerEyebrow: "Optional extra",
      chargerTitle: "Charger Run Mode",
      chargerBody: "Charger Run Mode एक optional one-time unlock है, जो low battery shutdown warning को ज्यादा visible बनाता है.",
      chargerCta: "BatteryCountdown पाएं",
      faqEyebrow: "Common questions",
      faqTitle: "Mac low battery warning FAQ",
      miniFaq: [
        ["क्या BatteryCountdown macOS warning को replace करता है?", "नहीं. यह menu bar में एक clearer countdown जोड़ता है."],
        ["क्या मैं warning timing बदल सकता हूँ?", "BatteryCountdown आपको 1% से 20% तक अपना countdown start percentage चुनने देता है."],
        ["क्या यह charging में काम करता है?", "हाँ. Charging के दौरान dropdown full charge तक बचा समय दिखा सकता है."]
      ],
      seeAll: "सभी जवाब देखें",
      guideLink: "Low battery percentage guide पढ़ें",
      finalEyebrow: "Mac के लिए BatteryCountdown",
      finalTitle: "Low battery shutdown से पहले तैयार रहें.",
      finalBody: "BatteryCountdown डाउनलोड करें और warning को menu bar में वहीं रखें जहाँ आप उसे देख सकें."
    },
    faq: {
      title: "Mac Low Battery Warning FAQ | BatteryCountdown",
      description: "Mac low battery warning, warning timing बदलने, shutdown warning और BatteryCountdown के बारे में FAQ.",
      ogDescription: "Mac low battery warning और BatteryCountdown के जवाब.",
      eyebrow: "FAQ",
      h1: "Mac low battery warning FAQ",
      lead: "BatteryCountdown Mac users को दिखाता है कि low battery से shutdown होने से पहले कितना समय बचा है. ये जवाब warnings, timing, privacy और support को cover करते हैं.",
      finalEyebrow: "अभी सोच रहे हैं?",
      finalTitle: "Mac पर clearer low battery warning पाएं.",
      finalBody: "BatteryCountdown shutdown countdown को menu bar में visible रखता है ताकि आप समय रहते save और plug in कर सकें.",
      qas: [
        ["क्या मैं Mac पर low battery warning बदल सकता हूँ?", "macOS में exact warning percentage चुनने की simple built-in setting नहीं है. BatteryCountdown अपना menu bar countdown जोड़ता है."],
        ["Mac पर shutdown warning क्या है?", "यह warning बताती है कि battery बहुत कम होने पर Mac जल्द बंद हो सकता है. BatteryCountdown इसे visible countdown में बदलता है."],
        ["क्या BatteryCountdown shutdown तक समय दिखाता है?", "हाँ. यह estimate करता है कि low battery से Mac बंद होने से पहले कितना समय बचा है."],
        ["क्या मैं BatteryCountdown warning start चुन सकता हूँ?", "हाँ. आप 1% से 20% तक battery percentage चुन सकते हैं."],
        ["क्या यह macOS battery icon replace करता है?", "नहीं. यह normal macOS battery icon के साथ अलग menu bar utility है."],
        ["क्या यह ज्यादा CPU या battery use करता है?", "BatteryCountdown lightweight है और minimal background resources के लिए बनाया गया है."],
        ["क्या BatteryCountdown data collect करता है?", "यह local-only Mac utility है. Account नहीं चाहिए और tracking के बिना बनाया गया है."],
        ["क्या यह full charge तक time दिखा सकता है?", "हाँ. Charging के दौरान dropdown full charge तक बचा समय दिखा सकता है."],
        ["Charger Run Mode क्या है?", "यह optional one-time unlock है जो low battery shutdown warning को ज्यादा visible बनाता है."],
        ["Support से कैसे संपर्क करें?", "Support, bug report, feature request या purchase help के लिए request@lyder.no पर ईमेल करें."]
      ]
    },
    support: {
      title: "BatteryCountdown Support | Contact",
      description: "Bug reports, feature requests, purchase help और Mac low battery warning questions के लिए BatteryCountdown support से संपर्क करें.",
      ogDescription: "BatteryCountdown support को request@lyder.no पर ईमेल करें.",
      eyebrow: "Support",
      h1: "BatteryCountdown में मदद चाहिए?",
      lead: "BatteryCountdown support को request@lyder.no पर ईमेल करें. Bug reports, feature requests, purchase questions या Mac low battery warning behavior के लिए इसका उपयोग करें.",
      topics: [
        ["Bug", "Bug report करें", "अपना Mac model, macOS version, BatteryCountdown version और expected behavior शामिल करें."],
        ["Idea", "Feature request करें", "बताएं कि low battery warning या countdown आपके Mac workflow में और उपयोगी कैसे हो सकता है."],
        ["IAP", "Purchase या restore help", "अगर Charger Run Mode unlock या restore नहीं होता, purchase वाले Apple ID region के साथ ईमेल करें."]
      ],
      beforeEyebrow: "Email से पहले",
      beforeTitle: "Useful details",
      beforeLead: "सबसे तेज support emails में exact battery level, charging state, countdown दिखा या नहीं, और reproduce steps शामिल होते हैं.",
      beforeBody: "BatteryCountdown local-only utility है. इसमें account नहीं है, इसलिए support तब बेहतर होता है जब आप अपने Mac पर दिखी चीज़ describe करते हैं."
    },
    guide: {
      title: "Mac पर low battery warning percentage कैसे बदलें",
      description: "जानें कि Mac पर low battery warning percentage बदला जा सकता है या नहीं, और BatteryCountdown custom countdown कैसे जोड़ता है.",
      ogDescription: "macOS simple low battery percentage setting नहीं देता, लेकिन BatteryCountdown custom menu bar countdown जोड़ सकता है.",
      eyebrow: "Mac battery guide",
      h1: "Mac पर low battery warning percentage कैसे बदलें",
      lead: "Short answer: macOS में आम users के लिए exact low battery warning percentage बदलने की simple built-in setting नहीं है. BatteryCountdown आपको menu bar में visible countdown शुरू होने का percentage चुनने देता है.",
      answerTitle: "क्या Mac low battery warning percentage बदला जा सकता है?",
      answerParagraphs: [
        "Normal macOS setting से directly नहीं. Apple battery warnings automatically दिखाता है, लेकिन modern macOS “20% पर warn करें” या “5% पर warn करें” जैसा slider नहीं देता.",
        "अगर आपको earlier या clearer warning चाहिए, BatteryCountdown उसी के लिए बनाया गया है. आप percentage चुनते हैं और possible shutdown से पहले बचा समय menu bar में देखते हैं."
      ],
      stepsTitle: "Custom low battery percentage warning कैसे जोड़ें",
      steps: [
        "Mac App Store से BatteryCountdown डाउनलोड करें.",
        "BatteryCountdown खोलें और countdown start होने वाला battery percentage चुनें.",
        "Menu bar countdown visible रखें या idle icon छिपा दें ताकि low battery पर timer दिखे.",
        "Warning शुरू होने पर काम save करें और charger लगा लें."
      ],
      whyTitle: "Countdown सिर्फ percentage से बेहतर क्यों है",
      whyParagraphs: [
        "सिर्फ percentage समझना मुश्किल हो सकता है. 5% battery health, workload, brightness और apps के हिसाब से अलग-अलग समय तक चल सकता है.",
        "BatteryCountdown time पर focus करता है. यह सिर्फ battery low नहीं कहता, बल्कि बताता है कि आपके पास finish, save या charger लेने का कितना समय है."
      ],
      settingsTitle: "BatteryCountdown क्या बदल सकता है",
      settings: [
        "Countdown start होने वाला battery percentage, 1% से 20% तक.",
        "Menu bar item हमेशा visible रहे या जरूरत पर ही दिखे.",
        "Final minutes में red blinking critical countdown.",
        "ज्यादा visible shutdown warning के लिए optional Charger Run Mode."
      ],
      quickTitle: "Quick answers",
      quick: [
        ["क्या मैं built-in macOS warning को 20% पर set कर सकता हूँ?", "Normal macOS setting से नहीं. Earlier custom warning के लिए BatteryCountdown use करें."],
        ["क्या BatteryCountdown Apple system warning बदलता है?", "नहीं. यह system files बदले बिना अपना menu bar countdown जोड़ता है."],
        ["क्या यह MacBook पर काम करता है?", "हाँ. BatteryCountdown macOS 13.0 या later वाले Mac laptops के लिए बनाया गया है."]
      ],
      finalEyebrow: "Mac low battery warning",
      finalTitle: "Countdown कब शुरू हो, यह आप चुनें.",
      finalBody: "Low battery से Mac बंद होने से पहले clearer warning पाने के लिए BatteryCountdown use करें."
    }
  },
  it: {
    nav: { guide: "Guida", faq: "FAQ", support: "Supporto", appStore: "Mac App Store" },
    footer: { language: "Lingua", email: SUPPORT_EMAIL },
    cta: { download: "Scarica dal Mac App Store", readFaq: "Leggi le FAQ", email: "Scrivi al supporto", readGuide: "Leggi la guida" },
    home: {
      title: "Avviso batteria scarica Mac | BatteryCountdown",
      description: "BatteryCountdown mostra nella barra dei menu quanto tempo resta prima che la batteria scarica possa spegnere il Mac.",
      ogDescription: "Vedi nella barra dei menu quanto tempo resta prima dello spegnimento per batteria scarica.",
      eyebrow: "Utility per barra dei menu",
      h1: ["Avviso di", "spegnimento per", "batteria scarica"],
      hero: "BatteryCountdown mostra direttamente nella barra dei menu quanto tempo resta prima che la batteria scarica possa spegnere il Mac.",
      popoverTitle: "BatteryCountdown",
      popoverSubtitle: "14 minuti allo spegnimento per batteria scarica",
      popoverText: "In carica? Il menu può mostrare anche il tempo alla carica completa.",
      answerEyebrow: "Risposta breve",
      answerTitle: "Si può cambiare l’avviso di batteria scarica su Mac?",
      answer: "macOS non offre alla maggior parte degli utenti un’impostazione semplice per scegliere la percentuale esatta dell’avviso. BatteryCountdown offre una soluzione pratica: scegli quando parte il conto alla rovescia e vedi il tempo rimasto prima dello spegnimento.",
      featuresEyebrow: "Pensata per il momento giusto",
      featuresTitle: "Un avviso su cui puoi agire",
      features: [
        ["01", "Parte prima del critico", "Scegli il livello di batteria a cui iniziare, da 1% a 20%."],
        ["02", "Tempo, non solo percentuale", "BatteryCountdown trasforma la batteria scarica in una stima live."],
        ["03", "Salva il lavoro in tempo", "Vedi l’avviso, salva e collega il caricatore prima dello spegnimento improvviso."]
      ],
      privateEyebrow: "Leggera e privata",
      privateTitle: "Una piccola utility Mac, non un altro pannello",
      privateBody: "BatteryCountdown è un’app locale per la barra dei menu macOS. Non richiede account, non traccia l’utente ed è progettata per usare poche risorse.",
      privateLink: "Contatta il supporto",
      principles: [
        ["Prima la barra dei menu:", "resta fuori dal Dock e appare quando il tempo di batteria conta."],
        ["Trigger personalizzato:", "avvia il countdown alla percentuale che preferisci."],
        ["Stima di ricarica:", "durante la carica mostra il tempo alla carica completa."]
      ],
      chargerEyebrow: "Extra opzionale",
      chargerTitle: "Charger Run Mode",
      chargerBody: "Charger Run Mode è uno sblocco opzionale una tantum per un avviso di spegnimento più visibile.",
      chargerCta: "Ottieni BatteryCountdown",
      faqEyebrow: "Domande comuni",
      faqTitle: "FAQ avviso batteria scarica Mac",
      miniFaq: [
        ["Sostituisce l’avviso di macOS?", "No. Aggiunge un countdown più chiaro nella barra dei menu."],
        ["Posso cambiare quando appare l’avviso?", "BatteryCountdown permette di scegliere l’avvio del countdown da 1% a 20%."],
        ["Funziona in carica?", "Sì. Durante la carica può mostrare il tempo alla carica completa."]
      ],
      seeAll: "Vedi tutte le risposte",
      guideLink: "Leggi la guida sulla percentuale",
      finalEyebrow: "BatteryCountdown per Mac",
      finalTitle: "Anticipa lo spegnimento per batteria scarica.",
      finalBody: "Scarica BatteryCountdown e tieni l’avviso dove lo vedi: nella barra dei menu."
    },
    faq: {
      title: "FAQ avviso batteria scarica Mac | BatteryCountdown",
      description: "FAQ su avviso batteria scarica Mac, cambio percentuale, avviso di spegnimento e BatteryCountdown.",
      ogDescription: "Risposte su avvisi batteria scarica, countdown di spegnimento e BatteryCountdown.",
      eyebrow: "FAQ",
      h1: "FAQ avviso batteria scarica Mac",
      lead: "BatteryCountdown aiuta gli utenti Mac a vedere quanto tempo resta prima che la batteria scarica possa causare uno spegnimento.",
      finalEyebrow: "Ancora indeciso?",
      finalTitle: "Un avviso batteria scarica più chiaro su Mac.",
      finalBody: "BatteryCountdown mantiene visibile il countdown nella barra dei menu, così puoi salvare e collegare il caricatore in tempo.",
      qas: [
        ["Posso cambiare l’avviso batteria scarica su Mac?", "macOS non offre un’impostazione integrata semplice per scegliere la percentuale esatta. BatteryCountdown aggiunge il proprio countdown nella barra dei menu."],
        ["Cos’è un avviso di spegnimento su Mac?", "È un avviso che indica che il Mac è vicino allo spegnimento perché la batteria è quasi vuota."],
        ["BatteryCountdown mostra il tempo allo spegnimento?", "Sì. Stima il tempo rimasto prima che la batteria scarica possa spegnere il Mac."],
        ["Posso scegliere quando parte l’avviso?", "Sì. Puoi scegliere una percentuale da 1% a 20%."],
        ["Sostituisce l’icona batteria di macOS?", "No. È una utility separata della barra dei menu."],
        ["Usa molta CPU o batteria?", "È progettata per essere leggera e usare poche risorse in background."],
        ["Raccoglie dati?", "È una utility locale, senza account e senza tracking."],
        ["Può mostrare il tempo alla carica completa?", "Sì. Durante la carica il menu può mostrare il tempo rimanente."],
        ["Cos’è Charger Run Mode?", "È uno sblocco opzionale una tantum per un avviso più visibile vicino allo spegnimento."],
        ["Come contatto il supporto?", "Scrivi a request@lyder.no per supporto, bug, idee o aiuto con acquisti."]
      ]
    },
    support: {
      title: "Supporto BatteryCountdown | Contatto",
      description: "Contatta il supporto BatteryCountdown per bug, richieste, acquisti e domande sull’avviso batteria scarica Mac.",
      ogDescription: "Scrivi al supporto BatteryCountdown a request@lyder.no.",
      eyebrow: "Supporto",
      h1: "Serve aiuto con BatteryCountdown?",
      lead: "Scrivi a request@lyder.no per bug, richieste, acquisti o domande sull’avviso di batteria scarica su Mac.",
      topics: [
        ["Bug", "Segnala un bug", "Includi modello Mac, versione macOS, versione BatteryCountdown e cosa ti aspettavi."],
        ["Idea", "Richiedi una funzione", "Dicci cosa renderebbe il countdown più utile nel tuo uso quotidiano del Mac."],
        ["IAP", "Acquisto o ripristino", "Se Charger Run Mode non si sblocca o ripristina, scrivi con la regione dell’Apple ID usato."]
      ],
      beforeEyebrow: "Prima di scrivere",
      beforeTitle: "Dettagli utili",
      beforeLead: "Le email più rapide includono livello batteria, stato di carica, comparsa del countdown e passi per riprodurre il problema.",
      beforeBody: "BatteryCountdown è una utility locale senza account. Il supporto funziona meglio se descrivi ciò che hai visto sul Mac."
    },
    guide: {
      title: "Come cambiare la percentuale dell’avviso batteria scarica su Mac",
      description: "Scopri se puoi cambiare la percentuale dell’avviso batteria scarica su Mac e come BatteryCountdown aggiunge un countdown personalizzato.",
      ogDescription: "macOS non offre un’impostazione semplice per la percentuale dell’avviso, ma BatteryCountdown aggiunge un countdown personalizzato.",
      eyebrow: "Guida batteria Mac",
      h1: "Come cambiare la percentuale dell’avviso batteria scarica su Mac",
      lead: "Risposta breve: macOS non offre alla maggior parte degli utenti un’impostazione integrata per cambiare la percentuale esatta dell’avviso. BatteryCountdown risolve il problema lasciandoti scegliere quando inizia un countdown visibile nella barra dei menu.",
      answerTitle: "Si può cambiare la percentuale dell’avviso batteria scarica Mac?",
      answerParagraphs: [
        "Non direttamente con una normale impostazione macOS. Apple mostra avvisi batteria automaticamente, ma macOS moderno non offre un semplice slider per “avvisa al 20%” o “avvisa al 5%”.",
        "Se vuoi un avviso più precoce o più chiaro, BatteryCountdown è pensato per questo. Scegli la percentuale di avvio e vedi il tempo rimasto prima dello spegnimento possibile."
      ],
      stepsTitle: "Come aggiungere un avviso personalizzato per percentuale",
      steps: [
        "Scarica BatteryCountdown dal Mac App Store.",
        "Apri BatteryCountdown e scegli la percentuale a cui avviare il countdown.",
        "Tieni visibile il countdown o lascia che appaia solo quando la batteria è bassa.",
        "Quando parte l’avviso, salva il lavoro e collega il caricatore."
      ],
      whyTitle: "Perché un countdown è meglio di un altro percentuale",
      whyParagraphs: [
        "Una percentuale da sola può essere difficile da interpretare. Il 5% può durare diversamente in base a salute batteria, carico, luminosità e app aperte.",
        "BatteryCountdown si concentra sul tempo: mostra se hai margine per finire, salvare o prendere il caricatore."
      ],
      settingsTitle: "Cosa può cambiare BatteryCountdown",
      settings: [
        "La percentuale di avvio del countdown, da 1% a 20%.",
        "Se l’elemento in barra menu è sempre visibile o appare solo quando serve.",
        "Stile critico con countdown rosso lampeggiante negli ultimi minuti.",
        "Charger Run Mode opzionale per un avviso più visibile."
      ],
      quickTitle: "Risposte rapide",
      quick: [
        ["Posso impostare l’avviso macOS integrato al 20%?", "Non con una normale impostazione macOS. Usa BatteryCountdown per un avviso personalizzato anticipato."],
        ["BatteryCountdown modifica l’avviso di sistema Apple?", "No. Aggiunge il proprio countdown senza modificare file di sistema."],
        ["Funziona su MacBook?", "Sì. BatteryCountdown è fatto per portatili Mac con macOS 13.0 o successivo."]
      ],
      finalEyebrow: "Avviso batteria scarica Mac",
      finalTitle: "Scegli quando parte il countdown.",
      finalBody: "Usa BatteryCountdown per un avviso più chiaro prima che la batteria scarica possa spegnere il Mac."
    }
  },
  ja: {
    nav: { guide: "ガイド", faq: "FAQ", support: "サポート", appStore: "Mac App Store" },
    footer: { language: "言語", email: SUPPORT_EMAIL },
    cta: { download: "Mac App Storeでダウンロード", readFaq: "FAQを見る", email: "サポートにメール", readGuide: "ガイドを見る" },
    home: {
      title: "Macの低バッテリー警告 | BatteryCountdown",
      description: "BatteryCountdownは、低バッテリーでMacがシャットダウンする前の残り時間をメニューバーに表示します。",
      ogDescription: "低バッテリーでMacがシャットダウンする前の残り時間を、メニューバーですぐ確認できます。",
      eyebrow: "Macメニューバーユーティリティ",
      h1: ["Macの", "低バッテリー", "終了警告"],
      hero: "BatteryCountdownは、低バッテリーでMacがシャットダウンする前の残り時間をメニューバーに表示します。",
      popoverTitle: "BatteryCountdown",
      popoverSubtitle: "低バッテリーによる終了まで14分",
      popoverText: "充電中は、満充電までの残り時間も表示できます。",
      answerEyebrow: "先に答え",
      answerTitle: "Macの低バッテリー警告は変更できますか？",
      answer: "macOSには、低バッテリー警告の正確なパーセントを簡単に変更する通常設定はありません。BatteryCountdownなら、独自のカウントダウンを開始するバッテリー残量を選び、終了までの残り時間をメニューバーで確認できます。",
      featuresEyebrow: "必要な瞬間のために",
      featuresTitle: "行動につながる警告",
      features: [
        ["01", "危険になる前に開始", "1%から20%まで、カウントダウンを開始する残量を選べます。"],
        ["02", "パーセントではなく時間を見る", "BatteryCountdownは低バッテリーをライブの時間見積もりに変えます。"],
        ["03", "作業を失う前に保存", "警告に気づき、作業を保存し、突然の終了前に充電器を接続できます。"]
      ],
      privateEyebrow: "軽量でプライベート",
      privateTitle: "ダッシュボードではなく、小さなMacユーティリティ",
      privateBody: "BatteryCountdownはローカルで動作するmacOSメニューバーアプリです。アカウント不要、トラッキングなし、最小限のバックグラウンド動作を目指しています。",
      privateLink: "サポートに連絡",
      principles: [
        ["メニューバー中心:", "Dockに居座らず、バッテリー時間が重要なときに表示されます。"],
        ["カスタム開始:", "好きなバッテリー残量で低バッテリー警告を開始できます。"],
        ["充電見積もり:", "充電中は満充電までの残り時間を表示できます。"]
      ],
      chargerEyebrow: "オプション機能",
      chargerTitle: "Charger Run Mode",
      chargerBody: "Charger Run Modeは、より目立つ低バッテリー終了警告のためのオプションの買い切りアンロックです。",
      chargerCta: "BatteryCountdownを入手",
      faqEyebrow: "よくある質問",
      faqTitle: "Mac低バッテリー警告FAQ",
      miniFaq: [
        ["macOSの低バッテリー警告を置き換えますか？", "いいえ。より分かりやすいメニューバーカウントダウンを追加します。"],
        ["警告のタイミングを変更できますか？", "BatteryCountdownでは、1%から20%まで独自カウントダウンの開始残量を選べます。"],
        ["充電中も使えますか？", "はい。充電中は満充電までの時間を表示できます。"]
      ],
      seeAll: "すべての回答を見る",
      guideLink: "低バッテリー残量ガイドを読む",
      finalEyebrow: "Mac用BatteryCountdown",
      finalTitle: "低バッテリーによる突然の終了に先回り。",
      finalBody: "BatteryCountdownをダウンロードして、警告を見える場所、つまりメニューバーに置きましょう。"
    },
    faq: {
      title: "Mac低バッテリー警告FAQ | BatteryCountdown",
      description: "Macの低バッテリー警告、警告タイミング変更、シャットダウン警告、BatteryCountdownについてのFAQ。",
      ogDescription: "Macの低バッテリー警告とBatteryCountdownの回答集。",
      eyebrow: "FAQ",
      h1: "Mac低バッテリー警告FAQ",
      lead: "BatteryCountdownは、低バッテリーでMacが終了する前の残り時間を表示します。警告、タイミング、プライバシー、サポートについて回答します。",
      finalEyebrow: "まだ検討中ですか？",
      finalTitle: "Macの低バッテリー警告をもっと明確に。",
      finalBody: "BatteryCountdownは終了カウントダウンをメニューバーに表示し、保存や充電を間に合わせます。",
      qas: [
        ["Macの低バッテリー警告は変更できますか？", "macOSには、正確な警告パーセントを選ぶ簡単な標準設定はありません。BatteryCountdownは独自のメニューバーカウントダウンを追加します。"],
        ["Macの終了警告とは何ですか？", "バッテリーがほぼ空でMacがまもなく終了する可能性を知らせる警告です。BatteryCountdownはそれを見えるカウントダウンにします。"],
        ["終了までの時間を表示しますか？", "はい。低バッテリーでMacが終了する前の残り時間を見積もり、メニューバーに表示します。"],
        ["警告開始の残量を選べますか？", "はい。1%から20%まで選べます。"],
        ["macOSのバッテリーアイコンを置き換えますか？", "いいえ。通常のmacOSバッテリーアイコンと併用できる別のメニューバーアプリです。"],
        ["CPUやバッテリーを多く使いますか？", "軽量で、バックグラウンド使用を最小限にするよう設計されています。"],
        ["データを収集しますか？", "ローカル専用のMacユーティリティです。アカウント不要で、トラッキングなしを前提にしています。"],
        ["満充電までの時間も表示できますか？", "はい。充電中は満充電までの残り時間を表示できます。"],
        ["Charger Run Modeとは？", "低バッテリー終了前により目立つ警告を出すためのオプションの買い切り機能です。"],
        ["サポートへの連絡方法は？", "サポート、バグ報告、機能要望、購入サポートはrequest@lyder.noまでメールしてください。"]
      ]
    },
    support: {
      title: "BatteryCountdownサポート | お問い合わせ",
      description: "BatteryCountdownのバグ報告、機能要望、購入サポート、Mac低バッテリー警告の質問はこちら。",
      ogDescription: "BatteryCountdownサポート: request@lyder.no。",
      eyebrow: "サポート",
      h1: "BatteryCountdownのサポートが必要ですか？",
      lead: "request@lyder.noまでメールしてください。バグ報告、機能要望、購入に関する質問、Macの低バッテリー警告の挙動について利用できます。",
      topics: [
        ["Bug", "バグを報告", "Macのモデル、macOSバージョン、BatteryCountdownバージョン、期待した動作を書いてください。"],
        ["Idea", "機能をリクエスト", "低バッテリー警告やカウントダウンをもっと便利にするアイデアを教えてください。"],
        ["IAP", "購入・復元のヘルプ", "Charger Run Modeが解除または復元されない場合は、購入したApple IDの地域も記載してください。"]
      ],
      beforeEyebrow: "メールの前に",
      beforeTitle: "含めると役立つ情報",
      beforeLead: "正確なバッテリー残量、充電中だったか、カウントダウンが表示されたか、再現手順があると対応が早くなります。",
      beforeBody: "BatteryCountdownはアカウントを使わないローカルユーティリティです。Mac上で見えた内容を具体的に書くとサポートしやすくなります。"
    },
    guide: {
      title: "Macの低バッテリー警告パーセントを変更する方法",
      description: "Macで低バッテリー警告のパーセントを変更できるか、BatteryCountdownでカスタムカウントダウンを追加する方法を説明します。",
      ogDescription: "macOSには簡単な低バッテリー警告パーセント設定はありませんが、BatteryCountdownでカスタムカウントダウンを追加できます。",
      eyebrow: "Macバッテリーガイド",
      h1: "Macの低バッテリー警告パーセントを変更する方法",
      lead: "短い答え: macOSには、低バッテリー警告の正確なパーセントを変更する簡単な標準設定はありません。BatteryCountdownなら、メニューバーに表示される独自カウントダウンの開始残量を選べます。",
      answerTitle: "Macの低バッテリー警告パーセントは変更できますか？",
      answerParagraphs: [
        "通常のmacOS設定から直接はできません。Appleはバッテリー警告を自動表示しますが、現代のmacOSには「20%で警告」「5%で警告」のような単純なスライダーはありません。",
        "より早く、より明確な警告が目的なら、BatteryCountdownがその用途に合います。開始残量を選び、終了までの残り時間をメニューバーで確認できます。"
      ],
      stepsTitle: "カスタム低バッテリー警告を追加する方法",
      steps: [
        "Mac App StoreからBatteryCountdownをダウンロードします。",
        "BatteryCountdownを開き、カウントダウン開始のバッテリー残量を選びます。",
        "メニューバーのカウントダウンを表示するか、低バッテリー時だけ表示させます。",
        "警告が始まったら作業を保存し、充電器を接続します。"
      ],
      whyTitle: "なぜパーセントよりカウントダウンが有効なのか",
      whyParagraphs: [
        "パーセントだけでは判断しにくいことがあります。5%でも、バッテリー状態、負荷、明るさ、開いているアプリによって残り時間は変わります。",
        "BatteryCountdownは時間に注目します。低バッテリーを知らせるだけでなく、保存や充電にどれくらい余裕があるかを示します。"
      ],
      settingsTitle: "BatteryCountdownで変更できること",
      settings: [
        "カウントダウン開始のバッテリー残量: 1%から20%。",
        "メニューバー項目を常に表示するか、必要なときだけ表示するか。",
        "最後の数分で赤く点滅するクリティカル警告。",
        "より目立つ警告のためのオプションCharger Run Mode。"
      ],
      quickTitle: "クイック回答",
      quick: [
        ["macOS標準警告を20%に設定できますか？", "通常のmacOS設定ではできません。早めのカスタム警告にはBatteryCountdownを使ってください。"],
        ["Appleのシステム警告を変更しますか？", "いいえ。システムファイルを変更せず、独自のメニューバーカウントダウンを追加します。"],
        ["MacBookで使えますか？", "はい。macOS 13.0以降のMacノートブック向けです。"]
      ],
      finalEyebrow: "Mac低バッテリー警告",
      finalTitle: "カウントダウン開始を自分で選べます。",
      finalBody: "低バッテリーでMacが終了する前に、BatteryCountdownでもっと分かりやすい警告を受け取りましょう。"
    }
  },
  ko: {
    nav: { guide: "가이드", faq: "FAQ", support: "지원", appStore: "Mac App Store" },
    footer: { language: "언어", email: SUPPORT_EMAIL },
    cta: { download: "Mac App Store에서 다운로드", readFaq: "FAQ 보기", email: "지원 메일 보내기", readGuide: "가이드 보기" },
    home: {
      title: "Mac 배터리 부족 경고 | BatteryCountdown",
      description: "BatteryCountdown은 배터리 부족으로 Mac이 종료되기 전 남은 시간을 메뉴 막대에 보여줍니다.",
      ogDescription: "배터리 부족으로 Mac이 꺼지기 전 남은 시간을 메뉴 막대에서 바로 확인하세요.",
      eyebrow: "Mac 메뉴 막대 유틸리티",
      h1: ["Mac용", "배터리 부족", "종료 경고"],
      hero: "BatteryCountdown은 배터리 부족으로 Mac이 종료되기 전 남은 시간을 메뉴 막대에 보여줍니다.",
      popoverTitle: "BatteryCountdown",
      popoverSubtitle: "배터리 부족 종료까지 14분",
      popoverText: "충전 중에는 완전히 충전될 때까지 남은 시간도 표시할 수 있습니다.",
      answerEyebrow: "짧은 답변",
      answerTitle: "Mac의 배터리 부족 경고를 변경할 수 있나요?",
      answer: "macOS에는 대부분의 사용자가 배터리 부족 경고의 정확한 퍼센트를 쉽게 바꾸는 설정이 없습니다. BatteryCountdown은 선택한 배터리 퍼센트에서 자체 카운트다운을 시작해 종료 전 남은 시간을 메뉴 막대에 표시합니다.",
      featuresEyebrow: "필요한 순간을 위해",
      featuresTitle: "바로 행동할 수 있는 경고",
      features: [
        ["01", "위험해지기 전에 시작", "카운트다운을 시작할 배터리 수준을 1%에서 20%까지 선택하세요."],
        ["02", "퍼센트보다 시간을 보기", "BatteryCountdown은 배터리 부족을 실시간 남은 시간으로 바꿔 보여줍니다."],
        ["03", "작업을 제때 저장", "경고를 보고 작업을 저장한 뒤 갑작스러운 종료 전에 충전기를 연결하세요."]
      ],
      privateEyebrow: "가볍고 비공개",
      privateTitle: "또 다른 대시보드가 아닌 작은 Mac 유틸리티",
      privateBody: "BatteryCountdown은 로컬에서 동작하는 macOS 메뉴 막대 앱입니다. 계정이 필요 없고 추적하지 않으며 최소한의 백그라운드 사용을 목표로 합니다.",
      privateLink: "지원 문의",
      principles: [
        ["메뉴 막대 중심:", "Dock에 머물지 않고 배터리 시간이 중요할 때 나타납니다."],
        ["사용자 지정 시작:", "원하는 배터리 퍼센트에서 경고 카운트다운을 시작합니다."],
        ["충전 예상:", "충전 중에는 완충까지 남은 시간을 볼 수 있습니다."]
      ],
      chargerEyebrow: "선택 기능",
      chargerTitle: "Charger Run Mode",
      chargerBody: "Charger Run Mode는 더 눈에 띄는 배터리 부족 종료 경고를 위한 선택적 일회성 잠금 해제입니다.",
      chargerCta: "BatteryCountdown 받기",
      faqEyebrow: "자주 묻는 질문",
      faqTitle: "Mac 배터리 부족 경고 FAQ",
      miniFaq: [
        ["macOS 배터리 경고를 대체하나요?", "아니요. 더 명확한 메뉴 막대 카운트다운을 추가합니다."],
        ["경고 시점을 바꿀 수 있나요?", "BatteryCountdown은 1%부터 20%까지 자체 카운트다운 시작 지점을 선택할 수 있습니다."],
        ["충전 중에도 작동하나요?", "예. 충전 중에는 완충까지 남은 시간을 표시할 수 있습니다."]
      ],
      seeAll: "모든 답변 보기",
      guideLink: "배터리 경고 퍼센트 가이드 보기",
      finalEyebrow: "Mac용 BatteryCountdown",
      finalTitle: "배터리 부족 종료를 미리 대비하세요.",
      finalBody: "BatteryCountdown을 다운로드하고 메뉴 막대에서 경고를 바로 확인하세요."
    },
    faq: {
      title: "Mac 배터리 부족 경고 FAQ | BatteryCountdown",
      description: "Mac 배터리 부족 경고, 경고 시점 변경, 종료 경고, BatteryCountdown에 대한 FAQ.",
      ogDescription: "Mac 배터리 부족 경고와 BatteryCountdown에 대한 답변.",
      eyebrow: "FAQ",
      h1: "Mac 배터리 부족 경고 FAQ",
      lead: "BatteryCountdown은 배터리 부족으로 Mac이 종료되기 전 남은 시간을 보여줍니다. 경고, 시작 시점, 개인정보, 지원에 대한 답변입니다.",
      finalEyebrow: "아직 고민 중인가요?",
      finalTitle: "더 명확한 Mac 배터리 부족 경고.",
      finalBody: "BatteryCountdown은 종료 카운트다운을 메뉴 막대에 표시해 제때 저장하고 충전할 수 있게 합니다.",
      qas: [
        ["Mac에서 배터리 부족 경고를 바꿀 수 있나요?", "macOS에는 정확한 경고 퍼센트를 선택하는 간단한 기본 설정이 없습니다. BatteryCountdown은 자체 메뉴 막대 카운트다운을 추가합니다."],
        ["Mac 종료 경고란 무엇인가요?", "배터리가 거의 없어 Mac이 곧 꺼질 수 있음을 알려주는 경고입니다."],
        ["종료까지 남은 시간을 보여주나요?", "예. Mac이 배터리 부족으로 종료되기 전 남은 시간을 추정해 표시합니다."],
        ["경고 시작 퍼센트를 선택할 수 있나요?", "예. 1%에서 20%까지 선택할 수 있습니다."],
        ["macOS 배터리 아이콘을 대체하나요?", "아니요. 일반 macOS 배터리 아이콘과 함께 쓸 수 있는 별도 메뉴 막대 유틸리티입니다."],
        ["CPU나 배터리를 많이 쓰나요?", "가볍게 동작하고 백그라운드 사용을 최소화하도록 설계되었습니다."],
        ["데이터를 수집하나요?", "로컬 전용 Mac 유틸리티이며 계정이 필요 없고 추적 없이 설계되었습니다."],
        ["완충까지 남은 시간도 보여주나요?", "예. 충전 중에는 완전히 충전될 때까지 남은 시간을 표시할 수 있습니다."],
        ["Charger Run Mode는 무엇인가요?", "Mac이 배터리 부족 종료에 가까울 때 더 눈에 띄는 경고를 제공하는 선택적 일회성 잠금 해제입니다."],
        ["지원은 어떻게 받나요?", "지원, 버그, 기능 요청, 구매 도움은 request@lyder.no로 이메일을 보내세요."]
      ]
    },
    support: {
      title: "BatteryCountdown 지원 | 문의",
      description: "버그, 기능 요청, 구매 도움, Mac 배터리 부족 경고 질문은 BatteryCountdown 지원에 문의하세요.",
      ogDescription: "BatteryCountdown 지원: request@lyder.no.",
      eyebrow: "지원",
      h1: "BatteryCountdown 도움이 필요하신가요?",
      lead: "request@lyder.no로 이메일을 보내세요. 버그, 기능 요청, 구매 질문, Mac 배터리 부족 경고 동작에 대한 도움을 받을 수 있습니다.",
      topics: [
        ["Bug", "버그 신고", "Mac 모델, macOS 버전, BatteryCountdown 버전, 기대한 동작을 포함해 주세요."],
        ["Idea", "기능 요청", "배터리 경고나 카운트다운이 Mac 사용 흐름에서 더 유용해질 방법을 알려주세요."],
        ["IAP", "구매 또는 복원 도움", "Charger Run Mode가 잠금 해제 또는 복원되지 않으면 구매에 사용한 Apple ID 지역을 함께 보내주세요."]
      ],
      beforeEyebrow: "이메일 전",
      beforeTitle: "포함하면 좋은 정보",
      beforeLead: "정확한 배터리 수준, 충전 중이었는지, 카운트다운이 나타났는지, 재현 단계가 있으면 더 빠르게 도와드릴 수 있습니다.",
      beforeBody: "BatteryCountdown은 계정을 쓰지 않는 로컬 유틸리티입니다. Mac에서 본 내용을 설명해 주시면 지원이 쉬워집니다."
    },
    guide: {
      title: "Mac 배터리 부족 경고 퍼센트 변경 방법",
      description: "Mac에서 배터리 부족 경고 퍼센트를 바꿀 수 있는지, BatteryCountdown으로 사용자 지정 카운트다운을 추가하는 방법을 알아보세요.",
      ogDescription: "macOS에는 간단한 배터리 부족 경고 퍼센트 설정이 없지만 BatteryCountdown은 사용자 지정 카운트다운을 추가합니다.",
      eyebrow: "Mac 배터리 가이드",
      h1: "Mac 배터리 부족 경고 퍼센트 변경 방법",
      lead: "짧은 답변: macOS에는 대부분의 사용자가 배터리 부족 경고의 정확한 퍼센트를 바꾸는 기본 설정이 없습니다. BatteryCountdown은 메뉴 막대 카운트다운이 시작될 배터리 퍼센트를 선택하게 해 줍니다.",
      answerTitle: "Mac 배터리 부족 경고 퍼센트를 바꿀 수 있나요?",
      answerParagraphs: [
        "일반 macOS 설정으로는 직접 바꿀 수 없습니다. Apple은 배터리 경고를 자동으로 표시하지만, 최신 macOS에는 “20%에서 경고” 같은 단순 슬라이더가 없습니다.",
        "더 이르거나 더 명확한 경고가 필요하다면 BatteryCountdown이 그 용도에 맞습니다. 시작 퍼센트를 선택하고 종료 전 남은 시간을 메뉴 막대에서 확인할 수 있습니다."
      ],
      stepsTitle: "사용자 지정 배터리 부족 경고 추가 방법",
      steps: [
        "Mac App Store에서 BatteryCountdown을 다운로드합니다.",
        "BatteryCountdown을 열고 카운트다운을 시작할 배터리 퍼센트를 선택합니다.",
        "메뉴 막대 카운트다운을 보이게 두거나 배터리가 낮을 때만 나타나게 합니다.",
        "경고가 시작되면 작업을 저장하고 충전기를 연결합니다."
      ],
      whyTitle: "왜 퍼센트보다 카운트다운이 나은가요",
      whyParagraphs: [
        "퍼센트만으로는 판단하기 어렵습니다. 5%라도 배터리 상태, 작업 부하, 밝기, 앱에 따라 남은 시간이 달라집니다.",
        "BatteryCountdown은 시간에 집중합니다. 배터리가 낮다는 말뿐 아니라 저장하거나 충전할 시간이 얼마나 남았는지 보여줍니다."
      ],
      settingsTitle: "BatteryCountdown으로 바꿀 수 있는 것",
      settings: [
        "카운트다운 시작 퍼센트: 1%부터 20%.",
        "메뉴 막대 항목을 항상 보이게 할지, 필요할 때만 보이게 할지.",
        "마지막 몇 분의 빨간 깜박임 critical countdown.",
        "더 눈에 띄는 경고를 위한 선택적 Charger Run Mode."
      ],
      quickTitle: "빠른 답변",
      quick: [
        ["macOS 기본 경고를 20%로 설정할 수 있나요?", "일반 macOS 설정으로는 어렵습니다. 더 이른 사용자 지정 경고에는 BatteryCountdown을 사용하세요."],
        ["Apple 시스템 경고를 변경하나요?", "아니요. 시스템 파일을 바꾸지 않고 자체 메뉴 막대 카운트다운을 추가합니다."],
        ["MacBook에서 작동하나요?", "예. macOS 13.0 이상 Mac 노트북용입니다."]
      ],
      finalEyebrow: "Mac 배터리 부족 경고",
      finalTitle: "카운트다운 시작 시점을 선택하세요.",
      finalBody: "배터리 부족으로 Mac이 종료되기 전에 BatteryCountdown으로 더 명확한 경고를 받으세요."
    }
  },
  nb: {
    nav: { guide: "Guide", faq: "FAQ", support: "Support", appStore: "Mac App Store" },
    footer: { language: "Språk", email: SUPPORT_EMAIL },
    cta: { download: "Last ned i Mac App Store", readFaq: "Les FAQ", email: "Send supportmail", readGuide: "Les guiden" },
    home: {
      title: "Lavt batteri-varsel Mac | BatteryCountdown",
      description: "BatteryCountdown viser hvor mye tid som gjenstår før lavt batteri kan slå av Macen din.",
      ogDescription: "Se hvor mye tid som er igjen før lavt batteri slår av Macen, rett i menylinjen.",
      eyebrow: "Mac menylinje-verktøy",
      h1: ["Varsel før", "Macen skrur", "seg av"],
      hero: "BatteryCountdown viser hvor mye tid som er igjen før lavt batteri kan slå av Macen din, rett i menylinjen.",
      popoverTitle: "BatteryCountdown",
      popoverSubtitle: "14 minutter til avslutning ved lavt batteri",
      popoverText: "Lader du? Dropdownen kan også vise tid til fulladet.",
      answerEyebrow: "Kort svar",
      answerTitle: "Kan du endre lavt batteri-varselet på Mac?",
      answer: "macOS gir de fleste ikke en enkel innstilling for å endre nøyaktig når lavt batteri-varselet vises. BatteryCountdown gir en tydelig løsning: velg når nedtellingen starter, og se tiden som gjenstår før avslutning i menylinjen.",
      featuresEyebrow: "Bygget for øyeblikket du trenger det",
      featuresTitle: "Et varsel du faktisk kan handle på",
      features: [
        ["01", "Start før det blir kritisk", "Velg batterinivået der nedtellingen skal starte, fra 1% til 20%."],
        ["02", "Se tid, ikke bare prosent", "BatteryCountdown gjør lavt batteri om til et levende tidsestimat."],
        ["03", "Lagre arbeidet i tide", "Se varselet, lagre arbeidet og hent lader før Macen skrur seg av."]
      ],
      privateEyebrow: "Lett og privat",
      privateTitle: "Et lite Mac-verktøy, ikke enda et dashboard",
      privateBody: "BatteryCountdown er en lokal macOS menylinje-app. Den trenger ingen konto, sporer deg ikke og er laget for minimal bakgrunnsbruk.",
      privateLink: "Kontakt support",
      principles: [
        ["Menylinje først:", "holder seg ute av Dock og vises når batteritid betyr noe."],
        ["Egen trigger:", "start varselet på batteriprosenten du foretrekker."],
        ["Ladeestimat:", "når du lader kan du se tid til fulladet."]
      ],
      chargerEyebrow: "Valgfritt ekstra",
      chargerTitle: "Charger Run Mode",
      chargerBody: "Charger Run Mode er en valgfri engangsopplåsing for et mer synlig varsel før Macen skrur seg av ved lavt batteri.",
      chargerCta: "Få BatteryCountdown",
      faqEyebrow: "Vanlige spørsmål",
      faqTitle: "FAQ om lavt batteri-varsel på Mac",
      miniFaq: [
        ["Erstatter BatteryCountdown macOS-varselet?", "Nei. Det legger til en tydeligere nedtelling i menylinjen."],
        ["Kan jeg endre når varselet starter?", "BatteryCountdown lar deg velge når nedtellingen starter, fra 1% til 20%."],
        ["Fungerer det mens Macen lader?", "Ja. Dropdownen kan vise tid til fulladet."]
      ],
      seeAll: "Se alle svar",
      guideLink: "Les guiden om batteriprosent",
      finalEyebrow: "BatteryCountdown for Mac",
      finalTitle: "Vær foran lavt batteri-avslutningen.",
      finalBody: "Last ned BatteryCountdown og hold varselet der du ser det: i menylinjen."
    },
    faq: {
      title: "Lavt batteri-varsel Mac FAQ | BatteryCountdown",
      description: "FAQ om lavt batteri-varsel på Mac, endring av varselprosent, avslutningsvarsel og BatteryCountdown.",
      ogDescription: "Svar om lavt batteri-varsel, nedtelling til avslutning og BatteryCountdown.",
      eyebrow: "FAQ",
      h1: "Lavt batteri-varsel Mac FAQ",
      lead: "BatteryCountdown hjelper Mac-brukere å se hvor mye tid som er igjen før lavt batteri kan føre til avslutning.",
      finalEyebrow: "Fortsatt usikker?",
      finalTitle: "Få et tydeligere lavt batteri-varsel på Mac.",
      finalBody: "BatteryCountdown holder nedtellingen synlig i menylinjen, så du rekker å lagre og plugge inn.",
      qas: [
        ["Kan jeg endre lavt batteri-varselet på Mac?", "macOS har ikke en enkel innebygd innstilling for nøyaktig varselprosent. BatteryCountdown legger til sin egen nedtelling i menylinjen."],
        ["Hva er et avslutningsvarsel på Mac?", "Et varsel som sier at Macen snart kan skru seg av fordi batteriet er nesten tomt."],
        ["Viser BatteryCountdown tid til Macen skrur seg av?", "Ja. Den estimerer tid igjen før lavt batteri kan slå av Macen."],
        ["Kan jeg velge når BatteryCountdown starter?", "Ja. Du kan velge 1% til 20%."],
        ["Erstatter den macOS batteri-ikonet?", "Nei. Det er et eget menylinjeverktøy som kan brukes ved siden av macOS-ikonet."],
        ["Bruker den mye CPU eller batteri?", "Den er laget for å være lett og bruke minimalt med ressurser."],
        ["Samler BatteryCountdown data?", "Nei. Den er lokal, trenger ingen konto og er laget uten tracking."],
        ["Kan den vise tid til fulladet?", "Ja. Når Macen lader kan dropdownen vise tid til fulladet."],
        ["Hva er Charger Run Mode?", "En valgfri engangsopplåsing for et mer synlig varsel ved lavt batteri."],
        ["Hvordan kontakter jeg support?", "Send e-post til request@lyder.no for support, bugs, ønsker eller kjøpshjelp."]
      ]
    },
    support: {
      title: "BatteryCountdown Support | Kontakt",
      description: "Kontakt BatteryCountdown support for feilrapporter, ønsker, kjøpshjelp og spørsmål om lavt batteri-varsel på Mac.",
      ogDescription: "Send e-post til BatteryCountdown support på request@lyder.no.",
      eyebrow: "Support",
      h1: "Trenger du hjelp med BatteryCountdown?",
      lead: "Send e-post til request@lyder.no. Bruk dette for bugs, ønsker, kjøpsspørsmål eller hjelp med lavt batteri-varsel på Mac.",
      topics: [
        ["Bug", "Rapporter en feil", "Ta med Mac-modell, macOS-versjon, BatteryCountdown-versjon og hva du forventet."],
        ["Idé", "Foreslå en funksjon", "Fortell hva som ville gjort varselet eller nedtellingen mer nyttig i din Mac-hverdag."],
        ["IAP", "Kjøp eller gjenoppretting", "Hvis Charger Run Mode ikke låses opp eller gjenopprettes, send e-post med Apple ID-regionen brukt ved kjøp."]
      ],
      beforeEyebrow: "Før du sender",
      beforeTitle: "Nyttige detaljer",
      beforeLead: "De beste supportmailene har nøyaktig batterinivå, om Macen ladet, om nedtellingen dukket opp og steg for å gjenskape problemet.",
      beforeBody: "BatteryCountdown er et lokalt verktøy uten kontoer. Support fungerer best når du beskriver hva du så på Macen."
    },
    guide: {
      title: "Hvordan endre lavt batteri-varsel-prosent på Mac",
      description: "Se om du kan endre prosent for lavt batteri-varsel på Mac, og hvordan BatteryCountdown legger til en egen nedtelling.",
      ogDescription: "macOS har ikke enkel prosent-innstilling for lavt batteri, men BatteryCountdown legger til egen nedtelling.",
      eyebrow: "Mac batteriguide",
      h1: "Hvordan endre lavt batteri-varsel-prosent på Mac",
      lead: "Kort svar: macOS gir ikke de fleste en enkel innebygd innstilling for å endre nøyaktig prosent for lavt batteri-varsel. BatteryCountdown løser det praktiske problemet ved å la deg velge når en synlig nedtelling starter i menylinjen.",
      answerTitle: "Kan du endre prosent for lavt batteri-varsel på Mac?",
      answerParagraphs: [
        "Ikke direkte med en vanlig macOS-innstilling. Apple viser batterivarsler automatisk, men moderne macOS har ikke en enkel slider for “varsle ved 20%” eller “varsle ved 5%”.",
        "Hvis målet er et tidligere eller tydeligere varsel, er BatteryCountdown laget for akkurat det. Du velger prosent, og ser tiden igjen før mulig avslutning i menylinjen."
      ],
      stepsTitle: "Slik legger du til et eget lavt batteri-varsel",
      steps: [
        "Last ned BatteryCountdown fra Mac App Store.",
        "Åpne BatteryCountdown og velg batteriprosenten der nedtellingen skal starte.",
        "La menylinje-nedtellingen være synlig, eller skjul idle-ikonet og la timeren vises ved lavt batteri.",
        "Når varselet starter, lagre arbeidet og plugg inn laderen."
      ],
      whyTitle: "Hvorfor nedtelling er bedre enn bare prosent",
      whyParagraphs: [
        "Prosent alene er vanskelig å handle på. Fem prosent kan bety ulik tid avhengig av batterihelse, arbeidsmengde, lysstyrke og åpne apper.",
        "BatteryCountdown fokuserer på tid. Det viser om du har nok tid til å gjøre deg ferdig, lagre eller hente lader."
      ],
      settingsTitle: "Hva BatteryCountdown kan endre",
      settings: [
        "Batteriprosenten der nedtellingen starter, fra 1% til 20%.",
        "Om menylinje-elementet alltid er synlig eller bare vises når det trengs.",
        "Kritisk varsling med rød blinkende nedtelling i de siste minuttene.",
        "Valgfri Charger Run Mode for et mer synlig avslutningsvarsel."
      ],
      quickTitle: "Raske svar",
      quick: [
        ["Kan jeg sette macOS-varselet til 20%?", "Ikke med en vanlig macOS-innstilling. Bruk BatteryCountdown for et eget tidligere varsel."],
        ["Endrer BatteryCountdown Apples systemvarsel?", "Nei. Den legger til sin egen menylinje-nedtelling uten å endre systemfiler."],
        ["Fungerer det på MacBook?", "Ja. BatteryCountdown er laget for bærbare Macer med macOS 13.0 eller nyere."]
      ],
      finalEyebrow: "Lavt batteri-varsel for Mac",
      finalTitle: "Velg når nedtellingen starter.",
      finalBody: "Bruk BatteryCountdown for et tydeligere varsel før lavt batteri skrur av Macen."
    }
  },
  "pt-BR": {
    nav: { guide: "Guia", faq: "FAQ", support: "Suporte", appStore: "Mac App Store" },
    footer: { language: "Idioma", email: SUPPORT_EMAIL },
    cta: { download: "Baixar na Mac App Store", readFaq: "Ler FAQ", email: "Enviar e-mail", readGuide: "Ler guia" },
    home: {
      title: "Aviso de bateria fraca no Mac | BatteryCountdown",
      description: "BatteryCountdown mostra na barra de menus quanto tempo resta antes que a bateria fraca possa desligar seu Mac.",
      ogDescription: "Veja quanto tempo resta antes que a bateria fraca desligue seu Mac, direto na barra de menus.",
      eyebrow: "Utilitário da barra de menus",
      h1: ["Aviso de", "desligamento por", "bateria fraca"],
      hero: "BatteryCountdown mostra quanto tempo resta antes que a bateria fraca possa desligar seu Mac, direto na barra de menus.",
      popoverTitle: "BatteryCountdown",
      popoverSubtitle: "14 minutos até desligar por bateria fraca",
      popoverText: "Carregando? O menu também pode mostrar o tempo até carga completa.",
      answerEyebrow: "Resposta direta",
      answerTitle: "Dá para mudar o aviso de bateria fraca no Mac?",
      answer: "O macOS não oferece para a maioria dos usuários uma configuração simples para mudar a porcentagem exata do aviso de bateria fraca. O BatteryCountdown resolve o problema prático: você escolhe quando a contagem começa e vê o tempo restante antes do desligamento na barra de menus.",
      featuresEyebrow: "Feito para o momento certo",
      featuresTitle: "Um aviso que dá tempo de agir",
      features: [
        ["01", "Comece antes do crítico", "Escolha o nível de bateria em que a contagem deve começar, de 1% a 20%."],
        ["02", "Veja tempo, não só porcentagem", "BatteryCountdown transforma bateria fraca em uma estimativa ao vivo."],
        ["03", "Salve seu trabalho a tempo", "Veja o aviso, salve o trabalho e conecte o carregador antes do desligamento repentino."]
      ],
      privateEyebrow: "Leve e privado",
      privateTitle: "Um pequeno utilitário para Mac, não outro painel",
      privateBody: "BatteryCountdown é um app local para a barra de menus do macOS. Não exige conta, não rastreia você e foi feito para usar poucos recursos.",
      privateLink: "Falar com suporte",
      principles: [
        ["Barra de menus primeiro:", "fica fora do Dock e aparece quando o tempo de bateria importa."],
        ["Gatilho personalizado:", "comece o aviso na porcentagem de bateria que preferir."],
        ["Estimativa de carga:", "ao carregar, veja o tempo restante até carga completa."]
      ],
      chargerEyebrow: "Extra opcional",
      chargerTitle: "Charger Run Mode",
      chargerBody: "Charger Run Mode é um desbloqueio opcional de compra única para um aviso mais visível de desligamento por bateria fraca.",
      chargerCta: "Obter BatteryCountdown",
      faqEyebrow: "Perguntas comuns",
      faqTitle: "FAQ aviso de bateria fraca Mac",
      miniFaq: [
        ["Substitui o aviso do macOS?", "Não. Ele adiciona uma contagem mais clara na barra de menus."],
        ["Posso mudar quando o aviso começa?", "BatteryCountdown permite escolher o início da contagem de 1% a 20%."],
        ["Funciona carregando?", "Sim. Durante a carga, pode mostrar o tempo até carga completa."]
      ],
      seeAll: "Ver todas as respostas",
      guideLink: "Ler guia da porcentagem de bateria",
      finalEyebrow: "BatteryCountdown para Mac",
      finalTitle: "Antecipe o desligamento por bateria fraca.",
      finalBody: "Baixe BatteryCountdown e mantenha o aviso onde você vê: na barra de menus."
    },
    faq: {
      title: "FAQ aviso de bateria fraca Mac | BatteryCountdown",
      description: "FAQ sobre aviso de bateria fraca no Mac, mudar porcentagem, aviso de desligamento e BatteryCountdown.",
      ogDescription: "Respostas sobre avisos de bateria fraca, contagem para desligamento e BatteryCountdown.",
      eyebrow: "FAQ",
      h1: "FAQ aviso de bateria fraca Mac",
      lead: "BatteryCountdown ajuda usuários de Mac a ver quanto tempo resta antes que a bateria fraca possa causar um desligamento.",
      finalEyebrow: "Ainda em dúvida?",
      finalTitle: "Um aviso de bateria fraca mais claro no Mac.",
      finalBody: "BatteryCountdown mantém a contagem visível na barra de menus para você salvar e conectar o carregador a tempo.",
      qas: [
        ["Posso mudar o aviso de bateria fraca no Mac?", "O macOS não oferece uma configuração simples para escolher a porcentagem exata. BatteryCountdown adiciona sua própria contagem na barra de menus."],
        ["O que é um aviso de desligamento no Mac?", "É um aviso de que o Mac está perto de desligar porque a bateria está quase vazia."],
        ["BatteryCountdown mostra tempo até desligar?", "Sim. Ele estima o tempo restante antes que a bateria fraca possa desligar o Mac."],
        ["Posso escolher quando o aviso começa?", "Sim. Você pode escolher de 1% a 20%."],
        ["Ele substitui o ícone de bateria do macOS?", "Não. É um utilitário separado da barra de menus."],
        ["Usa muita CPU ou bateria?", "Foi feito para ser leve e usar poucos recursos em segundo plano."],
        ["Coleta dados?", "É um utilitário local para Mac, sem conta e sem rastreamento."],
        ["Mostra tempo até carga completa?", "Sim. Ao carregar, o menu pode mostrar o tempo restante até carga completa."],
        ["O que é Charger Run Mode?", "É um desbloqueio opcional de compra única para um aviso mais visível antes do desligamento."],
        ["Como contato o suporte?", "Envie e-mail para request@lyder.no para suporte, bugs, ideias ou ajuda com compras."]
      ]
    },
    support: {
      title: "Suporte BatteryCountdown | Contato",
      description: "Entre em contato com o suporte BatteryCountdown para bugs, sugestões, compras e perguntas sobre bateria fraca no Mac.",
      ogDescription: "Envie e-mail para request@lyder.no.",
      eyebrow: "Suporte",
      h1: "Precisa de ajuda com BatteryCountdown?",
      lead: "Envie e-mail para request@lyder.no. Use para bugs, sugestões, perguntas de compra ou ajuda com avisos de bateria fraca no Mac.",
      topics: [
        ["Bug", "Relatar bug", "Inclua modelo do Mac, versão do macOS, versão do BatteryCountdown e o que você esperava."],
        ["Ideia", "Pedir recurso", "Conte o que tornaria o aviso ou a contagem mais útil no seu uso diário do Mac."],
        ["IAP", "Compra ou restauração", "Se Charger Run Mode não desbloquear ou restaurar, envie a região do Apple ID usado na compra."]
      ],
      beforeEyebrow: "Antes de enviar",
      beforeTitle: "Detalhes úteis",
      beforeLead: "Os melhores e-mails incluem nível exato da bateria, se o Mac carregava, se a contagem apareceu e passos para reproduzir.",
      beforeBody: "BatteryCountdown é local e não usa contas. O suporte funciona melhor quando você descreve o que viu no Mac."
    },
    guide: {
      title: "Como alterar a porcentagem do aviso de bateria fraca no Mac",
      description: "Saiba se dá para alterar a porcentagem do aviso de bateria fraca no Mac e como BatteryCountdown adiciona uma contagem personalizada.",
      ogDescription: "macOS não tem ajuste simples para porcentagem do aviso, mas BatteryCountdown adiciona uma contagem personalizada.",
      eyebrow: "Guia de bateria Mac",
      h1: "Como alterar a porcentagem do aviso de bateria fraca no Mac",
      lead: "Resposta curta: o macOS não oferece para a maioria dos usuários uma configuração integrada para mudar a porcentagem exata do aviso de bateria fraca. BatteryCountdown resolve isso permitindo escolher quando uma contagem visível começa na barra de menus.",
      answerTitle: "Dá para alterar a porcentagem do aviso de bateria fraca no Mac?",
      answerParagraphs: [
        "Não diretamente por uma configuração normal do macOS. A Apple mostra avisos de bateria automaticamente, mas o macOS moderno não tem um controle simples para “avisar em 20%” ou “avisar em 5%”.",
        "Se o objetivo é ter um aviso mais cedo ou mais claro, BatteryCountdown foi feito para isso. Você escolhe a porcentagem de início e vê o tempo restante antes do possível desligamento."
      ],
      stepsTitle: "Como adicionar um aviso personalizado por porcentagem",
      steps: [
        "Baixe BatteryCountdown na Mac App Store.",
        "Abra BatteryCountdown e escolha a porcentagem em que a contagem deve começar.",
        "Mantenha a contagem visível na barra de menus ou deixe aparecer só quando a bateria estiver fraca.",
        "Quando o aviso começar, salve o trabalho e conecte o carregador."
      ],
      whyTitle: "Por que contagem regressiva é melhor que só porcentagem",
      whyParagraphs: [
        "Uma porcentagem sozinha pode ser difícil de interpretar. Cinco por cento pode durar diferente conforme saúde da bateria, carga, brilho e apps abertos.",
        "BatteryCountdown foca em tempo. Em vez de apenas dizer que a bateria está fraca, mostra se há tempo para terminar, salvar ou buscar o carregador."
      ],
      settingsTitle: "O que BatteryCountdown pode alterar",
      settings: [
        "A porcentagem em que a contagem começa, de 1% a 20%.",
        "Se o item da barra de menus fica sempre visível ou aparece só quando útil.",
        "Estilo crítico com contagem vermelha piscando nos minutos finais.",
        "Charger Run Mode opcional para um aviso mais visível."
      ],
      quickTitle: "Respostas rápidas",
      quick: [
        ["Posso definir o aviso nativo do macOS em 20%?", "Não com uma configuração normal do macOS. Use BatteryCountdown para um aviso personalizado mais cedo."],
        ["BatteryCountdown altera o aviso do sistema Apple?", "Não. Ele adiciona sua própria contagem na barra de menus sem modificar arquivos do sistema."],
        ["Funciona no MacBook?", "Sim. BatteryCountdown foi feito para notebooks Mac com macOS 13.0 ou posterior."]
      ],
      finalEyebrow: "Aviso de bateria fraca para Mac",
      finalTitle: "Escolha quando a contagem começa.",
      finalBody: "Use BatteryCountdown para receber um aviso mais claro antes que a bateria fraca desligue seu Mac."
    }
  },
  ru: {
    nav: { guide: "Гид", faq: "FAQ", support: "Поддержка", appStore: "Mac App Store" },
    footer: { language: "Язык", email: SUPPORT_EMAIL },
    cta: { download: "Скачать в Mac App Store", readFaq: "Читать FAQ", email: "Написать в поддержку", readGuide: "Читать гид" },
    home: {
      title: "Предупреждение о низком заряде Mac | BatteryCountdown",
      description: "BatteryCountdown показывает в строке меню, сколько времени осталось до возможного выключения Mac из-за низкого заряда.",
      ogDescription: "Смотрите прямо в строке меню, сколько времени осталось до выключения Mac из-за низкого заряда.",
      eyebrow: "Утилита для строки меню Mac",
      h1: ["Предупреждение", "о выключении", "Mac"],
      hero: "BatteryCountdown показывает прямо в строке меню, сколько времени осталось до возможного выключения Mac из-за низкого заряда.",
      popoverTitle: "BatteryCountdown",
      popoverSubtitle: "14 минут до выключения из-за низкого заряда",
      popoverText: "Идет зарядка? Меню также может показывать время до полного заряда.",
      answerEyebrow: "Короткий ответ",
      answerTitle: "Можно ли изменить предупреждение о низком заряде на Mac?",
      answer: "macOS не дает большинству пользователей простой настройки точного процента предупреждения о низком заряде. BatteryCountdown решает практическую задачу: вы выбираете, когда начинается обратный отсчет, и видите время до выключения в строке меню.",
      featuresEyebrow: "Для момента, когда это важно",
      featuresTitle: "Предупреждение, на которое можно успеть отреагировать",
      features: [
        ["01", "Начать до критического уровня", "Выберите уровень батареи для запуска отсчета от 1% до 20%."],
        ["02", "Видеть время, а не только процент", "BatteryCountdown превращает низкий заряд в живую оценку оставшегося времени."],
        ["03", "Сохранить работу вовремя", "Увидьте предупреждение, сохраните работу и подключите зарядку до внезапного выключения."]
      ],
      privateEyebrow: "Легкое и приватное",
      privateTitle: "Небольшая утилита для Mac, а не еще одна панель",
      privateBody: "BatteryCountdown — локальное приложение для строки меню macOS. Не требует аккаунта, не отслеживает вас и рассчитано на минимальную работу в фоне.",
      privateLink: "Связаться с поддержкой",
      principles: [
        ["Сначала строка меню:", "не занимает Dock и появляется, когда время батареи важно."],
        ["Свой триггер:", "запускайте предупреждение на выбранном проценте батареи."],
        ["Оценка зарядки:", "во время зарядки показывается время до полного заряда."]
      ],
      chargerEyebrow: "Опционально",
      chargerTitle: "Charger Run Mode",
      chargerBody: "Charger Run Mode — опциональная покупка один раз для более заметного предупреждения о выключении при низком заряде.",
      chargerCta: "Получить BatteryCountdown",
      faqEyebrow: "Частые вопросы",
      faqTitle: "FAQ о низком заряде Mac",
      miniFaq: [
        ["Заменяет ли BatteryCountdown предупреждение macOS?", "Нет. Он добавляет более понятный обратный отсчет в строке меню."],
        ["Можно ли изменить момент предупреждения?", "BatteryCountdown позволяет выбрать запуск отсчета от 1% до 20%."],
        ["Работает ли при зарядке?", "Да. При зарядке меню может показать время до полного заряда."]
      ],
      seeAll: "Смотреть все ответы",
      guideLink: "Читать гид по проценту батареи",
      finalEyebrow: "BatteryCountdown для Mac",
      finalTitle: "Будьте готовы до выключения из-за батареи.",
      finalBody: "Скачайте BatteryCountdown и держите предупреждение там, где его видно: в строке меню."
    },
    faq: {
      title: "FAQ: низкий заряд Mac | BatteryCountdown",
      description: "FAQ о предупреждениях низкого заряда Mac, изменении процента, предупреждении о выключении и BatteryCountdown.",
      ogDescription: "Ответы о предупреждениях низкого заряда Mac и BatteryCountdown.",
      eyebrow: "FAQ",
      h1: "FAQ о предупреждении низкого заряда Mac",
      lead: "BatteryCountdown помогает пользователям Mac видеть, сколько времени осталось до возможного выключения из-за низкого заряда.",
      finalEyebrow: "Еще думаете?",
      finalTitle: "Более понятное предупреждение о низком заряде на Mac.",
      finalBody: "BatteryCountdown держит обратный отсчет в строке меню, чтобы вы успели сохранить работу и подключить зарядку.",
      qas: [
        ["Можно ли изменить предупреждение о низком заряде на Mac?", "В macOS нет простой встроенной настройки точного процента предупреждения. BatteryCountdown добавляет собственный обратный отсчет в строке меню."],
        ["Что такое предупреждение о выключении Mac?", "Это предупреждение о том, что Mac скоро может выключиться, потому что батарея почти разряжена."],
        ["Показывает ли BatteryCountdown время до выключения?", "Да. Он оценивает оставшееся время до возможного выключения из-за низкого заряда."],
        ["Можно ли выбрать, когда начинается предупреждение?", "Да. Можно выбрать от 1% до 20%."],
        ["Заменяет ли он значок батареи macOS?", "Нет. Это отдельная утилита строки меню."],
        ["Много ли CPU или батареи использует приложение?", "Оно спроектировано легким и с минимальным фоновым использованием."],
        ["Собирает ли BatteryCountdown данные?", "Это локальная утилита для Mac без аккаунта и без трекинга."],
        ["Может ли показывать время до полной зарядки?", "Да. При зарядке меню может показать оставшееся время до полного заряда."],
        ["Что такое Charger Run Mode?", "Опциональная покупка один раз для более заметного предупреждения перед выключением."],
        ["Как связаться с поддержкой?", "Напишите на request@lyder.no для поддержки, багов, идей или помощи с покупками."]
      ]
    },
    support: {
      title: "Поддержка BatteryCountdown | Контакт",
      description: "Свяжитесь с поддержкой BatteryCountdown по вопросам багов, функций, покупок и предупреждений о низком заряде Mac.",
      ogDescription: "Напишите в поддержку BatteryCountdown: request@lyder.no.",
      eyebrow: "Поддержка",
      h1: "Нужна помощь с BatteryCountdown?",
      lead: "Напишите на request@lyder.no. Используйте этот адрес для багов, идей, вопросов покупки или поведения предупреждения о низком заряде на Mac.",
      topics: [
        ["Bug", "Сообщить о баге", "Укажите модель Mac, версию macOS, версию BatteryCountdown и ожидаемое поведение."],
        ["Idea", "Предложить функцию", "Расскажите, что сделало бы предупреждение или отсчет полезнее в вашей работе на Mac."],
        ["IAP", "Покупка или восстановление", "Если Charger Run Mode не открывается или не восстанавливается, напишите регион Apple ID, использованный при покупке."]
      ],
      beforeEyebrow: "Перед письмом",
      beforeTitle: "Полезные детали",
      beforeLead: "Самые полезные письма включают точный уровень батареи, была ли зарядка, появился ли отсчет и шаги воспроизведения.",
      beforeBody: "BatteryCountdown — локальная утилита без аккаунтов. Поддержке проще помочь, если вы опишете, что видели на Mac."
    },
    guide: {
      title: "Как изменить процент предупреждения о низком заряде на Mac",
      description: "Узнайте, можно ли изменить процент предупреждения о низком заряде на Mac и как BatteryCountdown добавляет свой отсчет.",
      ogDescription: "macOS не дает простой настройки процента предупреждения, но BatteryCountdown добавляет собственный отсчет.",
      eyebrow: "Гид по батарее Mac",
      h1: "Как изменить процент предупреждения о низком заряде на Mac",
      lead: "Короткий ответ: macOS не дает большинству пользователей простой встроенной настройки точного процента предупреждения о низком заряде. BatteryCountdown позволяет выбрать процент, на котором начинается видимый отсчет в строке меню.",
      answerTitle: "Можно ли изменить процент предупреждения о низком заряде Mac?",
      answerParagraphs: [
        "Не напрямую через обычную настройку macOS. Apple показывает предупреждения автоматически, но в современной macOS нет простого ползунка “предупредить на 20%” или “предупредить на 5%”.",
        "Если вам нужно более раннее или заметное предупреждение, BatteryCountdown сделан именно для этого. Вы выбираете процент запуска и видите время до возможного выключения."
      ],
      stepsTitle: "Как добавить свое предупреждение по проценту батареи",
      steps: [
        "Скачайте BatteryCountdown из Mac App Store.",
        "Откройте BatteryCountdown и выберите процент батареи, с которого начнется отсчет.",
        "Оставьте отсчет в строке меню видимым или показывайте его только при низком заряде.",
        "Когда предупреждение начнется, сохраните работу и подключите зарядку."
      ],
      whyTitle: "Почему отсчет лучше, чем просто процент",
      whyParagraphs: [
        "Один процент трудно оценить. 5% могут означать разное время в зависимости от состояния батареи, нагрузки, яркости и приложений.",
        "BatteryCountdown фокусируется на времени: он показывает, есть ли у вас время закончить, сохранить или найти зарядку."
      ],
      settingsTitle: "Что может изменить BatteryCountdown",
      settings: [
        "Процент батареи, с которого начинается отсчет: от 1% до 20%.",
        "Показывать элемент строки меню всегда или только когда он полезен.",
        "Критический стиль с красным мигающим отсчетом в последние минуты.",
        "Опциональный Charger Run Mode для более заметного предупреждения."
      ],
      quickTitle: "Быстрые ответы",
      quick: [
        ["Можно ли поставить встроенное предупреждение macOS на 20%?", "Не обычной настройкой macOS. Используйте BatteryCountdown для собственного раннего предупреждения."],
        ["Меняет ли BatteryCountdown системное предупреждение Apple?", "Нет. Он добавляет свой отсчет в строке меню без изменения системных файлов."],
        ["Работает ли на MacBook?", "Да. BatteryCountdown сделан для ноутбуков Mac с macOS 13.0 или новее."]
      ],
      finalEyebrow: "Предупреждение низкого заряда Mac",
      finalTitle: "Выберите, когда начинается отсчет.",
      finalBody: "Используйте BatteryCountdown, чтобы получить более понятное предупреждение до выключения Mac из-за низкого заряда."
    }
  },
  "zh-Hans": {
    nav: { guide: "指南", faq: "FAQ", support: "支持", appStore: "Mac App Store" },
    footer: { language: "语言", email: SUPPORT_EMAIL },
    cta: { download: "在 Mac App Store 下载", readFaq: "阅读 FAQ", email: "发送支持邮件", readGuide: "阅读指南" },
    home: {
      title: "Mac 低电量警告 | BatteryCountdown",
      description: "BatteryCountdown 在菜单栏显示 Mac 因低电量可能关机前还剩多少时间。",
      ogDescription: "在菜单栏直接查看 Mac 因低电量关机前的剩余时间。",
      eyebrow: "Mac 菜单栏工具",
      h1: ["Mac 低电量", "关机", "倒计时警告"],
      hero: "BatteryCountdown 在菜单栏显示 Mac 因低电量可能关机前还剩多少时间。",
      popoverTitle: "BatteryCountdown",
      popoverSubtitle: "低电量关机前还剩 14 分钟",
      popoverText: "正在充电？下拉菜单也可以显示充满还需多久。",
      answerEyebrow: "先给答案",
      answerTitle: "Mac 的低电量警告可以修改吗？",
      answer: "macOS 对大多数用户并没有提供一个简单设置来修改低电量警告的准确百分比。BatteryCountdown 提供实用替代方案：你可以选择倒计时开始的电量百分比，并在菜单栏看到关机前剩余时间。",
      featuresEyebrow: "为关键时刻而设计",
      featuresTitle: "一个真正能让你行动的警告",
      features: [
        ["01", "在危险前开始", "选择倒计时开始的电量，从 1% 到 20%。"],
        ["02", "看时间，而不只是百分比", "BatteryCountdown 把低电量变成实时剩余时间估算。"],
        ["03", "及时保存工作", "看到警告，保存工作，在突然关机前接上充电器。"]
      ],
      privateEyebrow: "轻量且注重隐私",
      privateTitle: "一个小型 Mac 工具，不是另一个仪表盘",
      privateBody: "BatteryCountdown 是本地运行的 macOS 菜单栏应用。不需要账号，不跟踪你，并尽量减少后台资源占用。",
      privateLink: "联系支持",
      principles: [
        ["菜单栏优先：", "不占用 Dock，在电池时间重要时出现。"],
        ["自定义触发：", "按你偏好的电量百分比开始低电量倒计时。"],
        ["充电估算：", "充电时显示距离充满还需多久。"]
      ],
      chargerEyebrow: "可选功能",
      chargerTitle: "Charger Run Mode",
      chargerBody: "Charger Run Mode 是一次性解锁的可选功能，让低电量关机警告更加醒目。",
      chargerCta: "获取 BatteryCountdown",
      faqEyebrow: "常见问题",
      faqTitle: "Mac 低电量警告 FAQ",
      miniFaq: [
        ["BatteryCountdown 会替代 macOS 警告吗？", "不会。它会在菜单栏添加更清晰的倒计时。"],
        ["我可以更改警告时间吗？", "BatteryCountdown 可让你选择 1% 到 20% 之间的倒计时开始电量。"],
        ["充电时可用吗？", "可以。充电时下拉菜单可以显示充满还需多久。"]
      ],
      seeAll: "查看所有答案",
      guideLink: "阅读低电量百分比指南",
      finalEyebrow: "Mac 版 BatteryCountdown",
      finalTitle: "提前应对低电量关机。",
      finalBody: "下载 BatteryCountdown，把警告放在你能看到的菜单栏。"
    },
    faq: {
      title: "Mac 低电量警告 FAQ | BatteryCountdown",
      description: "关于 Mac 低电量警告、修改警告百分比、关机警告和 BatteryCountdown 的常见问题。",
      ogDescription: "Mac 低电量警告和 BatteryCountdown 的常见问题解答。",
      eyebrow: "FAQ",
      h1: "Mac 低电量警告 FAQ",
      lead: "BatteryCountdown 帮助 Mac 用户看到低电量可能导致关机前的剩余时间。这里回答警告、百分比、隐私和支持相关问题。",
      finalEyebrow: "还在考虑？",
      finalTitle: "让 Mac 低电量警告更清晰。",
      finalBody: "BatteryCountdown 将关机倒计时显示在菜单栏，让你及时保存并充电。",
      qas: [
        ["我可以修改 Mac 低电量警告吗？", "macOS 没有提供简单的内置设置来选择准确警告百分比。BatteryCountdown 会添加自己的菜单栏倒计时。"],
        ["Mac 关机警告是什么？", "当电池几乎耗尽、Mac 可能即将关机时的提醒。BatteryCountdown 将它变成可见倒计时。"],
        ["BatteryCountdown 会显示关机前剩余时间吗？", "会。它会估算低电量导致 Mac 关机前的剩余时间并显示在菜单栏。"],
        ["我可以选择 BatteryCountdown 什么时候开始吗？", "可以。你可以选择 1% 到 20%。"],
        ["它会替代 macOS 电池图标吗？", "不会。它是独立菜单栏工具，可与 macOS 电池图标一起使用。"],
        ["会占用很多 CPU 或电量吗？", "它设计为轻量，并尽量减少后台资源占用。"],
        ["BatteryCountdown 会收集数据吗？", "它是本地 Mac 工具，不需要账号，并且没有跟踪设计。"],
        ["能显示充满还需多久吗？", "能。Mac 充电时，下拉菜单可以显示距离充满的剩余时间。"],
        ["Charger Run Mode 是什么？", "一个一次性解锁的可选功能，在低电量关机前提供更醒目的警告。"],
        ["如何联系支持？", "请发送邮件到 request@lyder.no 获取支持、报告 bug、提出功能建议或购买帮助。"]
      ]
    },
    support: {
      title: "BatteryCountdown 支持 | 联系",
      description: "联系 BatteryCountdown 支持，获取 bug、功能建议、购买帮助和 Mac 低电量警告相关支持。",
      ogDescription: "发送邮件到 request@lyder.no 联系 BatteryCountdown 支持。",
      eyebrow: "支持",
      h1: "需要 BatteryCountdown 帮助吗？",
      lead: "请发送邮件到 request@lyder.no。可用于 bug、功能建议、购买问题或 Mac 低电量警告行为相关帮助。",
      topics: [
        ["Bug", "报告 bug", "请包含 Mac 型号、macOS 版本、BatteryCountdown 版本以及你预期发生的情况。"],
        ["Idea", "请求功能", "告诉我们怎样能让低电量警告或倒计时更适合你的 Mac 使用流程。"],
        ["IAP", "购买或恢复帮助", "如果 Charger Run Mode 无法解锁或恢复，请在邮件中写明购买使用的 Apple ID 地区。"]
      ],
      beforeEyebrow: "发送前",
      beforeTitle: "建议包含的信息",
      beforeLead: "最有效的支持邮件会包含准确电量、Mac 是否正在充电、倒计时是否出现，以及复现问题的步骤。",
      beforeBody: "BatteryCountdown 是本地工具，不使用账号。请描述你在 Mac 上看到的情况，这样更容易支持。"
    },
    guide: {
      title: "如何更改 Mac 低电量警告百分比",
      description: "了解 Mac 是否可以更改低电量警告百分比，以及 BatteryCountdown 如何添加自定义低电量倒计时。",
      ogDescription: "macOS 没有简单的低电量警告百分比设置，但 BatteryCountdown 可以添加自定义菜单栏倒计时。",
      eyebrow: "Mac 电池指南",
      h1: "如何更改 Mac 低电量警告百分比",
      lead: "简短答案：macOS 对大多数用户没有提供简单内置设置来更改低电量警告的准确百分比。BatteryCountdown 让你选择菜单栏倒计时开始的电量百分比。",
      answerTitle: "Mac 低电量警告百分比可以更改吗？",
      answerParagraphs: [
        "不能通过普通 macOS 设置直接更改。Apple 会自动显示电池警告，但现代 macOS 没有“20% 时提醒”或“5% 时提醒”这样的简单滑块。",
        "如果你真正需要的是更早或更清晰的警告，BatteryCountdown 就是为此设计的。你选择开始百分比，并在菜单栏查看可能关机前的剩余时间。"
      ],
      stepsTitle: "如何添加自定义低电量百分比警告",
      steps: [
        "从 Mac App Store 下载 BatteryCountdown。",
        "打开 BatteryCountdown，选择倒计时开始的电量百分比。",
        "让菜单栏倒计时保持可见，或只在低电量时出现。",
        "警告开始后，保存工作并连接充电器。"
      ],
      whyTitle: "为什么倒计时比另一个百分比更有用",
      whyParagraphs: [
        "只有百分比很难判断。5% 能撑多久取决于电池健康、当前负载、屏幕亮度和打开的应用。",
        "BatteryCountdown 关注的是时间。它不仅告诉你电量低，还告诉你是否还有时间完成、保存或去拿充电器。"
      ],
      settingsTitle: "BatteryCountdown 可以更改什么",
      settings: [
        "倒计时开始的电量百分比：1% 到 20%。",
        "菜单栏项目始终显示，或仅在有用时显示。",
        "最后几分钟红色闪烁的关键倒计时。",
        "可选 Charger Run Mode，提供更醒目的关机警告。"
      ],
      quickTitle: "快速回答",
      quick: [
        ["可以把 macOS 内置警告设置为 20% 吗？", "不能通过普通 macOS 设置做到。想要更早的自定义警告，可以使用 BatteryCountdown。"],
        ["BatteryCountdown 会修改 Apple 系统警告吗？", "不会。它不会修改系统文件，只会添加自己的菜单栏倒计时。"],
        ["它适用于 MacBook 吗？", "适用。BatteryCountdown 面向运行 macOS 13.0 或更新版本的 Mac 笔记本。"]
      ],
      finalEyebrow: "Mac 低电量警告",
      finalTitle: "选择倒计时何时开始。",
      finalBody: "使用 BatteryCountdown，在低电量让 Mac 关机前获得更清晰的提醒。"
    }
  }
};

t["pt-br"] = t["pt-BR"];
t["zh-hans"] = t["zh-Hans"];

const demoContent = {
  en: {
    navLabel: "Demo",
    title: "Charger Run Mode Demo | BatteryCountdown",
    description: "Watch a quick BatteryCountdown Charger Run Mode demo for Mac and see how the low battery shutdown warning appears.",
    eyebrow: "Charger Run Mode demo",
    h1: "See Charger Run Mode in action",
    lead: "This short, web-optimized demo shows how Charger Run Mode makes the low battery shutdown warning harder to miss when your Mac is running out of time.",
    watchCta: "Watch Charger Run Mode demo",
    appCta: "Download BatteryCountdown",
    detailsTitle: "What the demo shows",
    details: [
      "A visible Charger Run Mode warning when low battery is close to shutdown.",
      "The BatteryCountdown menu bar timer staying easy to spot.",
      "A clearer moment to save work and plug in before the Mac powers off."
    ],
    finalTitle: "Want the same warning on your Mac?",
    finalBody: "Install BatteryCountdown from the Mac App Store and use Charger Run Mode when a quiet menu bar timer is not enough.",
    backHome: "Back to home"
  },
  de: {
    navLabel: "Demo",
    title: "Charger Run Mode Demo | BatteryCountdown",
    description: "Sieh dir eine kurze BatteryCountdown Charger Run Mode Demo fuer Mac an und erkenne die Warnung vor dem Akku-Shutdown.",
    eyebrow: "Charger Run Mode Demo",
    h1: "Charger Run Mode in Aktion",
    lead: "Diese kurze, weboptimierte Demo zeigt, wie Charger Run Mode die Warnung vor dem Herunterfahren bei niedrigem Akku deutlich sichtbarer macht.",
    watchCta: "Charger Run Mode Demo ansehen",
    appCta: "BatteryCountdown laden",
    detailsTitle: "Was die Demo zeigt",
    details: [
      "Eine sichtbare Charger Run Mode Warnung kurz vor dem Akku-Shutdown.",
      "Der BatteryCountdown Timer bleibt in der Menueleiste leicht erkennbar.",
      "Ein klarer Moment, um Arbeit zu sichern und den Mac anzuschliessen."
    ],
    finalTitle: "Willst du dieselbe Warnung auf deinem Mac?",
    finalBody: "Installiere BatteryCountdown aus dem Mac App Store und nutze Charger Run Mode, wenn ein ruhiger Menueleisten-Timer nicht reicht.",
    backHome: "Zur Startseite"
  },
  es: {
    navLabel: "Demo",
    title: "Demo de Charger Run Mode | BatteryCountdown",
    description: "Mira una demo rápida de Charger Run Mode de BatteryCountdown para Mac y cómo aparece el aviso de apagado por batería baja.",
    eyebrow: "Demo de Charger Run Mode",
    h1: "Charger Run Mode en acción",
    lead: "Esta demo breve y optimizada para web muestra cómo Charger Run Mode hace que el aviso de apagado por batería baja sea más difícil de ignorar.",
    watchCta: "Ver demo de Charger Run Mode",
    appCta: "Descargar BatteryCountdown",
    detailsTitle: "Qué muestra la demo",
    details: [
      "Un aviso visible de Charger Run Mode cuando la batería baja se acerca al apagado.",
      "El temporizador de BatteryCountdown visible en la barra de menús.",
      "Un momento claro para guardar el trabajo y conectar el cargador."
    ],
    finalTitle: "¿Quieres el mismo aviso en tu Mac?",
    finalBody: "Instala BatteryCountdown desde el Mac App Store y usa Charger Run Mode cuando un temporizador discreto no sea suficiente.",
    backHome: "Volver al inicio"
  },
  fr: {
    navLabel: "Démo",
    title: "Démo Charger Run Mode | BatteryCountdown",
    description: "Regardez une courte démo de Charger Run Mode pour Mac et voyez l’alerte d’extinction batterie faible.",
    eyebrow: "Démo Charger Run Mode",
    h1: "Charger Run Mode en action",
    lead: "Cette courte démo optimisée pour le web montre comment Charger Run Mode rend l’alerte d’extinction batterie faible beaucoup plus visible.",
    watchCta: "Voir la démo Charger Run Mode",
    appCta: "Télécharger BatteryCountdown",
    detailsTitle: "Ce que montre la démo",
    details: [
      "Une alerte Charger Run Mode visible quand le Mac approche de l’extinction.",
      "Le minuteur BatteryCountdown reste facile à repérer dans la barre des menus.",
      "Un moment clair pour enregistrer le travail et brancher le chargeur."
    ],
    finalTitle: "Vous voulez la même alerte sur votre Mac ?",
    finalBody: "Installez BatteryCountdown depuis le Mac App Store et utilisez Charger Run Mode quand un minuteur discret ne suffit pas.",
    backHome: "Retour a l'accueil"
  },
  hi: {
    navLabel: "Demo",
    title: "Charger Run Mode Demo | BatteryCountdown",
    description: "Mac के लिए BatteryCountdown Charger Run Mode demo देखें और low battery shutdown warning कैसे दिखती है समझें.",
    eyebrow: "Charger Run Mode demo",
    h1: "Charger Run Mode को action में देखें",
    lead: "यह छोटी web-optimized demo दिखाती है कि Charger Run Mode low battery shutdown warning को ज्यादा visible कैसे बनाता है.",
    watchCta: "Charger Run Mode demo देखें",
    appCta: "BatteryCountdown डाउनलोड करें",
    detailsTitle: "Demo में क्या दिखता है",
    details: [
      "Shutdown के करीब low battery पर visible Charger Run Mode warning.",
      "Menu bar में BatteryCountdown timer साफ दिखता है.",
      "काम save करने और charger लगाने के लिए clear moment."
    ],
    finalTitle: "अपने Mac पर यही warning चाहिए?",
    finalBody: "Mac App Store से BatteryCountdown install करें और जब quiet menu bar timer काफी न हो तब Charger Run Mode use करें.",
    backHome: "Home पर वापस"
  },
  it: {
    navLabel: "Demo",
    title: "Demo Charger Run Mode | BatteryCountdown",
    description: "Guarda una breve demo di Charger Run Mode per Mac e vedi l’avviso di spegnimento per batteria scarica.",
    eyebrow: "Demo Charger Run Mode",
    h1: "Charger Run Mode in azione",
    lead: "Questa breve demo ottimizzata per il web mostra come Charger Run Mode rende più evidente l’avviso di spegnimento per batteria scarica.",
    watchCta: "Guarda la demo Charger Run Mode",
    appCta: "Scarica BatteryCountdown",
    detailsTitle: "Cosa mostra la demo",
    details: [
      "Un avviso Charger Run Mode visibile quando il Mac è vicino allo spegnimento.",
      "Il timer BatteryCountdown resta facile da notare nella barra dei menu.",
      "Un momento chiaro per salvare il lavoro e collegare il caricatore."
    ],
    finalTitle: "Vuoi lo stesso avviso sul tuo Mac?",
    finalBody: "Installa BatteryCountdown dal Mac App Store e usa Charger Run Mode quando un timer discreto non basta.",
    backHome: "Torna alla home"
  },
  ja: {
    navLabel: "デモ",
    title: "Charger Run Modeデモ | BatteryCountdown",
    description: "Mac向けBatteryCountdownのCharger Run Modeデモを見て、低バッテリー終了警告の表示を確認できます。",
    eyebrow: "Charger Run Modeデモ",
    h1: "Charger Run Modeの動作を見る",
    lead: "この短いWeb最適化デモでは、Charger Run Modeが低バッテリー終了警告をより見逃しにくくする様子を確認できます。",
    watchCta: "Charger Run Modeデモを見る",
    appCta: "BatteryCountdownをダウンロード",
    detailsTitle: "デモで分かること",
    details: [
      "終了が近い低バッテリー時の目立つCharger Run Mode警告。",
      "メニューバーのBatteryCountdownタイマーが見つけやすいこと。",
      "作業を保存して充電器を接続するタイミング。"
    ],
    finalTitle: "同じ警告をMacで使いますか？",
    finalBody: "Mac App StoreからBatteryCountdownをインストールし、静かなメニューバータイマーだけでは足りない時にCharger Run Modeを使えます。",
    backHome: "ホームに戻る"
  },
  ko: {
    navLabel: "데모",
    title: "Charger Run Mode 데모 | BatteryCountdown",
    description: "Mac용 BatteryCountdown Charger Run Mode 데모를 보고 배터리 부족 종료 경고가 어떻게 나타나는지 확인하세요.",
    eyebrow: "Charger Run Mode 데모",
    h1: "Charger Run Mode 작동 보기",
    lead: "이 짧은 웹 최적화 데모는 Charger Run Mode가 배터리 부족 종료 경고를 더 잘 보이게 만드는 모습을 보여줍니다.",
    watchCta: "Charger Run Mode 데모 보기",
    appCta: "BatteryCountdown 다운로드",
    detailsTitle: "데모에서 보이는 것",
    details: [
      "배터리 부족 종료가 가까울 때 나타나는 눈에 띄는 Charger Run Mode 경고.",
      "메뉴 막대의 BatteryCountdown 타이머가 쉽게 보입니다.",
      "작업을 저장하고 충전기를 연결할 명확한 순간."
    ],
    finalTitle: "Mac에서 같은 경고를 쓰고 싶나요?",
    finalBody: "Mac App Store에서 BatteryCountdown을 설치하고 조용한 메뉴 막대 타이머만으로 부족할 때 Charger Run Mode를 사용하세요.",
    backHome: "홈으로 돌아가기"
  },
  nb: {
    navLabel: "Demo",
    title: "Charger Run Mode demo | BatteryCountdown",
    description: "Se en kort BatteryCountdown Charger Run Mode demo for Mac og hvordan varselet ved lavt batteri ser ut.",
    eyebrow: "Charger Run Mode demo",
    h1: "Se Charger Run Mode i bruk",
    lead: "Denne korte, weboptimaliserte demoen viser hvordan Charger Run Mode gjør varselet før lavt batteri-avslutning vanskeligere å overse.",
    watchCta: "Se Charger Run Mode-demo",
    appCta: "Last ned BatteryCountdown",
    detailsTitle: "Dette viser demoen",
    details: [
      "Et tydelig Charger Run Mode-varsel når Macen nærmer seg avslutning.",
      "BatteryCountdown-timeren er lett å se i menylinjen.",
      "Et klart tidspunkt for å lagre arbeidet og plugge inn laderen."
    ],
    finalTitle: "Vil du ha samme varsel på Macen?",
    finalBody: "Installer BatteryCountdown fra Mac App Store og bruk Charger Run Mode når en rolig menylinje-timer ikke er nok.",
    backHome: "Til forsiden"
  },
  "pt-BR": {
    navLabel: "Demo",
    title: "Demo do Charger Run Mode | BatteryCountdown",
    description: "Veja uma demo rápida do Charger Run Mode do BatteryCountdown para Mac e como aparece o aviso de desligamento por bateria fraca.",
    eyebrow: "Demo do Charger Run Mode",
    h1: "Veja o Charger Run Mode em ação",
    lead: "Esta demo curta e otimizada para web mostra como Charger Run Mode deixa o aviso de desligamento por bateria fraca mais difícil de ignorar.",
    watchCta: "Ver demo do Charger Run Mode",
    appCta: "Baixar BatteryCountdown",
    detailsTitle: "O que a demo mostra",
    details: [
      "Um aviso visível de Charger Run Mode quando o Mac está perto de desligar.",
      "O timer do BatteryCountdown fica fácil de notar na barra de menus.",
      "Um momento claro para salvar o trabalho e conectar o carregador."
    ],
    finalTitle: "Quer o mesmo aviso no seu Mac?",
    finalBody: "Instale BatteryCountdown pela Mac App Store e use Charger Run Mode quando um timer discreto não for suficiente.",
    backHome: "Voltar ao inicio"
  },
  ru: {
    navLabel: "Демо",
    title: "Демо Charger Run Mode | BatteryCountdown",
    description: "Посмотрите короткое демо Charger Run Mode для Mac и предупреждение о выключении из-за низкого заряда.",
    eyebrow: "Демо Charger Run Mode",
    h1: "Charger Run Mode в действии",
    lead: "Это короткое веб-оптимизированное демо показывает, как Charger Run Mode делает предупреждение о выключении из-за низкого заряда заметнее.",
    watchCta: "Смотреть демо Charger Run Mode",
    appCta: "Скачать BatteryCountdown",
    detailsTitle: "Что показывает демо",
    details: [
      "Заметное предупреждение Charger Run Mode перед выключением Mac.",
      "Таймер BatteryCountdown легко увидеть в строке меню.",
      "Понятный момент, чтобы сохранить работу и подключить зарядку."
    ],
    finalTitle: "Хотите такое предупреждение на Mac?",
    finalBody: "Установите BatteryCountdown из Mac App Store и используйте Charger Run Mode, когда тихого таймера в строке меню недостаточно.",
    backHome: "На главную"
  },
  "zh-Hans": {
    navLabel: "演示",
    title: "Charger Run Mode 演示 | BatteryCountdown",
    description: "观看 Mac 版 BatteryCountdown Charger Run Mode 快速演示，了解低电量关机警告如何出现。",
    eyebrow: "Charger Run Mode 演示",
    h1: "查看 Charger Run Mode 的实际效果",
    lead: "这段经过网页优化的短演示展示 Charger Run Mode 如何让低电量关机警告更醒目。",
    watchCta: "观看 Charger Run Mode 演示",
    appCta: "下载 BatteryCountdown",
    detailsTitle: "演示内容",
    details: [
      "当 Mac 接近低电量关机时，出现醒目的 Charger Run Mode 警告。",
      "BatteryCountdown 菜单栏计时器保持易于发现。",
      "给你一个明确时刻来保存工作并连接充电器。"
    ],
    finalTitle: "想在 Mac 上使用同样的警告？",
    finalBody: "从 Mac App Store 安装 BatteryCountdown，在安静的菜单栏计时器不够醒目时使用 Charger Run Mode。",
    backHome: "返回首页"
  }
};

demoContent["pt-br"] = demoContent["pt-BR"];
demoContent["zh-hans"] = demoContent["zh-Hans"];

function demoCopy(locale) {
  return demoContent[locale.code] || demoContent[locale.prefix] || demoContent.en;
}

function h(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function abs(urlPath) {
  return `${SITE_URL}${urlPath === "/" ? "/" : urlPath}`;
}

function pagePath(locale, pageKey) {
  const root = locale.prefix ? `/${locale.prefix}` : "";
  if (pageKey === "home") return `${root || ""}/`;
  if (pageKey === "faq") return `${root}/faq/`;
  if (pageKey === "support") return `${root}/support/`;
  if (pageKey === "guide") return `${root}/guides/${locale.guideSlug}/`;
  if (pageKey === "demo") return `${root}/demo/charger-run-mode/`;
  throw new Error(`Unknown page key ${pageKey}`);
}

function outputPath(locale, pageKey) {
  const route = pagePath(locale, pageKey);
  return path.join(ROOT, route, "index.html");
}

function relAsset(assetPath) {
  return assetPath;
}

function pageTitle(localeContent, pageKey) {
  return localeContent[pageKey].title;
}

function pageDescription(localeContent, pageKey) {
  return localeContent[pageKey].description;
}

function alternateLinks(pageKey) {
  const links = locales.map((locale) => {
    return `<link rel="alternate" hreflang="${h(locale.hreflang)}" href="${h(abs(pagePath(locale, pageKey)))}">`;
  });
  links.push(`<link rel="alternate" hreflang="x-default" href="${h(abs(pagePath(localeByCode.en, pageKey)))}">`);
  return links.join("\n    ");
}

function nav(locale, pageKey) {
  const c = t[locale.code] || t[locale.prefix] || t.en;
  const link = (key, label, href) => {
    const cls = pageKey === key ? ` class="current"` : "";
    return `<a${cls} href="${h(href)}">${h(label)}</a>`;
  };
  return `<header class="site-header">
      <nav class="nav-shell" aria-label="Primary navigation">
        <a class="brand" href="${h(pagePath(locale, "home"))}" aria-label="BatteryCountdown home">
          <img src="/assets/app-icon.webp" alt="" width="34" height="34">
          <span>BatteryCountdown</span>
        </a>
        <div class="nav-links">
          ${link("guide", c.nav.guide, pagePath(locale, "guide"))}
          ${link("faq", c.nav.faq, pagePath(locale, "faq"))}
          ${link("support", c.nav.support, pagePath(locale, "support"))}
          <a class="nav-cta" href="${APP_STORE_URL}">${h(c.nav.appStore)}</a>
        </div>
      </nav>
    </header>`;
}

function footer(locale, pageKey) {
  const c = t[locale.code] || t[locale.prefix] || t.en;
  const languageLinks = locales.map((candidate) => {
    const current = candidate.code === locale.code ? ` class="current"` : "";
    return `<a${current} lang="${h(candidate.htmlLang)}" hreflang="${h(candidate.hreflang)}" href="${h(pagePath(candidate, pageKey))}">${h(candidate.native)}</a>`;
  }).join("\n            ");
  return `<footer class="site-footer">
      <div class="footer-shell">
        <div>
          <a class="brand footer-brand" href="${h(pagePath(locale, "home"))}">
            <img src="/assets/app-icon.webp" alt="" width="30" height="30">
            <span>BatteryCountdown</span>
          </a>
          <div class="language-switcher" aria-label="${h(c.footer.language)}">
            <span>${h(c.footer.language)}</span>
            <div class="language-links">
              ${languageLinks}
            </div>
          </div>
        </div>
        <div class="footer-links">
          <a href="${h(pagePath(locale, "demo"))}">${h(demoCopy(locale).navLabel)}</a>
          <a href="${h(pagePath(locale, "guide"))}">${h(c.nav.guide)}</a>
          <a href="${h(pagePath(locale, "faq"))}">${h(c.nav.faq)}</a>
          <a href="${h(pagePath(locale, "support"))}">${h(c.nav.support)}</a>
          <a href="${SUPPORT_MAILTO}">${h(c.footer.email)}</a>
        </div>
      </div>
    </footer>`;
}

function jsonLd(data) {
  return `<script type="application/ld+json">\n${JSON.stringify(data, null, 8)}\n    </script>`;
}

function layout(locale, pageKey, meta, body, graph) {
  const title = meta.title;
  const description = meta.description;
  const ogTitle = meta.ogTitle || title;
  const ogDescription = meta.ogDescription || description;
  return `<!doctype html>
<!-- Generated by scripts/generate-site.js. Do not edit generated HTML directly. -->
<html lang="${h(locale.htmlLang)}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${h(title)}</title>
    <meta name="description" content="${h(description)}">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="${h(abs(pagePath(locale, pageKey)))}">
    ${alternateLinks(pageKey)}
    <link rel="icon" href="/assets/favicon.png" type="image/png">
    <link rel="apple-touch-icon" href="/assets/app-icon.png">
    <meta property="og:type" content="${h(meta.ogType || "website")}">
    <meta property="og:site_name" content="BatteryCountdown">
    <meta property="og:title" content="${h(ogTitle)}">
    <meta property="og:description" content="${h(ogDescription)}">
    <meta property="og:url" content="${h(abs(pagePath(locale, pageKey)))}">
    <meta property="og:image" content="${h(abs("/assets/app-icon.png"))}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${h(ogTitle)}">
    <meta name="twitter:description" content="${h(ogDescription)}">
    <meta name="twitter:image" content="${h(abs("/assets/app-icon.png"))}">
    <link rel="stylesheet" href="/assets/styles.css">
    ${jsonLd({ "@context": "https://schema.org", "@graph": graph })}
  </head>
  <body>
    <a class="skip-link" href="#main">Skip to content</a>
    ${nav(locale, pageKey)}
    ${body}
    ${footer(locale, pageKey)}
  </body>
</html>
`;
}

function orgGraph(locale) {
  const c = t[locale.code] || t.en;
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    "name": "MrSounds AS",
    "url": `${SITE_URL}/`,
    "logo": `${SITE_URL}/assets/app-icon.png`,
    "email": SUPPORT_EMAIL,
    "sameAs": [APP_STORE_URL, "https://github.com/MrSounds/BatteryCountdown-website"]
  };
}

function websiteGraph(locale) {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    "name": APP_NAME,
    "url": `${SITE_URL}/`,
    "publisher": { "@id": `${SITE_URL}/#organization` },
    "inLanguage": locale.hreflang
  };
}

function appGraph(locale) {
  const c = t[locale.code] || t.en;
  return {
    "@type": "SoftwareApplication",
    "@id": `${SITE_URL}/#app`,
    "name": APP_NAME,
    "url": abs(pagePath(locale, "home")),
    "downloadUrl": APP_STORE_URL,
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "macOS 13.0 or later",
    "description": c.home.description,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "url": APP_STORE_URL
    },
    "featureList": [
      c.home.features[0][2],
      c.home.features[1][2],
      c.home.features[2][2]
    ],
    "publisher": { "@id": `${SITE_URL}/#organization` },
    "inLanguage": locale.hreflang
  };
}

function breadcrumbGraph(locale, pageKey, pageName) {
  const items = [
    { "@type": "ListItem", "position": 1, "name": APP_NAME, "item": abs(pagePath(locale, "home")) }
  ];
  if (pageKey !== "home") {
    items.push({ "@type": "ListItem", "position": 2, "name": pageName, "item": abs(pagePath(locale, pageKey)) });
  }
  return {
    "@type": "BreadcrumbList",
    "@id": `${abs(pagePath(locale, pageKey))}#breadcrumb`,
    "itemListElement": items
  };
}

function renderHome(locale) {
  const c = t[locale.code] || t.en;
  const page = c.home;
  const demo = demoCopy(locale);
  const body = `<main id="main">
      <section class="hero hero-home" aria-labelledby="hero-title">
        <div class="hero-shade"></div>
        <div class="hero-content">
          <p class="eyebrow">${h(page.eyebrow)}</p>
          <h1 id="hero-title" class="hero-title">
            ${page.h1.map((line) => `<span>${h(line)}</span>`).join("\n            ")}
          </h1>
          <p class="hero-copy">${h(page.hero)}</p>
          <div class="hero-actions" aria-label="Primary actions">
            <a class="button button-primary" href="${APP_STORE_URL}">${h(c.cta.download)}</a>
            <a class="button button-secondary" href="${h(pagePath(locale, "faq"))}">${h(c.cta.readFaq)}</a>
          </div>
        </div>
        <div class="menu-demo" aria-label="BatteryCountdown menu bar preview">
          <div class="mock-menubar">
            <span class="mock-apple" aria-label="Apple menu">&#63743;</span>
            <span class="mock-finder">Finder</span>
            <span class="mock-spacer" aria-hidden="true">&nbsp;</span>
            <span class="mock-countdown-anchor">
              <span class="mock-countdown-callout">BatteryCountdown</span>
              <span class="mock-countdown">02:43</span>
            </span>
            <span class="mock-status-icon" aria-label="BatteryCountdown menu bar icon">&nbsp;</span>
            <span class="mock-datetime">Sun 24 May 21:07</span>
          </div>
          <div class="mock-popover">
            <div class="mock-popover-head">
              <img src="/assets/app-icon.webp" alt="" width="44" height="44">
              <div>
                <strong>${h(page.popoverTitle)}</strong>
                <span>${h(page.popoverSubtitle)}</span>
              </div>
            </div>
            <div class="mock-progress" aria-hidden="true"><span style="width: 28%">&nbsp;</span></div>
            <p>${h(page.popoverText)}</p>
          </div>
        </div>
      </section>

      <section class="answer-band" aria-labelledby="answer-title">
        <div class="section-shell">
          <p class="eyebrow">${h(page.answerEyebrow)}</p>
          <h2 id="answer-title">${h(page.answerTitle)}</h2>
          <p class="lead">${h(page.answer)}</p>
        </div>
      </section>

      <section class="section-shell feature-grid" aria-labelledby="features-title">
        <div class="section-heading">
          <p class="eyebrow">${h(page.featuresEyebrow)}</p>
          <h2 id="features-title">${h(page.featuresTitle)}</h2>
        </div>
        ${page.features.map(([kicker, title, text]) => `<article class="feature-card">
          <span class="feature-icon">${h(kicker)}</span>
          <h3>${h(title)}</h3>
          <p>${h(text)}</p>
        </article>`).join("\n        ")}
      </section>

      <section class="section-shell split-section" aria-labelledby="private-title">
        <div>
          <p class="eyebrow">${h(page.privateEyebrow)}</p>
          <h2 id="private-title">${h(page.privateTitle)}</h2>
          <p>${h(page.privateBody)}</p>
          <a class="text-link" href="${h(pagePath(locale, "support"))}">${h(page.privateLink)}</a>
        </div>
        <div class="quiet-list" aria-label="BatteryCountdown design principles">
          ${page.principles.map(([strong, text]) => `<p><strong>${h(strong)}</strong> ${h(text)}</p>`).join("\n          ")}
        </div>
      </section>

      <section class="charger-band" aria-labelledby="charger-title">
        <div class="section-shell charger-layout">
          <div>
            <p class="eyebrow">${h(page.chargerEyebrow)}</p>
            <h2 id="charger-title">${h(page.chargerTitle)}</h2>
            <p>${h(page.chargerBody)}</p>
            <div class="charger-actions">
              <a class="button button-dark" href="${APP_STORE_URL}">${h(page.chargerCta)}</a>
              <a class="button button-light" href="${h(pagePath(locale, "demo"))}">${h(demo.watchCta)}</a>
            </div>
          </div>
          <img class="charger-image" src="/assets/charger.webp" alt="Charger Run Mode charger illustration" width="602" height="415">
        </div>
      </section>

      <section class="section-shell faq-preview" aria-labelledby="faq-preview-title">
        <div class="section-heading">
          <p class="eyebrow">${h(page.faqEyebrow)}</p>
          <h2 id="faq-preview-title">${h(page.faqTitle)}</h2>
        </div>
        <div class="faq-mini">
          ${page.miniFaq.map(([q, a]) => `<article>
            <h3>${h(q)}</h3>
            <p>${h(a)}</p>
          </article>`).join("\n          ")}
        </div>
        <div class="link-row">
          <a class="text-link" href="${h(pagePath(locale, "faq"))}">${h(page.seeAll)}</a>
          <a class="text-link" href="${h(pagePath(locale, "guide"))}">${h(page.guideLink)}</a>
        </div>
      </section>

      <section class="final-cta" aria-labelledby="final-title">
        <div class="section-shell">
          <p class="eyebrow">${h(page.finalEyebrow)}</p>
          <h2 id="final-title">${h(page.finalTitle)}</h2>
          <p>${h(page.finalBody)}</p>
          <a class="button button-primary" href="${APP_STORE_URL}">${h(c.cta.download)}</a>
        </div>
      </section>
    </main>`;

  const graph = [
    orgGraph(locale),
    websiteGraph(locale),
    appGraph(locale),
    {
      "@type": "WebPage",
      "@id": `${abs(pagePath(locale, "home"))}#webpage`,
      "url": abs(pagePath(locale, "home")),
      "name": page.title,
      "isPartOf": { "@id": `${SITE_URL}/#website` },
      "about": { "@id": `${SITE_URL}/#app` },
      "description": page.description,
      "inLanguage": locale.hreflang
    }
  ];
  return layout(locale, "home", { title: page.title, description: page.description, ogDescription: page.ogDescription }, body, graph);
}

function renderFaq(locale) {
  const c = t[locale.code] || t.en;
  const page = c.faq;
  const body = `<main id="main" class="subpage">
      <section class="page-hero" aria-labelledby="faq-title">
        <div class="section-shell narrow">
          <p class="eyebrow">${h(page.eyebrow)}</p>
          <h1 id="faq-title">${h(page.h1)}</h1>
          <p class="lead">${h(page.lead)}</p>
        </div>
      </section>
      <section class="section-shell faq-list" aria-label="BatteryCountdown questions and answers">
        ${page.qas.map(([q, a], index) => `<details${index === 0 ? " open" : ""}>
          <summary>${h(q)}</summary>
          <p>${a.includes(SUPPORT_EMAIL) ? h(a).replace(SUPPORT_EMAIL, `<a href="${SUPPORT_MAILTO}">${SUPPORT_EMAIL}</a>`) : h(a)}</p>
        </details>`).join("\n        ")}
      </section>
      <section class="final-cta" aria-labelledby="faq-final-title">
        <div class="section-shell">
          <p class="eyebrow">${h(page.finalEyebrow)}</p>
          <h2 id="faq-final-title">${h(page.finalTitle)}</h2>
          <p>${h(page.finalBody)}</p>
          <div class="hero-actions centered-actions">
            <a class="button button-primary" href="${APP_STORE_URL}">${h(c.cta.download)}</a>
            <a class="button button-secondary" href="${h(pagePath(locale, "guide"))}">${h(c.cta.readGuide)}</a>
          </div>
        </div>
      </section>
    </main>`;
  const graph = [
    {
      "@type": "FAQPage",
      "@id": `${abs(pagePath(locale, "faq"))}#faq`,
      "inLanguage": locale.hreflang,
      "mainEntity": page.qas.map(([q, a]) => ({
        "@type": "Question",
        "name": q,
        "acceptedAnswer": { "@type": "Answer", "text": a }
      }))
    },
    {
      "@type": "WebPage",
      "@id": `${abs(pagePath(locale, "faq"))}#webpage`,
      "url": abs(pagePath(locale, "faq")),
      "name": page.title,
      "description": page.description,
      "isPartOf": { "@id": `${SITE_URL}/#website` },
      "inLanguage": locale.hreflang
    },
    breadcrumbGraph(locale, "faq", page.h1)
  ];
  return layout(locale, "faq", { title: page.title, description: page.description, ogDescription: page.ogDescription }, body, graph);
}

function renderSupport(locale) {
  const c = t[locale.code] || t.en;
  const page = c.support;
  const body = `<main id="main" class="subpage">
      <section class="page-hero" aria-labelledby="support-title">
        <div class="section-shell narrow">
          <p class="eyebrow">${h(page.eyebrow)}</p>
          <h1 id="support-title">${h(page.h1)}</h1>
          <p class="lead">${h(page.lead).replace(SUPPORT_EMAIL, `<a href="${SUPPORT_MAILTO}">${SUPPORT_EMAIL}</a>`)}</p>
          <a class="button button-primary" href="${SUPPORT_MAILTO}">${h(c.cta.email)}</a>
        </div>
      </section>
      <section class="section-shell support-grid" aria-label="Support topics">
        ${page.topics.map(([kicker, title, body]) => `<article class="feature-card">
          <span class="feature-icon">${h(kicker)}</span>
          <h2>${h(title)}</h2>
          <p>${h(body)}</p>
        </article>`).join("\n        ")}
      </section>
      <section class="answer-band" aria-labelledby="before-email-title">
        <div class="section-shell narrow">
          <p class="eyebrow">${h(page.beforeEyebrow)}</p>
          <h2 id="before-email-title">${h(page.beforeTitle)}</h2>
          <p class="lead">${h(page.beforeLead)}</p>
          <p>${h(page.beforeBody)}</p>
        </div>
      </section>
    </main>`;
  const graph = [
    orgGraph(locale),
    {
      "@type": "ContactPage",
      "@id": `${abs(pagePath(locale, "support"))}#webpage`,
      "url": abs(pagePath(locale, "support")),
      "name": page.title,
      "description": page.description,
      "isPartOf": { "@id": `${SITE_URL}/#website` },
      "about": { "@id": `${SITE_URL}/#app` },
      "inLanguage": locale.hreflang
    },
    breadcrumbGraph(locale, "support", page.eyebrow)
  ];
  return layout(locale, "support", { title: page.title, description: page.description, ogTitle: page.title, ogDescription: page.ogDescription }, body, graph);
}

function renderDemo(locale) {
  const page = demoCopy(locale);
  const body = `<main id="main" class="subpage">
      <section class="page-hero" aria-labelledby="demo-title">
        <div class="section-shell narrow">
          <p class="eyebrow">${h(page.eyebrow)}</p>
          <h1 id="demo-title">${h(page.h1)}</h1>
          <p class="lead">${h(page.lead)}</p>
          <div class="hero-actions">
            <a class="button button-primary" href="${APP_STORE_URL}">${h(page.appCta)}</a>
            <a class="button button-secondary" href="${h(pagePath(locale, "home"))}">${h(page.backHome)}</a>
          </div>
        </div>
      </section>
      <section class="section-shell demo-section" aria-labelledby="demo-video-title">
        <div class="demo-video-wrap">
          <video class="demo-video" controls autoplay muted loop playsinline preload="metadata" poster="/assets/charger-run-mode-demo-poster.webp" aria-label="${h(page.title)}">
            <source src="/assets/charger-run-mode-demo.mp4" type="video/mp4">
          </video>
        </div>
        <div class="demo-details">
          <p class="eyebrow">${h(page.eyebrow)}</p>
          <h2 id="demo-video-title">${h(page.detailsTitle)}</h2>
          <ul>
            ${page.details.map((item) => `<li>${h(item)}</li>`).join("\n            ")}
          </ul>
        </div>
      </section>
      <section class="final-cta" aria-labelledby="demo-final-title">
        <div class="section-shell">
          <p class="eyebrow">${h(page.eyebrow)}</p>
          <h2 id="demo-final-title">${h(page.finalTitle)}</h2>
          <p>${h(page.finalBody)}</p>
          <a class="button button-primary" href="${APP_STORE_URL}">${h(page.appCta)}</a>
        </div>
      </section>
    </main>`;
  const graph = [
    {
      "@type": "VideoObject",
      "@id": `${abs(pagePath(locale, "demo"))}#video`,
      "name": page.title,
      "description": page.description,
      "thumbnailUrl": `${SITE_URL}/assets/charger-run-mode-demo-poster.webp`,
      "contentUrl": `${SITE_URL}/assets/charger-run-mode-demo.mp4`,
      "uploadDate": "2026-05-24",
      "duration": "PT18S",
      "inLanguage": locale.hreflang
    },
    {
      "@type": "WebPage",
      "@id": `${abs(pagePath(locale, "demo"))}#webpage`,
      "url": abs(pagePath(locale, "demo")),
      "name": page.title,
      "description": page.description,
      "isPartOf": { "@id": `${SITE_URL}/#website` },
      "about": { "@id": `${SITE_URL}/#app` },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/assets/charger-run-mode-demo-poster.webp`
      },
      "inLanguage": locale.hreflang
    },
    breadcrumbGraph(locale, "demo", page.navLabel)
  ];
  return layout(locale, "demo", { title: page.title, description: page.description, ogType: "video.other", ogDescription: page.description }, body, graph);
}

function renderGuide(locale) {
  const c = t[locale.code] || t.en;
  const page = c.guide;
  const faqEntities = page.quick.map(([q, a]) => ({
    "@type": "Question",
    "name": q,
    "acceptedAnswer": { "@type": "Answer", "text": a }
  }));
  const body = `<main id="main" class="subpage">
      <section class="page-hero" aria-labelledby="guide-title">
        <div class="section-shell narrow">
          <p class="eyebrow">${h(page.eyebrow)}</p>
          <h1 id="guide-title">${h(page.h1)}</h1>
          <p class="lead">${h(page.lead)}</p>
          <div class="hero-actions">
            <a class="button button-primary" href="${APP_STORE_URL}">${h(c.cta.download)}</a>
            <a class="button button-secondary" href="${h(pagePath(locale, "faq"))}">${h(c.cta.readFaq)}</a>
          </div>
        </div>
      </section>
      <article class="section-shell guide-article">
        <section class="answer-card" aria-labelledby="answer">
          <h2 id="answer">${h(page.answerTitle)}</h2>
          ${page.answerParagraphs.map((p) => `<p>${h(p)}</p>`).join("\n          ")}
        </section>
        <section aria-labelledby="steps">
          <h2 id="steps">${h(page.stepsTitle)}</h2>
          <ol>
            ${page.steps.map((step) => `<li>${h(step)}</li>`).join("\n            ")}
          </ol>
        </section>
        <section aria-labelledby="why-time">
          <h2 id="why-time">${h(page.whyTitle)}</h2>
          ${page.whyParagraphs.map((p) => `<p>${h(p)}</p>`).join("\n          ")}
        </section>
        <section aria-labelledby="settings">
          <h2 id="settings">${h(page.settingsTitle)}</h2>
          <ul>
            ${page.settings.map((item) => `<li>${h(item)}</li>`).join("\n            ")}
          </ul>
        </section>
        <section aria-labelledby="faq-mini-guide">
          <h2 id="faq-mini-guide">${h(page.quickTitle)}</h2>
          ${page.quick.map(([q, a]) => `<h3>${h(q)}</h3>
          <p>${h(a)}</p>`).join("\n          ")}
        </section>
      </article>
      <section class="final-cta" aria-labelledby="guide-final-title">
        <div class="section-shell">
          <p class="eyebrow">${h(page.finalEyebrow)}</p>
          <h2 id="guide-final-title">${h(page.finalTitle)}</h2>
          <p>${h(page.finalBody)}</p>
          <a class="button button-primary" href="${APP_STORE_URL}">${h(c.cta.download)}</a>
        </div>
      </section>
    </main>`;
  const graph = [
    {
      "@type": "TechArticle",
      "@id": `${abs(pagePath(locale, "guide"))}#article`,
      "headline": page.h1,
      "description": page.description,
      "datePublished": "2026-05-24",
      "dateModified": "2026-05-24",
      "author": { "@type": "Organization", "name": "MrSounds AS" },
      "publisher": {
        "@type": "Organization",
        "name": "MrSounds AS",
        "logo": { "@type": "ImageObject", "url": `${SITE_URL}/assets/app-icon.png` }
      },
      "mainEntityOfPage": { "@id": `${abs(pagePath(locale, "guide"))}#webpage` },
      "inLanguage": locale.hreflang
    },
    {
      "@type": "HowTo",
      "@id": `${abs(pagePath(locale, "guide"))}#howto`,
      "name": page.stepsTitle,
      "description": page.description,
      "inLanguage": locale.hreflang,
      "step": page.steps.map((step) => ({
        "@type": "HowToStep",
        "text": step
      }))
    },
    {
      "@type": "FAQPage",
      "@id": `${abs(pagePath(locale, "guide"))}#faq`,
      "inLanguage": locale.hreflang,
      "mainEntity": faqEntities
    },
    {
      "@type": "WebPage",
      "@id": `${abs(pagePath(locale, "guide"))}#webpage`,
      "url": abs(pagePath(locale, "guide")),
      "name": page.title,
      "description": page.description,
      "isPartOf": { "@id": `${SITE_URL}/#website` },
      "inLanguage": locale.hreflang
    },
    breadcrumbGraph(locale, "guide", c.nav.guide)
  ];
  return layout(locale, "guide", { title: page.title, description: page.description, ogType: "article", ogDescription: page.ogDescription }, body, graph);
}

function renderPage(locale, pageKey) {
  if (pageKey === "home") return renderHome(locale);
  if (pageKey === "faq") return renderFaq(locale);
  if (pageKey === "support") return renderSupport(locale);
  if (pageKey === "guide") return renderGuide(locale);
  if (pageKey === "demo") return renderDemo(locale);
  throw new Error(`Unknown page ${pageKey}`);
}

function writeFile(filePath, content) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content);
}

function renderSitemap() {
  const entries = [];
  for (const pageKey of pageKeys) {
    for (const locale of locales) {
      const route = pagePath(locale, pageKey);
      const alternates = locales.map((candidate) => {
        return `    <xhtml:link rel="alternate" hreflang="${h(candidate.hreflang)}" href="${h(abs(pagePath(candidate, pageKey)))}" />`;
      });
      alternates.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${h(abs(pagePath(localeByCode.en, pageKey)))}" />`);
      entries.push(`  <url>
    <loc>${h(abs(route))}</loc>
${alternates.join("\n")}
    <lastmod>2026-05-24</lastmod>
  </url>`);
    }
  }
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join("\n")}
</urlset>
`;
}

function renderLlms() {
  const languageRows = locales.map((locale) => `- ${locale.name} (${locale.hreflang}): ${abs(pagePath(locale, "home"))}`).join("\n");
  const guideRows = locales.map((locale) => `- ${locale.name}: ${abs(pagePath(locale, "guide"))}`).join("\n");
  const demoRows = locales.map((locale) => `- ${locale.name}: ${abs(pagePath(locale, "demo"))}`).join("\n");
  return `# BatteryCountdown

> BatteryCountdown is a macOS menu bar utility that shows a live countdown before low battery may shut down your Mac.

BatteryCountdown is useful for Mac users searching for a low battery warning Mac app, a way to change battery warning behavior on Mac, or a shutdown warning that gives them time to save work and get a charger.

Important facts:
- BatteryCountdown is for macOS.
- The app shows a live countdown in the menu bar when battery is low.
- Users can choose the battery percentage where the countdown starts.
- The app is local-only and does not require an account.
- Support email: request@lyder.no.
- App Store link: ${APP_STORE_URL}.

## Languages

${languageRows}

## Core Pages

- Home pages: product overview for BatteryCountdown and low battery shutdown warning on Mac.
- FAQ pages: answers about low battery warning timing, shutdown warnings, CPU usage, privacy, charging estimates, and Charger Run Mode.
- Support pages: contact details for BatteryCountdown support.
- Guide pages: answer-first guide explaining whether users can change the low battery warning percentage on Mac and how BatteryCountdown adds a custom menu bar countdown.
- Demo pages: short Charger Run Mode video demo showing the visible low battery shutdown warning.

## Main Guide URLs

${guideRows}

## Charger Run Mode Demo URLs

${demoRows}

## Search Topics

- low battery warning mac
- change battery warning mac
- shutdown warning mac
- low battery warning
- MacBook low battery shutdown warning
- battery countdown Mac
- time until Mac shuts down battery
- Charger Run Mode demo
`;
}

function renderRobots() {
  return `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
}

function renderReadme() {
  return `# BatteryCountdown Website

Static multilingual website for BatteryCountdown, built for Hostinger GitHub deploy.

## Pages

The site is generated into static HTML for 12 locales:

- English: root paths such as \`/\`, \`/faq/\`, \`/support/\`
- Localized folders: \`/de/\`, \`/es/\`, \`/fr/\`, \`/hi/\`, \`/it/\`, \`/ja/\`, \`/ko/\`, \`/nb/\`, \`/pt-br/\`, \`/ru/\`, \`/zh-hans/\`

Each locale includes:

- Home
- FAQ
- Support
- Guide: low battery warning percentage on Mac
- Demo: Charger Run Mode video demo

## Generate

\`\`\`bash
npm run generate
\`\`\`

This rebuilds all localized HTML pages, \`sitemap.xml\`, \`robots.txt\`, and \`llms.txt\`.

## Before Production Deploy

Replace the \`__SITE_URL__\` placeholder everywhere with the final production origin, for example:

\`\`\`text
https://batterycountdown.app
\`\`\`

Files intentionally use the placeholder in generated canonical URLs, hreflang links, sitemap entries, Open Graph metadata, and JSON-LD.

## Local Preview

\`\`\`bash
python3 -m http.server 8080
\`\`\`

Then open:

\`\`\`text
http://localhost:8080/
\`\`\`

## Notes

- No analytics or tracking scripts are included in v1.
- Important SEO content is visible HTML text, not JavaScript-rendered text.
- Every localized page has reciprocal hreflang links.
- \`llms.txt\` is included as an experimental AI-readable summary. It is not a guaranteed ranking signal.
`;
}

function cleanGeneratedLocaleDirs() {
  for (const locale of locales) {
    if (!locale.prefix) continue;
    const dir = path.join(ROOT, locale.prefix);
    if (fs.existsSync(dir)) fs.rmSync(dir, { recursive: true, force: true });
  }
}

function main() {
  cleanGeneratedLocaleDirs();
  for (const locale of locales) {
    for (const pageKey of pageKeys) {
      writeFile(outputPath(locale, pageKey), renderPage(locale, pageKey));
    }
  }
  writeFile(path.join(ROOT, "sitemap.xml"), renderSitemap());
  writeFile(path.join(ROOT, "robots.txt"), renderRobots());
  writeFile(path.join(ROOT, "llms.txt"), renderLlms());
  writeFile(path.join(ROOT, "README.md"), renderReadme());
  console.log(`Generated ${locales.length * pageKeys.length} localized pages.`);
}

main();
