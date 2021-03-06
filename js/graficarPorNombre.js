var datosGrafico = "";
function datosBurbuja(fechas,indices,nombres) {
	return {};
}

function datosXY(fechas,indices,nombres) {
	return {
			labels: fechas,
			datasets: [
			{
				label: nombres[0],
				// fillColor: "rgba(220,220,220,0.2)",
				// strokeColor: "rgba(220,220,220,1)",
				// pointColor: "rgba(220,220,220,1)",
				// pointStrokeColor: "#fff",
				// pointHighlightFill: "#fff",
				// pointHighlightStroke: "rgba(220,220,220,1)",
				borderColor: "rgba(255, 0, 0, 0.4)",
				fill: false,
				data: indices[0]
			}
			]
		};
}

function datosArea(fechas,indices,nombres) {
	return {
			labels: fechas,
			datasets: [
			{
				label: nombres[0],
				// fillColor: "rgba(220,220,220,0.2)",
				// strokeColor: "rgba(220,220,220,1)",
				// pointColor: "rgba(220,220,220,1)",
				// pointStrokeColor: "#fff",
				// pointHighlightFill: "#fff",
				// pointHighlightStroke: "rgba(220,220,220,1)",
				backgroundColor: "rgba(255, 0, 0, 0.4)",
				data: indices[0]
			}
			]
		};
}

function graficarPorNombre() {
    //Obtener variables de la página	
	$('#myChart').remove(); 
	$('#canvasGrafico').append('<canvas id="myChart" width="100%" height="15"></canvas>');
    var lugar = document.getElementById("punto").value;
	var parametro = document.getElementById("parametro").value;
	var tipoGrafico = '';
	if (document.getElementById("btnArea").checked || document.getElementById("btnXY").checked) {
		tipoGrafico = 'line';
	} else {
		tipoGrafico = 'bubble';
	}
    var ctx = document.getElementById('myChart').getContext('2d');
    ctx.canvas.width = 1000;
    ctx.canvas.height = 400;
    var fechas = [];
    var indices = [];
    var nombres = [];
    var arrayOfObjects = [];
    $.ajax({
        url: "Mongui/buscarPorNombre.php?nombre=" + lugar,
        async: false,
        dataType: 'json',
        success: function(data) {
            arrayOfObjects = data;
        }
    });

    function obtenerParametro(nombre) {
        var aux = [];
        for (var i = 0; i < arrayOfObjects.length; i++) {
            var object = arrayOfObjects[i];
            if (object.nombre == nombre) {
                aux.push(object[parametro]);
            }
        }
        indices.push(aux);
    }
    //guardar en nombres todos los no repetidos y las fechas
    for (var i = arrayOfObjects.length - 1; i >= 0; i--) {
        var object = arrayOfObjects[i];
        if (!nombres.includes(object.nombre)) {
            nombres.push(object.nombre);
        }
        // debugger;
		var fechaObj = new Date(Number(object.fecha.$date.$numberLong));
		fechaObj.setHours(fechaObj.getHours()+24);
        var fechai = fechaObj.toDateString();
        if (!fechas.includes(fechai)) {
            fechas.push(fechai);
        }
    }
    for (var i = 0; i < nombres.length; i++) {
        obtenerParametro(nombres[i]);
    }
    var data = {};
	if (document.getElementById("btnBurbuja").checked) {
		data = datosBurbuja(fechas,indices,nombres);
	} else if (document.getElementById("btnXY").checked) {
		data = datosXY(fechas,indices,nombres);
	} else {
		data = datosArea(fechas,indices,nombres);
	}
	var opciones = {scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
	}};
    datosGrafico = JSON.stringify(data);
	datosGrafico = datosGrafico.slice(0,datosGrafico.length-1);
	var canvas = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
        type: tipoGrafico,
        data: data,
		options: opciones
    });
	document.getElementById('textboxNombreGrafico').style.display = 'block';
	document.getElementById('botonesGuardar').style.display = 'block';
}
// });