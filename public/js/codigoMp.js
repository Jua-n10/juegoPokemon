let varAtaque
let varAtaqueCpu 
let varResultado
let varContadorVidasJugador=0
let varContadorVidasCpu=0
let VarValidador
let mokepones=[]
let ataquesJugadorArrglo=[]
let ataqueCpuArreglo=[]
let opcionMokepon
let varcharmander 
let vartitan 
let varpikachud 
let varAtaqueDinamicos
let opcionAtaques
let botonAtaqueFuego
let botonAtaqueAgua
let botonAtaqueTierra
let botones
let varCpu=0 ;
let mokeponesEnemigos=[]
let ataqueEnemigo=[]
let ataqueJugadorP
let ataqueCpuP
let jugadorId=null
let enemigoId=null
let mapaBackground= new Image()
mapaBackground.src='./Mapa/mokemap.png'

let intervalo 

let indexmascotaSeleccionada
let objMokeponSelect

const sectionVerMapa=document.getElementById('ver-mapa')
const mapa=document.getElementById('mapa')
let alturaQueBuscamos
let anchoDelMapa
alturaQueBuscamos
const anchoMaximoDelMapa = 800;
const alturaMaximaDelMapa = 600; // Puedes ajustar este valor según tus necesidades
let lienzo;

function ajustarMapa() {
    let anchoDelMapa = window.innerWidth - 20;
    let alturaQueBuscamos = anchoDelMapa * alturaMaximaDelMapa / anchoMaximoDelMapa;

    // Limitar el ancho máximo
    if (anchoDelMapa > anchoMaximoDelMapa) {
        anchoDelMapa = anchoMaximoDelMapa;
        alturaQueBuscamos = anchoDelMapa * alturaMaximaDelMapa / anchoMaximoDelMapa;
    }

    // Limitar la altura máxima para evitar que sea demasiado alta
    if (alturaQueBuscamos > window.innerHeight - 20) {
        alturaQueBuscamos = window.innerHeight - 40;
        anchoDelMapa = alturaQueBuscamos * anchoMaximoDelMapa / alturaMaximaDelMapa;
    }

    mapa.width = anchoDelMapa;
    mapa.height = alturaQueBuscamos;
    lienzo = mapa.getContext("2d");
}
ajustarMapa()
//creamos las clases 

class Mokepon {
    constructor (nombre,foto,vida,fotoMapa ,id=null){
        this.id=id
        this.nombre=nombre
        this.foto= foto
        this.vida= vida
        this.ataques=[]

        this.ancho=50
        this.alto=80

        this.x=aleatorio(0,mapa.width-this.ancho) 
        this.y=aleatorio(0,mapa.height-this.alto) 
        this.mapaFoto= new Image()
        this.mapaFoto.src=fotoMapa
        this.velocidadx=0
        this.velocidady=0

    }
    obtenerTamanoAtaques() {
        return this.ataques.length;
    }

