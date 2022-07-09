import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";

import {categories} from "./cards.js";
import {changeMode} from "./helper.js";
import {categoryCards} from "./elements.js";
import "../components/theNav.js";

if (!localStorage.getItem("statistics")) {
  let index = 1;
  const stats = [];

  for (const category of categories) {
    for (const card of category.cards) {
      const data = {
        id: index++,
        category: category.name,
        word: card.word,
        translation: card.translation,
        clicksTraining: 0,
        correct: 0,
        wrong: 0,
        filename: card.filename,
        audioSrc: card.audioSrc,
      };
      stats.push(data);
    }
  }

  localStorage.setItem("statistics", JSON.stringify(stats));
}

setTimeout(() => {
  changeMode(false, categoryCards);
}, 0);

categories.forEach((category) => {
  const li = document.createElement("li");
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
    </div>`;

  li.classList.add("col-lg-3", "col-md-4", "col-sm-6", "col-12");
  li.innerHTML = cardElement;
  categoryCards.append(li);
});
