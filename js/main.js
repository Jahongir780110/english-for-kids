import cards from "./cards.js";
import {toggleSidebar, changeMode} from "./helper.js";
import {menuBtn, sidebar, toggleCheckbox, categoryCards} from "./elements.js";

if (!localStorage.getItem("statistics")) {
  let index = 1;
  const stats = [];

  for (const category in cards) {
    for (const card of cards[category]) {
      const data = {
        id: index++,
        category: category,
        word: card.word,
        translation: card.translation,
        clicksTraining: 0,
        clicksGame: 0,
        wrong: 0,
        imgUrl: card.image,
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

Object.keys(cards).forEach((card) => {
  const li = document.createElement("li");
  const cardElement = `
    <div class="category-card">
        <a href="./category.html?title=${card}">
          <img src="./img/${card}.jpg" alt="${card}" />
          <h3 class="title mt-3 px-3 mb-0">${card}</h3>
          <div class="category-card__footer p-3">
              <span class="cards_count">${cards[card].length} cards</span>
              <span class="mode"></span>
          </div>
        </a>
    </div>`;
  const sideBarItem = `
    <li class="category-item">
      <a href="./category.html?title=${card}">  
        ${card}
      </a>
    </li>
  `;

  li.classList.add("col-lg-3", "col-md-4", "col-sm-6", "col-12");
  li.innerHTML = cardElement;
  categoryCards.append(li);

  sidebar
    .querySelector(".categories")
    .insertAdjacentHTML("beforeend", sideBarItem);
});
sidebar.querySelector(".categories").insertAdjacentHTML(
  "beforeend",
  `
    <li class="category-item">
      <a href="./statistics.html">  
        Statistics
      </a>
    </li>
  `
);

toggleCheckbox
  .querySelector("input[type=checkbox]")
  .addEventListener("change", (e) => {
    changeMode(e.target.checked, categoryCards);
  });

menuBtn.addEventListener("click", () => {
  toggleSidebar(true);
});

sidebar.querySelector(".backdrop").addEventListener("click", () => {
  toggleSidebar(false);
});

sidebar.querySelector(".sidebar-close").addEventListener("click", () => {
  toggleSidebar(false);
});
