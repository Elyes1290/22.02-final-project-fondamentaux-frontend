// ################## Début Calendrier #####################################################

document.addEventListener('DOMContentLoaded', async function getTasksList() {

  // Variables prenant les id dans l'html + création d'un tableau vide.
  let calendarEl = document.getElementById('calendar');
  let namecal = document.getElementById("name")
  let datefromcal = document.getElementById("datefrom")
  let datetocal = document.getElementById("dateto")
  let descriptionModal = document.getElementById('description')
  let status = document.getElementById('status')
  let eventsForCalendar = [];

  // Obtenir les infos depuis l'api.
  let eventsList = await getEvents()

  // Tableau des éléments json qui vont être dans la modale 
  for (const element of eventsList) {
    let objectToPush = {
      id: element.id,
      title: element.name,
      start: element.date_from,
      end: element.date_to,
      display: element.description + " \n " + element.status,
    }

    // Pousse les éléments json dans le tableau.
    eventsForCalendar.push(objectToPush)
  }

  // Créer un nouvel objet de l'instance FullCalendar.
  const calendar = new FullCalendar.Calendar(calendarEl, {

    // Boutons du Header.
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
    },

    // Jours du calendrier en francais.
    locale: 'fr',
    buttonIcons: true,
    dayMaxEvents: true, // Crée un lien ouvrant la liste des événements à partir d'un certain nombre.  

    // Traduction des bouttons.
    buttonText: {
      today: "Aujourd'hui",
      month: 'Mois',
      week: 'Semaine',
      day: 'Jour',
      list: 'Liste',
    },

    // Evénements du tableau.
    events: eventsForCalendar,

    // Réaction lors de l'événement "clique".
    eventClick: function (info) {
      
    // pointe dans le back-end par id pour avoir toutes les informations.
      const eventFound = eventsList.find((e) => e.id === info.event.id)
      const dateDebut = new Date(info.event.start);
      const dateFin = new Date(info.event.end);

      // Affiche la modale avec les valeurs des événements.
      $('.modal').modal('show');
      namecal.innerText = info.event.title
      descriptionModal.innerText = eventFound.description
      status.innerText = eventFound.status
      datefromcal.innerText = "Commence le : " + new Intl.DateTimeFormat('fr-FR', { dateStyle: 'full', timeStyle: 'short' }).format(dateDebut)
      datetocal.innerText = "Se termine le : " + new Intl.DateTimeFormat('fr-FR', { dateStyle: 'full', timeStyle: 'short' }).format(dateFin)
    },
  });

  calendar.render();

});

// Base de données de Yonathan(temporaire).
//https://backend.yonathan.ch/api/tasks/list

// Base de données finale.
//http://localhost:8181/api/tasks/list


// Requête Axios.
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
