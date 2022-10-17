var anchoTablero = 16;
var altoTablero = 30;
var fps = 1

var filasTabla = 26
var columnasTabla = 16

//cada una de las fichas, son 7 fichas con 4 angulos distintos representadas en un array de 4 dimensiones

//colores
var rojo = '#da0000';
var verde = '#00e510';
var azul = '#0046f7';
var amarillo = '#d2ff00';
var naranja = '#ff8a00';
var rosa = '#ff52e0';
var azulClaro = '#52fff5';

var numeroAleatorio = Math.floor(Math.random() *5)
console.log(numeroAleatorio)

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

var Classpieza = function () {



  var piezas = [
    {
      pieza: "O",
      numero: 1,
      estrutura: [{ x: 1, y: 1 }, { x: 1, y: 2 }, { x: 2, y: 1 }, { x: 2, y: 2 }]
    },
    {
      pieza: "I",
      numero: 2,
      estrutura: [{ x: 1, y: 1 }, { x: 1, y: 2 }, { x: 1, y: 3 }, { x: 1, y: 4 }]
    },
    {
      pieza: "Z",
      numero: 3,
      estrutura: [{ x: 1, y: 1 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 2 }]
    },
    {
      pieza: "T",
      numero: 4,
      estrutura: [{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 1 }, { x: 2, y: 1 }]
    },
    {
      pieza: "L",
      numero: 5,
      estrutura: [{ x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 3, y: 3 }]
    },
  ]


  console.log('pieza creada')
  this.rotar = function () {

  }

  this.abajo = function (numero) {
    piezas.forEach(e => {
      if (e.numero === numero) {
        e.estrutura.forEach(e => {
          var pieza = document.querySelector(`.row${e.y++} .col${e.x}`)
          pieza.classList.add('pieza')
          console.log("movimiento") })
      }
    })
  }

  this.izquierda = function (numero) {
    piezas.forEach(e => {
      if (e.numero === numero) {
        e.estrutura.forEach(e => {
          var pieza = document.querySelector(`.row${e.y} .col${e.x--}`)
          pieza.classList.add('pieza')
          console.log("movimiento") })
      }
    })
    
  }

  this.derecha = function (numero) {
    piezas.forEach(e => {
      //if (e.numero === numero) {
        e.estrutura.forEach(e => {
          var pieza = document.querySelector(`.row${e.y} .col${e.x++}`)
          pieza.classList.add('pieza')
          console.log("movimiento") })
      //}
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
        e.estrutura.forEach(e => {
          var pieza = document.querySelector(`.row${e.y} .col${e.x}`)
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
    pieza.izquierda(5)
  }
  if (tecla.keyCode === 40) {
    pieza.abajo(5)
  }
  if (tecla.keyCode === 39) {
    pieza.derecha()
  }
})

setInterval(function () {
  principal();

  //el bucle se ejecuta 50 veces por segundo 
}, 1000 / fps);

//funcion principal del juego
function principal() {
  pieza.updatePiece()
  pieza.pintarPiezas(4)

}


