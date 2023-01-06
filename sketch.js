var human, humanImg;
var rock, rock2;
var gameState = "play"

function preload(){
  humanImg = loadImage("kid-160097_1280.png");
  rock = loadImage("5-50431_rock-png-snowy-rock-clipart.png");
  rock2 = loadImage("dasxgjv-aadf4828-c1a7-4d36-ac3c-6ec4e402cf53.png")
  


} 


function setup() {
 createCanvas(600,600);
 
 human = createSprite(100,100);
 human.addImage("human", humanImg)


}

function draw() {
 background(180)
}