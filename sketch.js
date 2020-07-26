var x = 180;   var xd = 0;            
var y = 445;   var yd = 0;          
var x1 = 100;  var Disparo = false; 
var y1 = -200; var Vidas = 3;       var tela = 0;
var x2 = 320;  var Pontos = 0;      var largura =200;
var y2 = -100; var Nível = 1;       var altura = 60;
var x3 = 250;  var Fase = 1;        var xMenu = 60;
var y3 = -300; var raionave = 30;   var yMenu1 = 80;
var x4 = 400;                       var raioestrela = 30;
var y4 = -400;                      var GameOver;
var barreiraDePontos1 = 500;        var yMenu2 = 140; 
var jogo;                           var explosao;
var nave,cenario1;                  var xa = 80;
var x5 = 600;                       var ya = 100;
var y5 = 600;                       var xm = 155;
var opcao = 1;                      var ym = 185;
var telaMenujogo;                   var Estrelas = 0;         
var velocidades = [0.5,0.6];        var Saldo = 0;
var Iniciar,Informações,Créditos;   var foto1,foto2;
var tiro,inimigo;                   var fontBold;
var mudarNumero;                    var explosão
var cenario2,cenario3;              var perimetro = 30
var test1 = (Math.floor(Math.random() * (20 + 20) ) - 20);
var test2 = (Math.floor(Math.random() * (20 + 20) ) - 20);
var test3 = (Math.floor(Math.random() * (20 + 20) ) - 20);
var test4 = (Math.floor(Math.random() * (20 + 20) ) - 20);
var statusfase1 = 0;
var statusfase2 = 0;
var statusfase3 = 0;
var statusgameover = 0;
var statusfimdejogo = 0;
var musicas = [];

function preload() {               
  soundFormats('mp3', 'ogg');
  musicaFase1 = loadSound('space.mp3');
  musicaFase2 = loadSound('Bluespace.mp3');
  musicaFase3 = loadSound('Spacecrusher.ogg');
  musicas =[musicaFase1,musicaFase2,musicaFase3];
  laser = loadSound('laserfire01.ogg');
  explosion = loadSound('foom_0.wav'); 
  gameoversom = loadSound('game_over_.wav'); 
  fimdejogo = loadSound('congrats.ogg'); 
  nave = loadImage('nave1.png');
  cenario1 = loadImage('space.png');
  tiro = loadImage('shotoval.png');
  estrela = loadImage('star-8.png');
  explosao = loadImage('boom07.png');
  GameOver = loadImage('GameOver.png');
  telaMenujogo = loadImage('fulds.jpg');
  foto1 = loadImage('eu.jpg');
  foto2 = loadImage('thiago.jpg');
  cenario2 = loadImage('spc.jpg');
  cenario3 = loadImage('fantasy.jpg');
  menuimagem2 = loadImage('univer.png');
  menuimagem3 = loadImage('blackfund.jpg');
  emoji = loadImage('felizz.png');
}

function setup() {
  createCanvas(500,500);
}

function draw(){
  if(tela==0){
     background(telaMenujogo);
     menu(); 
     for (var i = 0;i < 2; i++){
       musicas[i].stop();
     }
  }
  if(tela==1){
    Iniciar();
    Voltar();
  }
  if(tela==2){
    Instruções();
    Voltar(); 
  }
  if(tela==3){
    Informações();
    Voltar();  
  }
  if(tela==4){
    Créditos();
    Voltar();    
  } 
  if(Vidas <=0){
    Vidas = 0
    Gameover();
  } 
  if(Fase==4){
    Fimdejogo(); 
    musicaFase3.stop();
    gameoversom.stop();
  }
}
// menu rodando

function menu(){
  fill(5, 200, 153);
  rect(xm,ym, 225,45);
  fill(500,500,500);
  textSize(80);
  text('Space Calc', 40,80);
  fill(1000 ,0,0);
  textSize(40);
  text('Iniciar',160,220);
  text('Instruções',160,300);
  text('Informações',160,380);
  text('Créditos',160,460);
}

