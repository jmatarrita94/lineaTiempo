var datosGrafico = "";

function datosBurbujaF(fechas,indices,nombres) {
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
			}, {
				label: nombres[1],
				// fillColor: "rgba(151,187,205,0.2)",
				// strokeColor: "rgba(151,187,205,1)",
				// pointColor: "rgba(151,187,205,1)",
				// pointStrokeColor: "#fff",
				// pointHighlightFill: "#fff",
				// pointHighlightStroke: "rgba(151,187,205,1)",
				borderColor: "rgba(237, 180, 183,0.4)",
				fill: false,
				data: indices[1]
			}, {
				label: nombres[2],
				// fillColor: "rgba(255,153,0,0.4)",
				// strokeColor: "rgba(255,153,0,0.4)",
				// pointColor: "rgba(255,153,0,0.4)",
				// pointStrokeColor: "#103",
				// pointHighlightFill: "#a12",
				// pointHighlightStroke: "rgba(255,153,0,0.4)",
				borderColor: "rgba(0, 255, 0, 0.4)",
				fill: false,
				data: indices[2]
			}, {
				label: nombres[3],
				// fillColor: "rgba(255,153,0,0.4)",
				// strokeColor: "rgba(255,153,0,0.4)",
				// pointColor: "rgba(255,153,0,0.4)",
				// pointStrokeColor: "#103",
				// pointHighlightFill: "#a12",
				// pointHighlightStroke: "rgba(255,153,0,0.4)",
				borderColor: "rgba(0,0,255,0.4)",
				fill: false,
				data: indices[3]
			}, {
				label: nombres[4],
				// fillColor: "rgba(255,153,0,0.4)",
				// strokeColor: "rgba(255,153,0,0.4)",
				// pointColor: "rgba(255,153,0,0.4)",
				// pointStrokeColor: "#103",
				// pointHighlightFill: "#a12",
				// pointHighlightStroke: "rgba(255,153,0,0.4)",
				borderColor: "rgba(154, 153, 194,0.4)",
				fill: false,
				data: indices[4]
			}, {
				label: nombres[5],
				// fillColor: "rgba(255,153,0,0.4)",
				// strokeColor: "rgba(255,153,0,0.4)",
				// pointColor: "rgba(255,153,0,0.4)",
				// pointStrokeColor: "#103",
				// pointHighlightFill: "#a12",
				// pointHighlightStroke: "rgba(255,153,0,0.4)",
				borderColor: "rgba(188, 0, 190,0.4)",
				fill: false,
				data: indices[5]
			}, {
				label: nombres[6],
				// fillColor: "rgba(255,153,0,0.4)",
				// strokeColor: "rgba(255,153,0,0.4)",
				// pointColor: "rgba(255,153,0,0.4)",
				// pointStrokeColor: "#103",
				// pointHighlightFill: "#a12",
				// pointHighlightStroke: "rgba(255,153,0,0.4)",
				borderColor: "rgba(1, 188, 190,0.4)",
				fill: false,
				data: indices[6]
			}, {
				label: nombres[7],
				// fillColor: "rgba(255,153,0,0.4)",
				// strokeColor: "rgba(255,153,0,0.4)",
				// pointColor: "rgba(255,153,0,0.4)",
				// pointStrokeColor: "#103",
				// pointHighlightFill: "#a12",
				// pointHighlightStroke: "rgba(255,153,0,0.4)",
				borderColor: "rgba(219, 216, 0,0.4)",
				fill: false,
				data: indices[7]
			}, {
				label: nombres[8],
				// fillColor: "rgba(255,153,0,0.4)",
				// strokeColor: "rgba(255,153,0,0.4)",
				// pointColor: "rgba(255,153,0,0.4)",
				// pointStrokeColor: "#103",
				// pointHighlightFill: "#a12",
				// pointHighlightStroke: "rgba(255,153,0,0.4)",
				borderColor: "rgba(254, 132, 10,0.4)",
				fill: false,
				data: indices[8]
			}, {
				label: nombres[9],
				// fillColor: "rgba(255,153,0,0.4)",
				// strokeColor: "rgba(255,153,0,0.4)",
				// pointColor: "rgba(255,153,0,0.4)",
				// pointStrokeColor: "#103",
				// pointHighlightFill: "#a12",
				// pointHighlightStroke: "rgba(255,153,0,0.4)",
				borderColor: "rgba(153,255,51,0.4)",
				fill: false,
				data: indices[9]
			}
			]
		};
}

