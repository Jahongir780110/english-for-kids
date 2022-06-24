import cards from "./cards.js";

let isPlayMode = false;
const field = new URLSearchParams(window.location.search).get("title");

const menuBtn = document.querySelector(".menu-icon");
const sidebar = document.querySelector(".sidebar");
const toggleCheckbox = document.querySelector(".toggle-mode");
const cardList = document.querySelector(".cards-list .row");
const title = document.querySelector(".main-content .title");

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

title.innerText = field;

toggleCheckbox
  .querySelector("input[type=checkbox]")
  .addEventListener("change", (e) => {
    const modeTexts = toggleCheckbox.querySelectorAll(".mode-text");
    isPlayMode = e.target.checked;

    if (isPlayMode) {
      modeTexts[0].classList.remove("active");
      modeTexts[1].classList.add("active");
      cardList.querySelectorAll("li").forEach((card) => {
        card.querySelector(".mode").classList.add("play");
      });
    } else {
      modeTexts[0].classList.add("active");
      modeTexts[1].classList.remove("active");
      cardList.querySelectorAll("li").forEach((card) => {
        card.querySelector(".mode").classList.remove("play");
      });
    }
  });

Object.keys(cards).forEach((card) => {
  let actieClass = "";
  if (field === card) {
    actieClass = "active";
  }
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

  li.classList.add("col-lg-3");
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
        <div class="footer text-end p-3">
            <span class="mode"></span>
        </div>
      </div>`;
  li.innerHTML = cardElement;
  cardList.append(li);
});
