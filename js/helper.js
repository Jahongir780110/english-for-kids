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
