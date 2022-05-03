function NumeroMenor ()

{
var num1= parseInt(prompt("Ingrese un numero"));
console.log("El primer numero es: "+ num1);
var num2= parseInt(prompt("Ingrese un segundo numero"));
console.log("El segundo numero es: "+ num2);
var num3= parseInt(prompt("Ingrese un tercer numero"));
console.log("El tercer numero es: "+ num3);

if(num1 < num2 && num1 < num3)
{
    return num1;
}

if(num2 < num1 && num2 < num3)
{
    return num2;
}

else
{
    return num3
}

}

console.log("El numero menor es: "+ NumeroMenor())
