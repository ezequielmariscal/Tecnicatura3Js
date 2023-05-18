class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    // Add method get (Los atributos no pueden llamarse igual cuando creamos metodo get y set)
    get nombre(){
        return this._nombre;
    }

    // Add method set
    set nombre(nombre){
        this._nombre = nombre;
    }

     // TAREA.....Add method get (Los atributos no pueden llamarse igual cuando creamos metodo get y set)
     get apellido(){
        return this._apellido;
    }
     //  TAREA .....Add method set
     set apellido(apellido){
        this._apellido = apellido;
    }
}

let persona1 = new Persona('Martin', 'Fierro');
console.log(persona1.nombre);
persona1.nombre = 'Juan Carlos'; // set
console.log(persona1.nombre);
//console.log(persona1);
console.log(persona2.nombre);
persona2.nombre = 'Maria Laura'; // set
console.log(persona2.nombre);
//console.log(persona2);

/* Tarea: Crear el método get y set para el atributo de apellido, 
luego modificar el apellido a través del  set y mostrar con un 
console.log lo que es el get donde muestra el resultado obtenido. */

let persona3 = new Persona('Pepe, Argento');
console.log(persona3.apellido);
persona3.apellido = ('Mujica');
console.log(persona3.apellido);
