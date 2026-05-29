const extraGuidePageKeys = [
  "guideWarningNotShowing",
  "guideShutdownWarning",
  "guideLowBatteryAlert",
  "guideBestApp"
];

const extraGuideSlugs = {
  en: {
    guideWarningNotShowing: "macbook-low-battery-warning-not-showing",
    guideShutdownWarning: "how-to-get-a-shutdown-warning-on-mac",
    guideLowBatteryAlert: "can-you-change-mac-low-battery-alert",
    guideBestApp: "best-low-battery-warning-app-for-mac"
  },
  de: {
    guideWarningNotShowing: "macbook-akkuwarnung-wird-nicht-angezeigt",
    guideShutdownWarning: "shutdown-warnung-auf-mac-erhalten",
    guideLowBatteryAlert: "mac-akkuwarnung-aendern",
    guideBestApp: "beste-akkuwarnung-app-fuer-mac"
  },
  es: {
    guideWarningNotShowing: "aviso-bateria-baja-macbook-no-aparece",
    guideShutdownWarning: "como-recibir-aviso-apagado-mac",
    guideLowBatteryAlert: "cambiar-alerta-bateria-baja-mac",
    guideBestApp: "mejor-app-aviso-bateria-baja-mac"
  },
  fr: {
    guideWarningNotShowing: "alerte-batterie-faible-macbook-ne-saffiche-pas",
    guideShutdownWarning: "obtenir-alerte-extinction-mac",
    guideLowBatteryAlert: "modifier-alerte-batterie-faible-mac",
    guideBestApp: "meilleure-app-alerte-batterie-faible-mac"
  },
  hi: {
    guideWarningNotShowing: "macbook-low-battery-warning-not-showing",
    guideShutdownWarning: "shutdown-warning-on-mac",
    guideLowBatteryAlert: "change-mac-low-battery-alert",
    guideBestApp: "best-low-battery-warning-app-mac"
  },
  it: {
    guideWarningNotShowing: "avviso-batteria-scarica-macbook-non-appare",
    guideShutdownWarning: "come-avere-avviso-spegnimento-mac",
    guideLowBatteryAlert: "cambiare-avviso-batteria-scarica-mac",
    guideBestApp: "migliore-app-avviso-batteria-scarica-mac"
  },
  ja: {
    guideWarningNotShowing: "macbook-low-battery-warning-not-showing",
    guideShutdownWarning: "shutdown-warning-on-mac",
    guideLowBatteryAlert: "change-mac-low-battery-alert",
    guideBestApp: "best-low-battery-warning-app-mac"
  },
  ko: {
    guideWarningNotShowing: "macbook-low-battery-warning-not-showing",
    guideShutdownWarning: "shutdown-warning-on-mac",
    guideLowBatteryAlert: "change-mac-low-battery-alert",
    guideBestApp: "best-low-battery-warning-app-mac"
  },
  nb: {
    guideWarningNotShowing: "macbook-lavt-batteri-varsel-vises-ikke",
    guideShutdownWarning: "fa-varsel-for-mac-skrur-seg-av",
    guideLowBatteryAlert: "endre-lavt-batteri-varsel-mac",
    guideBestApp: "beste-lavt-batteri-varsel-app-mac"
  },
  "pt-BR": {
    guideWarningNotShowing: "aviso-bateria-baixa-macbook-nao-aparece",
    guideShutdownWarning: "como-receber-aviso-desligamento-mac",
    guideLowBatteryAlert: "alterar-alerta-bateria-baixa-mac",
    guideBestApp: "melhor-app-aviso-bateria-baixa-mac"
  },
  ru: {
    guideWarningNotShowing: "macbook-low-battery-warning-not-showing",
    guideShutdownWarning: "shutdown-warning-on-mac",
    guideLowBatteryAlert: "change-mac-low-battery-alert",
    guideBestApp: "best-low-battery-warning-app-mac"
  },
  "zh-Hans": {
    guideWarningNotShowing: "macbook-low-battery-warning-not-showing",
    guideShutdownWarning: "shutdown-warning-on-mac",
    guideLowBatteryAlert: "change-mac-low-battery-alert",
    guideBestApp: "best-low-battery-warning-app-mac"
  }
};

extraGuideSlugs["pt-br"] = extraGuideSlugs["pt-BR"];
extraGuideSlugs["zh-hans"] = extraGuideSlugs["zh-Hans"];

const extraGuideCommon = {
  en: {
    eyebrow: "Mac battery guide",
    answerTitle: "Short answer",
    stepsTitle: "What to do",
    whyTitle: "Why this matters",
    settingsTitle: "Useful BatteryCountdown settings",
    quickTitle: "Quick answers",
    finalEyebrow: "Low battery warning for Mac",
    relatedTitle: "Related Mac battery guides",
    relatedIntro: "Continue with another practical guide for Mac low battery warnings and shutdown alerts."
  },
  de: {
    eyebrow: "Mac Akku-Ratgeber",
    answerTitle: "Kurze Antwort",
    stepsTitle: "Was du tun kannst",
    whyTitle: "Warum das wichtig ist",
    settingsTitle: "Nützliche BatteryCountdown-Einstellungen",
    quickTitle: "Kurze Antworten",
    finalEyebrow: "Akkuwarnung für Mac",
    relatedTitle: "Weitere Mac Akku-Ratgeber",
    relatedIntro: "Lies weiter mit praktischen Ratgebern zu Akkuwarnungen und Shutdown-Hinweisen auf dem Mac."
  },
  es: {
    eyebrow: "Guía de batería para Mac",
    answerTitle: "Respuesta corta",
    stepsTitle: "Qué hacer",
    whyTitle: "Por qué importa",
    settingsTitle: "Ajustes útiles de BatteryCountdown",
    quickTitle: "Respuestas rápidas",
    finalEyebrow: "Aviso de batería baja para Mac",
    relatedTitle: "Guías relacionadas sobre batería en Mac",
    relatedIntro: "Sigue con otra guía práctica sobre avisos de batería baja y apagado en Mac."
  },
  fr: {
    eyebrow: "Guide batterie Mac",
    answerTitle: "Réponse courte",
    stepsTitle: "Que faire",
    whyTitle: "Pourquoi c'est important",
    settingsTitle: "Réglages utiles de BatteryCountdown",
    quickTitle: "Réponses rapides",
    finalEyebrow: "Alerte batterie faible pour Mac",
    relatedTitle: "Guides Mac liés à la batterie",
    relatedIntro: "Continuez avec un autre guide pratique sur les alertes batterie faible et extinction Mac."
  },
  hi: {
    eyebrow: "Mac battery guide",
    answerTitle: "Short answer",
    stepsTitle: "क्या करें",
    whyTitle: "यह क्यों जरूरी है",
    settingsTitle: "BatteryCountdown की useful settings",
    quickTitle: "Quick answers",
    finalEyebrow: "Mac low battery warning",
    relatedTitle: "Related Mac battery guides",
    relatedIntro: "Mac low battery warning और shutdown alerts पर एक और practical guide पढ़ें."
  },
  it: {
    eyebrow: "Guida batteria Mac",
    answerTitle: "Risposta breve",
    stepsTitle: "Cosa fare",
    whyTitle: "Perché è importante",
    settingsTitle: "Impostazioni utili di BatteryCountdown",
    quickTitle: "Risposte rapide",
    finalEyebrow: "Avviso batteria scarica per Mac",
    relatedTitle: "Guide correlate sulla batteria del Mac",
    relatedIntro: "Continua con un'altra guida pratica sugli avvisi di batteria scarica e spegnimento su Mac."
  },
  ja: {
    eyebrow: "Macバッテリーガイド",
    answerTitle: "短い答え",
    stepsTitle: "対処方法",
    whyTitle: "なぜ重要か",
    settingsTitle: "BatteryCountdownの便利な設定",
    quickTitle: "よくある質問",
    finalEyebrow: "Macの低バッテリー警告",
    relatedTitle: "関連するMacバッテリーガイド",
    relatedIntro: "Macの低バッテリー警告と終了アラートについて、別の実用ガイドも確認できます。"
  },
  ko: {
    eyebrow: "Mac 배터리 가이드",
    answerTitle: "짧은 답변",
    stepsTitle: "해야 할 일",
    whyTitle: "왜 중요한가",
    settingsTitle: "BatteryCountdown 유용한 설정",
    quickTitle: "빠른 답변",
    finalEyebrow: "Mac 배터리 부족 경고",
    relatedTitle: "관련 Mac 배터리 가이드",
    relatedIntro: "Mac 배터리 부족 경고와 종료 알림에 대한 다른 실용 가이드도 확인하세요."
  },
  nb: {
    eyebrow: "Mac batteriguide",
    answerTitle: "Kort svar",
    stepsTitle: "Hva du kan gjøre",
    whyTitle: "Hvorfor dette er viktig",
    settingsTitle: "Nyttige BatteryCountdown-innstillinger",
    quickTitle: "Raske svar",
    finalEyebrow: "Lavt batteri-varsel for Mac",
    relatedTitle: "Relaterte Mac-batteriguider",
    relatedIntro: "Fortsett med en annen praktisk guide om lavt batteri-varsler og shutdown-advarsler på Mac."
  },
  "pt-BR": {
    eyebrow: "Guia de bateria para Mac",
    answerTitle: "Resposta curta",
    stepsTitle: "O que fazer",
    whyTitle: "Por que isso importa",
    settingsTitle: "Ajustes úteis do BatteryCountdown",
    quickTitle: "Respostas rápidas",
    finalEyebrow: "Aviso de bateria baixa para Mac",
    relatedTitle: "Guias relacionados de bateria para Mac",
    relatedIntro: "Continue com outro guia prático sobre avisos de bateria baixa e desligamento no Mac."
  },
  ru: {
    eyebrow: "Гид по батарее Mac",
    answerTitle: "Короткий ответ",
    stepsTitle: "Что сделать",
    whyTitle: "Почему это важно",
    settingsTitle: "Полезные настройки BatteryCountdown",
    quickTitle: "Быстрые ответы",
    finalEyebrow: "Предупреждение о низком заряде Mac",
    relatedTitle: "Похожие гиды по батарее Mac",
    relatedIntro: "Продолжите другим практичным гидом о предупреждениях низкого заряда и выключения Mac."
  },
  "zh-Hans": {
    eyebrow: "Mac 电池指南",
    answerTitle: "简短回答",
    stepsTitle: "该怎么做",
    whyTitle: "为什么重要",
    settingsTitle: "BatteryCountdown 实用设置",
    quickTitle: "快速回答",
    finalEyebrow: "Mac 低电量警告",
    relatedTitle: "相关 Mac 电池指南",
    relatedIntro: "继续阅读另一篇关于 Mac 低电量警告和关机提醒的实用指南。"
  }
};

extraGuideCommon["pt-br"] = extraGuideCommon["pt-BR"];
extraGuideCommon["zh-hans"] = extraGuideCommon["zh-Hans"];

