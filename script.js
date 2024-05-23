let startBtn = document.getElementById("start-btn");
let stopBtn = document.getElementById("stop-btn");
let resetBtn = document.getElementById("reset-btn");
let minuteElement = document.getElementById("minute");
let secondsElement = document.getElementById("second");

//variables to keep track of the timer elements
let minuteElapsed = 0;
let secondElapsed = 0;

let timer;

//starts the timer whenever the button is clicked
startBtn.addEventListener("click", () => {
    timer = setInterval(() => {
        secondElapsed++;
        if (secondElapsed === 60) {
            minuteElapsed++;
            if (minuteElapsed === 60) {
                // timer limit reached 
                //shut down timer 
                clearInterval(timer);
                alert("60 minute completed");
            }
            secondElapsed = 0;
        }
        updateTimerDetails();
    }, 1000);
    //must disable start button so that
    //we don't create multiple timers 
    startBtn.disabled = true;
    startBtn.classList.toggle("hover-eff");
});

stopBtn.addEventListener("click", () => {
    if (timer) {
        clearInterval(timer);
        //enabling start button to start the timer again
        startBtn.disabled = false;
        startBtn.classList.toggle("hover-eff");
    }


});

//reset button stops the timer if it is running 
//reset button will reset the timer value every time it is clicked
resetBtn.addEventListener("click", () => {
    if (timer) {
        clearInterval(timer);
        //enabling start button 
        startBtn.disabled = false;
        startBtn.classList.toggle("hover-eff");
    }
    minuteElapsed = 0;
    secondElapsed = 0;
    updateTimerDetails();
});

//method to update the text content of the span elements 
//in html
function updateTimerDetails() {
    minuteElement.textContent = `${minuteElapsed}`.padStart(2, 0);
    secondsElement.textContent = `${secondElapsed}`.padStart(2, 0);
}

function toggleStartBtn() {
    startBtn.disabled = isTimerStarted;
}