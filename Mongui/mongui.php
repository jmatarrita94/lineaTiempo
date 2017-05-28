<?php
require 'Database.php';
$collection = null;

class Mongui {

  function __construct() {}

  public static function getAll() {
    $collection = Database::getInstance()->getDb()->sitiosMuestreo;
    $cursor = $collection->find();
    return($cursor);
  }

  public static function getPorRangoFechas($fI, $fF) {
    $collection = Database::getInstance()->getDb()->sitiosMuestreo;
    $fInicial = new MongoDB\BSON\UTCDateTime($fI);
    $fFinal = new MongoDB\BSON\UTCDateTime($fF);
    $query = array('fecha' => array('$gt' => $fInicial, '$lte' => $fFinal));

    $cursor = $collection->find($query);
  	return($cursor);
  }

  public static function getPorLugar($nombre, $fecha) {
    $collection = Database::getInstance()->getDb()->sitiosMuestreo;
    $nombre = "Cascada Azul";
    $fecha = "1/01/2015 00:0";
    $query = array('nombre'=> $nombre, 'fecha' => $fecha);

    $cursor = $collection->find($query);
  	return($cursor);
  }
}
?>
