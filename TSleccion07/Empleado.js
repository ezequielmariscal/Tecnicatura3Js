class Empleado extends Persona{
    
    static contadorEmpleados = 0;

    constructor( nombre, apellido, edad, sueldo) {
        super(nombre, apellido, edad);
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    } 

    get idEmpleado(){
        return this._idEmpleado;
    }
}