function guardarGrafi() {
	var nombreGrafico = document.getElementById('nombreGrafico').value;
	var fechaCreacion = new Date();	
	if (document.getElementById("btnArea").checked) {
		var tipoGrafico = 'Area';
	} else if (document.getElementById("btnXY").checked) {
		var tipoGrafico = 'XY';
	} else {
		var tipoGrafico = 'Burbuja';
	}	
    var primerPar = document.getElementById("parametro").value;
	
	if (1 > 2) {
		var fechaInicio = new Date(document.getElementById('fechaI').value).getTime();
		var fechaFinal = new Date(document.getElementById('fechaF').value).getTime();
		var urlPHP = 'nombreGrafico=' + nombreGrafico +
				'&fechaCreacion=' + fechaCreacion.getFullYear() + '-' + fechaCreacion.getMonth() + '-' + fechaCreacion.getDate() +
				'&fechaInicio=' + fechaInicio +
				'&fechaFinal=' + fechaFinal +
				'&tipoGrafico=' + tipoGrafico +
				'&primerPar=' + primerPar +
				'&tipoConsulta=Fechas';
		if (tipoGrafico == "Burbuja") {			
			var segundoPar = document.getElementById("parametro2").value;
			urlPHP += '&segundoPar=' + segundoPar;
		}
	} else {
		var puntoMuestreo = document.getElementById("punto").value;
		var urlPHP = 'nombreGrafico=' + nombreGrafico +
				'&fechaCreacion=' + fechaCreacion.getFullYear() + '-' + fechaCreacion.getMonth() + '-' + fechaCreacion.getDate() +
				'&puntoMuestreo=' + puntoMuestreo +
				'&tipoGrafico=' + tipoGrafico +
				'&primerPar=' + primerPar +
				'&tipoConsulta=Nombre';
		if (tipoGrafico == "Burbuja") {
			var segundoPar = document.getElementById("parametro2").value;
			urlPHP += '&segundoPar=' + segundoPar;
		}
	}
	$.ajax({
		type: 'POST',
		url: "baseDatos/guardarGrafico.php",
        cache: false,
		data: urlPHP,
		success: function( data ) {
				console.log(data);
				alert("Gráfico guardado correctamente.");
				document.getElementById("btnGuardarMongo").disabled = true;
		}
	});
}