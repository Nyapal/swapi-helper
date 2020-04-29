import getPeople from './swapi-helper.js'
import { displayEl, formEl, inputID } from './dom-elements.js'

formEl.addEventListener('submit', function(e) {
  e.preventDefault()
  const id = inputID.value
  getPeople(id, display)
})

function display(data) {
  const { name } = data
  const keys = Object.keys(data)

  const info = keys.reduce((str, key, i) => {
    str += `<p>${key}: <span>${data[key]}</span></p>`
    return str
  }, '')

  displayEl.innerHTML = `
    <h1>${name}</h1>
    ${info}
  `
}