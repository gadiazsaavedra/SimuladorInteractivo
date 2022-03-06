debugger
class Auto {
    constructor(marca, modelo, anioFabricacion, precio, color, paisOrigen) {
        this.marca = marca.toUpperCase();
        this.modelo = modelo;
        this.anioFabricacion = anioFabricacion;
        this.precio = parseprecio;
        this.color = color;
        this.paisOrigen = paisOrigen;
    }
}

const marcas = ['', 'Ford', 'Renault', 'Fiat', 'Volkswagen', 'Toyota', 'Chevrolet']
console.table(marcas)
console.log(marcas[2])

const suma  = (a,b) => a + b;
const resta = (a,b) => a - b;
const discount = (a,b) => (a * b) / 100;
const iva   = (x) => x * 0.21;
let precioProducto  = parseInt(prompt("Ingresar el Precio del Producto: "));
let descuento = parseInt(prompt("Ingresar el Descuento Aplicado: ")); 
let newValue = resta(precioProducto,discount(suma ( precioProducto, iva(precioProducto)), descuento));
alert("El precio con descuento es de $"+newValue);


