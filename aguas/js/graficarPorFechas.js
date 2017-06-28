var datosGrafico = "";

function datosBurbujaF(fechas,indices,indices2,nombres) {
	return {
		datasets: [{
			label: nombres[0],
			data: [{
			  x: fechas[0],
			  y: indices[0][0],
			  r: indices2[0][0]
			}, {
			  x: fechas[1],
			  y: indices[0][1],
			  r: indices2[0][1]
			}, {
			  x: fechas[2],
			  y: indices[0][2],
			  r: indices2[0][2]
			}, {
			  x: fechas[3],
			  y: indices[0][3],
			  r: indices2[0][3]
			}, {
			  x: fechas[4],
			  y: indices[0][4],
			  r: indices2[0][4]
			}, {
			  x: fechas[5],
			  y: indices[0][5],
			  r: indices2[0][5]
			}],
		 backgroundColor: "rgba(255, 0, 0, 0.4)"
		},{
			label: nombres[1],
			data: [{
			  x: fechas[0],
			  y: indices[1][0],
			  r: indices2[1][0]
			}, {
			  x: fechas[1],
			  y: indices[1][1],
			  r: indices2[1][1]
			}, {
			  x: fechas[2],
			  y: indices[1][2],
			  r: indices2[1][2]
			}, {
			  x: fechas[3],
			  y: indices[1][3],
			  r: indices2[1][3]
			}, {
			  x: fechas[4],
			  y: indices[1][4],
			  r: indices2[1][4]
			}, {
			  x: fechas[5],
			  y: indices[1][5],
			  r: indices2[1][5]
			}],
		 backgroundColor: "rgba(237, 180, 183,0.4)"
		},{
			label: nombres[2],
			data: [{
			  x: fechas[0],
			  y: indices[2][0],
			  r: indices2[2][0]
			}, {
			  x: fechas[1],
			  y: indices[2][1],
			  r: indices2[2][1]
			}, {
			  x: fechas[2],
			  y: indices[2][2],
			  r: indices2[2][2]
			}, {
			  x: fechas[3],
			  y: indices[2][3],
			  r: indices2[2][3]
			}, {
			  x: fechas[4],
			  y: indices[2][4],
			  r: indices2[2][4]
			}, {
			  x: fechas[5],
			  y: indices[2][5],
			  r: indices2[2][5]
			}],
		 backgroundColor: "rgba(0, 255, 0, 0.4)"
		},{
			label: nombres[3],
			data: [{
			  x: fechas[0],
			  y: indices[3][0],
			  r: indices2[3][0]
			}, {
			  x: fechas[1],
			  y: indices[3][1],
			  r: indices2[3][1]
			}, {
			  x: fechas[2],
			  y: indices[3][2],
			  r: indices2[3][2]
			}, {
			  x: fechas[3],
			  y: indices[3][3],
			  r: indices2[3][3]
			}, {
			  x: fechas[4],
			  y: indices[3][4],
			  r: indices2[3][4]
			}, {
			  x: fechas[5],
			  y: indices[3][5],
			  r: indices2[3][5]
			}],
		 backgroundColor: "rgba(0,0,255,0.4)"
		},{
			label: nombres[4],
			data: [{
			  x: fechas[0],
			  y: indices[4][0],
			  r: indices2[4][0]
			}, {
			  x: fechas[1],
			  y: indices[4][1],
			  r: indices2[4][1]
			}, {
			  x: fechas[2],
			  y: indices[4][2],
			  r: indices2[4][2]
			}, {
			  x: fechas[3],
			  y: indices[4][3],
			  r: indices2[4][3]
			}, {
			  x: fechas[4],
			  y: indices[4][4],
			  r: indices2[4][4]
			}, {
			  x: fechas[5],
			  y: indices[4][5],
			  r: indices2[4][5]
			}],
		 backgroundColor: "rgba(0,0,255,0.4)"
		},{
			label: nombres[5],
			data: [{
			  x: fechas[0],
			  y: indices[5][0],
			  r: indices2[5][0]
			}, {
			  x: fechas[1],
			  y: indices[5][1],
			  r: indices2[5][1]
			}, {
			  x: fechas[2],
			  y: indices[5][2],
			  r: indices2[5][2]
			}, {
			  x: fechas[3],
			  y: indices[5][3],
			  r: indices2[5][3]
			}, {
			  x: fechas[4],
			  y: indices[5][4],
			  r: indices2[5][4]
			}, {
			  x: fechas[5],
			  y: indices[5][5],
			  r: indices2[5][5]
			}],
		 backgroundColor: "rgba(188, 0, 190,0.4)"
		},{
			label: nombres[6],
			data: [{
			  x: fechas[0],
			  y: indices[6][0],
			  r: indices2[6][0]
			}, {
			  x: fechas[1],
			  y: indices[6][1],
			  r: indices2[6][1]
			}, {
			  x: fechas[2],
			  y: indices[6][2],
			  r: indices2[6][2]
			}, {
			  x: fechas[3],
			  y: indices[6][3],
			  r: indices2[6][3]
			}, {
			  x: fechas[4],
			  y: indices[6][4],
			  r: indices2[6][4]
			}, {
			  x: fechas[5],
			  y: indices[6][5],
			  r: indices2[6][5]
			}],
		 backgroundColor: "rgba(1, 188, 190,0.4)"
		},{
			label: nombres[0],
			data: [{
			  x: fechas[0],
			  y: indices[7][0],
			  r: indices2[7][0]
			}, {
			  x: fechas[1],
			  y: indices[7][1],
			  r: indices2[7][1]
			}, {
			  x: fechas[2],
			  y: indices[7][2],
			  r: indices2[7][2]
			}, {
			  x: fechas[3],
			  y: indices[7][3],
			  r: indices2[7][3]
			}, {
			  x: fechas[4],
			  y: indices[7][4],
			  r: indices2[7][4]
			}, {
			  x: fechas[5],
			  y: indices[7][5],
			  r: indices2[7][5]
			}],
		 backgroundColor: "rgba(219, 216, 0,0.4)"
		},{
			label: nombres[8],
			data: [{
			  x: fechas[0],
			  y: indices[8][0],
			  r: indices2[8][0]
			}, {
			  x: fechas[1],
			  y: indices[8][1],
			  r: indices2[8][1]
			}, {
			  x: fechas[2],
			  y: indices[8][2],
			  r: indices2[8][2]
			}, {
			  x: fechas[3],
			  y: indices[8][3],
			  r: indices2[8][3]
			}, {
			  x: fechas[4],
			  y: indices[8][4],
			  r: indices2[8][4]
			}, {
			  x: fechas[5],
			  y: indices[8][5],
			  r: indices2[8][5]
			}],
		 backgroundColor: "rgba(254, 132, 10,0.4)"
		},{
			label: nombres[9],
			data: [{
			  x: fechas[0],
			  y: indices[9][0],
			  r: indices2[9][0]
			}, {
			  x: fechas[1],
			  y: indices[9][1],
			  r: indices2[9][1]
			}, {
			  x: fechas[2],
			  y: indices[9][2],
			  r: indices2[9][2]
			}, {
			  x: fechas[3],
			  y: indices[9][3],
			  r: indices2[9][3]
			}, {
			  x: fechas[4],
			  y: indices[9][4],
			  r: indices2[9][4]
			}, {
			  x: fechas[5],
			  y: indices[9][5],
			  r: indices2[9][5]
			}],
		 backgroundColor: "rgba(153,255,51,0.4)"
		}]
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
	var parametro2 = document.getElementById("parametro2").value;
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
    var indices = [];
    var indices2 = [];
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
        var aux2 = [];
        for (var i = 0; i < arrayOfObjects.length; i++) {
            var object = arrayOfObjects[i];
            if (object.nombre == nombre) {
                aux.push(object[parametro]);
                aux2.push(object[parametro2]);
            }
        }
        indices.push(aux);
		indices2.push(aux2);
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
		data = datosBurbujaF(fechas,indices,indices2,nombres);
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
				},
				scaleLabel: {
					display: true,
					labelString: parametro
				}
			}]
		}};	
	} else {
		var opciones = {
			scales: {
				yAxes: [{
				ticks: {
					beginAtZero: true
				},
				scaleLabel: {
					display: true,
					labelString: parametro
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