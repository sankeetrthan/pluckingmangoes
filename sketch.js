
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy;
var tree;
var ground;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12,mango13,mango14;
var stone;
var sling1;


function preload()
{
	
}

function setup() {
	createCanvas(800, 620);


	engine = Engine.create();
	world = engine.world;

    tree = new Tree(600,420,400,400);

    ground = new Ground(400,height,800,30);

    boy = new Boy(100,570,150,150);

    stone = new Stone(50,540,12);

    sling1 = new Slingshot(stone.body,{x:50,y:532})

    mango1 = new Mango(580,300,60,60);

    mango2 = new Mango(550,250,60,60)

    mango3 = new Mango(650,300,60,60);

    mango4 = new Mango(650,250,60,60);

    mango5 = new Mango(700,300,60,60);

    mango6 = new Mango(550,360,60,60);

    mango7 = new Mango(480,380,60,60);

    mango8 = new Mango(600,350,60,60);

    mango9 = new Mango(650,380,60,60);

    mango10 = new Mango(700,380,60,60);

    mango11 = new Mango(500,330,60,60);

    mango12 = new Mango(780,360,60,60);

    mango13 = new Mango(740,330,60,60);

    mango14 = new Mango(450,330,60,60);

	Engine.run(engine);
  
}


function draw() {
  imageMode(CENTER);
  background("white");
  tree.display();
  ground.display();
  boy.display();
  stone.display();
  sling1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();
  mango14.display();
  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);
  detectcollision(stone,mango6);
  detectcollision(stone,mango7);
  detectcollision(stone,mango8);
  detectcollision(stone,mango9);
  detectcollision(stone,mango10);
  detectcollision(stone,mango11);
  detectcollision(stone,mango12);
  detectcollision(stone,mango13);
  detectcollision(stone,mango14);
  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling1.fly();
}

function detectcollision(lstone,lmango)
{
  lmango1 = lmango.body.position
  lstone1 = lstone.body.position

  if (lstone1.x - lmango1.x < lmango1.width/2 + lstone1.width/2
    &&  lmango1.x - lstone1.x < lmango1.width/2 + lstone1.width/2
    &&  lstone1.y - lmango1.y < lmango1.height/2 + lstone1.height/2
    &&   lmango1.y - lstone1.y < lmango1.height/2 + lstone1.height/2) 
    {
       Matter.Body.setStatic(lmango.body,false);
    }

}