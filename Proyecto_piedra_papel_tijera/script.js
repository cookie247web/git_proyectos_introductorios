//este es el codigo de la hoja
let maquina = 0;
let usuario = 0;
let empate = 0;
let partida = 0;
let ronda = 0; 

//a partir de aqui estaran las funciones programadas

function ConseguirEleccionDeMaquina(){

//variables usadas
let tijera_Comp,papel_Comp,piedra_Comp;

// se le dara un numero aleatorio a cada variable
tijera_Comp = Math.random();
papel_Comp = Math.random();
piedra_Comp= Math.random();

//este es el algoritmo que pense. dejare un diagrama 
if(piedra_Comp>papel_Comp || tijera_Comp> papel_Comp){ 
    if(piedra_Comp>tijera_Comp){
        return piedra_Comp ="Piedra"
    }else{
        return tijera_Comp = "Tijera"
    }
}else{
    if(papel_Comp>tijera_Comp){
        return papel_Comp = "Papel"

    }else{
        tijera_Comp = "Tijera"
    }
}



}
function ConseguirEleccionHumana(){
    let piedra,papel,tijera;
    //primero cree una variable donde se guarda la opcion seleccionada en el html, ah traves del document.queryselector.
    //dentro del paréntesis de este se busca el input con el nombre, de en este caso formulario y despues se busca el estado de este.
    //como en este caso se uso un swtich fue importante agregar un .value al final para este obtener el valor de la opcion seleccionada.
    
    let opción = document.querySelector('input[name="opción"]:checked').value;

    switch (opción){
        //el "1" es el value en el html
        case "1":

            return piedra="Piedra"
    
        case "2":
            return papel = "Papel"
           
        case "3":
            return tijera = "Tijera"
        
        default:
            console.log("escoge una opcion");
        
        
    }
}

window.RondaJugada = function(){
    
    // se piden las variables de funciones
    const EleccionHumana = ConseguirEleccionHumana();
    const EleccionDeMaquina = ConseguirEleccionDeMaquina();
    //buscamos el elento en el html por su id
    let idUsuario = document.getElementById("id-usuario");
    let idMaquina = document.getElementById("id-maquina");


    console.log(EleccionDeMaquina);
    console.log(EleccionHumana);

    //se escoge un ganador
    if(EleccionDeMaquina === EleccionHumana){
        empate++
        
        console.log("es un empate");

    }else{if(
        EleccionHumana === "Tijera" && EleccionDeMaquina === "Papel" || 
        EleccionHumana === "Papel"  && EleccionDeMaquina === "piedra" ||
        EleccionHumana === "Piedra" && EleccionDeMaquina === "Tijera"
     ){
        usuario++
        idUsuario.textContent = usuario;
        console.log ("gano ");
    }else{
        maquina++
        console.log("perdio "); }
        

    }
    
  contador();


}

function contador(){
   let victoria_usuario = 0;
   let victoria_maquina = 0;
    ronda++

    console.log("cantidad de ronda", ronda)
    console.log("cantidad de partidas", partida)
    console.log("maquina",maquina)
    console.log("usuario",usuario)
    console.log("empate",empate)
    

    if(ronda === 5){
        // contador de partidas
        partida++
        ronda= 0;
        //logica victorias por partida
        if(maquina === usuario){
            console.log("vaya,empataron ")
        }else{
            if(maquina>usuario){
                victoria_maquina++
                return victoria_maquina

            }else{
                victoria_usuario++
                return victoria_usuario
            }
        } 
    }

}


function Registro(){
    const EleccionHumana = ConseguirEleccionHumana();
    const EleccionDeMaquina = ConseguirEleccionDeMaquina();

    let boton;
    let listaRegistro;
    boton = document.getElementById("btn-registro");
    listaRegistro = document.getElementById("lista-registro");
    
    let numeroAccion = 1;

    boton.addEventListener("click",function(){
        let nuevoItem = document.createElement("li");

        nuevoItem.textContent = "Ronda "+ numeroAccion+ "\n"
        "Usuario: "+ EleccionHumana+ "Maquina: "+ EleccionDeMaquina +"\n"
        "Ganador: "+ Ganador;
        
        listaRegistro.appendChild(nuevoItem)
        
        numeroAccion++
        if(numeroAccion===5){
            

        }
    })

}