<?php require "login/loginheader.php"; ?>

<!DOCTYPE html>
<html lang="es">
<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <title>Aguas</title>
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Bootstrap CSS -->
  <link href="css/bootstrap.css" rel="stylesheet" media="screen">
  <link href="css/main.css" rel="stylesheet" media="screen">
</head>
<body>
  <nav class="navbar navbar-toggleable-md navbar-inverse bg-primary">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
      <a class="navbar-brand" href="index.php">
        <img src="img/logo-white.svg" width="30" height="30" class="d-inline-block align-top" alt="">
        Aguas
      </a>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="index.php">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="new.php">Crear nuevo gráfico</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="saved.php">Gráficos guardados</a>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Usuario
          </a>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="help.php">Ayuda</a>
            <a class="dropdown-item" href="login/logout.php">Cerrar sesión</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
