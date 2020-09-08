// ------------------------------------------------------------------------------
function Activity(title, description) {
  this.title = title;
  this.description = description;
}

function Instructor(name, info, photoUrl, disciplina, activities, whatsapp, mail, instagram, bcolor) {
  this.name = name;
  this.info = info;
  this.photoUrl = photoUrl;
  this.disciplina = disciplina;
  this.activities = activities;
  this.whatsapp = whatsapp;
  this.mail = mail;
  this.instagram = instagram;
  this.bcolor = bcolor
}


var pilates = new Activity(
  "Pilates Matwork",
  "Il <b>Pilates Matwork</b> è uno specifico programma di esercizi che viene svolto a <b>corpo libero</b> o con piccoli attrezzi su un <b>tappetino</b>. Va ad agire sui <b>muscoli posturali</b>, con l’obiettivo di favorire un maggiore bilanciamento del corpo e aumentare il supporto della muscolatura alla colonna vertebrale. Non viene tralasciato il lavoro globale sull’intero corpo, con particolare attenzione alla forza, elasticità e al rafforzamento del <b>CORE</b>, o corsetto addominale."
  );

var reformer = new Activity(
  "Pilates su Macchinari Reformer",
  "Il Reformer è un macchinario che prevede un <b>repertorio di esercizi</b> per tutto il corpo, tramite un attrezzo progettato appositamente per consentire un </b>allenamento completo</b> potenziando i muscoli di <b>tutto il corpo</b> e migliorando la tonicità muscolare, la flessibilità articolare e la postura."
  );

var chiara = new Instructor(
  "Chiara Trione",
  "Laureata in Scienze Motorie, con specializzazione in Scienze dell’Educazione Motoria Adattata. Istruttrice nazionale di Fisiopilates. Chinesiologa dal 2013",
  "chiara.jpg",
  "Pilates",
  [pilates, reformer],
  "393886967485",
  "chiara.trione@gmail.com",
  "chiara_pilates",
  "bcolor1"
  );


// ------------------------------------------------------------------------------
var parto = new Activity(
  "ProMuoviamo il parto",
  "Il percorso è dedicato alle mamme in gravidanza. Attraverso il movimento ci prenderemo cura del corpo, con attenzione ai suoi bisogni, sperimentando tecniche e posture che potranno essere utili durante la gestazione, il travaglio e il parto."
  );

var muoviamoci = new Activity(
  "Muoviamoci insieme",
  "Il corso è dedicato a mamme e neonati nel dopo nascita. Attraverso movimenti mirati e specifici andremo a prenderci cura del corpo materno, facendo particolare attenzione alla salute del perineo, della parete addominale e della colonna vertebrale."
  );

var anna = new Instructor(
  "Anna Tirone",
  "Laureata in Ostetricia presso l’università degli Studi di Torino. Attualmente lavora come libera professionista, offrendo servizi per l’area materno infantile e per la salute delle donne in generale.",
  "anna.jpeg",
  "Pre e Post Parto",
  [parto, muoviamoci],
  "393277573301",
  "ostetrica.anna.tirone@gmail.com",
  "ostetrica.anna.tirone",
  "bcolor2"
  );
// ------------------------------------------------------------------------------
var naturopatia = new Activity(
  "Naturopatia",
  "Il termine naturopatia deriva dal latino “natura” e dal greco “pathos” e significa “sentire secondo natura”, “empatia con la natura”. La naturopatia  viene considerata come un’applicazione di quelli che sono i principi curativi della natura, al fine di riproporre o mantenere l’equilibrio energetico organico attraverso pratiche e utilizzo di rimedi naturali."
  );


var bach = new Activity(
  "Fiori di Bach",
  "I Fiori di Bach sono 38 rimedi floreali individuati dal Dr. Edward Bach, tra il 1928 e il 1935, in Inghilterra. I fiori intervengono sia a livello fisico sia a livello psico-emotivo agendo sul piano energetico-vibrazionale, ripristinando una condizione di armonia mentale, grazie alla quale, le naturali difese dell’organismo possono svolgere più efficacemente il proprio compito."
  );

