import { basePath } from './constants.js'
// getPeople(id, display)

async function getPeople(n) {
  const path = `${basePath}/people/${n}/`
  const res = await fetch(path)
  const json = await res.json()
  return json
}

async function getFilms(n) {
  const path = `${basePath}/films/${n}/`
  const res = await fetch(path)
  const json = await res.json()
  return json
}

export {getPeople, getFilms}