const extraGuideContent = {
  en: {
    guideWarningNotShowing: {
      title: "MacBook Low Battery Warning Not Showing | BatteryCountdown",
      description: "If the MacBook low battery warning is not showing, learn what macOS controls, what to check, and how BatteryCountdown adds a visible countdown.",
      ogDescription: "Troubleshoot missing MacBook low battery warnings and add a visible menu bar countdown.",
      h1: "MacBook low battery warning not showing",
      lead: "If your MacBook low battery warning is easy to miss or does not appear when you expect it, the practical fix is to add a visible countdown before shutdown.",
      answerParagraphs: [
        "macOS controls the built-in low battery warning automatically, and there is no normal setting that guarantees exactly when it appears.",
        "BatteryCountdown does not replace Apple's alert. It adds a separate menu bar countdown so you can see how much time is left before low battery may shut down your Mac."
      ],
      steps: [
        "Check that your Mac is running on battery power and not already connected to a charger.",
        "Look at battery percentage, battery health, and current workload, because heavy apps can shorten the final minutes.",
        "Install BatteryCountdown and choose the battery percentage where its countdown should start.",
        "Keep the menu bar timer visible, or use Charger Run Mode when you need a harder-to-miss warning."
      ],
      whyParagraphs: [
        "A missing or late warning is risky because the final battery percentage can disappear faster than expected under load.",
        "A time-based countdown is easier to act on than a percentage alone: it tells you whether you have time to finish, save, or get the charger now."
      ],
      settings: [
        "Choose a custom low battery trigger from 1% to 20%.",
        "Show the countdown in the menu bar when battery time matters.",
        "Use red or blinking countdown behavior for the final minutes.",
        "Enable Charger Run Mode for a more visible full-screen warning."
      ],
      quick: [
        ["Why is my MacBook low battery warning not showing?", "macOS decides when to show its own warning, and workload, battery health, focus, or notification behavior can make it easy to miss."],
        ["Can I force the Apple low battery warning to appear earlier?", "Not with a simple built-in macOS setting. BatteryCountdown adds its own earlier countdown instead."],
        ["Will BatteryCountdown change system files?", "No. It runs as a separate local menu bar app and does not modify macOS system alerts."]
      ],
      finalTitle: "Add a warning you can actually see.",
      finalBody: "BatteryCountdown keeps low battery time visible in the menu bar, so a missing Apple warning does not become lost work.",
      linkTitle: "MacBook low battery warning not showing",
      linkDescription: "Troubleshoot missing low battery warnings and add a visible countdown."
    },
    guideShutdownWarning: {
      title: "How to Get a Shutdown Warning on Mac | BatteryCountdown",
      description: "Learn how to get a shutdown warning on Mac before low battery powers it off, and how BatteryCountdown shows time left in the menu bar.",
      ogDescription: "Get a clearer shutdown warning on Mac before low battery powers off your computer.",
      h1: "How to get a shutdown warning on Mac",
      lead: "The most useful shutdown warning is not just a percentage. It is a visible estimate of how much time you have before your Mac may power off.",
      answerParagraphs: [
        "macOS may warn you when battery is low, but it does not give most users a dedicated setting for a custom shutdown countdown.",
        "BatteryCountdown creates that warning by showing the estimated time left before low battery shutdown directly in the menu bar."
      ],
      steps: [
        "Install BatteryCountdown from the Mac App Store.",
        "Choose when the low battery countdown should start, from 1% to 20%.",
        "Decide whether the menu bar item should always be visible or appear only when useful.",
        "Use Charger Run Mode if you want a louder, more obvious warning when time is almost out."
      ],
      whyParagraphs: [
        "Shutdown warnings are most valuable when they happen early enough for you to save work and reach a charger.",
        "A live countdown makes the decision concrete: keep working, save now, or plug in immediately."
      ],
      settings: [
        "Menu bar countdown for low battery time.",
        "Custom trigger percentage between 1% and 20%.",
        "Optional battery percentage in the menu bar.",
        "Charging estimate in the dropdown when your Mac is plugged in."
      ],
      quick: [
        ["Does macOS have a shutdown warning?", "macOS has built-in battery behavior, but it does not provide a simple custom shutdown countdown setting."],
        ["Can BatteryCountdown warn before shutdown?", "Yes. It estimates low battery time left and shows it where you can see it."],
        ["Is Charger Run Mode required?", "No. It is optional for moments where a quiet menu bar warning is not enough."]
      ],
      finalTitle: "Get a clearer Mac shutdown warning.",
      finalBody: "Use BatteryCountdown to turn low battery risk into a visible countdown before your Mac powers off.",
      linkTitle: "How to get a shutdown warning on Mac",
      linkDescription: "Set up a clearer warning before low battery powers off your Mac."
    },
    guideLowBatteryAlert: {
      title: "Can You Change the Mac Low Battery Alert? | BatteryCountdown",
      description: "Can you change the Mac low battery alert? Learn what macOS allows, what it does not, and how to add a custom countdown warning.",
      ogDescription: "Learn whether the Mac low battery alert can be changed and how to add a custom countdown.",
      h1: "Can you change the Mac low battery alert?",
      lead: "Short answer: not directly in the normal macOS settings. But you can add a separate low battery countdown that behaves the way you want.",
      answerParagraphs: [
        "Apple controls the built-in Mac low battery alert. Most users cannot simply choose a new alert percentage or custom shutdown timer in System Settings.",
        "BatteryCountdown solves the practical problem by letting you choose when its own countdown starts and by keeping remaining time visible in the menu bar."
      ],
      steps: [
        "Decide when you want to be warned: earlier for safety, later for fewer interruptions.",
        "Set BatteryCountdown to start at a battery percentage between 1% and 20%.",
        "Choose whether the menu bar should show only time, percentage, or both.",
        "Test the setup once so you know what the warning looks like before you need it."
      ],
      whyParagraphs: [
        "The built-in alert is simple, but it may not match how you work or how fast your Mac drains under load.",
        "A custom countdown gives you a more useful signal: real time remaining before a possible shutdown."
      ],
      settings: [
        "Start countdown at your preferred low battery percentage.",
        "Show time left directly in the menu bar.",
        "Show battery percentage if you want extra context.",
        "Use Charger Run Mode when you want the warning to be impossible to ignore."
      ],
      quick: [
        ["Can I change the Apple low battery alert percentage?", "Not through a normal macOS slider. BatteryCountdown adds a separate custom warning."],
        ["Can I turn the BatteryCountdown warning off?", "Yes. You control when it appears and how visible it should be."],
        ["Does this work alongside the normal battery icon?", "Yes. BatteryCountdown is a separate menu bar utility."]
      ],
      finalTitle: "Make the low battery alert useful.",
      finalBody: "BatteryCountdown lets you choose a warning that fits how you actually use your Mac.",
      linkTitle: "Can you change the Mac low battery alert?",
      linkDescription: "Understand Apple's alert limits and add your own countdown warning."
    },
    guideBestApp: {
      title: "Best Low Battery Warning App for Mac | BatteryCountdown",
      description: "Looking for the best low battery warning app for Mac? Learn what to look for and why a countdown is more useful than another battery icon.",
      ogDescription: "What makes a good Mac low battery warning app, and why BatteryCountdown focuses on time left.",
      h1: "Best low battery warning app for Mac",
      lead: "The best low battery warning app for Mac should answer one question quickly: how much time do I have before this Mac may shut down?",
      answerParagraphs: [
        "A good low battery app should be lightweight, visible, private, and focused on action. It should not just duplicate the standard battery icon.",
        "BatteryCountdown is built around a live menu bar countdown, custom trigger percentage, and an optional Charger Run Mode for more urgent moments."
      ],
      steps: [
        "Look for a warning that shows time left, not only battery percentage.",
        "Choose an app that stays lightweight and does not need an account.",
        "Prefer controls for when the warning starts and how visible it becomes.",
        "Use BatteryCountdown if your main goal is avoiding sudden low battery shutdown."
      ],
      whyParagraphs: [
        "Percent alone can be misleading. Five percent can mean different amounts of time depending on battery health, screen brightness, and workload.",
        "A countdown is more actionable because it turns low battery into a time decision."
      ],
      settings: [
        "Live menu bar countdown before possible shutdown.",
        "Custom low battery trigger from 1% to 20%.",
        "Local-only design with no account requirement.",
        "Optional Charger Run Mode for stronger warnings."
      ],
      quick: [
        ["What should a Mac low battery warning app do?", "It should make the final minutes visible early enough to save work and plug in."],
        ["Is BatteryCountdown a battery monitor?", "It is focused on low battery time and shutdown warning, not broad battery statistics."],
        ["Does the app need to run in the Dock?", "No. BatteryCountdown is designed as a menu bar utility."]
      ],
      finalTitle: "Choose a warning built for action.",
      finalBody: "BatteryCountdown gives you the countdown that the standard battery icon does not.",
      linkTitle: "Best low battery warning app for Mac",
      linkDescription: "Learn what to look for in a Mac battery warning utility."
    }
  },
  de: {
    guideWarningNotShowing: {
      title: "MacBook Akkuwarnung wird nicht angezeigt | BatteryCountdown",
      description: "Wenn die MacBook Akkuwarnung nicht angezeigt wird: Prüfe macOS-Verhalten und füge mit BatteryCountdown einen sichtbaren Countdown hinzu.",
      ogDescription: "Fehlende MacBook Akkuwarnung prüfen und sichtbaren Menueleisten-Countdown ergänzen.",
      h1: "MacBook Akkuwarnung wird nicht angezeigt",
      lead: "Wenn die Warnung bei niedrigem Akku nicht erscheint oder leicht übersehen wird, hilft ein sichtbarer Countdown vor dem Shutdown.",
      answerParagraphs: [
        "macOS steuert die eingebaute Akkuwarnung automatisch. Es gibt keine normale Einstellung, die exakt garantiert, wann sie erscheint.",
        "BatteryCountdown ersetzt Apples Warnung nicht. Die App ergänzt einen separaten Countdown in der Menueleiste, damit du siehst, wie viel Zeit bis zum möglichen Ausschalten bleibt."
      ],
      steps: [
        "Prüfe, ob dein Mac wirklich im Akkubetrieb läuft und nicht bereits am Netzteil hängt.",
        "Beachte Akkustand, Batteriezustand und aktuelle Last, weil schwere Apps die letzten Minuten verkürzen können.",
        "Installiere BatteryCountdown und wähle den Akkustand, bei dem der Countdown starten soll.",
        "Lass den Timer sichtbar oder nutze Charger Run Mode, wenn die Warnung deutlicher sein soll."
      ],
      whyParagraphs: [
        "Eine fehlende oder späte Warnung ist riskant, weil die letzten Prozent unter Last schnell verschwinden können.",
        "Ein Countdown nach Zeit ist leichter zu handeln als eine Prozentzahl: Du siehst, ob du noch fertig werden, speichern oder sofort laden musst."
      ],
      settings: [
        "Eigener Auslöser für niedrigen Akku von 1% bis 20%.",
        "Countdown in der Menueleiste, wenn Akkulaufzeit wichtig wird.",
        "Roter oder blinkender Countdown in den letzten Minuten.",
        "Charger Run Mode für eine deutlich sichtbarere Warnung."
      ],
      quick: [
        ["Warum erscheint die MacBook Akkuwarnung nicht?", "macOS entscheidet selbst, wann die Warnung angezeigt wird. Last, Batteriezustand oder Benachrichtigungen können sie leicht übersehbar machen."],
        ["Kann ich Apples Akkuwarnung früher anzeigen lassen?", "Nicht über eine einfache macOS-Einstellung. BatteryCountdown ergänzt stattdessen einen eigenen früheren Countdown."],
        ["Ändert BatteryCountdown Systemdateien?", "Nein. Es läuft lokal als separate Menueleisten-App."]
      ],
      finalTitle: "Füge eine Warnung hinzu, die du wirklich siehst.",
      finalBody: "BatteryCountdown hält die verbleibende Akkuzeit sichtbar, damit eine fehlende Apple-Warnung nicht zu verlorener Arbeit wird.",
      linkTitle: "MacBook Akkuwarnung wird nicht angezeigt",
      linkDescription: "Fehlende Warnungen prüfen und einen sichtbaren Countdown ergänzen."
    },
    guideShutdownWarning: {
      title: "Shutdown-Warnung auf dem Mac erhalten | BatteryCountdown",
      description: "So bekommst du eine Shutdown-Warnung auf dem Mac, bevor niedriger Akku ihn ausschaltet, inklusive Menueleisten-Countdown.",
      ogDescription: "Eine klarere Shutdown-Warnung auf dem Mac einrichten.",
      h1: "So bekommst du eine Shutdown-Warnung auf dem Mac",
      lead: "Die beste Shutdown-Warnung ist nicht nur eine Prozentzahl, sondern eine sichtbare Schätzung der verbleibenden Zeit.",
      answerParagraphs: [
        "macOS kann bei niedrigem Akku warnen, bietet aber meist keinen eigenen Countdown bis zum Ausschalten.",
        "BatteryCountdown zeigt die geschätzte Restzeit bis zum möglichen Akku-Shutdown direkt in der Menueleiste."
      ],
      steps: [
        "Installiere BatteryCountdown aus dem Mac App Store.",
        "Wähle, wann der Countdown starten soll, von 1% bis 20%.",
        "Entscheide, ob das Menueleisten-Element immer sichtbar ist oder nur bei Bedarf erscheint.",
        "Nutze Charger Run Mode, wenn die Warnung in den letzten Minuten auffälliger sein soll."
      ],
      whyParagraphs: [
        "Shutdown-Warnungen helfen nur, wenn sie früh genug kommen, um zu speichern und ein Netzteil zu holen.",
        "Ein Live-Countdown macht die Entscheidung konkret: weiterarbeiten, sofort speichern oder einstecken."
      ],
      settings: [
        "Menueleisten-Countdown für niedrigen Akku.",
        "Eigener Auslösewert zwischen 1% und 20%.",
        "Optionaler Akkuprozentsatz in der Menueleiste.",
        "Ladezeitschätzung im Dropdown, wenn der Mac angeschlossen ist."
      ],
      quick: [
        ["Hat macOS eine Shutdown-Warnung?", "macOS hat eigenes Akkuverhalten, aber keine einfache Einstellung für einen eigenen Shutdown-Countdown."],
        ["Kann BatteryCountdown vor dem Ausschalten warnen?", "Ja. Die App schätzt die Restzeit und zeigt sie sichtbar an."],
        ["Ist Charger Run Mode nötig?", "Nein. Er ist optional, wenn ein ruhiger Menueleisten-Timer nicht reicht."]
      ],
      finalTitle: "Bekomme eine klarere Mac Shutdown-Warnung.",
      finalBody: "BatteryCountdown macht das Risiko von niedrigem Akku als Countdown sichtbar.",
      linkTitle: "Shutdown-Warnung auf dem Mac erhalten",
      linkDescription: "Eine deutlichere Warnung vor dem Ausschalten durch niedrigen Akku einrichten."
    },
    guideLowBatteryAlert: {
      title: "Mac Akkuwarnung ändern | BatteryCountdown",
      description: "Kann man die Mac Akkuwarnung ändern? Erfahre, was macOS erlaubt und wie du einen eigenen Countdown ergänzt.",
      ogDescription: "Apples Akkuwarnung verstehen und einen eigenen Countdown hinzufügen.",
      h1: "Kann man die Mac Akkuwarnung ändern?",
      lead: "Kurz gesagt: nicht direkt in den normalen macOS-Einstellungen. Du kannst aber einen separaten Countdown hinzufügen.",
      answerParagraphs: [
        "Apple steuert die eingebaute Warnung bei niedrigem Akku. Die meisten Nutzer können keinen neuen Prozentwert in den Systemeinstellungen wählen.",
        "BatteryCountdown löst das praktische Problem, indem du den Startpunkt des Countdowns selbst wählst."
      ],
      steps: [
        "Entscheide, ob du früher oder später gewarnt werden möchtest.",
        "Setze BatteryCountdown auf einen Startwert zwischen 1% und 20%.",
        "Wähle, ob Zeit, Prozent oder beides angezeigt werden soll.",
        "Teste die Anzeige einmal, bevor du sie wirklich brauchst."
      ],
      whyParagraphs: [
        "Die eingebaute Warnung ist simpel, passt aber nicht immer zu deiner Arbeitsweise.",
        "Ein eigener Countdown zeigt echte Restzeit statt nur einen Akkuprozentsatz."
      ],
      settings: [
        "Countdown bei deinem bevorzugten Akkuwert starten.",
        "Restzeit direkt in der Menueleiste anzeigen.",
        "Optional Prozentanzeige ergänzen.",
        "Charger Run Mode aktivieren, wenn die Warnung schwer zu übersehen sein soll."
      ],
      quick: [
        ["Kann ich Apples Akkuwarnung bei einem anderen Prozentwert auslösen?", "Nicht über einen normalen macOS-Regler. BatteryCountdown ergänzt eine eigene Warnung."],
        ["Kann ich die BatteryCountdown-Warnung deaktivieren?", "Ja. Du steuerst, wann und wie sichtbar sie erscheint."],
        ["Funktioniert es neben dem normalen Batteriesymbol?", "Ja. BatteryCountdown ist ein separates Menueleisten-Tool."]
      ],
      finalTitle: "Mach die Akkuwarnung nützlicher.",
      finalBody: "BatteryCountdown gibt dir eine Warnung, die zu deiner Mac-Nutzung passt.",
      linkTitle: "Mac Akkuwarnung ändern",
      linkDescription: "Apples Grenzen verstehen und eigenen Countdown ergänzen."
    },
    guideBestApp: {
      title: "Beste Akkuwarnung-App für Mac | BatteryCountdown",
      description: "Welche ist die beste Akkuwarnung-App für Mac? Worauf du achten solltest und warum ein Countdown mehr hilft als ein weiteres Icon.",
      ogDescription: "Was eine gute Akkuwarnung-App für Mac ausmacht.",
      h1: "Beste Akkuwarnung-App für Mac",
      lead: "Eine gute Akkuwarnung-App sollte schnell beantworten: Wie viel Zeit bleibt, bevor mein Mac ausgehen kann?",
      answerParagraphs: [
        "Eine gute App ist leichtgewichtig, sichtbar, privat und handlungsorientiert. Sie sollte nicht nur das normale Batteriesymbol kopieren.",
        "BatteryCountdown setzt auf Live-Countdown, eigenen Startwert und optionalen Charger Run Mode."
      ],
      steps: [
        "Achte auf Restzeit statt nur Prozentanzeige.",
        "Wähle eine App ohne Account-Zwang und mit geringer Last.",
        "Bevorzuge Einstellungen für Startzeitpunkt und Sichtbarkeit.",
        "Nutze BatteryCountdown, wenn du plötzliche Akku-Shutdowns vermeiden willst."
      ],
      whyParagraphs: [
        "Prozentwerte können täuschen. Fünf Prozent bedeuten je nach Last und Batteriezustand unterschiedlich viel Zeit.",
        "Ein Countdown ist handlungsorientiert, weil er aus Akkuwarnung eine Zeitentscheidung macht."
      ],
      settings: [
        "Live-Countdown in der Menueleiste.",
        "Eigener Auslösewert von 1% bis 20%.",
        "Lokales Design ohne Account.",
        "Optionaler Charger Run Mode für stärkere Warnungen."
      ],
      quick: [
        ["Was sollte eine Mac Akkuwarnung-App können?", "Sie sollte die letzten Minuten sichtbar machen, bevor Arbeit verloren geht."],
        ["Ist BatteryCountdown ein Akku-Monitor?", "Der Fokus liegt auf Restzeit und Shutdown-Warnung, nicht auf allgemeinen Akku-Statistiken."],
        ["Muss die App im Dock laufen?", "Nein. BatteryCountdown ist als Menueleisten-App gebaut."]
      ],
      finalTitle: "Wähle eine Warnung, die zum Handeln führt.",
      finalBody: "BatteryCountdown liefert den Countdown, den das normale Batteriesymbol nicht zeigt.",
      linkTitle: "Beste Akkuwarnung-App für Mac",
      linkDescription: "Worauf du bei einer Mac Akkuwarnung-App achten solltest."
    }
  }
};

