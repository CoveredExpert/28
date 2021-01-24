
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground
var stone
var mango
var tree
function preload()
{
	
}

function setup() {
	var canvas = createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	tree = new Tree(50,100)
	ground = new Ground(100,50)
	stone = new Stone(10,30)
	mango = new Mango(600,540)
    


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(white);
  
  drawSprites();
 
}



