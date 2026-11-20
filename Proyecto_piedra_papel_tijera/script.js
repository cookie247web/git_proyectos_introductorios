//este es el codigo de la hoja

//variables globales
let maquina = 0;
let usuario = 0;
let empate = 0;
let maquinaEleccion;
let usuarioEleccion;
let partida = 0;
let ronda = 0;
let victoria_usuario = 0;
let victoria_maquina = 0;
let ganadorRonda;
let ganadorPartida;

//a partir de aqui estaran las funciones programadas

function ConseguirEleccionDeMaquina() {

    //variables usadas
    let tijera_Comp, papel_Comp, piedra_Comp;

    // se le dara un numero aleatorio a cada variable
    tijera_Comp = Math.random();
    papel_Comp = Math.random();
    piedra_Comp = Math.random();

    //este es el algoritmo que pense. dejare un diagrama 
    if (piedra_Comp > papel_Comp && piedra_Comp > tijera_Comp) {
        return piedra_Comp = "Piedra";

    } else {
        if (papel_Comp > tijera_Comp) {
            return papel_Comp = "Papel";
        } else {
            return tijera_Comp = "Tijera";
        }
    }



}
function ConseguirEleccionHumana() {
    let piedra, papel, tijera;
    //primero cree una variable donde se guarda la opcion seleccionada en el html, ah traves del document.queryselector.
    //dentro del paréntesis de este se busca el input con el nombre, de en este caso formulario y despues se busca el estado de este.
    //como en este caso se uso un swtich fue importante agregar un .value al final para este obtener el valor de la opcion seleccionada.

    let opción = document.querySelector('input[name="opción"]:checked').value;

    switch (opción) {
        //el "1" es el value en el html
        case "1":

            return piedra = "Piedra"

        case "2":
            return papel = "Papel"

        case "3":
            return tijera = "Tijera"

        default:
            console.log("escoge una opcion");


    }
}

//funcion de rondas
window.RondaJugada = function () {

    // se piden las variables de funciones
    const EleccionHumana = ConseguirEleccionHumana();
    const EleccionDeMaquina = ConseguirEleccionDeMaquina();
    maquinaEleccion = EleccionDeMaquina;
    usuarioEleccion = EleccionHumana;

    //se escoge un ganador
    if (EleccionDeMaquina === EleccionHumana) {
        //se agrega el punto y se imprime en el html
        empate++
        ganadorRonda = "<span style='color: black;'  >Empate</span>";

        console.log(EleccionHumana + " " + EleccionDeMaquina + " ");

    } else {
        if (
            EleccionHumana === "Tijera" && EleccionDeMaquina === "Papel" ||
            EleccionHumana === "Papel" && EleccionDeMaquina === "Piedra" ||
            EleccionHumana === "Piedra" && EleccionDeMaquina === "Tijera"
        ) {
            usuario++
            ganadorRonda = "<span style='color: green;' >Gana</span>";

            console.log(EleccionHumana + " " + EleccionDeMaquina + " ");

        } else {
            maquina++
            ganadorRonda = "<span style='color: red;' >Pierde</span>";
            console.log(EleccionHumana + " " + EleccionDeMaquina + " ");
        }
    }

    contador();
    registro();
}


function contador() {
    //variable de id
    let idRondas = document.getElementById("id-rondas");
    ronda++
    idRondas.textContent = ronda;
    console.log(usuario);


    if (ronda === 5) {
        // contador de partidas
        partida++
        abrirModal();
        //logica victorias por partida
        if (maquina === usuario) {
            console.log("vaya,empataron ")
        } else {
            if (maquina > usuario) {
                victoria_maquina++
                //abre la ventana emergente
                abrirModal();
                console.log("victoria de la maquina", victoria_maquina);
                ganadorPartida = " Maquina";
            } else {
                victoria_usuario++
                abrirModal();
                console.log("victoria del hunano", victoria_usuario);
                ganadorPartida = "Usuario";
            }
        }
    }

}


function registro() {

    let idRegistro = document.getElementById("lista-registro");

    let itemRonda = document.createElement("li");
    let itemPartida = document.createElement("li");

    itemRonda.classList.add("lista-ronda");
    itemPartida.classList.add("lista-partida");


    itemRonda.innerHTML = `<span>Ronda ${ronda}: ${usuarioEleccion} vs ${maquinaEleccion}</span>
                               <span> ${ganadorRonda} </span>`;
    idRegistro.appendChild(itemRonda);
    idRegistro.scrollTop = idRegistro.scrollHeight;



    if (ronda === 5) {
        if (usuario === maquina) {
            itemPartida.innerHTML = "Partida " + partida + ": El Ganador De La Partida Es ¿Empate?"
            idRegistro.appendChild(itemPartida);
            idRegistro.scrollTop = idRegistro.scrollHeight;
        } else {
            itemPartida.innerHTML = "Partida " + partida + ": El Ganador De La Partida Es " + ganadorPartida;
            idRegistro.appendChild(itemPartida);
            idRegistro.scrollTop = idRegistro.scrollHeight;
        }

    }


}


//funciones para la ventana emergente
function abrirModal() {
    document.getElementById("mi-modal").style.display = "flex";
    let idFinPartida = document.getElementById("fin-partida");
     if(usuario === maquina){
        idFinPartida.innerHTML = "<span style='color:white'>Empate</span>"
        
    }else{
        if(usuario>maquina){
            idFinPartida.innerHTML = "<span style='color:green'>Ganaste</span>"
        }else{
            idFinPartida.innerHTML = "<span style='color:red'>Perdiste</span>"
        }
    }


}

window.cerrarModal = function () {
    document.getElementById("mi-modal").style.display = "none";

    ronda = 0;
    usuario = 0;
    maquina = 0;
    empate = 0;



}

