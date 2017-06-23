function guardarGrafi() {
	datosGrafico += ", \"NombreGrafico\" : \"" + document.getElementById("nombreGrafico").value + "\"}";
		$.ajax({
    type: 'POST',
    url: 'Mongui/guardaGrafi.php',
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
