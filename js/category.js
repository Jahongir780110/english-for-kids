import cards from "./cards.js";
import { toggleSidebar, playAudio, reverse } from "./helper.js";
import {
  menuBtn,
  sidebar,
  toggleCheckbox,
  cardList,
  title,
} from "./elements.js";

let isPlayMode = false;
const field = new URLSearchParams(window.location.search).get("title");

title.innerText = field;

Object.keys(cards).forEach((card) => {
  const actieClass = field === card ? "active" : "";
  const sideBarItem = `
      <li class="category-item ${actieClass}">
        <a href="./category.html?title=${card}">  
          ${card}
        </a>
      </li>
  `;
  sidebar
    .querySelector(".categories")
    .insertAdjacentHTML("beforeend", sideBarItem);
});

cards[field].forEach((card) => {
  const li = document.createElement("li");
  const cardElement = `
      <div class="cards-list__card">
        <img src="./${card.image}" alt="${card.word}" />
        <div class="top mt-3 px-3 d-flex align-items-center justify-content-between">
            <h3 class="title mb-0">${card.word}</h3>
            <svg xmlns="http://www.w3.org/2000/svg" class="reverse" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
            </svg>
        </div>
        <div class="footer p-3">
            <span class="mode"></span>
        </div>
      </div>`;

  li.classList.add("col-lg-3");
  li.innerHTML = cardElement;
  cardList.append(li);

  li.querySelector(".cards-list__card").addEventListener("click", () => {
    playAudio(`../${card.audioSrc}`);
  });

  li.querySelector(".reverse").addEventListener("click", (e) => {
    e.stopPropagation();
    reverse(true, li, card);
  });
  li.addEventListener("mouseleave", () => {
    reverse(false, li, card);
  });
});

toggleCheckbox
  .querySelector("input[type=checkbox]")
  .addEventListener("change", (e) => {
    isPlayMode = e.target.checked;
    const modeTexts = toggleCheckbox.querySelectorAll(".mode-text");

    modeTexts[0].classList[isPlayMode ? "remove" : "add"]("active");
    modeTexts[1].classList[isPlayMode ? "add" : "remove"]("active");

    cardList.querySelectorAll("li .mode").forEach((mode) => {
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
