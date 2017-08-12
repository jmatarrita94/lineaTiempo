<?php
include('graficosUsuario.php');
/**
* Obtiene las fechas, nombres y descripciones de los graficos del usuario del ID ingresado
**/
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
	session_start();
	$idUsuario = $_SESSION['idUsuario'];
	if (isset($_GET['nLimite'])) {
		$nLimite = $_GET['nLimite'];
		$datos = graficosUsuario::getNGraficosPorIDUsuario($idUsuario,$nLimite);
	}
	else {
		$datos = graficosUsuario::getGraficosPorIDUsuario($idUsuario);
	}

	print json_encode($datos);
}
?>