    pintarMokepon(){
        lienzo.drawImage(  
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
  

}

let charmander = new Mokepon('charmander','./pokemones/charmander.png',5,'./Mapa/capipepo.png')
//imprimi el objeto en consola
console.log (charmander)

let pikachu = new Mokepon ('pikachu','./pokemones/pikachu2.jpg',5,'./Mapa/hipodoge.png')

let titan = new Mokepon ('titan','./pokemones/titan.jpg',5,'./Mapa/ratigueya.png')
//inicializando ataques 
/**
 * CREANDO POKEMONES ENEMIGOS version anterior
 */
/*
let charmanderEnemigo = new Mokepon('charmander','./pokemones/charmander.png',5,'./Mapa/charmander.png')

let pikachuEnemigo = new Mokepon ('pikachu','./pokemones/pikachu2.jpg',5,'./Mapa/pikachu.png')

let titanEnemigo = new Mokepon ('titan','./pokemones/titan.jpg',5,'./Mapa/ratigueya.png')
*/
/**
 * INSERTANDO ATAQUE DE JUGADOR
 */
const charmander_Ataques =[
{nombreAta:'🔥',id:'boton-fuego',fotoAtaque:'./pokemones/fuego.jpg '},
{nombreAta:'🔥',id:'boton-fuego',fotoAtaque:'./pokemones/fuego.jpg'} ,
{nombreAta:'🔥',id:'boton-fuego',fotoAtaque:'./pokemones/fuego.jpg'},
{nombreAta:'💧',id:'boton-agua',fotoAtaque:'./pokemones/agua.jpg'},
{nombreAta:'🌿',id:'boton-tierra',fotoAtaque:'./pokemones/tierra.jpg'}
]
const pikachuAtaques=[
    {nombreAta:'🔥',id:'boton-fuego',fotoAtaque:'./pokemones/fuego.jpg '} ,
    {nombreAta:'💧',id:'boton-agua',fotoAtaque:'./pokemones/agua.jpg'},
    {nombreAta:'🌿',id:'boton-tierra',fotoAtaque:'./pokemones/tierra.jpg'},
    {nombreAta:'🌿',id:'boton-tierra',fotoAtaque:'./pokemones/tierra.jpg'},
    {nombreAta:'🌿',id:'boton-tierra',fotoAtaque:'./pokemones/tierra.jpg'}    
]

const titanAtaques=[
    {nombreAta:'🔥',id:'boton-fuego',fotoAtaque:'./pokemones/fuego.jpg '} ,
    {nombreAta:'💧',id:'boton-agua',fotoAtaque:'./pokemones/agua.jpg'},
    {nombreAta:'💧',id:'boton-agua',fotoAtaque:'./pokemones/agua.jpg'},
    {nombreAta:'💧',id:'boton-agua',fotoAtaque:'./pokemones/agua.jpg'},
    {nombreAta:'🌿',id:'boton-tierra',fotoAtaque:'./pokemones/tierra.jpg'}
]


charmander.ataques.push(...charmander_Ataques)
pikachu.ataques.push(...pikachuAtaques)
titan.ataques.push(...titanAtaques)
//aqui vamos

/* VERSION ANTERIOR
charmander.ataques.push(
{nombreAta:'🔥',id:'boton-fuego',fotoAtaque:'./pokemones/fuego.jpg '},
{nombreAta:'🔥',id:'boton-fuego',fotoAtaque:'./pokemones/fuego.jpg'} ,
{nombreAta:'🔥',id:'boton-fuego',fotoAtaque:'./pokemones/fuego.jpg'},
{nombreAta:'💧',id:'boton-agua',fotoAtaque:'./pokemones/agua.jpg'},
{nombreAta:'🌿',id:'boton-tierra',fotoAtaque:'./pokemones/tierra.jpg'} )
*/
/*
pikachu.ataques.push(
{nombreAta:'🔥',id:'boton-fuego',fotoAtaque:'./pokemones/fuego.jpg '} ,
{nombreAta:'💧',id:'boton-agua',fotoAtaque:'./pokemones/agua.jpg'},
{nombreAta:'🌿',id:'boton-tierra',fotoAtaque:'./pokemones/tierra.jpg'},
{nombreAta:'🌿',id:'boton-tierra',fotoAtaque:'./pokemones/tierra.jpg'},
{nombreAta:'🌿',id:'boton-tierra',fotoAtaque:'./pokemones/tierra.jpg'})
*/
/*
titan.ataques.push(
{nombreAta:'🔥',id:'boton-fuego',fotoAtaque:'./pokemones/fuego.jpg '} ,
{nombreAta:'💧',id:'boton-agua',fotoAtaque:'./pokemones/agua.jpg'},
{nombreAta:'💧',id:'boton-agua',fotoAtaque:'./pokemones/agua.jpg'},
{nombreAta:'💧',id:'boton-agua',fotoAtaque:'./pokemones/agua.jpg'},
{nombreAta:'🌿',id:'boton-tierra',fotoAtaque:'./pokemones/tierra.jpg'})
*/

mokepones.push(charmander,pikachu,titan)
console.log (mokepones)
/**
 * INSERTANDO ATAQUES POKEMONES ENEMIGOS
 */
//constantes
const pasarAsiguiente= document.getElementById("seleccionar-ataque")
const ocultarSeleccionarMascotas=document.getElementById("seleccionar-mascota")

const spanMascotaJugador= document.getElementById('mascota-jugador')
const contenedorTarjetas = document.getElementById('contendor')
const contenedorTarjetas2= document.getElementById('contenedorTarjetas')




// funcion para reiniciar location.reload
// atributo para desabilitar un boton
function validarVidas(){
VarValidador=true
if(varContadorVidasCpu<=0 || varContadorVidasJugador<=0 ){
    VarValidador=false;
    alert("esta validando que es falso"+VarValidador)
}
alert("esta retornando"+ VarValidador)
return VarValidador
}
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function seleccionarMascotaJugador(){
    
if(varcharmander.checked){
sectionVerMapa.style.display="flex"
varAtaqueDinamicos= charmander.ataques
//pasarAsiguiente.style.display="flex"

//codigo donde voy en el curso


indexmascotaSeleccionada = mokepones.findIndex(Mokepon => Mokepon.nombre === 'charmander');
alert("el indices es :"+ indexmascotaSeleccionada)
cargarMapa()



ocultarSeleccionarMascotas.style.display="none"
spanMascotaJugador.innerHTML=charmander.nombre
console.log(varAtaqueDinamicos)
mostrarAtaques(varAtaqueDinamicos)
secuenciaAtaques()
objMokeponSelect= mokepones[indexmascotaSeleccionada]
//console.log( "MASCOTA SELECCIONADA",objMokeponSelect= mokepones[indexmascotaSeleccionada])
selecionarMokepon(objMokeponSelect.nombre)

}else if(vartitan.checked){
sectionVerMapa.style.display="flex"
indexmascotaSeleccionada = mokepones.findIndex(Mokepon => Mokepon.nombre === 'titan');
alert("el indices es :"+ indexmascotaSeleccionada)

cargarMapa()

varAtaqueDinamicos=titan.ataques
spanMascotaJugador.innerHTML=titan.nombre
ocultarSeleccionarMascotas.style.display="none"
//pasarAsiguiente.style.display="flex"
console.log(varAtaqueDinamicos)
mostrarAtaques(varAtaqueDinamicos)
secuenciaAtaques()
objMokeponSelect= mokepones[indexmascotaSeleccionada]

//console.log( "MASCOTA SELECCIONADA",objMokeponSelect= mokepones[indexmascotaSeleccionada])
selecionarMokepon(objMokeponSelect.nombre)

}else if(varpikachud.checked){
sectionVerMapa.style.display="flex"
indexmascotaSeleccionada = mokepones.findIndex(Mokepon => Mokepon.nombre === 'pikachu');
alert("el indices es :"+ indexmascotaSeleccionada)
cargarMapa()

varAtaqueDinamicos=pikachu.ataques
spanMascotaJugador.innerHTML=pikachu.nombre
ocultarSeleccionarMascotas.style.display="none"
//pasarAsiguiente.style.display="flex"
console.log(varAtaqueDinamicos)
mostrarAtaques(varAtaqueDinamicos)
secuenciaAtaques()
objMokeponSelect= mokepones[indexmascotaSeleccionada]
//console.log( "MASCOTA SELECCIONADA",objMokeponSelect= mokepones[indexmascotaSeleccionada])
selecionarMokepon(objMokeponSelect.nombre)
} else {
alert("No seleccionaste tu mascota")
} 
//seleccionarMascotaEnemigo()
/*
mostrarAtaques(varAtaqueDinamicos)
secuenciaAtaques()
console.log( "MASCOTA SELECCIONADA",objMokeponSelect= mokepones[indexmascotaSeleccionada])
selecionarMokepon(objMokeponSelect.nombre)
*/
} 

function selecionarMokepon(mascotaJugador){
    console.log("mascota enviada al fetch"+mascotaJugador)
    fetch(`http://192.168.0.13:8080/mokepon/${jugadorId}`
    ,{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            mokepon: mascotaJugador
        })
    })
}