extraGuideContent.es = {
  guideWarningNotShowing: {
    title: "Aviso de batería baja MacBook no aparece | BatteryCountdown",
    description: "Si el aviso de batería baja del MacBook no aparece, revisa qué controla macOS y añade una cuenta atrás visible con BatteryCountdown.",
    ogDescription: "Soluciona avisos de batería baja que no aparecen y añade una cuenta atrás.",
    h1: "El aviso de batería baja del MacBook no aparece",
    lead: "Si el aviso de batería baja no aparece o se pierde fácilmente, lo más práctico es añadir una cuenta atrás visible antes del apagado.",
    answerParagraphs: [
      "macOS controla automáticamente su aviso de batería baja y no ofrece un ajuste normal para decidir exactamente cuándo aparece.",
      "BatteryCountdown no reemplaza la alerta de Apple. Añade una cuenta atrás separada en la barra de menús para ver cuánto tiempo queda."
    ],
    steps: [
      "Comprueba que el Mac está usando batería y no está conectado al cargador.",
      "Revisa porcentaje, salud de batería y carga de trabajo, porque apps pesadas acortan los últimos minutos.",
      "Instala BatteryCountdown y elige el porcentaje donde debe empezar la cuenta atrás.",
      "Mantén visible el temporizador o usa Charger Run Mode para un aviso más difícil de ignorar."
    ],
    whyParagraphs: [
      "Un aviso que falta o llega tarde puede hacer que los últimos porcentajes desaparezcan más rápido de lo esperado.",
      "Una cuenta atrás por tiempo es más accionable que un porcentaje: sabes si puedes terminar, guardar o buscar el cargador ya."
    ],
    settings: ["Activador personalizado de 1% a 20%.", "Cuenta atrás en la barra de menús.", "Texto rojo o parpadeante en los minutos finales.", "Charger Run Mode para un aviso mucho más visible."],
    quick: [["¿Por qué no aparece el aviso?", "macOS decide cuándo mostrarlo y puede ser fácil pasarlo por alto."], ["¿Puedo forzar que aparezca antes?", "No con un ajuste simple de macOS. BatteryCountdown añade su propio aviso."], ["¿Cambia archivos del sistema?", "No. Es una app local independiente en la barra de menús."]],
    finalTitle: "Añade un aviso que sí veas.",
    finalBody: "BatteryCountdown mantiene visible el tiempo restante para que no pierdas trabajo por una alerta perdida.",
    linkTitle: "Aviso de batería baja MacBook no aparece",
    linkDescription: "Revisa el problema y añade una cuenta atrás visible."
  },
  guideShutdownWarning: {
    title: "Cómo recibir un aviso de apagado en Mac | BatteryCountdown",
    description: "Aprende cómo recibir un aviso de apagado en Mac antes de que la batería baja lo apague, con tiempo restante en la barra de menús.",
    ogDescription: "Configura un aviso más claro antes de que la batería apague tu Mac.",
    h1: "Cómo recibir un aviso de apagado en Mac",
    lead: "El aviso más útil no es solo un porcentaje: es una estimación visible del tiempo que queda antes de que el Mac pueda apagarse.",
    answerParagraphs: ["macOS puede avisar cuando queda poca batería, pero no ofrece una cuenta atrás personalizada para la mayoría de usuarios.", "BatteryCountdown añade ese aviso mostrando el tiempo estimado antes del apagado por batería baja."],
    steps: ["Instala BatteryCountdown desde el Mac App Store.", "Elige cuándo debe empezar la cuenta atrás, de 1% a 20%.", "Decide si el elemento de la barra de menús estará siempre visible o solo cuando sea útil.", "Usa Charger Run Mode si necesitas una advertencia más evidente."],
    whyParagraphs: ["Un aviso de apagado sirve cuando llega con tiempo para guardar y conectar el cargador.", "Una cuenta atrás convierte el riesgo en una decisión clara: seguir, guardar o enchufar."],
    settings: ["Cuenta atrás en la barra de menús.", "Porcentaje de activación personalizado.", "Porcentaje opcional en la barra.", "Estimación de carga en el desplegable."],
    quick: [["¿macOS tiene aviso de apagado?", "Tiene avisos de batería, pero no una cuenta atrás personalizada sencilla."], ["¿BatteryCountdown avisa antes?", "Sí. Estima el tiempo restante y lo muestra en la barra de menús."], ["¿Charger Run Mode es obligatorio?", "No. Es opcional para avisos más visibles."]],
    finalTitle: "Recibe un aviso de apagado más claro.",
    finalBody: "BatteryCountdown convierte la batería baja en una cuenta atrás visible.",
    linkTitle: "Cómo recibir un aviso de apagado en Mac",
    linkDescription: "Configura un aviso antes de que la batería apague el Mac."
  },
  guideLowBatteryAlert: {
    title: "¿Se puede cambiar la alerta de batería baja en Mac?",
    description: "¿Se puede cambiar la alerta de batería baja en Mac? Aprende qué permite macOS y cómo añadir una cuenta atrás personalizada.",
    ogDescription: "Entiende los límites de macOS y añade una alerta personalizada.",
    h1: "¿Se puede cambiar la alerta de batería baja en Mac?",
    lead: "Respuesta corta: no directamente desde los ajustes normales de macOS. Pero puedes añadir una cuenta atrás separada.",
    answerParagraphs: ["Apple controla la alerta integrada de batería baja. La mayoría de usuarios no puede elegir otro porcentaje exacto.", "BatteryCountdown permite elegir cuándo empieza su propia cuenta atrás y mostrar el tiempo restante."],
    steps: ["Decide si quieres un aviso temprano o menos interrupciones.", "Configura BatteryCountdown entre 1% y 20%.", "Elige si quieres ver tiempo, porcentaje o ambos.", "Prueba el aviso una vez antes de necesitarlo."],
    whyParagraphs: ["La alerta integrada es simple, pero no siempre encaja con tu forma de trabajar.", "Una cuenta atrás personalizada muestra tiempo real, no solo porcentaje."],
    settings: ["Inicio personalizado de la cuenta atrás.", "Tiempo restante en la barra de menús.", "Porcentaje opcional.", "Charger Run Mode para avisos imposibles de ignorar."],
    quick: [["¿Puedo cambiar el porcentaje de Apple?", "No con un control normal de macOS."], ["¿Puedo apagar el aviso de BatteryCountdown?", "Sí. Tú controlas cuándo aparece."], ["¿Funciona junto al icono normal?", "Sí. Es una utilidad separada."]],
    finalTitle: "Haz que la alerta de batería sea útil.",
    finalBody: "BatteryCountdown te deja elegir un aviso que encaja con tu uso real del Mac.",
    linkTitle: "Cambiar alerta de batería baja en Mac",
    linkDescription: "Conoce los límites de Apple y añade tu propio aviso."
  },
  guideBestApp: {
    title: "Mejor app de aviso de batería baja para Mac",
    description: "¿Buscas la mejor app de aviso de batería baja para Mac? Aprende qué debe tener y por qué una cuenta atrás ayuda más.",
    ogDescription: "Qué buscar en una app de aviso de batería baja para Mac.",
    h1: "Mejor app de aviso de batería baja para Mac",
    lead: "La mejor app debe responder rápido: ¿cuánto tiempo queda antes de que el Mac pueda apagarse?",
    answerParagraphs: ["Una buena app debe ser ligera, visible, privada y orientada a actuar, no solo duplicar el icono de batería.", "BatteryCountdown se centra en una cuenta atrás en la barra de menús, activador personalizado y Charger Run Mode opcional."],
    steps: ["Busca tiempo restante, no solo porcentaje.", "Elige una app ligera y sin cuenta obligatoria.", "Prefiere controles de inicio y visibilidad.", "Usa BatteryCountdown si quieres evitar apagados repentinos."],
    whyParagraphs: ["El porcentaje puede engañar: 5% no siempre significa el mismo tiempo.", "Una cuenta atrás convierte la batería baja en una decisión clara."],
    settings: ["Cuenta atrás en vivo.", "Activador de 1% a 20%.", "Diseño local sin cuenta.", "Charger Run Mode opcional."],
    quick: [["¿Qué debe hacer una app así?", "Mostrar los últimos minutos con tiempo suficiente para actuar."], ["¿BatteryCountdown es un monitor completo?", "No. Se centra en tiempo restante y aviso de apagado."], ["¿Debe estar en el Dock?", "No. Está diseñada para la barra de menús."]],
    finalTitle: "Elige un aviso pensado para actuar.",
    finalBody: "BatteryCountdown muestra la cuenta atrás que el icono estándar no muestra.",
    linkTitle: "Mejor app de aviso de batería baja para Mac",
    linkDescription: "Qué buscar en una utilidad de batería para Mac."
  }
};

