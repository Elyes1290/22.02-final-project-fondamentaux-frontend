<?php
require("index.php");


  

// Vérifier si le formulaire est soumis 
if (isset( $_POST['submit'])){
  /* récupérer les données du formulaire en utilisant 
     la valeur des attributs name comme clé 
    */
  $nom = $_POST['surname']; 
  $firstname = $_POST['firstname']; 
  $email = $_POST['email'];
  $username = $_POST['username'];
     echo '<h3>Informations récupérées en utilisant POST</h3>'; 
     echo 'surname : ' . $nom . ' firstname : ' . $firstname . ' email : ' . $email . 'username: ' . $username ; 

     var_dump($nom,$firstname,$email,$username);
     exit;
}else{
    echo ("ERREUR");

}

  
  


function curlPost($url, $data = NULL) {
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)
    AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 5); //timeout in seconds
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
    curl_setopt($ch, CURLOPT_ENCODING, 'identity');
    if (!empty($data)) {
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    }
    curl_setopt($ch, CURLOPT_HTTPHEADER, ["Content-Type"=>"application/json"]);
    $response = curl_exec($ch);
    if (curl_error($ch)) {
    trigger_error('Curl Error:' . curl_error($ch));
    }
    curl_close($ch);
    return $response;
    }
    $response = curlPost("", ["myField1"=>"myValue1"]);
