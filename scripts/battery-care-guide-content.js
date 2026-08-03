const batteryCarePageKey = "guideLithiumBatteryCare";

const batteryCareSlugs = {
  en: "how-to-care-for-macbook-lithium-battery",
  de: "macbook-lithium-akku-richtig-pflegen",
  es: "como-cuidar-bateria-litio-macbook",
  fr: "entretenir-batterie-lithium-macbook",
  hi: "macbook-lithium-battery-care",
  it: "come-prendersi-cura-batteria-litio-macbook",
  ja: "macbook-lithium-battery-care",
  ko: "macbook-lithium-battery-care",
  nb: "slik-tar-du-vare-pa-litiumbatteriet-i-macbook",
  "pt-BR": "como-cuidar-bateria-litio-macbook",
  ru: "macbook-lithium-battery-care",
  "zh-Hans": "macbook-lithium-battery-care"
};

const sourceUrls = {
  charging: "https://support.apple.com/en-us/102338",
  lifespan: "https://www.apple.com/batteries/maximizing-performance/",
  health: "https://support.apple.com/en-us/102588"
};

function article(copy, sourceLabels) {
  return {
    ...copy,
    datePublished: "2026-07-21",
    dateModified: "2026-07-21",
    sources: [
      [sourceLabels.charging, sourceUrls.charging],
      [sourceLabels.lifespan, sourceUrls.lifespan],
      [sourceLabels.health, sourceUrls.health]
    ]
  };
}

