let sec = document.querySelector("#seconds");
let msec = document.querySelector("#milliseconds");
let mins = document.querySelector("#minutes");
let time = document.querySelector("#time");
let tBody = document.querySelector("#tBody");
let refresh = document.querySelector("#refresh");
let startBtn = document.querySelector("#startBtn");
let stopBtn = document.querySelector("#stopBtn");
let resetBtn = document.querySelector("#resetBtn");


let myTimer;
let myCounter = 0;
let myMilliSeconds = 0;
let mySeconds = 0;
let myMinutes = 0;

let number = 1;

stopBtn.disabled = true;
resetBtn.disabled = true;
lapBtn.disabled = true;

startBtn.addEventListener('click', function () {
    startBtn.classList.add("active");
    lapBtn.classList.remove("active");
    stopBtn.classList.remove("active");
    startBtn.disabled = true;
    stopBtn.disabled = false;
    resetBtn.disabled = false;
    lapBtn.disabled = false;

    myTimer = setInterval( function () {
        myCounter++;
        myMilliSeconds = myCounter;

        msec.innerHTML = myMilliSeconds;
        
        if (myMilliSeconds > 99) {
        msec.innerHTML = "00";
        myCounter = 0;
        mySeconds++;
        sec.innerHTML = mySeconds;
        
        } else if (myMilliSeconds > 10) {
        msec.innerHTML = myMilliSeconds;
        } else {
        msec.innerHTML = "0" + myMilliSeconds;
        }

          
        if (mySeconds > 59) {
        sec.innerHTML = "00"
        msec.innerHTML = "00"
        mySeconds = 0;
        myMilliSeconds = 0;
        myCounter = 0;
        myMinutes++;
        min.innerHTML = myMinutes;
        
        } else if (mySeconds < 10) {
            sec.innerHTML = "0" + mySeconds;
        } else {
            sec.innerHTML = mySeconds;
        }


        if (myMinutes < 10) {
            min.innerHTML = "0" + myMinutes;
        } else {
            min.innerHTML = myMinutes;
        }
       
    }, 0.001);
    
});
stopBtn.addEventListener('click', function() {
    stopBtn.classList.add("active");
    startBtn.classList.remove("active");
    lapBtn.classList.remove("active");
    startBtn.disabled = false;
    stopBtn.disabled = true;
    lapBtn.disabled = true;
    resetBtn.disabled = false;
    clearInterval(myTimer);
});
lapBtn.addEventListener('click', function () {
    lapBtn.classList.add("active");
    stopBtn.classList.remove("active");
    startBtn.classList.remove("active");
    
    let newRow = document.createElement("tr");

    let newNumber = document.createElement("td");
    let newTotal = document.createElement("td");

    newNumber.innerHTML = number++;
    newTotal.innerHTML = time.innerHTML;

    newRow.appendChild(newNumber);
    newRow.appendChild(newTotal);


    tBody.appendChild(newRow);

    startBtn.disabled = true;
    stopBtn.disabled = false;
    lapBtn.disabled = false;
    resetBtn.disabled = true;

});
resetBtn.addEventListener('click', function() {
    refresh.click();
    startBtn.disabled = false;
    stopBtn.disabled = true;
    lapBtn.disabled = true;
    resetBtn.disabled = true;
});