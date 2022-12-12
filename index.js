

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

// JUEGO DE MEMOTEST

const memoCat = [
    { nameCat: "Chicho", imgCat: "https://ibb.co/VMYvHbg"},
    { nameCat: "Gaudio", imgCat: "https://ibb.co/qgVPQsC"},
    { nameCat: "Nino", imgCat: "https://ibb.co/B6xPRqF"},
    { nameCat: "Tucu", imgCat: "https://ibb.co/rMYBh87"}
]
