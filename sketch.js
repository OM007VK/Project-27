
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1, ball2, ball3, ball4, ball5;
var chain1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	var ballx = 50;

	ball1 = new Ball(300-2*ballx,200,50);
	ball2 = new Ball(300-ballx,200,50);
	ball3 = new Ball(300,200,50);
	ball4 = new Ball(300+ballx,200,50);
	ball5 = new Ball(300+2*ballx,200,50);

	roof = new Roof(375,200,500,20)

	chain1 = new Chain(ball3.body,{x:350,y:200})
	Engine.run(engine);
	chain2 = new Chain(ball1.body,{x:250,y:200})
	chain3 = new Chain(ball2.body,{x:300,y:200})
	chain4 = new Chain(ball4.body,{x:400,y:200})
	chain5 = new Chain(ball5.body,{x:450,y:200})
}


function draw() {
  rectMode(CENTER);
  background(0);
ball1.display();
ball2.display();
ball3.display();
ball4.display();
ball5.display();

roof.display();

chain1.display();
chain2.display();
chain3.display();
chain4.display();
chain5.display();

}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
	 Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-70,y:-45})
	}
}


