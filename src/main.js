'use strict';

const getElementFilter = function (title, amount, isChecked = false) {
  return `
    <input
      type="radio"
      id="filter__${title.toLowerCase()}"
      class="filter__input visually-hidden"
      name="filter"
      ${isChecked ? ` checked` : ``}
      ${amount === 0 ? ` disabled` : `` }
      />
    <label for="filter__${title.toLowerCase()}" class="filter__label">
    ${title}<span class="filter__${title.toLowerCase()}-count">${amount}</span></label
    >
    `;
};

const filterSection = document.querySelector(`.main__filter`);
filterSection.insertAdjacentHTML("beforeEnd", getElementFilter(`NEW FILTER`, 15, true));
