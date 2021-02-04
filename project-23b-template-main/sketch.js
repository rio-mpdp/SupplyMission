var helicopterIMG, helicopterSprite, packageSprite,packageIMG,x,y,z;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
    z=loadImage("de.jpg")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	var bg=createSprite(width/2,height/2,width,height)
	bg.addImage(z)
	bg.scale=2.5


	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	groundSprite.visible=false

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 20 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 	boxPosition=width/2-100
 	boxY=610;


 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+40, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxRightSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxRightSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);


	Engine.run(engine);
  
}


function draw() {
    background(0);
  rectMode(CENTER);
  
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  helicopterSprite.velocityX=0
 
  if (keyDown("left")) {

helicopterSprite.velocityX=-2
if(packageBody.position.y<=width/2){
Matter.Body.setPosition(packageBody,{x:packageBody.position.x-2,y:packageBody.position.y})
}

    }
if (keyDown("right")) {

helicopterSprite.velocityX=2
if(packageBody.position.y<=width/2){
	Matter.Body.setPosition(packageBody,{x:packageBody.position.x+2,y:packageBody.position.y})
}
 }
 
	if(keyDown("down")){
		Matter.Body.setStatic(packageBody,false)
	  } 
 
   
  drawSprites();
 
  
 
}
