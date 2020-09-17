var boxLeft,boxRight,boxBottom;
var boxB,boxL,boxR;
var ground,gground;
var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	boxBottom=createSprite(350,710,200,20);
	boxRight=createSprite(650,100,20,100);
	boxLeft=createSprite(650,100,20,100);
	gground=createSprite(650,690,1300,100)

	boxB = Bodies.rectangle(1000,600,200,20,{isStatic:true});
	World.add(world, boxB)
	boxL  = Bodies.rectangle(1100,550,20,100,{isStatic:true});
	World.add(world, boxL)
	boxR  = Bodies.rectangle(900,550,20,100,{isStatic:true});
	World.add(world, boxR)
	
	ground = Bodies.rectangle(650,690,1300,100,{isStatic:true});
 	World.add(world, ground);

	ball = new Ball(100,650,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  boxBottom.x = boxB.position.x 
  boxBottom.y = boxB.position.y
  boxLeft.x = boxL.position.x 
  boxLeft.y = boxL.position.y
  boxRight.x = boxR.position.x 
  boxRight.y = boxR.position.y
  gground.y = ground.position.y
  gground.x = ground.position.x
  boxBottom.shapeColor="red";
  boxLeft.shapeColor="red";
  boxRight.shapeColor="red";
  gground.shapeColor="yellow";
  boxB.isStatic = true
  boxL.isStatic = true
  boxR.isStatic = true
  gground.isStatic = true
  ball.display();
  drawSprites();
  keyPressed();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:5,y:-85});
	}
}