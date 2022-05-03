function validarshowsMusicales()
{
var showsMusicales= parseInt(prompt("Ingresar a cuantos shows musicales ha visto en el ultimo año"))
console.log("shows vistos en el año: " + showsMusicales)

if (showsMusicales< 9)
{
 return false
} 
else
{
    return true
}
}
 validarshowsMusicales();