import { basePath } from './constants.js'

function getPeople(n, success) {
  const path = `${basePath}/people/${n}/`
  fetch(path).then((res) => {
    return res.json()
  }).then((json) => {
    console.log(json)
    success(json)
  }).catch((err) => {
    console.log(err.message)
  })
}

export default getPeople
