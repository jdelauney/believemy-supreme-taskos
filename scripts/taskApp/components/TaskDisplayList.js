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
   */
  constructor(element) {    
    this.#element = element    
  }

  /**
   * 
   * @param {HTMLULElement} element 
   */
  display() {
    this.#element.innerHTML = '';
    if (this.#tasks.length > 0) {
      for (const task of this.#tasks) {      
        this.#element.prepend(task.element);
      }
    } else {
      this.#element.innerText = "Aucune tâche !"
    }    
  }

  refresh() {
    this.display()
  }

  /**
   * 
   * @param {TaskListItem} taskListItem 
   */
  addTask(taskListItem) {
    this.#tasks.push(taskListItem);
  }

  removeTask(id) {
    this.#tasks = this.#tasks.filter((task) => {
      return task.id !== id
    })
  }
}