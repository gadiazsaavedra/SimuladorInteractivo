class Auto {
    constructor(marca, modelo, anioFabricacion, precio, color, paisOrigen) {
        this.marca = marca.toUpperCase();
        this.modelo = modelo;
        this.anioFabricacion = anioFabricacion;
        this.precio = parseFloat(precio);
        this.color = color;
        this.paisOrigen = paisOrigen;
    }
    sumarIVA() {
        return this.precio * 1.21;
    }
}
const autos = []
function agregarAuto () {
    let marc = prompt("Ingrese la marca que desea agregar:")
    let mod = prompt("Ingrese el modelo que desea agregar:")
    let anioFab = prompt("Ingrese el año de fabricación que desea agregar:")
    let prec = prompt("Ingrese el precio que desea agregar:")
    let col = prompt("Ingrese el color que desea agregar:")
    let pais = prompt("Ingrese el país de origen que desea agregar:")
        autos.push(new Auto(marc, mod, anioFab, prec, col, pais))
        c

}


        const productos = []

function agregarProducto() {
    //debugger
    let nuevoProducto = {"id": 0, "Producto": "", "Importe": 0.00}
        nuevoProducto.id = idAutomatico()
        nuevoProducto.Producto = productoInput.value.trim().toUpperCase()
        nuevoProducto.Importe = parseFloat(importeInput.value).toFixed(2)
        productos.push(nuevoProducto)
        console.clear()
        console.table(productos)
        listarProductos() //NO AGREGAR ESTA FILA
}

function listarProductos() { //NO AGREGAR ESTA FUNCION. SOLO AL FINAL
    detalleProductos.innerHTML = ""
    let filas = ""
    for (elemento of productos)
        filas += `<tr><td>${elemento.id}</td><td>${elemento.Producto}</td><td>${elemento.Importe}</td></tr>`
    detalleProductos.innerHTML = filas
}







const idAutomatico = ()=> parseInt(Math.random() * 10000000)

//const productosBKP = JSON.parse('[{"id":3535091,"Producto":"BANANAS DEL ECUADOR","Importe":"289.00"},{"id":6724150,"Producto":"FRUTILLAS DE LA ANTÁRTIDA","Importe":"499.00"},{"id":2871542,"Producto":"PERAS DEL HIMALAYA","Importe":"875.00"}]')




let mayorQueDiez = (m)=> m > 10


mayorQueDiez = (m)=>  m > 10


