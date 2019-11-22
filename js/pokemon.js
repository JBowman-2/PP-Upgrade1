
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



const theData = getAPIData('https://pokeapi.co/api/v2/pokemon/?limit=25')
.then(data => {
    for (const pokemon of data.results) {
        getAPIData(pokemon.url)
            .then(pokedata => {
            populateDOM(pokedata)
        })

    }
    
})

console.log(theData)

let mainArea = document.querySelector('main')

function populateDOM(single_pokemon) {
    let pokeScene = document.createElement('div')
    let pokeFront = document.createElement('div')
    let pokeBack = document.createElement('div')
    let pokeCard = document.createElement('div')
    let name = document.createElement('h3')
    let pic = document.createElement('img')

    fillCardBack(pokeBack, single_pokemon)

    pokeScene.setAttribute('class', 'scene')
    pokeCard.setAttribute('class', 'card')
    pokeFront.setAttribute('class', 'card__face card__face--front')
    pokeBack.setAttribute('class', 'card__face card__face--back')
    pic.setAttribute('class', 'picDivs')
 

    let pokeNum = getPokeNumber(single_pokemon.id)
    pokeFront.appendChild(name)
    name.textContent = `${single_pokemon.name[0].toUpperCase()}${single_pokemon.name.slice(1)}`
    /* height: ${single_pokemon.height}*/

    //pic.src = `../images/pokeimages/${pokeNum}.png`
    pic.src = `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${pokeNum}.png`

    pokeFront.appendChild(pic)
    pokeFront.appendChild(name)
    

    pokeCard.appendChild(pokeFront)
    pokeCard.appendChild(pokeBack)
    pokeScene.appendChild(pokeCard)


    mainArea.appendChild(pokeScene)

    pokeCard.addEventListener( 'click', function() {
        pokeCard.classList.toggle('is-flipped');
    })

}

function fillCardBack(pokeBack, data) {
    let pokeOrder = document.createElement('p')
    let pokeHP = document.createElement('h3')
    pokeOrder.textContent = `${data.name[0].toUpperCase()}${data.name.slice(1)} ID# = ${data.id}`
    pokeHP.textContent = `Hit Points = ${data.stats[0].base_stat}`
    pokeBack.appendChild(pokeOrder)
    pokeBack.appendChild(pokeHP)
}

function getPokeNumber(id) {
    if(id < 10) return `00${id}`
    if(id > 9 && id < 100) {
        return `0${id}`}
    else return id
    
}

/*function getPokeNumber(charUrl) {
    let end = charUrl.lastIndexOf('/')
    let charId = charUrl.substring(end -2, end)
    if (charId.indexOf('/') !== -1 ) {
      return charId.slice (1,2) }
      else {
        return charId }
      }*/


      /*var card = document.querySelector('.card');
      card.addEventListener( 'click', function() {
        card.classList.toggle('is-flipped');
      });*/