// **************************Aqui********
function seleccionarMascotaEnemigo(enemigo){

//alert("dentrando")
/**
 * esta es la anterior version de selecionar mascota enemigo que se hacia 

let spanMascotaEnemigo= document.getElementById('mascota-cpu')
varCpu = (Math.random() * (mokepones.length-1)) 
varCpu = Math.floor(varCpu)
alert( "Numero de mokepones. prueba"+mokepones.length)
alert("el numero aleatorio cpu es: " + "" + varCpu)
alert(mokepones[varCpu].nombre)
spanMascotaEnemigo.innerHTML= mokepones[varCpu].nombre
 */
/**
 * IMPLEMENTAMOS LA NUEVA VERSION "VAMOS::
 * ES BUENO ESCRIBIRTE A TI MISMO EN EL FUTURO , EL TIEMPO ES RELATIVO Y AUN NO LO ENTENDEMOS BIEN"
 */
let spanMascotaEnemigo= document.getElementById('mascota-cpu')

spanMascotaEnemigo.innerHTML= enemigo.nombre

}
function ataqueFuego(){
//  let spamVidasJugador=document.getElementById("vidas-juga")
let SpamVidasCpu=document.getElementById('vidas-cpu')
varAtaque = document.getElementById("boton-fuego").innerHTML
alert("tu mascota ataco con:"+varAtaque)
let varCpuAtaque=0;
varCpuAtaque=(Math.random() * 3) + 1
varCpuAtaque=  Math.floor(varCpuAtaque)
switch(varCpuAtaque){
case 1 :  
varAtaqueCpu=  document.getElementById("boton-fuego").innerHTML
varResultado="empate"
break;
case 2 :
    varAtaqueCpu=  document.getElementById("boton-agua").innerHTML
    varResultado="ganaste"
    if (validarVidas()){
        varContadorVidasCpu=varContadorVidasCpu-1
        SpamVidasCpu.innerHTML=varContadorVidasCpu
        alert("dentro")
    }else{
        alert("la cpu ha perdido el juego")
    }
    
break;
case 3 : 
varAtaqueCpu=  document.getElementById("boton-tierra").innerHTML
varResultado="ganaste"
if(validarVidas()){
    varContadorVidasCpu=varContadorVidasCpu-1
    SpamVidasCpu.innerHTML=varContadorVidasCpu
}else{
    alert("la cpu ha perdido el juego")
}

break;

}
//secuenciaAtaques()
crearMensaje(varResultado)

}
function ataqueAgua(){
let spamVidasJugador=document.getElementById("vidas-jugador")
let SpamVidasCpu=document.getElementById('vidas-cpu')
varAtaque= document.getElementById("boton-agua").innerHTML

alert("tu mascota ataco con:"+varAtaque)
let varCpuAtaque=0;
    varCpuAtaque=(Math.random() * 3) + 1
varCpuAtaque=  Math.floor(varCpuAtaque)
switch(varCpuAtaque){
case 1 : 
varAtaqueCpu=  document.getElementById("boton-fuego").innerHTML
varResultado="ganastes"
if(validarVidas()){
varContadorVidasCpu=varContadorVidasCpu-1
SpamVidasCpu.innerHTML=varContadorVidasCpu
}else{
alert("la cpu ah perdido el juego")
}
break;
case 2 :
    varAtaqueCpu=  document.getElementById("boton-agua").innerHTML
    varResultado="empate "
break;
case 3 : 
varAtaqueCpu=  document.getElementById("boton-tierra").innerHTML
varResultado="perdiste"
if(validarVidas()){
    varContadorVidasJugador=varContadorVidasJugador-1
    spamVidasJugador.innerHTML=varContadorVidasJugador
}else{
    alert("Usted ha perdido el juego")
}

break;

}
//secuenciaAtaques()
crearMensaje(varResultado)
}
function ataqueTierra(){
let spamVidasJugador=document.getElementById("vidas-jugador")
let SpamVidasCpu=document.getElementById('vidas-cpu')
varAtaque= document.getElementById("boton-tierra").innerHTML
alert("tu mascota ataco con:"+varAtaque)
let varCpuAtaque=0;
    varCpuAtaque=(Math.random() * 3) + 1
varCpuAtaque=  Math.floor(varCpuAtaque)
switch(varCpuAtaque){
case 1 : 
varAtaqueCpu=  document.getElementById("boton-fuego").innerHTML
varResultado="perdiste"
if(validarVidas()){
varContadorVidasJugador=varContadorVidasJugador-1
spamVidasJugador.innerHTML=varContadorVidasJugador
}else{
alert("Usted ha perdido el juego")
}
break;
case 2 :
    varAtaqueCpu=  document.getElementById("boton-agua").innerHTML
    varResultado="ganastes"
    if(validarVidas()){
        varContadorVidasCpu=varContadorVidasCpu-1
        SpamVidasCpu.innerHTML=varContadorVidasCpu
    }else{
        alert("la cpu ah perdido el juego")
    }
break;
case 3 : 
varAtaqueCpu=  document.getElementById("boton-tierra").innerHTML
varResultado="empate"
    break;


}
//secuenciaAtaques()
crearMensaje(varResultado)
}


