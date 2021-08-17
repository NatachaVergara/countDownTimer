//Traigo los elementos a usar DOM
let cuerpoModal = document.querySelector('.modalBody');
let modal = document.querySelector('.modal');
let btnCerrar = document.querySelector('.cerrar');
let comenzar = document.querySelector('#comenzar');

//Eventos
comenzar.addEventListener("click", abrirModal);
btnCerrar.addEventListener("click", cerrarModal);
window.addEventListener("click", outsideClick);


//Funciones
//Abrir
function abrirModal() {
    let eventoInput = document.querySelector("#evento");
    let fechaInput = document.querySelector("#fecha");

    if (eventoInput.value.length == 0 || fechaInput.value.length == 0) {
        cuerpoModal.style.display = "block";
        modal.style.visibility = "visible";
        document.querySelector(".contador").style.display = "none";
    }
};

function cerrarModal() {
    cuerpoModal.style.display = "none";
    modal.style.visibility = "hidden";    
    setTimeout(() => {
        localStorage.clear();
        location.reload()
    }, 1)
};

function outsideClick(e) {
    if (e.target == modal) {
        cuerpoModal.style.display = "none";
        modal.style.visibility = "hidden";
        setTimeout(() => {
            localStorage.clear();
            location.reload()
        }, 1)
    }
};
