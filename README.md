# Page de Contact

<h1>Les étapes à suivre</h1>
1. Mettre en place un formulaire de contact et traiter les données POST
2. Utilisation du service informaniak pour transmettre l'e-mail de l'utilisateur

<h1>responsabilité</h1>
- Une page d’enregistrement avec un formulaire

<h2>informations concernant le formulaire</h2>
Récupérer les informations envoyées du formulaire, envoyer les informations au back-end
via la fonction curlPost() qui vous est fournie et transmettre une notification par e-mail à
l’utilisateur qui l’a transmis (il faudra donc à minima récupérer l’e-mail de l’utilisateur).
Pour transmettre l’e-mail, vous pouvez utiliser le serveur SMTP d’un des hébergements
d’infomaniak, Google ou autre (La configuration SMTP est la même que lorsque vous
configurez la boîte e-mail de votre smartphone)


<h3>Ne pas oublier</h3>
- Une page laissée “blanche” dans l’équipe JS Kanban va insérer sa réalisation
- Une page laissée “blanche” dans l’équipe JS Calendrier va insérer sa réalisation


<!-- fonction utile:
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

Exemple d’utilisation:
$response = curlPost("http://www.test.ch", ["myField1"=>"myValue1"]); -->