function mostrarAtaques(varAtaqueDinamicos)
{
    //inyectando ataques

    varAtaqueDinamicos.forEach((Mokepon) => {

        opcionAtaques = `<label class="ataques BotonesAtaques" >
        <button id=${Mokepon.id}> ${Mokepon.nombreAta}</button>
        <img src=${Mokepon.fotoAtaque} alt=${Mokepon.id}>
    </label>`;
     contenedorTarjetas2.innerHTML += opcionAtaques

    
    // varAtaque= document.getElementById("boton-tierra").innerHTML
    });
    botonAtaqueFuego= document.getElementById("boton-fuego")
    botonAtaqueAgua= document.getElementById("boton-agua")
    botonAtaqueTierra= document.getElementById("boton-tierra")
    botones = document.querySelectorAll(".BotonesAtaques")
    
 //   botonAtaqueAgua.addEventListener("click",ataqueAgua)
  //  botonAtaqueFuego.addEventListener("click",ataqueFuego)
  //  botonAtaqueTierra.addEventListener("click",ataqueTierra)
 
}
function secuenciaAtaques()
{
    
    botones.forEach((boton)=>{
        boton.addEventListener("click",(e) => {
            e.preventDefault();
        // Parar la propagación del evento en caso de eventos anidados
             e.stopPropagation();
             // Deshabilitar el botón
            
             if (boton.disabled) return; 

           if(e.target.innerText==="🔥"){
               
                console.log("dentro si es fuego, prueba para insertar eventos por botones creados")
              //  alert("dentro si es fuego, prueba para insertar eve")
                ataquesJugadorArrglo.push("FUEGO")
                boton.disabled=true
                boton.style.background="#112f58"
               
            //   secuenciaAtaquesCpu()
                
            }else if(e.target.innerText==="💧"){
                console.log("dentro si es AGUA, prueba para insertar eventos por botones creados")
             //   alert("dentro si es Agua, prueba para insertar eve")
                ataquesJugadorArrglo.push("AGUA")
                boton.disabled=true
                boton.style.background="#112f58"
                
           //    secuenciaAtaquesCpu()
              
            }else if(e.target.innerText==="🌿"){
                console.log("dentro si es TIERRA, prueba para insertar eventos por botones creados")
               // alert("dentro si es Tierra, prueba para insertar eve")
                ataquesJugadorArrglo.push("TIERRA")
                boton.disabled=true
                boton.style.background="#112f58"
                
               // secuenciaAtaquesCpu()
               
            }
    
           
           // alert("tamaño del arreglo jugador"+ataquesJugadorArrglo.length)
            if(ataquesJugadorArrglo.length==5){
                alert("enviando ataques-------")
                alert(ataquesJugadorArrglo)
                enviarAtaques()
               // batalla()              
            }
          
        })

    }) 
}
/**
 * Definimos funcion enviar ataques
 */
function enviarAtaques(){
    fetch(`http://192.168.0.13:8080/mokepon/${jugadorId}/ataques`,
        {
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
              ataques: ataquesJugadorArrglo
            })
        })
        intervalo = setInterval(obtenerAtaques,50)
}

//
function obtenerAtaques(){
     fetch(`http://192.168.0.13:8080/mokepon/${enemigoId}/ataques`)
         .then(function(res){
            if(res.ok){
              res.json()
                 .then(function({ataques}){
                        if(ataques.length===5){
                            ataqueEnemigo=ataques
                           // alert("ENTRANDO A BATALLA imprimiendo ataques " )
                           // alert(ataques)
                            batalla()
                        }
                })
        }
     })
}
//secuencia ataques cpu
function secuenciaAtaquesCpu()

