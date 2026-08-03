const comparisonGuidePageKey = "guideBatteryAppsCompared";

const comparisonGuideSlugs = {
  en: "best-battery-apps-for-mac-compared",
  de: "beste-batterie-apps-fuer-mac-vergleich",
  es: "mejores-apps-bateria-mac-comparativa",
  fr: "meilleures-apps-batterie-mac-comparatif",
  hi: "best-battery-apps-mac-comparison",
  it: "migliori-app-batteria-mac-confronto",
  ja: "best-battery-apps-mac-comparison",
  ko: "best-battery-apps-mac-comparison",
  nb: "beste-batteri-apper-for-mac-sammenlignet",
  "pt-BR": "melhores-apps-bateria-mac-comparativo",
  ru: "best-battery-apps-mac-comparison",
  "zh-Hans": "best-battery-apps-mac-comparison"
};

const sourceUrls = {
  aldente: "https://apphousekitchen.com/aldente-overview/features/",
  coconut: "https://www.coconut-flavour.com/coconutbattery/",
  batteryHealth: "https://apps.apple.com/us/app/battery-health-2-stats-info/id1120214373",
  batteries: "https://www.fadel.io/batteries"
};

function article(copy, sourceLabels) {
  return {
    ...copy,
    datePublished: "2026-08-03",
    dateModified: "2026-08-03",
    sources: [
      [sourceLabels.aldente, sourceUrls.aldente],
      [sourceLabels.coconut, sourceUrls.coconut],
      [sourceLabels.batteryHealth, sourceUrls.batteryHealth],
      [sourceLabels.batteries, sourceUrls.batteries]
    ]
  };
}

