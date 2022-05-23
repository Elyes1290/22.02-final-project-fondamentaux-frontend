

document.addEventListener('DOMContentLoaded', async function gettournoi() {


  let calendarEl = document.getElementById('calendar');
  let namecal = document.getElementById("name")
  let datefromcal = document.getElementById("datefrom")
  let datetocal = document.getElementById("dateto")
  let descriptionModal = document.getElementById('description')
  let status = document.getElementById('status')
  let eventsForCalendar = [];
  
 

  //obtenir les infos depuis l'api
  let eventsList = await getEvents()
  //boucler à travers la liste d evenement pour inserer les elements dans le calendrier

  for (const element of eventsList) {
    let objectToPush = {
      id: element.id,
      title: element.name,
      start: element.date_from,
      end: element.date_to,
      display: element.description + " \n " + element.status,
      // display: element.status
    } 

    eventsForCalendar.push(objectToPush)
  }

  const calendar = new FullCalendar.Calendar(calendarEl, {
    
    headerToolbar: {
      
      left: "dayGridMonth, dayGridWeek, timeGrid, list", // will normally be on the left. if RTL, will be on the right
      center: 'title',
      right: 'today prev,next', // will normally be on the right. if RTL, will be on the left
      today:    "Aujourd'hui",
      month:    'Mois',
      week:     'Semaine',
      day:      'Jour',
      list:     'Liste',
    },

    events: eventsForCalendar,
    dateClick: function (arg) {
      console.log(arg.date.toString()); // use local methods on the native Date Object
    },

    eventClick: function (info) {
      const dateDebut = new Date(info.event.start);
      const dateFin = new Date(info.event.end);

// Display the modal and set the values to the event values.
      $('.modal').modal('show');
      namecal.innerText = info.event.title
      descriptionModal.innerText = info.event.display
      // status.innerText = info.event.display
      datefromcal.innerText = "Commence le : " + new Intl.DateTimeFormat('fr-FR', { dateStyle: 'full', timeStyle: 'short' }).format(dateDebut)
      datetocal.innerText = "Se termine le : " + new Intl.DateTimeFormat('fr-FR', { dateStyle: 'full', timeStyle: 'short' }).format(dateFin)
      console.log(info.event.eventDisplay)
    },
    editable: true,

  });

  calendar.render();
});



// Get Evenment
async function getEvents() {
  try {
    let response = await axios.get("https://backend.yonathan.ch/api/tasks/list")
    if (response.status !== 200) throw new Error('failed')
    return response.data
  } catch (e) {
    console.log(e)
  }
}

