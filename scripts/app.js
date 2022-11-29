import { createElement } from "./helpers/domUtils.js";
import { fetchJSON } from "./helpers/fetchUtils.js";

try {
  const tasks = await fetchJSON('https://dummyjson.com/todos?skip=0&limit=20')
} catch (err) {
  const notificationError = createElement('div', 'Chargement des tâches impossible !', {
    class: 'notification notification--danger',
    role: 'alert'
  })
  document.body.prepend(notificationError)
  console.error(err)
}

console.log(tasks)