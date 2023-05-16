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
