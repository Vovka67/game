var character = document.getElementById("character");

document.addEventListener("click",  jump);
 
function jump () {
    if(character.classList.contains("animate") == true) {
        return;
    } else {
        character.classList.add("animate");
        setTimeout(removeJump, 600); /*скорость прыжка*/ 
    }
} 

function removeJump () {
    character.classList.remove("animate");
}

let isAlive = setInterval (function () {
    let paimon = parseInt(window.getComputedStyle(character).getPropertyValue('top'))
    let slaim = parseInt(window.getComputedStyle(block).getPropertyValue('left'))
    if (slaim < 10 && slaim > 0 && paimon >= 480){
        alert('Game Over')
    }
},10)
