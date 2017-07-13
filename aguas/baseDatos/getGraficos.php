<?php
include('graficosUsuario.php');
/**
* Obtiene las fechas, nombres y descripciones de los graficos del usuario del ID ingresado
**/
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
	// $idUsuario = $_SESSION['idUsuario'];
	$idUsuario = 2;
	$datos = graficosUsuario::getGraficosPorIDUsuario($idUsuario);

	print json_encode($datos);
}
?>
