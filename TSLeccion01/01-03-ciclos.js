// While
let contador = 0;
while(contador < 3){
    console.log(contador);
    contador++;
}
console.log("Fin del ciclo while");

// do While
let conteo = 0;
do{
    console.log(conteo);
    conteo++;
}while(conteo < 3);
console.log("Fin del ciclo do while");

// for
for (let contando = 0; contando < 3; contando++){
    console.log(contando);
}
console.log("Fin del ciclo for");

// Palabra reservada break
for(let contando = 0; contando <= 10; contando++){
    if(contando % 2 == 0){
        console.log(contando); // muestra todos los pares
        break; // va a mostrar solo el 1er numero par y despues romper el ciclo for
    }
}
console.log("Termina el ciclo al encontrar el primer numero par");
f

// La palabra continue
for(let contando = 0; contando <= 10; contando++){
    if(contando % 2 !== 0){  //hago una comparacion
        continue; // continua a la siguiente iteracion        
    }
    console.log(contando);
}
console.log("Termina el ciclo");

// Etiquetas Labels - nos permite ir a una parte de mi codigo que nosotro querramos (no es recomendable usar)
inicio:
for(let contando = 0; contando <= 10; contando++){
    if(contando % 2 !== 0){  //hago una comparacion
        continue inicio; // continua a la siguiente iteracion        
    }
    console.log(contando);
}
console.log("Termina el ciclo");