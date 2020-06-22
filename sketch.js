const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint= Matter.Constraint;
var engine,world;
var constraint; 

function setup() {
  engine=Engine.create();
  world=engine.world;
  createCanvas(500,500);
  log = new Log(200,100,250,30);
  bob = new Bob(200,300,80,80);
  string = new String(log.body,bob.body);
}

function draw() {
  Engine.update(engine);
  background("black");
  fill("white");
  textStyle(30);
  text("The longer the string,The longer the time period of the pendulum ",width-450,50);
log.display();
bob.display();
string.display(); 
}
  function mouseDragged(){
    Matter.Body.setPosition(bob.body,{x:mouseX,y:mouseY});
    }
    
    