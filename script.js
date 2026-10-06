let miForma = document.querySelector("#miForma")
let valorTarea = document.querySelector("#valorTarea")
let miForma = document.querySelector("#nuestraLista")

uiForm.addEventsListener("submit", (e)=>{
    e.preventDefault()
    crearTarea(valorTarea.value)

})

const crearTarea =(tarea) => 
    console.log(tarea)
let muestraHTML = '<li>${tarea}<buttom one click ="borrarElemento(this)"'