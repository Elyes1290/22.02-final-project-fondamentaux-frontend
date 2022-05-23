// ################## Début Calendar ####################################

document.addEventListener('DOMContentLoaded', async function gettournoi() {

// ###################### Variables #####################################
  let calendarEl = document.getElementById('calendar');
  let namecal = document.getElementById("name")
  let datefromcal = document.getElementById("datefrom")
  let datetocal = document.getElementById("dateto")
  let descriptionModal = document.getElementById('description')
  // let status = document.getElementById('status')
  let eventsForCalendar = [];
  

  // ##################### Obtenir les infos depuis l'api #######################
  let eventsList = await getEvents()


  // ############ Tableau des éléments qui vont être dans la modale ############  
  for (const element of eventsList) {
    let objectToPush = {
      id: element.id,
      title: element.name,
      start: element.date_from,
      end: element.date_to,
      display: element.description + " \n " + element.status,
    } 
  // ################ Pousse tous les éléments dans un tableau ################
    eventsForCalendar.push(objectToPush)
    console.log(objectToPush)
    console.log(eventsForCalendar)
  }
  // ############### Créer un nouvel objet de l'instance FullCalendar #########
  const calendar = new FullCalendar.Calendar(calendarEl, {

  // ############### Boutons du Header ###################################### 
    headerToolbar: {
      
      left: "dayGridMonth, dayGridWeek, timeGrid, list", // will normally be on the left. if RTL, will be on the right
      center: 'title',
      right: 'today prev,next', // will normally be on the right. if RTL, will be on the left

      // #########################Traduction des boutons ne fonctionne pas #################
      // today:    "Aujourd'hui",
      // month:    'Mois',
      // week:     'Semaine',
      // day:      'Jour',
      // list:     'Liste',
      // ################################################################################
    },

      // ################# Evénements du tableau #############################
    events: eventsForCalendar,
    dateClick: function (arg) {
      console.log(arg.date.toString()); // use local methods on the native Date Object
    },

      // ############# Réaction lors de l'événement "clique" + Variables de début de "task" ######################### 
    eventClick: function (info) {
      const dateDebut = new Date(info.event.start);
      const dateFin = new Date(info.event.end);


// ################## Display the modal and set the values to the event values. ####################################
      $('.modal').modal('show');
      namecal.innerText = info.event.title
      descriptionModal.innerText = info.event.display
      // status.innerText = info.event.display
      datefromcal.innerText = "Commence le : " + new Intl.DateTimeFormat('fr-FR', { dateStyle: 'full', timeStyle: 'short' }).format(dateDebut)
      datetocal.innerText = "Se termine le : " + new Intl.DateTimeFormat('fr-FR', { dateStyle: 'full', timeStyle: 'short' }).format(dateFin)
    },
    editable: true,

  });

  calendar.render();
});


// ################## Get Axios et attente de promesse #################################
async function getEvents() {
  try {
    let response = await axios.get("https://backend.yonathan.ch/api/tasks/list")
    if (response.status !== 200) throw new Error('failed')
    return response.data
  } catch (e) {
    console.log(e)
  }
}

