var velocidadJuego = 5
var filasTabla = 26
var columnasTabla = 16

//colores
var rojo = '#da0000';
var verde = '#00e510';
var azul = '#0046f7';
var amarillo = '#d2ff00';
var naranja = '#ff8a00';
var rosa = '#ff52e0';
var azulClaro = '#52fff5';

var numeroAleatorio = Math.floor(Math.random() *7)

function crearTabla() {
  for (let i = 0; i < filasTabla; i++) {
    let filaActual = document.getElementById('tablero').insertRow(i)
    filaActual.classList.add(`row${i}`)
    for (let j = 0; j < columnasTabla; j++) {
      let celda = filaActual.insertCell(j)
      //celda.innerHTML = `10`
      celda.classList.add(`col${j}`)
    }
  }
}

var piezas = [
  {
    pieza: "O",
    numero: 0,
    estructura: [{ x: 1, y: 1 }, { x: 1, y: 2 }, { x: 2, y: 1 }, { x: 2, y: 2 }]
  },
  {
    pieza: "I",
    numero: 1,
    estructura: [{ x: 1, y: 1 }, { x: 1, y: 2 }, { x: 1, y: 3 }, { x: 1, y: 4 }]
  },
  {
    pieza: "Z",
    numero: 2,
    estructura: [{ x: 1, y: 1 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 2 }]
  },
  {
    pieza: "S",
    numero: 3,
    estructura: [{ x: 3, y: 1 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 1, y: 2 }]
  },
  {
    pieza: "T",
    numero: 4,
    estructura: [{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 1 }, { x: 2, y: 1 }]
  },
  {
    pieza: "L",
    numero: 5,
    estructura: [{ x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 3, y: 3 }]
  },
  {
    pieza: "J",
    numero: 6,
    estructura: [{ x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 1, y: 3 }]
  },
]


let ultimaPosicion = []

var Classpieza = function () {
  
  

  this.rotar = function () {
    console.log("arriba")
  }
  this.abajo = function (numero) {

    piezas.forEach(e => {
      if (e.numero === numero) {

       let estructuraActual = e.estructura.map( e => e )
       
       console.log(estructuraActual)
        estructuraActual.forEach(e => {
          var pieza = document.querySelector(`.row${e.y++} .col${e.x}`)
          pieza.classList.add('pieza')
          console.log(piezas[numeroAleatorio].estructura)
           })
      }
    })
  }

  this.izquierda = function (numero) {
    piezas.forEach(e => {
      if (e.numero === numero) {
        let estructuraActual = e.estructura.map(e=>e)
        estructuraActual.forEach(e => {
          var pieza = document.querySelector(`.row${e.y} .col${e.x--}`)
          pieza.classList.add('pieza')
          console.log(piezas[numeroAleatorio].estructura)
           })
      }
    })
    
  }

  this.derecha = function (numero) {
    piezas.forEach(e => {
      if (e.numero === numero) {
        let estructuraActual = e.estructura.map(e=>e)
        estructuraActual.forEach(e => {
          var pieza = document.querySelector(`.row${e.y} .col${e.x++}`)
          pieza.classList.add('pieza')
          console.log(piezas[numeroAleatorio].estructura)
           })
      }
    })
  }

  this.updatePiece = function () {
    var pieza = document.querySelectorAll('.pieza')
    pieza.forEach(function (elem) {
      elem.classList.remove('pieza')
    })
  }

  this.pintarPiezas = function (numero) {
    piezas.forEach(e => {
      if (e.numero === numero) {
        let estructuraActual = e.estructura.map(e=>e)
        estructuraActual.forEach(e => {
          
          var pieza = document.querySelector(`.row${e.y++} .col${e.x}`)
          pieza.classList.add('pieza')
       })
      }
    })
  }

}
crearTabla()
pieza = new Classpieza();
pieza.pintarPiezas()

document.addEventListener('keydown', function (tecla) {
  if (tecla.keyCode === 38) {
    pieza.rotar()
  }
  if (tecla.keyCode === 37) {
    pieza.izquierda(numeroAleatorio)
  }
  if (tecla.keyCode === 40) {
    pieza.abajo(numeroAleatorio)
  }
  if (tecla.keyCode === 39) {
    pieza.derecha(numeroAleatorio)
  }
})

setInterval(function () {
  principal();

  //el bucle se ejecuta 50 veces por segundo 
}, 1000 / velocidadJuego);



//funcion principal del juego
function principal() {
  pieza.updatePiece()
  pieza.pintarPiezas(numeroAleatorio)
}


