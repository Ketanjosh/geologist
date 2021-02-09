var stone
var rectangle
var ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
  createCanvas(900, 600);
  

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=Bodies.rectangle(100,100,100,100)
World.add(world,ground)
  
	Engine.run(engine);
  
}


function draw() {
 
  rectMode(CENTER);
  
  background(200);
  rectangle.position.x = mouseX;
  rectangle.position.y = mouseY;
  drawSprites();
  ellipse(500,90,100,100)
  rectMode(CENTER)
  rect(ground.position.x, ground.position.y 100,100)

}



  


 




