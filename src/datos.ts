/*
•Desarrolle un algoritmo que diga el precio de
una compra
• La compra se compone del precio del producto
y la cantidad
•Si el cliente gasta más de $1000 debemos
aplicarle un descuento del 10%
*/

let btnAgregar = document.getElementById("btnAgregar");
let btnCalc = document.getElementById("btnCalcular");
let precio = document.getElementById("precio");
let cantidad = document.getElementById("cantidad");
let rotulo = document.getElementById("rotulo");
let productos: number = 0;
let porcentajeDescuento: number = 0.1;

rotulo.innerHTML = "Ingrese el precio y cantidad de compra";

btnAgregar.addEventListener("click", () => {
  //agrego valores de producto y cantidad
  productos = Number(precio.value) * Number(cantidad.value) + productos;
});

btnCalc.addEventListener("click", () => {
  //Cuando se presiona calcular hace la cuenta de los productos
  // y la cantidad, y aplica descuento si corresponde
  if (productos > 1000) {
    productos = productos - productos * porcentajeDescuento;
    console.log("Se aplica descuento del 10% a la compra");
  }
  console.log("El total por su compra es $" + productos);
});
