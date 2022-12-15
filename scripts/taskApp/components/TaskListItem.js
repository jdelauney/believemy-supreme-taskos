import { createElement } from "../../helpers/domUtils.js"

/**
 * @typedef {object} Task
 * @property {number}id
 * @property {string}todo
 * @property {boolean}completed
 */

export class TaskListItem {
  /* @type {HTMLElement} */
  #element
  /* @type Task */
  _task   
  /**
   * 
   * @param {Task} task
   */
  constructor(task) {
    const id ='task-' + task.id.toString()
    const li = createElement('li', '', { class: 'task-app__task' })
    const label = createElement('label', { for: id })
    label.innerHTML = `
      <span class="task-app__task__checkbox">
        <input type="checkbox"  id ="${id}"/>
        <svg class="icon-svg">
          <use href="#icon-check"/>
        </svg>
      </span>
      <span>${task.todo}</span>
    `

    li.append(label)
    this.#element = li
  }

  get element() {
    return this.#element
  }

}