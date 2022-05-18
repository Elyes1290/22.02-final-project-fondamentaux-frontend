document.addEventListener('DOMContentLoaded', async function gettournoi() {


    let calendarEl = document.getElementById('calendar');
    // let nomMonEvenement = ""
    // let datemonEvenement = ""
    // let heureMonEvenement = ""
    let eventsForCalendar = [];
  
    //obtenir les ino depuis l'api
    let eventsList = await getEvents()
    //boucler à travers la liste d evenement pour inserer les elements dans le calendrier
    // console.log(eventsList)
  
    for (const element of eventsList) { 
        let objectToPush = {
            id: element.id,
            name: element.name,
            descirption: element.descirption,
            allDay: false,
            start: element.date_from, 
            end: element.date_to
        }
  
        eventsForCalendar.push(objectToPush)
    }
  
    console.log(eventsForCalendar)
  
    var calendar = new FullCalendar.Calendar(calendarEl, {
        locale: 'fr',
        headerToolbar:  {
  
            left: "dayGridMonth, dayGridWeek, timeGrid, list", // will normally be on the left. if RTL, will be on the right
            center: 'title',
            right: 'today prev,next', // will normally be on the right. if RTL, will be on the left
  
          },
        events: eventsForCalendar,
        dateClick: function(arg) {
          console.log(arg.date.toString()); // use local methods on the native Date Object
          // will output something like 'Sat Sep 01 2018 00:00:00 GMT-XX:XX (Eastern Daylight Time)'
        },
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

  
  
