import { Controls } from'./controls.js'
import { Timer } from './timer.js'

const audioForest = new Audio("./assets/forest.wav")
const audioRain = new Audio("./assets/rain.wav")
const audioCoffeeShop = new Audio("./assets/coffeeshop.wav")
const audioFirePlace = new Audio("./assets/fireplace.wav")

const buttonTimer = document.querySelector("#timer")
const buttonPlay = document.querySelector(".play")
const buttonStop = document.querySelector(".stop")
const buttonPlusFive = document.querySelector(".plusfive")
const buttonMinusFive = document.querySelector(".minusfive")
const buttonForest = document.querySelector(".forest")
const buttonRain = document.querySelector(".rain")
const buttonCoffeeShop = document.querySelector(".coffeeshop")
const buttonFirePlace = document.querySelector(".fireplace")
const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")
const changeColorLight = document.querySelector(".sun")
const changeColorDark = document.querySelector(".moon")

let inputForest = document.getElementById("vol1");
let inputRain = document.getElementById("vol2");
let inputCoffeeshop = document.getElementById("vol3");
let inputFireplace = document.getElementById("vol4");

let currentAudio = null

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
})

const control = Controls({
  currentAudio,
  audioForest,
  audioRain,
  audioCoffeeShop,
  audioFirePlace,
  buttonForest,
  buttonRain,
  buttonCoffeeShop,
  buttonFirePlace,
  minutesDisplay,
  secondsDisplay,
  buttonTimer,
})

buttonTimer.addEventListener('click', function() {
  let minutesInput = prompt("Enter the minutes of the timer:");
  if (minutesInput) {
  minutesDisplay.textContent = String(minutesInput).padStart(2, "0");
  secondsDisplay.textContent = String("00")
  }
});

buttonPlay.addEventListener("click", function () {
  timer.countdown()
})

buttonStop.addEventListener("click", function () {
  timer.hold()
})

buttonPlusFive.addEventListener("click", function () {
  timer.plusFive()
})

buttonMinusFive.addEventListener("click", function () {
  timer.minusFive()
})

changeColorLight.addEventListener("click", function () {
  changeColorDark.classList.remove("hide")
  changeColorLight.classList.add("hide")
  document.body.classList.add("dark-mode")
})

changeColorDark.addEventListener("click", function () {
  changeColorDark.classList.add("hide")
  changeColorLight.classList.remove("hide")
  document.body.classList.remove("dark-mode")
})

buttonForest.addEventListener("click", function () {
  control.playAudioForest(audioForest)
  buttonForest.classList.toggle("active")
  inputForest.classList.toggle("active")
})

buttonRain.addEventListener("click", function () {
  control.playAudioRain(audioRain)
  buttonRain.classList.toggle("active")
  inputRain.classList.toggle("active")
})

buttonCoffeeShop.addEventListener("click", function () {
  control.playAudioCoffeeShop(audioCoffeeShop)
  buttonCoffeeShop.classList.toggle("active")
  inputCoffeeshop.classList.toggle("active")
})

buttonFirePlace.addEventListener("click", function () {
  control.playAudioFirePlace(audioFirePlace)
  buttonFirePlace.classList.toggle("active")
  inputFireplace.classList.toggle("active")
})

inputForest.addEventListener("input", function () {
  audioForest.volume = inputForest.value / 100
})

inputRain.addEventListener("input", function () {
  audioRain.volume = inputRain.value / 100
})

inputCoffeeshop.addEventListener("input", function () {
  audioCoffeeShop.volume = inputCoffeeshop.value / 100
})

inputFireplace.addEventListener("input", function () {
  audioFirePlace.volume = inputFireplace.value / 100
})



