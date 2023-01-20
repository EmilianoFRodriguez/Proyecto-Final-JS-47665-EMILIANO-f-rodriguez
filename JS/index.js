// Juego de PIEDRA, PAPEL ó TIJERAS


//---------------------------------------------------------------------------//

//array de objetos con los ataques de player y enemy
const playerAttack = [
    { id: 1, attack: "Piedra", img: `https://i.ibb.co/55QRXGM/player-piedra.png` },
    { id: 2, attack: "Papel", img: `https://i.ibb.co/p3KpLgs/player-papel.png` },
    { id: 3, attack: "Tijera", img: `https://i.ibb.co/GdPBF0c/player-tijera.png` }
]

const enemyAttack = [
    { id: 1, attack: "Piedra", img: `https://i.ibb.co/Xy3T9fX/chicho-piedra.png` },
    { id: 2, attack: "Papel", img: `https://i.ibb.co/Vt0Mn1k/chicho-papel.png` },
    { id: 3, attack: "Tijera", img: `https://i.ibb.co/gvNgXxV/chicho-tijera.png` }
]

//variables y constantes para el render de img
const playerPiedra = playerAttack.find(piedra => piedra.attack == "Piedra");
const playerPapel = playerAttack.find(papel => papel.attack == "Papel");
const playerTijera = playerAttack.find(tijera => tijera.attack == "Tijera")

let playerAttackPiedra = document.getElementById("piedra");
let playerAttackPapel = document.getElementById("papel");
let playerAttackTijera = document.getElementById("tijera");

// render img de ataques


playerAttackPiedra.innerHTML = `<img src="${playerPiedra.img}" alt="ataque-piedra">`;
playerAttackPapel.innerHTML = `<img src="${playerPapel.img}" alt="ataque-papel">`;
playerAttackTijera.innerHTML = `<img src="${playerTijera.img}" alt="ataque-tijera">`;


//--------------------------------------------------------------------//

//sellecion de ataques

const selectionPiedra = document.getElementById("piedra");
const selectionPapel = document.getElementById("papel");
const selectionTijera = document.getElementById("tijera");
const playerPPT = document.getElementById("playerPPT");

selectionPiedra.addEventListener('click', () => {
    playerPPT.classList.toggle("piedraOK")
})
selectionPapel.addEventListener('click', () => {
    playerPPT.classList.toggle("papelOK")
})
selectionTijera.addEventListener('click', () => {
    playerPPT.classList.toggle("tijeraOK")
})



function renderAttack() {
    /*switch (clasePlayer) {
        case playerPPT.classList.contains("piedraOK"):
            playerPPT.innerHTML = `<img src="${playerPiedra.img}" alt="ataque-piedra">`;
            break;
        case playerPPT.classList.contains("papelOK"):
            playerPPT.innerHTML = `<img src="${playerPapel.img}" alt="ataque-papel">`;
            break;
        case playerPPT.classList.contains("tijeraOK"):
            playerPPT.innerHTML = `<img src="${playerTijera.img}" alt="ataque-tijera">`;
            break;
    }*/

    if (claseplayer == playerPPT.classList.contains("piedraOK")) {
        return playerPPT.innerHTML = `<img src="${playerPiedra.img}" alt="ataque-piedra">`;
    } else if (claseplayer == playerPPT.classList.contains("papelOK")) {
        return playerPPT.innerHTML = `<img src="${playerPapel.img}" alt="ataque-papel">`;
    } else if (claseplayer == playerPPT.classList.contains("tijeraOK")) {
        return playerPPT.innerHTML = `<img src="${playerTijera.img}" alt="ataque-tijera">`;
    }
}

/* function renderPiedraOK() {
    playerPPT.innerHTML = `<img src="${playerPiedra.img}" alt="ataque-piedra">`;

}

function renderPapelOK() {
    playerPPT.innerHTML = `<img src="${playerPapel.img}" alt="ataque-papel">`;

}

function renderTijeraOK() {
    playerPPT.innerHTML = `<img src="${playerTijera.img}" alt="ataque-tijera">`;

}
 */
renderAttack();






let player = parseInt(prompt("Elegi un ataque: 0 para elegir PIEDRA, 1 para PAPEL y 2 para TIJERAS"))

// Ataque del jugador
if ((player) == 0) {
    alert("Elegiste PIEDRA")
} else if ((player) == 1) {
    alert("Elegiste PAPEL")
} else if ((player) == 2) {
    alert("Elegiste TIJERAS")
}

//Ataque del enemigo
let enemy = Math.round(Math.random() * 2)

if ((enemy) == 0) {
    alert("El enemigo eligió PIEDRA")
} else if ((enemy) == 1) {
    alert("El enemigo eligió PAPEL")
} else if ((enemy) == 2) {
    alert("El enemigo eligió TIJERAS")
}

//Resultado de la batalla
if (player == enemy) {
    alert("Empate")
} else if (player == 0 && enemy == 2) {
    alert("GANASTEE")
} else if (player == 1 && enemy == 0) {
    alert("GANASTEE")
} else if (player == 2 && enemy == 1) {
    alert("GANASTEE")
} else {
    alert("Perdiste :(")
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