function keyPressed() {
  if(key=="ArrowUp" && ym>200){
   ym = ym - 80;
   opcao = opcao - 1; 
  
  }
  
  if(key=="ArrowDown" && ym< 400){
    ym = ym + 80;
     opcao = opcao + 1
 
  }
  
  if(key=="Enter"){
  tela = opcao
  
  }
}

//jogo rodando 
    
function Iniciar(){
imageMode(CORNER);
background(cenario3);  
  if(Fase == 1){
background(cenario1);
    if(statusfase1==0){
      musicaFase1.setVolume(0.2);
      musicaFase1.play();
      statusfase1=1
      statusgameover=0 
  }
}
   if(Fase == 2){
background(cenario2);
     if(statusfase2==0){
      musicaFase1.stop(); 
      musicaFase2.setVolume(0.2);
      musicaFase2.play();
      statusfase2=2
      statusgameover=0   
   }
}
   if(Fase == 3){
background(cenario3);
     if(statusfase3==0){    
      musicaFase2.stop(); 
      musicaFase3.setVolume(0.2);
      musicaFase3.play();
      statusfase3=2
      statusgameover=0 
      statusfimdejogo=0
   }       
}

  fill(50, 200, 153);
  textSize(20);
  text('Vidas: '+Vidas, 10, 30);
  text('Pontos: ' +Pontos, 200, 30);
  text('Nível: ' +Nível, 425, 30);
  text('Fase: '+Fase, 425 , 60);
  fill(500, 500,500);
  textSize(25);
  text('Estrelas: '+Estrelas,1 , 495);   
  text('Saldo: '+Saldo, 350 , 495);   
  
  if(Pontos >= barreiraDePontos1 && Nível <=3 && Fase<=4){
    Nível++
    if(Fase!=4){
      Fase++ 
    }
    barreiraDePontos1 = barreiraDePontos1 + 500
  }
    
  if(Saldo < 0){
      Vidas--
   Saldo = 0
  }
   
  if(keyIsDown(RIGHT_ARROW)){
    x = x + 4
  }
  
  if(keyIsDown(LEFT_ARROW)){
    x = x - 4
  }
  
  if(keyIsDown(UP_ARROW)){
    y = y - 4
  }
  
  if(keyIsDown(DOWN_ARROW)){
    y = y + 4
  }
  
  if(x > 465){
    x = 465
  }
  
  if(x < 35){
    x = 35
  }
  
  if(y > 440){
    y = 440
  }
  
  if(y < 35){
    y = 35
  }
  
  fill(80,20,120);
 imageMode(CENTER)
  image(nave,x,y,70,70)
  if(keyIsDown(CONTROL) && Disparo == false){
     xd = x
     yd = y
     Disparo = true
  }
  if(Disparo ==  true){
    fill(0, 0, 0)   
    image(tiro,xd, yd,20,20);
    yd = yd - 12
    if(yd < 0){
      Disparo = false
      laser.setVolume(0.3);
      laser.play();
    }
  
  }
  
  fill(0,0, 0);
  image(estrela,x1,y1,65,65);
  text(test1,x1-17,y1+12);
  if(y1 > 535){
    y1 = - random(800);
  }
  if(dist(x, y, x1, y1) < raionave + raioestrela){
    x = 180
    y = 445
    Vidas--
  }
  
  if(dist(xd, yd, x1, y1) < raionave + raioestrela && y1 > perimetro){
    
    xd = 0
    yd = 0
    Pontos = Pontos + 50
    Estrelas++
    image(explosao,x1,y1,50,50);
    x5 = 1000
    y5 = 1000
  
    Saldo = Saldo + test1
   test1 = mudarNumero();  
   
    y1 = - random(700);
    explosion.setVolume(0.2);
    explosion.play()
    
  }
  y1 = y1 + 0.7
  if(y1 > 535){
    test1 = mudarNumero();
    y1 = - random(700);
  }
    
  fill(0, 0, 0); 
  image(estrela,x2,y2,65,65);
  text(test2,x2-17,y2+12);
  if(y2 > 535){
    y2 = - random(800);
  }
  
  if(dist(x, y, x2, y2) < raionave + raioestrela ){
    x = 180
    y = 445
    Vidas--
  }
  
  if(dist(xd, yd, x2, y2) < raionave + raioestrela && y2 > perimetro){
    
    xd = 0
    yd = 0
    Pontos = Pontos + 50
    Estrelas++
    image(explosao,x2,y2,50,50);
    x6 = 1000
    y6 = 1000
    
    Saldo = Saldo + test2
   test2 = mudarNumero();
      
    y2 = - random(800);
    explosion.setVolume(0.2);
    explosion.play()
  }
  y2 = y2 + 0.7
  if(y2 > 535){
    test2 = mudarNumero();
    y2 = - random(800);
  
  }
  
  fill(0, 0, 0);
  image(estrela,x3,y3,65,65);
  text(test3,x3-17,y3+12);
  if(y3 > 535){
    y3 = - random(800);
  }
  if(dist(x, y, x3, y3) < raionave + raioestrela){ 
    x = 180
    y = 445
    Vidas--
  }
  
  if(dist(xd, yd, x3, y3) < raionave + raioestrela && y3 > perimetro){
    
    xd = 0
    yd = 0
    Pontos = Pontos + 50
    Estrelas++
    image(explosao,x3,y3,50,50);
    x7 = 1000
    y7 = 1000
  
    Saldo = Saldo + test3
    test3 = mudarNumero();
     
    y3 = - random(900);
    explosion.setVolume(0.2);
    explosion.play()
  }
  y3 = y3 + 0.7
  if(y3 > 535){
   test3 = mudarNumero();
      y3 = - random(900);
       Vidas--
  }
    
  fill(0, 0, 0);
  image(estrela,x4,y4,65,65);
  text(test4,x4-17,y4+12);
  if(y4 > 535){
    y4 = - random(800);
  }
  if(dist(x, y, x4, y4) < raionave + raioestrela){ 
    x = 180
    y = 445
    Vidas--
  }
  
  if(dist(xd, yd, x4, y4) < raionave + raioestrela && y4 > perimetro){
    
    xd = 0
    yd = 0
    Pontos = Pontos + 50
    Estrelas++
    image(explosao,x4,y4,60,60);
    x8 = 1000
    y8 = 1000
     
    Saldo = Saldo + test4
    test4 = mudarNumero();
     
    y4 = - random(900);
    explosion.setVolume(0.2);
    explosion.play()  
 
  }
  y4 = y4 + 0.7
  if(y4 > 535){
    test4 = mudarNumero();
    y4 = - random(900);
  }
  
  if(Nível ==2){

   y1 = y1 + velocidades[0]
   y2 = y2 + velocidades[0]
   y3 = y3 + velocidades[0]
   y4 = y4 + velocidades[0]

  }

  if(Nível >= 3){
  
   y1 = y1 + velocidades[1]
   y2 = y2 + velocidades[1]
   y3 = y3 + velocidades[1]
   y4 = y4 + velocidades[1]

  }
}
 
