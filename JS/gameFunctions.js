const buttonPlayStop = document.getElementById("buttonPlayStop");

const escenarioAnimation = document.getElementById("escenario");
const playerAnimation = document.getElementById("player");
const obstaculo1Animation = document.getElementById("obstaculo1");

buttonPlayStop.addEventListener('click', () => {
    if (buttonPlayStop.classList.contains("play")) {
        playGame()
    } else {
        pauseGame();
    }
    buttonPlayStop.classList.toggle("play");
});

function pauseGame() {
    escenarioAnimation.style.animationPlayState = 'paused';
    playerAnimation.style.animationPlayState = 'paused';
    obstaculo1Animation.style.animationPlayState = 'paused';
}

function playGame() {
    escenarioAnimation.style.animationPlayState = 'running';
    playerAnimation.style.animationPlayState = 'running';
    obstaculo1Animation.style.animationPlayState = 'running';
}