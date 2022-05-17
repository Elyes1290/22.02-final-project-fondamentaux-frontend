<?php
    require_once(__DIR__  .'/vendor/autoload.php');
    //voir si ça fonctionne
    use \Mailjet\Resources;
    //clé public et clé privé /API
    define('API_PUBLIC_KEY', 'c91d380675c8bc250175763d942e31bf');
    define('API_PRIVATE_KEY', 'dab1ebe8cc4c94df3ccf59abce0772cb');
    $mj = new \Mailjet\Client(API_USER, API_LOGIN,true,['version' => 'v3.1']);
//vérification si les variables existent
if(!empty($_POST['surname']) && !empty($_POST['firstname']) && !empty($_POST['message'])){
    $surname = htmlspecialchars($_POST['surname']);
    $firstname = htmlspecialchars($_POST['firstname']);
    $email = htmlspecialchars($_POST['email']);
    $motdepasse = htmlspecialchars($_POST['motdepasse']);

    if(filter_var($email, FILTER_VALIDATE_EMAIL)){
        $body = [
            'Messages' => [
            [
                'From' => [
                'Email' => "contact@diagodryson.com",
                'Name' => "NoSignal"
                ],
                'To' => [
                [
                    'Email' => "contact@diagodryson.com",
                    'Name' => "NoSignal"
                ]
                ],
                'Subject' => "Demande d'inscription",
                'TextPart' => '$email, $motdepasse', 
                /* 'HTMLPart' => "",
                'CustomID' => "" */
            ]
            ]
        ];
            $response = $mj->post(Resources::$Email, ['body' => $body]);
            $response->success();
            echo "Email envoyé avec succès !";

    }
    else{
        echo "Email non valide";
    }
    
} else{
    header('Location:index.php');
    die();
}