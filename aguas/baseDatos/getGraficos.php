<?php
  include('graficosUsuario.php');
  $datos = graficosUsuario::getGraficosPorIDUsuario(2);
  // $datos = graficosUsuario::getGraficoPorID('2017-07-02 13:17:32');
  // $datos = graficosUsuario::insertarGrafico(2,'Grafico2','2017-07-02',null,null,'Cascada Azul','xy','NH4',null);
  // $datos = graficosUsuario::modificarGrafico('2017-07-02 13:17:32','Grafico1','2014-01-01','2015-12-12',null,'bar','I-Hol',null);
  // $datos = graficosUsuario::eliminarGrafico('2017-07-02 16:27:39');
    var_dump($datos);
?>
