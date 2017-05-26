<?php require "inc/header.php"; ?>

<div class="container mt-4">
  <div class="row">
    <div class="col-md-3">
      <h4>Configuración</h4>
      <hr class="my-3">
      <form>
        <h5 class="mt-4">Fechas a analizar</h5>
        <div class="form-group">
          <label for="example-date-input">Fecha inicial</label>
          <input class="form-control" type="date" value="2017-01-01" id="example-date-input">
        </div>
        <div class="form-group">
          <label for="example-date-input">Fecha final</label>
          <input class="form-control" type="date" value="2017-01-01" id="example-date-input">
        </div>

        <h5 class="mt-4">Parámetros a considerar</h5>
        <div class="form-check">
          <label class="form-check-label"><input class="form-check-input mr-2" type="checkbox" value="">Parámetro</label>
        </div>
        <div class="form-check">
          <label class="form-check-label"><input class="form-check-input mr-2" type="checkbox" value="">Parámetro</label>
        </div>

        <button type="submit" class="btn btn-primary mt-4">Generar</button>
      </form>
    </div>
  </div>
</div>

<?php require "inc/footer.php"; ?>
