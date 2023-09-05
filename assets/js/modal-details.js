const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".btn-close");

const meuclick = {}

meuclick.addClick = ()=>{
    setTimeout(() => {
       document.querySelectorAll('#foto').forEach(e => e.addEventListener('click',() => {        
        let name = e.getElementsByClassName("name")[0].textContent;        
        openModal(name);
    })) 
    }, 1000);
}


async function loadSinglePokemon (namePokemon) {
    return  pokeApi.getPokemon(namePokemon);    
}

const openModal = async function (name) {
    
    const pokemon = new Pokemon();
    
    let pokemonRetornado = await loadSinglePokemon(name);
    
    pokemon.abilities = pokemonRetornado.abilities;
    pokemon.photo = pokemonRetornado.sprites.other.dream_world.front_default;    
    pokemon.name = pokemonRetornado.name;
    pokemon.number = pokemonRetornado.order;    
    
    const types = pokemonRetornado.types.map((typeSlot)=> typeSlot.type.name);
    
    const [type] = types;
    
    pokemon.types = types; 
    pokemon.type = type;    
    
    modal.innerHTML = convertPokemonToModalDetail(pokemon);
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};


  
const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}; 
  

overlay.addEventListener("click", closeModal);


const convertPokemonToModalDetail = (pokemon) => {
    

    return`    
    
    <!-- header -->
            <div class="flex ${pokemon.type}">
                <div class="title-name-number">
                    <span class="name">${pokemon.name}</span>
                    <span class="number">#00${pokemon.number}</span>
                </div>
                <div class="types types-container">                    
                    ${pokemon.types.map((type)=>`<span class="type ${type}">${type}</span>`).join('')}
                </div>
                <div class="detail">
                    
                    <img src="${pokemon.photo}"
                        alt=""> 
                </div>
                <!--
                <div class="btn-close-container">
                <button class="btn-close">⨉</button>
                </div>
                -->
            </div>
            
            <!-- Content -->
            <div class="modal-details-container">
                <h3>Detalhes</h3>
                <dl id="detalhes">
                     <dt>Habilidades</dt>
                    ${pokemon.abilities.map((result)=>`<dd>${result.ability.name}</dd>`).join('')}
                </dl>
            </div>

    `

}