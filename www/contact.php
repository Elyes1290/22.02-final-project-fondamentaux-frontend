<?php
require("index.php");

include("test.php");

// Vérifier si le formulaire est soumis 
if (isset( $_POST['submit'])){
  /* récupérer les données du formulaire en utilisant 
     la valeur des attributs name comme clé 
    */
   
  $nom = $_POST['lastname']; 
  $firstname = $_POST['firstname']; 
  $email = $_POST['email'];
  $username = $_POST['username'];
    echo '<h3>Informations récupérées en utilisant POST</h3>'; 
     echo 'lastname : ' . $nom . ' firstname : ' . $firstname . ' email : ' . $email . 'username: ' . $username ; 
     
    curlPost("https://backend.yonathan.ch/api/users/add", ["lastname"=>$nom, "username"=>$username, "firstname"=>$firstname, "email"=>$email]);
     
     exit;
}else{
    echo ("ERREUR");

} 

    $lastname = htmlspecialchars($_POST['lastname']);
    $firstname = htmlspecialchars($_POST['firstname']);
    $email = htmlspecialchars($_POST['email']);
    $username = htmlspecialchars($_POST['username']);
   


function curlPost($url, $data = NULL) {
    $ch = curl_init($url);

    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_ENCODING, '');
    curl_setopt($ch, CURLOPT_MAXREDIRS, 10);
    curl_setopt($ch, CURLOPT_TIMEOUT, 0);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_1);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        'Content-Type: application/json'
      ));

    if (!empty($data)) {
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    }
    $response = curl_exec($ch);
    if (curl_error($ch)) {
    trigger_error('Curl Error:' . curl_error($ch));
    }
    curl_close($ch);
    return $response;
    }


    function ciao($url, $data){
        $ch = curl_init($url);

        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_ENCODING, '');
        curl_setopt($ch, CURLOPT_MAXREDIRS, 10);
        curl_setopt($ch, CURLOPT_TIMEOUT, 0);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($ch, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_1);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json'
          ));

          $response = curl_exec($ch);
          curl_close($ch);
          var_dump($response);

        // $curl = curl_init();

        // curl_setopt_array($curl, array(
        //   CURLOPT_URL => $url,
        //   CURLOPT_RETURNTRANSFER => true,
        //   CURLOPT_ENCODING => '',
        //   CURLOPT_MAXREDIRS => 10,
        //   CURLOPT_TIMEOUT => 0,
        //   CURLOPT_FOLLOWLOCATION => true,
        //   CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        //   CURLOPT_CUSTOMREQUEST => 'POST',
        //   CURLOPT_POSTFIELDS => json_encode($data),
        //   CURLOPT_HTTPHEADER => array(
        //     'Content-Type: application/json'
        //   ),
        // // ));
        
        // $response = curl_exec($curl);
        
        // curl_close($curl);
        var_dump($response);

    }
  //   if (isset( $_POST['submit'])){
       
  //     //     $nom = $_POST['lastname']; 
  //     //     $firstname = $_POST['firstname']; 
  //     //     $email = $_POST['email'];
  //     //     $username = $_POST['username'];
     
     
  //      require 'vendor/autoload.php';
  //     // require("index.php");
  //     // require("contact.php");
  //     date_default_timezone_set('Etc/UTC');
  
     
     
      
     
     
         
               
     
  
  // $mail = new PHPMailer;
  
  // $mail->isSMTP(true);
  
  // $mail->SMTPDebug = 2;
  
  // $mail->Debugoutput = 'html';
  
  // $mail->Host = 'smtp.gmail.com';
  
  // $mail->Port = 587;
  
  // $mail->SMTPSecure = 'tls';
  
  // $mail->SMTPAuth = true;
  
  // $mail->Username = 'diogu.9@gmail.com';
  
  // $mail->Password = 'dioguinho1994';  
  
  // $mail->setFrom('diogu.9@gmail.com', 'Diogo');
                  
  // $mail->addReplyTo($_POST['email'],$_POST['username']);
                   
  // $mail->addAddress('diogu.9@gmail.com', 'Diogo');
                    
  // $mail->Subject = 'PHPMailer GMail SMTP test';
                   
  // $mail->Body = 'Ceci est le contenu du message en texte clair';
          
  // if (!$mail->send()) {
  // echo "Mailer Error: " . $mail->ErrorInfo;
  // } else {
  // echo "Message sent!";
  // }
  // }
