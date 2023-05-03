export function Controls({
  audioForest,
  audioRain,
  audioCoffeeShop,
  audioFirePlace,
  buttonForest,
  buttonRain,
  buttonCoffeeShop,
  buttonFirePlace
}) {

function playAudio(audio, button) {
  if (audio.paused) {
    audio.loop = true
    audio.play()
    return
  } else {
    audio.pause()
    return
  }
}
  function playAudioForest() {
    playAudio(audioForest, buttonForest)
  }

  function playAudioRain() {
    playAudio(audioRain, buttonRain)
  }

  function playAudioCoffeeShop() {
    playAudio(audioCoffeeShop, buttonCoffeeShop)
  }

  function playAudioFirePlace() {
    playAudio(audioFirePlace, buttonFirePlace)
  }  

  return {
    playAudio,
    playAudioForest,
    playAudioRain,
    playAudioCoffeeShop,
    playAudioFirePlace,
  }
}
