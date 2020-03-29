// Object we’re working with
var dataObject = {
  0: {"titolo":"PILATES MATWORK",
  "descrizione":"Il Pilates Matwork è uno specifico programma di esercizi che viene svolto a corpo libero o con piccoli attrezzi su un tappetino. Va ad agire sui muscoli posturali, con l’obiettivo di favorire un maggiore bilanciamento del corpo e aumentare il supporto della muscolatura alla colonna vertebrale. Non viene tralasciato il lavoro globale sull’intero corpo, con particolare attenzione alla forza, elasticità e al rafforzamento  del CORE, o corsetto addominale."},

  1: {"titolo":"PILATES SU MACCHINARI REFORMER",
  "descrizione":"Il Reformer è un macchinario che prevede un repertorio di esercizi per tutto il corpo, tramite un attrezzo progettato appositamente per consentire un allenamento completo potenziando i muscoli di tutto il corpo e migliorando la tonicità muscolare, la flessibilità articolare e la postura."},

  2: {"titolo":"OSTEOPATIA BIO FLUIDICA",
  "descrizione":"Le manipolazioni attuate dall’Osteopatia Bio-Fluidica permettono, attraverso la palpazione della rete craniale e il rilevamento della pulsazione fluidica, di individuare il malfunzionamento energetico delle ossa, dei muscoli, degli organi e di rimettere in asse la catena cranio-colonna-bacino. Il riequilibrio del corpo avviene, inoltre, tramite la rimozione degli effetti collaterali, causati dagli stress emotivi, che si sono memorizzati nel fisico durante il corso della vita."},

  3: {"titolo":"NATUROPATIA",
  "descrizione":'Il termine naturopatia deriva dal latino "natura" e dal greco "pathos" e significa "sentire secondo natura", "empatia con la natura". La naturopatia  viene considerata come un’applicazione di quelli che sono i principi curativi della natura, al fine di riproporre o mantenere l’equilibrio energetico organico attraverso pratiche e utilizzo di rimedi naturali.'},

  4: {"titolo":"FIORI DI BACH",
  "descrizione":"I Fiori di Bach sono 38 rimedi floreali individuati dal Dr. Edward Bach, tra il 1928 e il 1935, in Inghilterra. I fiori intervengono sia a livello fisico sia a livello psico-emotivo agendo sul piano energetico-vibrazionale, ripristinando una condizione di armonia mentale, grazie alla quale, le naturali difese dell’organismo possono svolgere più efficacemente il proprio compito."},

    5: {"titolo":"REIKI",
    "descrizione":"Promuovendo l’autoguarigione, il Reiki è una pratica energetica utilizzata, in forma integrativa, per il trattamento di malanni fisici, emozionali e mentali. Durante un trattamento reiki il corpo viene educato o ri-educato ad attivare il suo naturale processo di guarigione attraverso il riequilibrio dei centri energetici nevralgici del corpo: i Chakra."},

    6: {"titolo":"titolo 5","descrizione":"descrizione 5"},

    7: {"titolo":"titolo 5","descrizione":"descrizione 5"},

    8: {"titolo":"titolo 5","descrizione":"descrizione 5"},

    9: {"titolo":"titolo 5","descrizione":"descrizione 5"},

    10: {"titolo":"titolo 5","descrizione":"descrizione 5"},

    11: {"titolo":"titolo 5","descrizione":"descrizione 5"},

    12: {"titolo":"titolo 5","descrizione":"descrizione 5"},

    13: {"titolo":"titolo 5","descrizione":"descrizione 5"},

    14: {"titolo":"titolo 5","descrizione":"descrizione 5"}

};

// Cache of the template
var template = document.getElementById("attivita-template");
// Get the contents of the template
var templateHtml = template.innerHTML;
// Final HTML variable as empty string
var listHtml = "";

// Loop through dataObject, replace placeholder tags
// with actual data, and generate final HTML
for (var key in dataObject) {
  listHtml += templateHtml.replace(/{{titolo}}/g, dataObject[key].titolo)
                          .replace(/{{descrizione}}/g, dataObject[key].descrizione);
}

// Replace the HTML of #list with final HTML
document.getElementById("attivita-list").innerHTML = listHtml;