import { createElement } from "../../helpers/domUtils.js"

export class TaskListItem {
  #element 

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