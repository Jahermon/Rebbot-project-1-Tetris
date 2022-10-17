var canvas = document.getElementById('canvas');

//especificamos que es un entorno 2d y eso no da metodos para pintar o dibujar elementos
//https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext
var contexto = canvas.getContext('2d')
var anchoTablero = 16;
var altoTablero = 29;
var altoFicha = 30;
var anchoFicha = 30;
var anchoCanvas = 420;
var altoCanvas = 750;
var margenSuperior = 4;
var fps = 50


//metodo muy intesante para renderizar cuadrados en canvas
//https://developer.mozilla.org/es/docs/Web/API/CanvasRenderingContext2D/fillRect

// este es el tablero donde el juego se ejecuta un array bidimensional de //12*17  10*16 donde todo lo distinto a 0 será colisión.
var tablero = [
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  // Es arriba es zona muerta donde se genera la pieza.
  [1, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

];

//cada una de las fichas, son 7 fichas con 4 angulos distintos representadas en un array de 4 dimensiones
//
var fichaGrafico = [
  [
    // [0] cuadrados
    [
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0]
    ]],

  [ // [1] rectangulo v1
    [
      [0, 0, 0, 0],
      [2, 2, 2, 2],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 2, 0],
      [0, 0, 2, 0],
      [0, 0, 2, 0],
      [0, 0, 2, 0]
    ],
    [
      [0, 0, 0, 0],
      [2, 2, 2, 2],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0],
      [2, 2, 2, 2],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ]],
  [//[2] zeta v1
    [
      [0, 0, 0, 0],
      [0, 0, 3, 3],
      [0, 3, 3, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 3, 0],
      [0, 0, 3, 3],
      [0, 0, 0, 3],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0],
      [0, 0, 3, 3],
      [0, 3, 3, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 3, 0],
      [0, 0, 3, 3],
      [0, 0, 0, 3],
      [0, 0, 0, 0]
    ]
  ],
  [ // [3] zeta v2
    [
      [0, 0, 0, 0],
      [0, 4, 4, 0],
      [0, 0, 4, 4],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 4],
      [0, 0, 4, 4],
      [0, 0, 4, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0],
      [0, 4, 4, 0],
      [0, 0, 4, 4],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 4],
      [0, 0, 4, 4],
      [0, 0, 4, 0],
      [0, 0, 0, 0]
    ]
  ],
  [ // [4] L vv1
    [
      [0, 0, 0, 0],
      [0, 5, 5, 5],
      [0, 5, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 5, 0],
      [0, 0, 5, 0],
      [0, 0, 5, 5],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 5],
      [0, 5, 5, 5],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 5, 5, 0],
      [0, 0, 5, 0],
      [0, 0, 5, 0],
      [0, 0, 0, 0]
    ]
  ],
  [ //[5] l v2
    [
      [0, 0, 0, 0],
      [0, 6, 6, 6],
      [0, 0, 0, 6],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 6, 6],
      [0, 0, 6, 0],
      [0, 0, 6, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 6, 0, 0],
      [0, 6, 6, 6],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 6, 0],
      [0, 0, 6, 0],
      [0, 6, 6, 0],
      [0, 0, 0, 0]
    ]
  ],
  [ //[6] triangulo
    [
      [0, 0, 0, 0],
      [0, 7, 7, 7],
      [0, 0, 7, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 7, 0],
      [0, 0, 7, 7],
      [0, 0, 7, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 7, 0],
      [0, 7, 7, 7],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 7, 0],
      [0, 7, 7, 0],
      [0, 0, 7, 0],
      [0, 0, 0, 0]
    ]
  ]
];

var cuadrado = [
  [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0]
  ]
]

var posicionY = 0
var posicionX = 100

function dibujarPieza(pieza){
  for(py = 0; py < pieza.length; py++){
    for(px = 0; px < pieza.length; px++){
        contexto.fillRect( posicionX, posicionY, anchoFicha, altoFicha)
      
    }
  }
}


//colores
var rojo = '#da0000';
var verde = '#00e510';
var azul = '#0046f7';
var amarillo = '#d2ff00';
var naranja = '#ff8a00';
var rosa = '#ff52e0';
var azulClaro = '#52fff5';
var gris = ''


var Classpieza = function () {

  this.x = 1;
  this.y = 1;
  this.angulo = 0
  this.tipo = 1

  console.log('pieza creada')

  this.rotar = function () {
    
  }

  this.abajo = function () {
    posicionY++
    console.log(posicionY)
  }

  this.izquierda = function () {
    posicionX--
    console.log(posicionX)
  }

  this.derecha = function () {
    posicionX++
    console.log(posicionX)
  }

  /*this.dibujar = function(){
    for(py = 0; py < cuadrado.length; py++){
      for(px = 0; px < cuadrado.length; px++){
          contexto.fillRect( 200, 200, anchoFicha, altoFicha)
        
      }
    }
  }*/


  

}

function dibujarTablero() {
  //py = pixel en la coordenada y
  //px = pixel en la coordenada x
  //recorremos el array multi dimensional 
  for (var py = margenSuperior; py < altoTablero; py++) {
    for (var px = 1; px < anchoTablero + 1; px++) {
      //si es distinto a 0 dibuja el tablero
      if (tablero[py][px] != 0) {
        if (tablero[py][px] == 1) {
          contexto.fillStyle = rojo;
        }
        if (tablero[py][px] == 2) {
          contexto.fillStyle = verde;
        }
        if (tablero[py][px] == 3) {
          contexto.fillStyle = azul;
        }
        if (tablero[py][px] == 4) {
          contexto.fillStyle = amarillo;
        }
        if (tablero[py][px] == 5) {
          contexto.fillStyle = naranja;
        }
        if (tablero[py][px] == 6) {
          contexto.fillStyle = rosa;
        }
        if (tablero[py][px] == 7) {
          contexto.fillStyle = azulClaro;
        }
        contexto.fillRect((px - 1) * anchoFicha, (py - margenSuperior ) * altoFicha, anchoFicha, altoFicha);
      }
    }
  }
}

//establecemos el ancho y alto del canvas, lo asigamos por variables por si tenemos que modificar en un futuro
canvas.width = anchoCanvas;
canvas.height = altoCanvas;

pieza = new Classpieza();

document.addEventListener('keydown', function (tecla) {
  if (tecla.keyCode === 38) {
    pieza.rotar()
  }
  if (tecla.keyCode === 37) {
    pieza.izquierda()
  }
  if (tecla.keyCode === 40) {
    pieza.abajo()
  }
  if (tecla.keyCode === 39) {
    pieza.derecha()
  }
})


setInterval(function () {
  principal();

  //el bucle se ejecuta 50 veces por segundo 
}, 1000 / fps);

//borra el contenido del canvas seteando el tamaño, así tenemos generamos la animacion dentro del interval y tenemos control total
function borrarCanvas() {
  canvas.width = anchoCanvas;
  canvas.height = altoCanvas;
}

//funcion principal del juego
function principal() {
  borrarCanvas()
  dibujarTablero()
  dibujarPieza(cuadrado)

}


