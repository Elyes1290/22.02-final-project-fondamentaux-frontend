<div id="kanban-container">

  <div class="container-fluid d-flex justify-content-center" id="add-bar">
    <div class="add">
      <button class="btn btn-success" id="ajouter-tache" value="tache" data-bs-toggle="modal" data-bs-target="#exampleModal">Ajouter une tache</button>
    </div>
    <div class="add">
      <input id="input-users"type="text" class="me-1">
      <button class="btn btn-success" id="ajouter-user">Ajouter une utilisateur</button>
    </div>
    <div>
      <div class="add d-flex justify-content-center">
        <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#colonneModal">Ajouter une colonne</button>
      </div>
    </div>
  </div>
  <div  class="container">
    <div class="row align-items-start">
      <div id="users-container" class="col me-1">
        <div id="users-list" class="list-group"></div>
      </div>
  </div>

  <div id="foo" class="row align-items-start mt-2">

</div>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
         <!-- Contenue modal Sam -->
         <div class="container card bg-dark text-light border-light border-5 m-2 p-2">
          <div class="row">
            <div class="col">
              
                <div class="row">
                  <label for="">name</label>
                  <input class="updateTache" type="text"> 
                </div>
                
                <div class="row">
                  <label for="">description</label>
                  <input class="updateTache" type="text"> 
                </div> 

                <div class="row">
                  <label for="">date From</label>
                  <input class="updateTache" type="text"> 
                </div> 

                <div class="row">
                  <label for="">date To</label>
                  <input class="updateTache" type="text"> 
                </div> 

                <div class="row">
                  <label for="">status</label>
                  <input class="updateTache" type="text"> 
                </div> 
              
            </div>
          </div>
        </div>
      <!-- ------------- -->
      </div>
      <div class="modal-footer tacheFooter">
        
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="colonneModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Nouvelle Tache</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="nameTache" class="col-form-label">Name:</label>
            <input type="text" class="form-control newColumn" id="nameTache">
          </div>
          <div class="mb-3">
            <label for="color" class="col-form-label">Color:</label>
            <input class="form-control newColumn" id="color"></input>
          </div>
        </form>
      </div>
      <div class="modal-footer colonneFooter">
        
      </div>
    </div>
  </div>
</div>