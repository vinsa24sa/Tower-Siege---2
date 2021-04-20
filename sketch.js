const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img, polygon;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(720,200,250,10);
  
  //for first pyramid 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  //For Second Pyramid
  //level one
  b1 = new Block(630,175,30, 40);
  b2 = new Block(660,175,30, 40);
  b3 = new Block(690,175,30, 40);
  b4 = new Block(720,175,30, 40);
  b5 = new Block(750,175,30, 40);
  b6 = new Block(780,175,30, 40);
  b7 = new Block(810,175,30, 40);
  b8 = new Block(660,135,30, 40);
  b9 = new Block(690,135,30, 40); 
  b10 = new Block(720,135,30, 40);
  b11 = new Block(750,135,30, 40);
  b12 = new Block(780,135,30, 40);
  b13 = new Block(690,95,30, 40);
  b14 = new Block(720,95,30, 40); 
  b15 = new Block(750,95,30, 40);
  b16 = new Block(720,55,30, 40);

  var options = {
    isStatic:false    
  }

  ball = Bodies.circle(150,100,60,options);
  World.add(world,ball);

  chain = new Chain(this.ball,{x:100, y:100});



}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");

//  polygon = Bodies.circle(390, 150, 20);
//  World.add(world, polygon);

imageMode(CENTER);
image(polygon_img, ball.position.x, ball.position.y,60,60);
  

  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  fill("orange");
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  fill("blue");
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  fill("red");
  b13.display();
  b14.display();
  b15.display();
  fill("pink");
  b16.display();
  chain.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    chain.fly();
}

function keyPressed(){
  if(keyCode === 32){
    chain.attach(ball);
  }
}
