// Funcion de salto para el player

const player = document.getElementById("player");

document.addEventListener('keydown', function (tecla) {
    console.log(tecla.key);
    if (tecla.key == ' '){    
    playerJump(); }
});

function playerJump (){
    player.classList.add("jump");
};

player.addEventListener('animationend', () => { 
    player.classList.remove("jump");
});