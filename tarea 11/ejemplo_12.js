function validarNum(){

var num = parseInt(prompt("Ingrese un numero entero"))
console.log("Numero entero "+num);

if ( num%2 == 0)
{
   return true;
   console.log("true"+num)
}
   
else 
{
    return false;
   console.log("false")
}

}
validarNum();