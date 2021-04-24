
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bin1,bin2,bin3;

var ground;

var paperBall;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;

paperBall=new Ball(100,100);

	ground= new Ground(500,380);

	bin1=createSprite(720,325,15,60);
	bin2=createSprite(875,325,15,60);
	bin3=createSprite(800,360,150,15);

	bin1.shapeColor="white";
    bin2.shapeColor="white";
	bin3.shapeColor="white";

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  paperBall.display();
  ground.display();

  keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
      Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:1,y:-4});
	}
}

