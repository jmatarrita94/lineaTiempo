<?php
require 'Database.php';
$collection = null;

$directions = $_POST['json'];
$collection = Database::getInstance()->getDb()->grafi_usuarios;
$collection -> insert($directions);
?>