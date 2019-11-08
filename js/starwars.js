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



const maleCharacters = people.filter(person => person.gender === 'male' || person.gender === 'hermaphrodite')
console.log(maleCharacters)

const noMaleDroid = people.filter(person => person.gender === 'male' || person.gender === 'hermaphrodite' || person.gender === 'n/a' || person.gender === 'none')
console.log(maleCharacters)

const allCharacters = people.filter(person => person.gender)
console.log(allCharacters)

const femaleCharacters = people.filter(person => person.gender === 'female' || person.gender === 'hermaphrodite')
  console.log(femaleCharacters)

const noFemaleCharacters = people.filter(person => person.gender === 'female' || person.gender === 'hermaphrodite' || person.gender === 'n/a' || person.gender === 'none')
  console.log(femaleCharacters)



  const noMaleFemale = people.filter(person => person.gender === 'male' || person.gender === 'female' || person.gender === 'hermaphrodite')
  console.log(femaleCharacters)

  const droidCharacters = people.filter(person => person.gender !== 'male' && person.gender !== 'female' && person.gender !== 'hermaphrodite')
  console.log(droidCharacters)

  allCharacters.forEach(function(person) {
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

  const allDivs = Array.from(document.querySelectorAll('div'))
  

  


let maleButton = document.createElement('button')
  maleButton.textContent = 'Male Characters'
  maleButton.addEventListener('click', () => {
    noFemaleCharacters.forEach(elt => {

      let matchedDiv = allDivs.find(element => {
        return element.firstChild.textContent === elt.name
      })
      if(matchedDiv.getAttribute("style") === "display: none;") {
        console.log(matchedDiv)
        matchedDiv.setAttribute("style", "display: revert;")
      }
      else {
        matchedDiv.setAttribute("style", "display: none;")
      }

    })
  })
 
  let femaleButton = document.createElement('button')
  femaleButton.textContent = 'Female Characters'
  femaleButton.addEventListener('click', () => {
    noMaleDroid.forEach(elt => {

      let matchedDiv = allDivs.find(element => {
        return element.firstChild.textContent === elt.name
      })
      if(matchedDiv.getAttribute("style") === "display: none;") {
        console.log(matchedDiv)
        matchedDiv.setAttribute("style", "display: revert;")
      }
      else {
        matchedDiv.setAttribute("style", "display: none;")
      }

    })
  })

  let droidButton = document.createElement('button')
  droidButton.textContent = 'Droids'
  droidButton.addEventListener('click', () => {
    noMaleFemale.forEach(elt => {

      let matchedDiv = allDivs.find(element => {
        return element.firstChild.textContent === elt.name
      })
      if(matchedDiv.getAttribute("style") === "display: none;") {
        console.log(matchedDiv)
        matchedDiv.setAttribute("style", "display: revert;")
      }
      else {
        matchedDiv.setAttribute("style", "display: none;")
      }

    })
  })

  
 

  /*let maleButton = document.createElement('button')
  maleButton.textContent = "Male Charaters"
  maleButton.addEventListener('click', () => {

    

    maleCharacters.forEach(function(person){

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

    })

  });


  /* maleCharacters.forEach(function(person) {
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

  });*/

  function getCharNum(charUrl) {
    let end = charUrl.lastIndexOf('/')
    let charId = charUrl.substring(end -2, end)
    if (charId.indexOf('/') !== -1 ) {
      return charId.slice (1,2) }
      else {
        return charId }
      }
    


/*let allButton = document.createElement('button')
  allButton.textContent = "All Characters"
  allButton.addEventListener('click', () => {
    allCharacters.forEach(elt => {

      let matchedDiv = allDivs.filter(element => {
        return element.firstChild.textContent === elt.name
      })
      matchedDiv[0].setAttribute("style", "display: revert;")

    })


  })*/

  
  


  /*let allButton = document.createElement('button')
  allButton.textContent = "All Characters"

   allButton.addEventListener('click', () => {

    allCharacters.forEach(function(person) {
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

  })
    
 

  })






/*

  let femaleButton = document.createElement('button')
  femaleButton.textContent = "Female Characters"
  femaleButton.addEventListener('click', () => {
    maleCharacters.forEach(elt => {

      let matchedDiv = allDivs.filter(element => {
        return element.firstChild.textContent === elt.name
      })
      matchedDiv[0].setAttribute("style", "display: none;")

    })


  })*/

  
  
  

  /*let femaleButton = document.createElement('button')
  femaleButton.textContent = "Female Characters"
  femaleButton.addEventListener('click', () => {

  
    femaleCharacters.forEach(function(person) {
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

  })

  

  })
  
  

  let droidButton = document.createElement('button')
  droidButton.textContent = "Droids"
  droidButton.addEventListener('click', () => {

    
  
    droidCharacters.forEach(function(person) {
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

  })


  })
 
  */


  mainHeader.appendChild(maleButton)
  mainHeader.appendChild(femaleButton)
  mainHeader.appendChild(droidButton)


