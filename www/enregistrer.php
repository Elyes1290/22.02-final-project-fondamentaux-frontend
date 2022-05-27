<div class="container">
            <div class="col-8"></div>
                <form action="contact.php" method="POST">
                    <div class="form-group">
                        <div class="text">
                            <h1>S'enregistrer</h1>
                        </div>
                     <div class="d-flex">
                            <input type="text" name="lastname" placeholder="Nom" autocomplete="off"class="form-control"/>
                            <input type="text" name="firstname" placeholder="Prénom" autocomplete="off" class="form-control"/>
                        </div>
                        <br/>
                        <input type="email" name="email" placeholder="Email" autocomplete="off" class="form-control"/>
                        <div class="form-group">
                            <!-- <label label for="InputPassword"></label> -->
                            <input type="text" name="username" class="form-control" id="exampleInputPassword1" placeholder="username">
                        </div>
                        <br/>
                        <button type="submit" name="submit" class="btn btn-lg btn-primary">Envoyer</button>
                    </div>
                </form>
        </div>