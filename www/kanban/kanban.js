import { Service } from "./service/Service.js";

const ul = document.getElementById("foo");
const usersUl = document.getElementById("users-list");
const tachesUl = document.getElementById("taches-list");
let newTasks = [];

// ajouter un utilisateur
const ajouterUser = document.getElementById("ajouter-user");
const inputUsers = document.getElementById("input-users");

/// simulation des éléments de retour de la base données
let users = await Service.getUsers();
console.log(users);
let taches = await Service.getTasks();
console.log(taches);
let columns = await Service.getColumns();
console.log(columns);

function createColumns(column) {
  let div1 = document.createElement("div");
  div1.className = "card col bg-opacity-50 shadow-lg bg-" + column.color;

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

// ajouter une colonne
let newColumn = document.querySelectorAll(".newColumn");

const modalColumn = document.getElementById('colonneModal');
modalColumn.addEventListener("show.bs.modal", () => {

  if (document.querySelector("#buttonColumn")) {
    document.querySelector("#buttonColumn").remove();
  }
  
  const footerModal = modalColumn.querySelector('.colonneFooter');

  const buttonSave = document.createElement("button");
  buttonSave.setAttribute("type", "button");
  buttonSave.id = "buttonColumn";
  buttonSave.className = "btn btn-success";
  buttonSave.setAttribute("data-bs-dismiss", "modal");
  buttonSave.textContent = "Save";
  
  buttonSave.addEventListener("click", (event) => {
    event.preventDefault();
    saveColumn();
  });

  footerModal.appendChild(buttonSave);
})

async function saveColumn() {

  if (newColumn[0].value === "" && newColumn[1].value === "") {
    console.log("error");
  } else {
    
    let column = {
      name: newColumn[0].value,
      color: newColumn[1].value
    }

    createColumns(column);
    await Service.postColumn(column);
  }
}

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

  let div1 = document.createElement("div");
  div1.id = tache.id;
  div1.value = "tache";
  div1.className = "card";
  div1.style = "wi"

  let div2 = document.createElement("div");
  div2.className = "card-header fw-bold text-center";
  div2.textContent = tache.name;
  
  let cardBody = document.createElement("div");
  cardBody.className = "card-text drag";
  cardBody.style = "min-height: 5vh";

  let cardFooter = document.createElement("div");
  cardFooter.className = "card-footer";

  let childButton = document.createElement("button");
  childButton.textContent = "description";
  childButton.value = tache.id;
  childButton.id = "modal";
  childButton.className = "btn btn-primary";
  childButton.setAttribute("type", "button");
  childButton.setAttribute("data-bs-toggle", "modal");
  childButton.setAttribute("data-bs-target", "#exampleModal");

  div1.appendChild(div2);
  div1.appendChild(cardBody);
  cardFooter.appendChild(childButton)
  div1.appendChild(cardFooter);
  tachesUl.appendChild(div1);

  return tachesUl;
}

for (const tache of taches) {
  createTache(tache);
}

let updateTache = document.querySelectorAll('.updateTache');

const Modal = document.getElementById("exampleModal");
const modalTitle = Modal.querySelector('.modal-title');

Modal.addEventListener("show.bs.modal", (event) => {
  if (document.querySelector("#buttonSave")) {
    document.querySelector("#buttonSave").remove();
  }

  const button = event.relatedTarget;
  const recipient = button.value;

  if (recipient === "tache") {
    buttonModal();
  } else {
      updateTask(recipient);
  }
});

function updateTask(recipient) {

  let item;
  if (taches.find(item => item.id === parseInt(recipient)) !== undefined ) {
      item = taches.find(item => item.id === parseInt(recipient))
  } else {
      item = newTasks.find(item => item.id === parseInt(recipient))
  }
  
  modalTitle.textContent = item.name;

  // Donnés dans modal Sam -------------------------------------------------------------------------------------------------

  updateTache[0].setAttribute("placeholder", item.name);
  updateTache[1].setAttribute("placeholder", item.description);
  updateTache[2].setAttribute("placeholder", item.date_from);
  updateTache[3].setAttribute("placeholder", item.date_to);
  updateTache[4].setAttribute("placeholder", item.status);

  // -------------------------------------------------------------------------------------------------------------------

  buttonModal(item);
}

async function buttonModal(item) {

  const footerModal = Modal.querySelector('.tacheFooter');

  const buttonSave = document.createElement("button");
  buttonSave.setAttribute("type", "button");
  buttonSave.id = "buttonSave";
  buttonSave.value = item ? item.id : "non";
  buttonSave.className = "btn btn-success";
  buttonSave.setAttribute("data-bs-dismiss", "modal");
  buttonSave.textContent = "Save";
  
  buttonSave.addEventListener("click", (event) => {
      event.preventDefault();
      saveChanges(event.target.value);
  });

  footerModal.appendChild(buttonSave);
};

async function saveChanges(id) {

  let update;
  if (updateTache[0].value === "" && updateTache[1].value === "" && updateTache[2].value === "" && updateTache[3].value === "" && updateTache[4].value === "") {
    update = null;
    return console.log("error");
  } else if (id === "non") {
    update = {
      name: updateTache[0].value,
      description: updateTache[1].value,
      date_from: updateTache[2].value,
      date_to: updateTache[3].value,
      status: updateTache[4].value
    };
    createTache(update);
    newTasks.push(update);
    await Service.postTask(update);
  } else {
    update = {
      name: updateTache[0].value,
      description: updateTache[1].value,
      date_from: updateTache[2].value,
      date_to: updateTache[3].value,
      status: updateTache[4].value
    };
    await Service.updateTask(id, update);
  }
}

// les listes nécessaire au début du chargement de la page
Sortable.create(foo, {
  group: { name: "foo", pull: false, put: false },
  animation: 100,
  fallbackOnBody: true,
  ghostClass: "ghost",
  swapThreshold: 1,
  filter: ".drag"
});

Sortable.create(usersUl, {
  group: { name: "foo", pull: "clone", put: false },
  animation: 100,
  fallbackOnBody: true,
  swapThreshold: 1,
});

Sortable.create(tachesUl, {
  group:  { name: "foo", pull: true, put: false },
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