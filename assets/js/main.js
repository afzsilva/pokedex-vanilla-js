const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 10 
let offset = 0;

const convertPokemonToLi = (pokemon) => {

    return `
            <li class="pokemon ${pokemon.type}" id="foto">
                <span class="number">#00${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>   
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type)=>`<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}"/>
                </div>                 
            </li>
    
    `
}

const loadPokemonItens = (offset, limit) => {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}



pokeApi.getPokemons().then((pokemons = [])=>{    
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('');
    meuclick.addClick();
})

loadPokemonItens(offset, limit)


loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)
        meuclick.addClick();
        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
        meuclick.addClick();
    }
})