function mudarNumero(){
 return (Math.floor(Math.random() * (20 + 20) ) - 20);
}

function Instruções(){
background(menuimagem3);
fill(400,600,500)
textSize(20);  
text('Olá viajante espacial, está pronto para iniciar em uma\n jornada muito divertida e desafiadora ? Sim ? Ótimo,\n então vamos lá!',8,30);
text('Seus objetivos para conseguir sucesso em sua jornada\n são:',8,110);
text(' -Coletar 10 estrelas para passar de fase;',16,160);
text(' -Você poderá coletar tanto estrelas com números\n positivos (+) como também estrelas com números\n negativos (-);',16,190);
text(' -Você precisa fazer alguns cálculos de adição (somar)\n com os números positivos  (+)  e  negativos  (-)  que\n estão  dentro  das estrelas que você irá coletar, sem\n deixar  que  seu  saldo  de  estrelas  fique  negativo\n (menor que 0).',16,270);
text(' TECLAS:',8,400);
text('\n Setas - Movimentação da nave, Control - Disparo,\n Enter - Selecionar, Espace - Voltar para o Jogo,\n Esc - Voltar para o Menu.',16,400);
}
    
function Informações(){
background(menuimagem3);
fill(400,600,500)
textSize(20);
text(" O objetivo desse jogo é influenciar crianças e jovens a\n ter outra visão diferente da matéria abordada, fazendo\n com que se interesse mais e reflita sobre problemas,a\n qual convive na escola e na vida.",5,40) 
text("Ano: 7º ano do Ensino Fundamental ",5,150)
text("Matemática:(EF07MA04)Resolver e elaborar problemas\n que envolvam operações com números inteiros.",5,180)
text("Space Calc é um jogo educacional que  tem  como alvo\n abordar  as  operações  de  adição  e  subtração  utili-\n zando  números  inteiros  e pode ser utilizado por estu-\n dantes  do  7º ano do Ensino Fundamental.No jogo, um\n viajante espacial tenta desbravar a imensidão do espa-\n ço em sua grande nave, mas encontra o desafio de co-\n letar uma quantidade certa de estrelas que surgem em\n seu  caminho, de forma  que  seu saldo de combustível\n não possa atingir uma pontuação negativa,caso contrá-\n rio, sua  jornada  chegará ao  fim  após  perder as três\n chances que o universo lhe ofereceu.",5,240)
}

