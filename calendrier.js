 document.addEventListener('DOMContentLoaded', function() {
        var calendarEl = document.getElementById('calendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {
          initialView: 'dayGridMonth',
          headerToolbar: {
                start: 'dayGridDay timeGridWeek dayGridMonth', // will normally be on the left. if RTL, will be on the right
                center: "title",
                end: 'list today prev,next' // will normally be on the right. if RTL, will be on the left
              }
          
        });
        calendar.render();
      });

      
      // async function getDate () {
      //   try {
      //     const resultat = await axios.get('https://api.punkapi.com/v2/beers/');
      //     return resultat;
      //   }
      //   catch (error) {
      //     console.log(error);
      //   }
      // }

      // const date = await getDate();
