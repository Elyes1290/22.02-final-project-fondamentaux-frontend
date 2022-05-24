
document.addEventListener('DOMContentLoaded', async     function gettournoi() {

    let initialLocaleCode = 'en';
    let localeSelectorEl = document.getElementById('locale-selector');
    let calendarEl = document.getElementById('calendar');

    let namecal = document.getElementById("name")
    let description = document.getElementById("description")
    let datefromcal = document.getElementById("datefrom")
    let datetocal=document.getElementById("dateto")
    let eventsForCalendar = [];
    //obtenir les ino depuis l'api
    let eventsList = await getEvents()
    //boucler à travers la liste d evenement pour inserer les elements dans le calendrier
    // console.log(eventsList)  
    for (const element of eventsList) { 
        let objectToPush = {
            id: element.id,
            title: element.name,
            allDay: false,
            start: element.date_from, 
            end: element.date_to,
            display: element.description +"\n"+ element.status,
        }
        // namecal.innerHTML = objectToPush.name;
        eventsForCalendar.push(objectToPush)

    }
    var calendar = new FullCalendar.Calendar(calendarEl, {
        locale: initialLocaleCode,
        buttonIcons: true, // show the prev/next text
        weekNumbers: false,
        navLinks: true, // can click day/week names to navigate views
        editable: true,
        dayMaxEvents: true, // allow "more" link when too many events
        events: 'https://fullcalendar.io/api/demo-feeds/events.json?overload-day',
        headerToolbar:  {
            left: "dayGridMonth, dayGridWeek, timeGrid, list,", // will normally be on the left. if RTL, will be on the right
            center: 'title',
            right: 'today prev,next', // will normally be on the right. if RTL, will be on the left
        },
        events: eventsForCalendar,
        dateClick: function(arg) {
          console.log(arg.date.toString()); // use local methods on the native Date Object
          // will output something like 'Sat Sep 01 2018 00:00:00 GMT-XX:XX (Eastern Daylight Time)'
        },
        eventClick: function(info) {
            // Display the modal and set the values to the event values.
            console.log("Event", info.event.id)
            const eventFound = eventsList.find((e) => e.id === info.event.id)
            const eventdesc = eventsList.find((e) => e.id === info.event.id)
            // eventFoundconsole.log("Element", eventFound)
            $('.modal').modal('show');
            namecal.innerText = info.event.title
            description.innerText = info.event.display
            datefromcal.innerText = info.event.start
            datetocal.innerText = info.event.end
        },
            editable: true,
            eventLimit: true // allow "more" link when too many events
    });
    calendar.render();  

    calendar.getAvailableLocaleCodes().forEach(function(localeCode) {
        var optionEl = document.createElement('option');
        optionEl.value = localeCode;
        optionEl.selected = localeCode == initialLocaleCode;
        optionEl.innerText = localeCode;
        localeSelectorEl.appendChild(optionEl);
    });  
    localeSelectorEl.addEventListener('change', function() {
        if (this.value) {
          calendar.setOption('locale', this.value);
        }
    
    });
});
  
  // Get Evenment
  async function getEvents() {
    try {
        let response = await axios.get("https://backend.yonathan.ch/api/tasks/list")
        if (response.status !== 200) throw new Error('failed')
        return response.data
        console.log(data)
    } catch (e) {
        console.log(e)
    }
  }

  
  
