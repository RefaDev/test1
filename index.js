const inputEl = document.querySelector('input')
const buttonEl = document.querySelector('button')
const timerEl = document.querySelector('span')

const addZero = (timeEl) => (timeEl < 10 ? '0' + timeEl : timeEl)
// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    const timer = setInterval(() => {
      if (seconds >= 0) {
        let hours = Math.floor((seconds / 60 / 60) % 60),
          minutes = Math.floor((seconds / 60) % 60),
          second = seconds % 60

        hours = addZero(hours)
        minutes = addZero(minutes)
        second = addZero(second)

        timerEl.innerHTML = `${hours}:${minutes}:${second}`
      } else {
        timerEl.innerHTML = `Время вышло`
        clearInterval(timer)
        inputEl.value = ''
      }
      --seconds
    }, 1)
  }
}

const animateTimer = createTimerAnimator()

inputEl.addEventListener('input', (e) => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  this.value = e.target.value
})

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value)

  animateTimer(seconds)
})
