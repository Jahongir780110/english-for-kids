import cards from "./cards.js";
import {changeMode, fillCards} from "./helper.js";
import {toggleCheckbox, cardList, title} from "./elements.js";
import {initGame} from "./startGame.js";
import {initNav} from "./nav.js";

const field = new URLSearchParams(window.location.search).get("title");
const isPlayMode = JSON.parse(localStorage.getItem("isPlayMode"));

title.innerText = field;

setTimeout(() => {
  initNav();
  changeMode(isPlayMode, cardList, true);
  initGame(cards[field]);
}, 0);

fillCards(cards[field], cardList);

toggleCheckbox
  .querySelector("input[type=checkbox]")
  .addEventListener("change", (e) => {
    changeMode(e.target.checked, cardList, true);
  });
