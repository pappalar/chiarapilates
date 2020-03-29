// Object we’re working with
var dataObject = {
  0: {"nome":"Trione Chiara",
  "descrizione":"Laureata in Scienze Motorie, con specializzazione in Scienze dell’Educazione Motoria Adattata.\nIstruttrice nazionale di Fisiopilates.\nChinesiologa dal 2013."},
  1: {"nome":"nome 2","descrizione":"descrizione 2"},
  2: {"nome":"nome 3","descrizione":"descrizione 3"},
  3: {"nome":"nome 4","descrizione":"descrizione 4"},
  4: {"nome":"nome 5","descrizione":"descrizione 5"}

};

// Cache of the template
var template = document.getElementById("istruttori-template");
// Get the contents of the template
var templateHtml = template.innerHTML;
// Final HTML variable as empty string
var listHtml = "";

// Loop through dataObject, replace placeholder tags
// with actual data, and generate final HTML
for (var key in dataObject) {
  listHtml += templateHtml.replace(/{{nome}}/g, dataObject[key].titolo)
                          .replace(/{{descrizione}}/g, dataObject[key].descrizione);
}

// Replace the HTML of #list with final HTML
document.getElementById("istruttori-list").innerHTML = listHtml;