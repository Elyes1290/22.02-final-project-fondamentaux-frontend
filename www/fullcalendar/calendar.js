// ################## Début Calendrier #####################################################

document.addEventListener('DOMContentLoaded', async function getTasksList() {

  // Variables
  let calendarEl = document.getElementById('calendar');
  let namecal = document.getElementById("name")
  let datefromcal = document.getElementById("datefrom")
  let datetocal = document.getElementById("dateto")
  let descriptionModal = document.getElementById('description')
  let eventsForCalendar = [];

  // Obtenir les infos depuis l'api
  let eventsList = await getEvents()

  // Tableau des éléments qui vont être dans la modale 
  for (const element of eventsList) {
    let objectToPush = {
      id: element.id,
      title: element.name,
      start: element.date_from,
      end: element.date_to,
      display: element.description + " \n " + element.status,
    }

    // Pousse les éléments json dans le tableau
    eventsForCalendar.push(objectToPush)
  }

  // Créer un nouvel objet de l'instance FullCalendar
  const calendar = new FullCalendar.Calendar(calendarEl, {

    // Boutons du Header 
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
    },

    // Jours du calendrier en francais
    locale: 'fr',
    buttonIcons: true,
    dayMaxEvents: true, // Crée un lien ouvrant la liste des évéenements à partir d'un certain nombre.  

    // Traduction des bouttons
    buttonText: {
      today: "Aujourd'hui",
      month: 'Mois',
      week: 'Semaine',
      day: 'Jour',
      list: 'Liste',
    },

    // Evénements du tableau
    events: eventsForCalendar,

    // Réaction lors de l'événement "clique" + Variables de début de "task" 
    eventClick: function (info) {
      const dateDebut = new Date(info.event.start);
      const dateFin = new Date(info.event.end);

      // Display the modal and set the values to the event values.
      $('.modal').modal('show');
      namecal.innerText = info.event.title
      descriptionModal.innerText = info.event.display
      datefromcal.innerText = "Commence le : " + new Intl.DateTimeFormat('fr-FR', { dateStyle: 'full', timeStyle: 'short' }).format(dateDebut)
      datetocal.innerText = "Se termine le : " + new Intl.DateTimeFormat('fr-FR', { dateStyle: 'full', timeStyle: 'short' }).format(dateFin)
    },
  });

  calendar.render();

});
//https://backend.yonathan.ch/api/tasks/list
//http://localhost:8181/api/tasks/list
// Get Axios et attente de promesse
async function getEvents() {
  try {
    let response = await axios.get("https://backend.yonathan.ch/api/tasks/list")
    if (response.status !== 200) throw new Error('failed')
    return response.data
  } catch (e) {
    console.log(e)
  }
}

// ################## Fin Calendrier #####################################################
