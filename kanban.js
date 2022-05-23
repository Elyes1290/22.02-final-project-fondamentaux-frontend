const ul = document.getElementById("foo");
const usersUl = document.getElementById("users-list");
const tachesUl = document.getElementById("taches-list");

// les listes nécessaire au début du chargement de la page
Sortable.create(foo, {
  group: "foo",
  animation: 100,
  fallbackOnBody: true,
  ghostClass: "ghost",
  swapThreshold: 1,
});
Sortable.create(foo, {
  group: "foo",
  animation: 100,
  fallbackOnBody: true,
  ghostClass: "ghost",
  swapThreshold: 1,
});
Sortable.create(foo, {
  group: "foo",
  animation: 100,
  fallbackOnBody: true,
  ghostClass: "ghost",
  swapThreshold: 1,
});
Sortable.create(usersUl, {
  group: "foo",
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

async function getusers() {
  try {
    const response = await axios.get("http://localhost:3000/users");
    return await response.data;
  } catch (err) {
    console.log(err);
  }
}

async function getTasks() {
  try {
    const response = await axios.get("http://localhost:3000/tasks");
    return await response.data;
  } catch (err) {
    console.log(err);
  }
}

async function getColumns() {
  try {
    const response = await axios.get("http://localhost:3000/columns");
    return await response.data;
  } catch (err) {
    console.log(err);
  }
}

/// simulation des éléments de retour de la base données
let users = await getusers();
console.log(users);
let taches = await getTasks();
console.log(taches);
let columns = await getColumns();
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

//myUsersClasses = ["row", "list-group-item"];
//myTachesClasses = ["row", "list-group-item", "container-item"];
//myColumnsClasses = ["col", "column-containers", "list-group", "container-item"];
//myColumnsChildsClasses = ["list-group-item"];

///Afficher les colonnes provenant futurement les éléments de la base de données
for (const column of columns) {
  ul.innerHTML += `<div  class="col column-containers  list-group container-item rounded" style="background-color:#dee2e6, -webkit-box-shadow: 5px 5px 15px -1px #000000; 
box-shadow: 5px 5px 15px -1px #000000;" >${column.name}
    <div id=${column.name} class="list-group-item"> 
    </div>
    <div/>`;
  // let newDiv = document.createElement("div")
  // newDiv.setAttribute("id",column.name+"a")
  // newDiv.classList.add(...myColumnsClasses)
  // let newContent = document.createTextNode(column.name)
  // newDiv.appendChild(newContent)
  // attachTo.appendChild(newDiv);

  // let newDiv2 = document.createElement("div")
  // newDiv2.setAttribute("id",column.name)
  // newDiv2.classList.add(...myColumnsChildsClasses)
  // let newContent2 = document.createTextNode("")
  // newDiv2.appendChild(newContent2)
  // newDiv.appendChild(newDiv2)

  Sortable.create(foo, {
    group: "foo",
    animation: 100,
    fallbackOnBody: true,
    ghostClass: "ghost",
    swapThreshold: 1,
  });
}

///Afficher les utilisateurs provenant futurement les éléments de la base de données
for (const user of users) {
  //  usersUl.innerHTML += `<div class="row list-group-item">${user}</div>`
  // createDiv(myUsersClasses,user,usersUl)
  let newDiv = document.createElement("div");
  newDiv.classList.add("row", "list-group-item");
  let newContent = document.createTextNode(user);
  newDiv.appendChild(newContent);
  usersUl.appendChild(newDiv);
}

///Afficher les taches provenant futurement les éléments de la base de données
for (const tache of taches) {
  // tachesUl.innerHTML += `<div class="row list-group-item container-item">${tache}</div>`
  //  createDiv(myTachesClasses,tache,tachesUl)
  let newDiv = document.createElement("div");
  newDiv.classList.add("row", "list-group-item", "container-item");
  let childButton = document.createElement("button");
  childButton.value = tache.id;
  childButton.id = "modal";
  childButton.className = "btn btn-primary ";
  childButton.setAttribute("type", "button");
  childButton.setAttribute("data-bs-toggle", "modal");
  childButton.setAttribute("data-bs-target", "#exampleModal");
  let newContent = document.createTextNode(tache.name);
  let btnContent = document.createTextNode("Description");
  newDiv.appendChild(newContent);
  newDiv.appendChild(childButton);
  childButton.appendChild(btnContent);
  tachesUl.appendChild(newDiv);
}

const Modal = document.getElementById("exampleModal");
Modal.addEventListener("show.bs.modal", (event) => {
  // Button that triggered the modal
  const button = event.relatedTarget;
  // Extract info from data-bs-* attributes
  const recipient = button.value;

  const item = taches.find((item) => item.id == recipient);

  const modalTitle = exampleModal.querySelector(".modal-title");

  modalTitle.textContent = item.name;
});

//ajouter une tache
const addTache = document.getElementById("ajouter-tache");
const inputTache = document.getElementById("input-tache");
addTache.addEventListener("click", function () {
  //  tachesUl.innerHTML += `<div class="row list-group-item container-item">${inputTache.value}</div>`
  //  createDiv(myTachesClasses,inputTache.value,tachesUl)
  let newDiv = document.createElement("div");
  newDiv.classList.add("row", "list-group-item", "container-item");
  let childButton = document.createElement("button");
  childButton.value = "";
  childButton.id = "modal";
  childButton.className = "btn btn-primary";
  childButton.setAttribute("type", "button");
  childButton.setAttribute("data-bs-toggle", "modal");
  childButton.setAttribute("data-bs-target", "#exampleModal");
  let newContent = document.createTextNode(inputTache.value);
  let btnContent = document.createTextNode("Description");
  newDiv.appendChild(newContent);
  newDiv.appendChild(childButton);
  childButton.appendChild(btnContent);
  tachesUl.appendChild(newDiv);
});

// ajouter un utilisateur
const ajouterUser = document.getElementById("ajouter-user");
const inputUsers = document.getElementById("input-users");
ajouterUser.addEventListener("click", function () {
  // usersUl.innerHTML += `<div class="row list-group-item">${inputUsers.value}</div>`
  createDiv(myUsersClasses, inputUsers.value, usersUl);
});

// ajouter une colonne
const inputColumn = document.getElementById("input-column");
const ajouterColumn = document.getElementById("ajouter-column");
ajouterColumn.addEventListener("click", function () {
  ul.innerHTML += `<div  class="col column-containers  list-group container-item" style="background-color:#dee2e6, -webkit-box-shadow: 5px 5px 15px -1px #000000; 
  box-shadow: 5px 5px 15px -1px #000000;>${inputColumn.value}
  <div  class="list-group-item"> 
  
  </div>
  <div/>`;
});

// creation de sortable dans les columns
containers = document.querySelectorAll(".container-item");
for (var i = 0; i < containers.length; i++) {
  new Sortable(containers[i], sortableOption);
}

// function permettant d'ajouter une div avec des classes,un contenu et de l'attacher quelque part
// function createDiv(classes, text, attachTo) {
//   const newDiv = document.createElement("div");
//   newDiv.classList.add(...classes);
//   let newContent = document.createTextNode(text);
//   newDiv.appendChild(newContent);
//   attachTo.appendChild(newDiv);
// }
