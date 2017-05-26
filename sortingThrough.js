var arrayofObjects;//var json = require('./data.json');
//alert(json);
alert("llega aca");
debugger; 
var arrayOfObjects;
$.getJSON("results.json", function (data) {
       arrayOfObjects = data;
   });
  /* var data = [{"fecha":"fecha1","DBO":"dbo1"},{"fecha":"fecha2","DBO":"dbo2"},{"fecha":"fecha3","DBO":"dbo3"}];
  var fecha = [];
var dbo = []l;
    arrayOfObjects = data;
alert(arrayOfObjects.length);
for (var i = 0; i < arrayOfObjects.length; i++) {
    var object = arrayOfObjects[i];
    alert(object.fecha + ',' + object.DBO);
    fecha.push(object[i].fecha);
    dbo.push(object[i].DBO);    
}*/

//var arrayOfObjects = data;

for (var i = 0; i < arrayOfObjects.length; i++) {
    var object = arrayOfObjects[i];
    alert(object.nombre + ',' + object.fecha); 
    
    // If property names are known beforehand, you can also just do e.g.
    // 
}

alert("hola mundo");