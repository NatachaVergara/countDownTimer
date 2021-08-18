let body = document.querySelector("#body");
let modalModoOscuro = document.querySelector("#cuerpoModal");
let btnModo = document.querySelector("#btnModo")

btnModo.addEventListener("click", () =>{

        body.classList.toggle('modoOscuro');
        modalModoOscuro.classList.toggle('modoOscuroModal') ;      
        
        btnModo.classList.toggle(`btnModoOscuro`);
        if(btnModo.innerHTML === "Modo Noche 🌛"){
            btnModo.innerHTML = `Modo Dia 🌞`;
        }else{
            btnModo.innerHTML = `Modo Noche 🌛`;
        };
})


