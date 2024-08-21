const express = require("express")
const cors = require("cors")
const app= express()

app.use(express.static('public'))
const jugadores=[]
let currentId = 0; // Inicializa el contador global
app.use(cors())
app.use(express.json())

class Jugador{
    constructor(id){
        this.id=id
    }
    asignarMokepon(mokepon){
        this.mokepon=mokepon
    }
    actualizaPosicion(x,y){
        this.x=x
        this.y=y
    }
    asignarAtaques(ataques){
        this.ataques = ataques
    }
}
/**
 * Vamos a usar un generador id sin repetirse para eso usamos 
 * la libreria uuid
 */

const { v4: uuidv4 } = require('uuid');
/**
 * version de platzi , generar id
 */
/*
app.get("/unirse",(req,res)=>{
    const id = `${Math.random()}`
    const jugador=new Jugador(id)
    jugadores.push(jugador)
    res.send(id)
})*/

/**
 * version propia generar id
 */
/**inicializa el servidor */
/**
 * 
 app.get("/unirse", (req, res) => {
    const id = uuidv4();  // Genera un UUID v4
    const jugador = new Jugador(id);
    jugadores.push(jugador);
    res.send(id);
});
 */

class Mokepon{
    constructor(nombre){
        this.nombre=nombre
    }
}

app.get("/unirse", (req, res) => {
    currentId += 1; // Incrementa el contador global
    const id = currentId.toString(); // Convierte el ID a cadena (opcional)
    const jugador = new Jugador(id);
    jugadores.push(jugador);

    /**
     * cabezera
     */
    res.setHeader("Access-Control-Allow-Origin","*")
    res.send(id);
});

app.post("/mokepon/:jugadorId",(req,res)=>{
    const jugadorId= req.params.jugadorId || ""
    const nombre =req.body.mokepon || ""
    const mokepon = new Mokepon(nombre)
    
  const jugadorIndex=jugadores.findIndex(jugador=> jugadorId === jugador.id)
  if(jugadorIndex>=0){
    jugadores[jugadorIndex].asignarMokepon(mokepon)
  } 
  
    console.log(jugadores)
    console.log(jugadorId)
    res.end()
})
/*
app.post("/mokepon/:jugadorId/posicion", (req, res) => {
    const jugadorId = req.params.jugadorId || "";
    const x = parseFloat(req.body.x) || 0;
    const y = parseFloat(req.body.y) || 0;

    const jugadorIndex = jugadores.findIndex(jugador => jugadorId === jugador.id);
    if (jugadorIndex >= 0) {
        jugadores[jugadorIndex].actualizaPosicion(x, y);
    } else {
        return res.status(404).send({ error: "Jugador no encontrado" });
    }

    const enemigos = jugadores.filter(jugador => jugadorId !== jugador.id);
    try {
        const enemigosJson = JSON.stringify(enemigos);
        res.send({ enemigos: JSON.parse(enemigosJson) });
    } catch (error) {
        console.error("Error al serializar enemigos:", error);
        res.status(500).send({ error: "Error interno al procesar la solicitud" });
    }
    
    res.send({
        enemigos
    });
})
*/
app.post("/mokepon/:jugadorId/posicion", (req, res) => {
    const jugadorId = req.params.jugadorId || "";
    const x = parseFloat(req.body.x) || 0;
    const y = parseFloat(req.body.y) || 0;

   // console.log("Recibiendo datos para jugador:", jugadorId, "posicion:", x, y);

    const jugadorIndex = jugadores.findIndex(jugador => jugadorId === jugador.id);
    if (jugadorIndex >= 0) {
        jugadores[jugadorIndex].actualizaPosicion(x, y);
      //  console.log("Posicion actualizada para jugador:", jugadorId);
    } else {
      //  console.error("Jugador no encontrado:", jugadorId);
        return res.status(404).send({ error: "Jugador no encontrado" });
    }

    const enemigos = jugadores.filter(jugador => jugadorId !== jugador.id);
   // console.log("Enemigos encontrados:", JSON.stringify(enemigos, null, 2));

    res.send({ enemigos });
});

app.post("/mokepon/:jugadorId/ataques",(req,res)=>{
    const jugadorId= req.params.jugadorId || ""
    const ataques =req.body.ataques || []
    
    console.log("ataques recibidos:",ataques)
  const jugadorIndex=jugadores.findIndex(jugador=> jugadorId === jugador.id)
  if(jugadorIndex>=0){
    jugadores[jugadorIndex].asignarAtaques(ataques)
    
  } 
    res.end()
})
app.get("/mokepon/:jugadorId/ataques",(req,res)=>{
    const jugadorId= req.params.jugadorId || ""
    const jugador= jugadores.find((jugador)=> jugador.id === jugadorId)
    console.log("ataques enviados",jugador.ataques )
    res.send({
        ataques: jugador.ataques ||[]
    })
    
})

app.listen(8080,()=>{
    console.log("Servidor funcionando")
})
