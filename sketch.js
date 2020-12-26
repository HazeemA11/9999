
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1, bobObject2, bobObject3, bobObjec4, bobObject5,rope;
var block1,block2,block3,block4,block5,block6,block7;
function preload(){
	
}

function setup() {
	engine = Engine.create();
	world = engine.world;

	createCanvas(800, 700);

block1.score();
block2.score();
block3.score();
block4.score();
block5.score();
block6.score();
block7.score();
engine = Engine.create();
world = engine.world;
	rope=new rope (bobObject1.body,roofObject.body,-bobDiameter*2,0)


	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  text("Score "+score,900,50)
  drawSprites();
 
}
async function getbackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/America/Toronto")
    var responsejson = await response.json();
   
var dt=responsejson.datetime
var hour = dt.slice(11,13);


if(hour>=06&&hour<=18){
	bg="sprites/bg.png"
	
	}
	else{
	bg="sprites/bg2.jpg"
	}
	backgroundImg=loadImage(bg)
	}

