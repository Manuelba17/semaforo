const $semaforo =  document.getElementById("semaforo")

let lista = ["verde", "amarillo", "rojo"]

     
const semaforo = () => {
    const color = lista.shift()
    $semaforo.src = `./${color}.png` 
    if (lista.length == 0) {
        lista = ["verde", "amarillo", "rojo"]       
    }      
}

setInterval(semaforo, 2000)