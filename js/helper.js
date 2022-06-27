export function toggleSidebar(val) {
  const sidebar = document.querySelector(".sidebar");

  sidebar.classList[val ? "remove" : "add"]("hidden");
  sidebar
    .querySelector(".backdrop")
    .classList[val ? "remove" : "add"]("hidden");
}

export function playAudio(src) {
  const audio = new Audio(src);
  audio.play();
}

export function reverse(val, parent, cardData) {
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
}

export function changeMode(isPlayMode, cards, isCardsPage) {
  const toggleCheckbox = document.querySelector(".toggle-mode");
  const modeTexts = toggleCheckbox.querySelectorAll(".mode-text");

  localStorage.setItem("isPlayMode", isPlayMode);

  toggleCheckbox.querySelector("input[type=checkbox]").checked = isPlayMode;

  modeTexts[0].classList[isPlayMode ? "remove" : "add"]("active");
  modeTexts[1].classList[isPlayMode ? "add" : "remove"]("active");

  cards.querySelectorAll("li .mode").forEach((mode) => {
    mode.classList[isPlayMode ? "add" : "remove"]("play");
  });

  if (isCardsPage) {
    const gameBtn = document.querySelector(".game-button");
    if (localStorage.getItem("isPlayMode") === "true") {
      gameBtn.removeAttribute("hidden");
      cards.querySelectorAll(".cards-list__card").forEach((cardElement) => {
        cardElement.querySelector(".top").setAttribute("hidden", true);
        cardElement.querySelector(".footer").setAttribute("hidden", true);
      });
    } else {
      gameBtn.setAttribute("hidden", true);
      gameBtn.innerText = "Start game";
      cards.querySelectorAll(".cards-list__card").forEach((cardElement) => {
        cardElement.querySelector(".top").removeAttribute("hidden");
        cardElement.querySelector(".footer").removeAttribute("hidden");
      });
    }
  }
}
