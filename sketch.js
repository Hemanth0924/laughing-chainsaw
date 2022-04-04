var PLAY = 1;
var END = 0;
var gameState = PLAY;

var bg,bgImg;
var player,playerImg;
var ground, ground2;
var bomb, bombImg,bombGroup;
var explosion, explosionImg, explosionGroup;
var basketball, basketballImg, basketballGroup;

function preload(){

bgImg = loadImage('vbfWrq.jpeg');

playerImg = loadImage('basketball_guy-removebg-preview.png');

bombImg = loadImage('cartoon-bomb-vector-24560563-removebg-preview.png');

explosionImg = loadImage('explosion.png');

basketballImg = loadImage('bb.png');
    
}

function setup(){


createCanvas(1200,700);

bg = createSprite(600,350);
bg.addImage(bgImg);
bg.scale = 0.5;

player = createSprite(100,670);
player.addImage(playerImg);
player.scale = 0.4;

basketballGroup = new Group;

bombGroup = new Group;   



ground = createSprite(100,675,2200,100);

ground.visible = false;
ground2 = createSprite(100,660,2200,90);

ground2.shapeColor = "#bee7a5";

player.debug = true;



}

function draw(){

background("black");

if(gameState === PLAY){
    
    if(keyDown("space")   && player.y >= 500){
        player.velocityY = -12;
    
    
    }
    player.velocityY = player.velocityY + 1;
    player.collide(ground);

    if(bombGroup.collide(player)){
player.velocityY = 0;

player.velocityX = 0;

bomb.velocityX = 0;

bomb.velocityY = 0;

basketball.velocityY = 0;

basketball.velocityX = 0;

       basketball.visible = false;
       bomb.visible = false; 
    }
}




 spawnBomb();
 spawnBasketball();
 
drawSprites();




}


function spawnBomb(){
    if(World.frameCount % 200 === 0){
        bomb = createSprite(1200,585);
        bomb.addImage(bombImg);
        bomb.scale = 0.20;
        bomb.velocityX = -30;
   bombGroup.add(bomb);
   
    }
}

function spawnBasketball(){
    if(World.frameCount % 175 ===0){
        basketball = createSprite(1200,585);
        basketball.y = Math.round(random(600, 500));
        basketball.addImage(basketballImg);
        basketball.scale = 0.30;
        basketball.velocityX = -30;
     basketballGroup.add(basketball);


    }






}