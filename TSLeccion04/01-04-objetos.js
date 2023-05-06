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