extraGuideContent.fr = {
  guideWarningNotShowing: {
    title: "Alerte batterie faible MacBook absente | BatteryCountdown",
    description: "Si l'alerte batterie faible du MacBook ne s'affiche pas, voyez ce que macOS contrôle et ajoutez un compte à rebours visible.",
    ogDescription: "Comprendre une alerte batterie faible absente et ajouter un compte à rebours visible.",
    h1: "L'alerte batterie faible du MacBook ne s'affiche pas",
    lead: "Si l'alerte batterie faible n'apparaît pas ou passe inaperçue, le plus pratique est d'ajouter un compte à rebours visible.",
    answerParagraphs: ["macOS contrôle automatiquement son alerte batterie faible et ne propose pas de réglage simple pour choisir exactement son moment.", "BatteryCountdown ne remplace pas l'alerte Apple. Il ajoute un compte à rebours dans la barre des menus."],
    steps: ["Vérifiez que le Mac fonctionne sur batterie.", "Regardez le pourcentage, l'état de la batterie et la charge actuelle.", "Installez BatteryCountdown et choisissez le pourcentage de départ.", "Gardez le minuteur visible ou utilisez Charger Run Mode pour une alerte plus forte."],
    whyParagraphs: ["Une alerte absente ou tardive peut faire perdre les dernières minutes plus vite que prévu.", "Le temps restant est plus utile qu'un simple pourcentage pour enregistrer et brancher le chargeur."],
    settings: ["Déclencheur personnalisé de 1% à 20%.", "Compte à rebours dans la barre des menus.", "Texte rouge ou clignotant en fin de batterie.", "Charger Run Mode pour une alerte plus visible."],
    quick: [["Pourquoi l'alerte ne s'affiche pas ?", "macOS décide quand l'afficher et elle peut être facile à manquer."], ["Puis-je la forcer plus tôt ?", "Pas avec un réglage macOS simple. BatteryCountdown ajoute sa propre alerte."], ["Modifie-t-il macOS ?", "Non. C'est une app locale séparée."]],
    finalTitle: "Ajoutez une alerte vraiment visible.",
    finalBody: "BatteryCountdown garde le temps restant visible pour éviter une extinction surprise.",
    linkTitle: "Alerte batterie faible MacBook absente",
    linkDescription: "Diagnostiquer l'alerte absente et ajouter un compte à rebours."
  },
  guideShutdownWarning: {
    title: "Obtenir une alerte d'extinction sur Mac",
    description: "Comment obtenir une alerte d'extinction sur Mac avant que la batterie faible ne l'éteigne, avec le temps restant dans la barre des menus.",
    ogDescription: "Mettre en place une alerte plus claire avant l'extinction du Mac.",
    h1: "Comment obtenir une alerte d'extinction sur Mac",
    lead: "La meilleure alerte n'est pas seulement un pourcentage, mais une estimation visible du temps restant.",
    answerParagraphs: ["macOS peut prévenir en cas de batterie faible, mais ne propose pas de compte à rebours personnalisé pour la plupart des utilisateurs.", "BatteryCountdown affiche le temps estimé avant extinction dans la barre des menus."],
    steps: ["Installez BatteryCountdown depuis le Mac App Store.", "Choisissez le déclenchement entre 1% et 20%.", "Décidez si l'élément de menu reste visible ou apparaît seulement quand il est utile.", "Utilisez Charger Run Mode pour une alerte plus évidente."],
    whyParagraphs: ["Une alerte d'extinction est utile si elle arrive assez tôt pour enregistrer et brancher.", "Un compte à rebours rend la décision concrète : continuer, enregistrer ou brancher maintenant."],
    settings: ["Compte à rebours dans la barre des menus.", "Pourcentage de déclenchement personnalisé.", "Pourcentage de batterie optionnel.", "Estimation de charge dans le menu."],
    quick: [["macOS a-t-il une alerte d'extinction ?", "Il a des alertes batterie, mais pas de compte à rebours personnalisé simple."], ["BatteryCountdown peut-il prévenir avant ?", "Oui. Il estime le temps restant."], ["Charger Run Mode est-il requis ?", "Non, il est optionnel."]],
    finalTitle: "Obtenez une alerte d'extinction plus claire.",
    finalBody: "BatteryCountdown transforme le risque de batterie faible en compte à rebours visible.",
    linkTitle: "Obtenir une alerte d'extinction sur Mac",
    linkDescription: "Configurer une alerte avant extinction par batterie faible."
  },
  guideLowBatteryAlert: {
    title: "Modifier l'alerte batterie faible sur Mac",
    description: "Peut-on modifier l'alerte batterie faible sur Mac ? Découvrez les limites de macOS et ajoutez un compte à rebours personnalisé.",
    ogDescription: "Comprendre l'alerte Apple et ajouter une alerte personnalisée.",
    h1: "Peut-on modifier l'alerte batterie faible sur Mac ?",
    lead: "Réponse courte : pas directement dans les réglages macOS habituels. Mais vous pouvez ajouter un compte à rebours séparé.",
    answerParagraphs: ["Apple contrôle l'alerte intégrée. La plupart des utilisateurs ne peuvent pas choisir un autre pourcentage exact.", "BatteryCountdown permet de choisir le moment où son propre compte à rebours commence."],
    steps: ["Décidez si vous voulez être prévenu plus tôt ou avec moins d'interruptions.", "Réglez BatteryCountdown entre 1% et 20%.", "Choisissez temps, pourcentage ou les deux.", "Testez l'affichage avant d'en avoir besoin."],
    whyParagraphs: ["L'alerte intégrée est simple, mais ne correspond pas toujours à votre usage.", "Un compte à rebours montre le temps réel, pas seulement un pourcentage."],
    settings: ["Départ personnalisé du compte à rebours.", "Temps restant dans la barre des menus.", "Pourcentage optionnel.", "Charger Run Mode pour une alerte plus forte."],
    quick: [["Puis-je changer le pourcentage Apple ?", "Pas avec un réglage macOS normal."], ["Puis-je désactiver l'alerte BatteryCountdown ?", "Oui. Vous contrôlez son apparition."], ["Fonctionne-t-il avec l'icône batterie normale ?", "Oui. C'est un utilitaire séparé."]],
    finalTitle: "Rendez l'alerte batterie plus utile.",
    finalBody: "BatteryCountdown vous laisse choisir une alerte adaptée à votre façon d'utiliser le Mac.",
    linkTitle: "Modifier l'alerte batterie faible sur Mac",
    linkDescription: "Comprendre les limites d'Apple et ajouter votre propre alerte."
  },
  guideBestApp: {
    title: "Meilleure app d'alerte batterie faible Mac",
    description: "Quelle est la meilleure app d'alerte batterie faible pour Mac ? Voici quoi chercher et pourquoi un compte à rebours aide davantage.",
    ogDescription: "Ce qui fait une bonne app d'alerte batterie faible pour Mac.",
    h1: "Meilleure app d'alerte batterie faible pour Mac",
    lead: "La meilleure app répond vite à une question : combien de temps reste-t-il avant que le Mac puisse s'éteindre ?",
    answerParagraphs: ["Une bonne app doit être légère, visible, privée et orientée action.", "BatteryCountdown se concentre sur le compte à rebours en barre des menus, un déclencheur personnalisé et Charger Run Mode."],
    steps: ["Cherchez le temps restant, pas seulement le pourcentage.", "Choisissez une app légère sans compte obligatoire.", "Préférez des réglages de déclenchement et de visibilité.", "Utilisez BatteryCountdown pour éviter les extinctions surprises."],
    whyParagraphs: ["Le pourcentage peut être trompeur selon la charge et l'état de la batterie.", "Un compte à rebours rend la batterie faible immédiatement compréhensible."],
    settings: ["Compte à rebours en direct.", "Déclencheur de 1% à 20%.", "Conception locale sans compte.", "Charger Run Mode optionnel."],
    quick: [["Que doit faire une telle app ?", "Rendre les dernières minutes visibles assez tôt pour agir."], ["BatteryCountdown est-il un moniteur complet ?", "Non. Il se concentre sur le temps restant et l'alerte d'extinction."], ["Doit-il rester dans le Dock ?", "Non. Il est conçu pour la barre des menus."]],
    finalTitle: "Choisissez une alerte faite pour agir.",
    finalBody: "BatteryCountdown affiche le compte à rebours que l'icône standard ne donne pas.",
    linkTitle: "Meilleure app d'alerte batterie faible Mac",
    linkDescription: "Ce qu'il faut chercher dans un utilitaire batterie Mac."
  }
};

extraGuideContent.hi = {
  guideWarningNotShowing: {
    title: "MacBook low battery warning नहीं दिख रही",
    description: "MacBook low battery warning नहीं दिख रही? macOS क्या control करता है जानें और BatteryCountdown से visible countdown जोड़ें.",
    ogDescription: "Missing MacBook low battery warning को समझें और menu bar countdown जोड़ें.",
    h1: "MacBook low battery warning नहीं दिख रही",
    lead: "अगर low battery warning नहीं दिखती या miss हो जाती है, तो shutdown से पहले visible countdown सबसे practical fix है.",
    answerParagraphs: ["macOS built-in warning को automatic तरीके से control करता है. Exact timing चुनने की normal setting नहीं है.", "BatteryCountdown Apple alert को replace नहीं करता. यह menu bar में अलग countdown जोड़ता है."],
    steps: ["Check करें कि Mac battery पर चल रहा है.", "Battery percentage, health और current workload देखें.", "BatteryCountdown install करें और countdown start percentage चुनें.", "Timer visible रखें या ज्यादा strong warning के लिए Charger Run Mode use करें."],
    whyParagraphs: ["Late या missing warning से last minutes unexpectedly जल्दी खत्म हो सकते हैं.", "Time countdown percentage से ज्यादा actionable है: आप जान पाते हैं save करना है या charger लगाना है."],
    settings: ["1% से 20% custom trigger.", "Menu bar countdown.", "Final minutes में red/blinking countdown.", "More visible warning के लिए Charger Run Mode."],
    quick: [["Warning क्यों नहीं दिखती?", "macOS खुद decide करता है और warning miss हो सकती है."], ["क्या Apple warning जल्दी force कर सकता हूँ?", "Normal macOS setting से नहीं. BatteryCountdown अपना countdown जोड़ता है."], ["क्या system files बदलती हैं?", "नहीं. यह separate local menu bar app है."]],
    finalTitle: "ऐसी warning जोड़ें जो सच में दिखे.",
    finalBody: "BatteryCountdown low battery time को visible रखता है ताकि missed alert से काम न खोए.",
    linkTitle: "MacBook low battery warning नहीं दिख रही",
    linkDescription: "Missing warning troubleshoot करें और countdown जोड़ें."
  },
  guideShutdownWarning: {
    title: "Mac पर shutdown warning कैसे पाएं",
    description: "Mac पर low battery shutdown warning कैसे पाएं और BatteryCountdown menu bar में time left कैसे दिखाता है.",
    ogDescription: "Mac shutdown से पहले clearer warning पाएं.",
    h1: "Mac पर shutdown warning कैसे पाएं",
    lead: "सबसे useful warning सिर्फ percentage नहीं, बल्कि shutdown से पहले बचा हुआ visible time है.",
    answerParagraphs: ["macOS low battery पर warn कर सकता है, लेकिन custom shutdown countdown setting नहीं देता.", "BatteryCountdown estimated time left को menu bar में दिखाता है."],
    steps: ["Mac App Store से BatteryCountdown install करें.", "Countdown start percentage 1% से 20% तक चुनें.", "Menu bar item always visible या useful होने पर visible रखें.", "Strong warning चाहिए तो Charger Run Mode use करें."],
    whyParagraphs: ["Shutdown warning तभी काम की है जब save और plug in करने का समय मिले.", "Live countdown decision clear करता है: काम जारी रखें, save करें या charger लगाएं."],
    settings: ["Low battery menu bar countdown.", "Custom trigger percentage.", "Optional battery percentage.", "Charging estimate dropdown."],
    quick: [["क्या macOS shutdown warning देता है?", "Battery behavior है, पर custom countdown नहीं."], ["क्या BatteryCountdown पहले warn करता है?", "हाँ, यह time left estimate दिखाता है."], ["क्या Charger Run Mode जरूरी है?", "नहीं, यह optional है."]],
    finalTitle: "Clearer Mac shutdown warning पाएं.",
    finalBody: "BatteryCountdown low battery risk को visible countdown में बदलता है.",
    linkTitle: "Mac पर shutdown warning कैसे पाएं",
    linkDescription: "Low battery shutdown से पहले warning setup करें."
  },
  guideLowBatteryAlert: {
    title: "क्या Mac low battery alert बदला जा सकता है?",
    description: "क्या Mac low battery alert बदला जा सकता है? macOS limits जानें और custom countdown warning जोड़ें.",
    ogDescription: "Mac low battery alert बदलने की limits और custom countdown.",
    h1: "क्या Mac low battery alert बदला जा सकता है?",
    lead: "Short answer: normal macOS settings में directly नहीं. लेकिन अलग low battery countdown जोड़ा जा सकता है.",
    answerParagraphs: ["Apple built-in alert control करता है. Most users exact percentage नहीं चुन सकते.", "BatteryCountdown अपना countdown start point चुनने देता है."],
    steps: ["Early warning या fewer interruptions में से चुनें.", "BatteryCountdown को 1% से 20% पर set करें.", "Time, percent या दोनों दिखाने का option चुनें.", "Setup को एक बार test करें."],
    whyParagraphs: ["Built-in alert simple है, पर हर workflow के लिए perfect नहीं.", "Custom countdown percentage से ज्यादा useful real time दिखाता है."],
    settings: ["Preferred battery percentage पर countdown start.", "Menu bar में time left.", "Optional percentage.", "Hard-to-miss Charger Run Mode."],
    quick: [["क्या Apple alert percentage बदल सकता हूँ?", "Normal macOS slider से नहीं."], ["क्या BatteryCountdown warning बंद हो सकती है?", "हाँ, आप control करते हैं."], ["क्या normal battery icon के साथ चलेगा?", "हाँ. यह separate utility है."]],
    finalTitle: "Low battery alert को useful बनाएं.",
    finalBody: "BatteryCountdown आपके Mac usage के हिसाब से warning देता है.",
    linkTitle: "Mac low battery alert बदलना",
    linkDescription: "Apple limits समझें और custom warning जोड़ें."
  },
  guideBestApp: {
    title: "Mac के लिए best low battery warning app",
    description: "Mac के लिए best low battery warning app कैसी होनी चाहिए? जानें कि countdown क्यों battery icon से ज्यादा useful है.",
    ogDescription: "Mac battery warning app में क्या देखना चाहिए.",
    h1: "Mac के लिए best low battery warning app",
    lead: "Best app को जल्दी बताना चाहिए: Mac shutdown से पहले कितना time बचा है?",
    answerParagraphs: ["अच्छी app lightweight, visible, private और action-focused होनी चाहिए.", "BatteryCountdown live menu bar countdown, custom trigger और optional Charger Run Mode पर focused है."],
    steps: ["सिर्फ percentage नहीं, time left देखें.", "Lightweight और no-account app चुनें.", "Start timing और visibility controls देखें.", "Sudden shutdown avoid करने के लिए BatteryCountdown use करें."],
    whyParagraphs: ["5% battery workload और health के हिसाब से अलग time दे सकती है.", "Countdown low battery को clear time decision बनाता है."],
    settings: ["Live menu bar countdown.", "1% से 20% trigger.", "Local-only design.", "Optional Charger Run Mode."],
    quick: [["ऐसी app क्या करे?", "Final minutes को visible बनाए ताकि आप act कर सकें."], ["क्या BatteryCountdown full monitor है?", "नहीं, focus time left और shutdown warning है."], ["क्या Dock में रहना जरूरी है?", "नहीं, यह menu bar utility है."]],
    finalTitle: "Action के लिए बनी warning चुनें.",
    finalBody: "BatteryCountdown वह countdown देता है जो standard battery icon नहीं देता.",
    linkTitle: "Best low battery warning app for Mac",
    linkDescription: "Mac battery warning utility में क्या देखें."
  }
};

