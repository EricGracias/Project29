const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var ground,striker,chain;

var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,
b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,
b21,b22,b23,b24,b25,b26,b27,b28,b29,b30,
b31,b32,b33,b34,b35,b36,b37,b38,b39,b40,
b41,b42,b43,b44,b45,b46,b47,b48,b49,b50;

var exb1,exb2;

function preload(){
  sball = loadImage("steel ball.png");
}

function setup() {
  createCanvas(1500,700);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);


  ground = new Ground();

  //striker = new Striker(200,200,80,80);

  striker = Bodies.circle(250,600,20);
  World.add(world,striker);

  chain = new Chain(this.striker,{x:250,y:200});

  //1
  b1 = new Brick(650,600,50,50);
  b2 = new Brick(700,600,50,50);
  b3 = new Brick(750,600,50,50);
  b4 = new Brick(800,600,50,50);
  b5 = new Brick(850,600,50,50);

  //2
  b6 = new Brick(650,500,50,50);
  b7 = new Brick(700,500,50,50);
  b8 = new Brick(750,500,50,50);
  b9 = new Brick(800,500,50,50);
  b10 = new Brick(850,500,50,50);

  //3
  b11 = new Brick(650,400,50,50);
  b12 = new Brick(700,400,50,50);
  b13 = new Brick(750,400,50,50);
  b14 = new Brick(800,400,50,50);
  b15 = new Brick(850,400,50,50);

  //4
  b16 = new Brick(650,300,50,50);
  b17 = new Brick(700,300,50,50);
  b18 = new Brick(750,300,50,50);
  b19 = new Brick(800,300,50,50);
  b20 = new Brick(850,300,50,50);

  //5
  b21 = new Brick(650,200,50,50);
  b22 = new Brick(700,200,50,50);
  b23 = new Brick(750,200,50,50);
  b24 = new Brick(800,200,50,50);
  b25 = new Brick(850,200,50,50);

  //6
  b26 = new Brick(650,100,50,50);
  b27 = new Brick(700,100,50,50);
  b28 = new Brick(750,100,50,50);
  b29 = new Brick(800,100,50,50);
  b30 = new Brick(850,100,50,50);

  //7
  b31 = new Brick(650,0,50,50);
  b32 = new Brick(700,0,50,50);
  b33 = new Brick(750,0,50,50);
  b34 = new Brick(800,0,50,50);
  b35 = new Brick(850,0,50,50);

  //8
  b36 = new Brick(650,-100,50,50);
  b37 = new Brick(700,-100,50,50);
  b38 = new Brick(750,-100,50,50);
  b39 = new Brick(800,-100,50,50);
  b40 = new Brick(850,-100,50,50);

  //9
  b41 = new Brick(700,-200,50,50);
  b42 = new Brick(750,-200,50,50);
  b43 = new Brick(800,-200,50,50);

  //10
  b44 = new Brick(700,-300,50,50);
  b45 = new Brick(750,-300,50,50);
  b46 = new Brick(800,-300,50,50);

  //11
  b47 = new Brick(700,-400,50,50);
  b48 = new Brick(750,-400,50,50);
  b49 = new Brick(800,-400,50,50);

  //12
  b50 = new Brick(750,-500,50,50);

  exb1 = new Brick(650,-500,50,50);
  exb2 = new Brick(850,-500,50,50);

}

function draw() {
  background("lightblue");  
  //Engine.update(engine);

  mouseDragged();

  ground.display();

  chain.display();
  //striker.display();
  fill("green");

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();

  fill("yellow");

  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();

  fill("blue");

  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();

  fill("pink");

  b16.display();
  b17.display();
  b18.display();
  b19.display();
  b20.display();

  fill("magenta");

  b21.display();
  b22.display();
  b23.display();
  b24.display();
  b25.display();

  fill("lightgreen");

  b26.display();
  b27.display();
  b28.display();
  b29.display();
  b30.display();

  fill("lightblue");

  b31.display();
  b32.display();
  b33.display();
  b34.display();
  b35.display();

  fill("orange");

  b36.display();
  b37.display();
  b38.display();
  b39.display();
  b40.display();

  fill("turquoise");

  b41.display();
  b42.display();
  b43.display();

  b44.display();
  b45.display();
  b46.display();

  b47.display();
  b48.display();
  b49.display();

  b50.display();

  exb1.display();
  exb2.display();

  imageMode(CENTER);
  image(sball,striker.position.x,striker.position.y,40,40);
  //drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(this.striker,{x:mouseX,y:mouseY});

}
function mouseReleased(){
  chain.fly();
}