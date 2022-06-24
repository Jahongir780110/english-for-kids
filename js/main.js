import cards from "./cards.js";

const menuBtn = document.querySelector(".menu-icon");
const sidebar = document.querySelector(".sidebar");
const modeCheckbox = document.querySelector(
  ".toggle-mode input[type=checkbox]"
);
const modeTexts = document.querySelectorAll(".mode-text");
const categoryCards = document.querySelector(".category-cards .row");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("hidden");
  sidebar.querySelector(".backdrop").classList.toggle("hidden");
  menuBtn.querySelector("svg").classList.toggle("inside-sidebar");
});

sidebar.querySelector(".backdrop").addEventListener("click", () => {
  sidebar.classList.toggle("hidden");
  sidebar.querySelector(".backdrop").classList.toggle("hidden");
  menuBtn.querySelector("svg").classList.toggle("inside-sidebar");
});

modeCheckbox.addEventListener("change", (e) => {
  modeTexts[0].classList.toggle("active");
  modeTexts[1].classList.toggle("active");
});

Object.keys(cards).forEach((card) => {
  const li = document.createElement("li");
  const sideBarItem = document.createElement("li");
  li.classList.add("col-lg-3");
  sideBarItem.classList.add("category-item");
  const cardElement = `
    <div class="category-card">
        <img src="./img/${card}.jpg" alt="${card}" />
        <h3 class="title mt-3 px-3 mb-0">${card}</h3>
        <div class="category-card__footer p-3">
            <span class="cards_count">${cards[card].length} cards</span>
            <span class="mode"></span>
        </div>
    </div>`;
  li.innerHTML = cardElement;
  sideBarItem.innerText = card;
  categoryCards.append(li);
  sidebar.querySelector(".categories").append(sideBarItem);
});
