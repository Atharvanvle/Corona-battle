const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(760,330,320,10);
    platform = new Ground(150, 318, 350, 200);
    fill("red");
    box1 = new Box(640,265);
    box2 = new Box(700,265);
    pig1 = new Pig(760, 220);
    log1 = new Log(760,240,270, PI/2);

    box3 = new Box(760,265);
    box4 = new Box(820,265);
    pig3 = new Pig(760, 150);
    pig4 = new Pig(760,120);
    log2 =  new Log(760,150,260, PI/2);

    box5 = new Box(880,265);
    log4 = new Log(755,130,270, PI/2);
    log5 = new Log(760,100,220, PI/2);

    bird = new Bird(200,50);

    box6 = new Box(670,200);
    box7 = new Box(850,200);
    box8 = new Box(850,140);
    box9 = new Box(670,140);
    box10 = new Box(850,120);
    box11 = new Box(670,120);


    log6 = new Log(720,100,140, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(0);
    Engine.update(engine);
    //strokeWeight(4);
    fill("white");
    textSize(20);
    text("LEVEL : 2",580,20);

    fill("red");
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    pig4.display();
    log2.display();

    box5.display();
    log4.display();
    log5.display();
    //log6.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}
function keyPressed(){
    if(keyCode==32){
    slingshot.attach(bird.body);
    }
}

function mouseReleased(){
    slingshot.fly();
}