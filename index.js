alert("Piedra, papel ó Tijera!")
alert("Comienza el juego!")

let player = prompt("Elegi un ataque: 0 para elegir PIEDRA, 1 para PAPEL y 2 para TIJERAS")


if (parseInt(player) == 0) {
    alert("Elegiste PIEDRA")
} else if (parseInt(player) == 1) {
    alert("Elegiste PAPEL")
} else if (parseInt(player) == 2) {
    alert("Elegiste TIJERAS")
}


let enemy = Math.round(Math.random() * 2)

if (parseInt(enemy) == 0) {
    alert("El enemigo eligió PIEDRA")
} else if (parseInt(enemy) == 1) {
    alert("El enemigo eligió PAPEL")
} else if (parseInt(enemy) == 2) {
    alert("El enemigo eligió TIJERAS")
}


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