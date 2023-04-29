function miFuncion(a, b){
    //console.log("Sumamos: "+ (a+b));
    return a+b;
}
//Llamamos la funcion
miFuncion(5,4);

let resultado = miFuncion(6, 7);
console.log(resultado);

//Declaramos una funcion de tipo expresion o anonimas
let x = function(a, b){ return a +b}; // necesita cierre con punto y com
resultado = x(resultado); // al llamarla se pone la var y parentesis
console.log(resultado);

//Funcion de tipo self y invoking
(function(a, b){
    console.log("Ejecutamos la fx: "+( a + b)); // esta fx no es reutilizable solo se utiliza para esta ocasion
})(9, 6);

console.log(typeof miFuncion);
function miFuncionDos(a, b){
    console.log(arguments.length); // pregunta cuantos argumentos tiene... 
}

miFuncionDos(5, 7, 3);

// toString
var miFuncionTexto = miFuncion.toString(); // transforma el valor en una cadena string
console.log(miFuncionTexto);

// Funciones flecha (Arrow)
const sumarFuncionFlecha = (a, b) => a + b;
resultado = sumarFuncionFlecha(3, 7); // Asignamos el valor a una variable
console.log(resultado);

// Argumentos y parametros
let sumar = function(a = 4, b = 8){ // en js no es necesario q coincidan los parametros con los numeros de argumentos
    console.log(arguments[0]);// muestra el parametro de: a
    console.log(arguments[1]); // muestra el parametro de: b
    console.log(arguments[2]); // muestra el parametro de: c?
    return a + b;
}
resultado = sumar(3, 2, 9);
console.log(resultado);

// Concepto Hosting(llamar a la funcion antes de ser definida o creada) - Sumar todos los argumentos
let respuestas = sumarTodo(5, 4, 13, 10, 9);
console.log(respuesta);
function sumarTodo(){
    let suma = 0;
    for (let i = 0; i< arguments.length; i++) {
      suma += arguments[i]; //arguments es para arreglos
    }
    return suma;
}

// Paso por valor o paso por referencia
// Tipos primitivos
let k = 10;
function cambiarValor(a){ //Paso por valor = la var no recibe ningun cambio
    a = 20;
}
cambiarValor(k); // paso este parametro x valor .. la fx no modifica la variable
console.log(k);

// Paso por referencia
const Persona = {
    nombre: 'Juan',
    apellido: 'Lepez'
}
console.log(persona);

function cambiarValoresObjeto(p1) {
    p1.nombre = 'Ignacio';
    p1.apellido = 'Perez';
}

cambiarValoresObjeto(persona);
console.log(persona);
