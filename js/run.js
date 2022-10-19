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

Pieza.prototype.movimientoAutomatico = function () {
  this.tipo.pos.forEach(pos => {

    pos.y++
  })
}
Pieza.prototype.abajo = function () {
  this.tipo.pos.forEach(pos => {
    var movimiento = true
    var celdaSiguenteAbajo = document.querySelector(`.row${pos.y} .col${pos.x}`)
    if (celdaSiguenteAbajo.classList.contains('tetromino')) {
      movimiento = false
      game.fijarPiezaTablero()
      game.pieces.pop()
      game.pieces.push(new Pieza())
    }
    if (movimiento) {
      pos.y++
    }

  })
}
Pieza.prototype.derecha = function () {
  this.tipo.pos.forEach(pos => {
    var celdaSiguenteDerecha = document.querySelector(`.row${pos.y} .col${pos.x}`)
    var movimiento = true
    if (celdaSiguenteDerecha.classList.contains('tetromino')) {
      movimiento = false
    } else {
      movimiento = true
    }

    if (movimiento) {
      pos.x++
    }

  })
}
Pieza.prototype.izquierda = function () {
  this.tipo.pos.forEach(pos => {
    pos.x--
  })
}


function Game() {
  this.velocidadJuego = 6
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


  this.borrarFilaCompleta
   = function (fila) {
    contador = 0
    fila.forEach(e => {
      if (e.classList.contains('tetromino')) {
        contador++
        console.log(contador)
      }
    })
    if (contador === 16) {
      fila.forEach(e => {
        e.classList.remove('tetromino')
      })
      contador = 0
    }
  }

  this.limpiaTabla = function () {
    document.querySelectorAll('.pieza').forEach(function (elem) {
      elem.classList.remove('pieza')
    })
  }

  //cambia la clase de tetro a nada
  this.moverFila = function (fila, numFila) {
    var cols = fila.querySelectorAll("td");

    cols.forEach((e, idx) => {
      if (e.classList.contains('tetromino')) {
        e.classList.remove('tetromino')
        document.querySelector(`.row${numFila + 1} > .col${idx}`).classList.add('tetromino')
      }
    })
  }

  this.checkFilaCompleta = function (fila) {

    var fila = document.querySelectorAll(`.row${fila} td`)
    var conta = 0
    fila.forEach(e => {
      if (e.classList.contains('tetromino')) {
        conta++
      }
    })
    if (conta == 16) {
      return true
    }
  }


  this.monitorizarFilas = function () {

    var row1 = document.querySelectorAll(`.row0 td`)
    var row2 = document.querySelectorAll(`.row1 td`)
    var row3 = document.querySelectorAll(`.row2 td`)
    var row4 = document.querySelectorAll(`.row3 td`)
    var row5 = document.querySelectorAll(`.row4 td`)
    var row6 = document.querySelectorAll(`.row5 td`)
    var row7 = document.querySelectorAll(`.row6 td`)
    var row8 = document.querySelectorAll(`.row7 td`)
    var row9 = document.querySelectorAll(`.row8 td`)
    var row10 = document.querySelectorAll(`.row9 td`)
    var row11 = document.querySelectorAll(`.row10 td`)
    var row12 = document.querySelectorAll(`.row11 td`)
    var row13 = document.querySelectorAll(`.row12 td`)
    var row14 = document.querySelectorAll(`.row13 td`)
    var row15 = document.querySelectorAll(`.row14 td`)
    var row16 = document.querySelectorAll(`.row15 td`)
    var row17 = document.querySelectorAll(`.row16 td`)
    var row18 = document.querySelectorAll(`.row17 td`)
    var row19 = document.querySelectorAll(`.row18 td`)
    var row20 = document.querySelectorAll(`.row19 td`)
    var row21 = document.querySelectorAll(`.row20 td`)
    var row22 = document.querySelectorAll(`.row22 td`)
    var row23 = document.querySelectorAll(`.row23 td`)
    var row24 = document.querySelectorAll(`.row24 td`)
    var row25 = document.querySelectorAll(`.row25 td`)

    this.borrarFilaCompleta(row1)
    this.borrarFilaCompleta(row2)
    this.borrarFilaCompleta(row3)
    this.borrarFilaCompleta(row4)
    this.borrarFilaCompleta(row5)
    this.borrarFilaCompleta(row6)
    this.borrarFilaCompleta(row7)
    this.borrarFilaCompleta(row8)
    this.borrarFilaCompleta(row9)
    this.borrarFilaCompleta(row10)
    this.borrarFilaCompleta(row11)
    this.borrarFilaCompleta(row12)
    this.borrarFilaCompleta(row13)
    this.borrarFilaCompleta(row14)
    this.borrarFilaCompleta(row15)
    this.borrarFilaCompleta(row16)
    this.borrarFilaCompleta(row17)
    this.borrarFilaCompleta(row18)
    this.borrarFilaCompleta(row19)
    this.borrarFilaCompleta(row20)
    this.borrarFilaCompleta(row21)
    this.borrarFilaCompleta(row22)
    this.borrarFilaCompleta(row23)
    this.borrarFilaCompleta(row24)
    this.borrarFilaCompleta(row25)
  }

  //this.limpiaFila
  this.limpiaFila = function () {
    for (i = 25; i >= 0; i--) {
      for (j = 0; j < 16; j++) {
        var cols = document.querySelector(`.row${i}`).querySelectorAll("td");
        console.log(cols)
        if (this.checkFilaCompleta(i)) {
          cols.forEach(e => {
            e.classList.remove('tetromino')
          })
        }
        //this.moverFila()
      }
    }
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
    this.pieces.forEach(pieza => {
      if (this.checkBottom(pieza)) {
        pieza.movimientoAutomatico()
        this.checkTetromino(pieza)
      } else {
        this.fijarPiezaTablero()
        //this.checkFilaCompleta(document.querySelector('.row25')) 
        //this.limpiaFila(document.querySelector('.row25'))
        //this.moverFila(document.querySelector('.row24'), 24)
        //this.limpiaFila(document.querySelector('.row25'))
        //this.moverFila(document.querySelector('.row24'), 24)
        this.pieces.pop()
        this.pieces.push(new Pieza())
      }
    })
  }

  this.movePiece = function (dir) {
    const piezaActual = this.pieces[0]

    switch (dir) {
      case 'ArrowLeft':
        if (piezaActual.tipo.pos[0].x > 0
          && piezaActual.tipo.pos[1].x > 0
          && piezaActual.tipo.pos[2].x > 0
          && piezaActual.tipo.pos[3].x > 0) {
          piezaActual.izquierda();
        }
        break;
      case 'ArrowRight':
        if (piezaActual.tipo.pos[0].x < 15
          && piezaActual.tipo.pos[1].x < 15
          && piezaActual.tipo.pos[2].x < 15
          && piezaActual.tipo.pos[3].x < 15) {

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
    this.monitorizarFilas()
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


