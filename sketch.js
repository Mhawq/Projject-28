
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree,ground,stone,boy,boyimg
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10
var slingShot
var slingShotForce = 100;

function preload(){
	boyimg = loadImage("Plucking Mangoes/boy.png");
  //treeImg = loadImage("tree.png")
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(1000,300,500);
	ground = new Ground(600,600,1200,15);
  stone = new Stone(230,450,30);
	//boy = new Boy(320,520,300,350);

	mango1 = new Mango(1000,220,25);
	mango2 = new Mango(950,180,30);
	mango3 = new Mango(1020,100,26);
	mango4 = new Mango(1130,180,29);
	mango5 = new Mango(850,220,27);
	mango6 = new Mango(920,120,28);
	mango7 = new Mango(1060,160,25);
	mango8 = new Mango(920,120,30);
	mango9 = new Mango(1070,255,26);
	mango10 = new Mango(1200,240,29);

	slingShot = new SlingShot(stone.body,{x:230,y:440})

	Engine.run(engine);
  
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:230,y:440})
		slingShot.attach(stone.body);
	}
}

function draw() {
 // rectMode(CENTER);
  background('grey');
  image(boyimg,200,340,200,300);

  tree.display();
  ground.display();
 // boy.display();
  stone.display();

  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  mango9.display()
  mango10.display()

  slingShot.display()

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

  //drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x: mouseX, y: mouseY});
}

function mouseReleased(){
	slingShot.fly();
}

function detectcollision(lstone,lmango){
  mangoBodyPosition = lmango.body.position
  stoneBodyPosition = lmango.body.position

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  if(distance <= lmango.r+lstone.r){
	  Matter.Body.setStatic(lmango.body,false)
  }
}


