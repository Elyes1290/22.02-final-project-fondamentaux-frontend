import { Service } from "./service/Service.js";

const ul = document.getElementById("foo");
const usersUl = document.getElementById("users-list");
const tachesUl = document.getElementById("taches-list");
let newTasks = [];

// ajouter une colonne
const inputColumn = document.getElementById("input-column");
const ajouterColumn = document.getElementById("ajouter-column");

// ajouter un utilisateur
const ajouterUser = document.getElementById("ajouter-user");
const inputUsers = document.getElementById("input-users");

//input modal
let p = document.querySelectorAll(".thor");

// les listes nécessaire au début du chargement de la page
Sortable.create(foo, {
  group: "foo",
  animation: 100,
  fallbackOnBody: true,
  ghostClass: "ghost",
  swapThreshold: 1,
});
// Sortable.create(foo, {
//   group: "foo",
//   animation: 100,
//   fallbackOnBody: true,
//   ghostClass: "ghost",
//   swapThreshold: 1,
// });
// Sortable.create(foo, {
//   group: "foo",
//   animation: 100,
//   fallbackOnBody: true,
//   ghostClass: "ghost",
//   swapThreshold: 1,
// });
Sortable.create(usersUl, {
  group: { name: "foo", pull: "clone", put: false },
  animation: 100,
  fallbackOnBody: true,
  swapThreshold: 1,
});
Sortable.create(tachesUl, {
  group: "foo",
  animation: 100,
  fallbackOnBody: true,
  swapThreshold: 1,
  ghostClass: "ghost",
});

const drag = document.querySelectorAll(".drag");
for (let item of drag) {
  Sortable.create(item, {
    group: "foo",
    animation: 150,
    fallbackOnBody: true,
    ghostClass: "ghost",
    swapThreshold: 1,
  });
}

/// simulation des éléments de retour de la base données
let users = await Service.getUsers();
console.log(users);
let taches = await Service.getTasks();
console.log(taches);
let columns = await Service.getColumns();
console.log(columns);

// les options permettant de créee des listes
let containers = null;
let sortableOption = {
  group: "foo",
  animation: 100,
  fallbackOnBody: true,
  ghostClass: "ghost",
  swapThreshold: 1,
  filter: ".btn",
};

function createColumns(column) {
  let div1 = document.createElement("div");
  div1.className = "card col bg-opacity-25 shadow-lg  bg-" + column.color;

  let div2 = document.createElement("div");
  div2.className = "text-center fw-bold card-header mb-2";
  div2.textContent = column.value == undefined ? column.name : column.value;

  let div3 = document.createElement("div");
  div3.className = "card-text text-center drag minH";

  div1.appendChild(div2);
  div1.appendChild(div3);
  ul.appendChild(div1);

  return ul;
}

///Afficher les colonnes provenant futurement les éléments de la base de données
for (const column of columns) {
  createColumns(column);
}

ajouterColumn.addEventListener("click", function () {
  createColumns(inputColumn);
  inputColumn.value = "";
});

function createUsers(user) {
  let newDiv = document.createElement("div");
  newDiv.classList.add("row", "list-group-item");
  newDiv.textContent = user.value == undefined ? user.firstname : user.value;

  usersUl.appendChild(newDiv);
}

///Afficher les utilisateurs provenant futurement les éléments de la base de données
for (const user of users) {
  createUsers(user);
}

ajouterUser.addEventListener("click", function () {
  createUsers(inputUsers);
  inputUsers.value = "";
});

///Afficher les taches provenant futurement les éléments de la base de données
function createTache(tache) {
  let newDiv = document.createElement("div");
  newDiv.classList.add("row", "list-group-item", "container-item");

  let childButton = document.createElement("button");
  childButton.value = tache.id;
  childButton.id = "modal";
  childButton.className = "btn btn-primary";
  childButton.setAttribute("type", "button");
  childButton.setAttribute("data-bs-toggle", "modal");
  childButton.setAttribute("data-bs-target", "#exampleModal");

  let newContent = document.createElement("div");
  let btnContent = document.createElement("Discription");

  newContent.textContent = tache.name;
  childButton.appendChild(btnContent);
  newDiv.appendChild(newContent);
  newDiv.appendChild(childButton);
  tachesUl.appendChild(newDiv);
}

for (const tache of taches) {
  createTache(tache);
}

//ajouter une tache
const addTache = document.getElementById("ajouter-tache");

function randomNum(min, max) {
  let j = Math.floor(Math.random() * (max - min + 1) + min);
}
addTache.addEventListener("click", async function () {
  //const inputTache = document.getElementById("input-tache");
  const dataTask = {
    id: randomNum(0, 999),
    name: document.getElementById("input-tache").value,
    description: "djskdéfjskfjsdkéfsddsdsdsdsdsd",
    date_from: "17:00",
    date_to: "18:00",
    status: "open",
  };

  newTasks.push(dataTask);

  await Service.postTask(dataTask);
  createTache(dataTask);

  document.getElementById("input-tache").value = "";
});

const Modal = document.getElementById("exampleModal");
Modal.addEventListener("show.bs.modal", (event) => {
  if (document.querySelector("#buttonSave")) {
    document.querySelector("#buttonSave").remove();
  }

  const button = event.relatedTarget;

  const recipient = button.value;
  let item;

  if (taches.find((item) => item.id == recipient) !== undefined) {
    item = taches.find((item) => item.id == recipient);
  } else {
    item = newTasks.find((item) => item.id == recipient);
  }

  const modalTitle = exampleModal.querySelector(".modal-title");

  modalTitle.textContent = item.name;

  const footerModal = Modal.querySelector(".modal-footer");

  const buttonSave = document.createElement("button");
  buttonSave.setAttribute("type", "button");
  buttonSave.id = "buttonSave";
  buttonSave.value = item.id;
  buttonSave.className = "btn btn-success";
  buttonSave.setAttribute("data-bs-dismiss", "modal");
  buttonSave.textContent = "Save";

  buttonSave.addEventListener("click", (event) => {
    event.preventDefault();
    saveChanges(event.target.value);
  });

  footerModal.appendChild(buttonSave);

  generateTasks(item);
});

async function saveChanges(value) {
  const update = {
    name: p[0].value,
    description: p[1].value,
    date_from: p[2].value,
    date_to: p[3].value,
    status: p[4].value,
  };

  await Service.updateTask(value, update);
}

// Donnés dans modal Sam -------------------------------------------------------------------------------------------------

function generateTasks(item) {
  //Add innerHTML depending on index

  p[0].setAttribute("placeholder", item.name);
  p[1].setAttribute("placeholder", item.description);
  p[2].setAttribute("placeholder", item.date_from);
  p[3].setAttribute("placeholder", item.date_to);
  p[4].setAttribute("placeholder", item.status);
}

let taskModalEl = document.getElementById("taskModal");
taskModalEl.addEventListener("show.bs.modal", generateTasks);

// -------------------------------------------------------------------------------------------------------------------

// creation de sortable dans les columns
containers = document.querySelectorAll(".container-item");
for (var i = 0; i < containers.length; i++) {
  new Sortable(containers[i], sortableOption);
}
