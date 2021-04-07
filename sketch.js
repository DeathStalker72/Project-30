const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand, polygon, polygonImg, slingShot;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21;

function preload(){
   polygonImg = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    stand = new Ground(625,380,260,10);

    //fill("pink");
    box1 = new Box(520,355,30,40);
    box2 = new Box(550,355,30,40);
    box3 = new Box(580,355,30,40);
    box4 = new Box(610,355,30,40);
    box5 = new Box(640,355,30,40);
    box6 = new Box(670,355,30,40);
    box7 = new Box(700,355,30,40);
    box8 = new Box(730,355,30,40);
    box9 = new Box(550,315,30,40);
    box10 = new Box(580,315,30,40);
    box11 = new Box(610,315,30,40);
    box12 = new Box(640,315,30,40);
    box13 = new Box(670,315,30,40);
    box14 = new Box(700,315,30,40);
    box15 = new Box(580,275,30,40);
    box16 = new Box(610,275,30,40);
    box17 = new Box(640,275,30,40);
    box18 = new Box(670,275,30,40);
    box19 = new Box(610,235,30,40);
    box20 = new Box(640,235,30,40);
    box21 = new Box(625,195,30,40);

    polygon = Bodies.polygon(200,250,6,5);
    World.add(world, polygon);

    slingShot = new SlingShot(this.polygon,{x:200,y:200});
}

function draw(){
    background(0);
    Engine.update(engine);
    imageMode(CENTER);
    image(polygonImg,polygon.position.x,polygon.position.y,40,40);

    stand.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
   // polygon.display();
    slingShot.display();
}
function mouseDragged(){
    Matter.body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
   slingShot.fly();
}
function keyPressed(space){
    SlingShot.attach();
}