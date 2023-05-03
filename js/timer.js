export function Timer({ 
  minutesDisplay, 
  secondsDisplay, 
}) {

  let timerTimeOut

  function updateMinutesDisplay(minutes) {
    minutesDisplay.textContent = String(minutes - 1).padStart(2, "0")
  }
  
  function updateSecondsDisplay(seconds) {
    secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")
  }
  
  function countdown() {
    timerTimeOut = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
  
      if (minutes <= 0 && seconds <= 0) {
        minutesDisplay.textContent = "25"
        secondsDisplay.textContent = "00"
        return
      }
  
      if (seconds <= 0) {
        seconds = 60
        updateMinutesDisplay(minutes)
      }
  
      updateSecondsDisplay(seconds)
      countdown()
    }, 1000)
  }
  
  function plusFive() {
    let minutes = Number(minutesDisplay.textContent)
    minutes += 6
    updateMinutesDisplay(minutes)
  }
  
  function minusFive() {
    let minutes = Number(minutesDisplay.textContent)
    minutes -= 4
    if (minutes <= 0) {
      return "00"
    }
    updateMinutesDisplay(minutes)
  }clearTimeout(timerTimeOut);

  function hold() {
    clearTimeout(timerTimeOut)
  }
  
  return {
    countdown,
    plusFive,
    minusFive,
    hold
  }

}

