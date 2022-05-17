
const ul = document.getElementById("foo")
const usersUl = document.getElementById("users-list")
const tachesUl = document.getElementById("taches-list")

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

  
  
  for (const column of columns) {
    ul.innerHTML += `<div  class="col column-containers  list-group container-item">${column.name}
    <div id=${column.name} class="list-group-item"> 
      taches
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

let containers = null;
let sortableOption =  {group: "foo",
animation: 100,
fallbackOnBody: true,
ghostClass: "ghost",
swapThreshold: 1}



  for (const user of users) {
    usersUl.innerHTML += `<div class="row list-group-item">${user}</div>`
  }
  for (const tache of taches) {
    tachesUl.innerHTML += `<div class="row list-group-item container-item">${tache}</div>`
  }
  
  
  
  const addTache = document.getElementById("ajouter-tache")
  const inputTache = document.getElementById("input-tache")
  
  // //demande à la base de donéée
  //boucler les éléments de la base
  addTache.addEventListener("click",function(){
    console.log("clicked")
    tachesUl.innerHTML += `<div class="row list-group-item">${inputTache.value}</div>`
  })
  
  const ajouterUser = document.getElementById("ajouter-user")
  const inputUsers = document.getElementById("input-users")
ajouterUser.addEventListener("click",function(){
  usersUl.innerHTML += `<div class="row list-group-item">${inputUsers.value}</div>`
})

const inputColumn = document.getElementById("input-column")
const ajouterColumn = document.getElementById("ajouter-column")

ajouterColumn.addEventListener("click",function(){
  ul.innerHTML += `<div  class="col column-containers  list-group container-item">${inputColumn.value}
  <div  class="list-group-item"> 
  taches
  </div>
  <div/>`
})

// creation de sortable dans les columns
containers = document.querySelectorAll(".container-item");
for (var i = 0; i < containers.length; i++) {
  new Sortable(containers[i],sortableOption );
}
