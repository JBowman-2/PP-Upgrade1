async function getAPIData(url) {
    try {
        const responce = await fetch(url)
        const data = await responce.json()
        return data
    }

    catch(error) {
        console.error(error)
    }

}

const theData = getAPIData('https://api.magicthegathering.io/v1/cards') 
.then(data => {
   console.log(data)
   .then(magicdata => {
    populateDOM(magicdata)
    })
})

console.log(theData)
let mainArea = document.querySelector('main')

function populateDOM(single_magic) {
    let magicDiv = document.createElement('div')
    let name = document.createElement('h3')
    let pic = document.createElement('img')

   // pokeDiv.setAttribute('class', 'charDivs')
   // pic.setAttribute('class', 'picDivs')

   //let pokeNum = getPokeNumber(single_pokemon.id)

    name.textContent = single_magic.name

    pic.src = `../images/pokeimages/${pokeNum}.png`

    pokeDiv.appendChild(name)
    pokeDiv.appendChild(pic)


    mainArea.appendChild(pokeDiv)

}






/*const allMagic = ( async () => {
const response = await fetch('https://api.magicthegathering.io/v1/cards')
const myJson = await response.json()
console.log(JSON.stringify(myJson))
})

console.log(allMagic())*/


