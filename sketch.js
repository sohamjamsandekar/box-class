const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var box2;
var engine, world;
var box1;
var ground;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
box2=new Box(240,80,50,50);
    box1 = new Box(200,300,50,50);
    ground=new Ground(200,380,400,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
   box2.display();
   ground.display();
}