import { Service, loading, error } from "./service/Service.js";

//instance de Service
const service = new Service();

//requete a json server
let response = await service.serviceGetUsers();
console.log(response)

let response2 = await service.serviceGetTasks();
console.log(response2)

//display info de erreur ou loading.
const info = document.getElementById("info");

//querySelector pour toutes les liste
let tables = document.querySelectorAll(".odin");
let listed = document.querySelectorAll(".thor");

//querySelector pour les liste inicial de user et tache.
let listTasks = document.querySelector("#listTasks");
let listUsers = document.querySelector("#listUsers");

//creation de chaque user.
function createList(element) {

    let li = document.createElement("div");
    li.textContent = element.firstname;
    li.id = element.id;

    listUsers.appendChild(li);

    return listUsers;
}

//creation de card pour chaque tache.
function createTasks(element) {

    let tasks0 = document.createElement("div");
    tasks0.className  = "card";

    let header0 = document.createElement("div");
    header0.className = "card-header";
    let headerText = document.createElement("h5");
    headerText.textContent = element.name;
    
    let text0 = document.createElement("div");
    text0.className = "card-text drag p-3";
    text0.style = "min-height: 3rem";

    header0.appendChild(headerText);
    tasks0.appendChild(header0);
    tasks0.appendChild(text0);
    listTasks.appendChild(tasks0);

    return listTasks;
}

// si loading est false et il a pas d'erreur, alors display des donnees
if (loading === false && error === "") {
    for (let index = 0; index < response.length; index++) {
        createList(response[index]);
    }
    
    for (let index = 0; index < response2.length; index++) {
        createTasks(response2[index]);
    }
}

//selectionne toute les card cree.
let divDrag = document.querySelectorAll(".drag");

//utilization de sortable pour tous avec la classe thor
for (let i = 0; i < listed.length; i++) {
	new Sortable(listed[i], {
		group: 'odin',
		animation: 150,
		fallbackOnBody: true,
		swapThreshold: 0.65,
	});
}

//utilization de sortable pour tous avec la classe odin
for (let y = 0; y < tables.length; y++) {
	new Sortable(tables[y], {
		group: 'odin',
		animation: 150,
		fallbackOnBody: true,
		swapThreshold: 0.65
	});
}

//utilization de sortable pour toutes les card puis pouvoir acceder a l'interieur des cards.
for (let index = 0; index < divDrag.length; index++) {
    
    new Sortable(divDrag[index], {
        group: 'odin',
        animation: 150,
        fallbackOnBody: true,
        swapThreshold: 0.65
    });
}
