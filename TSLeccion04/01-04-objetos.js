// Var primitiva
let x = 10; 
console.log(x.length);

// Object
let persona = {
    nombre: 'Carlos',
    apellido: 'Gil',
    email: 'cgil@gmail.com',
    edad: 30,
    nombreCompleto: function(){
        return this.nombre+' '+this.apellido; //this apunta al object q se esta trabajando en este momento
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

// Creamos un nuevo object

let persona2 = new Object(); // Debe crear un nuevo objeto en memoria
persona2.nombre = 'Juan';
persona2.direccion = 'Salada 14';
persona2.telefono = '03030456';
console.log(persona2.telefono);

// Como acceder a las propiedades de los object desde otra manera?

console.log(persona['apellido']); // Accedemos como si fuera un Array

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