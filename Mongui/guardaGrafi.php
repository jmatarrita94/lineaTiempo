<?php
require 'Database.php';
header("content-type:application/Json");
$collection = null;
echo("llego1");
$directions = $_POST['json'];
$collection = Database::getInstance()->getDb()->grafi_usuarios;
$collection -> insert($directions);
echo("llego");
?>