
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var bob1, bobDiameter;
var roof;
var rope1;
function preload()
{
	
}

function setup() {
	createCanvas(600, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bob1= new bob(200,200, 3);
	bob2= new bob(210,210,3);
	bob3= new bob(220,220,3);
	bob4= new bob(230,230,3);
	roof= new Roof(width/2,10,width,10)
	
	rope1= new Rope(bob1.body,roof.body,-bobDiameter*3,0)
	
	rope2= new Rope(bob2.body,roof.body,-bobDiameter*3,0)
	
	rope3= new Rope(bob3.body,roof.body,-bobDiameter*3,0)
	
	rope4= new Rope(bob4.body,roof.body,-bobDiameter*3,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  
  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  drawSprites();
 
}