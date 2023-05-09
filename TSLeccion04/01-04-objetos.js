// Var primitiva
let x = 10; 
console.log(x.length);
// Pongo unos log para diferenciar en consola lo q vemos
console.log('Tipos primitivos');

// Object
let persona = {
    nombre: 'Carlos',
    apellido: 'Gil',
    email: 'cgil@gmail.com',
    edad: 28,
    idioma: 'ES',
    nombreCompleto: function(){
        return this.nombre+' '+this.apellido; //this apunta al object q se esta trabajando en este momento
    },
    get nombreEdad(){
        return 'El nombre es: '+this.nombre+', Edad: '+this.edad; 
    },
    get lang(){
        return this.idioma.toUpperCase(); // Convierte las minusculas a mayus
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    }

} // se crea un objeto con sus distintas var...

console.log(persona.nombre); //accedemos a Carlos
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona.email);
console.log(persona); // aca accedo a todo

// Agregar un nuevo metodo a un objeto (ver linea 11)
// como accedo?

console.log(persona.nombreCompleto()); // Carlos Gil

// Pongo unos log para diferenciar en consola lo q vemos
console.log('Ejecutando con un objeto');

// Creamos un nuevo object

let persona2 = new Object(); // Debe crear un nuevo objeto en memoria
persona2.nombre = 'Juan';
persona2.direccion = 'Salada 14';
persona2.telefono = '03030456';
console.log(persona2.telefono);

// Pongo unos log para diferenciar en consola lo q vemos
console.log("Creamos un nuevo objeto");

// Como acceder a las propiedades de los object desde otra manera?

console.log(persona['apellido']); // Accedemos como si fuera un Array

// Pongo unos log para diferenciar en consola lo q vemos
console.log("Cambiamos y eliminamos un error");

// for in

for(propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}

// Agregar o eliminar object

//Agregar

persona.apellido = 'Betancud'; // cambiamos dinamicamente el valor de un object
console.log(persona);

//Eliminar

persona.apellida = 'benntacud';
delete persona.apellida; // Elimina lo que por error creamos

// Distintas formas de imprimir un object
console.log('Distintas formas de imprimir un object');

// Numero 1 : la mas sencilla : concatenar cada valor de cada propiedad
console.log('forma1');

console.log(persona.nombre + ', ' + persona.apellido);

// Numero 2 : A travez del ciclo for in
console.log('forma2');

for(nombrePropiedad in persona){
    console.log((persona[nombrePropiedad]));
}

// Numero 3: La funcion Object.values()
console.log('forma3');

let personaArray = Object.values(persona);
console.log(personaArray);

// Numero 4: Utilizaremos el metodo JSON.stringify
console.log('forma4');

let personaString = JSON.stringify(persona);
console.log(personaString);

// Numero 5 : Introduccion al GET

console.log('Comenzamos a utilizar el metodo get');
console.log(persona.nombreEdad);

// Numero 6 : Introduccion al metodo SET

console.log('Comenzamos con el metodo get y set para idiomas');
persona.lang = 'en';
console.log(persona.lang); // sin parentesis xq es un get

// Numero 7 : Comenzamos a crear un contructor

function persona3(nombre, apellido, email){ // constructor
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){ // insertamos a la fx metodos para imprimir otras var
        return this.nombre+' '+this.apellido;
    }
}
let padre = new persona3 ('Leo', 'Lopez', 'lopezl@gmail.com');
console.log(padre);
console.log(padre.nombreCompleto()); // utilizamos la fx

let madre = new persona3('Laura', 'Contrera', 'contreral@gmail.com');
console.log(madre);
console.log(madre.nombreCompleto());

// Numero 8 Distintas formas de crear objetos en contructor

// caso1
let miObjeto = new Object(); // Esta es una opcion formal
// caso2
let miObjeto2 = {}; // Esta opciono es breve y recomendada

// caso String 1
let miCadena1 = new String('Hola'); // Sintaxis formal
// caso String 2 
let miCadena2 = 'Hola'; //Esta es la sintaxis simplificada y recomendada

// caso con numeros 1
let miNumero = new Number(1); // Es forma no recomendable
// caso con numeros 2
let miNumero2 = 1;

// caso boolean 1
let miBoolean1 = new Boolean(false); // Formal
// caso boolean 2
let miBoolean2 = false; // Sintaxis recomendada

// caso Arreglos 1 
let miArrreglo1 = new Array(); // Formal
// caso Arreglos 2
let miArreglo2 = []; // Sintaxis recomendada

// caso function 1 
let miFuncion1 = new function(){}; // Todo despues de new es considerado objeto
// caso function 2
let miFuncion2 = function(){}; // Notacion simplificada y recomendada




