<?php
require 'mongui.php';
/**
* Imprime un JSON con todos los documentos de la colección "sitiosMuestreo"
**/
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
