function Validar()
{
var nombre1=prompt("ingrese su nombre ");
console.log("tu nombre: "+ nombre1);

var nombre2 = prompt("ingrese otro nombre ");
console.log(" otra nombre: "+nombre2);


if(nombre1[0] == nombre2[0] || nombre1[nombre1.length-1] == nombre2[nombre2.length-1] )
{
    return true;
    console.log("true");
}
else
{
    return false;
    console.log("false")
}

}

 Validar()