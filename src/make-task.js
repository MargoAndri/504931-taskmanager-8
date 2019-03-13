// функция отрисовки карточки задания
/**
 * @param {Node} template
 * @return {Node}
 */
const generateTask = function (template) {
  return document.importNode(template.content, true);
};


export {generateTask};
