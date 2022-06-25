import cards from "./cards.js";
import { toggleSidebar } from "./helper.js";
import { menuBtn, sidebar, toggleCheckbox, categoryCards } from "./elements.js";

let isPlayMode = false;

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

  li.classList.add("col-lg-3");
  li.innerHTML = cardElement;
  categoryCards.append(li);

  sidebar
    .querySelector(".categories")
    .insertAdjacentHTML("beforeend", sideBarItem);
});

toggleCheckbox
  .querySelector("input[type=checkbox]")
  .addEventListener("change", (e) => {
    isPlayMode = e.target.checked;
    const modeTexts = toggleCheckbox.querySelectorAll(".mode-text");

    modeTexts[0].classList[isPlayMode ? "remove" : "add"]("active");
    modeTexts[1].classList[isPlayMode ? "add" : "remove"]("active");

    categoryCards.querySelectorAll("li .mode").forEach((mode) => {
      mode.classList[isPlayMode ? "add" : "remove"]("play");
    });
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