const comparisonGuideContent = {
  en: article({
    title: "Best Battery Apps for Mac Compared | BatteryCountdown",
    description: "Compare BatteryCountdown with AlDente, coconutBattery, Battery Health 2, and Batteries for Mac to find the right Mac battery utility.",
    ogDescription: "A fair comparison of popular Mac battery apps and the job each one does best.",
    h1: "BatteryCountdown vs popular Mac battery apps",
    lead: "BatteryCountdown, AlDente, coconutBattery, Battery Health 2, and Batteries for Mac solve different battery problems. The right choice depends on whether you need a shutdown countdown, charging control, battery diagnostics, detailed statistics, or multi-device monitoring.",
    answerParagraphs: [
      "BatteryCountdown is the focused choice for people who want to know how much time remains before low battery may shut down their Mac. Its live estimate sits directly in the menu bar, can start at a battery level chosen by the user, and is designed to feel like a small part of macOS rather than a separate battery dashboard.",
      "The other apps are stronger for different jobs. AlDente controls charging behavior, coconutBattery inspects battery health, Battery Health 2 presents a wider set of statistics, and Batteries for Mac monitors several devices. BatteryCountdown deliberately stays simpler and centers the final low-battery minutes."
    ],
    comparisonTitle: "Mac battery app comparison",
    comparisonIntro: "This comparison is based on the current feature descriptions published by each developer. Features and pricing can change, so check the linked official pages before buying.",
    comparisonHeaders: ["App", "Main focus", "Useful for", "Difference from BatteryCountdown"],
    comparisonRows: [
      ["BatteryCountdown", "Live time estimate before a low-battery shutdown", "A clean, configurable warning integrated into the menu bar", "This is its primary job. It can also show battery percentage at all times and offers Charger Run Mode."],
      ["AlDente", "Managing how a MacBook charges", "Charge limits, discharge modes, heat protection, schedules, and calibration", "AlDente offers much deeper charging control. BatteryCountdown does not control charging; it focuses on warning you before the battery runs out."],
      ["coconutBattery", "Battery health and device diagnostics", "Capacity, cycle count, battery age, temperature, history, and iPhone or iPad readings", "coconutBattery provides deeper diagnostics. BatteryCountdown is intentionally lighter and action-oriented during low battery."],
      ["Battery Health 2", "Detailed MacBook battery statistics", "Charge level, capacity, time remaining, power usage, cycles, notifications, and optional history graphs", "Battery Health 2 provides a broader information view. BatteryCountdown makes a configurable shutdown countdown the main menu bar experience."],
      ["Batteries for Mac", "Monitoring batteries across devices", "Battery levels and recharge notifications for iPhone, iPad, AirPods, Beats, and Bluetooth devices", "Batteries is better for seeing many devices together. BatteryCountdown concentrates on the Mac itself and the risk of a low-battery shutdown."]
    ],
    steps: [
      "Choose BatteryCountdown if the question you need answered is: how much working time do I have before this Mac may shut down?",
      "Choose a charging manager such as AlDente if controlling charge limits and charging behavior is the priority.",
      "Choose coconutBattery or Battery Health 2 when you want battery health, capacity, cycles, power data, or historical detail.",
      "Choose Batteries for Mac when the main goal is checking battery levels across several Apple and Bluetooth devices."
    ],
    whyParagraphs: [
      "Battery percentage alone does not tell you whether 5% means a comfortable window or only a few minutes. BatteryCountdown turns the remaining charge into a live time estimate that updates as the Mac's power use changes.",
      "The countdown trigger is configurable, so users who need more time can start it earlier while others can keep the menu bar quiet until the battery is critical. Battery percentage can also replace the app icon and remain visible at all times.",
      "The design goal is restraint: a lightweight utility that looks at home in the macOS menu bar and reveals more controls only when opened. It is not trying to replace a full diagnostic suite or charging controller."
    ],
    settings: [
      "Choose the battery level where the countdown begins, from 1% to 20%.",
      "Show a live estimated time to low-battery shutdown in the menu bar.",
      "Replace the menu bar icon with the current battery percentage, including the % sign.",
      "See estimated time until fully charged while the Mac is connected to power.",
      "Use a local-only utility that does not require an account."
    ],
    chargerTitle: "What is Charger Run Mode?",
    chargerBody: "Charger Run Mode is BatteryCountdown's optional, more noticeable warning experience for the moments when a quiet menu bar timer is not enough. It combines a prominent countdown with sound and a playful charger-running presentation, while the normal mode remains simple and unobtrusive.",
    chargerLink: "Watch the Charger Run Mode demo",
    quick: [
      ["Is BatteryCountdown a replacement for AlDente?", "No. AlDente manages charging; BatteryCountdown warns about the time remaining before a low-battery shutdown. They can serve different needs."],
      ["Does BatteryCountdown show battery health and cycle count?", "No. For deep diagnostics, coconutBattery or Battery Health 2 is a better fit. BatteryCountdown stays focused on remaining time and warnings."],
      ["Can BatteryCountdown show battery percentage all the time?", "Yes. You can replace its menu bar icon with a clean percentage display that includes the % sign."],
      ["Is the shutdown time guaranteed to be exact?", "No battery estimate can be guaranteed because power use changes. BatteryCountdown shows a live estimate and updates it as conditions change."]
    ],
    sourcesTitle: "Official product sources",
    finalTitle: "Choose the battery utility built for the final few minutes.",
    finalBody: "BatteryCountdown keeps a configurable low-battery time estimate where it is easiest to notice: directly in the Mac menu bar.",
    linkTitle: "Compare popular Mac battery apps",
    linkDescription: "See how BatteryCountdown differs from AlDente, coconutBattery, Battery Health 2, and Batteries for Mac."
  }, {
    aldente: "AlDente: official feature overview",
    coconut: "coconutBattery: official product page",
    batteryHealth: "Battery Health 2: Mac App Store listing",
    batteries: "Batteries for Mac: official product page"
  }),

  de: article({
    title: "Mac-Batterie-Apps im Vergleich | BatteryCountdown",
    description: "Vergleiche BatteryCountdown mit AlDente, coconutBattery, Battery Health 2 und Batteries for Mac und finde das passende Akku-Tool.",
    ogDescription: "Ein fairer Vergleich bekannter Mac-Akku-Apps und ihrer jeweiligen Stärken.",
    h1: "BatteryCountdown im Vergleich mit beliebten Mac-Akku-Apps",
    lead: "BatteryCountdown, AlDente, coconutBattery, Battery Health 2 und Batteries for Mac lösen unterschiedliche Probleme. Entscheidend ist, ob du einen Shutdown-Countdown, Ladesteuerung, Akkudiagnose, detaillierte Statistiken oder mehrere Geräte überwachen möchtest.",
    answerParagraphs: [
      "BatteryCountdown ist für Nutzer gedacht, die wissen möchten, wie viel Zeit bis zu einem möglichen Ausschalten wegen niedrigem Akkustand bleibt. Die laufende Schätzung steht direkt in der Menüleiste, startet auf Wunsch bei einem selbst gewählten Akkustand und wirkt wie ein kleiner Bestandteil von macOS statt wie ein separates Dashboard.",
      "Die anderen Apps sind für andere Aufgaben stärker: AlDente steuert das Ladeverhalten, coconutBattery untersucht den Akkuzustand, Battery Health 2 zeigt umfangreiche Statistiken und Batteries for Mac überwacht mehrere Geräte. BatteryCountdown bleibt bewusst einfach und konzentriert sich auf die letzten Minuten."
    ],
    comparisonTitle: "Mac-Akku-Apps im Vergleich",
    comparisonIntro: "Der Vergleich basiert auf den aktuellen Funktionsbeschreibungen der jeweiligen Entwickler. Funktionen und Preise können sich ändern; prüfe daher vor dem Kauf die verlinkten offiziellen Seiten.",
    comparisonHeaders: ["App", "Hauptzweck", "Geeignet für", "Unterschied zu BatteryCountdown"],
    comparisonRows: [
      ["BatteryCountdown", "Laufende Zeitschätzung bis zum Low-Battery-Shutdown", "Eine klare, anpassbare Warnung direkt in der Menüleiste", "Das ist die Kernaufgabe. Zusätzlich sind eine dauerhafte Prozentanzeige und Charger Run Mode verfügbar."],
      ["AlDente", "Steuerung des MacBook-Ladeverhaltens", "Ladelimits, Entlademodi, Hitzeschutz, Zeitpläne und Kalibrierung", "AlDente bietet deutlich mehr Ladesteuerung. BatteryCountdown greift nicht in das Laden ein, sondern warnt vor dem leeren Akku."],
      ["coconutBattery", "Akkuzustand und Gerätediagnose", "Kapazität, Ladezyklen, Alter, Temperatur, Verlauf sowie iPhone- und iPad-Werte", "coconutBattery liefert tiefere Diagnosen. BatteryCountdown ist leichter und auf rechtzeitiges Handeln ausgerichtet."],
      ["Battery Health 2", "Detaillierte MacBook-Akkustatistiken", "Ladestand, Kapazität, Restzeit, Verbrauch, Zyklen, Hinweise und optionale Verlaufsdiagramme", "Battery Health 2 zeigt ein breiteres Informationsbild. Bei BatteryCountdown steht der einstellbare Shutdown-Countdown im Mittelpunkt."],
      ["Batteries for Mac", "Akkus mehrerer Geräte überwachen", "Ladestände und Hinweise für iPhone, iPad, AirPods, Beats und Bluetooth-Geräte", "Batteries eignet sich besser für viele Geräte. BatteryCountdown konzentriert sich auf den Mac und das Risiko eines Low-Battery-Shutdowns."]
    ],
    steps: [
      "Wähle BatteryCountdown, wenn du vor allem wissen willst, wie viel Arbeitszeit bis zum möglichen Ausschalten des Mac bleibt.",
      "Wähle einen Lademanager wie AlDente, wenn Ladelimits und Ladeverhalten im Vordergrund stehen.",
      "Wähle coconutBattery oder Battery Health 2 für Akkuzustand, Kapazität, Zyklen, Leistungsdaten und Verlauf.",
      "Wähle Batteries for Mac, wenn du hauptsächlich die Akkustände mehrerer Apple- und Bluetooth-Geräte sehen möchtest."
    ],
    whyParagraphs: [
      "Eine Prozentzahl allein sagt nicht, ob 5 % noch bequem reichen oder nur wenige Minuten bedeuten. BatteryCountdown verwandelt die Restladung in eine laufende Zeitschätzung, die sich an den aktuellen Verbrauch anpasst.",
      "Der Startpunkt ist einstellbar: Wer mehr Vorlauf braucht, beginnt früher; andere halten die Menüleiste ruhig, bis es kritisch wird. Die Prozentanzeige kann außerdem das App-Symbol ersetzen und dauerhaft sichtbar bleiben.",
      "Das Designziel ist Zurückhaltung: ein leichtes Werkzeug, das in die macOS-Menüleiste passt und weitere Einstellungen erst beim Öffnen zeigt. Es will keine komplette Diagnose- oder Ladesteuerungs-App ersetzen."
    ],
    settings: [
      "Startpunkt des Countdowns zwischen 1 % und 20 % wählen.",
      "Geschätzte Restzeit bis zum Low-Battery-Shutdown in der Menüleiste anzeigen.",
      "Menüleistensymbol durch eine klare Prozentanzeige inklusive %-Zeichen ersetzen.",
      "Beim Laden die geschätzte Zeit bis zur vollständigen Ladung sehen.",
      "Lokale App ohne erforderliches Benutzerkonto verwenden."
    ],
    chargerTitle: "Was ist Charger Run Mode?",
    chargerBody: "Charger Run Mode ist die optionale, auffälligere Warnung von BatteryCountdown für Situationen, in denen ein leiser Menüleisten-Timer nicht genügt. Er verbindet einen großen Countdown mit Ton und einer spielerischen Ladegerät-Darstellung; der normale Modus bleibt schlicht und unaufdringlich.",
    chargerLink: "Charger Run Mode-Demo ansehen",
    quick: [
      ["Ersetzt BatteryCountdown AlDente?", "Nein. AlDente steuert das Laden; BatteryCountdown warnt vor der verbleibenden Zeit bis zu einem Low-Battery-Shutdown."],
      ["Zeigt BatteryCountdown Akkuzustand und Zyklen?", "Nein. Für tiefe Diagnosen passen coconutBattery oder Battery Health 2 besser. BatteryCountdown konzentriert sich auf Zeit und Warnungen."],
      ["Kann BatteryCountdown die Prozentzahl immer anzeigen?", "Ja. Das Menüleistensymbol lässt sich durch eine klare Prozentanzeige mit %-Zeichen ersetzen."],
      ["Ist die Shutdown-Zeit garantiert exakt?", "Nein. Der Verbrauch ändert sich. BatteryCountdown zeigt eine laufend aktualisierte Schätzung."]
    ],
    sourcesTitle: "Offizielle Produktquellen",
    finalTitle: "Wähle das Akku-Tool für die entscheidenden letzten Minuten.",
    finalBody: "BatteryCountdown hält die einstellbare Restzeitschätzung dort sichtbar, wo sie am schnellsten auffällt: direkt in der Mac-Menüleiste.",
    linkTitle: "Beliebte Mac-Akku-Apps vergleichen",
    linkDescription: "BatteryCountdown im Vergleich mit AlDente, coconutBattery, Battery Health 2 und Batteries for Mac."
  }, {
    aldente: "AlDente: offizielle Funktionsübersicht",
    coconut: "coconutBattery: offizielle Produktseite",
    batteryHealth: "Battery Health 2: Eintrag im Mac App Store",
    batteries: "Batteries for Mac: offizielle Produktseite"
  }),

  es: article({
    title: "Apps de batería para Mac comparadas | BatteryCountdown",
    description: "Compara BatteryCountdown con AlDente, coconutBattery, Battery Health 2 y Batteries for Mac para elegir la utilidad adecuada.",
    ogDescription: "Una comparación justa de conocidas apps de batería para Mac y sus puntos fuertes.",
    h1: "BatteryCountdown frente a las apps de batería más conocidas para Mac",
    lead: "BatteryCountdown, AlDente, coconutBattery, Battery Health 2 y Batteries for Mac resuelven problemas distintos. La elección depende de si necesitas una cuenta atrás hasta el apagado, controlar la carga, diagnosticar la batería, consultar estadísticas o vigilar varios dispositivos.",
    answerParagraphs: [
      "BatteryCountdown está pensado para quien quiere saber cuánto tiempo queda antes de que la batería baja pueda apagar el Mac. La estimación en directo aparece en la barra de menús, puede comenzar en el nivel elegido por el usuario y se siente como una pequeña parte de macOS, no como otro panel independiente.",
      "Las demás apps destacan en otras tareas. AlDente controla la carga, coconutBattery analiza la salud de la batería, Battery Health 2 ofrece más estadísticas y Batteries for Mac controla varios dispositivos. BatteryCountdown se mantiene deliberadamente simple y se centra en los últimos minutos."
    ],
    comparisonTitle: "Comparativa de apps de batería para Mac",
    comparisonIntro: "La tabla se basa en las funciones que publica actualmente cada desarrollador. Las funciones y los precios pueden cambiar; consulta las páginas oficiales enlazadas antes de comprar.",
    comparisonHeaders: ["App", "Objetivo principal", "Útil para", "Diferencia frente a BatteryCountdown"],
    comparisonRows: [
      ["BatteryCountdown", "Estimación en directo hasta un apagado por batería baja", "Un aviso limpio y configurable integrado en la barra de menús", "Esta es su función principal. También puede mostrar siempre el porcentaje y ofrece Charger Run Mode."],
      ["AlDente", "Gestionar cómo carga el MacBook", "Límites, modos de descarga, protección térmica, horarios y calibración", "AlDente controla la carga con mucha más profundidad. BatteryCountdown no modifica la carga; avisa antes de que se agote."],
      ["coconutBattery", "Salud de la batería y diagnóstico", "Capacidad, ciclos, edad, temperatura, historial y datos de iPhone o iPad", "coconutBattery ofrece diagnóstico avanzado. BatteryCountdown es más ligero y orientado a actuar con poca batería."],
      ["Battery Health 2", "Estadísticas detalladas del MacBook", "Carga, capacidad, tiempo restante, consumo, ciclos, avisos e historial opcional", "Battery Health 2 presenta más información. BatteryCountdown convierte la cuenta atrás configurable en la experiencia principal de la barra."],
      ["Batteries for Mac", "Controlar baterías de varios dispositivos", "Niveles y avisos para iPhone, iPad, AirPods, Beats y dispositivos Bluetooth", "Batteries es mejor para ver muchos dispositivos. BatteryCountdown se centra en el Mac y el riesgo de apagado."]
    ],
    steps: [
      "Elige BatteryCountdown si tu pregunta principal es cuánto tiempo de trabajo queda antes de que el Mac pueda apagarse.",
      "Elige un gestor como AlDente si lo prioritario es controlar límites y comportamiento de carga.",
      "Elige coconutBattery o Battery Health 2 si buscas salud, capacidad, ciclos, consumo o historial.",
      "Elige Batteries for Mac si quieres consultar sobre todo los niveles de varios dispositivos Apple y Bluetooth."
    ],
    whyParagraphs: [
      "Un porcentaje no aclara si un 5 % ofrece margen o apenas unos minutos. BatteryCountdown convierte la carga restante en una estimación de tiempo que se actualiza cuando cambia el consumo del Mac.",
      "El usuario elige cuándo comienza la cuenta atrás: antes si necesita más margen o solo cuando sea crítico. El porcentaje también puede sustituir al icono y permanecer siempre visible.",
      "El objetivo de diseño es la sencillez: una utilidad ligera que encaje en la barra de menús de macOS. No pretende sustituir un paquete completo de diagnóstico ni un controlador de carga."
    ],
    settings: [
      "Elegir el inicio de la cuenta atrás entre el 1 % y el 20 %.",
      "Mostrar el tiempo estimado hasta el apagado en la barra de menús.",
      "Sustituir el icono por un porcentaje limpio con el signo %.",
      "Ver el tiempo estimado hasta la carga completa cuando el Mac está conectado.",
      "Usar una utilidad local que no exige crear una cuenta."
    ],
    chargerTitle: "¿Qué es Charger Run Mode?",
    chargerBody: "Charger Run Mode es el aviso opcional y más llamativo de BatteryCountdown para cuando un contador discreto no basta. Combina una cuenta atrás destacada, sonido y una presentación divertida para ir a por el cargador; el modo normal sigue siendo simple y silencioso.",
    chargerLink: "Ver la demostración de Charger Run Mode",
    quick: [
      ["¿BatteryCountdown sustituye a AlDente?", "No. AlDente gestiona la carga; BatteryCountdown avisa del tiempo restante antes de un posible apagado."],
      ["¿Muestra salud y ciclos de batería?", "No. Para diagnóstico profundo, coconutBattery o Battery Health 2 encajan mejor. BatteryCountdown se centra en tiempo y avisos."],
      ["¿Puede mostrar siempre el porcentaje?", "Sí. Su icono puede sustituirse por una cifra clara con el signo %."],
      ["¿La hora de apagado es exacta y garantizada?", "No. El consumo cambia. BatteryCountdown muestra una estimación en directo que se actualiza con las condiciones."]
    ],
    sourcesTitle: "Fuentes oficiales de los productos",
    finalTitle: "Elige la utilidad creada para los últimos minutos.",
    finalBody: "BatteryCountdown mantiene la estimación configurable donde resulta más fácil verla: directamente en la barra de menús del Mac.",
    linkTitle: "Comparar apps de batería para Mac",
    linkDescription: "Diferencias entre BatteryCountdown, AlDente, coconutBattery, Battery Health 2 y Batteries for Mac."
  }, {
    aldente: "AlDente: resumen oficial de funciones",
    coconut: "coconutBattery: página oficial del producto",
    batteryHealth: "Battery Health 2: ficha en el Mac App Store",
    batteries: "Batteries for Mac: página oficial del producto"
  }),

  fr: article({
    title: "Apps de batterie Mac : comparatif | BatteryCountdown",
    description: "Comparez BatteryCountdown à AlDente, coconutBattery, Battery Health 2 et Batteries for Mac pour choisir le bon utilitaire.",
    ogDescription: "Un comparatif équitable des apps de batterie Mac connues et de leurs points forts.",
    h1: "BatteryCountdown face aux apps de batterie Mac populaires",
    lead: "BatteryCountdown, AlDente, coconutBattery, Battery Health 2 et Batteries for Mac répondent à des besoins différents : compte à rebours avant extinction, contrôle de la recharge, diagnostic, statistiques détaillées ou suivi de plusieurs appareils.",
    answerParagraphs: [
      "BatteryCountdown s’adresse aux personnes qui veulent savoir combien de temps il reste avant qu’une batterie faible puisse éteindre leur Mac. L’estimation en direct se trouve dans la barre des menus, peut commencer au niveau choisi et ressemble à une petite fonction de macOS plutôt qu’à un tableau de bord séparé.",
      "Les autres apps excellent ailleurs. AlDente contrôle la recharge, coconutBattery analyse l’état de la batterie, Battery Health 2 affiche davantage de statistiques et Batteries for Mac surveille plusieurs appareils. BatteryCountdown reste volontairement simple et centré sur les dernières minutes."
    ],
    comparisonTitle: "Comparatif des apps de batterie pour Mac",
    comparisonIntro: "Ce tableau repose sur les fonctions actuellement publiées par chaque éditeur. Les fonctions et tarifs peuvent évoluer ; consultez les pages officielles liées avant tout achat.",
    comparisonHeaders: ["App", "Objectif principal", "Utile pour", "Différence avec BatteryCountdown"],
    comparisonRows: [
      ["BatteryCountdown", "Estimation en direct avant une extinction sur batterie faible", "Une alerte claire et réglable intégrée à la barre des menus", "C’est sa fonction centrale. Il peut aussi afficher le pourcentage en permanence et propose Charger Run Mode."],
      ["AlDente", "Gérer la recharge du MacBook", "Limites de recharge, décharge, protection thermique, programmes et étalonnage", "AlDente contrôle la recharge en profondeur. BatteryCountdown ne la modifie pas ; il avertit avant que la batterie soit vide."],
      ["coconutBattery", "État de la batterie et diagnostic", "Capacité, cycles, âge, température, historique et mesures iPhone ou iPad", "coconutBattery fournit un diagnostic plus poussé. BatteryCountdown est plus léger et orienté vers l’action à faible charge."],
      ["Battery Health 2", "Statistiques détaillées du MacBook", "Charge, capacité, temps restant, consommation, cycles, notifications et historique optionnel", "Battery Health 2 offre une vue plus large. BatteryCountdown place le compte à rebours réglable au cœur de la barre des menus."],
      ["Batteries for Mac", "Suivre les batteries de plusieurs appareils", "Niveaux et alertes pour iPhone, iPad, AirPods, Beats et appareils Bluetooth", "Batteries convient mieux au suivi multi-appareils. BatteryCountdown se concentre sur le Mac et le risque d’extinction."]
    ],
    steps: [
      "Choisissez BatteryCountdown si vous voulez surtout connaître le temps de travail restant avant une possible extinction du Mac.",
      "Choisissez AlDente si le contrôle des limites et du comportement de recharge est prioritaire.",
      "Choisissez coconutBattery ou Battery Health 2 pour l’état, la capacité, les cycles, la puissance ou l’historique.",
      "Choisissez Batteries for Mac pour suivre principalement plusieurs appareils Apple et Bluetooth."
    ],
    whyParagraphs: [
      "Un simple pourcentage ne dit pas si 5 % représentent une marge confortable ou seulement quelques minutes. BatteryCountdown transforme la charge restante en estimation de temps actualisée selon la consommation du Mac.",
      "Le seuil est réglable : commencez plus tôt pour avoir davantage de marge, ou seulement au niveau critique. Le pourcentage peut aussi remplacer l’icône et rester visible en permanence.",
      "Le design vise la discrétion : un utilitaire léger qui s’intègre à la barre des menus de macOS. Il ne cherche pas à remplacer une suite de diagnostic ni un contrôleur de recharge complet."
    ],
    settings: [
      "Choisir le seuil de départ entre 1 % et 20 %.",
      "Afficher le temps estimé avant extinction dans la barre des menus.",
      "Remplacer l’icône par un pourcentage lisible avec le signe %.",
      "Voir l’estimation jusqu’à la recharge complète lorsque le Mac est branché.",
      "Utiliser un outil local sans création de compte."
    ],
    chargerTitle: "Qu’est-ce que Charger Run Mode ?",
    chargerBody: "Charger Run Mode est l’alerte optionnelle et plus visible de BatteryCountdown lorsque le discret minuteur de la barre des menus ne suffit pas. Il associe un grand compte à rebours, du son et une présentation ludique autour du chargeur, tandis que le mode normal reste simple.",
    chargerLink: "Voir la démo de Charger Run Mode",
    quick: [
      ["BatteryCountdown remplace-t-il AlDente ?", "Non. AlDente gère la recharge ; BatteryCountdown avertit du temps restant avant une extinction liée à la batterie faible."],
      ["Affiche-t-il l’état et les cycles ?", "Non. Pour un diagnostic approfondi, coconutBattery ou Battery Health 2 conviennent mieux. BatteryCountdown se concentre sur le temps et l’alerte."],
      ["Peut-il toujours afficher le pourcentage ?", "Oui. Son icône peut être remplacée par un pourcentage clair avec le signe %."],
      ["L’heure d’extinction est-elle garantie ?", "Non. La consommation varie. BatteryCountdown affiche une estimation en direct qui s’adapte aux conditions."]
    ],
    sourcesTitle: "Sources officielles des produits",
    finalTitle: "Choisissez l’utilitaire conçu pour les dernières minutes.",
    finalBody: "BatteryCountdown garde l’estimation réglable à l’endroit le plus facile à remarquer : directement dans la barre des menus du Mac.",
    linkTitle: "Comparer les apps de batterie Mac",
    linkDescription: "Comparez BatteryCountdown, AlDente, coconutBattery, Battery Health 2 et Batteries for Mac."
  }, {
    aldente: "AlDente : présentation officielle des fonctions",
    coconut: "coconutBattery : page produit officielle",
    batteryHealth: "Battery Health 2 : fiche du Mac App Store",
    batteries: "Batteries for Mac : page produit officielle"
  }),

  hi: article({
    title: "Mac के लिए बेहतरीन battery apps की तुलना | BatteryCountdown",
    description: "BatteryCountdown की AlDente, coconutBattery, Battery Health 2 और Batteries for Mac से तुलना करके सही Mac utility चुनें।",
    ogDescription: "लोकप्रिय Mac battery apps और उनके अलग-अलग उपयोगों की निष्पक्ष तुलना।",
    h1: "BatteryCountdown बनाम लोकप्रिय Mac battery apps",
    lead: "BatteryCountdown, AlDente, coconutBattery, Battery Health 2 और Batteries for Mac अलग समस्याएं हल करते हैं। सही चुनाव इस पर निर्भर है कि आपको shutdown countdown, charging control, battery diagnostics, विस्तृत stats या multiple-device monitoring चाहिए।",
    answerParagraphs: [
      "BatteryCountdown उन लोगों के लिए है जो जानना चाहते हैं कि low battery से Mac बंद होने से पहले कितना समय बचा है। Live estimate सीधे menu bar में रहता है, user के चुने हुए battery level पर शुरू हो सकता है और अलग dashboard की जगह macOS के छोटे integrated हिस्से जैसा लगता है।",
      "दूसरी apps अलग कामों में मजबूत हैं। AlDente charging behavior नियंत्रित करता है, coconutBattery battery health जांचता है, Battery Health 2 अधिक statistics दिखाता है और Batteries for Mac कई devices monitor करता है। BatteryCountdown जानबूझकर सरल रहकर आखिरी low-battery minutes पर focus करता है।"
    ],
    comparisonTitle: "Mac battery app comparison",
    comparisonIntro: "यह तुलना हर developer की मौजूदा official feature descriptions पर आधारित है। Features और pricing बदल सकते हैं, इसलिए खरीदने से पहले linked official pages देखें।",
    comparisonHeaders: ["App", "मुख्य focus", "किसके लिए उपयोगी", "BatteryCountdown से अंतर"],
    comparisonRows: [
      ["BatteryCountdown", "Low-battery shutdown से पहले live time estimate", "Menu bar में clean और configurable warning", "यही इसका मुख्य काम है। यह percentage हमेशा दिखा सकता है और Charger Run Mode भी देता है।"],
      ["AlDente", "MacBook की charging को manage करना", "Charge limits, discharge modes, heat protection, schedules और calibration", "AlDente charging को गहराई से control करता है। BatteryCountdown charging नहीं बदलता; battery खत्म होने से पहले warning देता है।"],
      ["coconutBattery", "Battery health और device diagnostics", "Capacity, cycle count, age, temperature, history और iPhone/iPad readings", "coconutBattery ज्यादा diagnostics देता है। BatteryCountdown हल्का है और low battery पर action लेने के लिए बना है।"],
      ["Battery Health 2", "Detailed MacBook battery statistics", "Charge, capacity, time remaining, power use, cycles, notifications और optional history", "Battery Health 2 ज्यादा data दिखाता है। BatteryCountdown configurable shutdown countdown को menu bar का मुख्य अनुभव बनाता है।"],
      ["Batteries for Mac", "कई devices की batteries monitor करना", "iPhone, iPad, AirPods, Beats और Bluetooth devices के levels और alerts", "Batteries कई devices के लिए बेहतर है। BatteryCountdown सिर्फ Mac और low-battery shutdown risk पर केंद्रित है।"]
    ],
    steps: [
      "BatteryCountdown चुनें अगर मुख्य सवाल है: Mac बंद होने से पहले मेरे पास कितना working time है?",
      "Charge limits और charging behavior प्राथमिकता हों तो AlDente जैसा charging manager चुनें।",
      "Health, capacity, cycles, power data या history चाहिए तो coconutBattery या Battery Health 2 चुनें।",
      "कई Apple और Bluetooth devices के levels चाहिए तो Batteries for Mac चुनें।"
    ],
    whyParagraphs: [
      "सिर्फ percentage यह नहीं बताता कि 5% आराम से काफी है या केवल कुछ मिनट। BatteryCountdown बची charge को live time estimate में बदलता है जो Mac की power use बदलने पर update होता है।",
      "Countdown trigger configurable है: ज्यादा समय चाहिए तो पहले शुरू करें, नहीं तो critical level तक menu bar शांत रखें। Percentage app icon को replace करके हमेशा visible भी रह सकता है।",
      "Design का लक्ष्य simplicity है: एक lightweight utility जो macOS menu bar का स्वाभाविक हिस्सा लगे। यह full diagnostics suite या charging controller बनने की कोशिश नहीं करता।"
    ],
    settings: [
      "Countdown शुरू होने का level 1% से 20% के बीच चुनें।",
      "Menu bar में low-battery shutdown तक estimated time दिखाएं।",
      "Menu bar icon को % sign सहित clean battery percentage से बदलें।",
      "Power connected होने पर full charge तक estimated time देखें।",
      "बिना account वाली local-only utility उपयोग करें।"
    ],
    chargerTitle: "Charger Run Mode क्या है?",
    chargerBody: "Charger Run Mode BatteryCountdown का optional, ज्यादा noticeable warning experience है, उन मौकों के लिए जब शांत menu bar timer काफी नहीं है। इसमें prominent countdown, sound और charger लेने की playful presentation होती है; normal mode सरल रहता है।",
    chargerLink: "Charger Run Mode demo देखें",
    quick: [
      ["क्या BatteryCountdown AlDente की जगह लेता है?", "नहीं। AlDente charging manage करता है; BatteryCountdown low-battery shutdown तक बचे समय की warning देता है।"],
      ["क्या यह battery health और cycles दिखाता है?", "नहीं। Deep diagnostics के लिए coconutBattery या Battery Health 2 बेहतर हैं। BatteryCountdown time और warnings पर focus करता है।"],
      ["क्या battery percentage हमेशा दिख सकता है?", "हां। Menu bar icon को % sign वाले clean percentage से बदला जा सकता है।"],
      ["क्या shutdown time guaranteed exact है?", "नहीं। Power use बदलती रहती है। BatteryCountdown live estimate दिखाता और conditions के साथ update करता है।"]
    ],
    sourcesTitle: "Official product sources",
    finalTitle: "आखिरी जरूरी minutes के लिए बनी battery utility चुनें।",
    finalBody: "BatteryCountdown configurable low-battery time estimate को वहीं रखता है जहां तुरंत दिखे: सीधे Mac menu bar में।",
    linkTitle: "लोकप्रिय Mac battery apps की तुलना",
    linkDescription: "BatteryCountdown, AlDente, coconutBattery, Battery Health 2 और Batteries for Mac के अंतर देखें।"
  }, {
    aldente: "AlDente: official feature overview",
    coconut: "coconutBattery: official product page",
    batteryHealth: "Battery Health 2: Mac App Store listing",
    batteries: "Batteries for Mac: official product page"
  }),

  it: article({
    title: "Migliori app batteria per Mac a confronto | BatteryCountdown",
    description: "Confronta BatteryCountdown con AlDente, coconutBattery, Battery Health 2 e Batteries for Mac e scegli l'utility più adatta.",
    ogDescription: "Un confronto corretto tra note app batteria per Mac e i loro punti di forza.",
    h1: "BatteryCountdown a confronto con le app batteria più note per Mac",
    lead: "BatteryCountdown, AlDente, coconutBattery, Battery Health 2 e Batteries for Mac risolvono problemi diversi. La scelta dipende da countdown allo spegnimento, controllo della ricarica, diagnostica, statistiche dettagliate o monitoraggio di più dispositivi.",
    answerParagraphs: [
      "BatteryCountdown è pensato per chi vuole sapere quanto tempo resta prima che la batteria scarica possa spegnere il Mac. La stima in tempo reale vive nella barra dei menu, può iniziare al livello scelto dall'utente e appare come una piccola parte di macOS, non come un pannello separato.",
      "Le altre app sono più forti in compiti diversi. AlDente controlla la ricarica, coconutBattery analizza lo stato, Battery Health 2 mostra più statistiche e Batteries for Mac monitora più dispositivi. BatteryCountdown resta volutamente semplice e concentrato sugli ultimi minuti."
    ],
    comparisonTitle: "Confronto tra app batteria per Mac",
    comparisonIntro: "Il confronto si basa sulle funzioni attualmente pubblicate dagli sviluppatori. Funzioni e prezzi possono cambiare: verifica le pagine ufficiali collegate prima dell'acquisto.",
    comparisonHeaders: ["App", "Obiettivo principale", "Utile per", "Differenza da BatteryCountdown"],
    comparisonRows: [
      ["BatteryCountdown", "Stima in tempo reale prima dello spegnimento", "Un avviso pulito e configurabile integrato nella barra dei menu", "È la sua funzione centrale. Può mostrare sempre la percentuale e include Charger Run Mode."],
      ["AlDente", "Gestione della ricarica del MacBook", "Limiti, modalità di scarica, protezione termica, pianificazione e calibrazione", "AlDente controlla la ricarica in profondità. BatteryCountdown non la modifica; avvisa prima che la batteria finisca."],
      ["coconutBattery", "Stato batteria e diagnostica", "Capacità, cicli, età, temperatura, cronologia e letture iPhone/iPad", "coconutBattery offre diagnosi più profonde. BatteryCountdown è più leggero e orientato all'azione con batteria bassa."],
      ["Battery Health 2", "Statistiche dettagliate del MacBook", "Carica, capacità, tempo residuo, consumo, cicli, notifiche e cronologia opzionale", "Battery Health 2 offre una vista più ampia. BatteryCountdown rende protagonista il countdown configurabile nella barra."],
      ["Batteries for Mac", "Monitoraggio di più dispositivi", "Livelli e notifiche per iPhone, iPad, AirPods, Beats e Bluetooth", "Batteries è migliore per molti dispositivi. BatteryCountdown si concentra sul Mac e sul rischio di spegnimento."]
    ],
    steps: [
      "Scegli BatteryCountdown se vuoi soprattutto sapere quanto tempo di lavoro resta prima di un possibile spegnimento.",
      "Scegli AlDente se la priorità è controllare limiti e comportamento di ricarica.",
      "Scegli coconutBattery o Battery Health 2 per stato, capacità, cicli, potenza e cronologia.",
      "Scegli Batteries for Mac se vuoi vedere principalmente i livelli di più dispositivi Apple e Bluetooth."
    ],
    whyParagraphs: [
      "Una percentuale non dice se il 5% offre ancora margine o solo pochi minuti. BatteryCountdown trasforma la carica residua in una stima temporale aggiornata quando cambia il consumo del Mac.",
      "La soglia è configurabile: inizia prima se serve più tempo oppure solo al livello critico. La percentuale può anche sostituire l'icona e rimanere sempre visibile.",
      "L'obiettivo è la discrezione: una utility leggera che appartiene alla barra dei menu di macOS. Non vuole sostituire una suite diagnostica o un controller di ricarica completo."
    ],
    settings: [
      "Scegliere l'avvio del countdown tra 1% e 20%.",
      "Mostrare il tempo stimato allo spegnimento nella barra dei menu.",
      "Sostituire l'icona con una percentuale pulita completa di segno %.",
      "Vedere il tempo stimato alla carica completa quando il Mac è collegato.",
      "Usare una utility locale che non richiede account."
    ],
    chargerTitle: "Cos'è Charger Run Mode?",
    chargerBody: "Charger Run Mode è l'avviso opzionale e più evidente di BatteryCountdown per quando il timer discreto non basta. Unisce un grande countdown, suono e una presentazione giocosa per correre a prendere il caricatore; la modalità normale resta semplice.",
    chargerLink: "Guarda la demo di Charger Run Mode",
    quick: [
      ["BatteryCountdown sostituisce AlDente?", "No. AlDente gestisce la ricarica; BatteryCountdown avvisa del tempo rimasto prima di un possibile spegnimento."],
      ["Mostra salute e cicli della batteria?", "No. Per diagnosi profonde sono più adatti coconutBattery o Battery Health 2. BatteryCountdown si concentra su tempo e avvisi."],
      ["Può mostrare sempre la percentuale?", "Sì. L'icona può essere sostituita da una percentuale chiara con il segno %."],
      ["L'orario di spegnimento è garantito?", "No. Il consumo cambia. BatteryCountdown mostra una stima in tempo reale che si adatta alle condizioni."]
    ],
    sourcesTitle: "Fonti ufficiali dei prodotti",
    finalTitle: "Scegli l'utility pensata per gli ultimi minuti.",
    finalBody: "BatteryCountdown mantiene la stima configurabile dove è più facile notarla: direttamente nella barra dei menu del Mac.",
    linkTitle: "Confronta le app batteria per Mac",
    linkDescription: "Differenze tra BatteryCountdown, AlDente, coconutBattery, Battery Health 2 e Batteries for Mac."
  }, {
    aldente: "AlDente: panoramica ufficiale delle funzioni",
    coconut: "coconutBattery: pagina ufficiale del prodotto",
    batteryHealth: "Battery Health 2: scheda nel Mac App Store",
    batteries: "Batteries for Mac: pagina ufficiale del prodotto"
  }),

  ja: article({
    title: "Mac向けバッテリーアプリ比較 | BatteryCountdown",
    description: "BatteryCountdown、AlDente、coconutBattery、Battery Health 2、Batteries for Macを比較し、用途に合うアプリを選びます。",
    ogDescription: "人気のMac向けバッテリーアプリと得意分野を公平に比較します。",
    h1: "BatteryCountdownと人気のMac向けバッテリーアプリを比較",
    lead: "BatteryCountdown、AlDente、coconutBattery、Battery Health 2、Batteries for Macは、それぞれ異なる課題を解決します。終了までのカウントダウン、充電制御、診断、詳細な統計、複数デバイス監視のどれが必要かで選択が変わります。",
    answerParagraphs: [
      "BatteryCountdownは、低バッテリーでMacが終了する可能性があるまでの時間を知りたい人向けです。リアルタイムの推定時間をメニューバーに直接表示し、ユーザーが選んだ残量から開始できます。独立したダッシュボードではなく、macOSの一部のように見える小さなユーティリティを目指しています。",
      "ほかのアプリは別の用途に強みがあります。AlDenteは充電動作を制御し、coconutBatteryはバッテリー状態を診断し、Battery Health 2は幅広い統計を表示し、Batteries for Macは複数デバイスを監視します。BatteryCountdownは意図的にシンプルで、最後の低バッテリー時間に集中します。"
    ],
    comparisonTitle: "Mac向けバッテリーアプリ比較表",
    comparisonIntro: "各開発元が現在公開している機能説明に基づく比較です。機能や価格は変わる場合があるため、購入前にリンク先の公式ページをご確認ください。",
    comparisonHeaders: ["アプリ", "主な目的", "向いている用途", "BatteryCountdownとの違い"],
    comparisonRows: [
      ["BatteryCountdown", "低バッテリー終了までのリアルタイム推定", "メニューバーに統合された、明確で調整可能な警告", "これが中心機能です。残量を常時表示でき、Charger Run Modeも利用できます。"],
      ["AlDente", "MacBookの充電動作を管理", "充電上限、放電モード、熱保護、スケジュール、キャリブレーション", "AlDenteは充電を細かく制御します。BatteryCountdownは充電を制御せず、空になる前の警告に集中します。"],
      ["coconutBattery", "バッテリー状態とデバイス診断", "容量、サイクル数、年齢、温度、履歴、iPhone/iPadの情報", "coconutBatteryは詳細な診断向けです。BatteryCountdownは軽量で、低残量時の行動に重点を置きます。"],
      ["Battery Health 2", "MacBookの詳細な統計", "充電量、容量、残り時間、消費電力、サイクル、通知、履歴グラフ", "Battery Health 2は情報量が豊富です。BatteryCountdownは調整可能な終了カウントダウンをメニューバーの中心にします。"],
      ["Batteries for Mac", "複数デバイスのバッテリー監視", "iPhone、iPad、AirPods、Beats、Bluetooth機器の残量と通知", "Batteriesは複数機器の一覧に適しています。BatteryCountdownはMac本体と低バッテリー終了リスクに集中します。"]
    ],
    steps: [
      "Macが終了するまでの作業時間を知りたいなら、BatteryCountdownを選びます。",
      "充電上限や充電動作の制御が優先なら、AlDenteなどの充電管理アプリを選びます。",
      "状態、容量、サイクル、電力、履歴が必要なら、coconutBatteryまたはBattery Health 2を選びます。",
      "複数のApple製品やBluetooth機器を確認したいなら、Batteries for Macを選びます。"
    ],
    whyParagraphs: [
      "残量5%だけでは、余裕があるのか数分しかないのか分かりません。BatteryCountdownは残量を時間に変換し、Macの消費電力が変わると推定も更新します。",
      "開始残量は調整可能です。余裕が必要なら早く、普段は静かにしたいなら危険な残量から表示できます。アプリアイコンを％付きの残量表示に置き換え、常時表示することも可能です。",
      "設計の目的は控えめな統合です。macOSのメニューバーになじむ軽量ツールであり、完全な診断スイートや充電コントローラーを置き換えるものではありません。"
    ],
    settings: [
      "1%～20%からカウントダウン開始残量を選択。",
      "低バッテリー終了までの推定時間をメニューバーに表示。",
      "アイコンを％記号付きの見やすい残量表示に置き換え。",
      "電源接続中は満充電までの推定時間を表示。",
      "アカウント不要のローカルユーティリティ。"
    ],
    chargerTitle: "Charger Run Modeとは？",
    chargerBody: "Charger Run Modeは、静かなメニューバーのタイマーだけでは気づきにくい場面向けの、より目立つオプション警告です。大きなカウントダウン、サウンド、充電器を取りに行く遊び心ある演出を組み合わせ、通常モードはシンプルなままです。",
    chargerLink: "Charger Run Modeのデモを見る",
    quick: [
      ["BatteryCountdownはAlDenteの代わりになりますか？", "いいえ。AlDenteは充電を管理し、BatteryCountdownは低バッテリー終了までの残り時間を警告します。"],
      ["バッテリー状態やサイクル数を表示しますか？", "いいえ。詳細診断にはcoconutBatteryやBattery Health 2が適しています。BatteryCountdownは時間と警告に集中します。"],
      ["残量を常に表示できますか？", "はい。メニューバーのアイコンを％記号付きの見やすい残量表示に置き換えられます。"],
      ["終了時刻は必ず正確ですか？", "いいえ。消費電力は変化します。BatteryCountdownは状況に合わせて更新される推定時間を表示します。"]
    ],
    sourcesTitle: "公式製品情報",
    finalTitle: "最後の数分のために作られたバッテリーユーティリティを。",
    finalBody: "BatteryCountdownは、調整可能な低バッテリー推定時間を、最も気づきやすいMacのメニューバーに表示します。",
    linkTitle: "人気のMac向けバッテリーアプリを比較",
    linkDescription: "BatteryCountdown、AlDente、coconutBattery、Battery Health 2、Batteries for Macの違いを確認。"
  }, {
    aldente: "AlDente：公式機能一覧",
    coconut: "coconutBattery：公式製品ページ",
    batteryHealth: "Battery Health 2：Mac App Store",
    batteries: "Batteries for Mac：公式製品ページ"
  }),

  ko: article({
    title: "Mac용 인기 배터리 앱 비교 | BatteryCountdown",
    description: "BatteryCountdown과 AlDente, coconutBattery, Battery Health 2, Batteries for Mac을 비교해 알맞은 앱을 선택하세요.",
    ogDescription: "인기 Mac 배터리 앱과 각 앱의 강점을 공정하게 비교합니다.",
    h1: "BatteryCountdown과 인기 Mac 배터리 앱 비교",
    lead: "BatteryCountdown, AlDente, coconutBattery, Battery Health 2, Batteries for Mac은 서로 다른 문제를 해결합니다. 종료 카운트다운, 충전 제어, 진단, 상세 통계, 여러 기기 모니터링 중 무엇이 필요한지가 선택 기준입니다.",
    answerParagraphs: [
      "BatteryCountdown은 배터리 부족으로 Mac이 종료될 수 있기까지 얼마나 남았는지 알고 싶은 사용자를 위한 앱입니다. 실시간 예상 시간이 메뉴 막대에 직접 표시되고 사용자가 선택한 잔량에서 시작되며, 별도 대시보드보다 macOS의 작은 일부처럼 느껴지도록 설계되었습니다.",
      "다른 앱은 다른 작업에 강합니다. AlDente는 충전 동작을 제어하고, coconutBattery는 배터리 상태를 진단하며, Battery Health 2는 폭넓은 통계를 보여 주고, Batteries for Mac은 여러 기기를 모니터링합니다. BatteryCountdown은 의도적으로 단순하며 마지막 저전력 시간에 집중합니다."
    ],
    comparisonTitle: "Mac 배터리 앱 비교",
    comparisonIntro: "각 개발사가 현재 공개한 기능 설명을 기준으로 비교했습니다. 기능과 가격은 바뀔 수 있으므로 구매 전 연결된 공식 페이지를 확인하세요.",
    comparisonHeaders: ["앱", "주요 목적", "유용한 경우", "BatteryCountdown과의 차이"],
    comparisonRows: [
      ["BatteryCountdown", "저전력 종료 전 실시간 예상 시간", "메뉴 막대에 통합된 깔끔하고 조절 가능한 경고", "이것이 핵심 기능입니다. 잔량을 항상 표시할 수 있고 Charger Run Mode도 제공합니다."],
      ["AlDente", "MacBook 충전 동작 관리", "충전 한도, 방전 모드, 열 보호, 일정, 보정", "AlDente는 충전을 더 깊게 제어합니다. BatteryCountdown은 충전을 건드리지 않고 배터리가 끝나기 전에 경고합니다."],
      ["coconutBattery", "배터리 상태와 기기 진단", "용량, 사이클, 사용 기간, 온도, 기록, iPhone/iPad 정보", "coconutBattery는 상세 진단용입니다. BatteryCountdown은 더 가볍고 저전력 시 행동에 초점을 둡니다."],
      ["Battery Health 2", "상세 MacBook 배터리 통계", "충전량, 용량, 남은 시간, 전력 사용, 사이클, 알림, 선택형 기록 그래프", "Battery Health 2는 정보를 폭넓게 보여 줍니다. BatteryCountdown은 조절 가능한 종료 카운트다운을 메뉴 막대의 중심으로 만듭니다."],
      ["Batteries for Mac", "여러 기기의 배터리 모니터링", "iPhone, iPad, AirPods, Beats, Bluetooth 기기의 잔량과 알림", "Batteries는 여러 기기를 함께 보기에 적합합니다. BatteryCountdown은 Mac 자체와 저전력 종료 위험에 집중합니다."]
    ],
    steps: [
      "Mac이 종료될 수 있기 전 작업 시간이 궁금하다면 BatteryCountdown을 선택하세요.",
      "충전 한도와 충전 동작 제어가 우선이라면 AlDente 같은 충전 관리 앱을 선택하세요.",
      "상태, 용량, 사이클, 전력, 기록이 필요하면 coconutBattery 또는 Battery Health 2를 선택하세요.",
      "여러 Apple 및 Bluetooth 기기 잔량이 목적이면 Batteries for Mac을 선택하세요."
    ],
    whyParagraphs: [
      "5%라는 숫자만으로는 여유가 있는지 몇 분뿐인지 알기 어렵습니다. BatteryCountdown은 남은 전력을 실시간 시간으로 바꾸고 Mac의 소비 전력이 달라지면 예상도 갱신합니다.",
      "시작 잔량을 조절할 수 있어 시간이 더 필요하면 일찍, 평소에는 조용히 두고 싶으면 임계 수준부터 표시할 수 있습니다. 아이콘을 %가 포함된 잔량으로 바꿔 항상 표시할 수도 있습니다.",
      "목표는 절제된 디자인입니다. macOS 메뉴 막대에 자연스럽게 들어가는 가벼운 도구이며, 완전한 진단 제품이나 충전 제어 앱을 대체하려 하지 않습니다."
    ],
    settings: [
      "1%~20% 사이에서 카운트다운 시작 잔량 선택.",
      "저전력 종료까지의 예상 시간을 메뉴 막대에 표시.",
      "아이콘을 % 기호가 포함된 깔끔한 잔량 표시로 교체.",
      "전원 연결 중 완충까지의 예상 시간 확인.",
      "계정이 필요 없는 로컬 전용 유틸리티."
    ],
    chargerTitle: "Charger Run Mode란?",
    chargerBody: "Charger Run Mode는 조용한 메뉴 막대 타이머만으로 부족한 순간을 위한 선택형 고가시성 경고입니다. 큰 카운트다운, 소리, 충전기를 가지러 가는 재미있는 연출을 결합하며 일반 모드는 계속 단순하고 방해가 적습니다.",
    chargerLink: "Charger Run Mode 데모 보기",
    quick: [
      ["BatteryCountdown이 AlDente를 대체하나요?", "아닙니다. AlDente는 충전을 관리하고 BatteryCountdown은 저전력 종료 전 남은 시간을 경고합니다."],
      ["배터리 상태와 사이클을 보여 주나요?", "아닙니다. 상세 진단에는 coconutBattery나 Battery Health 2가 더 적합합니다. BatteryCountdown은 시간과 경고에 집중합니다."],
      ["잔량을 항상 표시할 수 있나요?", "네. 메뉴 막대 아이콘을 % 기호가 포함된 깔끔한 잔량 표시로 바꿀 수 있습니다."],
      ["종료 시간이 정확히 보장되나요?", "아닙니다. 전력 사용량은 변합니다. BatteryCountdown은 상황에 맞춰 갱신되는 실시간 예상 시간을 보여 줍니다."]
    ],
    sourcesTitle: "공식 제품 출처",
    finalTitle: "마지막 몇 분을 위해 만든 배터리 유틸리티를 선택하세요.",
    finalBody: "BatteryCountdown은 조절 가능한 저전력 예상 시간을 가장 눈에 잘 띄는 Mac 메뉴 막대에 표시합니다.",
    linkTitle: "인기 Mac 배터리 앱 비교",
    linkDescription: "BatteryCountdown, AlDente, coconutBattery, Battery Health 2, Batteries for Mac의 차이를 확인하세요."
  }, {
    aldente: "AlDente: 공식 기능 안내",
    coconut: "coconutBattery: 공식 제품 페이지",
    batteryHealth: "Battery Health 2: Mac App Store 페이지",
    batteries: "Batteries for Mac: 공식 제품 페이지"
  }),

  nb: article({
    title: "Beste batteri-apper for Mac sammenlignet | BatteryCountdown",
    description: "Sammenlign BatteryCountdown med AlDente, coconutBattery, Battery Health 2 og Batteries for Mac for å finne riktig batteriverktøy.",
    ogDescription: "En rettferdig sammenligning av kjente batteri-apper for Mac og hva de gjør best.",
    h1: "BatteryCountdown mot populære batteri-apper for Mac",
    lead: "BatteryCountdown, AlDente, coconutBattery, Battery Health 2 og Batteries for Mac løser ulike batteribehov. Riktig valg avhenger av om du trenger nedtelling til avslåing, ladestyring, batteridiagnostikk, detaljert statistikk eller overvåking av flere enheter.",
    answerParagraphs: [
      "BatteryCountdown er det fokuserte valget for deg som vil vite hvor mye tid som gjenstår før lavt batteri kan slå av Mac-en. Det levende estimatet ligger direkte i menylinjen, kan starte ved et batterinivå brukeren velger, og er laget for å oppleves som en liten integrert del av macOS fremfor et separat batteridashboard.",
      "De andre appene er sterkere til andre oppgaver. AlDente styrer ladingen, coconutBattery undersøker batterihelsen, Battery Health 2 viser et bredere sett med statistikk, og Batteries for Mac overvåker flere enheter. BatteryCountdown holder seg bevisst enkel og fokuserer på de siste minuttene med lavt batteri."
    ],
    comparisonTitle: "Sammenligning av batteri-apper for Mac",
    comparisonIntro: "Sammenligningen bygger på funksjonene utviklerne beskriver på sine offisielle sider i dag. Funksjoner og priser kan endres, så sjekk kildene før kjøp.",
    comparisonHeaders: ["App", "Hovedfokus", "Nyttig for", "Forskjellen fra BatteryCountdown"],
    comparisonRows: [
      ["BatteryCountdown", "Levende tidsestimat før avslåing ved lavt batteri", "Et rent, justerbart varsel integrert i menylinjen", "Dette er hovedoppgaven. Appen kan også vise batteriprosent hele tiden og tilbyr Charger Run Mode."],
      ["AlDente", "Styre hvordan en MacBook lades", "Ladegrenser, utlading, varmebeskyttelse, tidsplaner og kalibrering", "AlDente gir langt dypere ladestyring. BatteryCountdown styrer ikke ladingen; den varsler før batteriet går tomt."],
      ["coconutBattery", "Batterihelse og enhetsdiagnostikk", "Kapasitet, sykluser, alder, temperatur, historikk og målinger fra iPhone eller iPad", "coconutBattery gir dypere diagnostikk. BatteryCountdown er lettere og handlingsrettet når batteriet er lavt."],
      ["Battery Health 2", "Detaljert MacBook-batteristatistikk", "Ladenivå, kapasitet, gjenværende tid, strømbruk, sykluser, varsler og valgfri historikk", "Battery Health 2 gir et bredere informasjonsbilde. BatteryCountdown gjør den justerbare nedtellingen til hovedopplevelsen i menylinjen."],
      ["Batteries for Mac", "Overvåke batterier på flere enheter", "Batterinivåer og varsler for iPhone, iPad, AirPods, Beats og Bluetooth-enheter", "Batteries er bedre for å se mange enheter samlet. BatteryCountdown konsentrerer seg om Mac-en og faren for avslåing."]
    ],
    steps: [
      "Velg BatteryCountdown hvis spørsmålet ditt er hvor mye arbeidstid du har før Mac-en kan slå seg av.",
      "Velg en ladestyrer som AlDente hvis ladegrenser og kontroll over lademønsteret er viktigst.",
      "Velg coconutBattery eller Battery Health 2 når du vil se batterihelse, kapasitet, sykluser, strømdata eller historikk.",
      "Velg Batteries for Mac når hovedmålet er å følge batterinivået på flere Apple- og Bluetooth-enheter."
    ],
    whyParagraphs: [
      "Batteriprosent alene sier ikke om 5 % betyr god tid eller bare noen få minutter. BatteryCountdown gjør den gjenværende ladingen om til et levende tidsestimat som oppdateres når strømbruken på Mac-en endrer seg.",
      "Startnivået kan justeres. Brukere som trenger mer tid kan starte tidligere, mens andre kan holde menylinjen rolig til nivået er kritisk. Batteriprosenten kan også erstatte appikonet og være synlig hele tiden.",
      "Designmålet er tilbakeholdenhet: et lett verktøy som hører hjemme i macOS-menylinjen og viser flere valg først når du åpner det. Appen prøver ikke å erstatte full diagnostikk eller ladestyring."
    ],
    settings: [
      "Velg batterinivået der nedtellingen starter, fra 1 % til 20 %.",
      "Vis anslått tid til avslåing ved lavt batteri direkte i menylinjen.",
      "Erstatt menylinjeikonet med en ren batteriprosent inkludert %-tegnet.",
      "Se anslått tid til fulladet når Mac-en er koblet til strøm.",
      "Bruk en lokal utility-app som ikke krever konto."
    ],
    chargerTitle: "Hva er Charger Run Mode?",
    chargerBody: "Charger Run Mode er BatteryCountdown sitt valgfrie og mer synlige varsel for øyeblikk der en rolig menylinjetimer ikke er nok. Modusen kombinerer en tydelig nedtelling med lyd og en leken presentasjon om å hente laderen, mens normalmodus forblir enkel og diskret.",
    chargerLink: "Se demoen av Charger Run Mode",
    quick: [
      ["Er BatteryCountdown en erstatning for AlDente?", "Nei. AlDente styrer ladingen; BatteryCountdown varsler om tiden som gjenstår før en mulig avslåing ved lavt batteri."],
      ["Viser BatteryCountdown batterihelse og sykluser?", "Nei. coconutBattery eller Battery Health 2 passer bedre for dyp diagnostikk. BatteryCountdown fokuserer på tid og varsling."],
      ["Kan BatteryCountdown vise prosent hele tiden?", "Ja. Menylinjeikonet kan erstattes med en ren prosentvisning som inkluderer %-tegnet."],
      ["Er tidspunktet for avslåing garantert nøyaktig?", "Nei. Strømbruken endrer seg. BatteryCountdown viser et levende estimat og oppdaterer det når forholdene endres."]
    ],
    sourcesTitle: "Offisielle produktkilder",
    finalTitle: "Velg batteriverktøyet som er laget for de siste minuttene.",
    finalBody: "BatteryCountdown holder det justerbare tidsestimatet der det er lettest å legge merke til: direkte i menylinjen på Mac-en.",
    linkTitle: "Sammenlign populære batteri-apper for Mac",
    linkDescription: "Se forskjellen mellom BatteryCountdown, AlDente, coconutBattery, Battery Health 2 og Batteries for Mac."
  }, {
    aldente: "AlDente: offisiell funksjonsoversikt",
    coconut: "coconutBattery: offisiell produktside",
    batteryHealth: "Battery Health 2: oppføring i Mac App Store",
    batteries: "Batteries for Mac: offisiell produktside"
  }),

  "pt-BR": article({
    title: "Apps de bateria para Mac: comparativo | BatteryCountdown",
    description: "Compare BatteryCountdown com AlDente, coconutBattery, Battery Health 2 e Batteries for Mac para escolher o utilitário ideal.",
    ogDescription: "Uma comparação justa dos apps de bateria mais conhecidos para Mac e seus pontos fortes.",
    h1: "BatteryCountdown versus apps populares de bateria para Mac",
    lead: "BatteryCountdown, AlDente, coconutBattery, Battery Health 2 e Batteries for Mac resolvem problemas diferentes. A escolha depende de você precisar de contagem até o desligamento, controle de carga, diagnóstico, estatísticas ou vários dispositivos.",
    answerParagraphs: [
      "O BatteryCountdown é a opção focada para quem quer saber quanto tempo falta antes que a bateria fraca possa desligar o Mac. A estimativa ao vivo fica na barra de menus, pode começar no nível escolhido pelo usuário e foi criada para parecer uma pequena parte do macOS, não outro painel separado.",
      "Os demais apps são melhores em outras tarefas. O AlDente controla o carregamento, o coconutBattery examina a saúde, o Battery Health 2 mostra mais estatísticas e o Batteries for Mac monitora vários dispositivos. O BatteryCountdown permanece simples de propósito e se concentra nos minutos finais."
    ],
    comparisonTitle: "Comparativo de apps de bateria para Mac",
    comparisonIntro: "A comparação usa as funções atualmente publicadas por cada desenvolvedor. Recursos e preços podem mudar; consulte as páginas oficiais antes de comprar.",
    comparisonHeaders: ["App", "Foco principal", "Útil para", "Diferença do BatteryCountdown"],
    comparisonRows: [
      ["BatteryCountdown", "Estimativa ao vivo até o desligamento por bateria fraca", "Aviso limpo e configurável integrado à barra de menus", "Essa é sua função principal. Também pode exibir a porcentagem sempre e oferece Charger Run Mode."],
      ["AlDente", "Gerenciar como o MacBook carrega", "Limites, descarga, proteção térmica, horários e calibração", "O AlDente controla a carga com profundidade. O BatteryCountdown não altera o carregamento; avisa antes que a bateria acabe."],
      ["coconutBattery", "Saúde da bateria e diagnóstico", "Capacidade, ciclos, idade, temperatura, histórico e dados de iPhone/iPad", "O coconutBattery oferece diagnóstico profundo. O BatteryCountdown é mais leve e voltado à ação com bateria baixa."],
      ["Battery Health 2", "Estatísticas detalhadas do MacBook", "Carga, capacidade, tempo restante, consumo, ciclos, alertas e histórico opcional", "O Battery Health 2 oferece uma visão mais ampla. O BatteryCountdown torna a contagem configurável a experiência principal da barra."],
      ["Batteries for Mac", "Monitorar baterias de vários dispositivos", "Níveis e alertas para iPhone, iPad, AirPods, Beats e Bluetooth", "O Batteries é melhor para vários dispositivos. O BatteryCountdown foca no Mac e no risco de desligamento."]
    ],
    steps: [
      "Escolha o BatteryCountdown se a pergunta principal é quanto tempo de trabalho resta antes de o Mac poder desligar.",
      "Escolha o AlDente se controlar limites e comportamento de carregamento for a prioridade.",
      "Escolha coconutBattery ou Battery Health 2 para saúde, capacidade, ciclos, energia ou histórico.",
      "Escolha Batteries for Mac para acompanhar principalmente vários dispositivos Apple e Bluetooth."
    ],
    whyParagraphs: [
      "A porcentagem sozinha não mostra se 5% significam uma margem confortável ou poucos minutos. O BatteryCountdown converte a carga restante em estimativa de tempo atualizada quando o consumo muda.",
      "O ponto inicial é configurável: comece mais cedo se precisar de tempo ou apenas no nível crítico. A porcentagem também pode substituir o ícone e ficar sempre visível.",
      "O objetivo do design é a discrição: um utilitário leve que combina com a barra de menus do macOS. Ele não tenta substituir um pacote de diagnóstico ou controlador de carga completo."
    ],
    settings: [
      "Escolher o início da contagem entre 1% e 20%.",
      "Mostrar o tempo estimado até o desligamento na barra de menus.",
      "Substituir o ícone por uma porcentagem limpa com o sinal %.",
      "Ver o tempo estimado até a carga completa quando conectado.",
      "Usar um utilitário local sem necessidade de conta."
    ],
    chargerTitle: "O que é o Charger Run Mode?",
    chargerBody: "O Charger Run Mode é o alerta opcional e mais chamativo do BatteryCountdown para quando um timer discreto não basta. Ele combina contagem destacada, som e uma apresentação divertida para buscar o carregador; o modo normal continua simples.",
    chargerLink: "Ver a demonstração do Charger Run Mode",
    quick: [
      ["O BatteryCountdown substitui o AlDente?", "Não. O AlDente gerencia o carregamento; o BatteryCountdown avisa quanto tempo resta antes de um possível desligamento."],
      ["Ele mostra saúde e ciclos da bateria?", "Não. Para diagnóstico profundo, coconutBattery ou Battery Health 2 são mais indicados. O BatteryCountdown foca em tempo e alertas."],
      ["Pode mostrar a porcentagem sempre?", "Sim. O ícone pode ser substituído por uma porcentagem limpa com o sinal %."],
      ["O horário de desligamento é garantido?", "Não. O consumo muda. O BatteryCountdown mostra uma estimativa ao vivo que se adapta às condições."]
    ],
    sourcesTitle: "Fontes oficiais dos produtos",
    finalTitle: "Escolha o utilitário criado para os minutos finais.",
    finalBody: "O BatteryCountdown mantém a estimativa configurável onde é mais fácil notar: diretamente na barra de menus do Mac.",
    linkTitle: "Comparar apps populares de bateria para Mac",
    linkDescription: "Veja as diferenças entre BatteryCountdown, AlDente, coconutBattery, Battery Health 2 e Batteries for Mac."
  }, {
    aldente: "AlDente: visão oficial dos recursos",
    coconut: "coconutBattery: página oficial do produto",
    batteryHealth: "Battery Health 2: página na Mac App Store",
    batteries: "Batteries for Mac: página oficial do produto"
  }),

  ru: article({
    title: "Приложения для батареи Mac: сравнение | BatteryCountdown",
    description: "Сравните BatteryCountdown с AlDente, coconutBattery, Battery Health 2 и Batteries for Mac и выберите подходящую утилиту.",
    ogDescription: "Честное сравнение популярных приложений для батареи Mac и их сильных сторон.",
    h1: "BatteryCountdown и популярные приложения для батареи Mac",
    lead: "BatteryCountdown, AlDente, coconutBattery, Battery Health 2 и Batteries for Mac решают разные задачи. Выбор зависит от того, нужен ли отсчет до выключения, управление зарядкой, диагностика, подробная статистика или мониторинг нескольких устройств.",
    answerParagraphs: [
      "BatteryCountdown создан для тех, кто хочет знать, сколько времени осталось до возможного выключения Mac из-за низкого заряда. Живая оценка находится прямо в строке меню, запускается при выбранном пользователем уровне и выглядит как небольшая часть macOS, а не отдельная панель.",
      "Другие приложения сильнее в иных задачах. AlDente управляет зарядкой, coconutBattery анализирует состояние, Battery Health 2 показывает больше статистики, а Batteries for Mac следит за несколькими устройствами. BatteryCountdown намеренно остается простым и сосредоточен на последних минутах."
    ],
    comparisonTitle: "Сравнение приложений для батареи Mac",
    comparisonIntro: "Сравнение основано на функциях, которые разработчики публикуют сейчас. Возможности и цены могут меняться — перед покупкой проверьте официальные страницы по ссылкам.",
    comparisonHeaders: ["Приложение", "Главная задача", "Для чего подходит", "Отличие от BatteryCountdown"],
    comparisonRows: [
      ["BatteryCountdown", "Живая оценка времени до выключения при низком заряде", "Чистое настраиваемое предупреждение в строке меню", "Это главная функция. Также можно всегда показывать процент и использовать Charger Run Mode."],
      ["AlDente", "Управление зарядкой MacBook", "Лимиты, разрядка, защита от перегрева, расписания и калибровка", "AlDente глубоко управляет зарядкой. BatteryCountdown ее не меняет, а предупреждает до разрядки."],
      ["coconutBattery", "Состояние батареи и диагностика", "Емкость, циклы, возраст, температура, история и данные iPhone/iPad", "coconutBattery дает глубокую диагностику. BatteryCountdown легче и ориентирован на действие при низком заряде."],
      ["Battery Health 2", "Подробная статистика MacBook", "Заряд, емкость, оставшееся время, расход, циклы, уведомления и история", "Battery Health 2 показывает больше данных. BatteryCountdown делает настраиваемый отсчет главным элементом строки меню."],
      ["Batteries for Mac", "Мониторинг батарей нескольких устройств", "Уровни и уведомления для iPhone, iPad, AirPods, Beats и Bluetooth", "Batteries лучше для множества устройств. BatteryCountdown сосредоточен на Mac и риске выключения."]
    ],
    steps: [
      "Выберите BatteryCountdown, если важно знать, сколько рабочего времени осталось до возможного выключения Mac.",
      "Выберите AlDente, если приоритет — лимиты и управление процессом зарядки.",
      "Выберите coconutBattery или Battery Health 2 для состояния, емкости, циклов, мощности и истории.",
      "Выберите Batteries for Mac, если нужно отслеживать несколько устройств Apple и Bluetooth."
    ],
    whyParagraphs: [
      "Одни 5% не говорят, есть ли запас времени или осталось несколько минут. BatteryCountdown превращает заряд в живую оценку времени и обновляет ее при изменении энергопотребления Mac.",
      "Порог настраивается: начните раньше, если нужен запас, или только на критическом уровне. Процент также может заменить значок и оставаться видимым постоянно.",
      "Цель дизайна — сдержанность: легкая утилита, естественная для строки меню macOS. Она не пытается заменить полный диагностический комплекс или контроллер зарядки."
    ],
    settings: [
      "Выбрать начало отсчета от 1% до 20%.",
      "Показывать время до возможного выключения в строке меню.",
      "Заменить значок чистым процентом со знаком %.",
      "Видеть оценку времени до полной зарядки при подключении питания.",
      "Использовать локальную утилиту без учетной записи."
    ],
    chargerTitle: "Что такое Charger Run Mode?",
    chargerBody: "Charger Run Mode — дополнительное и более заметное предупреждение BatteryCountdown для случаев, когда тихого таймера недостаточно. Оно сочетает крупный отсчет, звук и игровую подачу о необходимости принести зарядку; обычный режим остается простым.",
    chargerLink: "Посмотреть демо Charger Run Mode",
    quick: [
      ["BatteryCountdown заменяет AlDente?", "Нет. AlDente управляет зарядкой, а BatteryCountdown предупреждает об оставшемся времени до возможного выключения."],
      ["Показывает ли он состояние и циклы?", "Нет. Для глубокой диагностики лучше coconutBattery или Battery Health 2. BatteryCountdown сосредоточен на времени и предупреждениях."],
      ["Можно всегда показывать процент?", "Да. Значок в строке меню можно заменить ясным значением со знаком %."],
      ["Время выключения гарантированно точное?", "Нет. Энергопотребление меняется. BatteryCountdown показывает живую оценку и обновляет ее по условиям."]
    ],
    sourcesTitle: "Официальные источники продуктов",
    finalTitle: "Выберите утилиту, созданную для последних минут.",
    finalBody: "BatteryCountdown держит настраиваемую оценку там, где ее легче заметить: прямо в строке меню Mac.",
    linkTitle: "Сравнить популярные приложения для батареи Mac",
    linkDescription: "Различия между BatteryCountdown, AlDente, coconutBattery, Battery Health 2 и Batteries for Mac."
  }, {
    aldente: "AlDente: официальный обзор функций",
    coconut: "coconutBattery: официальная страница продукта",
    batteryHealth: "Battery Health 2: страница в Mac App Store",
    batteries: "Batteries for Mac: официальная страница продукта"
  }),

  "zh-Hans": article({
    title: "Mac 热门电池应用对比 | BatteryCountdown",
    description: "对比 BatteryCountdown、AlDente、coconutBattery、Battery Health 2 和 Batteries for Mac，选择合适的工具。",
    ogDescription: "公平对比热门 Mac 电池应用及其各自擅长的用途。",
    h1: "BatteryCountdown 与热门 Mac 电池应用对比",
    lead: "BatteryCountdown、AlDente、coconutBattery、Battery Health 2 和 Batteries for Mac 解决不同问题。你需要的是关机倒计时、充电控制、电池诊断、详细统计，还是多设备监控，将决定合适的选择。",
    answerParagraphs: [
      "BatteryCountdown 适合想知道低电量可能导致 Mac 关机前还剩多少时间的用户。实时估算直接显示在菜单栏中，可从用户选择的电量开始，并以融入 macOS 的小工具为设计目标，而不是独立的复杂面板。",
      "其他应用在不同任务上更强。AlDente 控制充电行为，coconutBattery 检查电池健康，Battery Health 2 展示更广泛的统计，Batteries for Mac 监控多台设备。BatteryCountdown 有意保持简单，专注于低电量的最后阶段。"
    ],
    comparisonTitle: "Mac 电池应用比较",
    comparisonIntro: "本表基于各开发者目前公布的功能说明。功能和价格可能变化，购买前请查看链接中的官方页面。",
    comparisonHeaders: ["应用", "主要重点", "适合用途", "与 BatteryCountdown 的区别"],
    comparisonRows: [
      ["BatteryCountdown", "低电量关机前的实时预计时间", "集成在菜单栏中的简洁、可调提醒", "这是核心功能。还可始终显示百分比，并提供 Charger Run Mode。"],
      ["AlDente", "管理 MacBook 充电行为", "充电上限、放电模式、温度保护、计划和校准", "AlDente 提供更深入的充电控制。BatteryCountdown 不控制充电，而是在电池耗尽前提醒。"],
      ["coconutBattery", "电池健康与设备诊断", "容量、循环次数、年龄、温度、历史以及 iPhone/iPad 数据", "coconutBattery 提供深入诊断。BatteryCountdown 更轻量，重点是低电量时及时行动。"],
      ["Battery Health 2", "详细的 MacBook 电池统计", "电量、容量、剩余时间、功耗、循环、通知和可选历史图表", "Battery Health 2 展示更多信息。BatteryCountdown 把可调关机倒计时作为菜单栏的主要体验。"],
      ["Batteries for Mac", "监控多台设备的电池", "iPhone、iPad、AirPods、Beats 和蓝牙设备的电量与提醒", "Batteries 更适合同时查看多台设备。BatteryCountdown 专注于 Mac 本身和低电量关机风险。"]
    ],
    steps: [
      "如果主要问题是 Mac 可能关机前还有多少工作时间，请选择 BatteryCountdown。",
      "如果优先考虑充电上限和充电行为控制，请选择 AlDente 等充电管理工具。",
      "如果需要健康、容量、循环、功率或历史信息，请选择 coconutBattery 或 Battery Health 2。",
      "如果主要想查看多台 Apple 和蓝牙设备的电量，请选择 Batteries for Mac。"
    ],
    whyParagraphs: [
      "仅看 5% 无法判断还有充足时间还是只剩几分钟。BatteryCountdown 将剩余电量转为实时预计时间，并在 Mac 功耗变化时更新。",
      "开始电量可调：需要更多准备时间时可以提前开始，也可以等到临界电量再显示。应用图标还可替换为带 % 符号的电量百分比并始终可见。",
      "设计目标是克制：一款自然融入 macOS 菜单栏的轻量工具。它不试图取代完整诊断套件或充电控制器。"
    ],
    settings: [
      "在 1% 到 20% 之间选择倒计时开始电量。",
      "在菜单栏显示低电量关机前的预计时间。",
      "将图标替换为带 % 符号的简洁电量显示。",
      "接通电源时查看距离充满的预计时间。",
      "使用无需账户的本地工具。"
    ],
    chargerTitle: "什么是 Charger Run Mode？",
    chargerBody: "Charger Run Mode 是 BatteryCountdown 的可选醒目提醒，适合安静的菜单栏计时器还不够明显的时刻。它结合大号倒计时、声音和取充电器的趣味演示，而普通模式仍保持简单、不打扰。",
    chargerLink: "观看 Charger Run Mode 演示",
    quick: [
      ["BatteryCountdown 能替代 AlDente 吗？", "不能。AlDente 管理充电，BatteryCountdown 提醒低电量关机前的剩余时间，两者用途不同。"],
      ["它显示电池健康和循环次数吗？", "不显示。深入诊断更适合 coconutBattery 或 Battery Health 2。BatteryCountdown 专注于时间和提醒。"],
      ["可以一直显示电量百分比吗？", "可以。菜单栏图标可替换为带 % 符号的清晰百分比。"],
      ["关机时间保证完全准确吗？", "不能保证。功耗会变化。BatteryCountdown 显示实时估算，并随情况更新。"]
    ],
    sourcesTitle: "官方产品资料",
    finalTitle: "选择专为最后几分钟设计的电池工具。",
    finalBody: "BatteryCountdown 将可调低电量时间估算放在最容易注意到的位置：Mac 菜单栏。",
    linkTitle: "对比热门 Mac 电池应用",
    linkDescription: "了解 BatteryCountdown、AlDente、coconutBattery、Battery Health 2 和 Batteries for Mac 的区别。"
  }, {
    aldente: "AlDente：官方功能介绍",
    coconut: "coconutBattery：官方产品页面",
    batteryHealth: "Battery Health 2：Mac App Store 页面",
    batteries: "Batteries for Mac：官方产品页面"
  })
};

module.exports = {
  comparisonGuidePageKey,
  comparisonGuideSlugs,
  comparisonGuideContent
};
