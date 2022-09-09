const addCarritoButtons = document.querySelectorAll('#comprar');
addCarritoButtons.forEach(addProductoAlCarrito => {
    addProductoAlCarrito.addEventListener('click', addClick );
})

function addClick(event){
    const button = event.target;
    const item = button.closest('#item');

    const titulo = item.querySelector('#titulo').textContent;
    const itemPrice = item.querySelector('#item-price').textContent;

    console.log(titulo, itemPrice);
}
