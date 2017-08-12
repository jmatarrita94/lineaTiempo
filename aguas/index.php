<?php require "inc/header.php"; ?>
<script src="http://code.jquery.com/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  crossorigin="anonymous"></script>
  <script src="js/saved.js"></script>
<div class="container mt-4">
    <div class="jumbotron text-center">
        <h1 class="display-3">
            Aguas
        </h1>
        <p class="lead">
            Graficador de la contaminación en los ríos de Costa Rica
        </p>
    </div>
    <div class="row">
        <div class="col-12">
            <h3>
                Gráficos recientes
            </h3>
            <hr class="my-3">
			<div class="list-group" id="listaGraficos">
				<script>listarNGraficos(2);</script>
			</div>
            </hr>
        </div>
    </div>
</div>
<!-- /container -->
<?php require "inc/footer.php"; ?>
