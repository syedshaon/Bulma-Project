// import "normalize.css";
// Will be using reset css through scss

//  TO DISABLE DONT IMPORT * AS bOOTSTRAP ALSO DON'T IMPORT BOOTSTRAP IN STYLE.SCSS FILE
/* import "bootstrap"; */

import "./style.scss";
/* Import Images */

import "./assets/fundamentals.svg";
import "./assets/react.svg";
import "./assets/showcase.svg";

// or, specify which plugins you need:
// import { Tooltip, Toast, Popover } from 'bootstrap'

/* Following is required for Bulma CSS Hamburger Menu */

const el = document.querySelector(".navbar-burger");

el.addEventListener("click", () => {
  const targetExpand = document.getElementById("navbarBasicExample");

  // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
  el.classList.toggle("is-active");
  targetExpand.classList.toggle("is-active");
});

/* Bulma CSS Hamburger Menu Ends */

/* Javascript for Bulma Modal */

document.addEventListener("DOMContentLoaded", () => {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add("is-active");
  }

  function closeModal($el) {
    $el.classList.remove("is-active");
  }

  function closeAllModals() {
    (document.querySelectorAll(".modal") || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll(".js-modal-trigger") || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener("click", () => {
      openModal($target);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (document.querySelectorAll(".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button") || []).forEach(($close) => {
    const $target = $close.closest(".modal");

    $close.addEventListener("click", () => {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener("keydown", (event) => {
    const e = event || window.event;

    if (e.keyCode === 27) {
      // Escape key
      closeAllModals();
    }
  });
});

/* npx kill-port 3000 */

/* Need to add any of the following to vsCode setting json file to have CLASS intellisense */

/*  "css.styleSheets": ["https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css", "/style.css", "style.css", "style.scss", "${fileBasenameNoExtension}.css"],
  "css.styleSheets": ["https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css", "/style.css", "style.css", "style.scss", "${fileBasenameNoExtension}.css"] */
