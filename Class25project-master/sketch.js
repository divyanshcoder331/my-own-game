
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var world,engine;
var form,game,level;
var gameState = 0

function setup() {
	createCanvas(displayWidth, displayHeight);
	rectMode(CENTER);
    xVel = 0
    yVel = 0
	engine = Engine.create();
	world = engine.world;
	game = new Game();
	game.start();
}
function draw(){
	Engine.update(engine);

	if(gameState === 1){
		level1 = new Level();
		level1.display();
	}
	if(gameState === 2){
		part1 = new Part();
		part1.display();
	}
	if(gameState === 3){
        part1.hide();
		m1l1 = new Map1level1();
        m1l1.play();
	}
	if(gameState === 4){
		part2 = new Part();
		part2.display();
	}
	if(gameState === 5){

	}
}