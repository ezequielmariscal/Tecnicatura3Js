class Orden{

    static contadorOrdenes = 0;

    static get MAX_PRODUCTO(){
        return 5;
    }

    constructor(){ 
        this._idOrden =++Orden.contadorOrdenes;
        super(Producto, nombre, precio);
        

    }

    Orden(){

    };
    agregarProducto(Producto);
    CalcularTotal(){
        Producto = id_Producto;
    };
    mostrarOrden(){
        
    };
}