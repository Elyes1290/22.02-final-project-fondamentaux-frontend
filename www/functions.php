<?php
/**
 * Fonction qui passe d'une page à l'autre page
 */

// Place the value from ?page=value in the URL to the variable $page. 
$page = isset($_GET['page']) ? $_GET['page'] : 'accueil'; 

// Create an array of the only pages allowed. 
$pageArray = array( 
       'accueil', 
       'calendar', 
       'kanban', 
       'enregistrer',
         ); 
 

// Is $page in the array? 
$inArray = in_array($page, $pageArray); 

// If so, include it, if not, emit error. 
 if ($inArray == true) { 
  include($page .'.php'); 
}else { 
  echo 'Umm tisk tisk. You should not be messing with things.'; 
} 

?>