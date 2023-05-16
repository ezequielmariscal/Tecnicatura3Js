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
}

let persona1 = new Persona('Martin', 'Fierro');
console.log(persona1.nombre);
//console.log(persona1);
console.log(persona2.nombre);
//console.log(persona2);
