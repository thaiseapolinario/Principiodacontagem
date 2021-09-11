var tela = 1;
var x = 150;
var fundo;
var music01, telaAnterior = 1;
var time, clock;
var vida;
var fundo4;
var contTime = false;
var numeros=[];
var contNum=0;
var contIo=0;
var contNum2=0;
var contIo2=0;
controle = false;
var clickMe = false;
var numero1;
clickMe2 = false;
var winner;
var gameover;

function setup() {
createCanvas(400, 400);
time= 0; clock=0;
}
function preload(){
  fundo= loadImage('1.jpg');
  fundo1=loadImage('3.jpg');
  fundo2=loadImage('2.jpg');
  fundo3=loadImage("4.jpg");
  fundo4=loadImage("5.jpg")
  fundo5=loadImage("6.jpg")
  fundo6=loadImage("7.jpg")
  music01 = loadSound('happySandbox.mp3');
  winner = loadSound("winner.wav");
  gameover =loadSound("gameover.wav");
  
  numeros[0] = loadImage("Number0.png");
  numeros[1] = loadImage("Number1.png");
  numeros[2] = loadImage("Number2.png");
  numeros[3] = loadImage("Number3.png");
  numeros[4] = loadImage("Number4.png");
  numeros[5] = loadImage("Number5.png");
  numeros[6] = loadImage("Number6.png");
  numeros[7] = loadImage("Number7.png");
  numeros[8] = loadImage("Number8.png");
  numeros[9] = loadImage("Number9.png");
}
function playsound(){
  if(tela == telaAnterior){
    return false;
    }else{
    telaAnterior = tela; return true;
    }
}

    function draw(){
if(tela==2){
    if(playsound()){
    music01.loop();
    
}

}
if(tela ==1) {
background(0);
image(fundo, 0, 0);
textSize(25);
textAlign(CENTER)

fill("blue");
rect(140, x, 120, 30);

fill(255, 255, 255);
text('Jogar', 200,173);
text('Instruções', 200, 223);
text("Créditos", 200, 273);
    
if (keyIsPressed == false) {
controle = false
}
if (controle == false) {
if (keyIsDown(UP_ARROW) && (x <= 250 && x > 150)) {
x -= 50
controle = true;
}
if (keyIsDown(ENTER) && x == 150) {
tela = 2
controle = true
contTime = true;
} 
else if (keyIsDown(ENTER) && x == 200) {
tela = 3
controle = true
} else if(keyIsDown(ENTER) && x == 250) {
tela = 4
controle = true
}
if (keyIsDown(DOWN_ARROW) && (x <= 250 - 30 && x >= 150)) {
x += 50
controle = true
}
}
  }
if (tela ==2) {
vida=3;
background(0);
image(fundo1, 0, 0);
// ********************************************
if(contTime == true){
time++
clock = 30 - int(time/100);
fill("white");
stroke("pink");
text("Tempo restante: " + clock,200,20);   
  if(clock == 0){
    if(vida > 0){
        vida--;
        time = 0;
        tela=6;
        contTime=false;
    } else {
        tela=6;
      }
  }     
}
  

// ********************************************
fill(255,255,255)
//text("Fase 1: Iniciando o jogo", 200, 30)
fill(105, 200, 100);
if (keyCode === 100 || keyCode === 103 || keyCode === 97){
  tela=7;
}
if (keyIsDown(ESCAPE)){tela=1}
}
// tela da fase 2 *************************************
      
if (tela ==7) {
clickMe=true;
vida=3;
background("blue");
image(fundo5, 0, 0);
  
if(clickMe == true){
contNum++

  
if(contNum>50){
        contIo++;
        contNum=0;
    if(keyCode === 99){
      clickMe=false;
      contIo = 3;
      clickMe2 = true;
      }
  }
}
  
if(clickMe2 == true){
contNum2++
clickMe=false;

  
if(contNum2>50){
        contIo2++;
        contNum2=0;
        
    if(keyCode === 104){
      clickMe2=false;
      contIo2 = 8;
      tela=5;
      }
}
}
  
image(numeros[0], 10, 100, 40, 40);
image(numeros[1], 55, 100, 40, 40);
image(numeros[2], 100, 100, 40, 40);
image(numeros[contIo%10], 145, 100, 40, 40);
image(numeros[4], 190, 100, 40, 40);
image(numeros[contIo2%10], 145, 240, 40, 40);
image(numeros[5], 10, 240, 40, 40);
image(numeros[6], 55, 240, 40, 40);
image(numeros[7], 100, 240, 40, 40);

image(numeros[9], 190, 240, 40, 40);
  
if(contTime == true){
time++
clock = 30 - int(time/100);
fill("white");
stroke("pink");
text("Tempo restante: " + clock,200,20);   
  if(clock == 0){
    if(vida > 0){
        vida--;
        time = 0;
        tela=6;
        contTime=false;
    } else {
        tela=6;
      }
  }     
}
  

// ********************************************
fill(255,255,255)
//text("Fase 1: Iniciando o jogo", 200, 30)
fill(105, 200, 100);
//if (keyCode === 100 || keyCode === 103 || keyCode === //197){
 // tela=5;
//}
if (keyIsDown(ESCAPE)){tela=1}
}      
   
//final da tela 02***************************************
      
if (tela ==3) {
background(fundo6);
textSize(20)
fill(105, 200, 100);
fill(255, 255, 255)
text("HABILIDADE BNCC: \n EF08MA03 (Fundamental 1º) \n Contagem, princípio multiplicativo.\n 1º O jogador deverá identificar \n o número que falta.\n 2º O jogador deverá digitar e acertar o\n número correto,\n para seguir para a próxima fase.\n 3º O jogador deverá digitar\n a sequência correta. \n Digite ESC para voltar. ",200,120);

if (keyIsDown(ESCAPE)){tela=1}
}
else if (tela == 4){
background(0);
image(fundo2, 0, 0);
fill(255,255,255)
text("Créditos", 100, 50);
fill(100,100, 100);


fill(255, 255, 255);
text("Programadora \n e educadora \n Thaise Silveira\n Discente de \n Pedagogia e C&T",100, 150);
if (keyIsDown(ESCAPE)){tela=1}
}
if(tela ==5) {
background(fundo3);
if(playsound()){
    music01.pause();  
    winner.play();
}

}
if (keyIsDown(ESCAPE)){tela=1}
      
if(tela ==6) {
background(fundo4);
if(playsound()){
    music01.pause();  
    gameover.play();
 }
}
if (keyIsDown(ESCAPE)){tela=1}
}

