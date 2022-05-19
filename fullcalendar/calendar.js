
import { formatDate } from '@fullcalendar/core';

document.addEventListener('DOMContentLoaded', async function gettournoi() {


  let calendarEl = document.getElementById('calendar');
  let namecal = document.getElementById("name")
  let datefromcal = document.getElementById("datefrom")
  let datetocal = document.getElementById("dateto")
  let descriptionModal = document.getElementById('description')
  let eventsForCalendar = [];



    // ##################### Essai format date ################################



    let str = formatDate('2018-09-01', {
      month: 'long',
      year: 'numeric',
      day: 'long',
      day: 'numeric',
timeZoneName: 'short',
      timeZone: 'UTC',
      locale: 'fr',
      hour12: false,
    })

    console.log(str) // "1 de septiembre de 2018 0:00 UTC"

    // ################################################################################


  //obtenir les ino depuis l'api
  let eventsList = await getEvents()
  //boucler à travers la liste d evenement pour inserer les elements dans le calendrier
  // console.log(eventsList)

  for (const element of eventsList) {
    let objectToPush = {
      id: element.id,
      title: element.name,
      // allDay: false,
      start: element.date_from,
      end: element.date_to,
      display: element.description
    }
    // namecal.innerHTML = objectToPush.name;
    eventsForCalendar.push(objectToPush)
    console.log(eventsForCalendar)

  }
  console.log(calendarEl);
  var calendar = new FullCalendar.Calendar(calendarEl, {
    locale: 'fr',
    headerToolbar: {

      left: "dayGridMonth, dayGridWeek, timeGrid, list", // will normally be on the left. if RTL, will be on the right
      center: 'title',
      right: 'today prev,next', // will normally be on the right. if RTL, will be on the left

    },

    events: eventsForCalendar,
    dateClick: function (arg) {
      console.log(arg.date.toString()); // use local methods on the native Date Object
      // will output something like 'Sat Sep 01 2018 00:00:00 GMT-XX:XX (Eastern Daylight Time)'
    },

    eventClick: function (info) {
      // Display the modal and set the values to the event values.
      console.log("Event", info.event.id)
      const eventFound = eventsList.find((e) => e.id === info.event.id)
      // eventFoundconsole.log("Element", eventFound)


      $('.modal').modal('show');
      namecal.innerText = info.event.title
      descriptionModal.innerText = info.event.display
      datefromcal.innerText = info.event.start
      datetocal.innerText = info.event.end

    },
    editable: true,
    eventLimit: true // allow "more" link when too many events

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
