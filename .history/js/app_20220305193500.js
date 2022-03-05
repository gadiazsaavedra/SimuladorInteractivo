const comboAR = document.getElementById("selectAR")
const comboPais = document.getElementById("selectPais")
 
function cargarSelectResidencia() {
    //VERSIÓN CON CICLO FOR CONVENCIONAL
    for (let el = 0; el < areaResidencia.length; el++)
        comboAR.innerHTML += `<option value="${el}">${areaResidencia[el]}</option>`
}

function cargarSelectPais() {
    //VERSIÓN CON CICLO FOR CONVENCIONAL
    for (let el = 0; el < marcas.length; el++)
        comboPais.innerHTML += `<option value="${el}">${marcas[el]}</option>`
}

//debugger
cargarSelectResidencia()
cargarSelectPais()

