<?php
  require 'vendor/autoload.php';
  $connection = new MongoDB\Client; //Se crea la conexión en localhost, puerto 27017
  $db = $connection->test; //test es el nombre de la base
  $collection = $db->restaurants; //Obtener la colección restaurants

  //Consulta de SELECT
  $query = ['cuisine' => 'Bakery']; //Obtener los documentos que tienen grade == A
  $cursor = $collection->find($query); //Retorna el cursor con los datos

  foreach ($cursor as $document) //Itera por todos los elementos del cursor
  {
    printf ("Nombre: %s\n",$document['name']); //Avanza el cursor y le hace var_dump a lo que esté señalando
  }

  //Fin del archivo
  echo 'Eso es todo';
?>
