const escenario = document.getElementById("escenario");
const player = document.getElementById("player");
const obstaculo1 = document.getElementById("obstaculo1");


document.addEventListener('keydown', function (tecla) {
    console.log(tecla.key);
    if (tecla.key == 'ArrowUp'){    
    playerJump(); }
});

function playerJump (){
    player.classList.add("jump");
};

player.addEventListener('animationend', () => { 
    player.classList.remove("jump");
});