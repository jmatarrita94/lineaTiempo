// $(document).ready(function() {
  function graficarPorNombre() {
    //Obtener variables de la página
    var lugar = document.getElementById('nombre').value;
    // debugger;
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
    
    var param = 7;
	
	switch(param){
		case 1: 
			var nomb = "I-Hol";
			break;
		case 2: 
			var nomb = "% O2";
			break;
		case 3:
			var nomb = "DBO";
			break;
		case 4:
			var nomb = "NH4";
			break;
		case 5:
			var nomb = "I_Hol2";
			break;
		case 6:
			var nomb = "CF";
			break;
		case 7: 
			var nomb = "DQO";
			break;
		case 8:
			var nomb = "EC";
			break;
		case 9:
			var nomb = "PO4";
			break;
		case 10:
			var nomb = "GYA";
			break;
		case 11:
			var nomb = "pH";
			break;
		case 12:
			var nomb = "SD";
			break;
		case 13:
			var nomb = "Ssed";
			break;
		case 14:
			var nomb = "SST";
			break;
		case 15: 
			var nomb = "SAAM";
			break;
		case 16:
			var nomb= "T";
			break;
		case 17:
			var nomb = "Aforo";
			break;
		case 18:
			var nomb = "N";
			break;
		case 19:
			var nomb = "NSFWQI";
			break;
		case 20:
			var nomb = "BMWP-CR";
			break;
	}
	
	alert(nomb);

    function obtenerParametro(nombre) {
      var aux = [];
      for (var i = arrayOfObjects.length -1; i >= 0; i--) {
        var object = arrayOfObjects[i];
        if(object.nombre == nombre){
          aux.push(object[nomb]);
        }
      }
      indices.push(aux);
    }

    //guardar en nombres todos los no repetidos y las fechas
    for (var i = arrayOfObjects.length -1; i >= 0; i--) {
      var object = arrayOfObjects[i];
      if(!nombres.includes(object.nombre)){
        nombres.push(object.nombre);
      }
      // debugger;
      var fechai = new Date(Number(object.fecha.$date.$numberLong)).toDateString();
      if(!fechas.includes(fechai)){
        fechas.push(fechai);
      }
    }
    for (var i = 0; i < nombres.length; i++) {
      obtenerParametro(nombres[i]);
    }


    var data = {
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
    
    //alert(data.length);
    //debugger;
    var myChart = new Chart(ctx, {
      type: 'line',
      data: data
    });
  }
// });
