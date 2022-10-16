var canvas = document.getElementById('canvas');

//especificamos que es un entorno 2d y eso no da metodos para pintar o dibujar elementos
//https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext
var contexto = canvas.getContext('2d')
var fps = 50;
var anchoCanvas = 400;
var altoCanvas = 640;
var anchoTablero = 10;
var altoTablero = 16;

var Classpieza =  function(){
    this.x =0;
    this.y =0;
    console.log('pieza creada')

    this.rotar = function(){
        console.log('rotando')
    }
    
    this.abajo = function(){
        console.log('moviendo abajo')
    }
    
    this.izquierda = function(){
        console.log('moviendo izquierda')
    }
    
    this.derecha = function(){
        console.log('moviendo derecha')
    }
    
}

//establecemos el ancho y alto del canvas, lo asigamos por variables por si tenemos que modificar en un futuro
canvas.width = anchoCanvas;
canvas.height = altoCanvas;

pieza = new Classpieza();

document.addEventListener('keydown',function(tecla){
    if(tecla.keyCode === 38){
      pieza.rotar()
    }
    if(tecla.keyCode === 37){
      pieza.izquierda()
    }
    if(tecla.keyCode === 40){
      pieza.abajo()
    }
    if(tecla.keyCode === 39){
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
    console.log("test")
}