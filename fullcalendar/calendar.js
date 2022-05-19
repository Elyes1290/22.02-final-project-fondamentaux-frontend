document.addEventListener('DOMContentLoaded', async function gettournoi() {


    let calendarEl = document.getElementById('calendar');

    let eventsForCalendar = [];
    //obtenir les ino depuis l'api
    let eventsList = await getEvents()
    //boucler à travers la liste d evenement pour inserer les elements dans le calendrier
    // console.log(eventsList)
    async function getBeers() {
      try {
        for (const element of eventsList) { 
            let objectToPush = {
                id: element.id,
                title: element.name,
                description: element.descirption,
                allDay: false,
                start: element.date_from, 
                end: element.date_to
            }
            eventsForCalendar.push(objectToPush)
            calendarEl.innerHTML += `<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">${element.name}</button>
            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    ${element.name}
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>`;
          }
        } catch (error) {
          console.log(error);
        };
    
          
      }
      await getBeers();
    
  
    console.log(eventsForCalendar)
  
    let calendar = new FullCalendar.Calendar(calendarEl, {
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
        console.log(data)
    } catch (e) {
        console.log(e)
    }
  }