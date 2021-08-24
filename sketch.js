
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var score = 0,balloon,hex,hexImg,balloonImg,bg,bgImg;
function preload()
{
balloonImg = loadImage('balloonImg.png')
bgImg = loadImage('bgForIMG.jpg')
hexImg = loadImage('hex.png')
}
function setup() {
	createCanvas(800,700);


	//engine = Engine.create();
	//world = engine.world;



bg = createSprite(400,700,2000,1000)
bg.addImage('bgImg',bgImg)
bg.y = bg.width/2
bg.velocityY = -3

balloon = createSprite(400,300,20,40)
balloon.shapeColor = 'white'
balloon.addImage('balloonImg',balloonImg)
balloon.scale = 0.25
	//Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(0);
  spawnHex()
  bg.velocityY = -3
if(bg.y < 0){
bg.y = bg.width/2
}
  if(keyCode === 37){
balloon.x -= 5
  }
  if(keyCode === 39){
	balloon.x += 5
	  }
    score = score + 0.1
  drawSprites();
  textSize(30)
  fill('red')
  text(Math.round(score),100,100) 
}

function spawnHex(){
if(frameCount % 10 === 0){
hex = createSprite(random(0,800),0,20,20)
hex.velocityY = 7
hex.addImage('hex',hexImg)
hex.scale = 0.3
}
}


