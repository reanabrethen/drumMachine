// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');

//Setup other sounds
const tock = new Audio('sounds/tock.mp3')
const hiHat = new Audio('sounds/hi-hat.mp3')
const kickDrum = new Audio('sounds/kick-drum.mp3')
const snareDrum = new Audio('sounds/snare-drum.mp3')

//checkbox queries
const metronomeBox = document.querySelector('#metronome')
const kickDrumBox = document.querySelector('#kick-drum')
const snareDrumBox = document.querySelector('#snare-drum')
const hiHatBox = document.querySelector('#hi-hat')

//variable to keep track of count
let metronomeCount = 1


// This function is called every 600ms                 @end 
function update() {
   if(metronomeCount > 4){
    metronomeCount = 1
   }
    if(metronomeCount === 4 && metronomeBox.checked){
        tock.play()
    }else if(metronomeBox.checked ){
        tick.play()
    }if(kickDrumBox.checked){
        kickDrum.play()
    }if(snareDrumBox.checked){
        snareDrum.play()
    }if(hiHatBox.checked){
        hiHat.play()
    }
   
    const displayCount = document.querySelector('#content')
    displayCount.innerText = metronomeCount
    metronomeCount++
}

// }

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);


//function called every 2400ms
function addTock(){
    //play the 'tock' sound
    tock.play()
}

// function sets up addTock() to be called every 2400ms
// function setUpAddTock(){
//     setInterval(addTock, 2400)
// }

//call setUpAddTock () once every 1200ms
// setTimeout(setUpAddTock, 1200)