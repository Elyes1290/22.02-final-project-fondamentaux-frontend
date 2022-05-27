<!-- ---------------------------------------------------Début Calendrier ------------------------------------------------->

<!-- Modale -->
  <div id='calendar'></div>
  <div id='datepicker'></div>

  <div class="modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <!-- Titre de la Modale -->
          <h2 class="modal-title" id="name"></h2>
        </div>
        <!-- Description, statut et date de début et de fin -->
        <div class="modal-body">
          <div class="row">
            <div class="col-xs-12">
              <label class="col-xs-4" for="title"></label>
              <b><h4 id="description" class="text-center "></h4></b>
              <p id="datefrom"></p>
              <p id="dateto"></p>
            </div>
            <b><h5 id="status">essai</h5></b>
          </div>
          <!-- Bouton de fermeture de modale -->
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>

