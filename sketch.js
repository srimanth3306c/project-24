
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1,paper1,ground;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
    dustbin1 = new Dustbin(651,650,10,100);
	dustbin2 = new Dustbin(600,670,100,10);
	dustbin3 = new Dustbin(560,670,10,100);
	paper1 = new  Paper();
	paper1.scale = 0.05;
	// paper1.velocityY = 8
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
 dustbin1.display();
  ground.display();
  dustbin2.display();
  dustbin3.display();
  paper1.display();
  drawSprites();
 
}



