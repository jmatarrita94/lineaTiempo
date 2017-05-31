<?php

	require 'vendor/autoload.php';
	//connect to server
	$connection = new MongoDB\Client("mongodb://admin:admin2016@10.1.4.133:27017");

	//connect to a database
	$db = $connection->jm;
	$collection = $db->sitiosMuestreo;

	if (isset($_GET['campo'])) {

        $campo = $_GET['campo'];
    }else{
        // Fallback behaviour goes here
    }

        if ($campo == "nombre") {
            $nombre = "Cascada Azul";
            $mongoQuery = array('nombre'=> $nombre);
        }
        else if ($campo == "fechas") {
            $fechaIni = "1/01/2015 00:0";
            $fechaFin = "10/12/2015 00:00";
            $mongoQuery = array('fecha' => array('$gt' => $fechaIni, '$lte' => $fechaFin));
        }
    $cursor = $collection->find($mongoQuery);
    echo $json = json_encode(iterator_to_array($cursor));

    $fp = fopen('results.json', 'w');
    fwrite($fp, $json);
    fclose($fp)
?>