var reiki = new Activity(
  "Reiki",
  "Promuovendo l’autoguarigione, il Reiki è una pratica energetica utilizzata, in forma integrativa, per il trattamento di malanni fisici, emozionali e mentali.  Durante un trattamento reiki il corpo viene educato o ri-educato ad attivare il suo naturale processo di guarigione attraverso il riequilibrio dei centri energetici nevralgici del corpo: i Chakra."
  );

var arianna = new Instructor(
  "Arianna Nicola",
  "Naturopata diplomata all’accademia di Naturopatia Anea ad indirizzo bio-energetico ed ambientale. Operatrice abilitata in Osteopatia Bio-Fluidica. Diplomata al liceo scientifico ad indirizzo Socio-Psico-Pedagogico.",
  "arianna.jpeg",
  "Naturopatia",
  [naturopatia, bach, reiki],
  "393314496883",
  "ariannanicola@icloud.com",
  "arianna.nicola",
  "bcolor3"
  );
// ------------------------------------------------------------------------------

// ------------------------------------------------------------------------------
var sokushindo = new Activity(
  "Riflessologia Plantare Sokushindo",
  "Combina manovre delicate e profonde per offrire un vero rilassamento e una sensazione di gambe leggere. Comprende la digitopressione di punti e meridiani di agopuntura. Si può completare con il trattamento delle mani e della testa."
  );

var anpuku = new Activity(
  "Massaggio Addominale Anpuku",
  "È un metodo per sbloccare l'energia ed equilibrarla attraverso il movimento e la dispersione dei blocchi riscontrati. Si articola in una serie di manovre addominali, pressioni, frizioni, vibrazioni e rotazioni, Utile per la digestione, l'intestino e i disturbi femminili."
  );

var sotai = new Activity(
  "Sotai",
  "È una forma Giapponese di riequilibrio corporeo attraverso il movimento ed il respiro; creata dal medico Giapponese Keizo Hashimoto; è una forma di esercizi attivi e passivi utilizzati per correggere squilibri nell'integrità strutturale del corpo. il Sotai è un sistema di riequilibrio psicofisico attraverso la percezione e la consapevolezza del corpo -  che mira a recuperare il giusto equilibrio strutturale del corpo raggiungendo uno stato ottimale di salute fisica e mentale."
  );

var shiatsu = new Activity(
  "Shiatsu",
  "È una tecnica corporea, prevalentemente manuale che attraverso la pressione e l'allungamento corregge le disarmonie che creano disagio  e promuove ed aiuta a  mantenere lo stato di benessere."
  );

var tuina = new Activity(
  "Tuina",
  "È un trattamento energetico che si basa su diverse tecniche come pressione sui punti di agopuntura, frizione, spinta, scuotimento, dei meridiani, che smuovono le energie del ricevente stimolandolo a rigenerare le propri facoltà di auto-bilanciamento e ritorno al benessere."
  );

var moxa = new Activity(
  "Moxa",
  "È un'antica tecnica di origine orientale, che consistente nella stimolazione di alcuni punti della cute per mezzo del calore - sfruttando  il potere del calore unito ai punti e meridiani della medicina orientale  stimola il corpo e la sua circolazione a riattivare le fisiologie fondamentali."
  );

var coppettazione = new Activity(
  "Coppettazione",
  "Consiste nell'applicazione di coppette di vetro, bambù o ceramica sulla pelle - per aspirare tensioni, dolori e ristagni energetici.  Ha un'enorme efficacia sulle cicatrici, riducendone l'adesione tissutale migliorando la vitalità della pelle e l'inestetismo."
  );

var marco = new Instructor(
  "Marco Superbi",
  "Operatore e Docente per la Federazione Italiana Scuole Tuina e Qigong. Operatore ed Insegnante Shiatsu per la Scuola Giapponese di Madrid unica sede Europea riconosciuta dal Japan Shiatsu College di Tokyo.",
  "marco.png",
  "Shiatsu e Sotai",
  [sokushindo,
  anpuku,
  sotai,
  shiatsu,
  tuina,
  moxa,
  coppettazione],
  "393488029204",
  "markosuperbi@gmai.com",
  "markosuperbi",
  "bcolor2"
  );