const batteryCareContent = {
  en: article({
    title: "How to Care for a MacBook Lithium Battery | BatteryCountdown",
    description: "Learn how to care for a MacBook lithium-ion battery, why prolonged deep discharge matters, and how to avoid leaving your Mac at 0%.",
    ogDescription: "Practical, evidence-based MacBook battery care without battery myths.",
    h1: "How to care for a MacBook lithium battery",
    lead: "Avoid leaving a MacBook fully discharged for a long time. Occasional low battery use is normal, but heat, prolonged storage at 0%, and unnecessary time at full charge can accelerate battery aging.",
    answerParagraphs: [
      "You do not need to panic when your Mac reaches a low percentage. Lithium-ion batteries are designed for everyday charging and discharging. The more important habit is to avoid storing the Mac fully discharged for days or weeks, because a battery left empty can enter a deep-discharge state.",
      "For daily use, charge when it is practical, keep the Mac away from excessive heat, and leave Optimized Battery Charging enabled. BatteryCountdown can help by warning you earlier and showing the estimated time before a low-battery shutdown, so it is easier to plug in before the Mac reaches 0%."
    ],
    steps: [
      "Plug in before the Mac is left completely empty for an extended period; one brief visit to a low percentage is not an emergency.",
      "Avoid charging or using the Mac in excessive heat. Apple lists 10–35°C as the ambient operating range for MacBook computers.",
      "Keep Optimized Battery Charging enabled. On supported Macs, a charge limit can also reduce unnecessary time spent at full charge.",
      "For storage longer than a few months, shut the Mac down at about 50% charge and keep it in a cool, dry place. Apple advises returning it to about 50% every six months.",
      "Use BatteryCountdown to choose an earlier low-battery trigger and see remaining time in the menu bar when you need a practical reminder."
    ],
    whyParagraphs: [
      "Battery aging is chemical. Apple says temperature history and charging pattern affect a battery's chemical age, so there is no single perfect percentage that guarantees a longer lifespan.",
      "A fully discharged battery continues to lose a small amount of charge while stored. If its voltage falls too far, it may enter deep discharge and become unable to hold a charge. That is why long-term storage at 0% is different from briefly using the Mac at a low percentage.",
      "The opposite extreme also matters during storage: Apple warns that keeping a device fully charged for a long time can reduce capacity. Around 50% is the recommended starting point for long-term storage."
    ],
    settings: [
      "Choose a countdown trigger between 1% and 20% based on how much time you usually need to find a charger.",
      "Keep the remaining-time countdown visible in the menu bar when battery is low.",
      "Use the charging estimate to see roughly how long remains until the Mac is fully charged.",
      "Treat BatteryCountdown as an awareness tool. It does not control macOS charging or promise to extend battery lifespan."
    ],
    quick: [
      ["Is it bad to let a MacBook reach 0%?", "Occasionally reaching a very low level is not a crisis. The greater concern is leaving the Mac fully discharged for an extended period."],
      ["What percentage should a MacBook have during storage?", "Apple recommends about 50% for long-term storage in a cool, dry place."],
      ["Should I always charge to 100%?", "No. macOS manages charging automatically, and Optimized Battery Charging can reduce the time the battery spends fully charged."],
      ["Can BatteryCountdown improve battery health?", "It cannot change battery chemistry, but its earlier warning can help you avoid accidentally leaving the Mac empty and remind you to connect power in time."]
    ],
    sourcesTitle: "Sources and further reading",
    finalTitle: "Get a useful reminder before the battery is empty.",
    finalBody: "BatteryCountdown shows a live menu bar estimate before low battery may shut down your Mac, helping you connect the charger in time.",
    linkTitle: "Care for your MacBook lithium battery",
    linkDescription: "Avoid prolonged deep discharge and follow practical battery-care advice."
  }, {
    charging: "Apple Support: Optimized Battery Charging and Charge Limit on Mac",
    lifespan: "Apple: Maximizing Battery Life and Lifespan",
    health: "Apple Support: Battery health management in Mac laptops"
  }),

  de: article({
    title: "MacBook Lithium-Akku richtig pflegen | BatteryCountdown",
    description: "So pflegst du den Lithium-Ionen-Akku deines MacBook und vermeidest, dass der Mac lange vollständig entladen bleibt.",
    ogDescription: "Praktische, belegte Tipps zur MacBook-Akkupflege ohne Akku-Mythen.",
    h1: "So pflegst du den Lithium-Akku deines MacBook",
    lead: "Lass ein MacBook nicht über längere Zeit vollständig entladen liegen. Ein gelegentlich niedriger Akkustand ist normal, doch Hitze, lange Lagerung bei 0 % und unnötig lange Zeit bei voller Ladung können die Alterung beschleunigen.",
    answerParagraphs: [
      "Du musst nicht in Panik geraten, wenn dein Mac einen niedrigen Akkustand erreicht. Lithium-Ionen-Akkus sind für alltägliches Laden und Entladen ausgelegt. Wichtiger ist, den Mac nicht tage- oder wochenlang vollständig entladen zu lagern, da der Akku sonst in eine Tiefentladung geraten kann.",
      "Lade im Alltag, wenn es praktisch ist, vermeide starke Hitze und lass „Optimiertes Laden der Batterie“ aktiviert. BatteryCountdown kann früher warnen und die geschätzte Zeit bis zum Ausschalten anzeigen, damit du leichter vor 0 % ein Netzteil anschließt."
    ],
    steps: [
      "Schließe das Netzteil an, bevor der Mac längere Zeit völlig leer liegen bleibt; ein kurzer Abstecher in einen niedrigen Prozentbereich ist kein Notfall.",
      "Vermeide Laden und intensive Nutzung bei großer Hitze. Apple nennt 10–35 °C als Umgebungstemperatur für den Betrieb eines MacBook.",
      "Lass „Optimiertes Laden der Batterie“ aktiviert. Auf unterstützten Macs kann zusätzlich ein Ladelimit unnötige Zeit bei 100 % reduzieren.",
      "Für eine Lagerung über mehrere Monate: Mac bei ungefähr 50 % ausschalten und kühl sowie trocken lagern. Apple empfiehlt, den Akku alle sechs Monate wieder auf etwa 50 % zu bringen.",
      "Nutze BatteryCountdown für einen früheren Warnpunkt und eine sichtbare Restzeit in der Menüleiste."
    ],
    whyParagraphs: [
      "Akkualterung ist ein chemischer Prozess. Laut Apple beeinflussen Temperaturverlauf und Lademuster das chemische Alter; eine einzige perfekte Prozentzahl gibt es daher nicht.",
      "Auch ein ausgeschalteter, leer gelagerter Akku verliert langsam Ladung. Sinkt seine Spannung zu weit, kann eine Tiefentladung entstehen und der Akku möglicherweise keine Ladung mehr aufnehmen. Das unterscheidet lange Lagerung bei 0 % von kurzer Nutzung bei niedrigem Stand.",
      "Auch das andere Extrem ist bei der Lagerung relevant: Eine dauerhaft volle Batterie kann Kapazität verlieren. Für längere Lagerung empfiehlt Apple ungefähr 50 %."
    ],
    settings: [
      "Wähle je nach benötigter Zeit einen Startpunkt zwischen 1 % und 20 %.",
      "Lass die Restzeit bei niedrigem Akkustand in der Menüleiste sichtbar.",
      "Nutze beim Laden die Schätzung bis zur vollständigen Ladung.",
      "BatteryCountdown ist eine Erinnerungshilfe. Die App steuert das Laden nicht und verspricht keine längere Akkulebensdauer."
    ],
    quick: [
      ["Ist es schädlich, ein MacBook auf 0 % zu bringen?", "Ein gelegentlich sehr niedriger Stand ist keine Katastrophe. Problematischer ist es, den Mac längere Zeit vollständig entladen liegen zu lassen."],
      ["Mit welchem Akkustand sollte ein MacBook gelagert werden?", "Apple empfiehlt für längere Lagerung ungefähr 50 % an einem kühlen, trockenen Ort."],
      ["Sollte ich immer bis 100 % laden?", "Nein. macOS verwaltet das Laden automatisch, und optimiertes Laden kann die Zeit bei voller Ladung verkürzen."],
      ["Verbessert BatteryCountdown die Akkugesundheit?", "Die App verändert die Akkuchemie nicht. Ihre frühere Warnung kann aber helfen, unbeabsichtigtes langes Entladen zu vermeiden."]
    ],
    sourcesTitle: "Quellen und weitere Informationen",
    finalTitle: "Erhalte eine hilfreiche Warnung, bevor der Akku leer ist.",
    finalBody: "BatteryCountdown zeigt die geschätzte Restzeit bis zu einem möglichen Ausschalten direkt in der Menüleiste.",
    linkTitle: "MacBook Lithium-Akku pflegen",
    linkDescription: "Vermeide lange Tiefentladung und pflege den Akku mit sinnvollen Gewohnheiten."
  }, {
    charging: "Apple Support: Optimiertes Laden und Ladelimit auf dem Mac",
    lifespan: "Apple: Batterielaufzeit und Lebensdauer maximieren",
    health: "Apple Support: Batteriezustandsverwaltung bei Mac-Laptops"
  }),

  es: article({
    title: "Cómo cuidar la batería de litio de un MacBook | BatteryCountdown",
    description: "Aprende a cuidar la batería de iones de litio de tu MacBook y a evitar que permanezca descargada al 0 % durante demasiado tiempo.",
    ogDescription: "Consejos prácticos y fiables para cuidar la batería del MacBook.",
    h1: "Cómo cuidar la batería de litio de un MacBook",
    lead: "Evita dejar el MacBook completamente descargado durante mucho tiempo. Llegar ocasionalmente a un nivel bajo es normal, pero el calor, guardar el equipo al 0 % y mantenerlo lleno innecesariamente pueden acelerar el envejecimiento.",
    answerParagraphs: [
      "No hace falta alarmarse cuando el Mac llega a un porcentaje bajo. Las baterías de iones de litio están diseñadas para cargarse y descargarse en el uso diario. Lo importante es no guardar el Mac totalmente descargado durante días o semanas, porque la batería podría entrar en un estado de descarga profunda.",
      "En el uso diario, carga cuando te resulte práctico, evita el calor excesivo y mantén activada la carga optimizada. BatteryCountdown puede avisarte antes y mostrar el tiempo estimado hasta un apagado por batería baja para que conectes el cargador antes de llegar al 0 %."
    ],
    steps: [
      "Conecta el cargador antes de dejar el Mac completamente vacío durante un periodo prolongado; bajar brevemente a un porcentaje reducido no es una emergencia.",
      "Evita cargar o usar el Mac con calor excesivo. Apple indica un intervalo ambiental de 10–35 °C para usar un MacBook.",
      "Mantén activada la carga optimizada. En modelos compatibles, un límite de carga también reduce el tiempo innecesario al 100 %.",
      "Si vas a guardarlo varios meses, apágalo con aproximadamente un 50 % y déjalo en un lugar fresco y seco. Apple aconseja volver a dejarlo cerca del 50 % cada seis meses.",
      "Usa BatteryCountdown para elegir un aviso más temprano y ver el tiempo restante en la barra de menús."
    ],
    whyParagraphs: [
      "El envejecimiento de la batería es químico. Apple explica que el historial de temperatura y el patrón de carga influyen en la edad química, por lo que no existe un porcentaje perfecto que garantice una vida más larga.",
      "Una batería descargada sigue perdiendo una pequeña cantidad de energía mientras está guardada. Si el voltaje baja demasiado, puede entrar en descarga profunda y dejar de admitir carga. Por eso no es lo mismo usar brevemente el Mac con poca batería que guardarlo al 0 %.",
      "El extremo contrario también importa al guardar el equipo: mantenerlo completamente cargado durante mucho tiempo puede reducir la capacidad. Apple recomienda comenzar el almacenamiento prolongado cerca del 50 %."
    ],
    settings: [
      "Elige un punto de inicio entre el 1 % y el 20 % según el tiempo que necesites para encontrar un cargador.",
      "Mantén visible la cuenta atrás en la barra de menús cuando quede poca batería.",
      "Consulta la estimación de carga para saber aproximadamente cuánto falta para completar la batería.",
      "Usa BatteryCountdown como ayuda de aviso: no controla la carga de macOS ni promete alargar la vida de la batería."
    ],
    quick: [
      ["¿Es malo que un MacBook llegue al 0 %?", "Llegar ocasionalmente a un nivel muy bajo no es una crisis. El mayor riesgo es dejar el Mac completamente descargado durante mucho tiempo."],
      ["¿Con qué porcentaje debería guardarse un MacBook?", "Apple recomienda aproximadamente un 50 % para un almacenamiento prolongado en un lugar fresco y seco."],
      ["¿Debo cargar siempre hasta el 100 %?", "No. macOS gestiona la carga y la carga optimizada puede reducir el tiempo que la batería permanece llena."],
      ["¿BatteryCountdown mejora la salud de la batería?", "No cambia la química de la batería, pero un aviso temprano puede ayudarte a evitar que el Mac quede vacío por accidente."]
    ],
    sourcesTitle: "Fuentes y lecturas adicionales",
    finalTitle: "Recibe un aviso útil antes de agotar la batería.",
    finalBody: "BatteryCountdown muestra en la barra de menús una estimación en directo antes de que la batería baja pueda apagar el Mac.",
    linkTitle: "Cuidar la batería de litio del MacBook",
    linkDescription: "Evita la descarga profunda prolongada y aplica hábitos de carga prácticos."
  }, {
    charging: "Soporte de Apple: carga optimizada y límite de carga en el Mac",
    lifespan: "Apple: maximizar la autonomía y la vida útil de la batería",
    health: "Soporte de Apple: gestión de la salud de la batería en portátiles Mac"
  }),

  fr: article({
    title: "Entretenir la batterie lithium d’un MacBook | BatteryCountdown",
    description: "Découvrez comment préserver la batterie lithium-ion d’un MacBook et éviter de le laisser déchargé à 0 % trop longtemps.",
    ogDescription: "Des conseils pratiques et fiables pour préserver la batterie d’un MacBook.",
    h1: "Comment entretenir la batterie lithium d’un MacBook",
    lead: "Évitez de laisser un MacBook complètement déchargé pendant longtemps. Un niveau faible occasionnel est normal, mais la chaleur, un stockage prolongé à 0 % et un maintien inutile à pleine charge peuvent accélérer le vieillissement.",
    answerParagraphs: [
      "Il n’y a pas lieu de paniquer lorsque le Mac atteint un faible pourcentage. Les batteries lithium-ion sont conçues pour les cycles du quotidien. L’habitude importante consiste à ne pas stocker le Mac totalement déchargé pendant des jours ou des semaines, car la batterie peut alors entrer en décharge profonde.",
      "Au quotidien, rechargez lorsque c’est pratique, évitez la chaleur excessive et laissez la recharge optimisée activée. BatteryCountdown peut vous prévenir plus tôt et afficher le temps estimé avant une extinction liée à la batterie faible, afin de brancher le chargeur avant 0 %."
    ],
    steps: [
      "Branchez le Mac avant de le laisser complètement vide pendant une longue période ; un bref passage à un faible pourcentage n’est pas une urgence.",
      "Évitez de charger ou d’utiliser le Mac sous une chaleur excessive. Apple indique une température ambiante de 10 à 35 °C pour les MacBook.",
      "Gardez la recharge optimisée activée. Sur les Mac compatibles, une limite de charge réduit aussi le temps inutile passé à 100 %.",
      "Pour un stockage de plusieurs mois, éteignez le Mac à environ 50 % et placez-le dans un endroit frais et sec. Apple conseille de le ramener autour de 50 % tous les six mois.",
      "Utilisez BatteryCountdown pour choisir un seuil d’alerte plus précoce et voir le temps restant dans la barre des menus."
    ],
    whyParagraphs: [
      "Le vieillissement d’une batterie est chimique. Selon Apple, l’historique de température et les habitudes de recharge influencent son âge chimique ; aucun pourcentage unique ne garantit donc une meilleure longévité.",
      "Une batterie vide continue à perdre un peu de charge pendant le stockage. Si sa tension descend trop bas, elle peut entrer en décharge profonde et ne plus conserver la charge. C’est pourquoi un stockage prolongé à 0 % diffère d’une brève utilisation à faible niveau.",
      "L’extrême inverse compte aussi lors du stockage : rester longtemps à pleine charge peut réduire la capacité. Apple recommande environ 50 % au début d’un stockage prolongé."
    ],
    settings: [
      "Choisissez un seuil de démarrage entre 1 % et 20 % selon le temps nécessaire pour trouver un chargeur.",
      "Gardez le compte à rebours visible dans la barre des menus lorsque la batterie est faible.",
      "Consultez l’estimation de recharge pour savoir approximativement quand la batterie sera pleine.",
      "Considérez BatteryCountdown comme un outil de vigilance : l’app ne contrôle pas la recharge de macOS et ne promet pas d’allonger la durée de vie."
    ],
    quick: [
      ["Est-il mauvais de laisser un MacBook atteindre 0 % ?", "Atteindre occasionnellement un niveau très faible n’est pas dramatique. Le principal souci est de laisser le Mac totalement déchargé longtemps."],
      ["À quel niveau stocker un MacBook ?", "Apple recommande environ 50 % pour un stockage prolongé dans un endroit frais et sec."],
      ["Faut-il toujours charger à 100 % ?", "Non. macOS gère la recharge et la recharge optimisée peut réduire le temps passé à pleine charge."],
      ["BatteryCountdown améliore-t-il l’état de la batterie ?", "L’app ne change pas la chimie de la batterie, mais son alerte anticipée peut éviter de laisser le Mac vide par inadvertance."]
    ],
    sourcesTitle: "Sources et informations complémentaires",
    finalTitle: "Recevez une alerte utile avant que la batterie soit vide.",
    finalBody: "BatteryCountdown affiche dans la barre des menus une estimation en direct avant qu’une batterie faible puisse éteindre votre Mac.",
    linkTitle: "Entretenir la batterie lithium du MacBook",
    linkDescription: "Évitez la décharge profonde prolongée et adoptez de bonnes habitudes."
  }, {
    charging: "Assistance Apple : recharge optimisée et limite de recharge sur Mac",
    lifespan: "Apple : optimiser l’autonomie et la durée de vie de la batterie",
    health: "Assistance Apple : gestion de l’état de santé de la batterie des ordinateurs Mac portables"
  }),

  hi: article({
    title: "MacBook की लिथियम बैटरी की देखभाल कैसे करें | BatteryCountdown",
    description: "जानें कि MacBook की lithium-ion battery की देखभाल कैसे करें और उसे लंबे समय तक 0% पर छोड़ने से क्यों बचना चाहिए।",
    ogDescription: "MacBook battery care के व्यावहारिक और प्रमाण-आधारित सुझाव।",
    h1: "MacBook की लिथियम बैटरी की देखभाल कैसे करें",
    lead: "MacBook को लंबे समय तक पूरी तरह discharged न छोड़ें। कभी-कभी battery कम होना सामान्य है, लेकिन गर्मी, लंबे समय तक 0% पर storage और अनावश्यक रूप से full charge पर रहना aging तेज कर सकता है।",
    answerParagraphs: [
      "Mac का प्रतिशत कम होने पर घबराने की जरूरत नहीं है। Lithium-ion batteries रोजमर्रा की charging और discharging के लिए बनी हैं। ज्यादा जरूरी यह है कि Mac को कई दिनों या हफ्तों तक पूरी तरह खाली रखकर store न किया जाए, क्योंकि battery deep-discharge state में जा सकती है।",
      "रोजमर्रा में सुविधानुसार charge करें, बहुत अधिक गर्मी से बचाएं और Optimized Battery Charging चालू रखें। BatteryCountdown पहले warning देकर low-battery shutdown तक अनुमानित समय दिखा सकता है, ताकि 0% से पहले charger लगाना आसान हो।"
    ],
    steps: [
      "Mac को लंबे समय के लिए खाली छोड़ने से पहले charger लगाएं; थोड़ी देर के लिए कम प्रतिशत पर पहुंचना emergency नहीं है।",
      "बहुत गर्म वातावरण में Mac को charge या भारी उपयोग न करें। Apple MacBook के लिए 10–35°C ambient operating range बताता है।",
      "Optimized Battery Charging चालू रखें। समर्थित Macs पर charge limit भी 100% पर अनावश्यक समय कम कर सकती है।",
      "कई महीनों के storage के लिए Mac को करीब 50% पर बंद करके ठंडी और सूखी जगह रखें। Apple हर छह महीने में फिर करीब 50% तक charge करने की सलाह देता है।",
      "BatteryCountdown में पहले low-battery trigger चुनें और जरूरत के समय menu bar में बचा हुआ समय देखें।"
    ],
    whyParagraphs: [
      "Battery aging एक chemical process है। Apple के अनुसार temperature history और charging pattern chemical age को प्रभावित करते हैं, इसलिए कोई एक perfect percentage लंबी life की guarantee नहीं देता।",
      "खाली battery storage में भी थोड़ा charge खोती रहती है। Voltage बहुत नीचे जाने पर deep discharge हो सकता है और battery charge पकड़ने में असमर्थ हो सकती है। इसलिए लंबे समय तक 0% पर रखना, थोड़ी देर low battery पर उपयोग करने से अलग है।",
      "Storage में दूसरा extreme भी मायने रखता है: लंबे समय तक पूरी तरह charged रहने से capacity कम हो सकती है। लंबे storage के लिए Apple करीब 50% सुझाता है।"
    ],
    settings: [
      "Charger ढूंढने के लिए जितना समय चाहिए, उसके अनुसार 1% से 20% के बीच countdown trigger चुनें।",
      "Low battery पर remaining-time countdown को menu bar में visible रखें।",
      "Charging estimate से देखें कि full charge होने में लगभग कितना समय बाकी है।",
      "BatteryCountdown को awareness tool मानें। यह macOS charging को control नहीं करता और battery life बढ़ाने की guarantee नहीं देता।"
    ],
    quick: [
      ["क्या MacBook का 0% तक पहुंचना खराब है?", "कभी-कभी बहुत कम स्तर पर पहुंचना संकट नहीं है। बड़ी चिंता Mac को लंबे समय तक पूरी तरह discharged छोड़ना है।"],
      ["Storage के समय MacBook कितने प्रतिशत पर होना चाहिए?", "Apple लंबे storage के लिए ठंडी, सूखी जगह में करीब 50% की सलाह देता है।"],
      ["क्या हमेशा 100% तक charge करना चाहिए?", "नहीं। macOS charging manage करता है और Optimized Battery Charging full charge पर बिताया समय कम कर सकती है।"],
      ["क्या BatteryCountdown battery health सुधारता है?", "यह battery chemistry नहीं बदलता, लेकिन early warning Mac को गलती से खाली छोड़ने से बचाने में मदद कर सकती है।"]
    ],
    sourcesTitle: "स्रोत और आगे पढ़ें",
    finalTitle: "Battery खाली होने से पहले उपयोगी warning पाएं।",
    finalBody: "BatteryCountdown menu bar में live estimate दिखाता है, ताकि low battery से Mac बंद होने से पहले charger लगाया जा सके।",
    linkTitle: "MacBook lithium battery की देखभाल",
    linkDescription: "लंबे deep discharge से बचें और व्यावहारिक battery-care habits अपनाएं।"
  }, {
    charging: "Apple Support: Mac पर Optimized Battery Charging और Charge Limit",
    lifespan: "Apple: Battery Life और Lifespan को अधिकतम करना",
    health: "Apple Support: Mac laptops में battery health management"
  }),

  it: article({
    title: "Come preservare la batteria al litio del MacBook | BatteryCountdown",
    description: "Scopri come prenderti cura della batteria agli ioni di litio del MacBook ed evitare di lasciarla scarica allo 0% troppo a lungo.",
    ogDescription: "Consigli pratici e attendibili per la batteria del MacBook.",
    h1: "Come prendersi cura della batteria al litio del MacBook",
    lead: "Evita di lasciare il MacBook completamente scarico per molto tempo. Un livello basso occasionale è normale, ma calore, conservazione prolungata allo 0% e tempo inutile a piena carica possono accelerare l’invecchiamento.",
    answerParagraphs: [
      "Non serve allarmarsi quando il Mac raggiunge una percentuale bassa. Le batterie agli ioni di litio sono progettate per l’uso quotidiano. È più importante non conservare il Mac completamente scarico per giorni o settimane, perché la batteria potrebbe entrare in uno stato di scarica profonda.",
      "Nell’uso quotidiano, ricarica quando è comodo, evita il calore eccessivo e lascia attiva la ricarica ottimizzata. BatteryCountdown può avvisarti prima e mostrare il tempo stimato prima dello spegnimento, così è più facile collegare l’alimentatore prima dello 0%."
    ],
    steps: [
      "Collega l’alimentatore prima di lasciare il Mac completamente vuoto a lungo; una breve discesa a una percentuale bassa non è un’emergenza.",
      "Evita ricarica e uso intenso con calore eccessivo. Apple indica 10–35 °C come intervallo ambientale operativo per MacBook.",
      "Mantieni attiva la ricarica ottimizzata. Sui Mac compatibili, un limite di carica riduce anche il tempo non necessario al 100%.",
      "Per conservarlo alcuni mesi, spegni il Mac intorno al 50% e tienilo in un luogo fresco e asciutto. Apple consiglia di riportarlo circa al 50% ogni sei mesi.",
      "Usa BatteryCountdown per scegliere un avviso anticipato e vedere il tempo residuo nella barra dei menu."
    ],
    whyParagraphs: [
      "L’invecchiamento della batteria è chimico. Apple afferma che cronologia delle temperature e schema di ricarica influenzano l’età chimica, quindi non esiste una percentuale perfetta che garantisca una vita più lunga.",
      "Una batteria scarica continua a perdere una piccola quantità di energia durante la conservazione. Se la tensione scende troppo, può entrare in scarica profonda e non riuscire più a mantenere la carica. Per questo conservarla a 0% è diverso da un breve uso con batteria bassa.",
      "Conta anche l’estremo opposto: una lunga conservazione a piena carica può ridurre la capacità. Apple suggerisce circa il 50% per iniziare un periodo di conservazione prolungato."
    ],
    settings: [
      "Scegli un punto di avvio tra 1% e 20% in base al tempo necessario per trovare un alimentatore.",
      "Tieni visibile il conto alla rovescia nella barra dei menu quando la batteria è bassa.",
      "Usa la stima di ricarica per sapere quanto manca approssimativamente alla carica completa.",
      "Considera BatteryCountdown uno strumento di consapevolezza: non controlla la ricarica di macOS e non promette di prolungare la vita della batteria."
    ],
    quick: [
      ["Fa male portare il MacBook allo 0%?", "Arrivare occasionalmente a un livello molto basso non è una crisi. Il problema maggiore è lasciarlo completamente scarico a lungo."],
      ["A quale percentuale conservare un MacBook?", "Apple consiglia circa il 50% per una conservazione prolungata in un luogo fresco e asciutto."],
      ["Devo sempre caricare fino al 100%?", "No. macOS gestisce la ricarica e la ricarica ottimizzata può ridurre il tempo trascorso a piena carica."],
      ["BatteryCountdown migliora la salute della batteria?", "Non modifica la chimica, ma un avviso anticipato può aiutare a non lasciare per errore il Mac completamente scarico."]
    ],
    sourcesTitle: "Fonti e approfondimenti",
    finalTitle: "Ricevi un avviso utile prima che la batteria sia vuota.",
    finalBody: "BatteryCountdown mostra nella barra dei menu una stima in tempo reale prima di un possibile spegnimento per batteria scarica.",
    linkTitle: "Prendersi cura della batteria del MacBook",
    linkDescription: "Evita la scarica profonda prolungata e adotta abitudini pratiche."
  }, {
    charging: "Supporto Apple: ricarica ottimizzata e limite di carica sul Mac",
    lifespan: "Apple: ottimizzare autonomia e durata della batteria",
    health: "Supporto Apple: gestione dello stato della batteria nei portatili Mac"
  }),

  ja: article({
    title: "MacBookのリチウムバッテリーを長持ちさせる方法 | BatteryCountdown",
    description: "MacBookのリチウムイオンバッテリーを適切に扱い、0%のまま長時間放置しないための実用的な方法を解説します。",
    ogDescription: "根拠に基づく、MacBookバッテリーの実用的なケア方法。",
    h1: "MacBookのリチウムバッテリーを適切にケアする方法",
    lead: "MacBookを完全に放電したまま長期間放置しないことが大切です。時々残量が少なくなるのは通常の使い方ですが、高温、0%での長期保管、満充電状態の長時間維持は劣化を早める可能性があります。",
    answerParagraphs: [
      "Macの残量が少なくなっても、すぐに慌てる必要はありません。リチウムイオンバッテリーは日常的な充放電を前提に設計されています。より重要なのは、完全に放電したMacを何日も何週間も保管しないことです。深放電状態になる可能性があるためです。",
      "普段は必要なときに充電し、過度な高温を避け、「バッテリー充電の最適化」を有効にしておきましょう。BatteryCountdownは早めに警告し、低バッテリーで終了するまでの推定時間を表示するため、0%になる前に電源へ接続しやすくなります。"
    ],
    steps: [
      "Macを長期間空のままにする前に電源へ接続します。短時間だけ低い残量になること自体は緊急事態ではありません。",
      "高温下での充電や高負荷の使用を避けます。AppleはMacBookの動作時周囲温度を10～35°Cとしています。",
      "「バッテリー充電の最適化」を有効にします。対応するMacでは充電上限を使うことで、不要に100%で過ごす時間も減らせます。",
      "数か月以上保管する場合は、約50%で電源を切り、涼しく乾燥した場所に置きます。Appleは6か月ごとに約50%まで戻すことを勧めています。",
      "BatteryCountdownで早めの開始残量を設定し、必要なときにメニューバーで残り時間を確認します。"
    ],
    whyParagraphs: [
      "バッテリーの劣化は化学的な現象です。Appleによると、温度履歴と充電パターンが化学的経年劣化に影響するため、寿命を保証する一つの完璧な残量はありません。",
      "空のバッテリーも保管中に少しずつ電力を失います。電圧が下がりすぎると深放電状態になり、充電を保持できなくなる場合があります。そのため、0%での長期保管は、低残量で少し使うこととは異なります。",
      "保管時は逆の極端な状態にも注意が必要です。満充電のまま長期間置くと容量が低下する可能性があり、Appleは長期保管の開始時に約50%を推奨しています。"
    ],
    settings: [
      "充電器を用意するまでに必要な時間に合わせ、1%～20%からカウントダウン開始残量を選びます。",
      "残量が少ないときは、メニューバーに残り時間を表示します。",
      "充電中は、満充電までのおおよその時間を確認します。",
      "BatteryCountdownは注意を促すツールです。macOSの充電を制御したり、バッテリー寿命の延長を保証したりするものではありません。"
    ],
    quick: [
      ["MacBookを0%まで使うと悪影響がありますか？", "時々非常に低い残量になること自体は深刻ではありません。より大きな問題は、完全放電のまま長期間放置することです。"],
      ["MacBookを保管するときの残量は？", "Appleは涼しく乾燥した場所で長期保管する場合、約50%を推奨しています。"],
      ["毎回100%まで充電するべきですか？", "必須ではありません。macOSが充電を管理し、最適化充電によって満充電状態の時間を減らせます。"],
      ["BatteryCountdownはバッテリー状態を改善しますか？", "バッテリーの化学特性は変えませんが、早めの警告でMacを誤って空のままにするのを防ぎやすくします。"]
    ],
    sourcesTitle: "出典と参考資料",
    finalTitle: "バッテリーが空になる前に、役立つ警告を。",
    finalBody: "BatteryCountdownは、低バッテリーでMacが終了する可能性があるまでの推定時間をメニューバーに表示します。",
    linkTitle: "MacBookのリチウムバッテリーをケアする",
    linkDescription: "長時間の深放電を避け、実用的なバッテリー管理を行いましょう。"
  }, {
    charging: "Appleサポート：Macのバッテリー充電の最適化と充電上限",
    lifespan: "Apple：バッテリーの駆動時間と耐用年数を最大限に延ばす",
    health: "Appleサポート：Macノートブックのバッテリー状態管理"
  }),

  ko: article({
    title: "MacBook 리튬 배터리 관리 방법 | BatteryCountdown",
    description: "MacBook 리튬 이온 배터리를 관리하고 완전 방전 상태로 오래 두지 않는 실용적인 방법을 알아보세요.",
    ogDescription: "근거에 기반한 실용적인 MacBook 배터리 관리 가이드입니다.",
    h1: "MacBook 리튬 배터리를 올바르게 관리하는 방법",
    lead: "MacBook을 완전히 방전된 상태로 오래 두지 마세요. 가끔 배터리가 낮아지는 것은 정상이지만, 높은 온도, 0%로 장기간 보관, 불필요하게 완충 상태를 유지하는 습관은 노화를 앞당길 수 있습니다.",
    answerParagraphs: [
      "Mac의 배터리 잔량이 낮아졌다고 당황할 필요는 없습니다. 리튬 이온 배터리는 일상적인 충전과 방전을 전제로 설계됩니다. 더 중요한 것은 완전히 방전된 Mac을 며칠 또는 몇 주 동안 보관하지 않는 것입니다. 배터리가 과방전 상태에 들어갈 수 있기 때문입니다.",
      "평소에는 편할 때 충전하고 과도한 열을 피하며 최적화된 배터리 충전을 켜 두세요. BatteryCountdown은 더 일찍 경고하고 배터리 부족으로 종료되기까지의 예상 시간을 보여 주어, 0% 전에 전원을 연결하기 쉽게 합니다."
    ],
    steps: [
      "Mac을 완전히 빈 상태로 오래 두기 전에 전원을 연결하세요. 잠시 낮은 잔량에 도달하는 것 자체는 비상 상황이 아닙니다.",
      "지나치게 더운 곳에서 충전하거나 고부하로 사용하지 마세요. Apple은 MacBook의 주변 작동 온도를 10–35°C로 안내합니다.",
      "최적화된 배터리 충전을 켜 두세요. 지원되는 Mac에서는 충전 한도를 사용해 불필요하게 100%로 머무는 시간을 줄일 수도 있습니다.",
      "몇 달 이상 보관할 때는 약 50%에서 Mac을 끄고 서늘하고 건조한 곳에 두세요. Apple은 6개월마다 다시 약 50%로 맞출 것을 권장합니다.",
      "BatteryCountdown에서 더 이른 배터리 부족 기준을 정하고 필요할 때 메뉴 막대에서 남은 시간을 확인하세요."
    ],
    whyParagraphs: [
      "배터리 노화는 화학적 과정입니다. Apple에 따르면 온도 이력과 충전 패턴이 화학적 노화에 영향을 주므로, 수명을 보장하는 하나의 완벽한 잔량은 없습니다.",
      "방전된 배터리도 보관 중에 조금씩 전력을 잃습니다. 전압이 너무 낮아지면 과방전 상태가 되어 충전을 유지하지 못할 수 있습니다. 따라서 0%로 장기간 보관하는 것과 낮은 잔량에서 잠시 사용하는 것은 다릅니다.",
      "보관할 때 반대쪽 극단도 중요합니다. 완충 상태로 오래 보관하면 용량이 감소할 수 있어 Apple은 장기 보관 시작 시 약 50%를 권장합니다."
    ],
    settings: [
      "충전기를 준비하는 데 필요한 시간에 맞춰 1%~20% 사이에서 카운트다운 시작 기준을 선택하세요.",
      "배터리가 낮을 때 메뉴 막대에 남은 시간 카운트다운을 표시하세요.",
      "충전 중에는 완충까지 대략 얼마나 남았는지 확인하세요.",
      "BatteryCountdown은 알림 도구입니다. macOS 충전을 제어하거나 배터리 수명 연장을 보장하지 않습니다."
    ],
    quick: [
      ["MacBook이 0%에 도달하면 나쁜가요?", "가끔 매우 낮은 잔량에 도달하는 것은 위기가 아닙니다. 더 큰 문제는 완전히 방전된 상태로 오래 두는 것입니다."],
      ["MacBook을 보관할 때 적절한 잔량은 얼마인가요?", "Apple은 서늘하고 건조한 곳에서 장기 보관할 경우 약 50%를 권장합니다."],
      ["항상 100%까지 충전해야 하나요?", "아닙니다. macOS가 충전을 관리하며 최적화 충전은 완충 상태로 있는 시간을 줄일 수 있습니다."],
      ["BatteryCountdown이 배터리 성능을 개선하나요?", "배터리 화학 특성을 바꾸지는 않지만, 조기 경고로 Mac을 실수로 빈 상태에 두지 않도록 도울 수 있습니다."]
    ],
    sourcesTitle: "출처 및 추가 자료",
    finalTitle: "배터리가 비기 전에 유용한 경고를 받으세요.",
    finalBody: "BatteryCountdown은 배터리 부족으로 Mac이 종료될 수 있기 전의 실시간 예상 시간을 메뉴 막대에 표시합니다.",
    linkTitle: "MacBook 리튬 배터리 관리",
    linkDescription: "장기간 과방전을 피하고 실용적인 배터리 관리 습관을 익히세요."
  }, {
    charging: "Apple 지원: Mac의 최적화된 배터리 충전 및 충전 한도",
    lifespan: "Apple: 배터리 사용 시간과 수명 최대화",
    health: "Apple 지원: Mac 노트북의 배터리 성능 상태 관리"
  }),

  nb: article({
    title: "Slik tar du vare på litiumbatteriet i MacBook | BatteryCountdown",
    description: "Lær hvordan du tar vare på litiumionbatteriet i en MacBook, og hvorfor den ikke bør bli liggende helt utladet over tid.",
    ogDescription: "Praktiske og kildebaserte råd for bedre batterivaner på MacBook.",
    h1: "Slik tar du vare på litiumbatteriet i MacBook",
    lead: "Unngå at en MacBook blir liggende helt utladet over lengre tid. Det er normalt å bruke batteriet ned til et lavt nivå av og til, men varme, lang lagring på 0 % og unødvendig lang tid på full lading kan fremskynde aldringen.",
    answerParagraphs: [
      "Du trenger ikke få panikk når Mac-en når en lav batteriprosent. Litiumionbatterier er laget for vanlig lading og utlading. Den viktigere vanen er å unngå at en helt utladet Mac blir liggende i dager eller uker, fordi batteriet kan havne i en dyputladet tilstand.",
      "Til daglig kan du lade når det passer, unngå sterk varme og la Optimalisert batterilading være slått på. BatteryCountdown kan varsle tidligere og vise anslått tid til avslåing ved lavt batteri, slik at det er enklere å koble til laderen før Mac-en når 0 %."
    ],
    steps: [
      "Koble til laderen før Mac-en blir liggende helt tom over lengre tid. En kort tur ned på lav prosent er ikke en krise.",
      "Unngå lading og tung bruk i sterk varme. Apple oppgir 10–35 °C som omgivelsestemperatur ved bruk av MacBook.",
      "Behold Optimalisert batterilading aktivert. På støttede Mac-er kan en ladegrense også redusere unødvendig tid på 100 %.",
      "Ved lagring i flere måneder: slå av Mac-en på omtrent 50 %, og oppbevar den kjølig og tørt. Apple anbefaler å lade tilbake til rundt 50 % hver sjette måned.",
      "Bruk BatteryCountdown til å velge et tidligere varselnivå og se gjenværende tid i menylinjen når du trenger en praktisk påminnelse."
    ],
    whyParagraphs: [
      "Batterialdring er en kjemisk prosess. Apple sier at temperaturhistorikk og lademønster påvirker batteriets kjemiske alder, så det finnes ikke én perfekt prosent som garanterer lengre levetid.",
      "Et utladet batteri mister fortsatt litt strøm under lagring. Hvis spenningen blir for lav, kan det bli dyputladet og i verste fall miste evnen til å holde på lading. Derfor er lang lagring på 0 % noe annet enn å bruke Mac-en kortvarig på lav prosent.",
      "Det motsatte ytterpunktet har også betydning under lagring: Et batteri som blir stående fulladet lenge, kan miste kapasitet. Apple anbefaler omtrent 50 % ved starten av langtidslagring."
    ],
    settings: [
      "Velg startnivå mellom 1 % og 20 % ut fra hvor lang tid du vanligvis trenger for å finne en lader.",
      "La nedtellingen med gjenværende tid være synlig i menylinjen ved lavt batteri.",
      "Bruk ladeestimatet til å se omtrent hvor lenge det er igjen til fulladet.",
      "Se på BatteryCountdown som et bevisstgjøringsverktøy. Appen styrer ikke macOS-lading og lover ikke lengre batterilevetid."
    ],
    quick: [
      ["Er det skadelig at en MacBook når 0 %?", "Det er ikke en krise at batteriet av og til blir svært lavt. Den større bekymringen er at Mac-en blir liggende helt utladet over lang tid."],
      ["Hvilken prosent bør en MacBook ha under lagring?", "Apple anbefaler omtrent 50 % ved langtidslagring på et kjølig og tørt sted."],
      ["Bør jeg alltid lade til 100 %?", "Nei. macOS styrer ladingen, og Optimalisert batterilading kan redusere tiden batteriet står fulladet."],
      ["Kan BatteryCountdown forbedre batterihelsen?", "Appen endrer ikke batterikjemien, men et tidligere varsel kan hjelpe deg å unngå at Mac-en ved et uhell blir liggende tom."]
    ],
    sourcesTitle: "Kilder og videre lesning",
    finalTitle: "Få en nyttig påminnelse før batteriet er tomt.",
    finalBody: "BatteryCountdown viser et levende estimat i menylinjen før lavt batteri kan slå av Mac-en, slik at du rekker å koble til laderen.",
    linkTitle: "Ta vare på litiumbatteriet i MacBook",
    linkDescription: "Unngå langvarig dyputlading og få bedre batterivaner."
  }, {
    charging: "Apple-kundestøtte: Optimalisert batterilading og ladegrense på Mac",
    lifespan: "Apple: Maksimer batteritid og levetid",
    health: "Apple-kundestøtte: Batteritilstandsadministrering på bærbare Mac-maskiner"
  }),

  "pt-BR": article({
    title: "Como cuidar da bateria de lítio do MacBook | BatteryCountdown",
    description: "Saiba como cuidar da bateria de íons de lítio do MacBook e evite deixá-la totalmente descarregada por muito tempo.",
    ogDescription: "Cuidados práticos e confiáveis para a bateria do MacBook.",
    h1: "Como cuidar da bateria de lítio do MacBook",
    lead: "Evite deixar o MacBook totalmente descarregado por muito tempo. Chegar ocasionalmente a um nível baixo é normal, mas calor, armazenamento prolongado em 0% e tempo desnecessário com carga completa podem acelerar o envelhecimento.",
    answerParagraphs: [
      "Não é preciso entrar em pânico quando o Mac chega a uma porcentagem baixa. Baterias de íons de lítio são feitas para as cargas e descargas do dia a dia. O hábito mais importante é não guardar o Mac totalmente descarregado por dias ou semanas, pois a bateria pode entrar em descarga profunda.",
      "No uso diário, carregue quando for conveniente, evite calor excessivo e mantenha o Carregamento Otimizado ativado. O BatteryCountdown pode avisar mais cedo e mostrar o tempo estimado até um desligamento por bateria fraca, facilitando conectar o carregador antes de 0%."
    ],
    steps: [
      "Conecte o carregador antes de deixar o Mac completamente vazio por um período longo; passar brevemente por uma porcentagem baixa não é uma emergência.",
      "Evite carregar ou usar intensamente o Mac em calor excessivo. A Apple indica uma faixa ambiente de 10–35 °C para operar um MacBook.",
      "Mantenha o Carregamento Otimizado ativado. Em Macs compatíveis, um limite de carga também reduz o tempo desnecessário em 100%.",
      "Para guardar por vários meses, desligue o Mac com cerca de 50% e mantenha-o em local fresco e seco. A Apple recomenda voltar a aproximadamente 50% a cada seis meses.",
      "Use o BatteryCountdown para escolher um aviso antecipado e ver o tempo restante na barra de menus."
    ],
    whyParagraphs: [
      "O envelhecimento da bateria é químico. Segundo a Apple, o histórico de temperatura e o padrão de carregamento afetam a idade química, portanto não existe uma porcentagem perfeita que garanta vida útil maior.",
      "Uma bateria descarregada continua perdendo um pouco de energia durante o armazenamento. Se a tensão cair demais, ela pode entrar em descarga profunda e deixar de reter carga. Por isso, guardar em 0% é diferente de usar o Mac brevemente com pouca bateria.",
      "O extremo oposto também importa ao guardar: permanecer totalmente carregada por muito tempo pode reduzir a capacidade. A Apple recomenda cerca de 50% no início de um armazenamento prolongado."
    ],
    settings: [
      "Escolha o início da contagem entre 1% e 20%, conforme o tempo necessário para encontrar um carregador.",
      "Mantenha a contagem de tempo restante visível na barra de menus quando a bateria estiver baixa.",
      "Use a estimativa de carregamento para saber aproximadamente quanto falta para completar a carga.",
      "Use o BatteryCountdown como ferramenta de atenção. Ele não controla o carregamento do macOS nem promete aumentar a vida útil da bateria."
    ],
    quick: [
      ["Faz mal deixar o MacBook chegar a 0%?", "Chegar ocasionalmente a um nível muito baixo não é uma crise. A preocupação maior é deixar o Mac totalmente descarregado por muito tempo."],
      ["Com qual porcentagem devo guardar um MacBook?", "A Apple recomenda cerca de 50% para armazenamento prolongado em local fresco e seco."],
      ["Preciso sempre carregar até 100%?", "Não. O macOS gerencia o carregamento, e o Carregamento Otimizado pode reduzir o tempo em carga completa."],
      ["O BatteryCountdown melhora a saúde da bateria?", "Ele não altera a química, mas o aviso antecipado pode ajudar a evitar que o Mac fique vazio por acidente."]
    ],
    sourcesTitle: "Fontes e leituras adicionais",
    finalTitle: "Receba um aviso útil antes de a bateria acabar.",
    finalBody: "O BatteryCountdown mostra na barra de menus uma estimativa ao vivo antes que a bateria fraca possa desligar o Mac.",
    linkTitle: "Cuidar da bateria de lítio do MacBook",
    linkDescription: "Evite descarga profunda prolongada e adote hábitos práticos."
  }, {
    charging: "Suporte da Apple: Carregamento Otimizado e limite de carga no Mac",
    lifespan: "Apple: maximizar a duração e a vida útil da bateria",
    health: "Suporte da Apple: gerenciamento da saúde da bateria em notebooks Mac"
  }),

  ru: article({
    title: "Как ухаживать за литиевым аккумулятором MacBook | BatteryCountdown",
    description: "Как сохранить аккумулятор MacBook и почему не стоит надолго оставлять ноутбук полностью разряженным до 0%.",
    ogDescription: "Практичные и проверенные рекомендации по уходу за аккумулятором MacBook.",
    h1: "Как ухаживать за литиевым аккумулятором MacBook",
    lead: "Не оставляйте MacBook полностью разряженным надолго. Иногда низкий заряд — нормальная часть использования, но жара, длительное хранение при 0% и лишнее время на полном заряде могут ускорить старение.",
    answerParagraphs: [
      "Не нужно паниковать, когда заряд Mac опускается до низкого уровня. Литий-ионные аккумуляторы рассчитаны на повседневную зарядку и разрядку. Важнее не хранить полностью разряженный Mac днями или неделями: аккумулятор может перейти в состояние глубокого разряда.",
      "В обычной работе заряжайте Mac, когда это удобно, избегайте сильного нагрева и оставьте включенной оптимизированную зарядку. BatteryCountdown может предупредить раньше и показать примерное время до выключения, чтобы вы успели подключить питание до 0%."
    ],
    steps: [
      "Подключите питание, прежде чем оставить Mac полностью разряженным на длительный срок; кратковременный низкий заряд сам по себе не является чрезвычайной ситуацией.",
      "Не заряжайте и не нагружайте Mac при чрезмерной жаре. Apple указывает диапазон окружающей температуры 10–35°C для работы MacBook.",
      "Оставьте оптимизированную зарядку включенной. На поддерживаемых Mac ограничение заряда также сокращает ненужное время при 100%.",
      "Для хранения в течение нескольких месяцев выключите Mac примерно при 50% и держите его в прохладном сухом месте. Apple советует каждые шесть месяцев снова доводить заряд примерно до 50%.",
      "Настройте в BatteryCountdown более ранний порог и следите за оставшимся временем в строке меню."
    ],
    whyParagraphs: [
      "Старение аккумулятора — химический процесс. По данным Apple, на химический возраст влияют история температур и характер зарядки, поэтому одной идеальной цифры, гарантирующей долгий срок службы, нет.",
      "Разряженный аккумулятор продолжает понемногу терять энергию при хранении. Если напряжение упадет слишком низко, возможен глубокий разряд, после которого аккумулятор может перестать удерживать заряд. Поэтому хранение при 0% отличается от краткой работы на низком заряде.",
      "При хранении важна и другая крайность: долгое пребывание на полном заряде может снижать емкость. Для длительного хранения Apple рекомендует начинать примерно с 50%."
    ],
    settings: [
      "Выберите начало отсчета от 1% до 20% с учетом времени, необходимого для поиска зарядного устройства.",
      "Показывайте оставшееся время в строке меню при низком заряде.",
      "Во время зарядки смотрите примерное время до полного заряда.",
      "Используйте BatteryCountdown как напоминание. Приложение не управляет зарядкой macOS и не обещает увеличить срок службы аккумулятора."
    ],
    quick: [
      ["Вредно ли разряжать MacBook до 0%?", "Редкое достижение очень низкого уровня не является катастрофой. Опаснее надолго оставить Mac полностью разряженным."],
      ["С каким зарядом хранить MacBook?", "Apple рекомендует около 50% для длительного хранения в прохладном сухом месте."],
      ["Нужно ли всегда заряжать до 100%?", "Нет. macOS управляет зарядкой, а оптимизированная зарядка может сократить время при полном заряде."],
      ["Улучшает ли BatteryCountdown состояние аккумулятора?", "Приложение не меняет химию, но раннее предупреждение помогает случайно не оставить Mac полностью разряженным."]
    ],
    sourcesTitle: "Источники и дополнительные материалы",
    finalTitle: "Получайте полезное предупреждение до разрядки аккумулятора.",
    finalBody: "BatteryCountdown показывает в строке меню оставшееся время до возможного выключения Mac из-за низкого заряда.",
    linkTitle: "Уход за литиевым аккумулятором MacBook",
    linkDescription: "Избегайте длительного глубокого разряда и используйте практичные привычки."
  }, {
    charging: "Служба поддержки Apple: оптимизированная зарядка и ограничение заряда на Mac",
    lifespan: "Apple: увеличение времени работы и срока службы аккумулятора",
    health: "Служба поддержки Apple: управление состоянием аккумулятора ноутбуков Mac"
  }),

  "zh-Hans": article({
    title: "如何保养 MacBook 锂电池 | BatteryCountdown",
    description: "了解如何保养 MacBook 锂离子电池，以及为什么不应让 Mac 长时间处于 0% 完全没电状态。",
    ogDescription: "基于可靠资料的 MacBook 电池保养实用建议。",
    h1: "如何正确保养 MacBook 锂电池",
    lead: "不要让 MacBook 长时间处于完全没电状态。偶尔用到低电量很正常，但高温、长期以 0% 存放，以及不必要地长时间保持满电，都可能加快电池老化。",
    answerParagraphs: [
      "Mac 电量降到较低百分比时不必恐慌。锂离子电池本来就是为日常充放电设计的。更重要的是，不要让完全没电的 Mac 存放数天或数周，因为电池可能进入深度放电状态。",
      "日常使用时可以在方便的时候充电，避免过热，并保持“优化电池充电”开启。BatteryCountdown 可以提前提醒，并显示低电量关机前的预计时间，让你更容易在 0% 之前接上电源。"
    ],
    steps: [
      "不要让完全没电的 Mac 长期闲置；短时间用到很低的百分比并不是紧急情况。",
      "避免在过热环境中充电或高负载使用。Apple 标明 MacBook 的工作环境温度为 10–35°C。",
      "保持“优化电池充电”开启。在支持的 Mac 上，充电上限还能减少不必要的满电停留时间。",
      "如果要存放数月，请在约 50% 电量时关机，并放在阴凉干燥处。Apple 建议每六个月将电量恢复到约 50%。",
      "使用 BatteryCountdown 选择更早的低电量触发点，并在需要时从菜单栏查看剩余时间。"
    ],
    whyParagraphs: [
      "电池老化是化学过程。Apple 表示，温度历史和充电模式会影响电池的化学年龄，因此不存在一个能够保证寿命更长的完美电量百分比。",
      "没电的电池在存放期间仍会缓慢失去少量电量。如果电压降得过低，可能进入深度放电状态，甚至无法再保持充电。因此，长期以 0% 存放与短时间在低电量下使用并不相同。",
      "存放时也要注意另一个极端：长期保持满电可能降低容量。Apple 建议长期存放开始时保持约 50% 电量。"
    ],
    settings: [
      "根据你寻找充电器所需的时间，在 1% 到 20% 之间选择倒计时开始点。",
      "低电量时在菜单栏保持显示剩余时间倒计时。",
      "充电时查看距离充满还有多长时间的估算。",
      "请把 BatteryCountdown 视为提醒工具。它不会控制 macOS 充电，也不承诺延长电池寿命。"
    ],
    quick: [
      ["MacBook 用到 0% 会损坏电池吗？", "偶尔达到很低电量并不是危机。更值得担心的是让 Mac 长时间处于完全没电状态。"],
      ["存放 MacBook 时应该保持多少电量？", "Apple 建议长期存放时保持约 50%，并放在阴凉干燥处。"],
      ["每次都要充到 100% 吗？", "不需要。macOS 会管理充电，优化电池充电可以减少电池保持满电的时间。"],
      ["BatteryCountdown 能改善电池健康吗？", "它不会改变电池化学性质，但提前提醒可以帮助你避免无意中让 Mac 长时间没电。"]
    ],
    sourcesTitle: "资料来源与延伸阅读",
    finalTitle: "在电池耗尽前获得实用提醒。",
    finalBody: "BatteryCountdown 会在菜单栏显示低电量可能导致 Mac 关机前的实时预计时间，帮助你及时连接电源。",
    linkTitle: "保养 MacBook 锂电池",
    linkDescription: "避免长期深度放电，建立实用的电池使用习惯。"
  }, {
    charging: "Apple 支持：Mac 上的优化电池充电和充电上限",
    lifespan: "Apple：充分延长电池使用时间和寿命",
    health: "Apple 支持：Mac 笔记本电脑的电池健康管理"
  })
};

module.exports = {
  batteryCarePageKey,
  batteryCareSlugs,
  batteryCareContent
};
