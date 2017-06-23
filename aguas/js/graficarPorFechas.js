var datosGrafico = "";
function graficar() {
    //Obtener variables de la página
    var fechaIni = new Date(document.getElementById('fechaI').value).getTime();
    var fechaFin = new Date(document.getElementById('fechaF').value).getTime();
	var idUsuario = 01;
    var parametro = document.getElementById("parametro").value;
	var tipoGrafico = '';
	if (document.getElementById("btnLinea").checked) {
		tipoGrafico = 'line';
	} else {
		tipoGrafico = 'bar';
	}
    var ctx = document.getElementById('myChart').getContext('2d');
    ctx.canvas.width = 1200;
    ctx.canvas.height = 400;
    var fechas = [];
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
        // debugger;
        var fechai = new Date(Number(object.fecha.$date.$numberLong)).toDateString();
        if (!fechas.includes(fechai)) {
            fechas.push(fechai);
        }
    }
    for (var i = 0; i < nombres.length; i++) {
        obtenerParametro(nombres[i]);
    }
    debugger;
    var data = {
        labels: fechas,
        datasets: [{
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
        }]
    };
    datosGrafico = JSON.stringify(data);
	datosGrafico = datosGrafico.slice(0,datosGrafico.length-1);
    var myChart = new Chart(ctx, {
        type: tipoGrafico,
        data: data
    });
	document.getElementById('textboxNombreGrafico').style.display = 'block';
	document.getElementById('botonesGuardar').style.display = 'block';	
}
// });