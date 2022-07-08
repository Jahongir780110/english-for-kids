import cards from "../js/cards.js";
import { categoryCards, cardList } from "../js/elements.js";
import { changeMode } from "../js/helper.js";

const classes = {
  sidebar: "sidebar",
  menuIcon: "menu-icon",
  toggleMode: "toggle-mode",
  categories: "categories",
  sidebarClose: "sidebar-close",
  backdrop: "backdrop",
};

const template = document.createElement("template");
template.innerHTML = `
<header class="header mt-5">
    <div class="container d-flex justify-content-between align-items-center">
        <span class="menu-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
            </svg>
        </span>

        <span class="toggle-mode d-flex align-items-center">
            <span class="mode-text train active">Train</span>
            <label class="switch">
                <input type="checkbox" />
                <span class="slider"></span>
            </label>
            <span class="mode-text play">Play</span>
        </span>
    </div>
</header>

<sidebar class="sidebar hidden">
    <span class="sidebar-close">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-x"
        viewBox="0 0 16 16"
    >
        <path
        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
        />
    </svg>
    </span>

    <nav>
        <ul class="categories"></ul>
    </nav>

    <div class="backdrop hidden"></div>
</sidebar>
`;

class TheNav extends HTMLElement {
  constructor() {
    super();

    this.append(template.content.cloneNode(true));
    this.menuBtn = document.querySelector(`.${classes.menuIcon}`);
    this.sidebar = document.querySelector(`.${classes.sidebar}`);
    this.toggleCheckbox = document.querySelector(`.${classes.toggleMode}`);

    this.pathName = new URL(window.location).pathname;
    this.isCardList =
      this.pathName === "/category.html" || this.pathName === "/repeat.html";
    this.pages = Object.keys(cards).map((key) => {
      return {
        title: key,
        active:
          new URLSearchParams(window.location.search).get("title") === key,
        addQuery: true,
        url: "./category.html",
      };
    });
    this.pages.unshift({
      title: "Main Page",
      active: this.getAttribute("isMain"),
      url: "./",
    });
    this.pages.push({
      title: "Statistics",
      active: this.getAttribute("isStatistics"),
      url: "./statistics.html",
    });
  }

  connectedCallback() {
    this.pages.forEach(({ url, title, active, addQuery }) => {
      const sideBarItem = `
        <li class="category-item ${active ? "active" : null}">
          <a href="${url}${addQuery ? "?title=" + title : ""}">  
            ${title}
          </a>
        </li>`;

      this.sidebar
        .querySelector(`.${classes.categories}`)
        .insertAdjacentHTML("beforeend", sideBarItem);
    });

    this.menuBtn.addEventListener("click", () => {
      this.toggleSidebar();
    });

    this.sidebar
      .querySelector(`.${classes.backdrop}`)
      .addEventListener("click", () => {
        this.toggleSidebar();
      });

    this.sidebar
      .querySelector(`.${classes.sidebarClose}`)
      .addEventListener("click", () => {
        this.toggleSidebar();
      });

    this.toggleCheckbox
      .querySelector("input[type=checkbox]")
      .addEventListener("change", (e) => {
        changeMode(
          e.target.checked,
          this.isCardList ? cardList : categoryCards,
          this.isCardList
        );
      });
  }

  toggleSidebar() {
    this.sidebar.classList.toggle("hidden");
    this.sidebar
      .querySelector(`.${classes.backdrop}`)
      .classList.toggle("hidden");
  }
}

window.customElements.define("the-nav", TheNav);
