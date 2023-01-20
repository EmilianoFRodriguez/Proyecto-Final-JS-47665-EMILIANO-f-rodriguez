//SCORE

let score = 0;
let scoreInterval;


function scorePlay() {
    scoreInterval = setInterval(() => {
        score++;
        document.getElementById("score").innerHTML = score;
    }, 1000);
};

function scorePause() {
    clearInterval(scoreInterval);
};


//Boton de PAUSE/PLAY

const buttonPlayStop = document.getElementById("buttonPlayStop");

const escenarioAnimation = document.getElementById("escenario");
const playerAnimation = document.getElementById("player");
const obstaculo1Animation = document.getElementById("obstaculo1");



pauseGame();




function pauseGame() {
    escenarioAnimation.style.animationPlayState = 'paused';
    playerAnimation.style.animationPlayState = 'paused';
    obstaculo1Animation.style.animationPlayState = 'paused';
    scorePause();
};

function playGame() {
    escenarioAnimation.style.animationPlayState = 'running';
    playerAnimation.style.animationPlayState = 'running';
    obstaculo1Animation.style.animationPlayState = 'running';
    scorePlay();
};

document.addEventListener('keydown', function (tecla) {
    let teclaP = tecla.key.toLowerCase();
    if (teclaP == 'p') {
        keyPlayStop();
    }
});

function keyPlayStop() {
    if (buttonPlayStop.classList.contains("play")) {
        playGame();
    } else {
        pauseGame();  
    }
    buttonPlayStop.classList.toggle("play");
};


//Datos de dimensiones PLAYER

let playerX = playerAnimation.getBoundingClientRect().left;
let playerY = playerAnimation.getBoundingClientRect().top;
let playerBottomJump = playerAnimation.getBoundingClientRect().bottom + 145;

//Datos de dimensiones de OBSTACULO 1

let obstaculo1X = obstaculo1Animation.getBoundingClientRect().left;
let obstaculo1Y = obstaculo1Animation.getBoundingClientRect().top;

//Datos del juego

let velocidad = 2;

// mover obstaculo

function obstaculoMove() {
    if (condition) {
        
    }
    
}

