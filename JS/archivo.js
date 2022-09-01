class Producto{
    constructor(nombre, precio, tamaño){
        this.nombre = nombre
        this.precio = precio
        this.tamaño = tamaño
    }
}

const productos = [
    {nombre:"1. jabon de carbon activado",precio: 350,tamaño: "100gr"},
    {nombre:"2. jabon de lavanda",precio: 350,tamaño: "100gr"},
    {nombre:"3. jabon de canela y curcuma",precio: 350,tamaño: "100gr"},
    {nombre:"4. jabon de neutro",precio: 350,tamaño: "100gr"},
];
    productos.push(new Producto("5. Shampoo solido",600,"100gr"));
    productos.push(new Producto("6. Acondicionador solido",600,"100gr"));
    productos.push(new Producto("7. Cepillo de dientes de Bamboo",400,"adulto"));
    productos.push(new Producto("8. Hilo dental",500,"30Mtrs"));

//Lista de productos

carrito = [];

let seleccion = prompt ("¿Desea comprar alguno de nuestro productos si o no?")

while(seleccion.toLowerCase() != "si" && seleccion.toLowerCase() != "no"){
    alert("Continuar con si o con no")
    seleccion = prompt("¿Desea comprar algo?") }
    
    if (seleccion.toLowerCase() == "si"){
        alert("Acontinuación, recuerde el numero del producto que desee!")
        let todosLosProductos = productos.map(
            (producto) => producto.nombre + " $" + producto.precio);
            alert(todosLosProductos.join("\n"))
        } else if(seleccion.toLowerCase() == "no"){
            alert ("Gracias por visitarnos, hasta pronto!")
        }

    while(seleccion.toLowerCase() != "no"){
        let producto = prompt("Coloque el numero para agregar al carrito")
        let precio = 0;
        if (producto == "1" || producto == "2" || producto == "3" || producto == "4" || producto == "5" || producto == "6" || producto == "7" || producto == "8"){
            switch(producto){
                case "1":
                    precio = 350
                    break;
                case "2":
                    precio= 350
                    break;
                case "3":
                    precio = 350
                    break;
                case "4":
                    precio = 350
                    break;
                case "5":
                    precio= 600
                    break;
                case "6":
                    precio = 600
                    break;
                case "7":
                    precio = 400
                    break;
                case "8":
                    precio= 500
                    break;
                default:
                    break;
            }
            let cantidad = parseInt(prompt("¿Cuantas unidades desea?"))
            carrito.push({producto, cantidad, precio})
            console.log(carrito)
    } else {
        alert("No tenemos ese producto")
    }
    seleccion = prompt("¿Desea comprar otro de nuestro productos si o no?")

    while(seleccion.toLowerCase() == "no"){
        carrito.forEach((carritoFinal) => {
            console.log(`Producto: ${carritoFinal.producto}, Cantidad: ${carritoFinal.cantidad},
            total a pagar por producto ${carritoFinal.cantidad*carritoFinal.precio}`)
        })
        break;
    }
}