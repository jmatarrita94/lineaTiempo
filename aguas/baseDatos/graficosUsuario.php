<?php
include('mysql_connect.php');
class graficosUsuario extends dbConn
{
    public function getGraficosPorIDUsuario($idUsr) {
        try {
            $dbMySQL = new dbConn;

            $stmt = $dbMySQL->conn->prepare("SELECT nombreGrafico FROM graficosusuario WHERE idUsuario = :myid");
            $stmt->bindParam(':myid', $idUsr);
            $stmt->execute();
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

        } catch (PDOException $e) {
            $result = "Error: " . $e->getMessage();
        }

        //Queries database with prepared statement
        return $result;
    }

    public function getGraficoPorID($id) {
      try {
          $dbMySQL = new dbConn;

          $stmt = $dbMySQL->conn->prepare("SELECT * FROM graficosusuario WHERE idGrafico = :myid");
          $stmt->bindParam(':myid', $id);
          $stmt->execute();
          $result = $stmt->fetch(PDO::FETCH_ASSOC);

      } catch (PDOException $e) {
          $result = "Error: " . $e->getMessage();
      }

      //Queries database with prepared statement
      return $result;
    }

    public function insertarGrafico($idUsr,$nombreGrafico,$fechaCreacion,$fechaInicio,$fechaFinal,$puntoMuestreo,$tipoGrafico,$primerPar,$segundoPar) {
      try {
        $dbMySQL = new dbConn;
        $stmt = $dbMySQL->conn->prepare("INSERT INTO graficosUsuario(idUsuario,nombreGrafico,fechaCreacion,fechaInicio,fechaFinal,puntoMuestreo,tipoGrafico,primerParametro,segundoParametro)
        VALUES (:idU,:nGrafico,:fCreacion,:fInicio,:fFinal,:pMuestreo,:tGrafico,:pPar,:sPar)");
        $stmt->bindParam(':idU',$idUsr);
        $stmt->bindParam(':nGrafico',$nombreGrafico);
        $stmt->bindParam(':fCreacion',$fechaCreacion);
        $stmt->bindParam(':fInicio',$fechaInicio);
        $stmt->bindParam(':fFinal',$fechaFinal);
        $stmt->bindParam(':pMuestreo',$puntoMuestreo);
        $stmt->bindParam(':tGrafico',$tipoGrafico);
        $stmt->bindParam(':pPar',$primerPar);
        $stmt->bindParam(':sPar',$segundoPar);
        $stmt->execute();

        $err = '';
      } catch (PDOException $e) {
        $err = "Error: " . $e->getMessage();
      }
      //Determines returned value ('true' or error code)
      if ($err == '') {
          $success = 'true';
      } else {
          $success = $err;
      };
      return $success;
    }

    public function modificarGrafico($idGrafico,$nombreGrafico,$fechaInicio,$fechaFinal,$puntoMuestreo,$tipoGrafico,$primerPar,$segundoPar) {
      try {
        $dbMySQL = new dbConn;
        $stmt = $dbMySQL->conn->prepare("UPDATE graficosUsuario
        SET nombreGrafico = :nGrafico,
            fechaInicio = :fInicio,
            fechaFinal = :fFinal,
            puntoMuestreo = :pMuestreo,
            tipoGrafico = :tGrafico,
            primerParametro = :pPar,
            segundoParametro = :sPar
        WHERE idGrafico = :idGraf");
        $stmt->bindParam(':idGraf',$idGrafico);
        $stmt->bindParam(':nGrafico',$nombreGrafico);
        $stmt->bindParam(':fInicio',$fechaInicio);
        $stmt->bindParam(':fFinal',$fechaFinal);
        $stmt->bindParam(':pMuestreo',$puntoMuestreo);
        $stmt->bindParam(':tGrafico',$tipoGrafico);
        $stmt->bindParam(':pPar',$primerPar);
        $stmt->bindParam(':sPar',$segundoPar);
        $stmt->execute();

        $err = '';
      } catch (PDOException $e) {
        $err = "Error: " . $e->getMessage();
      }
      //Determines returned value ('true' or error code)
      if ($err == '') {
          $success = 'true';
      } else {
          $success = $err;
      };
      return $success;
    }

    public function eliminarGrafico($id) {
      try {
        $dbMySQL = new dbConn;
        $stmt = $dbMySQL->conn->prepare("DELETE FROM graficosUsuario WHERE idGrafico = :idGraf");
        $stmt->bindParam(':idGraf',$id);
        $stmt->execute();

        $err = '';
      } catch (PDOException $e) {
        $err = "Error: " . $e->getMessage();
      }
      //Determines returned value ('true' or error code)
      if ($err == '') {
          $success = 'true';
      } else {
          $success = $err;
      };
      return $success;
    }
}
