function cuentaPalabras () {
    let frase = prompt('Escribe la frase que quieras comprobar separadas por UN espacio');
    let cont =1; //el numero de palabras es 1 más que el numero de espacios
    for ( let i=0; i<frase.length; i++){
        if (frase [i] == ' '){
            cont++;
        }
    }
    alert("Tu frase tiene: "+ cont +"palabras");
}