# Objeto

### En JavaScript, un objeto es una colección de propiedades que pueden ser tanto atributos como métodos, que se definen utilizando llaves {} y separados por comas.

### Cada propiedad del objeto se compone de una clave y un valor, y se puede acceder a ellas utilizando la sintaxis de punto objeto.propiedad o la sintaxis de corchetes objeto["propiedad"].

## JSON.stringify

### es un método en JavaScript que se utiliza para convertir un objeto JavaScript en una cadena JSON. El objeto puede contener una estructura de datos compleja, como arrays, objetos anidados, números, cadenas, valores booleanos y null.

### El formato JSON (JavaScript Object Notation) es un formato de intercambio de datos ampliamente utilizado para enviar y recibir datos en aplicaciones web. Es un formato de texto plano que utiliza una sintaxis similar a la sintaxis de los objetos JavaScript.

### JSON.stringify() es útil para enviar datos desde el cliente al servidor o para almacenar datos en una base de datos que acepte JSON como formato de almacenamiento. También es útil para depurar y diagnosticar problemas en aplicaciones web que utilizan JSON para el intercambio de datos.

## Metodo GET

### El método GET en JavaScript se utiliza para hacer solicitudes HTTP de tipo GET a un servidor para obtener recursos o datos. En otras palabras, el método GET permite solicitar información desde un servidor, y el servidor responde con los datos solicitados.

### El método GET se utiliza comúnmente en combinación con la API Fetch de JavaScript para hacer solicitudes HTTP a un servidor y obtener datos en formato JSON, texto, HTML u otros formatos. Por ejemplo, la siguiente función en JavaScript utiliza el método GET y la API Fetch para obtener datos de una API en línea que devuelve información sobre la cotización de Bitcoin:


### function obtenerCotizacionBitcoin() {
###  fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
###    .then(response => response.json())
###    .then(data => {
###      const precioBitcoin = data.bpi.USD.rate;
###      console.log("El precio actual de Bitcoin en USD es:", precioBitcoin);
###    })
###    .catch(error => {
###      console.error("Hubo un error al obtener la cotización de Bitcoin:", error);
###    });
### }

### En este ejemplo, la función obtenerCotizacionBitcoin() utiliza el método fetch() para hacer una solicitud HTTP de tipo GET a la API de Coindesk, que devuelve información sobre la cotización de Bitcoin en diferentes monedas. Luego, se utiliza el método json() para convertir la respuesta en un objeto JavaScript, y se accede a la propiedad USD.rate para obtener el precio actual de Bitcoin en dólares estadounidenses. Finalmente, se muestra el precio en la consola.

### Es importante tener en cuenta que el método GET es una forma de hacer solicitudes HTTP seguras, ya que no cambia el estado del servidor ni modifica los datos. Por lo tanto, el método GET se utiliza comúnmente para obtener recursos o datos del servidor, mientras que los métodos POST, PUT y DELETE se utilizan para modificar los datos en el servidor.

## Metodo SET

### En JavaScript, el método set se utiliza comúnmente en combinación con los objetos de JavaScript para establecer el valor de una propiedad. Los objetos en JavaScript pueden contener una o varias propiedades, que son pares clave-valor que representan los datos que se almacenan en el objeto.