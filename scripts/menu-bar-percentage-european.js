function article(copy) {
  return {
    ...copy,
    datePublished: "2026-10-12",
    dateModified: "2026-10-12"
  };
}

const percentageContent = {
  de: article({
    title: "MacBook-Akkustand in Prozent in der Menüleiste | BatteryCountdown",
    description: "Zeige den Akkustand deines MacBook mit BatteryCountdown direkt in der Menüleiste an. Einmal aktivieren, danach die Prozentzahl ohne Klick ablesen.",
    ogDescription: "Der Akkustand auf einen Blick: Die optionale Prozentanzeige ersetzt das BatteryCountdown-Symbol in der Menüleiste.",
    eyebrow: "MacBook-Akku im Alltag",
    h1: "Den MacBook-Akkustand ohne Klick ablesen",
    lead: "Wie viel Akku ist noch übrig? BatteryCountdown kann die aktuelle Prozentzahl direkt in seiner Menüleiste anzeigen. Aktiviere die Einstellung einmal und lies den Akkustand danach auf einen Blick ab, ohne das App-Menü zu öffnen.",
    answerTitle: "Eine Zahl statt des App-Symbols",
    answerParagraphs: [
      "BatteryCountdown ist für den Countdown bei niedrigem Akkustand bekannt. Die App hat aber auch eine praktische Anzeige für die Zeit davor: Optional ersetzt sie ihr normales Menüleisten-Symbol durch den aktuellen Akkustand in Prozent. Eine Anzeige wie 67 % lässt sich während der Arbeit direkt ablesen.",
      "Die Funktion gehört zur kostenpflichtigen Grundversion von BatteryCountdown. Du brauchst dafür keinen zusätzlichen Kauf von Charger Run Mode. Die Prozentanzeige ist optional; wenn du das normale Symbol bevorzugst, kannst du jederzeit zurückwechseln."
    ],
    stepsTitle: "So aktivierst du die Prozentanzeige",
    steps: [
      "Öffne BatteryCountdown über die Menüleiste oder starte die App, um ihre Einstellungen aufzurufen.",
      "Aktiviere „Menüleisten-Symbol durch Batterieprozentsatz ersetzen“.",
      "Lass „Menüleistensymbol ausblenden“ ausgeschaltet. Ein ausgeblendetes App-Symbol kann im normalen Betrieb auch keine Prozentzahl anzeigen.",
      "Schließe das Menü. Der aktuelle Akkustand erscheint anstelle des App-Symbols, solange kein Countdown angezeigt wird."
    ],
    whyTitle: "Praktisch beim Arbeiten unterwegs",
    whyParagraphs: [
      "Beim Schreiben, in einer Besprechung oder im Zug reicht ein kurzer Blick nach oben. Du musst die Arbeit nicht unterbrechen und kein Menü öffnen, nur um den Ladestand zu prüfen. So kannst du leichter entscheiden, ob du vor dem nächsten Termin noch ein Netzteil brauchst.",
      "Prozentzahl und Countdown erfüllen unterschiedliche Aufgaben. Die Prozentzahl zeigt die verbliebene Ladung. Wenn der Akku niedrig genug ist und ein Zeitwert verfügbar ist, übernimmt der BatteryCountdown-Countdown die Anzeige. Die geschätzte Restzeit hilft dann dabei, rechtzeitig eine Steckdose zu suchen."
    ],
    settingsTitle: "Die passende Anzeige für deinen Alltag",
    settings: [
      "Verwende die Prozentanzeige, wenn du den Akkustand auch zwischen den Warnungen sehen möchtest.",
      "Wähle den Startpunkt des Countdowns passend zu der Zeit, die du normalerweise zum Anschließen des Netzteils brauchst.",
      "Aktiviere bei Bedarf den automatischen Start bei der Anmeldung, damit BatteryCountdown nach dem Einloggen läuft."
    ],
    quickTitle: "Häufige Fragen zur Prozentanzeige",
    quick: [
      ["Muss ich jedes Mal auf BatteryCountdown klicken?", "Nein. Ein Klick ist für die Einrichtung nötig. Danach steht die Prozentzahl direkt in der Menüleiste, wenn die App läuft und ihr Menüleisten-Eintrag sichtbar ist."],
      ["Ist Charger Run Mode dafür erforderlich?", "Nein. Die optionale Prozentanzeige gehört zur Grundversion von BatteryCountdown und benötigt diesen zusätzlichen Kauf nicht."],
      ["Verschwindet dadurch der Countdown?", "Nein. Die Prozentzahl ersetzt das normale App-Symbol. Bei niedrigem Akkustand übernimmt der aktive Countdown die Anzeige."],
      ["Kann ich zum App-Symbol zurückwechseln?", "Ja. Schalte „Menüleisten-Symbol durch Batterieprozentsatz ersetzen“ in den Einstellungen der App aus."]
    ],
    finalEyebrow: "BatteryCountdown für Mac",
    finalTitle: "Akkustand und Countdown an einem Ort.",
    finalBody: "Aktiviere die optionale Prozentanzeige für den schnellen Blick im Alltag. Bei niedrigem Akkustand hilft dir der Countdown, rechtzeitig das Netzteil anzuschließen.",
    linkTitle: "MacBook-Akkustand ohne Klick sehen",
    linkDescription: "So aktivierst du die optionale Prozentanzeige von BatteryCountdown in der Menüleiste."
  }),
  es: article({
    title: "Porcentaje de batería del MacBook en la barra de menús | BatteryCountdown",
    description: "Ve el porcentaje de batería del MacBook en la barra de menús con BatteryCountdown. Actívalo una vez y consulta el nivel de un vistazo, sin hacer clic.",
    ogDescription: "La batería de un vistazo: el porcentaje opcional sustituye al icono de BatteryCountdown en la barra de menús.",
    eyebrow: "La batería del MacBook en el día a día",
    h1: "Ve la batería del MacBook sin hacer clic",
    lead: "¿Cuánta batería queda? BatteryCountdown puede mostrar el porcentaje actual directamente en su espacio de la barra de menús. Activa la opción una vez y consulta después el nivel de un vistazo, sin abrir el menú de la app.",
    answerTitle: "Un número en lugar del icono de la app",
    answerParagraphs: [
      "BatteryCountdown muestra una cuenta atrás cuando queda poca batería. También incluye una opción útil para el resto del día: sustituir su icono habitual de la barra de menús por el porcentaje de batería. Una cifra como 67 % se puede consultar mientras trabajas, sin abrir otro panel.",
      "Esta función forma parte de la app de pago BatteryCountdown. No hace falta comprar el extra Charger Run Mode para usarla. La visualización es opcional: si prefieres el icono habitual, puedes volver a él en cualquier momento."
    ],
    stepsTitle: "Cómo activar el porcentaje de batería",
    steps: [
      "Abre BatteryCountdown desde la barra de menús o inicia la app para acceder a sus ajustes.",
      "Activa «Reemplazar el icono de la barra de menús por el porcentaje de batería».",
      "Deja desactivado «Ocultar icono de la barra de menús». Si ocultas la app de la barra de menús, el porcentaje tampoco será visible durante el uso normal.",
      "Cierra el menú. El porcentaje actual aparece en lugar del icono cuando no se está mostrando una cuenta atrás."
    ],
    whyTitle: "Una consulta rápida mientras trabajas",
    whyParagraphs: [
      "Al escribir, durante una reunión o mientras viajas, basta con mirar la parte superior de la pantalla. No tienes que interrumpir lo que haces ni abrir un menú solo para consultar la carga. Así resulta más sencillo decidir si necesitas conectar el cargador antes de la siguiente tarea.",
      "El porcentaje y la cuenta atrás responden a preguntas distintas. El porcentaje indica la carga restante. Cuando la batería baja y hay una estimación de tiempo disponible, la cuenta atrás de BatteryCountdown pasa a ocupar ese espacio. La estimación del tiempo restante te ayuda entonces a buscar un enchufe a tiempo."
    ],
    settingsTitle: "Adapta la visualización a tu rutina",
    settings: [
      "Usa el porcentaje si quieres ver la carga de la batería también entre los avisos.",
      "Elige el punto de inicio de la cuenta atrás según el tiempo que suelas necesitar para conectar el cargador.",
      "Si lo deseas, activa el inicio automático al iniciar sesión para que BatteryCountdown esté en marcha cuando entres en tu Mac."
    ],
    quickTitle: "Preguntas sobre el porcentaje de batería",
    quick: [
      ["¿Tengo que hacer clic cada vez en BatteryCountdown?", "No. Solo tienes que configurar la opción una vez. Después, el porcentaje aparece directamente en la barra de menús mientras la app está abierta y su entrada es visible."],
      ["¿Necesito Charger Run Mode?", "No. La visualización opcional del porcentaje está incluida en la app base BatteryCountdown y no requiere esa compra adicional."],
      ["¿Desaparece la cuenta atrás?", "No. El porcentaje sustituye al icono habitual. Cuando hay poca batería y la cuenta atrás está activa, esta pasa a ocupar su lugar."],
      ["¿Puedo volver al icono de la app?", "Sí. Desactiva «Reemplazar el icono de la barra de menús por el porcentaje de batería» en los ajustes de la app."]
    ],
    finalEyebrow: "BatteryCountdown para Mac",
    finalTitle: "Porcentaje y cuenta atrás en un mismo lugar.",
    finalBody: "Activa el porcentaje opcional para consultar la batería de un vistazo. Cuando quede poca carga, la cuenta atrás te ayudará a conectar el cargador a tiempo.",
    linkTitle: "Consulta la batería del MacBook sin hacer clic",
    linkDescription: "Cómo activar el porcentaje opcional de BatteryCountdown en la barra de menús."
  }),
  fr: article({
    title: "Pourcentage de batterie du MacBook dans la barre des menus | BatteryCountdown",
    description: "Affichez le pourcentage de batterie de votre MacBook dans la barre des menus avec BatteryCountdown. Activez l’option une fois, puis consultez-le sans clic.",
    ogDescription: "La batterie en un coup d’œil : le pourcentage optionnel remplace l’icône de BatteryCountdown dans la barre des menus.",
    eyebrow: "La batterie du MacBook au quotidien",
    h1: "Voir la batterie du MacBook sans cliquer",
    lead: "Combien de batterie reste-t-il ? BatteryCountdown peut afficher le pourcentage actuel directement dans son emplacement de la barre des menus. Activez l’option une fois, puis consultez le niveau d’un coup d’œil, sans ouvrir le menu de l’app.",
    answerTitle: "Un nombre à la place de l’icône de l’app",
    answerParagraphs: [
      "BatteryCountdown affiche un compte à rebours lorsque la batterie est faible. L’app propose aussi une option utile le reste du temps : remplacer son icône habituelle dans la barre des menus par le pourcentage de batterie. Une indication telle que 67 % se lit directement pendant que vous travaillez.",
      "Cette fonction fait partie de l’app payante BatteryCountdown. Aucun achat supplémentaire de Charger Run Mode n’est nécessaire pour l’utiliser. L’affichage est facultatif : si vous préférez l’icône habituelle, vous pouvez y revenir à tout moment."
    ],
    stepsTitle: "Comment activer l’affichage du pourcentage",
    steps: [
      "Ouvrez BatteryCountdown depuis la barre des menus ou lancez l’app pour accéder à ses réglages.",
      "Activez « Remplacer l’icône de la barre des menus par le pourcentage de batterie ».",
      "Laissez « Masquer l’icône de la barre des menus » désactivé. Lorsque l’entrée de l’app est masquée, son pourcentage n’est pas visible pendant l’utilisation normale.",
      "Fermez le menu. Le pourcentage actuel apparaît à la place de l’icône lorsqu’aucun compte à rebours n’est affiché."
    ],
    whyTitle: "Un coup d’œil pendant votre travail",
    whyParagraphs: [
      "En rédigeant un document, pendant une réunion ou dans le train, il suffit de regarder en haut de l’écran. Vous n’avez pas à interrompre votre travail ni à ouvrir un menu pour vérifier la charge. Vous pouvez ainsi décider plus facilement de brancher le chargeur avant votre prochain rendez-vous.",
      "Le pourcentage et le compte à rebours apportent des informations différentes. Le pourcentage indique la charge restante. Lorsque la batterie est suffisamment faible et qu’une estimation du temps est disponible, le compte à rebours de BatteryCountdown prend sa place. Le temps restant estimé vous aide alors à trouver une prise à temps."
    ],
    settingsTitle: "Choisir l’affichage adapté à vos habitudes",
    settings: [
      "Utilisez le pourcentage pour connaître le niveau de batterie entre les avertissements.",
      "Choisissez le seuil de démarrage du compte à rebours selon le temps dont vous avez habituellement besoin pour brancher le chargeur.",
      "Vous pouvez activer le lancement à l’ouverture de session pour que BatteryCountdown fonctionne après votre connexion au Mac."
    ],
    quickTitle: "Questions sur le pourcentage de batterie",
    quick: [
      ["Faut-il cliquer sur BatteryCountdown à chaque fois ?", "Non. Il suffit de configurer l’option une fois. Ensuite, le pourcentage est directement visible dans la barre des menus lorsque l’app fonctionne et que son entrée est affichée."],
      ["Faut-il acheter Charger Run Mode ?", "Non. Le pourcentage optionnel est inclus dans l’app de base BatteryCountdown et ne nécessite pas cet achat supplémentaire."],
      ["Le compte à rebours disparaît-il ?", "Non. Le pourcentage remplace l’icône habituelle. Lorsque la batterie est faible et que le compte à rebours est actif, celui-ci prend le relais."],
      ["Puis-je revenir à l’icône de l’app ?", "Oui. Désactivez « Remplacer l’icône de la barre des menus par le pourcentage de batterie » dans les réglages de l’app."]
    ],
    finalEyebrow: "BatteryCountdown pour Mac",
    finalTitle: "Pourcentage et compte à rebours au même endroit.",
    finalBody: "Activez le pourcentage optionnel pour consulter la batterie d’un coup d’œil. Quand la charge devient faible, le compte à rebours vous aide à brancher le chargeur à temps.",
    linkTitle: "Voir la batterie du MacBook sans clic",
    linkDescription: "Comment activer le pourcentage optionnel de BatteryCountdown dans la barre des menus."
  }),
  it: article({
    title: "Percentuale batteria del MacBook nella barra dei menu | BatteryCountdown",
    description: "Visualizza la percentuale della batteria del MacBook nella barra dei menu con BatteryCountdown. Attivala una volta, poi controllala a colpo d’occhio senza clic.",
    ogDescription: "La batteria a colpo d’occhio: la percentuale opzionale sostituisce l’icona di BatteryCountdown nella barra dei menu.",
    eyebrow: "La batteria del MacBook ogni giorno",
    h1: "Controlla la batteria del MacBook senza clic",
    lead: "Quanta batteria rimane? BatteryCountdown può mostrare la percentuale attuale direttamente nel suo spazio nella barra dei menu. Attiva l’opzione una volta e poi leggi il livello a colpo d’occhio, senza aprire il menu dell’app.",
    answerTitle: "Un numero al posto dell’icona dell’app",
    answerParagraphs: [
      "BatteryCountdown mostra un conto alla rovescia quando la batteria è quasi scarica. L’app offre anche una funzione utile durante il resto della giornata: sostituire la normale icona nella barra dei menu con la percentuale della batteria. Un valore come 67 % si legge direttamente mentre lavori.",
      "Questa funzione è inclusa nell’app a pagamento BatteryCountdown. Non è necessario acquistare separatamente Charger Run Mode per usarla. La visualizzazione è facoltativa: se preferisci l’icona normale, puoi ripristinarla in qualsiasi momento."
    ],
    stepsTitle: "Come attivare la percentuale della batteria",
    steps: [
      "Apri BatteryCountdown dalla barra dei menu oppure avvia l’app per accedere alle impostazioni.",
      "Attiva «Sostituisci l’icona nella barra dei menu con la percentuale batteria».",
      "Lascia disattivata l’opzione «Nascondi icona della barra dei menu». Se nascondi la voce dell’app, la percentuale non sarà visibile durante il normale utilizzo.",
      "Chiudi il menu. La percentuale attuale appare al posto dell’icona quando non è visualizzato un conto alla rovescia."
    ],
    whyTitle: "Un’occhiata mentre continui a lavorare",
    whyParagraphs: [
      "Mentre scrivi, partecipi a una riunione o viaggi in treno, basta guardare la parte superiore dello schermo. Non serve interrompere il lavoro né aprire un menu solo per controllare la carica. Diventa così più facile decidere se collegare l’alimentatore prima del prossimo impegno.",
      "La percentuale e il conto alla rovescia rispondono a domande diverse. La percentuale indica la carica residua. Quando la batteria è abbastanza bassa e una stima del tempo è disponibile, il conto alla rovescia di BatteryCountdown prende il suo posto. Il tempo residuo stimato ti aiuta allora a trovare una presa prima che sia troppo tardi."
    ],
    settingsTitle: "Scegli la visualizzazione per la tua routine",
    settings: [
      "Usa la percentuale se vuoi vedere la carica della batteria anche tra un avviso e l’altro.",
      "Scegli la soglia di avvio del conto alla rovescia in base al tempo che ti serve normalmente per collegare l’alimentatore.",
      "Se lo desideri, attiva l’avvio automatico al login per usare BatteryCountdown dopo l’accesso al Mac."
    ],
    quickTitle: "Domande sulla percentuale della batteria",
    quick: [
      ["Devo fare clic su BatteryCountdown ogni volta?", "No. Devi configurare l’opzione una sola volta. Poi la percentuale è direttamente visibile nella barra dei menu quando l’app è in esecuzione e la sua voce è visibile."],
      ["Serve Charger Run Mode?", "No. La visualizzazione opzionale della percentuale è inclusa nell’app base BatteryCountdown e non richiede quell’acquisto aggiuntivo."],
      ["Il conto alla rovescia scompare?", "No. La percentuale sostituisce la normale icona dell’app. Quando la batteria è bassa e il conto alla rovescia è attivo, viene mostrato quest’ultimo."],
      ["Posso tornare all’icona dell’app?", "Sì. Disattiva «Sostituisci l’icona nella barra dei menu con la percentuale batteria» nelle impostazioni dell’app."]
    ],
    finalEyebrow: "BatteryCountdown per Mac",
    finalTitle: "Percentuale e conto alla rovescia nello stesso posto.",
    finalBody: "Attiva la percentuale opzionale per controllare la batteria a colpo d’occhio. Quando la carica scende, il conto alla rovescia ti aiuta a collegare l’alimentatore in tempo.",
    linkTitle: "Controlla la batteria del MacBook senza clic",
    linkDescription: "Come attivare la percentuale opzionale di BatteryCountdown nella barra dei menu."
  }),
  "pt-BR": article({
    title: "Porcentagem da bateria do MacBook na barra de menus | BatteryCountdown",
    description: "Veja a porcentagem da bateria do MacBook na barra de menus com BatteryCountdown. Ative uma vez e confira o nível de imediato, sem precisar clicar.",
    ogDescription: "A bateria em um olhar: a porcentagem opcional substitui o ícone do BatteryCountdown na barra de menus.",
    eyebrow: "A bateria do MacBook no dia a dia",
    h1: "Confira a bateria do MacBook sem clicar",
    lead: "Quanto de bateria ainda resta? O BatteryCountdown pode mostrar a porcentagem atual diretamente em seu espaço na barra de menus. Ative a opção uma vez e depois confira o nível de imediato, sem abrir o menu do app.",
    answerTitle: "Um número no lugar do ícone do app",
    answerParagraphs: [
      "O BatteryCountdown mostra uma contagem regressiva quando a bateria está baixa. O app também oferece uma opção útil para o restante do dia: substituir seu ícone normal na barra de menus pela porcentagem da bateria. Um número como 67 % pode ser lido diretamente enquanto você trabalha.",
      "Essa função está incluída no app pago BatteryCountdown. Você não precisa comprar o extra Charger Run Mode para usá-la. A visualização é opcional: se preferir o ícone normal, pode voltar a ele a qualquer momento."
    ],
    stepsTitle: "Como ativar a porcentagem da bateria",
    steps: [
      "Abra o BatteryCountdown pela barra de menus ou inicie o app para acessar seus ajustes.",
      "Ative «Substituir o ícone da barra de menus pela porcentagem da bateria».",
      "Deixe «Ocultar ícone da barra de menus» desativado. Se a entrada do app estiver oculta, a porcentagem também não aparecerá durante o uso normal.",
      "Feche o menu. A porcentagem atual aparece no lugar do ícone quando nenhuma contagem regressiva está sendo exibida."
    ],
    whyTitle: "Uma consulta rápida enquanto você trabalha",
    whyParagraphs: [
      "Ao escrever, participar de uma reunião ou trabalhar durante uma viagem, basta olhar para o alto da tela. Você não precisa interromper a tarefa nem abrir um menu só para conferir a carga. Assim fica mais fácil decidir se vale conectar o carregador antes do próximo compromisso.",
      "A porcentagem e a contagem regressiva têm funções diferentes. A porcentagem mostra a carga restante. Quando a bateria está suficientemente baixa e existe uma estimativa de tempo disponível, a contagem regressiva do BatteryCountdown ocupa esse espaço. O tempo restante estimado ajuda você a procurar uma tomada a tempo."
    ],
    settingsTitle: "Escolha a visualização para sua rotina",
    settings: [
      "Use a porcentagem se quiser ver o nível da bateria também entre os avisos.",
      "Escolha o ponto de início da contagem regressiva conforme o tempo que você costuma precisar para conectar o carregador.",
      "Se desejar, ative a abertura automática ao iniciar sessão para que o BatteryCountdown esteja funcionando depois de entrar no Mac."
    ],
    quickTitle: "Dúvidas sobre a porcentagem da bateria",
    quick: [
      ["Preciso clicar no BatteryCountdown toda vez?", "Não. Basta configurar a opção uma vez. Depois, a porcentagem fica visível diretamente na barra de menus enquanto o app está aberto e sua entrada está visível."],
      ["Preciso do Charger Run Mode?", "Não. A porcentagem opcional está incluída no app base BatteryCountdown e não exige essa compra adicional."],
      ["A contagem regressiva deixa de aparecer?", "Não. A porcentagem substitui o ícone normal do app. Quando a bateria está baixa e a contagem regressiva está ativa, ela passa a ocupar esse espaço."],
      ["Posso voltar ao ícone do app?", "Sim. Desative «Substituir o ícone da barra de menus pela porcentagem da bateria» nos ajustes do app."]
    ],
    finalEyebrow: "BatteryCountdown para Mac",
    finalTitle: "Porcentagem e contagem regressiva no mesmo lugar.",
    finalBody: "Ative a porcentagem opcional para conferir a bateria de imediato. Quando a carga estiver baixa, a contagem regressiva ajudará você a conectar o carregador a tempo.",
    linkTitle: "Confira a bateria do MacBook sem clicar",
    linkDescription: "Como ativar a porcentagem opcional do BatteryCountdown na barra de menus."
  })
};

