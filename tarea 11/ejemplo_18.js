function numero()
{
var num1=parseInt(prompt("ingrese un numero"));
console.log("numero: "+ num1)
var num2=parseInt(prompt("ingrese un numero"));
console.log("numero: "+ num2)


if (num1>num2 || num1 ==num2)
{
    return num1
    console.log("numero1")
}
else 
{
    return num2
    console.log("numero2")
}
}

console.log("el numero mayor : " + numero())