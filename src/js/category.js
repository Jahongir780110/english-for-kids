import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/styles.css'

import { categories } from './cards.js'
import { changeMode, fillCards } from './helper.js'
import { cardList, title } from './elements.js'
import { initGame } from './startGame.js'
import '../components/theNav.js'

const field = new URLSearchParams(window.location.search).get('title')
const category = categories.find(c => c.name === field)
const isPlayMode = JSON.parse(localStorage.getItem('isPlayMode'))

title.innerText = field

setTimeout(() => {
  changeMode(isPlayMode, cardList, true)
  initGame(category.cards)
}, 0)

fillCards(category.cards, cardList)
