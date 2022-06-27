import cards from "./cards.js";
import {cardList, toggleCheckbox} from "./elements.js";

function playGame() {
  randomIndex = Math.floor(Math.random() * data.length);
  const audio = new Audio(`../${data[randomIndex].audioSrc}`);
  audio.play();
}
function finishGame() {
  data = [...cards[new URLSearchParams(window.location.search).get("title")]];
  isPlaying = false;
  randomIndex = null;
  errors = 0;
  gameBtn.innerText = "Start game";
  cardList.querySelectorAll(".cards-list__card").forEach((cardElement) => {
    delete cardElement.dataset.error;
  });

  const result = document.querySelector(".result");
  const mainContent = document.querySelector(".main-content");
  const img = document.createElement("img");

  result.removeAttribute("hidden");
  mainContent.setAttribute("hidden", true);

  if (errors) {
    img.setAttribute("src", "../img/excellent.png");
    img.setAttribute("alt", "excellent");
  } else {
    img.setAttribute("src", "../img/fail.png");
    img.setAttribute("alt", "fail");
  }

  result.appendChild(img);

  setTimeout(() => {
    result.setAttribute("hidden", true);
    mainContent.removeAttribute("hidden");
  }, 5000);
}

let data = [...cards[new URLSearchParams(window.location.search).get("title")]];
const gameBtn = document.querySelector(".game-button");

let isPlaying = false;
let randomIndex = null;
let errors = 0;

setTimeout(() => {
  cardList.querySelectorAll(".cards-list__card").forEach((cardElement) => {
    cardElement.addEventListener("click", () => {
      if (!isPlaying) return;
      if (
        cardElement.querySelector(".title").innerText === data[randomIndex].word
      ) {
        const audio = new Audio("../audio/correct.mp3");
        audio.play();
        cardElement.dataset.error = true;
        data.splice(randomIndex, 1);
        setTimeout(() => {
          data.length ? playGame() : finishGame();
        }, 1000);
      } else {
        errors++;
        if (!cardElement.dataset.error) {
          const audio = new Audio("../audio/error.mp3");
          audio.play();
        }
      }
    });
  });
}, 0);

gameBtn.addEventListener("click", () => {
  if (isPlaying) {
    const audio = new Audio(`../${data[randomIndex].audioSrc}`);
    audio.play();
    return;
  }
  isPlaying = true;
  gameBtn.innerText = "Repeat";
  playGame();
});

toggleCheckbox
  .querySelector("input[type=checkbox]")
  .addEventListener("change", (e) => {
    const isChecked = e.target.checked;
    if (!isChecked) {
      data = [
        ...cards[new URLSearchParams(window.location.search).get("title")],
      ];
      isPlaying = false;
      randomIndex = null;
      errors = 0;
      cardList.querySelectorAll(".cards-list__card").forEach((cardElement) => {
        delete cardElement.dataset.error;
      });
    }
  });