extraGuideContent.it = {
  guideWarningNotShowing: {
    title: "Avviso batteria scarica MacBook non appare",
    description: "Se l'avviso batteria scarica del MacBook non appare, scopri cosa controlla macOS e aggiungi un countdown visibile.",
    ogDescription: "Risolvi l'avviso batteria scarica mancante e aggiungi un countdown.",
    h1: "L'avviso batteria scarica del MacBook non appare",
    lead: "Se l'avviso non appare o è facile da perdere, la soluzione pratica è un countdown visibile prima dello spegnimento.",
    answerParagraphs: ["macOS controlla automaticamente l'avviso integrato e non offre un'impostazione semplice per deciderne il momento esatto.", "BatteryCountdown non sostituisce l'avviso Apple. Aggiunge un countdown separato nella barra dei menu."],
    steps: ["Verifica che il Mac stia usando la batteria.", "Controlla percentuale, salute batteria e carico attuale.", "Installa BatteryCountdown e scegli la percentuale di avvio.", "Tieni visibile il timer o usa Charger Run Mode per un avviso più evidente."],
    whyParagraphs: ["Un avviso assente o tardivo può far sparire gli ultimi minuti più velocemente del previsto.", "Un countdown temporale è più utile di una percentuale: ti dice se puoi finire, salvare o collegare subito."],
    settings: ["Trigger personalizzato da 1% a 20%.", "Countdown nella barra dei menu.", "Testo rosso o lampeggiante negli ultimi minuti.", "Charger Run Mode per un avviso più visibile."],
    quick: [["Perché l'avviso non appare?", "macOS decide quando mostrarlo e può essere facile perderlo."], ["Posso farlo apparire prima?", "Non con una semplice impostazione macOS. BatteryCountdown aggiunge il proprio countdown."], ["Modifica file di sistema?", "No. È un'app locale separata."]],
    finalTitle: "Aggiungi un avviso che vedi davvero.",
    finalBody: "BatteryCountdown mantiene visibile il tempo rimasto per evitare spegnimenti improvvisi.",
    linkTitle: "Avviso batteria scarica MacBook non appare",
    linkDescription: "Risolvi l'avviso mancante e aggiungi un countdown."
  },
  guideShutdownWarning: {
    title: "Come avere un avviso di spegnimento su Mac",
    description: "Scopri come avere un avviso di spegnimento su Mac prima che la batteria scarica lo spenga.",
    ogDescription: "Imposta un avviso più chiaro prima dello spegnimento del Mac.",
    h1: "Come avere un avviso di spegnimento su Mac",
    lead: "L'avviso più utile non è solo una percentuale, ma una stima visibile del tempo rimasto.",
    answerParagraphs: ["macOS può avvisare con batteria scarica, ma non offre un countdown personalizzato per la maggior parte degli utenti.", "BatteryCountdown mostra il tempo stimato prima dello spegnimento nella barra dei menu."],
    steps: ["Installa BatteryCountdown dal Mac App Store.", "Scegli l'avvio del countdown tra 1% e 20%.", "Decidi se tenerlo sempre visibile o solo quando serve.", "Usa Charger Run Mode per un avviso più forte."],
    whyParagraphs: ["Un avviso serve se arriva in tempo per salvare e collegare il caricatore.", "Un countdown rende chiara la scelta: continuare, salvare o collegare subito."],
    settings: ["Countdown nella barra dei menu.", "Percentuale trigger personalizzata.", "Percentuale opzionale nella barra.", "Stima di ricarica nel menu."],
    quick: [["macOS ha un avviso di spegnimento?", "Ha avvisi batteria, ma non un countdown personalizzato semplice."], ["BatteryCountdown può avvisare prima?", "Sì. Stima il tempo rimasto."], ["Charger Run Mode è obbligatorio?", "No, è opzionale."]],
    finalTitle: "Ottieni un avviso di spegnimento più chiaro.",
    finalBody: "BatteryCountdown trasforma il rischio batteria scarica in un countdown visibile.",
    linkTitle: "Avviso di spegnimento su Mac",
    linkDescription: "Configura un avviso prima dello spegnimento per batteria."
  },
  guideLowBatteryAlert: {
    title: "Cambiare avviso batteria scarica Mac",
    description: "Si può cambiare l'avviso batteria scarica su Mac? Scopri cosa permette macOS e come aggiungere un countdown.",
    ogDescription: "Capire i limiti di macOS e aggiungere un avviso personalizzato.",
    h1: "Si può cambiare l'avviso batteria scarica su Mac?",
    lead: "Risposta breve: non direttamente nelle impostazioni macOS normali. Puoi però aggiungere un countdown separato.",
    answerParagraphs: ["Apple controlla l'avviso integrato. Di solito non puoi scegliere una nuova percentuale esatta.", "BatteryCountdown ti lascia scegliere quando parte il suo countdown."],
    steps: ["Decidi se vuoi un avviso prima o meno interruzioni.", "Imposta BatteryCountdown tra 1% e 20%.", "Scegli tempo, percentuale o entrambi.", "Prova l'avviso una volta."],
    whyParagraphs: ["L'avviso integrato è semplice, ma non sempre adatto al tuo lavoro.", "Un countdown personalizzato mostra tempo reale, non solo percentuale."],
    settings: ["Avvio countdown personalizzato.", "Tempo rimasto nella barra dei menu.", "Percentuale opzionale.", "Charger Run Mode per avviso più evidente."],
    quick: [["Posso cambiare la percentuale Apple?", "Non con un normale cursore macOS."], ["Posso spegnere l'avviso BatteryCountdown?", "Sì. Lo controlli tu."], ["Funziona con l'icona batteria normale?", "Sì. È separato."]],
    finalTitle: "Rendi utile l'avviso batteria.",
    finalBody: "BatteryCountdown ti dà un avviso adatto al tuo uso del Mac.",
    linkTitle: "Cambiare avviso batteria scarica Mac",
    linkDescription: "Capire i limiti Apple e aggiungere un avviso."
  },
  guideBestApp: {
    title: "Migliore app avviso batteria scarica Mac",
    description: "Cerchi la migliore app avviso batteria scarica per Mac? Ecco cosa cercare e perché un countdown aiuta di più.",
    ogDescription: "Cosa rende utile una app di avviso batteria per Mac.",
    h1: "Migliore app avviso batteria scarica per Mac",
    lead: "La migliore app dovrebbe rispondere subito: quanto tempo resta prima che il Mac possa spegnersi?",
    answerParagraphs: ["Una buona app deve essere leggera, visibile, privata e orientata all'azione.", "BatteryCountdown punta su countdown nella barra dei menu, trigger personalizzato e Charger Run Mode opzionale."],
    steps: ["Cerca tempo rimasto, non solo percentuale.", "Scegli un'app leggera senza account.", "Preferisci controlli per avvio e visibilità.", "Usa BatteryCountdown per evitare spegnimenti improvvisi."],
    whyParagraphs: ["La percentuale può ingannare: 5% non significa sempre lo stesso tempo.", "Un countdown trasforma la batteria scarica in una decisione chiara."],
    settings: ["Countdown live nella barra dei menu.", "Trigger da 1% a 20%.", "Design locale senza account.", "Charger Run Mode opzionale."],
    quick: [["Cosa deve fare una app così?", "Rendere visibili gli ultimi minuti in tempo per agire."], ["BatteryCountdown è un monitor completo?", "No. Si concentra su tempo rimasto e avviso spegnimento."], ["Deve stare nel Dock?", "No. È una utility da barra dei menu."]],
    finalTitle: "Scegli un avviso fatto per agire.",
    finalBody: "BatteryCountdown mostra il countdown che l'icona standard non offre.",
    linkTitle: "Migliore app avviso batteria scarica Mac",
    linkDescription: "Cosa cercare in una utility batteria per Mac."
  }
};

extraGuideContent.ja = {
  guideWarningNotShowing: {
    title: "MacBookの低バッテリー警告が表示されない",
    description: "MacBookの低バッテリー警告が表示されない時に確認することと、BatteryCountdownで見えるカウントダウンを追加する方法。",
    ogDescription: "表示されない低バッテリー警告を確認し、メニューバーにカウントダウンを追加します。",
    h1: "MacBookの低バッテリー警告が表示されない",
    lead: "低バッテリー警告が出ない、または見逃しやすい場合は、終了前に見えるカウントダウンを追加するのが実用的です。",
    answerParagraphs: ["macOSは内蔵の低バッテリー警告を自動で制御します。表示タイミングを正確に選ぶ通常設定はありません。", "BatteryCountdownはAppleの警告を置き換えず、メニューバーに別のカウントダウンを追加します。"],
    steps: ["Macがバッテリー駆動か確認します。", "バッテリー残量、状態、実行中の負荷を確認します。", "BatteryCountdownを入れて、開始する残量を選びます。", "タイマーを表示し、必要ならCharger Run Modeを使います。"],
    whyParagraphs: ["警告が遅い、または見えないと、最後の数分が予想より早く消えることがあります。", "残量パーセントだけより、残り時間の方が保存や充電の判断に役立ちます。"],
    settings: ["1%から20%のカスタム開始残量。", "メニューバーのカウントダウン。", "最後の数分の赤色または点滅表示。", "より目立つCharger Run Mode。"],
    quick: [["なぜ警告が出ないのですか？", "macOSが表示タイミングを決めるため、見逃すことがあります。"], ["Appleの警告を早められますか？", "通常のmacOS設定ではできません。BatteryCountdownは独自の警告を追加します。"], ["システムを変更しますか？", "いいえ。ローカルのメニューバーアプリです。"]],
    finalTitle: "見逃しにくい警告を追加しましょう。",
    finalBody: "BatteryCountdownは低バッテリーの残り時間を見える場所に保ちます。",
    linkTitle: "MacBookの低バッテリー警告が表示されない",
    linkDescription: "警告が出ない時の確認とカウントダウン追加。"
  },
  guideShutdownWarning: {
    title: "Macで終了警告を出す方法",
    description: "低バッテリーでMacが終了する前に警告を出す方法と、BatteryCountdownで残り時間を表示する方法。",
    ogDescription: "Macがバッテリー切れで終了する前に、より分かりやすい警告を出します。",
    h1: "Macで終了警告を出す方法",
    lead: "一番役立つ警告はパーセントだけでなく、終了までの残り時間が見えることです。",
    answerParagraphs: ["macOSは低バッテリー時に警告することがありますが、専用の終了カウントダウン設定はありません。", "BatteryCountdownは推定残り時間をメニューバーに表示します。"],
    steps: ["Mac App StoreからBatteryCountdownを入れます。", "1%から20%の間で開始残量を選びます。", "常に表示するか、必要な時だけ表示するか選びます。", "より強い警告が必要ならCharger Run Modeを使います。"],
    whyParagraphs: ["終了警告は、保存して充電器を取る時間がある時に意味があります。", "ライブカウントダウンは、続ける、保存する、今すぐ充電する判断を明確にします。"],
    settings: ["メニューバーの低バッテリーカウントダウン。", "カスタム開始残量。", "任意のバッテリー残量表示。", "充電中の見積もり表示。"],
    quick: [["macOSに終了警告はありますか？", "低バッテリー警告はありますが、カスタムカウントダウンはありません。"], ["BatteryCountdownは事前に警告できますか？", "はい。残り時間を推定して表示します。"], ["Charger Run Modeは必須ですか？", "いいえ。任意です。"]],
    finalTitle: "より分かりやすい終了警告を。",
    finalBody: "BatteryCountdownは低バッテリーのリスクを見えるカウントダウンにします。",
    linkTitle: "Macで終了警告を出す方法",
    linkDescription: "バッテリー切れ終了前に警告を設定。"
  },
  guideLowBatteryAlert: {
    title: "Macの低バッテリーアラートは変更できる？",
    description: "Macの低バッテリーアラートを変更できるか、macOSの制限とカスタムカウントダウン追加方法を解説。",
    ogDescription: "Macの低バッテリーアラートの制限とカスタム警告。",
    h1: "Macの低バッテリーアラートは変更できる？",
    lead: "短い答え: 通常のmacOS設定では直接変更できません。ただし別のカウントダウンを追加できます。",
    answerParagraphs: ["Appleが内蔵アラートを制御します。多くのユーザーは正確な警告残量を選べません。", "BatteryCountdownなら、独自のカウントダウン開始タイミングを選べます。"],
    steps: ["早めの警告か少ない通知かを決めます。", "BatteryCountdownを1%から20%で設定します。", "時間、パーセント、または両方の表示を選びます。", "必要になる前に一度テストします。"],
    whyParagraphs: ["内蔵アラートはシンプルですが、作業スタイルに合わない場合があります。", "カスタムカウントダウンはパーセントだけでなく実際の残り時間を示します。"],
    settings: ["好みの残量で開始。", "メニューバーに残り時間を表示。", "任意のパーセント表示。", "目立つCharger Run Mode。"],
    quick: [["Appleの警告残量を変えられますか？", "通常のmacOS設定ではできません。"], ["BatteryCountdownの警告はオフにできますか？", "はい。表示タイミングを管理できます。"], ["通常のバッテリーアイコンと併用できますか？", "はい。別のユーティリティです。"]],
    finalTitle: "低バッテリーアラートを役立つものに。",
    finalBody: "BatteryCountdownはあなたのMacの使い方に合う警告を追加します。",
    linkTitle: "Macの低バッテリーアラートは変更できる？",
    linkDescription: "Appleの制限と独自警告の追加方法。"
  },
  guideBestApp: {
    title: "Mac向け低バッテリー警告アプリ",
    description: "Mac向け低バッテリー警告アプリで見るべき点と、カウントダウンがバッテリーアイコンより役立つ理由。",
    ogDescription: "Macの低バッテリー警告アプリに必要なもの。",
    h1: "Mac向け低バッテリー警告アプリ",
    lead: "良いアプリは、Macが終了する前にどれだけ時間が残っているかをすぐ答えるべきです。",
    answerParagraphs: ["良い警告アプリは軽量で、見やすく、プライベートで、行動につながる必要があります。", "BatteryCountdownはメニューバーカウントダウン、カスタム開始残量、任意のCharger Run Modeに集中しています。"],
    steps: ["パーセントだけでなく残り時間を見ます。", "アカウント不要で軽いアプリを選びます。", "開始タイミングと表示方法を調整できるものを選びます。", "突然の終了を避けたいならBatteryCountdownを使います。"],
    whyParagraphs: ["5%の意味は負荷やバッテリー状態で変わります。", "カウントダウンは低バッテリーを具体的な時間判断に変えます。"],
    settings: ["ライブメニューバーカウントダウン。", "1%から20%の開始残量。", "アカウント不要のローカル設計。", "任意のCharger Run Mode。"],
    quick: [["この種のアプリに必要なものは？", "行動できるタイミングで最後の数分を見せることです。"], ["BatteryCountdownは総合モニターですか？", "いいえ。残り時間と終了警告に集中しています。"], ["Dockに常駐しますか？", "いいえ。メニューバーユーティリティです。"]],
    finalTitle: "行動につながる警告を選びましょう。",
    finalBody: "BatteryCountdownは標準アイコンにないカウントダウンを表示します。",
    linkTitle: "Mac向け低バッテリー警告アプリ",
    linkDescription: "Macバッテリー警告ユーティリティの選び方。"
  }
};