const percentageHome = {
  de: {
    eyebrow: "Optionaler Akkustand in Prozent",
    title: "Dein Akkustand. Direkt in der Menüleiste.",
    body: "Ersetze das BatteryCountdown-Symbol durch den aktuellen Akkustand in Prozent. Einmal aktivieren, danach ohne Klick ablesen. Bei niedrigem Akkustand übernimmt der Countdown die Anzeige.",
    settingLabel: "Menüleisten-Symbol durch Batterieprozentsatz ersetzen",
    caption: "Optionale Funktion der Grundversion. Kein zusätzlicher Kauf von Charger Run Mode erforderlich.",
    link: "So aktivierst du die Prozentanzeige",
    featureTitle: "Akkustand auf einen Blick",
    featureBody: "Zeige optional die aktuelle Prozentzahl anstelle des App-Symbols. Lies den Akkustand direkt in der Menüleiste ab, ohne ein Menü zu öffnen.",
    faqQ: "Kann BatteryCountdown den Akkustand in Prozent anzeigen?",
    faqA: "Ja. Aktiviere „Menüleisten-Symbol durch Batterieprozentsatz ersetzen“ und lass „Menüleistensymbol ausblenden“ ausgeschaltet. Die Prozentzahl gehört zur Grundversion; der Countdown übernimmt bei niedrigem Akkustand."
  },
  es: {
    eyebrow: "Porcentaje de batería opcional",
    title: "Tu batería. Directamente en la barra de menús.",
    body: "Sustituye el icono de BatteryCountdown por el porcentaje actual de batería. Actívalo una vez y consúltalo después sin hacer clic. Cuando quede poca batería, la cuenta atrás pasa a ocupar su lugar.",
    settingLabel: "Reemplazar el icono de la barra de menús por el porcentaje de batería",
    caption: "Función opcional incluida en la app base. No requiere comprar el extra Charger Run Mode.",
    link: "Cómo activar el porcentaje de batería",
    featureTitle: "La batería de un vistazo",
    featureBody: "Muestra el porcentaje actual en lugar del icono de la app, si lo deseas. Consulta la batería directamente en la barra de menús sin abrir un menú.",
    faqQ: "¿BatteryCountdown puede mostrar el porcentaje de batería?",
    faqA: "Sí. Activa «Reemplazar el icono de la barra de menús por el porcentaje de batería» y deja «Ocultar icono de la barra de menús» desactivado. El porcentaje está incluido en la app base; la cuenta atrás toma su lugar cuando la batería está baja."
  },
  fr: {
    eyebrow: "Pourcentage de batterie optionnel",
    title: "Votre batterie. Directement dans la barre des menus.",
    body: "Remplacez l’icône de BatteryCountdown par le pourcentage actuel de batterie. Activez l’option une fois, puis consultez-le sans clic. Lorsque la batterie est faible, le compte à rebours prend le relais.",
    settingLabel: "Remplacer l’icône de la barre des menus par le pourcentage de batterie",
    caption: "Fonction optionnelle incluse dans l’app de base. Aucun achat supplémentaire de Charger Run Mode nécessaire.",
    link: "Comment activer le pourcentage de batterie",
    featureTitle: "La batterie en un coup d’œil",
    featureBody: "Affichez le pourcentage actuel à la place de l’icône de l’app, si vous le souhaitez. Consultez la batterie dans la barre des menus sans ouvrir de menu.",
    faqQ: "BatteryCountdown peut-il afficher le pourcentage de batterie ?",
    faqA: "Oui. Activez « Remplacer l’icône de la barre des menus par le pourcentage de batterie » et laissez « Masquer l’icône de la barre des menus » désactivé. Le pourcentage est inclus dans l’app de base ; le compte à rebours prend le relais lorsque la batterie est faible."
  },
  it: {
    eyebrow: "Percentuale della batteria opzionale",
    title: "La tua batteria. Direttamente nella barra dei menu.",
    body: "Sostituisci l’icona di BatteryCountdown con la percentuale attuale della batteria. Attivala una volta e poi controllala senza clic. Quando la batteria è bassa, viene mostrato il conto alla rovescia.",
    settingLabel: "Sostituisci l’icona nella barra dei menu con la percentuale batteria",
    caption: "Funzione opzionale inclusa nell’app base. Non richiede l’acquisto aggiuntivo di Charger Run Mode.",
    link: "Come attivare la percentuale della batteria",
    featureTitle: "La batteria a colpo d’occhio",
    featureBody: "Mostra la percentuale attuale al posto dell’icona dell’app, se lo desideri. Controlla la batteria direttamente nella barra dei menu senza aprire un menu.",
    faqQ: "BatteryCountdown può mostrare la percentuale della batteria?",
    faqA: "Sì. Attiva «Sostituisci l’icona nella barra dei menu con la percentuale batteria» e lascia disattivato «Nascondi icona della barra dei menu». La percentuale è inclusa nell’app base; quando la batteria è bassa, il conto alla rovescia prende il suo posto."
  },
  "pt-BR": {
    eyebrow: "Porcentagem da bateria opcional",
    title: "Sua bateria. Diretamente na barra de menus.",
    body: "Substitua o ícone do BatteryCountdown pela porcentagem atual da bateria. Ative uma vez e depois confira sem clicar. Quando a bateria estiver baixa, a contagem regressiva ocupará esse espaço.",
    settingLabel: "Substituir o ícone da barra de menus pela porcentagem da bateria",
    caption: "Função opcional incluída no app base. Não exige a compra adicional do Charger Run Mode.",
    link: "Como ativar a porcentagem da bateria",
    featureTitle: "A bateria em um olhar",
    featureBody: "Mostre a porcentagem atual no lugar do ícone do app, se preferir. Confira a bateria diretamente na barra de menus sem abrir um menu.",
    faqQ: "O BatteryCountdown pode mostrar a porcentagem da bateria?",
    faqA: "Sim. Ative «Substituir o ícone da barra de menus pela porcentagem da bateria» e deixe «Ocultar ícone da barra de menus» desativado. A porcentagem está incluída no app base; a contagem regressiva assume seu lugar quando a bateria está baixa."
  }
};

module.exports = { percentageContent, percentageHome };
