  
document.addEventListener('DOMContentLoaded', async function () {

   
    let calendarEl = document.getElementById('calendar');
    let eventsForCalendar = [];
    console.log(eventsForCalendar)
    

    //obtenir les infos depuis l'api
    let eventsList = await getEventsList()
    //boucle à travers la liste d evenement pour inserer les elements dans le calendrier

    for (const element of eventsList) {
        console.log(element);
        let objectToPush = {
            id: element.id,
            name: element.name,         
            description: element.description,
            dateDebut : element.date_from,
            dateFin : element.date_to,
            status : element.status,
            allDay: false,
            start: element.date_from,
            end: element.date_to 
        }
        console.log(objectToPush);

        eventsForCalendar.push(objectToPush)
        console.log(eventsForCalendar);
    
    }
     
    let calendar = new FullCalendar.Calendar(calendarEl, {
        headerToolbar:  {

            left: "dayGridMonth, dayGridWeek, timeGrid, list", // will normally be on the left. if RTL, will be on the right
            center: 'title',
            right: 'today prev,next' // will normally be on the right. if RTL, will be on the left
          },
          events: eventsForCalendar,
          eventClick: function(calendar) {
            alert('Event: ' + calendar.event.calendarModal);
          }
        
        });
        calendar.render();
        
    });

    let modalDetail = document.getElementById('modalDetail');

modalDetail.addEventListener('show.bs.modal', function (event) {
  // console.log(beers)const exampleModal = document.getElementById('exampleModal')
  const button = event.relatedTarget
  // Extract info from data-bs-* attributes
  const recipient = button.getAttribute('id')
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  const item = beers.find(item => item.id === parseInt(recipient));

  // Update the modal's content.
  let description = document.getElementById("description");

  description.textContent = item.description;

  let nourriture = document.getElementById('nourriture');

  nourriture.innerHTML = item.food_pairing;
})


async function getEventById() {
    try {
        let response = await axios.get("https://backend.yonathan.ch/api/tasks/id")
        if (response === 200)
        return response.data
    } catch (error) {
        console.log(error)
    }
}


async function getEventsList() {
    try {
        let response = await axios.get("https://backend.yonathan.ch/api/tasks/list")
        if (response.status !== 200) throw new Error('failed')
        return response.data
    } catch (e) {
        console.log(e)
    }
}
// get team
async function getTeams() {
    try {
        let response = await axios.get("https://apitournoi.nait-web.com/api/equipe/list")
        if (response.status !== 200) throw new Error('failed')
        return response.data
    } catch (e) {
        console.log(e)
    }
}

//get player list
async function getPlayerList() {
  try {
      let response = await axios.get("https://apitournoi.nait-web.com/api/joueur/list")
      if (response.status !== 200) throw new Error('failed')
      return response.data
  } catch (e) {
      console.log(e)
  }
}
