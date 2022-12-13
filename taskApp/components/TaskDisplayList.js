import { TaskListItem } from "./TaskListItem.js"


/**
* @typedef {object} Task
* @property {number}id
* @property {string}todo
* @property {boolean}completed
*/
export class TaskDisplayList {
  /* @type Task[] */
  #tasks = []
  /* @type HTMLUListElement */
  #element
  
  /**
   * 
   * @param {HTMLUListElement}
   * @param {Task[]} tasks 
   */
  constructor(element, tasks) {
    this.#tasks = tasks
    this.#element = element
  }

  /**
   * 
   * @param {HTMLULElement} element 
   */
  display(element) {
    for (const task of this.#tasks) {
      const taskItem = new TaskListItem(task)
      this.#element.append(taskItem.element)
    }
  }

  /**
   * 
   * @param {TaskListItem} taskListItem 
   */
  addTask(taskListItem) {
    this.#element.prepend(taskListItem.element)
  }
}