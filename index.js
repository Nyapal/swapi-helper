import {getPeople, getFilms} from './swapi-helper.js'
import { displayEl, formEl, inputID, personBtn, filmBtn } from './dom-elements.js'

personBtn.addEventListener('click', function(e) {
  e.preventDefault()
  const id = inputID.value
  const person = getPeople(id)
  person.then(display)
})

filmBtn.addEventListener('click', function(e) {
  e.preventDefault()
  const id = inputID.value
  const film = getFilms(id)
  film.then(display)
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