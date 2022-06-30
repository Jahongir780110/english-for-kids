import cards from "./cards.js";
import {toggleSidebar, playAudio, reverseCard, changeMode} from "./helper.js";
import {menuBtn, sidebar, toggleCheckbox, cardList, title} from "./elements.js";
import {initGame} from "./startGame.js";

const stats = JSON.parse(localStorage.getItem("statistics"));
const data = [];
let count = 0;

stats.sort((a, b) => {
  a = a.wrong === 0 ? 0 : a.wrong / a.clicksGame;
  b = b.wrong === 0 ? 0 : b.wrong / b.clicksGame;

  return b - a;
});

for (const stat of stats) {
  const val = stat.wrong === 0 ? 0 : stat.wrong / stat.clicksGame;
  if (val === 0 || count === 7) break;
  data.push(stat);
  count++;
}

title.innerText = "Train difficult words";

Object.keys(cards).forEach((card) => {
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

data.forEach((card) => {
  const li = document.createElement("li");
  const cardElement = `
      <div class="cards-list__card">
        <img src="./${card.imgUrl}" alt="${card.word}" />
        <div class="top mt-3 px-3">
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

  li.classList.add("col-lg-3", "col-md-4", "col-sm-6", "col-12");
  li.innerHTML = cardElement;
  cardList.append(li);

  li.querySelector(".cards-list__card").addEventListener("click", () => {
    if (localStorage.getItem("isPlayMode") !== "true") {
      const stats = JSON.parse(localStorage.getItem("statistics"));
      playAudio(`../${card.audioSrc}`);

      const targetWord = stats.find(
        (stat) =>
          stat.word === card.word && stat.translation === card.translation
      );
      targetWord.clicksTraining++;
      localStorage.setItem("statistics", JSON.stringify(stats));
    }
  });

  li.querySelector(".reverse").addEventListener("click", (e) => {
    e.stopPropagation();
    reverseCard(true, li, card);
  });
  li.addEventListener("mouseleave", () => {
    reverseCard(false, li, card);
  });
});

initGame(data);

toggleCheckbox
  .querySelector("input[type=checkbox]")
  .addEventListener("change", (e) => {
    changeMode(e.target.checked, cardList, true);
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
