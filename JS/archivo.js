const addCarritoButtons = document.querySelectorAll('#comprar');
addCarritoButtons.forEach(addProductoAlCarrito => {
    addProductoAlCarrito.addEventListener('click', addClick );
})

const carritoItem = document.querySelector('#carrito-item');

function addClick(event){
    const button = event.target;
    const item = button.closest('#item');

    const titulo = item.querySelector('#titulo').textContent;
    const precio = item.querySelector('#item-price').textContent;

    addCarrito(titulo,precio);
}

function addCarrito(titulo, precio){
    const carritoActualizado = document.createElement ('div');
    const carritoHTML = `
    <div class="row carritoItem shoppingCartItem d-flex align-item-center" id="carrito-item">
        <div class="col-6 d-flex align-item-center">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-botton pb-2 pt-3" id="carrito-productos">
                <img src="" class="shopping-cart-image" id="carrito-producto-img">
                <h6 class="text-center ml-3 mb-0" id="carrito-titulo">${titulo}</h6>
            </div>   
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-item-center h-100 border-bottom pb-2 pt-1" id="carrito-producto-price">
                <p class="mb-0 text-center justify-content-center align-item-center pb-2 pt-3" id="carrito-price">${precio}</p>
            </div>
        </div>
        <div class="col-4">
            <div class="shoppingCartQuantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shoppingCartInput" type="number" value="1">
                <button class="btn btn-danger button-delete" type="button">X</button>
            </div>
        </div>
    </div>`;
        carritoActualizado.innerHTML = carritoHTML;
        carritoItem.append(carritoActualizado);
        
        carritoTotal();
}
let precio = 0;


function carritoTotal(){
    let total = 0;
    const carritoTotal = document.querySelector('.carritoTotal');

    const carritoItem = document.querySelectorAll('.carritoItem');

    carritoItem.forEach((carritoItem) => {
        const carritoItemElement = carritoItem.querySelector('#carrito-price');

        const carritoItemPrecio = Number(carritoItemElement.textContent.replace('$',' '));

        const carritoCantidadElement = carritoItem.querySelector('.shoppingCartInput');

        const carritoItemCantidad = Number(carritoCantidadElement.value);

        total = total + carritoItemPrecio * carritoItemCantidad;

        carritoTotal.innerHTML = `$${total}`;

    })
    localStorage.setItem(total,total);
}




















