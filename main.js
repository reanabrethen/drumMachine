// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');

//Setup other sounds
const tock = new Audio('sounds/tock.mp3')
const hiHat = new Audio('sounds/hi-hat.mp3')
const kickDrum = new Audio('sounds/kick-drum.mp3')
const snareDrum = new Audio('sounds/snare-drum.mp3')
const technoBells = new Audio('sounds/techno-bells.mp3')
const saxident = new Audio ('sounds/saxident.mp3')
const stomp = new Audio ('sounds/the-stomp.wav')

//checkbox queries
const metronomeBox = document.querySelector('#metronome')
const kickDrumBox = document.querySelector('#kick-drum')
const snareDrumBox = document.querySelector('#snare-drum')
const hiHatBox = document.querySelector('#hi-hat')
const technoBellsBox = document.querySelector('#techno-bells')
const saxidentBox = document.querySelector('#saxident')
const stompBox = document.querySelector('#the-stomp')

//variable to keep track of count
let metronomeCount = 1

//timing queries
const kickDrumTiming = document.querySelector('#kick-drum-timing')
const snareDrumTiming = document.querySelector('#snare-drum-timing')
const hiHatTiming = document.querySelector('#hi-hat-timing')
const technoBellsTiming = document.querySelector('#techno-bells-timing')
const saxidentTiming = document.querySelector('#saxident-timing')
const stompTiming = document.querySelector('#the-stomp-timing')


// This function is called every 600ms                 @end 
function update() {
    // console.log(typeof kickDrumTiming.value)
   if(metronomeCount > 4){
    metronomeCount = 1
   }
    if(metronomeCount === 4 && metronomeBox.checked){
        tock.play()
    }else if(metronomeBox.checked){
            tick.play()
    }if(kickDrumBox.checked && metronomeCount === parseInt(kickDrumTiming.value)){
           kickDrum.play()
    }if(snareDrumBox.checked && metronomeCount === parseInt(snareDrumTiming.value)){
        snareDrum.play()
    }if(hiHatBox.checked && metronomeCount === parseInt(hiHatTiming.value)){
        hiHat.play()
    }if(saxidentBox.checked && metronomeCount === parseInt(saxidentTiming.value)){
        saxident.play()
    }if(technoBellsBox.checked && metronomeCount === parseInt(technoBellsTiming.value)){
        technoBells.play()
    }if(stompBox.checked && metronomeCount === parseInt(stompTiming.value)){   
      stomp.play()
    }
   
    const displayCount = document.querySelector('#content')
    displayCount.innerText = metronomeCount
    metronomeCount++
}


// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);


function addTock(){
    //play the 'tock' sound
    tock.play()
}


//**!!do not need as an interval has already been set!!**
// function sets up addTock() to be called every 2400ms
// function setUpAddTock(){
//     setInterval(addTock, 2400)
// }

//call setUpAddTock () once every 1200ms
// setTimeout(setUpAddTock, 1200)