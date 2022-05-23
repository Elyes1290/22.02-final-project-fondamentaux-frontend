<?php
/**
 * Fonction qui passe d'une page à l'autre page
 */

// Place the value from ?page=value in the URL to the variable $page. 
$page = $_GET['page']; 

// Create an array of the only pages allowed. 
$pageArray = array( 
       'home', 
       'calendar', 
       'kanban', 
       'enregistrer',
         ); 

// If there is no page set, include the default main page. 

if (!$page) { 
  include('home.php'); 
} 

// Is $page in the array? 
$inArray = in_array($page, $pageArray); 

// If so, include it, if not, emit error. 
 if ($inArray == true) { 
  include($page .'.php'); 
}else { 
  echo 'Umm tisk tisk. You should not be messing with things.'; 
} 

?>