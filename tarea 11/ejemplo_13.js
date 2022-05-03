function validar(){

var edad = parseInt(prompt("Ingrese su edad"))
console.log("Tu edad "+edad);
var articulos = parseInt(prompt("cantidad de articulos comprados"))
console.log("Articulos comprados "+ articulos);

if ( edad  >=18 && articulos >1)
{
   return true;
   console.log("true")
}
   
else 
{
    return false;
   console.log("false")
}

}
validar();