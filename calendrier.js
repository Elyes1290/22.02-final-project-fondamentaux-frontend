
document.addEventListener('DOMContentLoaded', async function () {

    let titreModal = document.getElementById('titre');
    let descriptionModal = document.getElementById('description');

    let calendarEl = document.getElementById('calendar');
    let eventsForCalendar = [];


    //obtenir les infos depuis l'api
    let eventsList = await getEventsList()
    //boucle à travers la liste d evenement pour inserer les elements dans le calendrier

    for (const element of eventsList) {
        let objectToPush = {
            id: element.id,
            name: element.name,
            description: element.description,
            dateDebut: element.date_from,
            dateFin: element.date_to,
            status: element.status,
            allDay: false,
            start: element.date_from,
            end: element.date_to
        }

        eventsForCalendar.push(objectToPush)

    }

    let calendar = new FullCalendar.Calendar(calendarEl, {
        headerToolbar: {

            left: "dayGridMonth, dayGridWeek, timeGrid, list", // will normally be on the left. if RTL, will be on the right
            center: 'title',
            right: 'today prev,next' // will normally be on the right. if RTL, will be on the left
        },
        
        events: eventsForCalendar,
        eventClick: function(event, element) {
            // Display the modal and set the values to the event values.
            $('.modal').modal('show');
            $('.modal').find('#title').val(event.title);
            $('.modal').find('#starts-at').val(event.start);
            $('.modal').find('#ends-at').val(event.end);

        },
        editable: true,
        eventLimit: true // allow "more" link when too many events

        

    });
    calendar.render();

});




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
