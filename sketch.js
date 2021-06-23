var pathImg;
var runnerImg;
var Lboundry,Rboundry;

function preload(){
  //pre-load images
  pathImg = loadImage("path.png");

  //runnerImg = loadImage("Runner-2.png");
  runnerImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.scale = 1.2;
  path.velocityY = 6;

  runner = createSprite(200,300);
  runner.addAnimation("running",runnerImg);
  runner.scale = 0.07;
  
  Lboundry = createSprite(0,0,100,800);
  Rboundry = createSprite(410,0,100,800);
  Lboundry.visible = false;
  Rboundry.visible = false;

}

function draw() {
  background(0);
  runner.x=mouseX;
  runner.collide(Lboundry);
  runner.collide(Rboundry);
  createEdgeSprites();
  drawSprites();
  if(path.y>400){
    path.y = height/60;
    
  }
}
