

// Juego de PIEDRA, PAPEL ó TIJERAS

alert("Piedra, papel ó Tijera!")
alert("Comienza el juego!")

const playerAttack = [
    { id: 1, attack: "Piedra", img: `https://ibb.co/P526sFm` },
    { id: 2, attack: "Papel", img: `https://ibb.co/D7MnRN6` },
    { id: 3, attack: "Tijera", img: `https://ibb.co/0nJ8Qch` }
]

const enemyAttack = [
    { id: 1, attack: "Piedra", img: `https://ibb.co/k39FpVK` },
    { id: 2, attack: "Papel", img: `https://ibb.co/375S63P` },
    { id: 3, attack: "Tijera", img: `https://ibb.co/cb0TpjL` }
]

/*
playerAttack.forEach((imgAttack) => {
    console.log(imgAttack.img);
    /* document.getElementsByClassName('attackDivs').innerHTML = `
    <div>
        <img class="attack" src="" alt="ataques">
    </div>`
    }
) */

for (const imgAttack of playerAttack) {
    console.log(imgAttack.img);
    
}




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