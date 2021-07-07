// Get elements
const daysEL = document.getElementById('days'),
      hoursEL = document.getElementById('hours'),
      minutesEL = document.getElementById('minutes'),
      secondsEL = document.getElementById('seconds');


// Countdown date
const countdown = () => {
  // get the countdown time in milliseconds
  const countDate = new Date("Jul 6, 2022 00:00:00").getTime();
  // current time in milliseconds
  const now = new Date().getTime();
  // subtract the two
  const gap =  countDate - now;

  // How does this time work!
  // how many milliseconds in a second? = 1000 milliseconds in a second
  const second = 1000, 
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  // Do the calculations (also need to Math.floor to push down to result)
  const textDay = Math.floor(gap / day);

  // use the modulus (remainder of to get the hour)
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

// Update the elements
  daysEL.textContent = textDay;
  hoursEL.textContent = textHour;
  minutesEL.textContent = textMinute;
  secondsEL.textContent = textSecond;

  // you could launch another function at countdown or display something else
  if(gap < 10000000) {   
    console.log("time has elapsed, launch the rocket!");

    let headlineEL = document.getElementById("heading"),
        timerEL = document.querySelector(".countdown__timer");

    headlineEL.innerText = "Launch the Rocket!";
    timerEL.style.display = "none";
    // stop the setInterval
    clearInterval(startTheCountdown);
  }
};

// use the setInterval method to envoke the countdown function every second
let startTheCountdown = setInterval(countdown, 1000);









