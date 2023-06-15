class Producto extends Orden{
    
    static contadorProductos = 0;

    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }

    idProducto = int;
    nombre = String;
    precio = int;
}