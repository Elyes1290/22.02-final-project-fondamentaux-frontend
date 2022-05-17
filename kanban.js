const ul = document.getElementById("foo");
const usersUl = document.getElementById("users-list");
const tachesUl = document.getElementById("taches-list");

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

let users = ["Sami", "Bruno", "Loic", "Vinko"];
let taches = ["tache1", "tache2", "tache3", "tache4", "tache5"];
let column1 = {
  name: "ToDO",
  color: "red",
};
let column2 = {
  name: "inProgress",
  color: "orange",
};
let column3 = {
  name: "finished",
  color: "green",
};
let columns = [column1, column2, column3];

for (const column of columns) {
  ul.innerHTML += `<div  class="col column-containers  list-group">${column.name}
  <button type="button" class="btn btn-light" style="width:10px; float:right; display:flex; justify-content: center">❎</button> 
   <div id=${column.name} class="list-group-item"> 
      taches
    </div>
    <div/>`;
  Sortable.create(foo, {
    group: "foo",
    animation: 100,
    fallbackOnBody: true,
    ghostClass: "ghost",
    swapThreshold: 1,
  });
  // column.name = document.getElementById(column.name)
  // Sortable.create(column.name, {
  //   group: 'foo',
  //   animation: 100,
  //   fallbackOnBody: true,
  //   ghostClass: "ghost"

  // });
}

for (const user of users) {
  usersUl.innerHTML += `<div class="row list-group-item">${user}
  <button type="button" class="btn btn-light" style="width:10px; float:right; display:flex; justify-content: center">❎</button>
  </div>`;
}
for (const tache of taches) {
  tachesUl.innerHTML += `<div class="row list-group-item">${tache}
  <button type="button" class="btn btn-light" style="width:10px; float:right; display:flex; justify-content: center">❎</button>
  </div>`;
}

// for (const tache of taches) {
//  let ulNew = document.getElementById(column.name)
//  ulNew.innerHTML += `<li id=${tache} class="row">${tache}<li/>`
// }
//id globale
const addTache = document.getElementById("ajouter-tache");
// // const foo = document.getElementById("foo")
const inputTache = document.getElementById("input-tache");

// //demande à la base de donéée
//boucler les éléments de la base
addTache.addEventListener("click", function () {
  console.log("clicked");
  tachesUl.innerHTML += `<div>${inputTache.value}
  <button type="button" class="btn btn-light" style="width:10px; float:right; display:flex; justify-content: center">❎</button>
  </div>`;
});

const ajouterUser = document.getElementById("ajouter-user");
const inputUsers = document.getElementById("input-users");
ajouterUser.addEventListener("click", function () {
  usersUl.innerHTML += `<div>${inputUsers.value}
  <button type="button" class="btn btn-light" style="width:10px; float:right; display:flex; justify-content: center">❎</button>
  </div>`;
});

const inputColumn = document.getElementById("input-column");
const ajouterColumn = document.getElementById("ajouter-column");

ajouterColumn.addEventListener("click", function () {
  ul.innerHTML += `<div  class="col column-containers  list-group">${inputColumn.value}
  <button type="button" class="btn btn-light" style="width:10px; float:right; display:flex; justify-content: center">❎</button>
  <div  class="list-group-item"> 
    taches
  </div>
  <div/>`;
});
// htmlElement.addEventListener('dragend', function(event){
//     if(event.dataTransfer.dropEffect !== 'none'){
//         $(this).remove();
//     }
// });
