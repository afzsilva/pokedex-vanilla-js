const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
//const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");

const meuclick = {}

//const modalWindow = document.getElementById('detail-modal')

meuclick.addClick = ()=>{
    setTimeout(() => {
       document.querySelectorAll('#foto').forEach(e => e.addEventListener('click',() => {
        //modalWindow.classList.remove("hidden")      
        let name = e.getElementsByClassName("name")[0].textContent;
        
        openModal(name);
        

    })) 
    }, 2000);
}


const openModal = function (name) {
    const pokemon = new Pokemon();
    pokeApi.getPokemon(name)


    
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};


  
const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}; 
  
  //openModalBtn.addEventListener("click", openModal);
  closeModalBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);