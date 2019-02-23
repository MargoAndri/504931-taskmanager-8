'use strict';

const MAX_TASK_NUMBER = 10;
const TASK_NUMBER = 7;

const boardTask = document.querySelector(`.board__tasks`);
const filterSection = document.querySelector(`.main__filter`);

// функция отрисовки фильтра

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

const generateTask = function (template) {
  return document.importNode(template.content, true);
};

// функция создания борда карточек

const generateTaskList = function (count) {
  const template = document.querySelector(`#task-template`);
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < count; i++) {
    let task = generateTask(template);
    fragment.appendChild(task);
  }
  boardTask.appendChild(fragment);
};

filterSection.insertAdjacentHTML(`beforeend`, getElementFilter(`All`, 15, true));
filterSection.insertAdjacentHTML(`beforeend`, getElementFilter(`Overdue`, 0));
filterSection.insertAdjacentHTML(`beforeend`, getElementFilter(`Today`, 0));
filterSection.insertAdjacentHTML(`beforeend`, getElementFilter(`Favorites`, 7));
filterSection.insertAdjacentHTML(`beforeend`, getElementFilter(`Repeating`, 2));
filterSection.insertAdjacentHTML(`beforeend`, getElementFilter(`Tags`, 6));
filterSection.insertAdjacentHTML(`beforeend`, getElementFilter(`Archive`, 115));

generateTaskList(TASK_NUMBER);

filterSection.addEventListener(`click`, function (evt) {
  evt.preventDefault();
  boardTask.innerHTML = ``;
  let taskNumber = Math.random() * MAX_TASK_NUMBER;
  generateTaskList(taskNumber);
});
