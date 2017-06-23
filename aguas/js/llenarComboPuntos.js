function llenarComboPunto(Punto) {
	return "<option value=\"" + Punto.nombre + "\">" + Punto.nombre + "</option>"
}

function parsearPuntos(puntos,html) {
	var nombres = [];
    for (var i = 0; i < puntos.length; i++) {
		if (!nombres.includes(puntos[i].nombre)) {
            nombres.push(puntos[i].nombre);
			html += llenarComboPunto(puntos[i]);
        }
    }
	return html;
}

function llenarComboParametro(Parametro) {
	return "<option value=\"" + Parametro + "\">" + Parametro + "</option>"
}

function parsearParametros(parametros,html) {
	var lParametros = [];	
    for (var i = 0; i < parametros.length; i++) {
		for (var key in parametros[i]) {
			if (typeof parametros[i][key] == 'number') {
				if (!lParametros.includes(key)) {
					lParametros.push(key);
					html += llenarComboParametro(key);
				}
			}
		}
    }
	return html;
}

function llenarPuntos() {
var json = {};
var html = "Punto de muestreo: <select id=\"punto\">";
$.ajax({
      url: "Mongui/getPuntos.php",
      async: false,
      dataType: 'json',
      success: function(data) {
        json = data;
      }
    });
html = parsearPuntos(json,html);
html += "</select>";
document.getElementById('comboPuntos').innerHTML = html;
}

function llenarParametros() {
	var json = {};
	var html = "Parámetro a analizar: <select id=\"parametro\">";
	$.ajax({
		  url: "Mongui/getPuntos.php",
		  async: false,
		  dataType: 'json',
		  success: function(data) {
			json = data;
		  }
		});
	html = parsearParametros(json,html);
	html += "</select>";
	document.getElementById('comboParametros').innerHTML = html;
}