// ------------------------------------------------------------------------------
var psicomotricita = new Activity(
  "Psicomotricità",
  "5 incontri settimanali di un’ora di educazione psicomotoria con 4-5 bambini di 3 o di 4-5 anni in spazi pensati per promuovere l’iniziativa motoria e sperimentare il piacere senso-motorio, sotto la guida di una Terapista della neuropsicomotricità, Fisioterapista pediatrica."
  );

var massaggioinfantile = new Activity(
  "Massaggio Infantile",
  "Corsi di massaggio infantile per genitori e i loro bambini articolati in 5 incontri settimanali di un’ora e mezzo circa, tenuti da un’insegnante qualificata A.I.M.I. Oltre ad imparare la sequenza del massaggio, i genitori possono confrontarsi su tematiche inerenti alla crescita armoniosa del proprio bambino."
  );

var maritella = new Instructor(
  "Margherita Brizio",
  "Fisioterapista specializzata in età pediatrica, esperta nell’approccio neurocognitivo (ETC), diplomata metodo Bobath.  Neuropsicomotricista. Insegnante AIMI (massaggio del neonato e del bambino). Applicatore metodo Feuerstein.",
  "maritella.jpg",
  "Psicomotricità Infantile",
  [psicomotricita,
  massaggioinfantile],
  "393297539935",
  "margherita.brizio@virgilio.it",
  "",
  "bcolor1"
  );

// ------------------------------------------------------------------------------
var ananda = new Activity(
  "Ananda Yoga",
  "Ananda Yoga, è dedicato a creare armonia tra corpo, mente e anima. Il suo obiettivo primario è aumentare la nostra consapevolezza. Si basa sul Hata Yoga classico, con Asana, pranajama, rilassamento e meditazione. Un esperienza di ascolto profondo per riscoprirti e cambiare passo dopo passo la tua vita."
  );

var power = new Activity(
  "Power Yoga",
  "Pratica dinamica per rafforzare il corpo e sbloccare il respiro, accrescere la forza e l’energia, aumentare la flessibilità, migliorare l’equilibrio, superare i propri limiti!"
  );

var bimbi = new Activity(
  "Yoga Bimbi",
  "Lo yoga aiuta i bambini a ritrovare la meraviglia che è in loro! Lezioni basate sul gioco e su tecniche espressive-artistiche, posizioni yoga ispirate agli Animali, storie, rilassamento e meditazione."
  );

var gravidanza = new Activity(
  "Yoga in Gravidanza",
  "Una pratica che aiuta a trovare il tempo e lo spazio per connetterti con il tuo bambino in modo profondo e coltivare il tuo istinto materno, ti dedicherai all’ascolto, alla scoperta del pavimento pelvico, ai pranajama più indicati, alle asana che ti accompagneranno per predisporre corpo e mente al parto."
  );

var yin = new Activity(
  "Yin Yoga",
  "Una pratica semplice e intensa che insegna a rilassare il corpo profondamente, calma le emozioni, stimola l'energia vitale dei meridiani e degli organi, e prepara la mente e il corpo per la meditazione."
  );

var nidra = new Activity(
  "Yoga Nidra",
  "Una pratica utile per il rilassamento profondo, la gestione delle situazioni emozionali, e contro lo stress."
  );

var nadia = new Instructor(
  "Nadia Dotta",
  "Praticante yoga dal 2004, diplomata presso la Scuola Europea di Ananda Yoga, accademia riconosciuta a livello internazionale da Yoga Alliance e European Yoga Federation. Formazioni in Power Yoga, Yoga bimbi, Yoga Gravidanza, Yin Yoga, Yoga Nidra, Dinamic Yoga Pro, GARUDA® DHARA CHAIR ecc...",
  "nadia.jpg",
  "Yoga",
  [ananda,
  power,
  bimbi,
  gravidanza,
  yin,
  nidra],
  "393497319843",
  "yoga@nadiadotta.com",
  "nadiadotta",
  "bcolor0"
  );

// ------------------------------------------------------------------------------

var dietista = new Activity(
  "Dietista e educazione alimentare",
  "Stefano (Dietista e Biologo Nutrizionista) effettua terapia dietetica per patologie (diabete, ipertensione, ipercolesterolemia..), educazione alimentare per singoli o gruppi, diete personalizzate per perdere peso. Specializzato nello sport, preparazione e gestione gare/stagione sportiva (crossfit, sport di squadra, endurance..). Ampia esperienza con bambini diabetici e malnutrizione dell'anziano (Borsa di studio in malnutrizione territoriale per l'Azienda Ospedaliera S.Croce, Cuneo nel 2018/19). Coltiva da anni la passione per la cucina e lo sport."
  );


