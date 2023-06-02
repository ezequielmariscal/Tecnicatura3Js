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

    // Add metodo para imprimir nombre completo
    nombreCompleto(){
        return this._nombre+' '+this._apellido;
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

    //Sobreescritura: modificar el comportamiento definido en algun clase padre
    nombreCompleto(){
        return super.nombreCompleto()+' '+this._departamento;
    }

    // Sobreescribiendo el metodo de la clase padre (Object)
    toString() { // Regresa un String
        // Se aplica polimorfimos que significa multiples formas en tiempo de ejecucion
        // El metodo que se ejecuta depende del objeto si es una referencia de tipo padre o hija
        return this.nombreCompleto();
    }

    static saludar(){
        console.log('Saludos desde este metodo statis');
    }
    static saludar2(persona){
        console.log(persona.nombre);
    }
}

let empleado = new Empleado('Mona', 'Gimenez', 'Cuarteto');
console.log(empleado1);
console.log(empleado1.nombre);

// Add metodo de nombreCompleto y despues sobreescribir el codigo
console.log(empleado.nombreCompleto());

// Object.prototype.toString Esta es la manera de acceder a atriburos y metodos de manera dinamica
console.log(empleado1.toString());

// Polimorfismo: multiples formas en tiempo de ejecucion
console.log(persona1.toString());

// Llamo al metodo estatico creados
// persona1.saludar(); no se utiliza desde el objeto
Persona.saludar();
Persona.saludar2(persona1);

