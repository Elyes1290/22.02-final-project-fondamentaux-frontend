import { Service, loading, error } from "./service/Service.js";

const service = new Service();

let response = await service.serviceGetUsers();
console.log(response)

let response2 = await service.serviceGetTasks();
console.log(response2)

// const timeRegex = /^([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])(:|\.)\d{1,2}?$/; format 24H
// const onlyletters = /^[a-zA-Z]+$/g; only letters

const info = document.getElementById("info");

let tables = document.querySelectorAll(".odin");
let listed = document.querySelectorAll(".thor");

let listTasks = document.querySelector("#listTasks");
let listUsers = document.querySelector("#listUsers");

function createList(element) {

    let li = document.createElement("div");
    li.textContent = element.firstname;
    li.id = element.id;

    listUsers.appendChild(li);

    return listUsers;
}

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


if (loading === false && error === "") {
    for (let index = 0; index < response.length; index++) {
        createList(response[index]);
    }
    
    for (let index = 0; index < response2.length; index++) {
        createTasks(response2[index]);
    }
}

let divDrag = document.querySelectorAll(".drag");

for (let i = 0; i < listed.length; i++) {
	new Sortable(listed[i], {
		group: 'odin',
		animation: 150,
		fallbackOnBody: true,
		swapThreshold: 0.65,
	});
}

for (let y = 0; y < tables.length; y++) {
	new Sortable(tables[y], {
		group: 'odin',
		animation: 150,
		fallbackOnBody: true,
		swapThreshold: 0.65
	});
}

for (let index = 0; index < divDrag.length; index++) {
    
    new Sortable(divDrag[index], {
        group: 'odin',
        animation: 150,
        fallbackOnBody: true,
        swapThreshold: 0.65
    });
}
