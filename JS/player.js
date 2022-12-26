const player = document.getElementById("player")


document.addEventListener("click", () => {
    player.classList.add("jump");
}); 

player.addEventListener('animationend', () => {
    player.classList.remove("jump");
}); 