<?php
require 'vendor/autoload.php';
//connect to server
$connection = new MongoDB\Client("mongodb://admin:admin2016@10.1.4.133:27017"); 

//connect to a database 
	$db = $connection->jm;
	$collection = $db->Marguito;
    
        // var_dump($doc);
    $dateQuery = array('fecha' => "1/01/2015 00:0", 'fecha'=>"10/12/2015 00:00", 'nombre' => "Cascada Azul");

    $cursor = $collection->find($dateQuery);
    echo json_encode(iterator_to_array($cursor));

?>