import makeFilter from './make-filter.js';
import {generateTask} from "./make-task";

const MAX_TASK_COUNT = 10;
const MIN_TASK_COUNT = 1;
const TASK_NUMBER = 7;

const boardTask = document.querySelector(`.board__tasks`);
const filterSection = document.querySelector(`.main__filter`);

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
    .map(generateTask);
  tasks.forEach((item) => {
    baseFragment.appendChild(item);
  });
  board.appendChild(baseFragment);
};

filterSection.insertAdjacentHTML(`beforeend`, makeFilter(`All`, 15, true));
filterSection.insertAdjacentHTML(`beforeend`, makeFilter(`Overdue`, 0));
filterSection.insertAdjacentHTML(`beforeend`, makeFilter(`Today`, 0));
filterSection.insertAdjacentHTML(`beforeend`, makeFilter(`Favorites`, 7));
filterSection.insertAdjacentHTML(`beforeend`, makeFilter(`Repeating`, 2));
filterSection.insertAdjacentHTML(`beforeend`, makeFilter(`Tags`, 6));
filterSection.insertAdjacentHTML(`beforeend`, makeFilter(`Archive`, 115));

generateTaskList(boardTask, TASK_NUMBER);

filterSection.addEventListener(`click`, function (evt) {
  evt.preventDefault();
  boardTask.innerHTML = ``;
  let randomTaskNumber = Math.floor(Math.random() * (MAX_TASK_COUNT - MIN_TASK_COUNT) + MIN_TASK_COUNT);
  generateTaskList(boardTask, randomTaskNumber);
});
