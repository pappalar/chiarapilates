// ------------------------------------------------------------------------------
function Activity(title, description) {
  this.title = title;
  this.description = description;
}

function Instructor(name, info, photoUrl, activitiesTitle, activities) {
  this.name = name;
  this.info = info;
  this.photoUrl = photoUrl;
  this.activitiesTitle = activitiesTitle;
  this.activities = activities;
}
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
  "Anna Tirone",
  [parto, muoviamoci]
);
// ------------------------------------------------------------------------------
var naturopatia = new Activity(
  "Naturopatia",
  "Il termine naturopatia deriva dal latino “natura” e dal greco “pathos” e significa “sentire secondo natura”, “empatia con la natura”. La naturopatia  viene considerata come un’applicazione di quelli che sono i principi curativi della natura, al fine di riproporre o mantenere l’equilibrio energetico organico attraverso pratiche e utilizzo di rimedi naturali."
  );


var bach = new Activity(
  "Fiori di Bach",
  "I Fiori di Bach sono 38 rimedi floreali individuati dal Dr. Edward Bach, tra il 1928 e il 1935, in Inghilterra.  I fiori intervengono sia a livello fisico sia a livello psico-emotivo agendo sul piano energetico-vibrazionale, ripristinando una condizione di armonia mentale, grazie alla quale, le naturali difese dell’organismo possono svolgere più efficacemente il proprio compito."
  );

var reiki = new Activity(
  "Reiki",
  "Promuovendo l’autoguarigione, il Reiki è una pratica energetica utilizzata, in forma integrativa, per il trattamento di malanni fisici, emozionali e mentali.  Durante un trattamento reiki il corpo viene educato o ri-educato ad attivare il suo naturale processo di guarigione attraverso il riequilibrio dei centri energetici nevralgici del corpo: i Chakra."
  );

var arianna = new Instructor(
  "Arianna Nicola",
  "Naturopata diplomata all’accademia di Naturopatia Anea ad indirizzo bio-energetico ed ambientale. Operatrice abilitata in Osteopatia Bio-Fluidica. Diplomata al liceo scientifico ad indirizzo Socio-Psico-Pedagogico.",
  "arianna.jpeg",
  "Arianna Nicola",
  [naturopatia, bach, reiki]
);



// ------------------------------------------------------------------------------
var instructors = [
  anna,
  arianna
];
// ------------------------------------------------------------------------------

// Cache of the template
var activityTemplate = document.getElementById("attivita-template");
var activityTitleTemplate = document.getElementById("attivita-title-template");
var instructorsTemplate = document.getElementById("istruttori-template");


// Get the contents of the template
var activityTemplateHtml = activityTemplate.innerHTML;
var activityTitleTemplateHtml = activityTitleTemplate.innerHTML;
var instructorsTemplateHtml = instructorsTemplate.innerHTML;


// Final HTML variable as empty string
var activityListHtml = "";
var instructorsListHtml = "";

// Loop through dataObject, replace placeholder tags
// with actual data, and generate final HTML

for(let i = 0; i < instructors.length; i++) {
  let instructor = instructors[i];

  // Rimpiazza I dati degli istruttori
  instructorsListHtml += instructorsTemplateHtml
  .replace(/{{name}}/g, instructor.name)
  .replace(/{{info}}/g, instructor.info)


  activityListHtml += activityTitleTemplateHtml.replace(/{{activitiesTitle}}/g, instructor.activitiesTitle);
  activityListHtml += '<div class="flex">'




  // Attivita
  let activities = instructor.activities;
  for(let j = 0; j < activities.length; j++) {

    // Per ogni attivita' creiamo una carta
    let activity = activities[j];

    activityListHtml += activityTemplateHtml
    .replace(/{{title}}/g, activity.title)
    .replace(/{{description}}/g, activity.description);
  }
  activityListHtml += '</div>'

}


// Replace the HTML of #list with final HTML
document.getElementById("attivita-list").innerHTML = activityListHtml;
document.getElementById("istruttori-list").innerHTML = instructorsListHtml;
