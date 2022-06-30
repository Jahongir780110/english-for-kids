import cards from "./cards.js";
import {toggleSidebar} from "./helper.js";
import {menuBtn, sidebar} from "./elements.js";

export const initNav = (isStatisticsPage) => {
  Object.keys(cards).forEach((title) => {
    const actieClass =
      new URLSearchParams(window.location.search).get("title") === title
        ? "active"
        : "";
    const sideBarItem = `
    <li class="category-item ${actieClass}"">
      <a href="./category.html?title=${title}">  
        ${title}
      </a>
    </li>`;

    sidebar
      .querySelector(".categories")
      .insertAdjacentHTML("beforeend", sideBarItem);
  });
  sidebar.querySelector(".categories").insertAdjacentHTML(
    "beforeend",
    `
      <li class="category-item ${isStatisticsPage ? "active" : ""}">
        <a href="./statistics.html">  
          Statistics
        </a>
      </li>
    `
  );

  menuBtn.addEventListener("click", () => {
    toggleSidebar(true);
  });

  sidebar.querySelector(".backdrop").addEventListener("click", () => {
    toggleSidebar(false);
  });

  sidebar.querySelector(".sidebar-close").addEventListener("click", () => {
    toggleSidebar(false);
  });
};
