const sounds = [
    'clap',
    'hihat',
    'kick',
    'openhat',
    'boom',
    'snare',
    'tom',
    'tink',
    'ride',
]

const keyletters = [
    'J',
    'Q',
    'M',
    'P',
    'C',
    'O',
    'Z',
    'Y',
    'T',
]
const allkey = document.querySelector(".keys")
sounds.forEach((soundss) => {
    const btn = document.createElement("div");
    btn.classList.add('key');
    

    const keyb = document.createElement("kbd");
    keyb.innerText = soundss
    btn.appendChild(keyb);
    allkey.appendChild(btn)

    btn.addEventListener("click", () => {
        document.getElementById(soundss).play()
    })

    keyletters.forEach((keyr) => {
        return keyr
    })
})  




// function playSound(e) {
    
    
//     var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
//     var key = document.querySelector(`div[data-key="${e.keyCode}"]`)
//         if(!audio) return;
        
//         audio.currentTime = 0;
//         audio.play();
//         console.log( "second", audio)
//         key.classList.add("playing")
        
  
// }

// function lll(e) {
//     var audios = document.querySelector(`audio[data-key="${e.keyCode}"]`)
//     let keyCodes;
//     if (e.type === "click") {
//         keyCodes = playSound(e)
//         console.log( "first", keyCodes)
//         this.classList.add("playing")
        
       

//     } else {
//         keyCodes = e.keyCode;
//         console.log("third", keyCodes)
       
//     }
// }
// function removePlaying(e) {
//     if(e.propertyName != "transform") return;
//     this.classList.remove("playing")
// }

// const keys = Array.from(document.querySelectorAll(".key"));

//     keys.forEach(key => key.addEventListener("transitionend", removePlaying))
//     keys.forEach(key => key.addEventListener("click", lll));
//     window.addEventListener("keydown", playSound)


