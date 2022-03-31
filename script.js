

function playSound(e) {
    let keyCodes;
    if (e.type === "click") {
        keyCodes = e.currentTarget.dataset.key;
        this.classList.add("playing")
        console.log(keyCodes);
        audio.currentTime = 0;
        audio.play();
    } else {
        keyCodes = e.keyCode;
    }
    
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
        if(!audio) {
            return
        }
        audio.play();
        key.classList.add("playing")
  
}
function removePlaying(e) {
    if(e.propertyName != "transform") return;
    this.classList.remove("playing")
}

const keys = Array.from(document.querySelectorAll(".key"));

    keys.forEach(key => key.addEventListener("transitionend", removePlaying))
    keys.forEach(key => key.addEventListener("click", playSound));
    window.addEventListener("keydown", playSound)


