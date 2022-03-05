//Al declarar un array, siempre debemos hacerlo utilizando CONST.
//Si bien vimos en las primeras clases que CONST no permite modificar el valor asignado, en el caso de los arrays, sí permite modificarlo, porque lo hacemos a través de un método y no asignándolo de forma directa como haríamos con una variable.
const areaResidencia = ['', '2021', '2020', '2019', '2018']
//                             0                   1                 2                     3
const paises = ['', 'Ford', 'Renault', 'Fiat', 'Volkswagen', 'Toyota', 'Chevrolet']
//                0            1         2          3           4          5 

//PRIMER PASO PARA TRABAJAR CON ARRAYS: APROVECHAR CONSOLE.TABLE()
// console.table(zonaResidencia)
// console.table(paises)

//SI QUEREMOS CONSULTAR UN ELEMENTO ESPECÍFICO, INGRESAMOS EL NOMBRE DEL ARRAY + CORCHETE + ID O POSICIÓN DEL MISMO

// console.log(paises[1])
// console.log(paises[3])

//¿CÓMO RECORRERLO?: UTILIZANDO UN CICLO FOR, QUE NOS PERMITA ITERAR SOBRE CADA ELEMENTO
//ESTO ES CLAVE PORQUE PODEMOS LISTARLO EN LA CONSOLA JS, COMO TAMBIÉN CARGAR UN COMBO SELECT

//MÉTODOS Y PROPIEDADES DE UN ARRAY: LENGTH
//ESTA PROPIEDAD NO ESTÁ SOLO DISPONIBLE PARA LOS ARRAYS, SINO TAMBIÉN PARA LAS VARIABLES DEL TIPO STRING, EL CUAL NOS DEVUELVE EL TOTAL DE CARACTERES DE DICHA VARIABLE.
//let nombreCompleto = "Coder House - Coding School"

//MÉTODO .push(), agrega un nuevo elemento del array, al final.

//MÉTODO .unshift(), agrega un nuevo elemento del array, pero al principio.

//MÉTODOS .pop() y .shift(), ELIMINAN LOS ELEMENTOS DEL FINAL DEL ARRAY O DEL PRINCIPIO DEL MISMO

//MÉTODO .splice(), ELIMINA UN ELEMENTO (O MÁS), DE ALGUNA PARTE INTERMEDIA DEL ARRAY

//paises.splice(5, 1) //elimina el elemento en la posición 5 del array
//paises.splice(3, 3) //elimina el elemento en la posición 3, 4, 5 del array

//MÉTODO .join(), .concat(), .slice() //DIRECTO DE LAS DIAPOSITIVAS + ALGÚN EJEMPLO EN CONSOLA

//MÉTODO .indexOf()

function buscarYeliminar() {
    const borroElemento = prompt("Ingrese la marcael país que desea quitar:")
    const indice = paises.indexOf(borroElemento)
        if (indice > -1) {
            paises.splice(indice, 1)
        }
        else {
            console.warn("No se encontró el elemento:", borroElemento)
            return
        }
        console.table(paises)
}
//TENGAN CUIDADO DE NUNCA GUARDAR LA POSICIÓN DE UN ARRAY, SI ESTE PUEDE SER MODIFICADO EN EL FUTURO. 

function agregarPais() {
    const nuevoPais = prompt("Ingrese la marca que desea agregar:")
    const resultado = paises.includes(nuevoPais)
    if (resultado) {
        console.warn("La marca ingresada", nuevoPais, "ya existe en el array.")
        return
    }
    else {
        paises.push(nuevoPais)
        console.table(paises)
        console.info("ℹ️ ", nuevoPais, "se agregó exitosamente.")
    }
}

function hacerAlgoXcadaElemento() {
    
    areaResidencia.forEach((area)=> {
        console.log(area)
    })
}


const prods = [{producto: "Bananas", importe: 230},
               {producto: "Peras", importe: 299}, 
               {producto: "Manzanas", importe: 550}]

function sumarProds () {
    debugger
    const resultado = prods.reduce((acumulador, elem)=> acumulador += elem.importe, 0)
    console.log(resultado)
}

