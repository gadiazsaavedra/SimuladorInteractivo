debugger
const suma  = (a,b) => a + b;
const resta = (a,b) => a - b;
//Si una función es una sola línea con retorno y un parámetro puede evitar escribir los ()
//const iva   = x => x * 0.21;
let precioProducto  = parseInt(prompt("Ingresar el Precio del Producto: "));
let descuento = parseInt(prompt("Ingresar el Descuento Aplicado: ")); 
//Calculo el precioProducto + IVA - descuento
let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento); 
alert("El precio con descuento es de $"+nuevoPrecio);


const discount = (a,b) => (a * b) / 100;
const iva = (x) => x * 0.21;