function datosAreaF(fechas,indices,nombres) {
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
			}, {
				label: nombres[1],
				// fillColor: "rgba(151,187,205,0.2)",
				// strokeColor: "rgba(151,187,205,1)",
				// pointColor: "rgba(151,187,205,1)",
				// pointStrokeColor: "#fff",
				// pointHighlightFill: "#fff",
				// pointHighlightStroke: "rgba(151,187,205,1)",
				backgroundColor: "rgba(237, 180, 183,0.4)",
				data: indices[1]
			}, {
				label: nombres[2],
				// fillColor: "rgba(255,153,0,0.4)",
				// strokeColor: "rgba(255,153,0,0.4)",
				// pointColor: "rgba(255,153,0,0.4)",
				// pointStrokeColor: "#103",
				// pointHighlightFill: "#a12",
				// pointHighlightStroke: "rgba(255,153,0,0.4)",
				backgroundColor: "rgba(0, 255, 0, 0.4)",
				data: indices[2]
			}, {
				label: nombres[3],
				// fillColor: "rgba(255,153,0,0.4)",
				// strokeColor: "rgba(255,153,0,0.4)",
				// pointColor: "rgba(255,153,0,0.4)",
				// pointStrokeColor: "#103",
				// pointHighlightFill: "#a12",
				// pointHighlightStroke: "rgba(255,153,0,0.4)",
				backgroundColor: "rgba(0,0,255,0.4)",
				data: indices[3]
			}, {
				label: nombres[4],
				// fillColor: "rgba(255,153,0,0.4)",
				// strokeColor: "rgba(255,153,0,0.4)",
				// pointColor: "rgba(255,153,0,0.4)",
				// pointStrokeColor: "#103",
				// pointHighlightFill: "#a12",
				// pointHighlightStroke: "rgba(255,153,0,0.4)",
				backgroundColor: "rgba(154, 153, 194,0.4)",
				data: indices[4]
			}, {
				label: nombres[5],
				// fillColor: "rgba(255,153,0,0.4)",
				// strokeColor: "rgba(255,153,0,0.4)",
				// pointColor: "rgba(255,153,0,0.4)",
				// pointStrokeColor: "#103",
				// pointHighlightFill: "#a12",
				// pointHighlightStroke: "rgba(255,153,0,0.4)",
				backgroundColor: "rgba(188, 0, 190,0.4)",
				data: indices[5]
			}, {
				label: nombres[6],
				// fillColor: "rgba(255,153,0,0.4)",
				// strokeColor: "rgba(255,153,0,0.4)",
				// pointColor: "rgba(255,153,0,0.4)",
				// pointStrokeColor: "#103",
				// pointHighlightFill: "#a12",
				// pointHighlightStroke: "rgba(255,153,0,0.4)",
				backgroundColor: "rgba(1, 188, 190,0.4)",
				data: indices[6]
			}, {
				label: nombres[7],
				// fillColor: "rgba(255,153,0,0.4)",
				// strokeColor: "rgba(255,153,0,0.4)",
				// pointColor: "rgba(255,153,0,0.4)",
				// pointStrokeColor: "#103",
				// pointHighlightFill: "#a12",
				// pointHighlightStroke: "rgba(255,153,0,0.4)",
				backgroundColor: "rgba(219, 216, 0,0.4)",
				data: indices[7]
			}, {
				label: nombres[8],
				// fillColor: "rgba(255,153,0,0.4)",
				// strokeColor: "rgba(255,153,0,0.4)",
				// pointColor: "rgba(255,153,0,0.4)",
				// pointStrokeColor: "#103",
				// pointHighlightFill: "#a12",
				// pointHighlightStroke: "rgba(255,153,0,0.4)",
				backgroundColor: "rgba(254, 132, 10,0.4)",
				data: indices[8]
			}, {
				label: nombres[9],
				// fillColor: "rgba(255,153,0,0.4)",
				// strokeColor: "rgba(255,153,0,0.4)",
				// pointColor: "rgba(255,153,0,0.4)",
				// pointStrokeColor: "#103",
				// pointHighlightFill: "#a12",
				// pointHighlightStroke: "rgba(255,153,0,0.4)",
				backgroundColor: "rgba(153,255,51,0.4)",
				data: indices[9]
			}
			]
		};
}

