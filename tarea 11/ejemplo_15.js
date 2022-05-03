function Validar()
{
var palabra1=prompt("ingrese una palabra ");
console.log("una palabra es "+ palabra1);

var palabra2 = prompt("ingrese otra palabra");
console.log(" otra palabra es "+palabra2);


if ( palabra1.length < palabra2.length)
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
Validar();