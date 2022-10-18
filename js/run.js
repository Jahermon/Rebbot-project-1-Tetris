const  COLORES = {
  rojo : '#da0000',
  verde : '#00e510',
  azul : '#0046f7',
  amarillo : '#d2ff00',
  naranja : '#ff8a00',
  rosa : '#ff52e0',
  azulClaro : '#52fff5'
}

const TIPOS_PIEZAS = [
  {
    tipo: "O",
    pos: [{ x: 7, y: 0 }, { x: 8, y: 0 }, { x:7, y: 1 }, { x: 8, y: 1 }]
  },
  {
    tipo: "I",
    pos: [{ x: 1, y: 1 }, { x: 1, y: 2 }, { x: 1, y: 3 }, { x: 1, y: 4 }]
  },
  {
    tipo: "Z",
    pos: [{ x: 1, y: 1 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 2 }]
  },
  {
    tipo: "S",
    pos: [{ x: 3, y: 1 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 1, y: 2 }]
  },
  {
    tipo: "T",
    pos: [{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 1 }, { x: 2, y: 1 }]
  },
  {
    tipo: "L",
    pos: [{ x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 3, y: 3 }]
  },
  {
    tipo: "J",
    pos: [{ x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 1, y: 3 }]
  },
]

function Pieza() {
  // this.tipo = JSON.parse(JSON.stringify(TIPOS_PIEZAS[Math.floor(Math.random() *7)]));
  this.tipo = JSON.parse(JSON.stringify(TIPOS_PIEZAS[0])).tipo;
  this.pos = JSON.parse(JSON.stringify(TIPOS_PIEZAS[0])).pos;
}


Pieza.prototype.update = function () {
  this.pos.forEach(pos => {
    pos.y++
  })
}

Pieza.prototype.derecha = function () {
  this.pos.forEach(pos => {
    pos.x++
  })
}

Pieza.prototype.izquierda = function () {
  this.pos.forEach(pos => {
    pos.x--
  })
}


function Game() {
  this.velocidadJuego = 1
  this.filasTabla = 26
  this.columnasTabla = 16
  this.timerId = null;
  this.pieces = []

  this.crearTabla = function() {
    for (let i = 0; i < this.filasTabla; i++) {
      let filaActual = document.getElementById('tablero').insertRow(i)
      filaActual.classList.add(`row${i}`)
      for (let j = 0; j < this.columnasTabla; j++) {
        let celda = filaActual.insertCell(j)
        celda.classList.add(`col${j}`)
      }
    }
  }

  this.limpiaTabla = function() {
    document.querySelectorAll('.pieza').forEach(function (elem) {
      elem.classList.remove('pieza')
    })
  }

  this.pintaPiezas = function() {
    this.pieces.forEach(pieza => {
      pieza.pos.forEach(pos => {
        if (pos.y < this.filasTabla) {
          var casilla = document.querySelector(`.row${pos.y} .col${pos.x}`)
          casilla.classList.add('pieza')
           
        }
      })
    })
  }

  this.movePiezas = function() {
    this.pieces.forEach(pieza => {
      pieza.update()
    })
  }

  this.movePiece = function(dir) {
   const piezaActual = this.pieces[0]
   switch (dir){
    case 'ArrowLeft':
      piezaActual.izquierda();
      break;
    case 'ArrowRight':
      piezaActual.derecha();
      break;   
    }
  }

  this.start = function() {
    this.crearTabla()
    this.pieces.push(new Pieza())

    this.timerId = setInterval(() => {
      this.updateGame();
    }, 1000 / this.velocidadJuego);
  }

  this.updateGame = function() {
    this.limpiaTabla()
    this.pintaPiezas()
    this.movePiezas()
  }
}

const game = new Game()
game.start()

document.addEventListener('keydown', function (tecla) {
  if ([ 'ArrowLeft','ArrowDown','ArrowRight'].includes(tecla.code)) {
    game.movePiece(tecla.code)
  }
})