function Créditos(){
background( menuimagem2);
fill(400,600,500)
textSize(20);
image(foto1,150,25,190,190);
text("Arthur Davi de Souza: Programador",100,245)
image(foto2,150,270,190,190);
text("Thiago Moura Barbosa: Educador",100,490)
}

function Voltar(){
  if(key=='Escape'){
  imageMode(CORNER)
   tela=0;
   y1 = - 200;
   y2 = - 100;
   y3 = - 300;     
   y4 = - 400;
   statusfase1 = 0;                  
   statusfase2 = 0;
   statusfase3 = 0;
   statusgameover = 0;
  }
}
function Gameover(){    
   barreiraDePontos1 = 500;  
   Fase = 1
   imageMode(CORNER)
   background(cenario1)
   textSize(45);
   fill(100, 100,100);
   text('Press Space to restart',20,280);
   image(GameOver,50,50,400,400);
   musicaFase1.stop();
   musicaFase2.stop();
   musicaFase3.stop();
  
  //tecla de espaço
  if(keyIsDown(32)){
    tela = 1;           y1 = - 200;
    Vidas = 3;          y2 = - 100;
    Pontos = 0;         y3 = - 300;
    Nível = 1;          y4 = - 400;
    Fase = 1;           statusfase1 = 0;
    Estrelas = 0;       statusfase2 = 0;
    Saldo = 0;          statusfase3 = 0;
   fimdejogo.stop();    statusfimdejogo = 0;
  }
     //som do game over
  if(statusgameover==0){
    gameoversom.setVolume(0.4);
    gameoversom.play();
    statusgameover=1
 for (var i = 0;i < 2; i++){
       musicas[i].stop();
     }
  }

}
  
function Fimdejogo(){
   imageMode(CORNER)
   background(cenario3);
   image(emoji,160,130,180,180)
   textSize(35);
   fill(0, 100,400);
   text('Parabéns.Você conseguiu!!!',40,340);
   gameoversom.stop();
  
  //tecla de Esc
  if(keyIsDown(27)){
    tela = 0;         
    Vidas = 3;      
    Pontos = 0;  barreiraDePontos1 = 500;  
    Fase = 1;     
    Nível = 1;     
    Fase = 1; 
    Estrelas = 0; 
    Saldo = 0;   
  }
  //som do fim do jogo
  if(statusfimdejogo==0){
    fimdejogo.setVolume(0.4);
    fimdejogo.play();
    gameoversom.stop();
    statusfimdejogo = 1 
    for (var i = 0;i < 2; i++){
       musicas[i].stop();
     } 
  }
}