class Producto {
    
    static contadorProductos = 0;

    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }

    /*

    idProducto = int;
    nombre = String;
    precio = int;
    */
    get _idProducto(){
        return this._idProducto;
    }
    get nombre(){
        return this._nombre;
    }
    // Add method set
    set nombre(nombre){
        this._nombre = nombre;
    }
     get precio(){
        return this._precio;
    }
     //  Add method set
     set precio(precio){
        this._precio = precio;
    }

    toString(){
        return `${this._idProducto} ${this._nombre} ${this._precio}`;
    }
}