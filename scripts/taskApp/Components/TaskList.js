import { TaskListItem } from "./TaskListItem.js"

export class TaskList {
  #tasks = []

  constructor(tasks) {
    this.#tasks = [...tasks]
  }

  /**
   * 
   * @param {HTMLUListElement} element 
   */
  displayInto(element) {
    for (const task of this.#tasks) {
      const taskItem = new TaskListItem(task)
      element.append(taskItem.element)
    }
  }
}