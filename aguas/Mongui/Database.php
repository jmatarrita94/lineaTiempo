<?php

require_once 'mongo_login.php';
require 'vendor/autoload.php';

/**
 * Representa un objeto de la base de datos de MongoDB
 */
class Database
{
    private static $db = null;

    private static $conexion;

    final private function __construct()
    {
        self::getDb();
    }

    public static function getInstance()
    {
        if (self::$db === null) {
            self::$db = new self();
        }
        return self::$db;
    }

    public function getDb()
    {
        if (self::$conexion == null) {
            // self::$conexion = new MongoDB\Client('mongodb://' .
                // USERNAME . ':' . PASSWORD .
                // '@' . HOST_IP . ':' . PORT
            // );
            self::$conexion = new MongoDB\Client();
        }
        return self::$conexion->jm;
    }

    /**
     * Evita la clonación del objeto
     */
    final protected function __clone()
    {}

    public function _destructor()
    {
        self::$conexion = null;
    }
}
?>