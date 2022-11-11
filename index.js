
function playclick(letter){
document.getElementById(letter).play();
document.getElementById("display").innerText = `Button ${letter} has been clicked`
}

document.addEventListener('keypress', function(event){
    let pressed = event.key;
    pressed = pressed.toUpperCase()
    document.getElementById(pressed).play();
    document.getElementById("display").innerText = `Key ${pressed} has been pressed`;
})

