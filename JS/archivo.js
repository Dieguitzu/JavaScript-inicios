const suma = (a,b) => a + b;
const resta = (a,b) => a - b;
const multip = (a,b) => a * b;

class Producto{
    constructor(nombre, precio, tamaño){
        this.nombre = nombre
        this.precio = precio
        this.tamaño = tamaño
    }
}

const productos = [];
productos.push(new Producto("0. Jabon de carbon activado",350,"100gr"));
productos.push(new Producto("1. Jabon de Lavanada",350,"100gr"));
productos.push(new Producto ("2. Jabon de Canela y curcuma",350,"100gr"));
productos.push(new Producto("3. Jabon Neutro",350, "100gr"));
productos.push(new Producto("4. Shampoo solido",600,"100gr"));
productos.push(new Producto("5. Acondicionador solido",600,"100gr"));
productos.push(new Producto("6. Cepillo de dientes de Bamboo",400,"adulto"));
productos.push(new Producto("7. Hilo dental",500,"30Mtrs"));

//Lista de productos

let seleccion = prompt ("¿Desea comprar alguno de nuestro productos si o no?")
let seleccion2 = 0;

while(seleccion != "si" && seleccion != "no"){
    alert("continuar con si o con no")
    seleccion = prompt("¿Hola, desea comprar algo si o no?")
    }
    if (seleccion == "si"){
        alert("Acontinuación, presione el numero del producto que desee!")
        let todosLosProductos = productos.map(
            (producto) => producto.nombre + " $" + producto.precio);
        alert(seleccion2 = prompt(todosLosProductos.join("\n")));
            console.log(productos[seleccion2]);
    } else if(seleccion == "no"){
        alert ("Gracias por visitarnos, hasta pronto!")
    }