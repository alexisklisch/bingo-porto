export const soundHandler = (num) => {
  const audio = new Audio(`src/assets/sounds/${num}.mp3`)
  audio.play()
    .catch(err => console.log('No existe'))
}