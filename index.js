

// Juego de PIEDRA, PAPEL ó TIJERAS

alert("Piedra, papel ó Tijera!")
alert("Comienza el juego!")

let player = prompt("Elegi un ataque: 0 para elegir PIEDRA, 1 para PAPEL y 2 para TIJERAS")

// Ataque del jugador
if (parseInt(player) == 0) {
    alert("Elegiste PIEDRA")
} else if (parseInt(player) == 1) {
    alert("Elegiste PAPEL")
} else if (parseInt(player) == 2) {
    alert("Elegiste TIJERAS")
}

//Ataque del enemigo
let enemy = Math.round(Math.random() * 2)

if (parseInt(enemy) == 0) {
    alert("El enemigo eligió PIEDRA")
} else if (parseInt(enemy) == 1) {
    alert("El enemigo eligió PAPEL")
} else if (parseInt(enemy) == 2) {
    alert("El enemigo eligió TIJERAS")
}

//Resultado de la batalla
if (player == enemy) {
    alert("Empate")
} else if (player == 0 && enemy == 2) {
    alert ("GANASTEE")
} else if (player == 1 && enemy == 0) {
    alert ("GANASTEE")
} else if (player == 2 && enemy == 1) {
    alert ("GANASTEE")
} else {
    alert ("Perdiste :(")
}





// JUEGO DE MEMORAMA

//ARREGLO DE URL DE IMAGENES

const memoCat = ["https://ibb.co/VMYvHbg", "https://ibb.co/VMYvHbg", "https://ibb.co/qgVPQsC", "https://ibb.co/qgVPQsC", "https://ibb.co/B6xPRqF", "https://ibb.co/B6xPRqF", "https://ibb.co/rMYBh87", "https://ibb.co/rMYBh87"]

//FUNCION PARA MEZCLAR EL ARREGLO

const shuffleMemoCat = (arrayMemoCat) => {
    for (let cards = arrayMemoCat.length - 1; cards > 0; cards--) {
        const random = Math.floor(Math.random() * (cards + 1));
        const mezclar = arrayMemoCat[cards];
        arrayMemoCat[cards] = arrayMemoCat[random];
        arrayMemoCat[random] = mezclar;
    }
    return arrayMemoCat
}

//PRUEBA

console.log(`Orden inicial ${memoCat}`);

shuffleMemoCat(memoCat)

console.log(`Mezclados ${memoCat}`);