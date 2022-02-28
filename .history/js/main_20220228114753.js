debugger
const suma  = (a,b) => a + b;
const resta = (a,b) => a - b;
//Si una función es una sola línea con retorno y un parámetro puede evitar escribir los ()
const iva   = x => x * 0.21;
let precioProducto  = prompt("Ingresar el Precio del Producto: ");
let descuento = prompt("Ingresar el Descuento Aplicado: "); 
//Calculo el precioProducto + IVA - descuento
let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento); 
console.log(nuevoPrecio);
