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
  #taskTitleElement
  #removeCallback
  #editCallback
  /* @type Task */
  _task

  /**
   * 
   * @param {Task} task
   * @param {function(TaskListItem):void} removeCallback
   * @param {function(TaskListItem):void} editCallback
   */
  constructor(task, removeCallback, editCallback) {
    this.#removeCallback = removeCallback
    this.#editCallback = editCallback

    this._task = {
      id: task.id,
      title: task.todo,
      completed: task.completed
    }
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

    this.#taskTitleElement = label.querySelector('span:last-child')
    const dropdown = createElement('div', '', { class: "task-app__task__menu" })
    dropdown.innerHTML = `
      <button class="btn btn--task-menu">
        <svg class="icon-svg">
          <use href="#icon-ellipsis"/>
        </svg>
      </button>
      <ul class="task-app__task__menu__actions">
        <li>
          <button data-task-edit class="btn btn--dropdown-action">
            <svg class="icon-svg icon--primary">
              <use href="#icon-edit"/>
            </svg>
            Editer
          </button>
        </li>
        <li>
          <button data-task-remove class="btn btn--dropdown-action">
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
    
    dropdown
      .querySelector('[data-task-edit]')
      .addEventListener("click", evt => this._editHandler(evt))

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

  _editHandler(evt) {
    if (this.#editCallback) {
      this.#editCallback(this)
    }
  }

  remove() {
    this.#element.remove()
  }

  get element() {
    return this.#element
  }

  get id() {
    return this._task.id
  }

  get title() {
    return this._task.title
  }

  set title(value) {
    this._task.title = value
    this.#taskTitleElement.innerText = value
  }

}