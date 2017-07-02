function guardarGrafi() {
		$.ajax({
    type: 'POST',
    url: 'baseDatos/getGraficos.php',
    data: {json: datosGrafico},
    dataType: 'json'
})
.done( function( data ) {
	alert("Gráfico guardado correctamente.");
	document.getElementById("btnGuardarMongo").disabled = true;
})
.fail( function( data ) {
    console.log('fail');
    console.log(data);
});

  }
