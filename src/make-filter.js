// функция отрисовки фильтра
/**
 *
 * @param {string} title
 * @param {number} amount
 * @param {boolean} isChecked
 * @return {string}
 */
export default (title, amount, isChecked = false) => {
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
