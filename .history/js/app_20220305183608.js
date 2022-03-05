const comboAR = document.getElementById("selectAR")
const comboPais = document.getElementById("selectPais")
 
function cargarSelectResidencia() {
    //VERSIÓN CON CICLO FOR CONVENCIONAL
    for (let el = 0; el < areaResidencia.length; el++)
        comboAR.innerHTML += `<option value="${el}">${areaResidencia[el]}</option>`
}

function cargarSelectPais() {
    //VERSIÓN CON CICLO FOR CONVENCIONAL
    for (let el = 0; el < paises.length; el++)
        comboPais.innerHTML += `<option value="${el}">${paises[el]}</option>`
}

//debugger
cargarSelectResidencia()
cargarSelectPais()

