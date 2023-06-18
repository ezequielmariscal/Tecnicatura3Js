class Orden{

    static contadorOrdenes = 0;

    static get MAX_PRODUCTO(){
        return 5;
    }

    constructor(){ 
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = []; // Recibe cada elemnto de productos
        this._contadorProductosAgregado = 0;

    }

    get idOrden(){
        return this._idOrden
    }

    agregarProducto(Producto){
        if(this._productos.length < Orden.MAX_PRODUCTO){
            this._productos.push(Producto); // Tnemos 2 tipos de sintaxis : 1
            //this._productos[this._contadorProductosAgregado++] = Producto; ----SINTAXIS 2
        }else{
            console.log('No se pueden agregar mas productos');
        }
    }// Fin del m,etodo agregarProducrto
    CalcularTotal(){
        Producto = id_Producto;
    };
    mostrarOrden(){

    };
} // Fin de la clase orden