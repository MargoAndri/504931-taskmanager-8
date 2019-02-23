'use strict';

const MAX_TASK_COUNT = 10;
const MIN_TASK_COUNT = 1;
const TASK_NUMBER = 7;

const boardTask = document.querySelector(`.board__tasks`);
const filterSection = document.querySelector(`.main__filter`);

// функция отрисовки фильтра
/**
 *
 * @param {string} title
 * @param {number} amount
 * @param {boolean} isChecked
 * @return {string}
 */
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
    ${title}<span class="filter__${title.toLowerCase()}-count"> ${amount}</span></label
    >
    `;
};

// функция отрисовки карточки задания
/**
 * @param {Node} template
 * @return {Node}
 */
const generateTask = function (template) {
  return document.importNode(template.content, true);
};

// функция создания борда карточек
/**
 * @param {Node} board
 * @param {Number} count
 */
const generateTaskList = function (board, count) {
  const template = document.querySelector(`#task-template`);
  const baseFragment = document.createDocumentFragment();
  let tasks = new Array(count)
    .fill(template)
    .map(generateTask)
    .forEach((item) => {
      baseFragment.appendChild(item);
    });
  board.appendChild(baseFragment);
};

filterSection.insertAdjacentHTML(`beforeend`, getElementFilter(`All`, 15, true));
filterSection.insertAdjacentHTML(`beforeend`, getElementFilter(`Overdue`, 0));
filterSection.insertAdjacentHTML(`beforeend`, getElementFilter(`Today`, 0));
filterSection.insertAdjacentHTML(`beforeend`, getElementFilter(`Favorites`, 7));
filterSection.insertAdjacentHTML(`beforeend`, getElementFilter(`Repeating`, 2));
filterSection.insertAdjacentHTML(`beforeend`, getElementFilter(`Tags`, 6));
filterSection.insertAdjacentHTML(`beforeend`, getElementFilter(`Archive`, 115));

generateTaskList(boardTask, TASK_NUMBER);

filterSection.addEventListener(`click`, function (evt) {
  evt.preventDefault();
  boardTask.innerHTML = ``;
  let randomTaskNumber = Math.floor(Math.random() * (MAX_TASK_COUNT - MIN_TASK_COUNT) + MIN_TASK_COUNT);
  generateTaskList(boardTask, randomTaskNumber);
});
