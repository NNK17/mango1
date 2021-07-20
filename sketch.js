
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree, stone,ground, boyIMG;

var boy;

function preload() {
	boyImg = loadImage("boy.png");


}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

mango = new Mango(500,200,30)
mango1 = new Mango(650,200,30)
mango2= new Mango(360,200,30)
mango3 = new Mango(400,200,30)
mango4 = new Mango (550,300,30)
mango5 = new Mango (430,200,30)
tree = new Tree (500,400)
stone = new Stone(150,500,40)
constr = new SlingShot(stone.body, {x:150,y:500})

boy = createSprite(200,550);
	boy.addImage(boyImg);
	boy.scale = 0.1;

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);

	drawSprites();
	


	tree.display();

	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango.display();
stone.display();
constr.display();

detectCollision(stone,mango1);
detectCollision(stone,mango2);
detectCollision(stone,mango3);
detectCollision(stone,mango4);
detectCollision(stone,mango5);
detectCollision(stone,mango);



}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    constr.fly();
	

}
function detectCollision(stone,mango){
	mangoBodyPosition=mango.body.position
	stoneBodyPosition=stone.body.position
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=mango.r+stone.r){
		Matter.Body.setStatic(mango.body,false);
	}
}

function keyPressed(){

	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:150,y:500})
		constr.attach(stone.body);
	}
}



