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
padre.nombre = 'Luis'; // modificamos el nombre
padre.telefono = '5480456984505968'; // agrego un telefono
console.log(padre);
console.log(padre.nombreCompleto()); // utilizamos la fx

let madre = new persona3('Laura', 'Contrera', 'contreral@gmail.com');
console.log(madre);
console.log(madre.telefono); // me va a dar undefined
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

// Numero 8 - USO DE PROTOTYPE

persona3.prototype.telefono = '245624654876'
console.log(padre);
console.log(madre.telefono);
madre.telefono = '745665534534';
console.log(madre.telefono); // Le cambiamos el nro de telefono a madre

// Numero 9 - USO DE CALL

let persona4 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto2: function (titulo, telefono){
        return titulo+': '+this.nombre+' '+this.apellido+' '+telefono;
        //return this.nombre+' '+this.apellido;
    }
}

let persona5 = {
    nombre: 'Carlos',
    apellido: 'Lara',
}

// Creamos 2 metodos en el cual es segundo no le asignamos tantas objetos.. cmo hacemos para agregar MAS=?
console.log(persona4.nombreCompleto2('Lic.,', '67967990450'));
console.log(persona4.nombreCompleto2.call(persona5, 'Ing', '3453466586')); // hay q agregarle argumentos q estan undefined


// Numero 10 - Method Apply - nos permite llamar un metodo que puede no estar definido
let arreglo = ['Ing.', '45658678768978']; // creamos arreglo con 2 argumentosa y se lo vamos pasando
console.log(persona4.nombreCompleto2.apply(persona5, arreglo)); // nos permite llamar un metodo q no esta definido el metodo para mostrar cierto atributos
// con apply
