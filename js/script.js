let segundo = 1000,
    minuto = segundo * 60,
    hora = minuto * 60,
    dia = hora * 24;

let btnComenzar = document.querySelector("#comenzar");
let h3 = document.querySelector("h3");

//Generando el evento en base a la fecha actual.
function generarEvento() {
    let fechaEvento = document.querySelector("#fecha").value;
    let evento = new Date(fechaEvento).getTime();//transformo la fecha ingresada a local time

    setInterval(() => {
        let fechaActual = new Date().getTime();
        //Calculo para llegar a la fecha del evento . 
        let cuentaRegresiva = evento - fechaActual;

        document.querySelector("#dia").innerText = Math.floor(cuentaRegresiva / dia);

        document.querySelector("#hora").innerText = Math.floor((cuentaRegresiva % dia) / hora);

        document.querySelector("#minuto").innerText = Math.floor((cuentaRegresiva % hora) / minuto);

        document.querySelector("#segundo").innerText = Math.floor((cuentaRegresiva % minuto) / segundo);

        //Cuando el contador llega a 0, genero el cartel de llegada/comienzo del evento
        if (cuentaRegresiva < 0) {
            h3.innerHTML = "¡Ha llegado el día!";
            let contador = document.querySelector(".contador");
            contador.style.display = "none"
        };

    });

};



function initApp() {
    //genero el click inicial
    btnComenzar.addEventListener("click", () => {
        h3.innerHTML = ` Su ${document.querySelector("#evento").value} comenzara en:`;


        generarEvento();

    });
}

//Inicializador de la app
initApp();