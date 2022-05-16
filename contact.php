<?php
//vérification si les variables existent
if(!empty($_POST['surname']) && !empty($_POST['firstname']) && !empty($_POST['message'])){
    $surname = htmlspecialchars($_POST['surname']);
    $firstname = htmlspecialchars($_POST['firstname']);
    $email = htmlspecialchars($_POST[̈́'email']);

    if(filter_var($email, FILTER_VALIDATE_EMAIL)){

    }else{
        echo "Email non valide";
    }
    
}else{
    heade('Location:index.php');
    die();
}