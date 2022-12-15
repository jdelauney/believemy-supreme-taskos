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
   * @param {function(TaskListItem):void} removeCallback
   * @param {function(TaskListItem):void} editCallback
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