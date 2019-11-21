const allMagic = ( async () => {
const response = await fetch('https://api.magicthegathering.io/v1/cards/3')
const myJson = await response.json()
console.log(JSON.stringify(myJson))
})

console.log(allMagic())

/*maleCharacters.forEach(function(person) {
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

})*/

async function getMagicData(url) {
    try {
        const responce = await fetch(url)
        const data = await responce.json()
        return data
    }

    catch(error) {
        console.error(error)
    }

}