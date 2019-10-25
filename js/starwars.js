import { films } from '../assets/films.js'
import { people } from '../assets/people.js'
import { vehicles } from '../assets/vehicles.js'
import { species } from '../assets/species.js'

console.log('this is Javascript on the page')

// let videoArea = document.querySelector('#movie')


let mainHeader = document.querySelector('#mainHeader')

let mainArea = document.querySelector('#main')

let vehicleArea = document.querySelector('#auto')

let speciesArea = document.querySelector('#species')


  
  vehicles.forEach(function(auto) {
    let autoDiv = document.createElement('div')
    let name = document.createElement('h3')
    let pic = document.createElement('img')

    autoDiv.appendChild(name)
    autoDiv.appendChild(pic)

    let autoNum = getCharNum(auto.url)

    name.textContent = auto.name
    
    pic.src = `https://starwars-visualguide.com/assets/img/vehicles/${autoNum}.jpg`


    vehicleArea.appendChild(autoDiv)

});

species.forEach(function(type) {
  let typeDiv = document.createElement('div')
  let name = document.createElement('h3')
  let pic = document.createElement('img')


  typeDiv.appendChild(name)
  typeDiv.appendChild(pic)

  let speciesNum = getCharNum(type.url)

  name.textContent = type.name
  
  pic.src = `https://starwars-visualguide.com/assets/img/species/${speciesNum}.jpg`


  speciesArea.appendChild(typeDiv)

});
  

  people.forEach(function(person) {
      let personDiv = document.createElement('div')
      let name = document.createElement('h3')
      let gender = document.createElement('p')
      let pic = document.createElement('img')

      personDiv.appendChild(name)
      personDiv.appendChild(gender)
      personDiv.appendChild(pic)

      let charNum = getCharNum(person.url)

      name.textContent = person.name
      
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

const allCharacters = people.filter(person => person.gender)
console.log(femaleCharacters)



const allDivs = Array.from(mainArea.querySelectorAll('div'))

let allButton = document.createElement('button')
  allButton.textContent = "All Characters"
  allButton.addEventListener('click', () => {
    allCharacters.forEach(elt => {

      let matchedDiv = allDivs.filter(element => {
        return element.firstChild.textContent === elt.name
      })
      matchedDiv[0].setAttribute("style", "display: revert;")

    })


  })

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
  femaleButton.addEventListener('click', () => {
    maleCharacters.forEach(elt => {

      let matchedDiv = allDivs.filter(element => {
        return element.firstChild.textContent === elt.name
      })
      matchedDiv[0].setAttribute("style", "display: none;")

    })


  })

  mainHeader.appendChild(allButton)
  mainHeader.appendChild(maleButton)
  mainHeader.appendChild(femaleButton)





