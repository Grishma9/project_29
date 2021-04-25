
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground,base1,base2,poligan,slingshot;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;
var block11,block12,block13,block14,block15,block16,block17,block18,block19,block20;

function preload(){
    poliganImage=loadImage("polygon.png");
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

   ground = new Ground();
   base1 = new Base(570,400,200,20);
   base2 = new Base(880,450,200,20);
   block1 = new Block(500,350,40,50);
   block2 = new Block(540,350,40,50);
   block3 = new Block(580,350,40,50);
   block4 = new Block(620,350,40,50);
   block5 = new Block(660,350,40,50);
   block6 = new Block(520,300,40,50);
   block7 = new Block(560,300,40,50);
   block8 = new Block(600,300,40,50);
   block9 = new Block(640,300,40,50);
   block10 = new Block(540,250,40,50);
   block11 = new Block(580,250,40,50);
   block12 = new Block(620,250,40,50);
   block13 = new Block(560,200,40,50);
   block14 = new Block(600,200,40,50);
   block15 = new Block(580,150,40,50);

   block16 = new Block(840,250,40,50);
   block17 = new Block(880,250,40,50);
   block18 = new Block(800,250,40,50);
   block19 = new Block(920,250,40,50);
   block20 = new Block(960,250,40,50);
   block21 = new Block(820,200,40,50);
   block22 = new Block(860,200,40,50);
   block23 = new Block(900,200,40,50);
   block24 = new Block(940,200,40,50);
   block25 = new Block(840,150,40,50);
   block26 = new Block(880,150,40,50);
   block27 = new Block(920,150,40,50);
   block28 = new Block(860,100,40,50);
   block29 = new Block(900,100,40,50);
   block30 = new Block(880,50,40,50);
   //poligan = new Poligan(50,200);
     poligan=Bodies.circle(50,200,20);
    World.add(world,poligan);
   slingshot = new SlingShot(this.poligan,{x:100,y:200});
}
function draw(){
    background(rgb(22,147,222));
    textSize(32);
    text("drag the polygon to play the game" , 100, 50);
 //   poligan.display();
    ground.display();
    base1.display();
    base2.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();
    block29.display();
    block30.display();
    imageMode(CENTER);
    image(poliganImage,poligan.position.x,poligan.position.y,50,50);
    slingshot.display();
}
function mouseDragged(){
    Matter.Body.setPosition(this.poligan, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode===32){
        Matter.Body.setPosition(this.poligan, {x:50 , y: 200});
        slingshot.attach(this.poligan);
    }
    }