{
   // alert("ESTA ENTRANDO A EL METODO DE SECUENCIA ATAQUE CPU")
    let varCpuAtaq=0
    let ataqueCpu 
   // varCpuAtaq = (Math.random() * (mokepones[varCpu].obtenerTamanoAtaques())) 
   //arCpuAtaq = Math.floor(Math.random() * mokepones[varCpu].obtenerTamanoAtaques())
    varCpuAtaq = Math.floor(Math.random() * 4)

   // alert("el numero aleatorio para el ataque de la cpu es:"+varCpuAtaq)
   // alert("el numero aleatorio cpu es: " + "" + varCpu)
    //ssalert(mokepones[varCpu].nombre)
    console.log("el problema esta aqui")
    console.log(mokepones[varCpu].ataques[varCpuAtaq].nombreAta)

    /**
     *  La cuestion es la siguiente vas a guardar  esta linea en una variable mokepones[varCpu].ataques[varCpuAtaq].nombreAta ,
     * luego vas a comparar el ataque con el emoji 🔥💧🌿, como en la funcion anterior, 
     * y vas a ir haciendo el push pero no con el 🔥💧🌿 , si no con el nombre por ejemplo: ataquesJugadorArrglo.push("AGUA")
     * 
     * LUEGO VAS A HACER UNA FUNCION DE COMBATE PARA DECIDIR QUIEN GANO RECUERDA QUE TIENE DOS ARREGLOS DONDE TIENES LA SECUENTA DE LOS
     * ATAQUES
     */


    ataqueCpu= mokepones[varCpu].ataques[varCpuAtaq].nombreAta
    if(ataqueCpu=="🔥"){
        
        ataqueCpuArreglo.push("FUEGO")
        //alert("SE INSERTO ATAQUE FUEGO AL ARREGLO DE SECUENCIA DE ATAQUE PARA LA CPU")
    }else if(ataqueCpu=="💧"){
        ataqueCpuArreglo.push("AGUA")
       // alert("SE INSERTO ATAQUE AGUA AL ARREGLO DE SECUENCIA DE ATAQUE PARA LA CPU")
    }else if(ataqueCpu=="🌿"){
        ataqueCpuArreglo.push("TIERRA")
      //  alert("SE INSERTO ATAQUE TIERRA AL ARREGLO DE SECUENCIA DE ATAQUE PARA LA CPU")
    }
   // ataqueCpuArreglo.push(mokepones[varCpu].ataques[varCpuAtaq])

   /**
    * CREANDO FUNCION PARA COMPARAR ATAQUE JUGADOR Y CPU
    */
 //  if(ataquesJugadorArrglo.length==5){
  // batalla()
    

  //}
  //alert("tamaño del arreglo jugador"+ataquesJugadorArrglo.length)
  console.log("imprimiendo ataques del cpu", ataqueCpuArreglo)
  




}
function batalla (){
    clearInterval(intervalo)
    for (let index = 0; index <ataquesJugadorArrglo.length; index++) {
        ataqueJugadorP = ataquesJugadorArrglo[index];
        ataqueCpuP=ataqueEnemigo[index]
       // alert("imprimiendo ataques en el for, ataque jugador "+ ataqueJugadorP)
     //   alert("imprimiendo ataques en el for, ataque cpu "+ataqueCpuP)
        if(ataqueJugadorP=="FUEGO" && ataqueCpuP =="AGUA"){
            varContadorVidasJugador++
            
           // varResultado="empate"
           // crearMensaje(varResultado)
        }else if(ataqueJugadorP=="AGUA" && ataqueCpuP=="FUEGO"){
            varContadorVidasCpu++
        }else if(ataqueJugadorP=="FUEGO" && ataqueCpuP=="AGUA"){
            varContadorVidasJugador++
        }else if(ataqueJugadorP=="FUEGO" && ataqueCpuP=="TIERRA"){
            varContadorVidasJugador++
        }else if(ataqueJugadorP=="TIERRA" && ataqueCpuP=="FUEGO"){
            varContadorVidasCpu++
        }else if(ataqueJugadorP=="TIERRA" && ataqueCpuP=="AGUA"){
            varContadorVidasJugador++
        }else if(ataqueJugadorP=="AGUA" && ataqueCpuP=="TIERRA"){
            varContadorVidasCpu++
        }
        crearMensaje2()
    }
    console.log("ataque jugador")
    console.log(ataquesJugadorArrglo)
    console.log("ataque cpu")
    console.log(ataqueEnemigo)
    // validando quien gano 
    validarBatalla()
    
    crearMensaje(varResultado)
}

/**
 * 
 * @param funcion para validar el resultado de todo el combate , si gano, perdio o se empato
 */
function validarBatalla(){
    if(varContadorVidasCpu==varContadorVidasJugador){
        varResultado ="EMPATE"
    }else if(varContadorVidasJugador>varContadorVidasCpu){
        varResultado ="GANASTE"
    }else if(varContadorVidasCpu>varContadorVidasJugador){
        varResultado ="PERDISTE"
    }

}

function crearMensaje(varResultado){
// creando variables para insertar  parrafos
// let sectionMensajes= document.getElementById("mensajes")
let resultado=document.getElementById("resultado")
let ataqueJugador=document.getElementById("ataque-jugador")

//intentos de juan sebastian por arrglar error de mostrar resultado de ataques ahora vengo

//let ataqueJugador=varAtaqueDinamicos.nombreAta

let ataqueEnemigo=document.getElementById("ataque-enemigo")  
let vidaCpu= document.getElementById("vidas-cpu")
let vidaJugador= document.getElementById("vidas-jugador")


vidaCpu.textContent= (varContadorVidasCpu)
vidaJugador.textContent=(varContadorVidasJugador)      
// creando  parrafos
resultado.innerHTML=varResultado
let parrafo= document.createElement("p")
let parrafo2= document.createElement("p")


// insertando resultado

//parrafo.innerHTML=ataqueJugadorP
//parrafo2.innerHTML=ataqueCpuP

// version ,  parrafo.innerHTML = "tu mascota atacon con"+ varAtaque+", la moscota del enemigo ataco con:"+ varAtaqueCpu+"  "+ varResultado
//insertando parrafo en html
//ataqueEnemigo.appendChild(parrafo)
//ataqueJugador.appendChild(parrafo2)
//resultado.appendChild(parrafo2) 
//sectionMensajes.appendChild(parrafo)


//desabilitandoBotones()
}