function datosXYF(fechas,indices,nombres) {
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
			}, {
				label: nombres[1],
				// fillColor: "rgba(151,187,205,0.2)",
				// strokeColor: "rgba(151,187,205,1)",
				// pointColor: "rgba(151,187,205,1)",
				// pointStrokeColor: "#fff",
				// pointHighlightFill: "#fff",
				// pointHighlightStroke: "rgba(151,187,205,1)",
				borderColor: "rgba(237, 180, 183,0.4)",
				fill: false,
				data: indices[1]
			}, {
				label: nombres[2],
				// fillColor: "rgba(255,153,0,0.4)",
				// strokeColor: "rgba(255,153,0,0.4)",
				// pointColor: "rgba(255,153,0,0.4)",
				// pointStrokeColor: "#103",
				// pointHighlightFill: "#a12",
				// pointHighlightStroke: "rgba(255,153,0,0.4)",
				borderColor: "rgba(0, 255, 0, 0.4)",
				fill: false,
				data: indices[2]
			}, {
				label: nombres[3],
				// fillColor: "rgba(255,153,0,0.4)",
				// strokeColor: "rgba(255,153,0,0.4)",
				// pointColor: "rgba(255,153,0,0.4)",
				// pointStrokeColor: "#103",
				// pointHighlightFill: "#a12",
				// pointHighlightStroke: "rgba(255,153,0,0.4)",
				borderColor: "rgba(0,0,255,0.4)",
				fill: false,
				data: indices[3]
			}, {
				label: nombres[4],
				// fillColor: "rgba(255,153,0,0.4)",
				// strokeColor: "rgba(255,153,0,0.4)",
				// pointColor: "rgba(255,153,0,0.4)",
				// pointStrokeColor: "#103",
				// pointHighlightFill: "#a12",
				// pointHighlightStroke: "rgba(255,153,0,0.4)",
				borderColor: "rgba(154, 153, 194,0.4)",
				fill: false,
				data: indices[4]
			}, {
				label: nombres[5],
				// fillColor: "rgba(255,153,0,0.4)",
				// strokeColor: "rgba(255,153,0,0.4)",
				// pointColor: "rgba(255,153,0,0.4)",
				// pointStrokeColor: "#103",
				// pointHighlightFill: "#a12",
				// pointHighlightStroke: "rgba(255,153,0,0.4)",
				borderColor: "rgba(188, 0, 190,0.4)",
				fill: false,
				data: indices[5]
			}, {
				label: nombres[6],
				// fillColor: "rgba(255,153,0,0.4)",
				// strokeColor: "rgba(255,153,0,0.4)",
				// pointColor: "rgba(255,153,0,0.4)",
				// pointStrokeColor: "#103",
				// pointHighlightFill: "#a12",
				// pointHighlightStroke: "rgba(255,153,0,0.4)",
				borderColor: "rgba(1, 188, 190,0.4)",
				fill: false,
				data: indices[6]
			}, {
				label: nombres[7],
				// fillColor: "rgba(255,153,0,0.4)",
				// strokeColor: "rgba(255,153,0,0.4)",
				// pointColor: "rgba(255,153,0,0.4)",
				// pointStrokeColor: "#103",
				// pointHighlightFill: "#a12",
				// pointHighlightStroke: "rgba(255,153,0,0.4)",
				borderColor: "rgba(219, 216, 0,0.4)",
				fill: false,
				data: indices[7]
			}, {
				label: nombres[8],
				// fillColor: "rgba(255,153,0,0.4)",
				// strokeColor: "rgba(255,153,0,0.4)",
				// pointColor: "rgba(255,153,0,0.4)",
				// pointStrokeColor: "#103",
				// pointHighlightFill: "#a12",
				// pointHighlightStroke: "rgba(255,153,0,0.4)",
				borderColor: "rgba(254, 132, 10,0.4)",
				fill: false,
				data: indices[8]
			}, {
				label: nombres[9],
				// fillColor: "rgba(255,153,0,0.4)",
				// strokeColor: "rgba(255,153,0,0.4)",
				// pointColor: "rgba(255,153,0,0.4)",
				// pointStrokeColor: "#103",
				// pointHighlightFill: "#a12",
				// pointHighlightStroke: "rgba(255,153,0,0.4)",
				borderColor: "rgba(153,255,51,0.4)",
				fill: false,
				data: indices[9]
			}
			]
		};
}

