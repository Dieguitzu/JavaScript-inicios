/*Simulador de compra con descunto suma del iva 
Cosas a mejorar (aparte de todo):
                                . El descuento es fijo y no un porcentaje
                                . Lo estoy haciendo sobre un producto solamente
                                . Estoy seguro que hay formas de simplificar y ordenar mejor el codigo, pero lo hice funcionar 
                                . Estuve buscando maneras de llamarlo al html creo que no lo vimos todavía*/



    const suma = (a,b) => a + b;
const resta = (a,b) => a - b;
const multip = (a,b) => a * b;

class jabon{
    constructor(nombre, precio, tamaño){
        this.nombre = nombre;
        this.precio = precio;
        this.tamaño = tamaño;
    }
}
let jabon1 = new jabon("Carbon activado",350,"100gr")

const iva = x => x * 0.21
let cantidad = prompt("Ingrese cantidad")
let precio2 = multip(cantidad, jabon1.precio)
const descuento = multip(cantidad,50) 
let total = resta(suma(precio2, iva (precio2)),descuento);

alert("Precio final $" + total);

jabon1 = document.getElementById('ul');
jabon1.insertAdjacentHTML('afterend',"$" + total);