function crearMensaje2(){
    // creando variables para insertar  parrafos
    // let sectionMensajes= document.getElementById("mensajes")
   
    let ataqueJugador=document.getElementById("ataque-jugador")
   
    
    //intentos de juan sebastian por arrglar error de mostrar resultado de ataques ahora vengo
    
    //let ataqueJugador=varAtaqueDinamicos.nombreAta
    
    let ataqueEnemigo=document.getElementById("ataque-enemigo")        
    // creando  parrafos
   
    let parrafo= document.createElement("p")
    let parrafo2= document.createElement("p")
    // insertando resultado
    
    parrafo.innerHTML=ataqueJugadorP
    parrafo2.innerHTML=ataqueCpuP
    
    // version ,  parrafo.innerHTML = "tu mascota atacon con"+ varAtaque+", la moscota del enemigo ataco con:"+ varAtaqueCpu+"  "+ varResultado
    //insertando parrafo en html
    ataqueEnemigo.appendChild(parrafo)
    ataqueJugador.appendChild(parrafo2)
    //resultado.appendChild(parrafo2) 
    //sectionMensajes.appendChild(parrafo)
    }

/**
 * 
 */

function reiniciando(){
location.reload()
alert("dentro")

}
function desabilitandoBotones(){
//if(validarVidas()==false){
    //desabiitando botones
    let botonAtaqueAgua= document.getElementById("boton-agua")
    let botonAtaqueFuego= document.getElementById("boton-fuego")
    let botonAtaqueTierra= document.getElementById("boton-tierra")
    botonAtaqueAgua.disabled=true
    botonAtaqueFuego.disabled=true
    botonAtaqueTierra.disabled=true
//}else{
    let sectionReiniciar=document.getElementById("boton-reiniciar")
    sectionReiniciar.style.display="block"

//}
}


function iniciarJuego(){
    mokepones.forEach((Mokepon) => {

        opcionMokepon=`<input type="radio" name ="mascota" id = ${Mokepon.nombre} />  
     <label class="mascota" for=${Mokepon.nombre}> 
         <p>${Mokepon.nombre}</p>
         <img src =${Mokepon.foto} alt=${Mokepon.nombre}>
     </label>`
     contenedorTarjetas.innerHTML += opcionMokepon
    varcharmander = document.getElementById("charmander")
     vartitan = document.getElementById("titan")
     varpikachud = document.getElementById("pikachu")  
    });
    
let botonMascotaJugador = document.getElementById("boton-mascota")

let botonReiniciar=document.getElementById("boton-reiniciar")
botonMascotaJugador.addEventListener("click",seleccionarMascotaJugador)
//creando variable auxiliar
let sectionAtaque = document.getElementById("seleccionar-ataque")
let sectionReiniciar=document.getElementById("boton-reiniciar")
sectionAtaque.style.display="none"
sectionReiniciar.style.display="none"
sectionVerMapa.style.display="none"
    // style.display 
    //none para desabilatar una seccion
    // block para habilitar una seccion

botonReiniciar.addEventListener("click",reiniciando)

unirsealJuego()

}
/**
 * 
 */

