var cantidad_km = prompt("Ingrese la cantidad de km recorridos por la motocicleta ");
console.log("Kilometros recorridos :"+cantidad_km);

var cantidad_lt = prompt("Ingrese la cantidad de litros que consumio en el recorrido ");
console.log("Litros de combustible gastados :"+cantidad_lt);

var consumo = parseFloat(cantidad_km) / parseFloat(cantidad_lt);
console.log(" El consumo por kilometro es de : " + consumo);