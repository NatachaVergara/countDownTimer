let segundo = 1000,
    minuto = segundo * 60,
    hora = minuto  * 60,
    dia = hora * 24;

let btnComenzar = document.querySelector("#comenzar");
let h3 = document.querySelector("h3");

btnComenzar.addEventListener("click", ()=>{
    h3.innerHTML = ` Su ${document.querySelector("#evento").value} comenzara en:` ;
    generarEvento();
    
})



function generarEvento(){
    let fechaEvento = document.querySelector("#fecha").value; 
    let evento = new Date(fechaEvento).getTime();

    setInterval(()=>{
        let fechaActual = new Date().getTime();
        let cuentaRegresiva = evento - fechaActual;

        document.querySelector("#dia").innerText = Math.floor(cuentaRegresiva / dia);
        
        document.querySelector("#hora").innerText = Math.floor((cuentaRegresiva % dia) / hora);

        document.querySelector("#minuto").innerText = Math.floor((cuentaRegresiva % hora) / minuto);

        document.querySelector("#segundo").innerText = Math.floor((cuentaRegresiva % minuto) / segundo);
    })
    
};





