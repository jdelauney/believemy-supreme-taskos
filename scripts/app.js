import { createElement } from "./helpers/domUtils.js";
import { fetchJSON } from "./helpers/fetchUtils.js";
import { TaskList } from "../taskApp/components/TaskList.js";

try {
  const data = await fetchJSON('https://dummyjson.com/todos?skip=0&limit=20')
  const tasks = data.todos
  console.log(tasks)
  const taskList = new TaskList(tasks)
  taskList.displayInto(document.getElementById('tasks'))
} catch (err) {
  const notificationError = createElement('div', 'Chargement des tâches impossible !', {
    class: 'notification notification--danger',
    role: 'alert'
  })
  document.body.prepend(notificationError)
  console.error(err)
}

