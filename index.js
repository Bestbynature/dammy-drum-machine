
// function playclick(letter){
// document.getElementById(letter).play();
// document.getElementById("display").innerText = `Button ${letter} has been clicked`
// }

document.addEventListener('keypress', function(event){
    let pressed = event.key, letters = "qweasdzxc";
    pressed = pressed.toUpperCase();
    if (!(letters.toUpperCase()).includes(pressed)) return
    document.getElementById(pressed).play();
    document.getElementById("display").innerText = `Key ${pressed} has been pressed`;
})

let buttons =  document.getElementsByClassName("drum-pad");

buttons = Array.from(buttons).map(button=>{
    button.addEventListener('click', (e)=>{
        document.getElementById(e.target.innerText).play();
        document.getElementById("display").innerText = `Button ${e.target.innerText} has been clicked`
    })
})