var stefano = new Instructor(
  "Stefano Arlotto",
  "Dietista (università di Torino) e Biologo Nutrizionista. Specializzato in scienze dell'alimentazione (Università di Firenze). Perfezionamento in: Nutrizione nelle discipline sportive (Milano)",
  "stefano.jpeg",
  "Nutrizione e Dietistica",
  [dietista],
  "393202804617",
  "stefanoar@virgilio.it",
  "mytrofi_",
  "bcolor1"
  );

// ------------------------------------------------------------------------------

var pancafit = new Activity(
  "Pancafit®",
  "È un attrezzo brevettato (Metodo Raggi®), capace di riequilibrare la postura attraverso l’“allungamento muscolare globale decompensato”. I benefici sono la riduzione delle tensioni e rigidità muscolari, il miglioramento del respiro, coinvolgendo il diaframma ed infine la libertà e benessere nel movimento"
  );

var mobilita = new Activity(
  "Corso Terza Età (Mobilità e Stretching)",
  "Un’ora di ginnastica per il benessere del vostro corpo e della vostra mente. Si svolgeranno esercizi per il miglioramento della coordinazione, equilibrio, postura, tonicità ed elasticità muscolare."
  );

var totalbody = new Activity(
  "Corso Total Body",
  "Allenamento funzionale che stimola tutto il corpo, alternando il lavoro aerobico con esercizi di rinforzo muscolare. Vengono svolti esercizi a corpo libero o con l’utilizzo di piccoli attrezzi."
  );

var private = new Activity(
  "Private/Semiprivate (duetto, trio)",
  "Sedute personalizzate in base alle proprie esigenze.<br> Programmi di tonificazione muscolare. Recupero funzionale. Ginnastica correttiva e posturale"
  );

var valeria = new Instructor(
  "Valeria Giordana",
  "Laureata in Scienze Motorie e Sportive. Massoterapista (MCB). Terapista Pancafit®",
  "valeria.jpeg",
  "Ginnastica Funzionale e 3a Età",
  [pancafit, mobilita, totalbody, private],
  "393397615898",
  "valeria.giordana@hotmail.it",
  "valekinesis",
  "bcolor2"
  );


// ------------------------------------------------------------------------------
var feldenkrais = new Activity(
  "Feldenkrais®",
  "Il Metodo Feldenkrais® consente di riconoscere, ridurre o evitare dolori, blocchi e malesseri psicofisici. Con movimenti semplici, ma spesso inusuali, porta a scoprire e risvegliare parti ignote di noi. Ristabilisce un tono muscolare equilibrato e aiuta a migliorare i movimenti di tutti i giorni. Per seguire le suddette lezioni è necessario diventare socio dell'a.s.d Cuerpemente."
  );


var tamara = new Instructor(
  "Tamara Gosman",
  "Ballerina professionista, formatasi al Teatro Colon di Buenos Aires, Insegnante diplomata presso la Yoga International Federation, studentessa in formazione nel Metodo Feldenkrais®, autorizzata ad insegnare Awarness Through Movement®.",
  "tamara.jpeg",
  "Feldenkrais®",
  [feldenkrais],
  "393917447827",
  "cuerpomenteasd@gmail.com",
  "cuerpomenteasd",
  "bcolor1"
  );

// ------------------------------------------------------------------------------
var instructors = [
chiara,
valeria,
nadia,
tamara,
anna,
arianna,
stefano,
marco,
maritella
];
// ------------------------------------------------------------------------------


function Modulo(title, link) {
  this.title = title;
  this.link = link;
}


