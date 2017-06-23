<?php
require 'mongui.php';

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
	$datos = Mongui::getAll();
	if ((string) $datos->getID() != '') {
		print json_encode(iterator_to_array($datos));
	} else {
		print json_encode(
			array(
				'mensaje' => 'Ha ocurrido un error obteniendo los datos',
			)
		);
	}
}
?>