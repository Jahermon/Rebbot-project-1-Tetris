const COLORES = {
  rojo: '#da0000',
  verde: '#00e510',
  azul: '#0046f7',
  amarillo: '#d2ff00',
  naranja: '#ff8a00',
  rosa: '#ff52e0',
  azulClaro: '#52fff5'
}

const TIPOS_PIEZAS = [
  {
    tipo: "O",
    pos: [{ x: 7, y: 0 }, { x: 8, y: 0 }, { x: 7, y: 1 }, { x: 8, y: 1 }]
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
  this.tipo = JSON.parse(JSON.stringify(TIPOS_PIEZAS[0]));

}

Pieza.prototype.update = function () {
  this.tipo.pos.forEach(pos => {
    pos.y++
  })
}
Pieza.prototype.abajo = function () {
  this.tipo.pos.forEach(pos => {
    pos.y++
  })
}
Pieza.prototype.derecha = function () {
  this.tipo.pos.forEach(pos => {
    pos.x++
  })
}
Pieza.prototype.izquierda = function () {
  this.tipo.pos.forEach(pos => {
    pos.x--
  })
}

function Game() {
  this.velocidadJuego = 5
  this.filasTabla = 26
  this.columnasTabla = 16
  this.timerId = null;
  this.pieces = []



  this.crearTabla = function () {
    for (let i = 0; i < this.filasTabla; i++) {
      let filaActual = document.getElementById('tablero').insertRow(i)
      filaActual.classList.add(`row${i}`)
      for (let j = 0; j < this.columnasTabla; j++) {
        let celda = filaActual.insertCell(j)
        celda.classList.add(`col${j}`)
      }
    }
  }

  this.limpiaTabla = function () {
    document.querySelectorAll('.pieza').forEach(function (elem) {
      elem.classList.remove('pieza')
    })
  }
  this.limpiaUltimaFila = function () {
    var fila = document.querySelectorAll("#tablero tr:last-child td");
    contador = 0
    fila.forEach(e => {
      if (e.classList.contains('tetromino')) {
        contador++
      }
    })
    if (contador === 16) {
      fila.forEach(e => {
        e.classList.remove('tetromino')
      })
      contador = 0
    }
  }

  this.DesplazarAbajoLosTetrominos = function () {
    var todosLosTetrominos = document.querySelectorAll('.tetromino')
    todosLosTetrominos.forEach(e => {
      
    })
    console.log(todosLosTetrominos)
  }

  this.pintaPiezas = function () {
    this.pieces.forEach(pieza => {
      pieza.tipo.pos.forEach(pos => {
        if (pos.y <= this.filasTabla) {
          var casilla = document.querySelector(`.row${pos.y} .col${pos.x}`)
          casilla.classList.add('pieza')
        }
      })
    })
  }
  this.checkBottom = function (pieza) {
    return (pieza.tipo.pos[0].y < 25
      && pieza.tipo.pos[1].y < 25
      && pieza.tipo.pos[2].y < 25
      && pieza.tipo.pos[3].y < 25)
  }

  this.fijarPiezaTablero = function () {
    var posicionPieza = document.querySelectorAll('.pieza')
    posicionPieza.forEach(e => {
      e.classList.remove('pieza')
      e.classList.add('tetromino')

    })
    //return (pieza.tipo.pos[0].classList.contains( 
  }
  this.checkTetromino = function (pieza) {
    pieza.tipo.pos.forEach(pos => {
      var celdaSiguente = document.querySelector(`.row${pos.y} .col${pos.x}`)
      if (celdaSiguente.classList.contains('tetromino')) {
        this.fijarPiezaTablero()
        this.pieces.pop()
        this.pieces.push(new Pieza())
      }
    })
  }
  this.movePiezas = function () {
    this.pieces.forEach(tetromino => {
      if (this.checkBottom(tetromino)) {
        tetromino.update()
        this.checkTetromino(tetromino)
      } else {
        this.fijarPiezaTablero()
        this.limpiaUltimaFila()
        this.DesplazarAbajoLosTetrominos()
        this.pieces.pop()
        this.pieces.push(new Pieza())
      }
    })
  }

  this.movePiece = function (dir) {
    const piezaActual = this.pieces[0]

    switch (dir) {
      case 'ArrowLeft':
        if (piezaActual.tipo.pos[3].x > 0
          && piezaActual.tipo.pos[0].x > 0
          && piezaActual.tipo.pos[1].x > 0
          && piezaActual.tipo.pos[2].x > 0) {
          piezaActual.izquierda();
        }
        break;
      case 'ArrowRight':
        if (piezaActual.tipo.pos[0].x < 15
          && piezaActual.tipo.pos[1].x < 15
          && piezaActual.tipo.pos[2].x < 15
          && piezaActual.tipo.pos[3].x < 15) {
          console.log(piezaActual.tipo.pos[0].x)
          piezaActual.derecha();
        }
        break;
      case 'ArrowDown':
        if (piezaActual.tipo.pos[0].y < 25
          && piezaActual.tipo.pos[1].y < 25
          && piezaActual.tipo.pos[2].y < 25
          && piezaActual.tipo.pos[3].y < 25) {

          piezaActual.abajo();
        }
        break;
    }
  }

  this.start = function () {
    this.crearTabla()
    //Pasa la copia del array TIPOS_PIEZAS
    this.pieces.push(new Pieza())

    this.timerId = setInterval(() => {
      this.updateGame();
    }, 1000 / this.velocidadJuego);
  }



  this.updateGame = function () {
    this.limpiaTabla()
    this.pintaPiezas()
    this.movePiezas()
  }
}
const game = new Game()
game.start()

document.addEventListener('keydown', function (tecla) {
  if (['ArrowLeft', 'ArrowDown', 'ArrowRight'].includes(tecla.code)) {
    game.movePiece(tecla.code)
  }
})


