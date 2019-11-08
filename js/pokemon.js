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

const theData = getAPIDFata('https://pokeapi.com/api/v2/pokemon/')
.then(data => {

    for (const pokemon of data.results) {
        getAPIData(pokemon.url)
        .then(pokedata => {
            console.log(pokedata)
        })

    }
    
})

console.log(theData)


function getPokeNumber(id) {
    if(id < 10) return '00'$(id);
    if(id > 9 && < 100) {
        return '0'$(id);

    }
    
}