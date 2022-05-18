<?php
require("index.php");
//     require_once(__DIR__  .'/vendor/autoload.php');
//     //voir si ça fonctionne
//     use \Mailjet\Resources;
//     //clé public et clé privé /API
//     define('API_PUBLIC_KEY', 'c91d380675c8bc250175763d942e31bf');
//     define('API_PRIVATE_KEY', 'dab1ebe8cc4c94df3ccf59abce0772cb');
//     $mj = new \mailjet\Client(API_USER, API_LOGIN,true,['version' => 'v3.1']);
// //vérification si les variables existent
// if(!empty($_POST['surname']) && !empty($_POST['firstname']) && !empty($_POST['message'])){
//     $surname = htmlspecialchars($_POST['surname']);
//     $firstname = htmlspecialchars($_POST['firstname']);
//     $email = htmlspecialchars($_POST['email']);
//     $motdepasse = htmlspecialchars($_POST['motdepasse']);

//     if(filter_var($email, FILTER_VALIDATE_EMAIL)){
//         $body = [
//             'Messages' => [// afficher le résultat//     require_once(__DIR__  .'/vendor/autoload.php');
//       //voir si ça fonctionne
//       use \Mailjet\Resources;
//       //clé public et clé privé /API
//       define('API_PUBLIC_KEY', 'c91d380675c8bc250175763d942e31bf');
//       define('API_PRIVATE_KEY', 'dab1ebe8cc4c94df3ccf59abce0772cb');
//       $mj = new \mailjet\Client(API_USER, API_LOGIN,true,['version' => 'v3.1']);
//   //vérification si les variables existent
//   if(!empty($_POST['surname']) && !empty($_POST['firstname']) && !empty($_POST['message'])){
//       $surname = htmlspecialchars($_POST['surname']);
//       $firstname = htmlspecialchars($_POST['firstname']);
//       $email = htmlspecialchars($_POST['email']);
//       $motdepasse = htmlspecialchars($_POST['motdepasse']);
  
//       if(filter_var($email, FILTER_VALIDATE_EMAIL)){
//           $body = [
//               'Messages' => [
//               [
//                   'From' => [
//                   'Email' => "contact@diagodryson.com",
//                   'Name' => "NoSignal"
//                   ],
//                   'To' => [
//                   [
//                       'Email' => "contact@diagodryson.com",
//                       'Name' => "NoSignal"
//                   ]
//                   ],
//                   'Subject' => "Demande d'inscription",
//                   'TextPart' => '$email, $motdepasse', 
//                   /* 'HTMLPart' => "",
//                   'CustomID' => "" */
//               ]
//               ]
//           ];
//               $response = $mj->post(Resources::$Email, ['body' => $body]);
//               $response->success();
//               echo "Email envoyé avec succès !";
  
//       }
//       else{
//           echo "Email non valide";
//       }
      
//   } else{
//       header('Location:index.php');
//       die();
//   }
//             [
//                 'From' => [
//                 'Email' => "contact@diagodryson.com",
//                 'Name' => "NoSignal"
//                 ],
//                 'To' => [
//                 [
//                     'Email' => "contact@diagodryson.com",
//                     'Name' => "NoSignal"
//                 ]
//                 ],
//                 'Subject' => "Demande d'inscription",
//                 'TextPart' => '$email, $motdepasse', 
//                 /* 'HTMLPart' => "",
//                 'CustomID' => "" */
//             ]
//             ]
//         ];
//             $response = $mj->post(Resources::$Email, ['body' => $body]);
//             $response->success();
//             echo "Email envoyé avec succès !";

//     }
//     else{
//         echo "Email non valide";
//     }
    
// } else{
//     header('Location:index.php');
//     die();
// }


  

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

  
  


// function curlPost($url, $data = NULL) {
//     $ch = curl_init($url);
//     curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)
//     AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36');
//     curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
//     curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
//     curl_setopt($ch, CURLOPT_TIMEOUT, 5); //timeout in seconds
//     curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
//     curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
//     curl_setopt($ch, CURLOPT_ENCODING, 'identity');
//     if (!empty($data)) {
//     curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
//     }
//     curl_setopt($ch, CURLOPT_HTTPHEADER, ["Content-Type"=>"application/json"]);
//     $response = curl_exec($ch);
//     if (curl_error($ch)) {
//     trigger_error('Curl Error:' . curl_error($ch));
//     }
//     curl_close($ch);
//     return $response;
//     }
