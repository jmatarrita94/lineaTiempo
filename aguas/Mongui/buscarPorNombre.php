<?php
require 'mongui.php';

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    if (isset($_GET['nombre'])) {
        $nombre = $_GET['nombre'];
        $datos  = Mongui::getPorNombre($nombre);
        if ((string) $datos->getID() != '') {
            print json_encode(iterator_to_array($datos));
        } else {
            print json_encode(
                array(
                    'mensaje' => 'Ha ocurrido un error obteniendo los datos',
                )
            );
        }
    } else {
        print json_encode(
            array(
                'mensaje' => 'Se necesita especificar un nombre v&aacutelido',
            )
        );
    }
}
?>