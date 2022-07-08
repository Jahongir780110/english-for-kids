import cards from "./cards.js";
import {changeMode, fillCards} from "./helper.js";
import {cardList, title} from "./elements.js";
import {initGame} from "./startGame.js";
import "../components/theNav.js";

const field = new URLSearchParams(window.location.search).get("title");
const isPlayMode = JSON.parse(localStorage.getItem("isPlayMode"));

title.innerText = field;

setTimeout(() => {
  changeMode(isPlayMode, cardList, true);
  initGame(cards[field]);
}, 0);

fillCards(cards[field], cardList);
