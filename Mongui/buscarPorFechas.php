<?php
  require 'mongui.php';

  if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    if (isset($_GET['fechaIni']) && isset($_GET['fechaFin'])) {
      $fechaIni = $_GET['fechaIni'];
      $fechaFin = $_GET['fechaFin'];
      $datos = Mongui::getPorRangoFechas($fechaIni,$fechaFin);
      if ((string)$datos->getID() != '') {
        print json_encode(iterator_to_array($datos));
      } else {
        print json_encode(
          array(
            'mensaje' => 'Ha ocurrido un error obteniendo los datos'
          )
        );
      }
    } else {
      print json_encode(
        array(
          'mensaje' => 'Se necesita especificar una fecha inicial y una fecha final v&aacutelidas'
        )
      );
    }
  }
?>
