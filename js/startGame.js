import {
  cardList,
  toggleCheckbox,
  mainContent,
  gameBtn,
  stars,
  result,
} from "./elements.js";
import {playAudio} from "./helper.js";

export const initGame = (data) => {
  const playNextWord = () => {
    randomIndex = Math.floor(Math.random() * data.length);
    playAudio(`../${data[randomIndex].audioSrc}`);
  };

  const finishGame = () => {
    const img = document.createElement("img");

    result.removeAttribute("hidden");
    mainContent.setAttribute("hidden", true);

    if (!errors) {
      img.setAttribute("src", "../img/excellent.png");
      img.setAttribute("alt", "excellent");

      playAudio("../audio/success.mp3");
    } else {
      img.setAttribute("src", "../img/fail.png");
      img.setAttribute("alt", "fail");

      playAudio("../audio/failure.mp3");
      result.insertAdjacentHTML(
        "beforeend",
        `<h1 class="text-danger">${errors} mistake${
          errors === 1 ? "" : "s"
        }</h1>`
      );
    }

    result[errors ? "prepend" : "append"](img);

    setTimeout(() => {
      window.location = "./";
    }, 5000);
  };

  const reservedData = [...data];
  let isPlaying = false;
  let randomIndex = null;
  let errors = 0;

  cardList.querySelectorAll(".cards-list__card").forEach((cardElement) => {
    cardElement.addEventListener("click", () => {
      if (!isPlaying || cardElement.dataset.disabled) return;

      const stats = JSON.parse(localStorage.getItem("statistics"));
      const isCorrect =
        cardElement.querySelector(".title").innerText ===
        data[randomIndex].word;
      const star = `
          <svg width="16" height="16" fill=${isCorrect ? "#f7d83a" : "#ea2020"}>
            <path
              d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
            />
          </svg>
          `;
      const targetWord = stats.find(
        (stat) => stat.word === cardElement.querySelector(".title").innerText
      );

      targetWord.clicksGame++;

      stars.insertAdjacentHTML("beforeend", star);
      playAudio(`../audio/${isCorrect ? "correct" : "error"}.mp3`);

      if (isCorrect) {
        cardElement.dataset.disabled = true;
        data.splice(randomIndex, 1);
        setTimeout(() => {
          data.length ? playNextWord() : finishGame();
        }, 1000);
      } else {
        targetWord.wrong++;
        errors++;
      }

      localStorage.setItem("statistics", JSON.stringify(stats));
    });
  });

  gameBtn.addEventListener("click", () => {
    if (isPlaying) {
      playAudio(`../${data[randomIndex].audioSrc}`);
      return;
    }

    isPlaying = true;
    gameBtn.innerText = "Repeat";
    playNextWord();
  });

  toggleCheckbox
    .querySelector("input[type=checkbox]")
    .addEventListener("change", (e) => {
      if (e.target.checked) return;

      data = reservedData;
      isPlaying = false;
      randomIndex = null;
      errors = 0;

      cardList.querySelectorAll(".cards-list__card").forEach((cardElement) => {
        delete cardElement.dataset.disabled;
      });
      stars.innerHTML = "";
    });
};
