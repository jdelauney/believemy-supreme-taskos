import { TaskListItem } from "./TaskListItem.js"


/**
* @typedef {object} Task
* @property {number}id
* @property {string}todo
* @property {boolean}completed
*/
export class TaskList {
  /* @type Task[] */
  #tasks = []
  
  /**
   * 
   * @param {Task[]} tasks 
   */
  constructor(tasks) {
    this.#tasks =  tasks
  }

  /**
   * 
   * @param {HTMLULElement} element 
   */
  displayInto(element) {
    for (const task of this.#tasks) {
      const taskItem = new TaskListItem(task)
      element.append(taskItem.element)
    }
  }
}