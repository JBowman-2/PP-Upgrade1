async function getPokemon(url) {
    try {
        const responce = await fetch(url)
        const data = await responce.json()
        return data
    }

    catch(error) {
        connsole.error(error)
    }

}