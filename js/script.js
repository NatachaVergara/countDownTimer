let segundo = 1000,
    minuto = segundo * 60,
    hora = minuto * 60,
    dia = hora * 24;

let btnComenzar = document.querySelector("#comenzar");
let btnBorrar = document.querySelector("#borrar");
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

        }

        

        let obj = {
            "name": document.querySelector("#evento").value,
            "date": fechaEvento,
            "nombreEvento" : h3.innerHTML = ` Su ${document.querySelector("#evento").value} comenzara en:`,

        };

        localStorage.setItem("stored", JSON.stringify(obj));
        
    })

};

function initApp() {   
    //genero el click inicial
    btnComenzar.addEventListener("click", () => {
        h3.innerHTML = ` Su ${document.querySelector("#evento").value} comenzara en:`;
        generarEvento();

    });       

    let obj = JSON.parse(localStorage.getItem("stored"));
    if (obj) {
        document.querySelector("#evento").value = obj.name;
        document.querySelector("#fecha").value = obj.date;
        h3.innerHTML = ` Su ${document.querySelector("#evento").value} comenzara en: `;
        generarEvento();
    }

    

    // //Boton para borrar el evento y que se refresque la pantalla
    // btnBorrar.addEventListener("click", () => {
    //     localStorage.clear();
    //     location.reload();

    // })
    

}




initApp()



