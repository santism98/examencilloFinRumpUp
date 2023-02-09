function compruebaCondiciones (){
    let num1 = prompt('Ingresa el primer número:' );
    let num2 = prompt ('Ingresa el segundo número:');
    if (num1%2==1 && num2%2==1 && num1%25==0 && num2%25==0){
        alert('Los dos cumplen las codiciones');
        } else if (num1%2==1 && num2%2==1 && !( num1%25==0 && num2%25==0)){ 
            alert('El primer número no cumple las condiciones');
            } else if (!(num1%2==1 && num2%2==1) && num1%25==0 && num2%25==0){
                alert('El segundo número no cumple las condiciones');
            } else {
                alert('Ninguno cumple las condiciones');
            }
}

function compruebaLetra (){
    let palabra = prompt('Escribe la palabra que quieras comprobar');
    if ((palabra [0]  == ('S')) ||((palabra [0]  =='s') )){
        alert('La palabra introducida cumple las condiciones');
    } else if (( palabra [palabra.length -1]) =='S' || ( palabra [palabra.length -1]) =='s'){
        alert('La palabra introducida cumple las condiciones');
    }
}