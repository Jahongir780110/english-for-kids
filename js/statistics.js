import cards from "./cards.js";
import {toggleSidebar} from "./helper.js";
import {menuBtn, sidebar, table, resetBtn, repeatBtn} from "./elements.js";

const sort = (type, th) => {
  const stats = JSON.parse(localStorage.getItem("statistics"));

  if (type === "errorsPercentage") {
    if (type === lastSortType) {
      if (lastSortDirection === -1) {
        stats.sort((a, b) => {
          a = a.wrong === 0 ? 0 : a.wrong / a.clicksGame;
          b = b.wrong === 0 ? 0 : b.wrong / b.clicksGame;
          return a > b ? -1 : a === b ? 0 : 1;
        });
      } else {
        stats.sort((a, b) => {
          a = a.wrong === 0 ? 0 : a.wrong / a.clicksGame;
          b = b.wrong === 0 ? 0 : b.wrong / b.clicksGame;
          return a > b ? -1 : a === b ? 0 : -1;
        });
      }
    } else {
      stats.sort((a, b) => {
        a = a.wrong === 0 ? 0 : a.wrong / a.clicksGame;
        b = b.wrong === 0 ? 0 : b.wrong / b.clicksGame;
        return a > b ? -1 : a === b ? 0 : -1;
      });
    }
  }

  if (type === lastSortType) {
    if (lastSortDirection === -1) {
      stats.sort((a, b) => {
        return a[type] > b[type] ? -1 : a[type] === b[type] ? 0 : 1;
      });
    } else {
      stats.sort((a, b) => {
        return a[type] > b[type] ? 1 : a[type] === b[type] ? 0 : -1;
      });
    }
  } else {
    stats.sort((a, b) => {
      return a[type] > b[type] ? 1 : a[type] === b[type] ? 0 : -1;
    });
  }

  const directionIconDown = `
    <svg
        width="24"
        height="24"
        viewBox="0 0 16 16"
      >
      <path
        fill-rule="evenodd"
        d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
      />
    </svg>
    `;
  const directionIconUp = `
    <svg
        width="24"
        height="24"
        viewBox="0 0 16 16"
      >
      <path
        fill-rule="evenodd"
        d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
      />
    </svg>
    `;
  table.querySelectorAll("th").forEach((th2) => {
    if (th2.querySelector("svg")) {
      th2.removeChild(th2.querySelector("svg"));
    }
  });

  th.insertAdjacentHTML(
    "afterbegin",
    lastSortType === type
      ? lastSortDirection === -1
        ? directionIconUp
        : directionIconDown
      : directionIconDown
  );

  lastSortType = type;
  lastSortDirection = lastSortDirection === -1 ? 1 : -1;

  table.querySelector("tbody").innerHTML = "";
  for (const stat of stats) {
    const row = `
          <tr>
            <th scope="row">${stat.id}</th>
            <td>${stat.category}</td>
            <td>${stat.word}</td>
            <td>${stat.translation}</td>
            <td>${stat.clicksTraining}</td>
            <td>${stat.clicksGame}</td>
            <td>${stat.wrong}</td>
            <td>${
              stat.wrong === 0
                ? 0
                : ((stat.wrong / stat.clicksGame) * 100).toFixed(2)
            }</td>
          </tr>
        `;
    table.querySelector("tbody").insertAdjacentHTML("beforeend", row);
  }
};

const stats = JSON.parse(localStorage.getItem("statistics"));
const cols = [
  "id",
  "category",
  "word",
  "translation",
  "clicksTraining",
  "clicksGame",
  "wrong",
  "errorsPercentage",
];
let lastSortType = "id";
let lastSortDirection = -1;

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
    <li class="category-item active">
      <a href="./statistics.html">  
        Statistics
      </a>
    </li>
  `
);

for (const stat of stats) {
  const row = `
        <tr>
          <td scope="row">${stat.id}</td>
          <td>${stat.category}</td>
          <td>${stat.word}</td>
          <td>${stat.translation}</td>
          <td>${stat.clicksTraining}</td>
          <td>${stat.clicksGame}</td>
          <td>${stat.wrong}</td>
          <td>${
            stat.wrong === 0
              ? 0
              : ((stat.wrong / stat.clicksGame) * 100).toFixed(2)
          }</td>
        </tr>
      `;
  table.querySelector("tbody").insertAdjacentHTML("beforeend", row);
}

table.querySelectorAll("th").forEach((th, index) => {
  th.addEventListener("click", () => {
    sort(cols[index], th);
  });
});

resetBtn.addEventListener("click", () => {
  table.querySelector("tbody").innerHTML = "";

  for (const stat of stats) {
    const row = `
        <tr>
          <td scope="row">${stat.id}</td>
          <td>${stat.category}</td>
          <td>${stat.word}</td>
          <td>${stat.translation}</td>
          <td>${0}</td>
          <td>${0}</td>
          <td>${0}</td>
          <td>${0}</td>
        </tr>
      `;
    table.querySelector("tbody").insertAdjacentHTML("beforeend", row);
    stat.clicksTraining = 0;
    stat.clicksGame = 0;
    stat.wrong = 0;
  }
  localStorage.setItem("statistics", JSON.stringify(stats));
});

repeatBtn.addEventListener("click", () => {
  window.location = "./repeat.html";
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
