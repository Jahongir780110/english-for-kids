import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/styles.css'

import { categories } from './cards.js'
import { changeMode, setStatisticsInLocalStorage } from './helper.js'
import { categoryCards } from './elements.js'
import '../components/theNav.js'

setTimeout(() => {
  changeMode(false, categoryCards)
  setStatisticsInLocalStorage()
}, 0)

categories.forEach(category => {
  const li = document.createElement('li')
  const cardElement = `
    <div class="category-card">
        <a href="./category.html?title=${category.name}">
          <img src="${category.filename}" alt="${category.name}" />
          <h3 class="title mt-3 px-3 mb-0">${category.name}</h3>
          <div class="category-card__footer p-3">
              <span class="cards_count">${category.cards.length} cards</span>
              <span class="mode"></span>
          </div>
        </a>
    </div>`

  li.classList.add('col-lg-3', 'col-md-4', 'col-sm-6', 'col-12')
  li.innerHTML = cardElement
  categoryCards.append(li)
})
