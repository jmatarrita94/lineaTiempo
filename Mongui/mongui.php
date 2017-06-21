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
	$options = ['sort' => ['fecha' => 1]];

    $cursor = $collection->find($query,$options);
  	return($cursor);
  }

  public static function getPorNombre($nombre) {
    $collection = Database::getInstance()->getDb()->sitiosMuestreo;
    $query = array('nombre'=> $nombre);

    $cursor = $collection->find($query);
  	return($cursor);
  }

  public static function getGraficoUsuario($usuario, $nombreGrafico){
    $collection = Database::getInstance()->getDb()->grafi_usuarios;
    $query = array ('usuario'=>$usuario, 'nombreGrafico'=> $nombreGrafico);
    $cursor = $collection -> find($query);
    return $cursor;
  }
}
?>
