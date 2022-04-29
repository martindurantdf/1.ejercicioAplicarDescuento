let valorProducto: number;
let valorDescuento: number;
let precioFinal: number;

valorProducto = 450.5;
valorDescuento = 0.1;
precioFinal = valorProducto - valorProducto * valorDescuento;
console.log("El valor del producto es: $", valorProducto);
console.log("El valor del descuento es: $", valorProducto * valorDescuento);
console.log("A pagar con descuento: $", precioFinal);
