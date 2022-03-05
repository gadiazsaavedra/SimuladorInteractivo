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


