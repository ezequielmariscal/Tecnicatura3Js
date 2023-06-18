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

    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTO){
            this._productos.push(producto); // Tnemos 2 tipos de sintaxis : 1
            //this._productos[this._contadorProductosAgregado++] = Producto; ----SINTAXIS 2
        }else{
            console.log('No se pueden agregar mas productos');
        }
    }// Fin del m,etodo agregarProducrto
    CalcularTotal(){
        let totalVenta = 0;
        for (let producto of this._productos) {
            totalVenta += producto.precio;
        } //fin ciclo for
        return totalVenta;
    }// Fin method calculo total
    mostrarOrden(){
        let productoOrden = ' ';
        for(let producto of this._productos);{
            productoOrden += producto.toString()+ ' ';
        }// fin del ciclo for
        console.log(`Orden: ${this._idOrden}, Total: $${this.CalcularTotal()}, Productos: ${productoOrden}`);
    };// Fin method mostraOrden
} // Fin de la clase orden