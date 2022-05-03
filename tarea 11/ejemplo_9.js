function contarTexto (texto) {
    let contadorTexto =0;
    let indice = [ "a", "e" ]

     for(let i =0; i < texto.length; ++i) {
         if (indice.indexof(texto[i]) >= 0) {
             ++contadorTexto;
         }
     }

     return contadorTexto;

}

console.log(contarTexto("ingrese un numero positivo menor a"));
