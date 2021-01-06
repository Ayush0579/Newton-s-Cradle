
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
  
}

function setup() {
	createCanvas(1200, 1200);

  engine = Engine.create();
	world = engine.world;

	bobObject1 = new Bob(520,1100,40);
	bobObject2 = new Bob(560,1100,40);
	bobObject3 = new Bob(600,1100,40);
	bobObject4 = new Bob(640,1100,40);
	bobObject5 = new Bob(680,1100,40);
	
  up = new roof(600,100,750,50);
  
  rope1 = new Chain(bobObject1.body,up.body, -160, 0);
  rope2 = new Chain(bobObject2.body,up.body, -80, 0);
  rope3 = new Chain(bobObject3.body,up.body, 0, 0);
  rope4 = new Chain(bobObject4.body,up.body, 80, 0);
  rope5 = new Chain(bobObject5.body,up.body, 160, 0);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0,255,0);

  up.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-300,y: -300});
	}
}