const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;


function preload(){

}

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;


    box1 = new box(200,200,50,50);
 
   pendulum1 = new Pendulum(100,100,30,30)
    chain = new Chain(box1.body, pendulum1.body)
}

function draw(){
  background(25)
    Engine.update(engine);
    
    box1.display();
    chain.display();
    pendulum1.display();
}