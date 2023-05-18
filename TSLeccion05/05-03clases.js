// let persona4 = new Persona('Brad','Pitt'); // nos dira que no funciona es un  hosting

class Persona{ //clase padre
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

// Hosting

// ver 1 nos da undefined en js no se aplica el concepto de hosting no se puede crear objetos sin definir
// la clase.

// Herencia (padre se encuentra en sec 3)

// Creamos la clase hija
class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido); // llamamos al padre
        this._departamento = departamento;
    }

    get departamento(){
        this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }
}

let empleado = new Empleado('Mona', 'Gimenez', 'Cuarteto');
console.log(empleado1);
console.log(empleado1.nombre);