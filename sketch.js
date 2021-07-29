//var da bolinha
let xBol = 300
let yBol = 200
let diam = 20
let raio = diam /2
//var da velocidade..
let velXbol = 6
let velYbol = 6

//var da raquete
let xRaque = 5
let yRaque = 150
//medidas da raquete
let comprimentoRaquet = 10
let raquetAltura = 92

// var do oponente
let xRaqueOp = 585
let yRaqueOp = 150
let velYraqueOp = 9  
  
//Colisão
let colisão = false;

// marcação de pontos
let meusPontos = 0
let pontosInimigo = 0

//var dos sons
let batida;
let ponto;
let fundo;

function preload(){
    batida = loadSound("batida.wav");
    ponto = loadSound("ponto.wav");
    fundo = loadSound("fundo.wav");

}


function setup() {
  createCanvas(600, 400); //medidas da tela
  fundo.loop() //trilha sonora
}



function draw() {
background('rgb(0,255,0)');
circle(xBol, yBol, diam);
// criação do fundo e montagem da bolinha


  xBol = xBol + velXbol
  yBol += velYbol
  // movimento da bolinha

  
  if (xBol + raio> width || xBol - raio < 0 ) {
    velXbol *= -1;
  }
  if (yBol + raio > height || yBol - raio < 0 ) {
    velYbol *= -1;
  }
  // verificação da colisão
  
  
  //funções criadas:
  movimentRaquet();
  funçãoRaque (xRaque, yRaque)
  funçãoRaque (xRaqueOp, yRaqueOp)
  coliRaquetBiblioteca (xRaque, yRaque);
  coliRaquetBiblioteca (xRaqueOp, yRaqueOp);
  movimentRaqueOp();
  placar();
  pontuação();
  //colisãoRaquet();
  //coliRaquetOpBiblioteca()

  
strokeWeight(3);
// contorno

}

// Funções:
function funçãoRaque(x,y){
  rect(x, y, comprimentoRaquet, raquetAltura, 20 ) //20 é para arredondar a ponta da raquete  
  //medidas das raquetes

}

function movimentRaquet(){ 
  if (keyIsDown(UP_ARROW)) {
        yRaque -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
      yRaque += 10;                            
}
  
}
// comandos da sua raquete


//jeito fácil e que está sendo utilizado agr
function coliRaquetBiblioteca (x,y) {
    colisão = collideRectCircle (x, y, comprimentoRaquet, raquetAltura, xBol, yBol, raio);
  if (colisão) {
        velXbol *= -1;
    batida.play();
    }
}
//sobre a colisão da bolinha nas raquetes



function movimentRaqueOp (){
    velYraqueOp = yBol - yRaqueOp - comprimentoRaquet / 2 - 30;
    yRaqueOp += velYraqueOp
}
// movimento da raquete do oponente


function placar () {
  textAlign (CENTER)
  textSize (26) //tamanho do número
  fill(color(3, 211, 242))
  rect (204, 10, 56, 29, 20)
  fill(255)
  text (meusPontos,233,35)
   fill(color(3, 211, 242)) //cor do fundo do placar
  rect (340, 10, 56, 29, 20)
  fill(255) //cor da letra do placar
  text ( pontosInimigo, 368, 35)
//medidas do placar
  
  
}

function pontuação(){
  
    if (xBol > 590) {
        meusPontos += 1;
      ponto.play()
    }
    if (xBol < 10) {
        pontosInimigo += 1;
      ponto.play()
    }
  
}
//contagem da pontuação







//jeito base,não esta sendo usado
function coliRaquetOpBiblioteca () {
    colisão = collideRectCircle (xRaqueOp, yRaqueOp, comprimentoRaquet, raquetAltura, xBol, yBol, raio);
  if (colisão) {
        velXbol *= -1;
    }
}

//jeito fácil e simplificado porém não esta sendo usado
function colisãoRaquet(){
  
  if (xBol - raio < xRaque + comprimentoRaquet
        && yBol - raio < yRaque + raquetAltura
        && yBol + raio > yRaque) {
        velXbol *= -1;
    }
  
  
}
