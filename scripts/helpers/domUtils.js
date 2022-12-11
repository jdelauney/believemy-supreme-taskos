
/**
 * @param {string} tagName 
 * @param {string} innertText 
 * @param {object} attributes 
 * @returns {HTMLElement}
 */
export const createElement = (tagName, innerText = '', attributes = {}) => {
  const element = document.createElement(tagName)
  for (const [keyName, value] of Object.entries(attributes)) {
    if (value !== null) {
      element.setAttribute(keyName, value)
    }
  }

  element.innerText = innerText
  return element
}