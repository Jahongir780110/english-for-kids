import {sidebar, toggleCheckbox, bottomSection, gameBtn} from "./elements.js";

export const toggleSidebar = (val) => {
  sidebar.classList[val ? "remove" : "add"]("hidden");
  sidebar
    .querySelector(".backdrop")
    .classList[val ? "remove" : "add"]("hidden");
};

export const playAudio = (src) => {
  const audio = new Audio(src);
  audio.play();
};

export const reverseCard = (val, parent, cardData) => {
  parent
    .querySelector(".cards-list__card")
    .classList[val ? "add" : "remove"]("revert");

  setTimeout(() => {
    parent.querySelector(".title").innerText = val
      ? cardData.translation
      : cardData.word;
    parent.querySelector(".title").style.transform = val ? "scaleX(-1)" : "";
    parent.querySelector(".top").style.flexDirection = val ? "row-reverse" : "";
    parent.querySelector("img").style.transform = val ? "scaleX(-1)" : "";
    parent.querySelector(".reverse").style.display = val ? "none" : "";
    parent.querySelector(".footer").style.textAlign = val ? "left" : "";
  }, 300);
};

export const changeMode = (isPlayMode, cards, isCardsPage) => {
  const modeTexts = toggleCheckbox.querySelectorAll(".mode-text");

  localStorage.setItem("isPlayMode", isPlayMode);

  modeTexts[0].classList[isPlayMode ? "remove" : "add"]("active");
  modeTexts[1].classList[isPlayMode ? "add" : "remove"]("active");

  cards.querySelectorAll("li .mode").forEach((mode) => {
    mode.classList[isPlayMode ? "add" : "remove"]("play");
  });

  toggleCheckbox.querySelector("input[type=checkbox]").checked = isPlayMode;

  if (!isCardsPage) return;

  if (isPlayMode) {
    bottomSection.removeAttribute("hidden");
    cards.querySelectorAll(".cards-list__card").forEach((cardElement) => {
      cardElement.querySelector(".top").setAttribute("hidden", true);
      cardElement.querySelector(".footer").setAttribute("hidden", true);
    });
  } else {
    bottomSection.setAttribute("hidden", true);
    gameBtn.innerText = "Start game";
    cards.querySelectorAll(".cards-list__card").forEach((cardElement) => {
      cardElement.querySelector(".top").removeAttribute("hidden");
      cardElement.querySelector(".footer").removeAttribute("hidden");
    });
  }
};

export const fillCards = (data, parent) => {
  data.forEach((card) => {
    const li = document.createElement("li");
    const cardElement = `
        <div class="cards-list__card">
          <img src="./${card.image}" alt="${card.word}" />
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
    parent.append(li);

    li.querySelector(".cards-list__card").addEventListener("click", () => {
      if (!JSON.parse(localStorage.getItem("isPlayMode"))) {
        const stats = JSON.parse(localStorage.getItem("statistics"));
        playAudio(`../${card.audioSrc}`);

        const targetWord = stats.find((stat) => stat.word === card.word);
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
};
