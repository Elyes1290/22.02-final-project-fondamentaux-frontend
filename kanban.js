import { newTache } from "./edit.js";
const ul = document.getElementById("foo")
const usersUl = document.getElementById("users-list")
const tachesUl = document.getElementById("taches-list")


// les listes nécessaire au début du chargement de la page
Sortable.create(foo, {
  group: 'foo',
  animation: 100,
  fallbackOnBody: true,
  ghostClass: "ghost",
  swapThreshold: 1
  
});

Sortable.create(foo, {
  group: 'foo',
  animation: 100,
  fallbackOnBody: true,
  ghostClass: "ghost",
  swapThreshold: 1
  
});

Sortable.create(foo, {
  group: 'foo',
  animation: 100,
  fallbackOnBody: true,
  ghostClass: "ghost",
  swapThreshold: 1
    
});

Sortable.create(usersUl, {
  group: 'foo',
  animation: 100,
  fallbackOnBody: true,
  swapThreshold: 1
    
});

Sortable.create(tachesUl, {
  group: 'foo',
  animation: 100,
  fallbackOnBody: true,
  swapThreshold: 1,
  ghostClass: "ghost",
});
 
/// simulation des éléments de retour de la base données
let users = ["Sami","Bruno","Loic","Vinko"]

let taches = ["tache1", "tache2", "tache3", "tache4", "tache5"]

let column1 = {
  name: "ToDO",
  color: "red"
}
let column2 = {
  name: "inProgress",
  color: "orange",
}
let column3 = {
  name: "finished",
  color: "green"
}

let columns = [column1, column2, column3]

  
///Afficher les colonnes provenant futurement les éléments de la base de données
for (const column of columns) {
  ul.innerHTML += `<div  class="col column-containers  list-group container-item">${column.name}
  <div id=${column.name} class="list-group-item"> 
    
  </div>
  <div/>`
  Sortable.create(foo, {
    group: "foo",
    animation: 100,
    fallbackOnBody: true,
    ghostClass: "ghost",
    swapThreshold: 1
    
  });
}

// les options permettant de créee des listes

let containers = null;
let sortableOption =  {group: "foo",
animation: 100,
fallbackOnBody: true,
ghostClass: "ghost",
swapThreshold: 1}

//myUsersClasses = ["row", "list-group-item"]
//myTachesClasses = ["row","list-group-item","container-item"]

///Afficher les utilisateurs provenant futurement les éléments de la base de données

for (const user of users) {
  //  usersUl.innerHTML += `<div class="row list-group-item">${user}</div>`
  //  createDiv(myUsersClasses,user,usersUl)
  let newDiv = document.createElement("div")
  newDiv.classList.add("row","list-group-item")
  let newContent = document.createTextNode(user)
  newDiv.appendChild(newContent)
  usersUl.appendChild(newDiv)
}

///Afficher les taches provenant futurement les éléments de la base de données
for (const tache of taches) {
  tachesUl.innerHTML += `<div class="row list-group-item container-item">${tache}</div>`
  // createDiv(myTachesClasses,tache,tachesUl)
}

//ajouter une tache
const addTache = document.getElementById("ajouter-tache")
const inputTache = document.getElementById("input-tache");
console.log(inputTache);

let modinput = document.getElementById("mod-tache");
let modtachebut = document.getElementById("mod-tachebut");
let nonediv = document.getElementById("nonediv");

addTache.addEventListener("click",function(){
  //tachesUl.innerHTML += `<div class="row list-group-item container-item">${inputTache.value}</div>`
  newTache(inputTache, nonediv, tachesUl);
})


modtachebut.addEventListener("click", () => {

  let buttonthor = parseInt(document.getElementById("thor").value)+1;
  console.log(buttonthor)
  let input = document.getElementById("inp"+buttonthor);
  console.log(input);
  input.textContent = modinput.value;
})
  
// ajouter un utilisateur
const ajouterUser = document.getElementById("ajouter-user")
const inputUsers = document.getElementById("input-users")

ajouterUser.addEventListener("click",function(){
  usersUl.innerHTML += `<div class="row list-group-item">${inputUsers.value}</div>`
})

// ajouter une colonne
const inputColumn = document.getElementById("input-column")
const ajouterColumn = document.getElementById("ajouter-column")

ajouterColumn.addEventListener("click",function(){
  ul.innerHTML += `<div  class="col column-containers  list-group container-item">${inputColumn.value}
  <div  class="list-group-item"> 
  
  </div>
  <div/>`
})

// creation de sortable dans les columns
containers = document.querySelectorAll(".container-item");

  for (var i = 0; i < containers.length; i++) {
    new Sortable(containers[i],sortableOption );
}

function createDiv(classes, text, attachTo) {
  const newDiv = document.createElement("div");
  newDiv.classList.add(classes)
  let newContent = document.createTextNode(text)
  newDiv.appendChild(newContent)
  attachTo.appendChild(newDiv);
}