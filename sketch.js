var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var obst4; 
var obsGroup4;

var obst2; 
var obs2Group;

var obst1; 
var obs1Group;

var obst3; 
var obsGroup3;

var form, player, game;

var players, player1, player2, player3, player4;

var track;

function preload(){
  track = loadImage("../images/track.jpg");
  ground = loadImage("../images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
  if (keyDown("space")){
    players.velocityY+=10;
  }
  players.velocityY+=0.8;

  spawnObs1();
  spawnObs2();
  spawnObs3();
  spawnObs4();

  if (obs1Group.isTouching(player4)){
    game.update(1);
  }

  if (obs2Group.isTouching(player1)){
    game.update(1);
  }

  if (obs3Group.isTouching(player2)){
    game.update(1);
  }

  if (obs4Group.isTouching(player3)){
    game.update(1);
  }
}

function spawnObs1(){
  if (frameCount%60==0){
    obst= createSprite(windowWidth+50,100);
    obst.velocitX=6; 
    obsGroup.add(obst);
  }
}

function spawnObs2(){
  if (frameCount%60==0){
    obst1= createSprite(windowWidth+50,300);
    obst1.velocitX=6; 
    obs1Group.add(obst1);
  }
}

function spawnObs3(){
  if (frameCount%60==0){
    obst2= createSprite(windowWidth+50,500);
    obst2.velocitX=6; 
    obs2Group.add(obst2);
  }
}

function spawnObs4(){
  if (frameCount%60==0){
    obst3= createSprite(windowWidth+50,700);
    obst3.velocitX=6; 
    obsGroup3.add(obst3);
  }
}

