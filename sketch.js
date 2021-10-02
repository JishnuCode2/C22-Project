//declaring the constants and variables
  const Engine = Matter.Engine;
  const World = Matter.World;
  const Bodies = Matter.Bodies;
  const Body = Matter.Body;
  var ball
  var ground, leftSide, rightSide;
  var engine, world;
function preload()
{
	
}

function setup() {
  //creating the canvas
	createCanvas(800, 630);

  //writing the physics that the ball will have
  var ball_options={
		frictionAir: 0.025,
    restitution : 0.9,
		density:0.4
	}

  //creating the ball
  ball = Bodies.circle(100,20,20, ball_options);
  
 //creating a local engine using the Engine
	engine = Engine.create();

  //creating a localised world with the help of the engine
	world = engine.world;

	//Creating the ground
  ground = new Ground(400,600,800,20);

  //creating the two sides of the baskets
	leftSide = new Ground(480,530,20,120)
  rightSide = new Ground(750, 490, 20, 200);
   
  //adding the ball to the world
  World.add(world, ball);

  //running the Engine
	Engine.run(engine);
}


function draw() {
  //setting the x and y positions in the middle in rectangles and ellipses
  rectMode(CENTER);
  ellipseMode(RADIUS);

  //setting the baclground color
  background("black");

  //making the ball visible on screen
  ellipse(ball.position.x, ball.position.y, 20);

  //making the other objects visible on the screen
  ground.display();
  leftSide.display();
  rightSide.display();

  //making the ball move if UP_ARROW key is pressed
  if(keyDown(UP_ARROW)){
  keyPressed();
  }
 
}





function keyPressed(){
 Matter.Body.applyForce(ball,{x:0, y:0},{x:6.4,y:-4.4});

}