function datosAreaF(fechas,indices,nombres) {
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
			}, {
				label: nombres[1],
				// fillColor: "rgba(151,187,205,0.2)",
				// strokeColor: "rgba(151,187,205,1)",
				// pointColor: "rgba(151,187,205,1)",
				// pointStrokeColor: "#fff",
				// pointHighlightFill: "#fff",
				// pointHighlightStroke: "rgba(151,187,205,1)",
				backgroundColor: "rgba(237, 180, 183,0.4)",
				data: indices[1]
			}, {
				label: nombres[2],
				// fillColor: "rgba(255,153,0,0.4)",
				// strokeColor: "rgba(255,153,0,0.4)",
				// pointColor: "rgba(255,153,0,0.4)",
				// pointStrokeColor: "#103",
				// pointHighlightFill: "#a12",
				// pointHighlightStroke: "rgba(255,153,0,0.4)",
				backgroundColor: "rgba(0, 255, 0, 0.4)",
				data: indices[2]
			}, {
				label: nombres[3],
				// fillColor: "rgba(255,153,0,0.4)",
				// strokeColor: "rgba(255,153,0,0.4)",
				// pointColor: "rgba(255,153,0,0.4)",
				// pointStrokeColor: "#103",
				// pointHighlightFill: "#a12",
				// pointHighlightStroke: "rgba(255,153,0,0.4)",
				backgroundColor: "rgba(0,0,255,0.4)",
				data: indices[3]
			}, {
				label: nombres[4],
				// fillColor: "rgba(255,153,0,0.4)",
				// strokeColor: "rgba(255,153,0,0.4)",
				// pointColor: "rgba(255,153,0,0.4)",
				// pointStrokeColor: "#103",
				// pointHighlightFill: "#a12",
				// pointHighlightStroke: "rgba(255,153,0,0.4)",
				backgroundColor: "rgba(154, 153, 194,0.4)",
				data: indices[4]
			}, {
				label: nombres[5],
				// fillColor: "rgba(255,153,0,0.4)",
				// strokeColor: "rgba(255,153,0,0.4)",
				// pointColor: "rgba(255,153,0,0.4)",
				// pointStrokeColor: "#103",
				// pointHighlightFill: "#a12",
				// pointHighlightStroke: "rgba(255,153,0,0.4)",
				backgroundColor: "rgba(188, 0, 190,0.4)",
				data: indices[5]
			}, {
				label: nombres[6],
				// fillColor: "rgba(255,153,0,0.4)",
				// strokeColor: "rgba(255,153,0,0.4)",
				// pointColor: "rgba(255,153,0,0.4)",
				// pointStrokeColor: "#103",
				// pointHighlightFill: "#a12",
				// pointHighlightStroke: "rgba(255,153,0,0.4)",
				backgroundColor: "rgba(1, 188, 190,0.4)",
				data: indices[6]
			}, {
				label: nombres[7],
				// fillColor: "rgba(255,153,0,0.4)",
				// strokeColor: "rgba(255,153,0,0.4)",
				// pointColor: "rgba(255,153,0,0.4)",
				// pointStrokeColor: "#103",
				// pointHighlightFill: "#a12",
				// pointHighlightStroke: "rgba(255,153,0,0.4)",
				backgroundColor: "rgba(219, 216, 0,0.4)",
				data: indices[7]
			}, {
				label: nombres[8],
				// fillColor: "rgba(255,153,0,0.4)",
				// strokeColor: "rgba(255,153,0,0.4)",
				// pointColor: "rgba(255,153,0,0.4)",
				// pointStrokeColor: "#103",
				// pointHighlightFill: "#a12",
				// pointHighlightStroke: "rgba(255,153,0,0.4)",
				backgroundColor: "rgba(254, 132, 10,0.4)",
				data: indices[8]
			}, {
				label: nombres[9],
				// fillColor: "rgba(255,153,0,0.4)",
				// strokeColor: "rgba(255,153,0,0.4)",
				// pointColor: "rgba(255,153,0,0.4)",
				// pointStrokeColor: "#103",
				// pointHighlightFill: "#a12",
				// pointHighlightStroke: "rgba(255,153,0,0.4)",
				backgroundColor: "rgba(153,255,51,0.4)",
				data: indices[9]
			}
			]
		};
}

