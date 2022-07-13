import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/styles.css'

import { changeMode, fillCards, setStatisticsInLocalStorage } from './helper.js'
import { cardList, title } from './elements.js'
import { initGame } from './startGame.js'
import '../components/theNav.js'

const stats = JSON.parse(localStorage.getItem('statistics'))
const data = []
let count = 0

setTimeout(() => {
  changeMode(false, cardList)
  initGame(data)
  setStatisticsInLocalStorage()
}, 0)

stats.sort((a, b) => {
  return b.wrong - a.wrong
})

for (const stat of stats) {
  if (stat.wrong === 0 || count === 8) break

  data.push(stat)
  count++
}

if (!data.length) {
  const toggleCheckbox = document.querySelector('.toggle-mode')
  toggleCheckbox.classList.remove('d-flex')
  toggleCheckbox.classList.add('d-none')
  title.innerText = 'There are no difficult words'
  title.classList.add('text-center', 'text-danger')
  setTimeout(() => {
    window.location = './'
  }, 3000)
} else {
  fillCards(data, cardList)
}
