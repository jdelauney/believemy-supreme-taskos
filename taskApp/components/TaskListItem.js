import { createElement } from "../../scripts/helpers/domUtils.js"

/**
 * @typedef {object} Task
 * @property {number}id
 * @property {string}todo
 * @property {boolean}completed
 */

export class TaskListItem {
  /* @type {HTMLElement} */
  #element
  
  /**
   * 
   * @param {Task} task 
   */
  constructor(task) {
    const li = createElement('li', '', { class: 'task-app__task' })
    const span = createElement('span', task.todo)
    li.append(span)
    this.#element = li
  }

  get element() {
    return this.#element
  }

}