//  require_once(__DIR__  .'/vendor/autoload.php');
//     //voir si ça fonctionne
//     use \Mailjet\Resources;
//     //clé public et clé privé /API
//     define('API_PUBLIC_KEY', 'c91d380675c8bc250175763d942e31bf');
//     define('API_PRIVATE_KEY', 'dab1ebe8cc4c94df3ccf59abce0772cb');
//     $mj = new \mailjet\Client(API_USER, API_LOGIN,true,['version' => 'v3.1']);
// //vérification si les variables existent
// if(!empty($_POST['lastname']) && !empty($_POST['firstname']) && !empty($_POST['message'])){
//     $lastname = htmlspecialchars($_POST['lastname']);
//     $firstname = htmlspecialchars($_POST['firstname']);
//     $email = htmlspecialchars($_POST['email']);
//     $username = htmlspecialchars($_POST['username']);

//     if(filter_var($email, FILTER_VALIDATE_EMAIL)){
//         $body = [
//             'Messages' => [
//             [
//                 'From' => [
//                 'Email' => "",
//                 'Name' => "NoSignal"
//                 ],
//                 'To' => [
//                 [
//                     'Email' => "diogu.9@gmail.com",
//                     'Name' => "NoSignal"
//                 ]
//                 ],
//                 'Subject' => "Demande d'inscription",
//                 'TextPart' => '$email, $username', 
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


// if (isset($_POST["submit"])) {

//   ini_set("SMTP", "smtp.gmail.com");
//   ini_set("smtp_port", 465);
//   ini_set("sendemail_from", "diogu.9@gmail.com");
//   //ini_set();
//   //ini_set();




//   $to = "diogu.9@gmail.com";

//   $subject = 'Mail sent from sendmail PHP script';

//   $from = "diogu.9@gmail.com";

//   $message = $_POST["msg"];

//   $headers = "From: $from";


//   if (mail($to, $subject, $message, $headers)) {

//       $responseText = 'Mail sent successfully.';

//   } else {

//       $responseText = 'Unable to send mail. Please try again.';

//   }
// }

// if (isset( $_POST['submit'])){

// use PHPMailer\PHPMailer\PHPMailer;
// use PHPMailer\PHPMailer\Exception;

// require 'www/phpmailer/Exception.php';
// require 'www/phpmailer/PHPMailer.php';
// require 'www/phpmailer/SMTP.php';

// $mail = new PHPMailer(true);

// try {
//     //Server settings
//     $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
//     $mail->isSMTP();                                            //Send using SMTP
//     $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
//     $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
//     $mail->username   = 'email';                     //SMTP username
//     $mail->Password   = 'secret';                               //SMTP password
//     $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
//     $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

//     //Recipients
//     $mail->setFrom('diogu.9@gmail.com', 'Mailer');
//     $mail->addAddress('diogu.9@gmail.com');     //Add a recipient
                  
//     $mail->addReplyTo('info@example.com');
//     $mail->addCC('cc@example.com');
//     $mail->addBCC('bcc@example.com');

    

//     //Content
//     $mail->isHTML(true);                                  //Set email format to HTML
//     $mail->Subject = 'Here is the subject';
//     $mail->Body    = 'This is the HTML message body <b>in bold!</b>';
//     $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

//     $mail->send();
//     echo 'Message has been sent';
// } catch (Exception $e) {
//     echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
// }
