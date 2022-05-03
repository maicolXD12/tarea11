function caracter(){

var frase =prompt("Ingrese una frase")
console.log("ingresa un frase "+frase);
console.log(frase.length);

if ( frase.length % 2 == 0)
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
caracter();
