import { films } from '../assets/films.js'
import { people } from '../assets/people.js'

console.log('this is Javascript on the page')

let mainHeader = document.querySelector('header')

let mainArea = document.querySelector('main')
/*
films.forEach(function(film) {
    let filmDiv = document.createElement('div')
    let title = document.createElement('h1')
    let crawl = document.createElement('p')

    filmDiv.appendChild(title)
    filmDiv.appendChild(crawl)

    title.textContent = film.title
    crawl.innerText = film.opening_crawl // using innerText it will keep all of the embeded formating - return and newline elelemts. 

    mainArea.appendChild(filmDiv)
  });
  */

  
  

  people.forEach(function(person) {
      let personDiv = document.createElement('div')
      let name = document.createElement('h1')
      let gender = document.createElement('h3')
      let pic = document.createElement('img')

      personDiv.appendChild(name)
      personDiv.appendChild(gender)
      personDiv.appendChild(pic)

      let charNum = getCharNum(person.url)

      name.textContent = person.name
      gender.textContent = person.gender
      pic.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`


      mainArea.appendChild(personDiv)

  });

  function getCharNum(charUrl) {
    let end = charUrl.lastIndexOf('/')
    let charId = charUrl.substring(end -2, end)
    if (charId.indexOf('/') !== -1 ) {
      return charId.slice (1,2) }
      else {
        return charId }
      }
    

  

const maleCharacters = people.filter(person => person.gender === 'male')
console.log(maleCharacters)

const femaleCharacters = people.filter(person => person.gender === 'female')
console.log(femaleCharacters)

const allDivs = Array.from(mainArea.querySelectorAll('div'))

let maleButton = document.createElement('button')
  maleButton.textContent = "Male Charaters"
  maleButton.addEventListener('click', () => {
    femaleCharacters.forEach(elt => {

      let matchedDiv = allDivs.filter(element => {
        return element.firstChild.textContent === elt.name
      })
      matchedDiv[0].setAttribute("style", "display: none;")

    })


  })


  let femaleButton = document.createElement('button')
  femaleButton.textContent = "Female Characters"

  mainHeader.appendChild(maleButton)
  mainHeader.appendChild(femaleButton)





