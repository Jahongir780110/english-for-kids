import {changeMode, fillCards} from "./helper.js";
import {cardList, title} from "./elements.js";
import {initGame} from "./startGame.js";
import "../components/theNav.js";

const stats = JSON.parse(localStorage.getItem("statistics"));
const data = [];
let count = 0;

setTimeout(() => {
  changeMode(false, cardList);
  initGame(data);
}, 0);

stats.sort((a, b) => {
  a = a.wrong === 0 ? 0 : a.correct / (a.correct + a.wrong);
  b = b.wrong === 0 ? 0 : b.correct / (b.correct + b.wrong);

  return b - a;
});

for (const stat of stats) {
  const val = stat.wrong === 0 ? 0 : stat.wrong / (stat.correct + stat.wrong);
  if (val === 0 || count === 8) break;

  data.push(stat);
  count++;
}

if (!data.length) {
  const toggleCheckbox = document.querySelector(".toggle-mode");
  toggleCheckbox.classList.remove("d-flex");
  toggleCheckbox.classList.add("d-none");
  title.innerText = "There are no difficult words";
  title.classList.add("text-center", "text-danger");
  setTimeout(() => {
    window.location = "./";
  }, 3000);
} else {
  fillCards(data, cardList);
}
