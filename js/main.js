import cards from "./cards.js";

let isPlayMode = false;

const menuBtn = document.querySelector(".menu-icon");
const sidebar = document.querySelector(".sidebar");
const toggleCheckbox = document.querySelector(".toggle-mode");
const categoryCards = document.querySelector(".category-cards .row");

import {toggleSidebar} from "./helper.js";

menuBtn.addEventListener("click", () => {
  toggleSidebar();
});

sidebar.querySelector(".backdrop").addEventListener("click", () => {
  toggleSidebar();
});

sidebar.querySelector(".sidebar-close").addEventListener("click", () => {
  toggleSidebar();
});

toggleCheckbox
  .querySelector("input[type=checkbox]")
  .addEventListener("change", (e) => {
    const modeTexts = toggleCheckbox.querySelectorAll(".mode-text");
    isPlayMode = e.target.checked;

    if (isPlayMode) {
      modeTexts[0].classList.remove("active");
      modeTexts[1].classList.add("active");
      categoryCards.querySelectorAll("li").forEach((card) => {
        card.querySelector(".mode").classList.add("play");
      });
    } else {
      modeTexts[0].classList.add("active");
      modeTexts[1].classList.remove("active");
      categoryCards.querySelectorAll("li").forEach((card) => {
        card.querySelector(".mode").classList.remove("play");
      });
    }
  });

Object.keys(cards).forEach((card) => {
  const li = document.createElement("li");
  li.classList.add("col-lg-3");
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
  li.innerHTML = cardElement;
  categoryCards.append(li);

  const sideBarItem = `
      <li class="category-item">
        <a href="./category.html?title=${card}">  
          ${card}
        </a>
      </li>
  `;
  sidebar
    .querySelector(".categories")
    .insertAdjacentHTML("beforeend", sideBarItem);
});