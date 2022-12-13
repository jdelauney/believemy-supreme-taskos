
import { createElement } from "../scripts/helpers/domUtils.js";
import { fetchJSON } from "../scripts/helpers/fetchUtils.js";
import { TaskDisplayList } from "./components/TaskDisplayList.js";
import { TaskListItem } from "./components/TaskListItem.js";

export class TaskApp {
  /* @type HTMLElement */
  #element
  #taskListElement
  #taskList


  /**
   * 
   * @param {HTMLElement} element 
   */
  constructor(element) {
    this.#element = element
    const app = createElement('div', '', { class: 'task-app', id: 'taskapp' })
    app.innerHTML = `
      <form class="task-app__new-task">
        <input type="text" placeholder="Nouvelle tâche" name="title" required aria-label="Ajouter une nouvelle tâche" />
        <button class="btn btn--new-task">
          <svg class="icon-svg">
            <use href="#icon-add" />
          </svg>
        </button>
      </form>
      <ul id="tasks" class="task-app__tasks"></ul>
    `

    this.#taskListElement = app.querySelector('#tasks')
    this.#element.append(app)

    this._init()
    this._initEvent()
  }

  /**
   * 
   * @param {SubmitEvent} evt 
   */
  _submitHandler(evt) {
    evt.preventDefault()
    const form = evt.currentTarget
    const title = new FormData(form).get('title').toString().trim()
    if (title === '') {
      return
    }
    this.createTask(title, false)
    form.reset()
  }

  _removeTask(task) {
    console.log('remove : ', task)
  }

  createTask(title, isCompleted) {
    const task = {
      id: Date.now(),
      todo: title,
      completed : isCompleted

    }
    const taskItem = new TaskListItem(task, this._removeTask)
    this.#taskList.addTask(taskItem)
    this.#taskList.refresh()
  }


  async _init() {
    try {
      const data = await fetchJSON('https://dummyjson.com/todos?skip=0&limit=20')
      const tasks = data.todos 
      this.#taskListElement = document.getElementById('tasks');
      this.#taskList = new TaskDisplayList(this.#taskListElement)
      for (const task of tasks) {
        const taskItem = new TaskListItem(task, this._removeTask)
        this.#taskList.addTask(taskItem)
      }
      this.#taskList.display()
    } catch (err) {
      const notificationError = createElement('div', 'Chargement des tâches impossible !', {
        class: 'notification notification--danger',
        role: 'alert'
      })
      document.body.prepend(notificationError)
      console.error(err)
    }  
  }

  _initEvent() {
    this.#element
      .querySelector('form')
      .addEventListener('submit', evt => this._submitHandler(evt))
  }
}