extraGuideContent.ko = {
  guideWarningNotShowing: {
    title: "MacBook 배터리 부족 경고가 표시되지 않음",
    description: "MacBook 배터리 부족 경고가 보이지 않을 때 확인할 점과 BatteryCountdown으로 보이는 카운트다운을 추가하는 방법.",
    ogDescription: "표시되지 않는 배터리 부족 경고를 확인하고 메뉴 막대 카운트다운을 추가하세요.",
    h1: "MacBook 배터리 부족 경고가 표시되지 않음",
    lead: "배터리 부족 경고가 보이지 않거나 놓치기 쉽다면 종료 전 보이는 카운트다운을 추가하는 것이 실용적입니다.",
    answerParagraphs: ["macOS는 내장 배터리 부족 경고를 자동으로 제어합니다. 정확한 표시 시점을 고르는 일반 설정은 없습니다.", "BatteryCountdown은 Apple 경고를 대체하지 않고 메뉴 막대에 별도 카운트다운을 추가합니다."],
    steps: ["Mac이 배터리로 실행 중인지 확인하세요.", "배터리 퍼센트, 상태, 현재 작업 부하를 확인하세요.", "BatteryCountdown을 설치하고 카운트다운 시작 퍼센트를 선택하세요.", "타이머를 보이게 두거나 Charger Run Mode를 사용하세요."],
    whyParagraphs: ["경고가 늦거나 보이지 않으면 마지막 몇 분이 예상보다 빨리 사라질 수 있습니다.", "시간 카운트다운은 저장할지, 충전할지 판단하기 쉽습니다."],
    settings: ["1%~20% 사용자 지정 트리거.", "메뉴 막대 카운트다운.", "마지막 몇 분의 빨간색/깜박임 표시.", "더 눈에 띄는 Charger Run Mode."],
    quick: [["왜 경고가 안 보이나요?", "macOS가 표시 시점을 결정하며 놓치기 쉬울 수 있습니다."], ["Apple 경고를 더 빨리 띄울 수 있나요?", "일반 macOS 설정으로는 어렵습니다. BatteryCountdown이 자체 카운트다운을 추가합니다."], ["시스템 파일을 바꾸나요?", "아니요. 별도 로컬 메뉴 막대 앱입니다."]],
    finalTitle: "정말 보이는 경고를 추가하세요.",
    finalBody: "BatteryCountdown은 배터리 부족 시간을 계속 보이게 합니다.",
    linkTitle: "MacBook 배터리 부족 경고가 표시되지 않음",
    linkDescription: "경고 문제를 확인하고 보이는 카운트다운을 추가하세요."
  },
  guideShutdownWarning: {
    title: "Mac에서 종료 경고를 받는 방법",
    description: "배터리 부족으로 Mac이 꺼지기 전에 종료 경고를 받고 메뉴 막대에 남은 시간을 표시하는 방법.",
    ogDescription: "Mac이 꺼지기 전에 더 명확한 종료 경고를 받으세요.",
    h1: "Mac에서 종료 경고를 받는 방법",
    lead: "가장 유용한 경고는 퍼센트가 아니라 Mac이 꺼지기 전 남은 시간입니다.",
    answerParagraphs: ["macOS는 배터리 부족을 경고할 수 있지만 사용자 지정 종료 카운트다운은 제공하지 않습니다.", "BatteryCountdown은 예상 남은 시간을 메뉴 막대에 표시합니다."],
    steps: ["Mac App Store에서 BatteryCountdown을 설치하세요.", "1%~20% 사이의 시작 퍼센트를 선택하세요.", "항상 보이게 할지 필요할 때만 보이게 할지 정하세요.", "더 강한 경고가 필요하면 Charger Run Mode를 사용하세요."],
    whyParagraphs: ["종료 경고는 저장하고 충전기를 연결할 시간이 있을 때 가장 유용합니다.", "라이브 카운트다운은 계속할지, 저장할지, 바로 충전할지 명확하게 해줍니다."],
    settings: ["메뉴 막대 카운트다운.", "사용자 지정 시작 퍼센트.", "선택적 배터리 퍼센트 표시.", "충전 중 예상 시간 표시."],
    quick: [["macOS에 종료 경고가 있나요?", "배터리 경고는 있지만 간단한 사용자 지정 카운트다운은 없습니다."], ["BatteryCountdown이 미리 경고하나요?", "예. 남은 시간을 추정해 보여줍니다."], ["Charger Run Mode가 필수인가요?", "아니요. 선택 사항입니다."]],
    finalTitle: "더 명확한 Mac 종료 경고를 받으세요.",
    finalBody: "BatteryCountdown은 배터리 부족 위험을 보이는 카운트다운으로 바꿉니다.",
    linkTitle: "Mac에서 종료 경고를 받는 방법",
    linkDescription: "배터리 부족 종료 전 경고를 설정하세요."
  },
  guideLowBatteryAlert: {
    title: "Mac 배터리 부족 알림을 바꿀 수 있나요?",
    description: "Mac 배터리 부족 알림을 바꿀 수 있는지, macOS 한계와 사용자 지정 카운트다운 추가 방법을 알아보세요.",
    ogDescription: "Mac 배터리 부족 알림의 한계와 사용자 지정 경고.",
    h1: "Mac 배터리 부족 알림을 바꿀 수 있나요?",
    lead: "짧은 답변: 일반 macOS 설정에서는 직접 바꾸기 어렵습니다. 하지만 별도 카운트다운은 추가할 수 있습니다.",
    answerParagraphs: ["Apple이 내장 알림을 제어합니다. 대부분의 사용자는 정확한 퍼센트를 선택할 수 없습니다.", "BatteryCountdown은 자체 카운트다운 시작 시점을 선택하게 해줍니다."],
    steps: ["더 이른 경고가 필요한지, 방해를 줄이고 싶은지 정하세요.", "BatteryCountdown을 1%~20% 사이로 설정하세요.", "시간, 퍼센트 또는 둘 다 표시할지 선택하세요.", "필요하기 전에 한 번 테스트하세요."],
    whyParagraphs: ["내장 알림은 단순하지만 모든 작업 방식에 맞지는 않습니다.", "사용자 지정 카운트다운은 퍼센트보다 실제 남은 시간을 보여줍니다."],
    settings: ["원하는 퍼센트에서 카운트다운 시작.", "메뉴 막대에 남은 시간 표시.", "선택적 퍼센트 표시.", "눈에 띄는 Charger Run Mode."],
    quick: [["Apple 알림 퍼센트를 바꿀 수 있나요?", "일반 macOS 슬라이더로는 어렵습니다."], ["BatteryCountdown 경고를 끌 수 있나요?", "예. 표시 방식을 제어할 수 있습니다."], ["기본 배터리 아이콘과 함께 쓰나요?", "예. 별도 유틸리티입니다."]],
    finalTitle: "배터리 부족 알림을 더 유용하게 만드세요.",
    finalBody: "BatteryCountdown은 Mac 사용 방식에 맞는 경고를 제공합니다.",
    linkTitle: "Mac 배터리 부족 알림 변경",
    linkDescription: "Apple 한계와 사용자 지정 경고를 이해하세요."
  },
  guideBestApp: {
    title: "Mac 최고의 배터리 부족 경고 앱",
    description: "Mac에서 좋은 배터리 부족 경고 앱을 고르는 기준과 카운트다운이 왜 더 유용한지 알아보세요.",
    ogDescription: "Mac 배터리 부족 경고 앱에서 봐야 할 것.",
    h1: "Mac 최고의 배터리 부족 경고 앱",
    lead: "좋은 앱은 빠르게 답해야 합니다: Mac이 꺼지기 전 시간이 얼마나 남았나요?",
    answerParagraphs: ["좋은 앱은 가볍고, 잘 보이고, 개인 정보를 요구하지 않으며, 행동으로 이어져야 합니다.", "BatteryCountdown은 메뉴 막대 카운트다운, 사용자 지정 트리거, 선택적 Charger Run Mode에 집중합니다."],
    steps: ["퍼센트뿐 아니라 남은 시간을 보세요.", "가볍고 계정이 필요 없는 앱을 고르세요.", "시작 시점과 표시 방식을 조절할 수 있는지 보세요.", "갑작스러운 종료를 피하고 싶다면 BatteryCountdown을 사용하세요."],
    whyParagraphs: ["5%는 작업 부하와 배터리 상태에 따라 다른 시간을 의미합니다.", "카운트다운은 배터리 부족을 명확한 시간 판단으로 바꿉니다."],
    settings: ["라이브 메뉴 막대 카운트다운.", "1%~20% 트리거.", "계정 없는 로컬 설계.", "선택적 Charger Run Mode."],
    quick: [["이런 앱은 무엇을 해야 하나요?", "마지막 몇 분을 보이게 해 행동할 시간을 줘야 합니다."], ["BatteryCountdown은 전체 모니터인가요?", "아니요. 남은 시간과 종료 경고에 집중합니다."], ["Dock에 있어야 하나요?", "아니요. 메뉴 막대 유틸리티입니다."]],
    finalTitle: "행동할 수 있는 경고를 선택하세요.",
    finalBody: "BatteryCountdown은 기본 배터리 아이콘이 보여주지 않는 카운트다운을 제공합니다.",
    linkTitle: "Mac 최고의 배터리 부족 경고 앱",
    linkDescription: "Mac 배터리 경고 유틸리티 선택 기준."
  }
};

