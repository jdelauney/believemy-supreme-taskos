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
  #removeCallback
  /* @type Task */
  _task

  /**
   * 
   * @param {Task} task
   * @param {function(TaskListItem):void} removeCallback
   */
  constructor(task, removeCallback) {
    this.#removeCallback = removeCallback
    
    const id = 'task-' + task.id.toString()
    const isChecked = task.completed ? 'checked' : ''
    const li = createElement('li', '', { class: 'task-app__task' })
    const label = createElement('label', { for: id })
    label.innerHTML = `
      <span class="task-app__task__checkbox">
        <input type="checkbox"  id ="${id}" ${isChecked}/>
        <svg class="icon-svg">
          <use href="#icon-check"/>
        </svg>
      </span>
      <span>${task.todo}</span>
    `
    const dropdown = createElement('div', '', { class: "task-app__task__menu" })
    dropdown.innerHTML = `
      <button class="btn btn--task-menu">
        <svg class="icon-svg">
          <use href="#icon-ellipsis"/>
        </svg>
      </button>
      <ul class="task-app__task__menu__actions">
        <li>
          <button data-task-remove class="btn btn--dropdow-action">
            <svg class="icon-svg icon--danger">
              <use href="#icon-trash"/>
            </svg>
            Supprimer
          </button>
        </li>
      </ul>
    `

    dropdown
      .querySelector('[data-task-remove]')
      .addEventListener("click", evt => this._removeHandler(evt))

    li.append(label)
    li.append(dropdown)
    this.#element = li
  }

  /**
   * 
   * @param {PointerEvent} evt 
   */
  _removeHandler(evt) {
    if (this.#removeCallback) {
      this.#removeCallback(this)
    }
  }

  remove() {
    this.#element.remove()
  }

  get element() {
    return this.#element
  }

}