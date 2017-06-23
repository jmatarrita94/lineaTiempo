<?php require "inc/header.php";?>
<script src="http://code.jquery.com/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.1.4/Chart.min.js">
</script>
<script src="js/llenarComboPuntos.js"></script>
<div class="container mt-4">
	<div class="row">
	<div class="col-md-6">
    <form action="/action_page.php">
      <div id="comboPuntos"></div> 
	  <script>llenarPuntos();</script><br>
      Fecha Inicial: <input type="date" id="fechaI" value="2014-01-01"><br>
      Fecha Final: <input type="date" id="fechaF" value="2015-12-31"><br>
    </form>
	<script src="js/graficarPorFechas.js"></script>
	<script src="js/graficarPorNombre.js"></script>
    <button class="button" onclick="graficar()">Consulta por Fechas</button>
    <button class="button" onclick="graficarPorNombre()">Consulta por Punto de Muestreo</button>
    <hr>
	</div>
	<div class="col-md-5">
	<div id="comboParametros"></div> 
	<script>llenarParametros();</script>
	Tipo de gr&aacutefico:&nbsp;
	<input type="radio" id= "btnLinea" name="tipoGrafico" value="linea" checked="true"> De linea &nbsp;
	<input type="radio" id= "btnBarras" name="tipoGrafico" value="barras"> De barras	
	</div>
	</div>
	
	<div class="row" id=textboxNombreGrafico>
	Nombre del gr&aacutefico:&nbsp<input type="text" id="nombreGrafico" value="Gráfico sin título" size=120>
	<script>document.getElementById('textboxNombreGrafico').style.display = 'none';</script>
	</div>
	
	<div class=row>
    <canvas id="myChart" width="100%" height="15"></canvas>
	</div>
	
	<div class=row id=botonesGuardar>
	<div class="col-md-3"> 
	<script>
	function graficoAImagen(){
		var win=window.open();
		win.document.write("<b>" + document.getElementById("nombreGrafico").value + "</b><br><img src='"+myChart.toDataURL("image/png")+"'/>");
	}
	</script>	
	<button onclick="graficoAImagen()">Guardar como imagen</button>
	</div>
	<div class="col-md-5"> 
	<script src="js/guardarGrafi.js"></script>
	<button onclick="guardarGrafi()" id="btnGuardarMongo">Guardar en "Gr&aacuteficos guardados"</button>
	</div>
	<script>document.getElementById('botonesGuardar').style.display = 'none';</script>
	</div>
	

    <!-- <div class="row">
        <div class="col-12">
            <h3>
                Nuevo gráfico
            </h3>
            <hr class="my-3">
            </hr>
        </div>
        <div class="col-md-3">
            <form>
                <h5 class="mt-4">
                    Elegir tipo de gráfico
                </h5>
                <div class="form-group">
                    <select class="form-control" id="exampleSelect1">
                        <option>
                            Líneas
                        </option>
                        <option>
                            Barras
                        </option>
                        <option>
                            Burbujas
                        </option>
                    </select>
                </div>
                <hr class="my-3">
                    <h5 class="mt-4">
                        Consulta por nombre
                    </h5>
                    <div class="form-group">
                        <input class="form-control" id="nombre" placeholder="Localización" type="text">
                        </input>
                    </div>
                    <button class="btn btn-primary" onclick="graficarPorNombre()">
                        Generar
                    </button>
                    <h5 class="mt-4">
                        Consulta por fechas
                    </h5>
                    <div class="form-group">
                        <label for="example-date-input">
                            Fecha inicial
                        </label>
                        <input class="form-control" id="fechaI" type="date" value="2017-01-01">
                        </input>
                    </div>
                    <div class="form-group">
                        <label for="example-date-input">
                            Fecha final
                        </label>
                        <input class="form-control" id="fechaF" type="date" value="2017-01-01">
                        </input>
                    </div>
                    <button class="btn btn-primary" onclick="graficar()">
                        Generar
                    </button>
                    <h5 class="mt-4">
                    Parámetros a considerar
                </h5>
                <div class="form-check">
                    <label class="form-check-label">
                        <input class="form-check-input mr-2" type="checkbox" value="">
                            Parámetro
                        </input>
                    </label>
                </div>
                <div class="form-check">
                    <label class="form-check-label">
                        <input class="form-check-input mr-2" type="checkbox" value="">
                            Parámetro
                        </input>
                    </label>
                </div>
                <button class="btn btn-primary mt-4" type="submit">
                    Generar
                </button>
                </hr>
            </form>
        </div>
        <div class="col-md-9">
            <canvas height="15" id="myChart" width="100%">
            </canvas>
        </div>
    </div> -->
</div>

<?php require "inc/footer.php";?>