function generateModuli() {

  var moduli = [
  new Modulo("Regolamento Palestra","moduli/REGOLAMENTO.PALESTRA.CHIARAPILATES.pdf"),
  new Modulo("Informativa Privacy","moduli/Privacy.CHIARAPILATES.pdf"),
  new Modulo("Anagrafica","moduli/ANAGRAFICA.pdf"),
  new Modulo("Abbonamenti","moduli/ABBONAMENTO.PREZZI.pdf"),
  new Modulo("Autodichiarazione Covid-19","moduli/Autodichiarazione.Covid.ChiaraP.pdf"),
  ];

  var html = ""
  var template = document.getElementById("template-moduli").innerHTML;


  for(let i = 0; i < moduli.length; i++) {

    let modulo = moduli[i];

    html += template
    .replace(/{{title}}/g, modulo.title)
    .replace(/{{link}}/g, modulo.link);
  }

  document.getElementById("listamoduli").innerHTML = html;
}



// ------------------------------------------------------------------------------
// GALLERIA
// ------------------------------------------------------------------------------

var galleria = [
"galleria1.jpg",
"galleria2.jpg",
"galleria3.jpeg",
"galleria4.jpeg",
];

function generateGalleria() {
  var templateGalleria = document.getElementById("template-galleria").innerHTML;
  var htmlGalleria = "";


  for(let i = 0; i < galleria.length; i++) {

    var foto = galleria[i];

    htmlGalleria += templateGalleria
    .replace(/{{cardType}}/g, "card2")
    .replace(/{{photoUrl}}/g, foto);
  }

  document.getElementById("generated-galleria").innerHTML = htmlGalleria;
}


// ------------------------------------------------------------------------------
// ISTRUTTORI
// ------------------------------------------------------------------------------

function generateSezioni() {

  var templateSezione = document.getElementById("template-sezione").innerHTML;

  var htmlSezione = ""
  for(let i = 0; i < instructors.length; i++) {
    let instructor = instructors[i];

    htmlSezione += templateSezione
    .replace(/{{bcolor}}/g, instructor.bcolor)
    .replace(/{{titolo}}/g, instructor.disciplina)
    .replace(/{{istruttore}}/g, generateIstruttore(instructor))
    .replace(/{{attivita}}/g, generateAttivita(instructor.activities));

    document.getElementById("generated-istruttori").innerHTML = htmlSezione;
  }
}

function generateIstruttore(instructor) {
  var htmlIstruttore = "";
  var templateIstruttore = document.getElementById("template-istruttore").innerHTML;

  var whatsapp = ""
  if (instructor.whatsapp != "" && instructor.whatsapp != undefined) {
    whatsapp = '<a target="_blank" class="pwhatsapp fab fa-2x fa-whatsapp" href="https://wa.me/' + instructor.whatsapp + ' "></a>'
  }

  var instagram = ""
  if (instructor.instagram != "" && instructor.instagram != undefined) {
    instagram = '<a target="_blank" class="pinstagram fab fa-2x fa-instagram" href="https://instagram.com/' + instructor.instagram + ' "></a>'
  }

  var mail = ""
  if (instructor.mail != "" && instructor.mail != undefined) {
    mail = '<a target="_blank" class="pmail far fa-2x fa-envelope" href="mailto:' + instructor.mail + '"></a>'
  }


  var cardType = "card"
//   if (instructor == chiara) {
//     cardType = "card"
//   }

  // Rimpiazza I dati degli istruttori
  htmlIstruttore += templateIstruttore
  .replace(/{{name}}/g, instructor.name)
  .replace(/{{info}}/g, instructor.info)
  .replace(/{{photoUrl}}/g, instructor.photoUrl)
  .replace(/{{mail}}/g, mail)
  .replace(/{{whatsapp}}/g, whatsapp)
  .replace(/{{instagram}}/g, instagram)
  .replace(/{{cardType}}/g, cardType)

  return htmlIstruttore

}

function generateAttivita(activities) {
  var htmlAttivita = ""
  var templateAttivita = document.getElementById("template-attivita").innerHTML;


  for(let j = 0; j < activities.length; j++) {

    // Per ogni attivita' creiamo una carta
    let activity = activities[j];


    var cardType = "card2"
    // var indice = j + 1
    // // In caso di card che finisce dispari, passa a singola card
    // if (indice == activities.length && indice%2 !=0 ) {
    //   cardType = "card"
    // }


    htmlAttivita += templateAttivita
    .replace(/{{title}}/g, activity.title)
    .replace(/{{description}}/g, activity.description)
    .replace(/{{cardType}}/g, cardType);
  }

  return htmlAttivita
}


generateGalleria()
generateSezioni()
generateModuli()