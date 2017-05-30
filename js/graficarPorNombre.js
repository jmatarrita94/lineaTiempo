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

    function obtenerI_Hol(nombre) {
      var aux = [];
      for (var i = arrayOfObjects.length -1; i >= 0; i--) {
        var object = arrayOfObjects[i];
        if(object.nombre == nombre){
          aux.push(object["I-Hol"]);
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
      obtenerI_Hol(nombres[i]);
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
    debugger;
    var myChart = new Chart(ctx, {
      type: 'line',
      data: data
    });
  }
// });
