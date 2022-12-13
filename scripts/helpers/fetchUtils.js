/**
 * @param {string} url 
 * @param {object} options 
 * @returns {promise<any>}
 */
export const fetchJSON = async (url, options = {}) => {
  const headers = { Accept: 'application/json', ...options.header }
  const response = await fetch(url, { ...options, headers })
  if (response.ok) {
    return response.json()
  }
  const msg = `Erreur serveur ${response.status} : ${response.statusText}`  
  throw new Error(msg);
}