function unirsealJuego(){
    alert("UNIENDOSE")
    fetch(`http://192.168.0.13:8080/unirse`)
    .then(function (res){
        console.log(res)
        if(res.ok){
            res.text()
                .then(function(respuesta){
                    console.log(respuesta)
                    jugadorId=respuesta
                     
                })
        }
    })
}
function pintarCanvas(){
    // console.log("mokepon selecionado en pintar canvas",mokepones[indexmascotaSeleccionada])
    
    
    objMokeponSelect= mokepones[indexmascotaSeleccionada]

  /*  charmander.x=charmander.x+charmander.velocidadx
    charmander.y=charmander.y+charmander.velocidady
    */
    objMokeponSelect.x=objMokeponSelect.x+objMokeponSelect.velocidadx
    objMokeponSelect.y=objMokeponSelect.y+objMokeponSelect.velocidady
    //lienzo.clearRect(0,0,mapa.width,mapa.height)
    lienzo.drawImage(
        mapaBackground,0,0,mapa.width,mapa.height
    )

    objMokeponSelect.pintarMokepon()
    enviarPosicion(objMokeponSelect.x,objMokeponSelect.y)
    /*
    charmanderEnemigo.pintarMokepon()
    pikachuEnemigo.pintarMokepon()
    titanEnemigo.pintarMokepon()
    */
    //console.log( charmanderEnemigo.pintarMokepon())
    mokeponesEnemigos.forEach(function (mokepon){
        mokepon.pintarMokepon()
      //AQUI HAY UN PROBLEMA DE COLISION ARREGLAR
        revisarColision(mokepon)
    })
    /*
    if(objMokeponSelect.velocidadx!==0 || objMokeponSelect.velocidady!==0){
        revisarColision(titanEnemigo)
        revisarColision(charmanderEnemigo)
        revisarColision(pikachuEnemigo)
        
    }*/
}
/*
function enviarPosicion(x,y){
    fetch(`http://192.168.0.13:8080/mokepon/${jugadorId}/posicion`
        ,{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                x,
                y

            })
        })

        .then(function (res){
            if(res.ok){
            
                res.json()
                    .then(function ({ enemigos }){
                      
                        console.log(enemigos)
                        mokeponesEnemigos=  enemigos.map(function(enemigo){
                            const mokeponNombre=enemigo.mokepon.nombre|| ""
                            let mokepon_Enemigo =null
                            if(mokeponNombre ==="charmander"){
                                mokepon_Enemigo = new Mokepon('charmander','./pokemones/charmander.png',5,'./Mapa/charmander.png',enemigo.id)
                            }else if(mokeponNombre==="pikachu"){
                                mokepon_Enemigo = new Mokepon ('pikachu','./pokemones/pikachu2.jpg',5,'./Mapa/pikachu.png',enemigo.id)
                            }else if(mokeponNombre==="titan"){
                                mokepon_Enemigo = new Mokepon ('titan','./pokemones/titan.jpg',5,'./Mapa/ratigueya.png',enemigo.id)
                            }
                            mokepon_Enemigo.x=enemigo.x
                            mokepon_Enemigo.y=enemigo.y
                            return mokepon_Enemigo
                       //     mokepon_Enemigo.pintarMokepon()
                        })
                    })
                    

                   

                    
            }
        })
}*/

function enviarPosicion(x, y) {
    fetch(`http://192.168.0.13:8080/mokepon/${jugadorId}/posicion`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ x, y })
    })
    .then(res => {
        if (!res.ok) {
            throw new Error('Error en la respuesta del servidor');
        }
        return res.json();
    })
    .then(({ enemigos }) => {
        mokeponesEnemigos = enemigos.map(enemigo => {
            const mokeponNombre = enemigo.mokepon?.nombre || "";
            let mokepon_Enemigo = null;

            if (mokeponNombre === "charmander") {
                mokepon_Enemigo = new Mokepon('charmander', './Mapa/capipepo.png', 5, './Mapa/capipepo.png', enemigo.id);
            } else if (mokeponNombre === "pikachu") {
                mokepon_Enemigo = new Mokepon('pikachu', './Mapa/hipodoge.jpg', 5, './Mapa/hipodoge.png', enemigo.id);
            } else if (mokeponNombre === "titan") {
                mokepon_Enemigo = new Mokepon('titan', './Mapa/ratigueya.jpg', 5, './Mapa/ratigueya.png', enemigo.id);
            }

            if (mokepon_Enemigo) {
                mokepon_Enemigo.x = enemigo.x;
                mokepon_Enemigo.y = enemigo.y;
            }

            return mokepon_Enemigo;
        });

        console.log(mokeponesEnemigos);
    })
    .catch(error => {
        console.error('Ocurrió un error:', error);
    });
}


function moverCharmanderIzquierda(){
   
    objMokeponSelect.velocidadx=-5
   // charmander.y=charmander.y+5
   pintarCanvas()
}
function moverCharmanderDerecha(){
   
    // charmander.x=charmander.x +5
    objMokeponSelect.velocidadx=5
     pintarCanvas()
 }

function moverCharmanderAbajo(){
   
   // charmander.x=charmander.x +5
   objMokeponSelect.velocidady=5
    pintarCanvas()
}
function moverCharmanderArriba(){
   
    // charmander.x=charmander.x +5
    objMokeponSelect.velocidady=-5
     pintarCanvas()
 }
 function deterMovimiento(){
    objMokeponSelect.velocidadx=0
    objMokeponSelect.velocidady=0
 }

 function sePresionoUnaTecla(event){
    console.log(event.key)
    event.preventDefault(); // Prevenir el comportamiento predeterminado

    switch(event.key){
        case 'ArrowUp':
            moverCharmanderArriba()
        break
        case 'ArrowDown':
            moverCharmanderAbajo()
        break
        case 'ArrowLeft':
            moverCharmanderIzquierda()        
        break

        case 'ArrowRight':
            moverCharmanderDerecha()          
        break

    }
    
 }