extraGuideContent.nb = {
  guideWarningNotShowing: {
    title: "MacBook lavt batteri-varsel vises ikke",
    description: "Hvis lavt batteri-varselet på MacBook ikke vises, se hva macOS styrer og hvordan BatteryCountdown gir en synlig nedtelling.",
    ogDescription: "Feilsøk manglende lavt batteri-varsel og legg til synlig menylinje-nedtelling.",
    h1: "MacBook lavt batteri-varsel vises ikke",
    lead: "Hvis lavt batteri-varselet ikke dukker opp, eller er lett å overse, er den praktiske løsningen en synlig nedtelling før Macen skrur seg av.",
    answerParagraphs: ["macOS styrer Apples innebygde lavt batteri-varsel automatisk. Det finnes ikke en vanlig innstilling som garanterer nøyaktig når det vises.", "BatteryCountdown erstatter ikke Apple-varselet. Den legger til en egen menylinje-nedtelling som viser hvor mye tid som er igjen."],
    steps: ["Sjekk at Macen faktisk går på batteri og ikke er koblet til lader.", "Se på batteriprosent, batteritilstand og arbeidsbelastning.", "Installer BatteryCountdown og velg prosenten der nedtellingen skal starte.", "Hold timeren synlig, eller bruk Charger Run Mode når varselet må være vanskeligere å overse."],
    whyParagraphs: ["Et manglende eller sent varsel er risikabelt fordi de siste prosentene kan forsvinne raskt under tung bruk.", "Tid igjen er lettere å handle på enn prosent alene: du ser om du rekker å fullføre, lagre eller hente laderen nå."],
    settings: ["Egendefinert trigger fra 1% til 20%.", "Nedtelling i menylinjen.", "Rød eller blinkende nedtelling i de siste minuttene.", "Charger Run Mode for et mer synlig varsel."],
    quick: [["Hvorfor vises ikke MacBook-varselet?", "macOS bestemmer selv når det vises, og det kan være lett å overse."], ["Kan jeg tvinge Apple-varselet tidligere?", "Ikke med en enkel macOS-innstilling. BatteryCountdown legger til sin egen nedtelling."], ["Endrer appen systemfiler?", "Nei. Den kjører lokalt som en separat menylinje-app."]],
    finalTitle: "Legg til et varsel du faktisk ser.",
    finalBody: "BatteryCountdown holder lavt batteri-tiden synlig, så et manglende Apple-varsel ikke blir tapt arbeid.",
    linkTitle: "MacBook lavt batteri-varsel vises ikke",
    linkDescription: "Feilsøk manglende varsel og legg til synlig nedtelling."
  },
  guideShutdownWarning: {
    title: "Slik får du shutdown-varsel på Mac",
    description: "Slik får du et tydelig shutdown-varsel på Mac før lavt batteri skrur den av, med tid igjen i menylinjen.",
    ogDescription: "Sett opp et tydeligere varsel før lavt batteri skrur av Macen.",
    h1: "Slik får du shutdown-varsel på Mac",
    lead: "Det mest nyttige shutdown-varselet er ikke bare en prosent. Det er en synlig vurdering av hvor mye tid du har igjen.",
    answerParagraphs: ["macOS kan varsle ved lavt batteri, men gir ikke de fleste brukere en egen innstilling for en tilpasset shutdown-nedtelling.", "BatteryCountdown lager dette varselet ved å vise estimert tid igjen før lavt batteri kan skru av Macen."],
    steps: ["Installer BatteryCountdown fra Mac App Store.", "Velg når lavt batteri-nedtellingen skal starte, fra 1% til 20%.", "Bestem om menylinje-elementet skal være synlig hele tiden eller bare når det er nyttig.", "Bruk Charger Run Mode hvis du vil ha et mer åpenbart varsel når tiden nesten er ute."],
    whyParagraphs: ["Shutdown-varsler er mest verdifulle når de kommer tidlig nok til å lagre og koble til lader.", "En live nedtelling gjør valget konkret: jobb videre, lagre nå eller plugg inn umiddelbart."],
    settings: ["Menylinje-nedtelling for lavt batteri.", "Egendefinert trigger mellom 1% og 20%.", "Valgfri batteriprosent i menylinjen.", "Ladeestimat i dropdown når Macen lader."],
    quick: [["Har macOS et shutdown-varsel?", "macOS har innebygget batteriatferd, men ikke en enkel tilpasset shutdown-nedtelling."], ["Kan BatteryCountdown varsle før shutdown?", "Ja. Den estimerer tid igjen og viser det der du ser det."], ["Er Charger Run Mode påkrevd?", "Nei. Det er valgfritt for situasjoner der et stille menylinjevarsel ikke er nok."]],
    finalTitle: "Få et tydeligere Mac shutdown-varsel.",
    finalBody: "BatteryCountdown gjør lavt batteri-risiko om til en synlig nedtelling.",
    linkTitle: "Slik får du shutdown-varsel på Mac",
    linkDescription: "Sett opp varsel før lavt batteri skrur av Macen."
  },
  guideLowBatteryAlert: {
    title: "Kan du endre lavt batteri-varsel på Mac?",
    description: "Kan du endre lavt batteri-varselet på Mac? Se hva macOS tillater, og hvordan du legger til en egendefinert nedtelling.",
    ogDescription: "Forstå grensene i macOS og legg til ditt eget lavt batteri-varsel.",
    h1: "Kan du endre lavt batteri-varsel på Mac?",
    lead: "Kort svar: ikke direkte i de vanlige macOS-innstillingene. Men du kan legge til en egen lavt batteri-nedtelling.",
    answerParagraphs: ["Apple styrer det innebygde Mac-varselet. De fleste brukere kan ikke bare velge en ny prosent eller egen shutdown-timer.", "BatteryCountdown løser det praktiske problemet ved å la deg velge når dens egen nedtelling starter."],
    steps: ["Velg om du vil varsles tidligere eller ha færre avbrudd.", "Sett BatteryCountdown til å starte mellom 1% og 20%.", "Velg om menylinjen skal vise tid, prosent eller begge deler.", "Test oppsettet én gang før du trenger det."],
    whyParagraphs: ["Det innebygde varselet er enkelt, men passer ikke alltid arbeidsflyten din.", "En egendefinert nedtelling gir et mer nyttig signal: faktisk tid igjen før mulig shutdown."],
    settings: ["Start nedtelling på ønsket batteriprosent.", "Vis tid igjen direkte i menylinjen.", "Vis batteriprosent hvis du vil ha ekstra kontekst.", "Bruk Charger Run Mode når varselet må være umulig å overse."],
    quick: [["Kan jeg endre Apple-varselets prosent?", "Ikke via en vanlig macOS-slider. BatteryCountdown legger til et eget varsel."], ["Kan jeg slå av BatteryCountdown-varselet?", "Ja. Du styrer når det vises og hvor synlig det skal være."], ["Fungerer det sammen med vanlig batteriikon?", "Ja. BatteryCountdown er et separat menylinjeverktøy."]],
    finalTitle: "Gjør lavt batteri-varselet nyttig.",
    finalBody: "BatteryCountdown lar deg velge et varsel som passer måten du bruker Macen på.",
    linkTitle: "Kan du endre lavt batteri-varsel på Mac?",
    linkDescription: "Forstå Apples grenser og legg til egen nedtelling."
  },
  guideBestApp: {
    title: "Beste lavt batteri-varsel-app for Mac",
    description: "Leter du etter beste lavt batteri-varsel-app for Mac? Se hva du bør se etter, og hvorfor nedtelling er mer nyttig enn et ikon.",
    ogDescription: "Hva en god lavt batteri-varsel-app for Mac bør gjøre.",
    h1: "Beste lavt batteri-varsel-app for Mac",
    lead: "Den beste lavt batteri-varsel-appen bør svare raskt på ett spørsmål: hvor mye tid har jeg før Macen kan skru seg av?",
    answerParagraphs: ["En god app bør være lett, synlig, privat og handlingsorientert. Den bør ikke bare kopiere det vanlige batteriikonet.", "BatteryCountdown er bygget rundt live nedtelling i menylinjen, egendefinert trigger og valgfri Charger Run Mode."],
    steps: ["Se etter tid igjen, ikke bare batteriprosent.", "Velg en app som er lett og ikke krever konto.", "Prioriter kontroll over når varselet starter og hvor synlig det blir.", "Bruk BatteryCountdown hvis målet er å unngå plutselig shutdown ved lavt batteri."],
    whyParagraphs: ["Prosent alene kan villede. Fem prosent kan bety ulik tid avhengig av batteritilstand, lysstyrke og belastning.", "En nedtelling er mer handlingsrettet fordi den gjør lavt batteri om til en tidsbeslutning."],
    settings: ["Live nedtelling i menylinjen før mulig shutdown.", "Egendefinert trigger fra 1% til 20%.", "Lokal app uten konto.", "Valgfri Charger Run Mode for tydeligere varsler."],
    quick: [["Hva bør en Mac batterivarsel-app gjøre?", "Den bør gjøre de siste minuttene synlige tidlig nok til at du kan lagre og plugge inn."], ["Er BatteryCountdown en full batterimonitor?", "Nei. Den fokuserer på lavt batteri-tid og shutdown-varsel."], ["Må appen ligge i Dock?", "Nei. BatteryCountdown er laget som et menylinjeverktøy."]],
    finalTitle: "Velg et varsel bygget for handling.",
    finalBody: "BatteryCountdown gir deg nedtellingen det vanlige batteriikonet ikke viser.",
    linkTitle: "Beste lavt batteri-varsel-app for Mac",
    linkDescription: "Se hva du bør se etter i et Mac-batteriverktøy."
  }
};

extraGuideContent["pt-BR"] = {
  guideWarningNotShowing: {
    title: "Aviso de bateria baixa MacBook não aparece",
    description: "Se o aviso de bateria baixa do MacBook não aparece, veja o que o macOS controla e adicione uma contagem visível.",
    ogDescription: "Entenda avisos de bateria baixa ausentes e adicione uma contagem na barra de menus.",
    h1: "O aviso de bateria baixa do MacBook não aparece",
    lead: "Se o aviso de bateria baixa não aparece ou é fácil de perder, a solução prática é uma contagem visível antes do desligamento.",
    answerParagraphs: ["O macOS controla automaticamente o aviso integrado e não oferece um ajuste simples para escolher o momento exato.", "BatteryCountdown não substitui o alerta da Apple. Ele adiciona uma contagem separada na barra de menus."],
    steps: ["Confira se o Mac está usando bateria.", "Veja porcentagem, saúde da bateria e carga de trabalho atual.", "Instale BatteryCountdown e escolha a porcentagem de início.", "Mantenha o timer visível ou use Charger Run Mode para um aviso mais forte."],
    whyParagraphs: ["Um aviso ausente ou tardio pode fazer os últimos minutos sumirem rápido.", "Uma contagem por tempo é mais útil que porcentagem: você sabe se deve salvar ou conectar o carregador."],
    settings: ["Gatilho personalizado de 1% a 20%.", "Contagem na barra de menus.", "Texto vermelho ou piscando nos minutos finais.", "Charger Run Mode para aviso mais visível."],
    quick: [["Por que o aviso não aparece?", "O macOS decide quando mostrar e o aviso pode passar despercebido."], ["Posso forçar o alerta mais cedo?", "Não por um ajuste simples do macOS. BatteryCountdown adiciona sua própria contagem."], ["Altera arquivos do sistema?", "Não. É um app local separado."]],
    finalTitle: "Adicione um aviso que você realmente vê.",
    finalBody: "BatteryCountdown mantém o tempo de bateria baixa visível para evitar perda de trabalho.",
    linkTitle: "Aviso de bateria baixa MacBook não aparece",
    linkDescription: "Resolva o aviso ausente e adicione uma contagem."
  },
  guideShutdownWarning: {
    title: "Como receber aviso de desligamento no Mac",
    description: "Como receber um aviso de desligamento no Mac antes que a bateria baixa o desligue, com tempo restante na barra de menus.",
    ogDescription: "Configure um aviso mais claro antes do Mac desligar por bateria.",
    h1: "Como receber aviso de desligamento no Mac",
    lead: "O aviso mais útil não é só uma porcentagem. É uma estimativa visível do tempo que resta.",
    answerParagraphs: ["O macOS pode avisar sobre bateria baixa, mas não oferece uma contagem personalizada simples.", "BatteryCountdown mostra o tempo estimado antes do desligamento na barra de menus."],
    steps: ["Instale BatteryCountdown pela Mac App Store.", "Escolha quando a contagem começa, de 1% a 20%.", "Decida se o item fica sempre visível ou só quando útil.", "Use Charger Run Mode para um aviso mais evidente."],
    whyParagraphs: ["Avisos de desligamento só ajudam quando chegam cedo o bastante para salvar e conectar.", "Uma contagem ao vivo transforma o risco em decisão clara."],
    settings: ["Contagem na barra de menus.", "Porcentagem de gatilho personalizada.", "Porcentagem opcional na barra.", "Estimativa de carregamento no menu."],
    quick: [["O macOS tem aviso de desligamento?", "Tem comportamento de bateria, mas não uma contagem personalizada simples."], ["BatteryCountdown avisa antes?", "Sim. Ele estima o tempo restante."], ["Charger Run Mode é obrigatório?", "Não. É opcional."]],
    finalTitle: "Receba um aviso de desligamento mais claro.",
    finalBody: "BatteryCountdown transforma bateria baixa em uma contagem visível.",
    linkTitle: "Como receber aviso de desligamento no Mac",
    linkDescription: "Configure um aviso antes do Mac desligar por bateria."
  },
  guideLowBatteryAlert: {
    title: "Alterar alerta de bateria baixa no Mac",
    description: "Dá para alterar o alerta de bateria baixa no Mac? Veja o que o macOS permite e como adicionar uma contagem personalizada.",
    ogDescription: "Entenda os limites do macOS e adicione seu próprio alerta.",
    h1: "Dá para alterar o alerta de bateria baixa no Mac?",
    lead: "Resposta curta: não diretamente nos ajustes normais do macOS. Mas você pode adicionar uma contagem separada.",
    answerParagraphs: ["A Apple controla o alerta integrado. A maioria dos usuários não consegue escolher outra porcentagem exata.", "BatteryCountdown permite escolher quando sua própria contagem começa."],
    steps: ["Decida se quer aviso mais cedo ou menos interrupções.", "Configure BatteryCountdown entre 1% e 20%.", "Escolha tempo, porcentagem ou ambos.", "Teste uma vez antes de precisar."],
    whyParagraphs: ["O alerta integrado é simples, mas nem sempre combina com seu uso.", "Uma contagem personalizada mostra tempo real, não só porcentagem."],
    settings: ["Início da contagem na porcentagem preferida.", "Tempo restante na barra de menus.", "Porcentagem opcional.", "Charger Run Mode para aviso mais forte."],
    quick: [["Posso mudar a porcentagem da Apple?", "Não com um controle normal do macOS."], ["Posso desligar o aviso do BatteryCountdown?", "Sim. Você controla quando aparece."], ["Funciona com o ícone normal?", "Sim. É uma utilidade separada."]],
    finalTitle: "Torne o alerta de bateria útil.",
    finalBody: "BatteryCountdown deixa você escolher um aviso que combina com seu Mac.",
    linkTitle: "Alterar alerta de bateria baixa no Mac",
    linkDescription: "Entenda limites da Apple e adicione seu aviso."
  },
  guideBestApp: {
    title: "Melhor app de aviso de bateria baixa para Mac",
    description: "Procurando o melhor app de aviso de bateria baixa para Mac? Veja o que buscar e por que uma contagem ajuda mais.",
    ogDescription: "O que torna bom um app de aviso de bateria baixa para Mac.",
    h1: "Melhor app de aviso de bateria baixa para Mac",
    lead: "O melhor app deve responder rápido: quanto tempo resta antes que o Mac possa desligar?",
    answerParagraphs: ["Um bom app deve ser leve, visível, privado e focado em ação.", "BatteryCountdown usa contagem na barra de menus, gatilho personalizado e Charger Run Mode opcional."],
    steps: ["Procure tempo restante, não só porcentagem.", "Escolha um app leve e sem conta obrigatória.", "Prefira controles de início e visibilidade.", "Use BatteryCountdown para evitar desligamento repentino."],
    whyParagraphs: ["A porcentagem pode enganar: 5% pode durar tempos diferentes.", "Uma contagem transforma bateria baixa em decisão de tempo."],
    settings: ["Contagem ao vivo na barra.", "Gatilho de 1% a 20%.", "Design local sem conta.", "Charger Run Mode opcional."],
    quick: [["O que esse app deve fazer?", "Mostrar os últimos minutos cedo o bastante para agir."], ["BatteryCountdown é monitor completo?", "Não. O foco é tempo restante e aviso de desligamento."], ["Precisa ficar no Dock?", "Não. É uma utilidade de barra de menus."]],
    finalTitle: "Escolha um aviso feito para agir.",
    finalBody: "BatteryCountdown mostra a contagem que o ícone padrão não mostra.",
    linkTitle: "Melhor app de aviso de bateria baixa para Mac",
    linkDescription: "O que buscar em uma utilidade de bateria para Mac."
  }
};

