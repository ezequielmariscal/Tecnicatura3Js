// Creación de array o arreglos

//let autos = new Array('Ferrari', 'Renault', 'BMW')   //forma antigua de declarar variables, practicamente no se usa
const autos = ['Ferrari', 'Renault', 'BMW'];
console.log(autos);

// Recorremos los elementos de un arreglo
console.log(autos[0]); //Ferrari
console.log(autos[2]); //BMW

for(let i = 0; i < autos.length; i++){
    console.log(i+' : '+autos[i]); // me muestra todos los elementos
}

// Modificamos los elementos del array
autos[1] = 'Volvo';
console.log(autos[1]); // cambio a volvo 

// Agregamos nuevos valores al arreglo
autos.push('Audi'); // Agregamos un elemento al final del array
console.log(autos);

// Otras formas de agregar elementos al array
autos[autos.length] = 'Porche';
console.log(autos);

// Forma numero 3 (tener cuidado)
autos[6] = 'Renault';
console.log(autos);

// Como preguntar si es una Array?
console.log(Array.isArray(autos)); // Devuelve un boolean

console.log(autos instanceof Array); // Preguntamos si la var es una instancia de la clase Array