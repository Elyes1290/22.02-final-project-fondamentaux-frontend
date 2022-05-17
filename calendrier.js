 document.addEventListener('DOMContentLoaded', function() {
        let calendarEl = document.getElementById('calendar');
        let calendar = new FullCalendar.Calendar(calendarEl, {
          initialView: 'dayGridMonth',
          headerToolbar: {
                start: 'dayGridDay timeGridWeek dayGridMonth', // will normally be on the left. if RTL, will be on the right
                center: "title",
                end: 'list today prev,next', // will normally be on the right. if RTL, will be on the left
                                    
              },
              events: eventsForCalendar
        });

        const calendarEvenement = await getEvenementsList();

        let calendarTab = [];
        console.log(calendarTab);

        for (evenements of getEvenementsList) {
          let dateEvenement = evenements.date;
          let objectToPush = {
            id: element.id,
            start: date,
            duration: element.heure_debut,
            title: element.nom,
            lieu : element.lieu,
            allDay: false,
            start: element.date+"T"+element.heure_debut, 
            end: element.date+"T"+element.heure_fin    
        }

        eventsForCalendar.push(objectToPush)
    }
    // afficher les equipes
    let teamEl = document.getElementById("team")
    let teamList = await getTeams()
    
    for(const team of teamList) {
        
    //     teamEl.innerHTML += 
       
    //       ` <div class="card  col" style="width: 18rem;height: 25rem;">
    //             <img src="${team.logo}" class="card-img-top"style="height: 18rem; alt="...">
    //         <div class="card-body">
    //             <h5 class="card-title">${team.nom}</h5>
    //             <p class="card-text">Entraineur: ${team.entraineur}</p>
    //         </div>`;

    // }
    
    calendar.render();
    //afficher les joueurs
    let joueurList = await getPlayerList()
    let ulEl = document.getElementById("ul-liste")
    
      for(const joueur of joueurList){
          console.log(joueur)
       ulEl.innerHTML += `<li>
       <p>${joueur.nom}</p>
       <p>Age: ${joueur.age}</p>
       <p>Pays: ${joueur.nationalité}</p>
       </li>`
      
      }
    

});


// Get Evenment
async function getEvenementsList() {
    try {
        let response = await axios.get("https://apitournoi.nait-web.com/api/tournoi/list")
        if (response.status !== 200) throw new Error('failed')
        return response.data
    } catch (e) {
        console.log(e)
    }
}
        }

        



        calendar.render();
        console.log(calendar.render)
      });

    
      