function graficar() {
    //Obtener variables de la página
	$('#myChart').remove(); 
	$('#canvasGrafico').append('<canvas id="myChart" width="100%" height="15"></canvas>');
    var fechaIni = new Date(document.getElementById('fechaI').value).getTime();
    var fechaFin = new Date(document.getElementById('fechaF').value).getTime();
    var parametro = document.getElementById("parametro").value;
	var tipoGrafico = '';
	if (document.getElementById("btnArea").checked || document.getElementById("btnXY").checked) {
		tipoGrafico = 'line';
	} else {
		tipoGrafico = 'bubble';
	}
	
    var ctx = document.getElementById('myChart').getContext('2d');
    ctx.canvas.width = 1200;
    ctx.canvas.height = 400;
    var fechas = [];
	var fechasNombre = [];
    var indices = [];
    var nombres = [];
    var arrayOfObjects = [];
    jQuery.ajax({
        url: "Mongui/buscarPorFechas.php?fechaIni=" + fechaIni + "&fechaFin=" + fechaFin,
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
    for (var i = 0; i < arrayOfObjects.length; i++) {
        var object = arrayOfObjects[i];
        if (!nombres.includes(object.nombre)) {
            nombres.push(object.nombre);
        }
        if (tipoGrafico == 'bubble') {
			//Hacer que se guarden las fechas como '12 oct 97' en el arreglo de fechas nombre y después hacer como un match entre el índice del label del gráfico y el de este arreglo
			var fechai = Number(object.fecha.$date.$numberLong);
		} else {
			var fechaObj = new Date(Number(object.fecha.$date.$numberLong));		
			fechaObj.setHours(fechaObj.getHours()+24);
			var fechai = fechaObj.toDateString();			
		}   
		if (!fechas.includes(fechai)) {
			fechas.push(fechai);
		}		
    }
    for (var i = 0; i < nombres.length; i++) {
        obtenerParametro(nombres[i]);
    }
    debugger;
    var data = {};
	if (document.getElementById("btnBurbuja").checked) {
		data = datosBurbujaF(fechas,indices,nombres);
	} else if (document.getElementById("btnXY").checked) {
		data = datosXYF(fechas,indices,nombres);
	} else {
		data = datosAreaF(fechas,indices,nombres);
	}
	if (tipoGrafico != 'bubble') {
		var opciones = {scales: {
			yAxes: [{
				ticks: {
					beginAtZero: true
				}
			}]
		}};	
	} else {
		var opciones = {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true
					}
				}],
				xAxes: [{
					ticks: {
						callback: function(value, index, values) {
							var fechaObj = new Date(Number(value));
							fechaObj.setHours(fechaObj.getHours()+24);
							return fechai = fechaObj.toDateString();
						}
					}
				}]
			}
		};	
	}
    datosGrafico = JSON.stringify(data);
	datosGrafico = datosGrafico.slice(0,datosGrafico.length-1);
    var myChart = new Chart(ctx, {
        type: tipoGrafico,
        data: data,
		options: opciones
    });
	document.getElementById('textboxNombreGrafico').style.display = 'block';
	document.getElementById('botonesGuardar').style.display = 'block';	
}
// });