extraGuideContent.ru = {
  guideWarningNotShowing: {
    title: "MacBook не показывает предупреждение о низком заряде",
    description: "Если MacBook не показывает предупреждение о низком заряде, узнайте, что контролирует macOS, и добавьте видимый отсчет.",
    ogDescription: "Проверьте отсутствующее предупреждение и добавьте отсчет в строку меню.",
    h1: "MacBook не показывает предупреждение о низком заряде",
    lead: "Если предупреждение не появляется или его легко пропустить, практичное решение - видимый отсчет до выключения.",
    answerParagraphs: ["macOS автоматически управляет встроенным предупреждением. Обычной настройки точного момента показа нет.", "BatteryCountdown не заменяет предупреждение Apple, а добавляет отдельный отсчет в строку меню."],
    steps: ["Проверьте, что Mac работает от батареи.", "Посмотрите процент, состояние батареи и текущую нагрузку.", "Установите BatteryCountdown и выберите процент запуска отсчета.", "Оставьте таймер видимым или используйте Charger Run Mode."],
    whyParagraphs: ["Позднее или отсутствующее предупреждение опасно: последние минуты могут исчезнуть быстро.", "Отсчет по времени полезнее процента: понятно, нужно ли сохранять работу или подключать зарядку."],
    settings: ["Порог от 1% до 20%.", "Отсчет в строке меню.", "Красный или мигающий отсчет в последние минуты.", "Charger Run Mode для более заметного предупреждения."],
    quick: [["Почему предупреждение не видно?", "macOS сама решает, когда показать предупреждение, и его можно пропустить."], ["Можно показать предупреждение Apple раньше?", "Не через простую настройку macOS. BatteryCountdown добавляет свой отсчет."], ["Меняет ли приложение системные файлы?", "Нет. Это отдельное локальное приложение строки меню."]],
    finalTitle: "Добавьте предупреждение, которое видно.",
    finalBody: "BatteryCountdown держит время до разрядки на виду, чтобы вы не потеряли работу.",
    linkTitle: "MacBook не показывает предупреждение о низком заряде",
    linkDescription: "Проверьте проблему и добавьте видимый отсчет."
  },
  guideShutdownWarning: {
    title: "Как получить предупреждение о выключении Mac",
    description: "Как получить предупреждение о выключении Mac до разрядки батареи и видеть оставшееся время в строке меню.",
    ogDescription: "Настройте более понятное предупреждение перед выключением Mac.",
    h1: "Как получить предупреждение о выключении Mac",
    lead: "Лучшее предупреждение - не просто процент, а видимая оценка оставшегося времени.",
    answerParagraphs: ["macOS может предупреждать о низком заряде, но не дает простого пользовательского отсчета до выключения.", "BatteryCountdown показывает оценку времени до возможного выключения в строке меню."],
    steps: ["Установите BatteryCountdown из Mac App Store.", "Выберите запуск отсчета от 1% до 20%.", "Решите, должен ли пункт строки меню быть виден всегда или только при необходимости.", "Используйте Charger Run Mode для более заметного предупреждения."],
    whyParagraphs: ["Предупреждение полезно, если приходит достаточно рано, чтобы сохранить работу и подключить зарядку.", "Живой отсчет делает выбор понятным: продолжать, сохранить или подключиться сейчас."],
    settings: ["Отсчет в строке меню.", "Пользовательский процент запуска.", "Опциональный процент батареи.", "Оценка зарядки в меню."],
    quick: [["Есть ли в macOS предупреждение о выключении?", "Есть поведение батареи, но нет простого пользовательского отсчета."], ["BatteryCountdown предупредит заранее?", "Да. Он оценивает оставшееся время."], ["Нужен ли Charger Run Mode?", "Нет, он опционален."]],
    finalTitle: "Получите более понятное предупреждение.",
    finalBody: "BatteryCountdown превращает риск низкого заряда в видимый отсчет.",
    linkTitle: "Предупреждение о выключении Mac",
    linkDescription: "Настройте предупреждение до выключения от батареи."
  },
  guideLowBatteryAlert: {
    title: "Можно ли изменить предупреждение о низком заряде Mac?",
    description: "Можно ли изменить предупреждение о низком заряде Mac? Узнайте ограничения macOS и добавьте свой отсчет.",
    ogDescription: "Ограничения предупреждения Apple и собственный отсчет.",
    h1: "Можно ли изменить предупреждение о низком заряде Mac?",
    lead: "Короткий ответ: не напрямую в обычных настройках macOS. Но можно добавить отдельный отсчет.",
    answerParagraphs: ["Apple управляет встроенным предупреждением. Большинство пользователей не может выбрать точный процент.", "BatteryCountdown позволяет выбрать, когда начинается собственный отсчет."],
    steps: ["Решите, нужно ли предупреждать раньше или реже отвлекать.", "Настройте BatteryCountdown от 1% до 20%.", "Выберите показ времени, процента или обоих.", "Один раз проверьте вид предупреждения."],
    whyParagraphs: ["Встроенное предупреждение простое, но не всегда подходит вашему процессу.", "Собственный отсчет показывает реальное время, а не только процент."],
    settings: ["Запуск отсчета на выбранном проценте.", "Оставшееся время в строке меню.", "Опциональный процент.", "Charger Run Mode для заметного предупреждения."],
    quick: [["Можно изменить процент Apple?", "Не обычным ползунком macOS."], ["Можно отключить предупреждение BatteryCountdown?", "Да. Вы управляете его видимостью."], ["Работает с обычной иконкой батареи?", "Да. Это отдельная утилита."]],
    finalTitle: "Сделайте предупреждение полезнее.",
    finalBody: "BatteryCountdown дает предупреждение под ваш реальный сценарий работы.",
    linkTitle: "Изменить предупреждение о низком заряде Mac",
    linkDescription: "Понять ограничения Apple и добавить свой отсчет."
  },
  guideBestApp: {
    title: "Лучшее приложение предупреждения о батарее Mac",
    description: "Ищете лучшее приложение предупреждения о низком заряде Mac? Что важно и почему отсчет полезнее иконки.",
    ogDescription: "Что важно в приложении предупреждения о низком заряде Mac.",
    h1: "Лучшее приложение предупреждения о низком заряде для Mac",
    lead: "Лучшее приложение должно быстро отвечать: сколько времени осталось до возможного выключения Mac?",
    answerParagraphs: ["Хорошее приложение должно быть легким, заметным, приватным и помогать действовать.", "BatteryCountdown делает акцент на отсчете в строке меню, собственном пороге и Charger Run Mode."],
    steps: ["Ищите оставшееся время, а не только процент.", "Выбирайте легкое приложение без обязательного аккаунта.", "Проверьте настройки запуска и видимости.", "Используйте BatteryCountdown, если хотите избежать внезапного выключения."],
    whyParagraphs: ["Процент может обманывать: 5% дают разное время при разной нагрузке.", "Отсчет превращает низкий заряд в понятное решение по времени."],
    settings: ["Живой отсчет в строке меню.", "Порог от 1% до 20%.", "Локальный дизайн без аккаунта.", "Опциональный Charger Run Mode."],
    quick: [["Что должно делать такое приложение?", "Показывать последние минуты достаточно рано, чтобы вы успели действовать."], ["BatteryCountdown - полный монитор батареи?", "Нет. Фокус на времени и предупреждении о выключении."], ["Нужно ли держать приложение в Dock?", "Нет. Это утилита строки меню."]],
    finalTitle: "Выберите предупреждение для действия.",
    finalBody: "BatteryCountdown показывает отсчет, которого нет в стандартной иконке батареи.",
    linkTitle: "Лучшее приложение предупреждения о батарее Mac",
    linkDescription: "Что искать в утилите батареи для Mac."
  }
};

extraGuideContent["zh-Hans"] = {
  guideWarningNotShowing: {
    title: "MacBook 低电量警告不显示",
    description: "如果 MacBook 低电量警告不显示，了解 macOS 控制什么，并用 BatteryCountdown 添加可见倒计时。",
    ogDescription: "排查不显示的低电量警告，并添加菜单栏倒计时。",
    h1: "MacBook 低电量警告不显示",
    lead: "如果低电量警告没有出现，或很容易错过，最实用的办法是在关机前添加可见倒计时。",
    answerParagraphs: ["macOS 会自动控制内置低电量警告，普通设置里不能精确选择它何时出现。", "BatteryCountdown 不会替换 Apple 警告，而是在菜单栏添加单独的倒计时。"],
    steps: ["确认 Mac 正在使用电池供电。", "查看电量百分比、电池健康和当前负载。", "安装 BatteryCountdown，并选择倒计时开始的电量。", "保持计时器可见，或使用 Charger Run Mode 获得更醒目的警告。"],
    whyParagraphs: ["警告缺失或太晚很危险，因为最后几分钟可能比预期更快消失。", "按时间显示的倒计时比百分比更容易行动：你知道是继续、保存还是马上充电。"],
    settings: ["1% 到 20% 自定义触发点。", "菜单栏倒计时。", "最后几分钟红色或闪烁显示。", "更醒目的 Charger Run Mode。"],
    quick: [["为什么警告不显示？", "macOS 自己决定显示时机，因此可能被错过。"], ["可以让 Apple 警告更早出现吗？", "普通 macOS 设置做不到。BatteryCountdown 会添加自己的倒计时。"], ["会修改系统文件吗？", "不会。它是独立的本地菜单栏应用。"]],
    finalTitle: "添加一个真正看得见的警告。",
    finalBody: "BatteryCountdown 让低电量剩余时间保持可见，避免错过警告导致工作丢失。",
    linkTitle: "MacBook 低电量警告不显示",
    linkDescription: "排查缺失警告并添加可见倒计时。"
  },
  guideShutdownWarning: {
    title: "如何在 Mac 上获得关机警告",
    description: "了解如何在低电量让 Mac 关机前获得警告，并在菜单栏显示剩余时间。",
    ogDescription: "在 Mac 因低电量关机前获得更清晰的警告。",
    h1: "如何在 Mac 上获得关机警告",
    lead: "最有用的关机警告不只是百分比，而是 Mac 可能关机前还剩多少时间。",
    answerParagraphs: ["macOS 可能会在低电量时提醒，但没有简单的自定义关机倒计时设置。", "BatteryCountdown 会在菜单栏显示预计剩余时间。"],
    steps: ["从 Mac App Store 安装 BatteryCountdown。", "选择 1% 到 20% 之间的倒计时开始点。", "决定菜单栏项目始终显示，还是只在有用时显示。", "需要更强提醒时使用 Charger Run Mode。"],
    whyParagraphs: ["关机警告只有在你有时间保存和充电时才真正有用。", "实时倒计时让选择更明确：继续、保存，还是马上插电。"],
    settings: ["菜单栏低电量倒计时。", "自定义触发百分比。", "可选电量百分比显示。", "充电时的剩余充满时间。"],
    quick: [["macOS 有关机警告吗？", "有电池提醒，但没有简单的自定义关机倒计时。"], ["BatteryCountdown 能提前警告吗？", "可以。它会估算并显示剩余时间。"], ["必须使用 Charger Run Mode 吗？", "不必，它是可选功能。"]],
    finalTitle: "获得更清晰的 Mac 关机警告。",
    finalBody: "BatteryCountdown 把低电量风险变成可见倒计时。",
    linkTitle: "如何在 Mac 上获得关机警告",
    linkDescription: "在低电量关机前设置警告。"
  },
  guideLowBatteryAlert: {
    title: "可以更改 Mac 低电量提醒吗？",
    description: "可以更改 Mac 低电量提醒吗？了解 macOS 的限制，以及如何添加自定义倒计时警告。",
    ogDescription: "了解 Apple 低电量提醒限制并添加自定义倒计时。",
    h1: "可以更改 Mac 低电量提醒吗？",
    lead: "简短回答：普通 macOS 设置里不能直接更改。但你可以添加单独的低电量倒计时。",
    answerParagraphs: ["Apple 控制内置低电量提醒。大多数用户不能选择精确的新百分比。", "BatteryCountdown 允许你选择自己的倒计时开始时间。"],
    steps: ["决定你想更早提醒，还是减少打扰。", "将 BatteryCountdown 设置为 1% 到 20% 之间。", "选择显示时间、百分比或两者。", "真正需要前先测试一次。"],
    whyParagraphs: ["内置提醒很简单，但不一定适合你的工作方式。", "自定义倒计时显示真实剩余时间，而不仅是百分比。"],
    settings: ["在你选择的电量开始倒计时。", "在菜单栏显示剩余时间。", "可选百分比显示。", "更醒目的 Charger Run Mode。"],
    quick: [["可以更改 Apple 警告百分比吗？", "普通 macOS 设置中没有这个滑块。"], ["可以关闭 BatteryCountdown 警告吗？", "可以。你控制它何时显示。"], ["能和普通电池图标一起用吗？", "可以。它是独立工具。"]],
    finalTitle: "让低电量提醒更有用。",
    finalBody: "BatteryCountdown 让你选择更适合自己使用方式的警告。",
    linkTitle: "更改 Mac 低电量提醒",
    linkDescription: "了解 Apple 限制并添加自己的警告。"
  },
  guideBestApp: {
    title: "Mac 最佳低电量警告应用",
    description: "寻找 Mac 最佳低电量警告应用？了解应关注什么，以及为什么倒计时比普通电池图标更有用。",
    ogDescription: "优秀 Mac 低电量警告应用应具备什么。",
    h1: "Mac 最佳低电量警告应用",
    lead: "最好的应用应该快速回答一个问题：Mac 可能关机前还剩多少时间？",
    answerParagraphs: ["好的低电量应用应该轻量、可见、私密，并帮助你采取行动。", "BatteryCountdown 专注于菜单栏实时倒计时、自定义触发点和可选 Charger Run Mode。"],
    steps: ["关注剩余时间，而不仅是百分比。", "选择轻量且不需要账户的应用。", "优先选择可控制开始时间和可见性的工具。", "如果目标是避免突然关机，可以使用 BatteryCountdown。"],
    whyParagraphs: ["百分比可能误导：5% 在不同负载和电池健康下代表不同时间。", "倒计时把低电量变成明确的时间决策。"],
    settings: ["菜单栏实时倒计时。", "1% 到 20% 触发点。", "无需账户的本地设计。", "可选 Charger Run Mode。"],
    quick: [["这种应用应该做什么？", "它应该让最后几分钟足够早地可见，让你能行动。"], ["BatteryCountdown 是完整电池监控器吗？", "不是。它专注于剩余时间和关机警告。"], ["必须在 Dock 中运行吗？", "不。它是菜单栏工具。"]],
    finalTitle: "选择一个为行动而生的警告。",
    finalBody: "BatteryCountdown 显示标准电池图标没有的倒计时。",
    linkTitle: "Mac 最佳低电量警告应用",
    linkDescription: "了解如何选择 Mac 电池警告工具。"
  }
};

extraGuideContent["pt-br"] = extraGuideContent["pt-BR"];
extraGuideContent["zh-hans"] = extraGuideContent["zh-Hans"];

module.exports = {
  extraGuidePageKeys,
  extraGuideSlugs,
  extraGuideCommon,
  extraGuideContent
};