/*
 function revisarColision(mokeponEnemigo){
    const arribaEnemigo=mokeponEnemigo.y
    const abajoEnemigo= mokeponEnemigo.y+mokeponEnemigo.alto
    const derechaEnemigo= mokeponEnemigo.x+mokeponEnemigo.ancho
    const izquierdaEnemigo= mokeponEnemigo.x

    const arribaMascota=objMokeponSelect.y
    const abajoMascota= objMokeponSelect.y+objMokeponSelect.alto
    const derechaMascota= objMokeponSelect.x+objMokeponSelect.ancho
    const izquierdaMascota= objMokeponSelect.x

    if(abajoMascota<arribaEnemigo || 
        arribaMascota>abajoEnemigo||
        derechaMascota<izquierdaEnemigo||
        izquierdaMascota>derechaEnemigo )
    {
        return
    }else{
        deterMovimiento()
        clearInterval(intervalo)
        enemigoId=mokeponEnemigo.id
        // aqui llamamos a la funcion seleccionar mascota enemigo
        seleccionarMascotaEnemigo(mokeponEnemigo)
        pasarAsiguiente.style.display="flex"
        sectionVerMapa.style.display="none"
        
      //  alert("hay colision")
    }
 }
*/
/*
function revisarColision(mokeponEnemigo) {
    const arribaEnemigo = mokeponEnemigo.y;
    const abajoEnemigo = mokeponEnemigo.y + mokeponEnemigo.alto;
    const derechaEnemigo = mokeponEnemigo.x + mokeponEnemigo.ancho;
    const izquierdaEnemigo = mokeponEnemigo.x;

    const arribaMascota = objMokeponSelect.y;
    const abajoMascota = objMokeponSelect.y + objMokeponSelect.alto;
    const derechaMascota = objMokeponSelect.x + objMokeponSelect.ancho;
    const izquierdaMascota = objMokeponSelect.x;

    // Verificar si no hay colisión
    if (
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ) {
        return;
    } else {
        // Hay colisión
        deterMovimiento();
        clearInterval(intervalo);
        enemigoId = mokeponEnemigo.id;

        seleccionarMascotaEnemigo(mokeponEnemigo);
        pasarAsiguiente.style.display = "flex";
        sectionVerMapa.style.display = "none";

        // alert("hay colision")
    }
}*/ //´penultima version
/*
function revisarColision(mokeponEnemigo) {
    const arribaEnemigo = mokeponEnemigo.y;
    const abajoEnemigo = mokeponEnemigo.y + mokeponEnemigo.alto;
    const derechaEnemigo = mokeponEnemigo.x + mokeponEnemigo.ancho;
    const izquierdaEnemigo = mokeponEnemigo.x;

    const arribaMascota = objMokeponSelect.y;
    const abajoMascota = objMokeponSelect.y + objMokeponSelect.alto;
    const derechaMascota = objMokeponSelect.x + objMokeponSelect.ancho;
    const izquierdaMascota = objMokeponSelect.x;

    console.log("Verificando colisión...");
    console.log("Mascota:", arribaMascota, abajoMascota, izquierdaMascota, derechaMascota);
    console.log("Enemigo:", arribaEnemigo, abajoEnemigo, izquierdaEnemigo, derechaEnemigo);

    // Verificar si NO hay colisión
    if (
        abajoMascota < arribaEnemigo || 
        arribaMascota > abajoEnemigo || 
        derechaMascota < izquierdaEnemigo || 
        izquierdaMascota > derechaEnemigo 
    ) {
       console.log("No hay colisión");
        return; 
    } else {
        console.log("Hay colisión");
        deterMovimiento();
        clearInterval(intervalo);
        enemigoId = mokeponEnemigo.id;

        seleccionarMascotaEnemigo(mokeponEnemigo);
      //  pasarAsiguiente.style.display = "flex";
        //sectionVerMapa.style.display = "none";
    }
}*/
function revisarColision(mokeponEnemigo) {
    if (
        isNaN(mokeponEnemigo.x) || isNaN(mokeponEnemigo.y) ||
        isNaN(objMokeponSelect.x) || isNaN(objMokeponSelect.y)
    ) {
        console.error("Coordenadas no válidas detectadas:", mokeponEnemigo, objMokeponSelect);
        return; // No procesar colisión si las coordenadas son inválidas
    }

    const arribaEnemigo = mokeponEnemigo.y;
    const abajoEnemigo = mokeponEnemigo.y + mokeponEnemigo.alto;
    const derechaEnemigo = mokeponEnemigo.x + mokeponEnemigo.ancho;
    const izquierdaEnemigo = mokeponEnemigo.x;

    const arribaMascota = objMokeponSelect.y;
    const abajoMascota = objMokeponSelect.y + objMokeponSelect.alto;
    const derechaMascota = objMokeponSelect.x + objMokeponSelect.ancho;
    const izquierdaMascota = objMokeponSelect.x;

    console.log("Verificando colisión...");
    console.log("Mascota:", arribaMascota, abajoMascota, izquierdaMascota, derechaMascota);
    console.log("Enemigo:", arribaEnemigo, abajoEnemigo, izquierdaEnemigo, derechaEnemigo);

    if (
        abajoMascota < arribaEnemigo || 
        arribaMascota > abajoEnemigo || 
        derechaMascota < izquierdaEnemigo || 
        izquierdaMascota > derechaEnemigo 
    ) {
        console.log("No hay colisión");
        return; 
    } else {
        console.log("Hay colisión");
        deterMovimiento();
        clearInterval(intervalo);
        enemigoId = mokeponEnemigo.id;

        seleccionarMascotaEnemigo(mokeponEnemigo);
        pasarAsiguiente.style.display = "flex";
        sectionVerMapa.style.display = "none";
    }
}
/**hasta aqui VAMOS 23/08/2024 */




// Ajustar el mapa al cargar la página
//ajustarMapa();



 function cargarMapa(){
    
 //   mapa.width = 800
  //  mapa.height = 600

    intervalo=setInterval(pintarCanvas,50)
    window.addEventListener('keydown',sePresionoUnaTecla)
    window.addEventListener('keyup',deterMovimiento)
    // Ajustar el mapa cuando cambia el tamaño de la ventana
    window.addEventListener('resize', ajustarMapa);
 }
window.addEventListener('load',iniciarJuego)