<?php
include('graficosUsuario.php');
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  if (isset($_POST['nombreGrafico']) && isset($_POST['fechaCreacion']) && isset($_POST['tipoGrafico']) && isset($_POST['primerPar']) && isset($_POST['tipoConsulta'])) {

    $idUsr = 2;
    $nombreGrafico = $_POST['nombreGrafico'];
    $fechaCreacion = $_POST['fechaCreacion'];
    $tipoGrafico = $_POST['tipoGrafico'];
    $primerPar = $_POST['primerPar'];
    $tipoConsulta = $_POST['tipoConsulta'];

    if ($tipoConsulta == "Fechas") {
      if (isset($_POST['fechaInicio']) && isset($_POST['fechaFinal'])) {
        
        $fechaInicio = $_POST['fechaInicio'];
        $fechaFinal = $_POST['fechaFinal'];

        if ($tipoGrafico == "Burbuja") {
          if (isset($_POST['segundoPar'])) {
            $segundoPar = $_POST['segundoPar'];
            $datos = graficosUsuario::insertarGrafico($idUsr,$nombreGrafico,$fechaCreacion,$fechaInicio,$fechaFinal,null,$tipoGrafico,$primerPar,$segundoPar);

            print json_encode($datos);
          } else {
            print json_encode(
              array(
                'mensaje' => 'Se necesita especificar un segundo punto de muestreo para este tipo de gráfico'
              )
            );
          }
        } else {
          $datos = graficosUsuario::insertarGrafico($idUsr,$nombreGrafico,$fechaCreacion,$fechaInicio,$fechaFinal,null,$tipoGrafico,$primerPar,null);
          print json_encode($datos);
        }
      } else {
        print json_encode(
          array(
            'mensaje' => 'Se necesitan especificar fechas validas'
          )
        );
      }
    } else {
      if (isset($_POST['puntoMuestreo'])) {
        $puntoMuestreo = $_POST['puntoMuestreo'];
        if ($tipoGrafico == "Burbuja") {
          if (isset($_POST['segundoPar'])) {
            $segundoPar = $_POST['segundoPar'];

            $datos = graficosUsuario::insertarGrafico($idUsr,$nombreGrafico,$fechaCreacion,null,null,$puntoMuestreo,$tipoGrafico,$primerPar,$segundoPar);
            print json_encode($datos);
          } else {
            print json_encode(
              array(
                'mensaje' => 'Se necesita especificar un segundo punto de muestreo para este tipo de gráfico'
              )
            );
          }
        } else {
          $datos = graficosUsuario::insertarGrafico($idUsr,$nombreGrafico,$fechaCreacion,null,null,$puntoMuestreo,$tipoGrafico,$primerPar,null);
          print json_encode($datos);
        }
      } else {
        print json_encode(
          array(
            'mensaje' => 'Se necesita especificar un punto de muestreo válido'
          )
        );
      }
    }
  } else {
    print json_encode(
      array(
        'mensaje' => 'Faltan parametros para poder guardar el grafico'
      )
    );
  }
}
?>
