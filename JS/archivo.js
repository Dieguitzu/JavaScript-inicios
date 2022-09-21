class Producto{
    constructor(id, nombre, precio ,cantidad, tamaño, propiedades){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
        this.tamaño = tamaño
        this.propiedades = propiedades
        
    }
}


const cabello = [];
const jabon = [];

jabon.push(new Producto(1,"Jabon de carbon activado",350,1,"100gr","Limpieza profunda, exfoliante, combate el acné y puntos negros, piel más firme, reductor de poros"));
jabon.push(new Producto(2,"Jabon de lavanda",350,1,"100gr","Aromaterapeutico, hidratante, anti-inflamatorio y regenerador, pieles sencibles o dañadas, apto para tatuajes"));
jabon.push(new Producto(3,"Jabon de canela y curcuma",350,1,"100gr","anti-oxidante, anti-inflamatorio, astringente, limpieza profunda, mejora la circulación"));
jabon.push(new Producto(4,"Jabon de neutro",350,1,"100gr","Hipoalergénico, regula el Ph, apto para tatuajes, limpieza profunda, hidrata y elimina grasa en los poros"));

cabello.push(new Producto(5,"shampoo Solido",600,1,"100gr","hidrata, regenera, desengrasa el cabello"))
cabello.push(new Producto(6,"Acondicionador",600,1,"100gr","hidrata, regenera, desengrasa el cabello"))
 //spread
const productos = [...jabon,...cabello];


//No encontre funcionalidad aún dentro de mi proyecto, pero lo aplico de alguna forma!
const desestructurar = (productos) => {
    const [prod1,prod2,prod3,prod4,prod5,prod6] = productos
    console.log(prod1.id,prod1.nombre)
}
desestructurar(productos)

const listaDProductos = document.querySelector('.listaDProductos')

const total = document.querySelector('.carritoTotal')
let carrito = [];
// subida al storage y uso de ternario
document.addEventListener('DOMContentLoaded', () => {
    localStorage.getItem('carrito') ?
        carrito = JSON.parse(localStorage.getItem('carrito')) : null;
        actualizarCarrito()
    
})

productos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
    <div id="item" class="card-body">
        <h5 class="card-title" id="titulo">${producto.nombre}</h5>
        <h7>${producto.tamaño}</h7>
        <p>${producto.propiedades}</p>
        <hr>
        <h6 id="itemPrice">$ ${producto.precio}</h6>
        <button id="comprar${producto.id}" class="btn btn-primary">Agregar</button>
    </div>
`
    listaDProductos.appendChild(div)

    const button = document.getElementById(`comprar${producto.id}`)

    button.addEventListener('click', () => {
        agregarAlCarrito(producto.id)
    })
})

const agregarAlCarrito = (prodId) => {

    const existe = carrito.some (prod => prod.id === prodId)

    if(existe){
        const prod = carrito.map (prod =>{
            if(prod.id === prodId){ 
            prod.cantidad++
        }})} else{
            const item = productos.find((prod) => prod.id === prodId)
            carrito.push(item)
        }
    actualizarCarrito()
}

const carritoItem = document.querySelector('#carrito-item');

const actualizarCarrito = () =>  {
    carritoItem.innerHTML = ""

    carrito.forEach((prod) => {
        const div = document.createElement('div');
    div.innerHTML = `
    <div class="row carritoItem shoppingCartItem d-flex align-item-center" id="carrito-item">
        <div class="col-6 d-flex align-item-center">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-botton pb-2 pt-3" id="carrito-productos">
                <img src="" class="shopping-cart-image" id="carrito-producto-img">
                <h6 class="text-center ml-3 mb-0" id="carrito-titulo">${prod.nombre}</h6>
            </div>   
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-item-center h-100 border-bottom pb-2 pt-1" id="carrito-producto-price">
                <p class="mb-0 text-center justify-content-center align-item-center pb-2 pt-3" id="carrito-price">${prod.precio}</p>
            </div>
        </div>
        <div class="col-4">
            <div class="shoppingCartQuantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <p>${prod.cantidad}</p>
                <button class="btn btn-danger" onclick="eliminarDelCarrito(${prod.id})" type="button">X</button>
            </div>
        </div>
    </div>`;

    carritoItem.appendChild(div)

    localStorage.setItem('carrito', JSON.stringify(carrito))
    })
    total.innerText = carrito.reduce((acc,prod) => acc + prod.precio * prod.cantidad,0)
}


    const eliminarDelCarrito = (prodId) => {
        const item = carrito.find((prod) => prod.id === prodId)
        const indice = carrito.indexOf(item)
        carrito.splice(indice,1)
        actualizarCarrito()
    }
    function buttonCompraClick(){
        carritoItem.innerHTML = ' ';
        carritoTotal();
        alert('Gracias, vuelva prontos!')
    }
    const buttonCompra = document.querySelector('.btn-success')
    buttonCompra.addEventListener('click', buttonCompraClick)
    function buttonCompraClick(){
        carritoItem.innerHTML = ' ';
        total.innerText = '$ ';
        swal("Gracias, vuelva pronto!");
    }