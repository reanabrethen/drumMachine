// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');


//variable to keep track of count
let metronomeCount = 0


// This function is called every 600ms
function update() {
    if(metronomeCount % 4 === 0){
    //    console.log('tock')
        tock.play() 
       metronomeCount++
    }else{
    // Play the 'tick' sound
    console.log(metronomeCount)
    tick.play(); 
    metronomeCount++
}   
 const displayCount = document.querySelector('#content')
displayCount.innerText = metronomeCount


}



// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);


//setup 'tock' sound
const tock = new Audio('sounds/tock.mp3')

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
setTimeout(setUpAddTock, 1200)