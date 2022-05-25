<?php
    use PHPMailer\PHPMailer\PHPMailer;
   
if (isset( $_POST['submit'])){
       
    //     $nom = $_POST['lastname']; 
    //     $firstname = $_POST['firstname']; 
        $email = $_POST['email'];
    //     $username = $_POST['username'];
   
   
     require 'vendor/autoload.php';
    // require("index.php");
    // require("contact.php");
    date_default_timezone_set('Etc/UTC');

   
   
    
   
   
       
             
   

$mail = new PHPMailer;

$mail->isSMTP(true);

$mail->SMTPDebug = 2;

$mail->Debugoutput = 'html';

$mail->Host = 'smtp.gmail.com';

$mail->Port = 587;

$mail->SMTPSecure = 'tls';

$mail->SMTPAuth = true;

$mail->Username = 'diogu.9@gmail.com';

$mail->Password = 'dioguinho1994';  

$mail->setFrom('diogu.9@gmail.com', 'Diogo');
                
$mail->addReplyTo($_POST['email'],$_POST['username']);
                 
$mail->addAddress($email);
                  
$mail->Subject = 'PHPMailer GMail SMTP test';
                 
$mail->Body = 'Ceci est le contenu du message en texte clair';
        
if (!$mail->send()) {
echo "Mailer Error: " . $mail->ErrorInfo;
} else {
echo "Message sent!";
}
}
    
/*
    use PHPMailer\PHPMailer\PHPMailer;
    require 'vendor/autoload.php';
    require 'config.php';
    require 'contact';
    if (isset( $_POST['submit'])){
   
    
    //$mail->addAttachment('test.txt');
   
        / récupérer les données du formulaire en utilisant 
           la valeur des attributs name comme clé 
          /
         
        $nom = $_POST['lastname']; 
        $firstname = $_POST['firstname']; 
        $email = $_POST['email'];
        $username = $_POST['username'];
        $mail = new PHPMailer;
   
    $mail->isSMTP();
    $mail->SMTPDebug = 2;
    $mail->Host = SMTP_HOST;
    $mail->Port = SMTP_PORT;
    $mail->SMTPAuth = true;
    $mail->username = 'diogu.9@gmail.com';
    $mail->Password = 'dioguinho1994';   
    $mail->setFrom('diogu.9@gmail.com', );
    $mail->addReplyTo('diogu.9@gmail.com', );
    $mail->addAddress('exemple@gmail.com', 'Nom du destinataire');
    $mail->Subject = 'Essai de PHPMailer';
    $mail->msgHTML(file_get_contents('message.html'), __DIR__);
    $mail->Body = 'Ceci est le contenu du message en texte clair';
    }
        if (!$mail->send()) {
        echo 'Erreur de Mailer : ' . $mail->ErrorInfo;
    } else {
        echo 'Le message a été envoyé.';
    }
    */

?>