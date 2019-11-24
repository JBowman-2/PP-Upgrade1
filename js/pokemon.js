
class customPokemon {
    constructor(name, id, hp, type, ability) {
        this.name = name
        this.id = id
        this.hp = hp
        this.type = type
        this.ability = ability
    }
}


function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

document.querySelector('#customButton').addEventListener('click', () => {
    let pokeName = prompt('What is your Pokemon named?')
    let pokeId = prompt('Give your Pokemon an ID number.')
    let pokeHp = prompt('How much Hit Points does your Pokemon Have?')
    let pokeType = prompt('What type of Pokemon is it?')
    let pokeAbility = prompt('What Ability does your Pokemon have')
    

    let customPoke = new customPokemon(pokeName, pokeId, pokeHp, pokeType, pokeAbility)

    populateCUSTOM(customPoke)

})

document.querySelector('#idButton').addEventListener('click', () => {
    let pokeId = prompt('Enter the Pokemons ID number')
    console.log(pokeId)
    let pokeIdNum = parseInt(pokeId, 10)
    if (pokeIdNum > 807) {
        alert('Id Number Does not Exist')
        return
    } else {
        getAPIData(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
        .then(result => {
            populateDOM(result)     
        })
        .catch(error => console.log(error))
    }
})

/*document.querySelector('#nameButton').addEventListener('click', () => {
    let newPokeName = prompt('Enter the Pokemons name')
    console.log(newPokeName)
    let pokeName = `${newPokeName[0].toLowerCase()}${newPokeName.slice(1)}`
    console.log(pokeName)
     getAPIData(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        .then(result => {
            if (result != 'SyntaxError') {
                alert('That Pokemon does not exist')
                return
            } else {
            populateDOM(result)
            }
    })*/



document.querySelector('#nameButton').addEventListener('click', () => {
    let newPokeName = prompt('Enter the Pokemons name')
    console.log(newPokeName)
    let pokeName = `${newPokeName[0].toLowerCase()}${newPokeName.slice(1)}`
    console.log(pokeName)
     getAPIData(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        .then(result => {
                populateDOM(result)
            })  
})

document.querySelector('#randButton').addEventListener('click', () => {
    let pokeId = getRandom(26, 808)
    getAPIData(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
        .then(result => {
            populateDOM(result)
    })   
    .catch(error => console.log(error))
})


async function getAPIData(url) {
    try {
        const responce = await fetch(url)
        const data = await responce.json()
        return data
    }

    catch(error) {
        console.error(error)
        alert(`That Pokemon dosen't exist`)
       
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
   
    pic.src = `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${pokeNum}.png`

    pokeFront.appendChild(pic)
    pokeFront.appendChild(name)
    

    pokeCard.appendChild(pokeFront)
    pokeCard.appendChild(pokeBack)
    pokeScene.appendChild(pokeCard)


    mainArea.appendChild(pokeScene)

    pokeScene.classList.add('animated', 'rotateInDownLeft')
    pokeCard.addEventListener( 'click', function() {
        pokeCard.classList.toggle('is-flipped');
    })

}

function fillCardBack(pokeBack, data) {
    let pokeOrder = document.createElement('p')
    let pokeHP = document.createElement('p')
    let pokeType = document.createElement('p')
    let pokeAbilit = document.createElement('p')
    let sprite = document.createElement('img')
    let pokeNum = (data.id)

    sprite.setAttribute('class', 'sprite')
    sprite.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokeNum}.png`
    
    pokeOrder.textContent = `${data.name[0].toUpperCase()}${data.name.slice(1)} ID# = ${data.id}`
    pokeOrder.textContent = `Pokemon ID# = ${data.id}`
    pokeHP.textContent = `Hit Points = ${data.stats[0].base_stat}` 
    pokeType.textContent = `Type = ${data.types[0].type.name[0].toUpperCase()}${data.types[0].type.name.slice(1)}`
    
    pokeAbilit.textContent = `Ability = ${data.abilities[0].ability.name[0].toUpperCase()}${data.abilities[0].ability.name.slice(1)}`
    
    
    pokeBack.appendChild(pokeOrder)
    pokeBack.appendChild(pokeHP)
    pokeBack.appendChild(pokeType)
  
    pokeBack.appendChild(pokeAbilit)
    pokeBack.appendChild(sprite)
    
}

// creating a custom pokemon

function populateCUSTOM(single_pokemon) {
    let pokeScene = document.createElement('div')
    let pokeFront = document.createElement('div')
    let pokeBack = document.createElement('div')
    let pokeCard = document.createElement('div')
    let name = document.createElement('h3')
    let pic = document.createElement('img')

    customFillCardBack(pokeBack, single_pokemon)

    pokeScene.setAttribute('class', 'scene')
    pokeCard.setAttribute('class', 'card')
    pokeFront.setAttribute('class', 'card__face card__face--front')
    pokeBack.setAttribute('class', 'card__face card__face--back')
    pic.setAttribute('class', 'picDivs')
 
    pokeFront.appendChild(name)
    name.textContent = `${single_pokemon.name[0].toUpperCase()}${single_pokemon.name.slice(1)}`

    pic.src = `../images/pokeimages/ball.png`

    pokeFront.appendChild(pic)
    pokeFront.appendChild(name)
    pokeCard.appendChild(pokeFront)
    pokeCard.appendChild(pokeBack)
    pokeScene.appendChild(pokeCard)

    mainArea.appendChild(pokeScene)

    pokeScene.classList.add('animated', 'rotateInDownLeft')

    pokeCard.addEventListener( 'click', function() {
        pokeCard.classList.toggle('is-flipped');
    })


}

function customFillCardBack(pokeBack, data) {
    let pokeOrder = document.createElement('p')
    let pokeHP = document.createElement('p')
    let pokeType = document.createElement('p')  
    let pokeAbilit = document.createElement('p')
    let sprite = document.createElement('img')

    sprite.setAttribute('class', 'spriteCustom')
    sprite.src = `../images/pokeimages/logo.png`

    pokeOrder.textContent = `${data.name[0].toUpperCase()}${data.name.slice(1)} ID# = ${data.id}`
    pokeOrder.textContent = `Pokemon ID# = ${data.id}`
    pokeHP.textContent = `Hit Points = ${data.hp}` 
    pokeType.textContent = `Type = ${data.type[0].toUpperCase()}${data.type.slice(1)}`
    pokeAbilit.textContent = `Ability = ${data.ability[0].toUpperCase()}${data.ability.slice(1)}`
     
    pokeBack.appendChild(pokeOrder)
    pokeBack.appendChild(pokeHP)
    pokeBack.appendChild(pokeType)
    pokeBack.appendChild(pokeAbilit)
    pokeBack.appendChild(sprite)
     
}

function getPokeNumber(id) {
    if(id < 10) return `00${id}`
    if(id > 9 && id < 100) {
        return `0${id}`}
    else return id
     
}


