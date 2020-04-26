// ------------------------------------------------------------------------------
function Activity(title, description) {
  this.title = title;
  this.description = description;
}

function Instructor(photoUrl, name, info, activitiesTitle, activities) {
  this.photoUrl = photoUrl;
  this.name = name;
  this.info = info;
  this.activitiesTitle = activitiesTitle;
  this.activities = activities;
}
// ------------------------------------------------------------------------------
var parto = new Activity("ProMuoviamo il parto",
  "Il percorso è dedicato alle mamme in gravidanza. Attraverso il movimento ci prenderemo cura del corpo, con attenzione ai suoi bisogni, sperimentando tecniche e posture che potranno essere utili durante la gestazione, il travaglio e il parto.");

var muoviamoci = new Activity("Muoviamoci insieme",
  "Il corso è dedicato a mamme e neonati nel dopo nascita. Attraverso movimenti mirati e specifici andremo a prenderci cura del corpo materno, facendo particolare attenzione alla salute del perineo, della parete addominale e della colonna vertebrale.");

var anna = new Instructor("anna.jpeg",
  "Anna Tirone",
  "Laureata in Ostetricia presso l’università degli Studi di Torino. Attualmente lavora come libera professionista, offrendo servizi per l’area materno infantile e per la salute delle donne in generale.",
  "Anna Tirone",
  [parto, muoviamoci]);
// ------------------------------------------------------------------------------





// ------------------------------------------------------------------------------
var instructors = [
  anna
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
  console.log("-----");
  console.log(instructor);


  instructorsListHtml += activityTemplateHtml.replace(/{{name}}/g, instructor.name).
  replace(/{{description}}/g, instructor.description)

  let activities = instructor.activities;
  for(let j = 0; j < activities.length; j++) {

    if (j == 0) {
      activityListHtml += activityTitleTemplateHtml.replace(/{{activitiesTitle}}/g, instructor.activitiesTitle);
    }


    let activity = activities[j];
    console.log("-----");
    console.log(activity);
    activityListHtml += activityTemplateHtml.replace(/{{title}}/g, activity.title)
    .replace(/{{description}}/g, activity.description);
  }
}


// Replace the HTML of #list with final HTML
document.getElementById("attivita-list").innerHTML = activityListHtml;
document.getElementById("istruttori-list").innerHTML = instructorsListHtml;
