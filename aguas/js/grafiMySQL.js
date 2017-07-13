/**
* Guarda los metadatos ingresados
**/
function guardarGrafi() {
	/** Obtener parámetros básicos **/
	var nombreGrafico = document.getElementById('nombreGrafico').value;
	if (document.getElementById("btnArea").checked) {
		var tipoGrafico = 'Area';
	} else if (document.getElementById("btnXY").checked) {
		var tipoGrafico = 'XY';
	} else {
		var tipoGrafico = 'Burbuja';
	}	
    var primerPar = document.getElementById("parametro").value;
	
	/** Preparar los parámetros para el PHP, según el tipo de gráfico y de consulta **/
	if (!graficoNombre) {
		//Consulta por fechas
		var fechaInicio = new Date(document.getElementById('fechaI').value).getTime();
		var fechaFinal = new Date(document.getElementById('fechaF').value).getTime();
		var urlPHP = 'nombreGrafico=' + nombreGrafico +
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
		//Consulta por punto de muestreo
		var puntoMuestreo = document.getElementById("punto").value;
		var urlPHP = 'nombreGrafico=' + nombreGrafico +
				'&puntoMuestreo=' + puntoMuestreo +
				'&tipoGrafico=' + tipoGrafico +
				'&primerPar=' + primerPar +
				'&tipoConsulta=Nombre';
		if (tipoGrafico == "Burbuja") {
			var segundoPar = document.getElementById("parametro2").value;
			urlPHP += '&segundoPar=' + segundoPar;
		}
	}
	
	/** Llamar al PHP con los parámetros obtenidos **/
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

/**
* Recorre la comboBox ingresada y marca el índice que corresponda al parámetro ingresado
* @param combo Objeto que contiene la comboBox
* @param parametro Parametro a buscar
* @return true si se encontró el parámetro en la comboBox
**/
function marcarCombo(combo,parametro) {
	var parametros = combo.options;
	for (var i = 0 ; i < parametros.length; i++) {
        if (parametros[i].value == parametro) {
            combo.selectedIndex = i;
            return true;
        }
    }
    return false;
}

/**
* Carga los metadatos de un gráfico y lo grafica
**/
function cargarGrafi() {
	/** Obtener ID del gráfico y los datos correspondientes **/
	var idGrafico = '2017-07-13 10:38:34'; //Obtener de la página
	var datosGrafico = [];
	$.ajax({
        url: "baseDatos/cargarGrafico.php?idGrafico=" + idGrafico,
        async: false,
        dataType: 'json',
        success: function(data) {
            datosGrafico = data;
        }
    });
	
	/** Seleccionar los valores según lo obtenido **/
	marcarCombo(document.getElementById('parametro'),datosGrafico.primerParametro);
	if (datosGrafico.tipoGrafico == "Area") document.getElementById('btnArea').checked = true;
	else if (datosGrafico.tipoGrafico == "XY") document.getElementById('btnXY').checked = true;
	else {
		document.getElementById('btnBurbuja').checked = true;
		document.getElementById('comboParametros2').style.display = 'block';
		marcarCombo(document.getElementById('parametro2'),datosGrafico.segundoParametro);
	}
	
	if (datosGrafico.tipoConsulta == "Fechas") {
		var fechaInicio = new Date(parseInt(datosGrafico.fechaInicio));
		var fechaFinal = new Date(parseInt(datosGrafico.fechaFinal));
		fechaInicio.setHours(fechaInicio.getHours()+24);
		fechaFinal.setHours(fechaFinal.getHours()+24);
		var sFechaI = fechaInicio.getFullYear() + "-" + (("0"+(fechaInicio.getMonth()+1)).slice(-2)) + "-" + (("0"+fechaInicio.getDate()).slice(-2));
		var sFechaF = fechaFinal.getFullYear() + "-" + (("0"+(fechaFinal.getMonth()+1)).slice(-2)) + "-" + (("0"+fechaFinal.getDate()).slice(-2));
		document.getElementById('fechaI').value = sFechaI;
		document.getElementById('fechaF').value = sFechaF;
	} else {
		marcarCombo(document.getElementById('punto'),datosGrafico.puntoMuestreo);
	}
	
	/** Graficar según el tipo de consulta **/
	graficar(datosGrafico.tipoConsulta);
	document.getElementById('nombreGrafico').value = datosGrafico.nombreGrafico;
}