const daysEl  = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')
const headingOne = document.getElementById('heading1')





const newYears = "a jan 2022";

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = ((newYearsDate - currentDate)/1000);

     const daysRemaining = Math.floor(totalSeconds/3600/24);

    const hoursRemaining = Math.floor(totalSeconds/3600) % 24;

    const minutesRemaining = Math.floor((totalSeconds/60) % 60);
    
    const secondsRemaining = Math.floor(totalSeconds % 60);


daysEl.innerHTML = daysRemaining;
hoursEl.innerHTML = hoursRemaining;
minutesEl.innerHTML =minutesRemaining;
secondsEl.innerHTML = secondsRemaining;

let d = new Date();
let nextYear = d.getFullYear() +1 ;

headingOne.innerHTML = nextYear + " is coming!!";


console.log(currentDate);
        

    
}

countdown();

setInterval(countdown,1000);