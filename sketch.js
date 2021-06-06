/*const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;*/
var gameState = "start";
var houseImg, livingRoomImg;
var place;
var click, birds;

function preload() {
  houseImg = loadImage("Images/home.png");
  livingRoomImg = loadImage("Images/livingRoom.png");
  click=loadSound("Sounds/click.mp3");
  birds=loadSound("Sounds/birds.mp3");
}

function setup() {
  var canvas = createCanvas(1200, 400);
  background(255, 159, 231);
  
  if (gameState === "start") {
    start();
    
  }
 
}

function draw() {
  //if (gameState==="instruction"){
   // instructions();
  //}  
  if (gameState==="play"){
    button6= createButton("Menu")
    button6.position(1130,20);
    button6.mousePressed(() => {
    background("pink");
    button5.createButton('kitchen');
    button5.position(25,100);

    });
  }
  if (gameState === "play" && place === "outside") {
    
    background(houseImg);
    //birds.play();
    button3 = createButton("Open");
    button3.position(390, 275);
    button3.mousePressed(() => {
      place = "living room";
      gameState = "play";
      click.play();
    });
    
  }
  if (gameState === "play" && place === "living room") {
    background(livingRoomImg);
  }
  
  
}
function start(){
  stroke(0);
    fill(186, 73, 255);
    textFont("jokerman");
    textSize(40);
    text("⚠ COVID Safety ⚠", 450, 50);

    noStroke();
    textFont("ink free");
    fill("black");
    textSize(20);
    text("Corona virus has taken over the world, leaving all locked up in their homes. Let's learn how we can keep us safe. ", 25, 150);
   text("Click start to play.",150,170)
    button1 = createButton("Start");
    button1.position(600, 370);
    button1.mousePressed(() => {
      button1.hide();
      gameState = "play";
      place= "outside";
      click.play();
    });
}
/*
function instructions(){
  background(255, 159, 231);
  stroke(0);
  fill(186, 73, 255);
  textFont("Times New Roman");
  textSize(40);
  text("Here's your schedule", 450, 50);
  if(keyDown("space")){
    gameState = "play";
    place="outside";
    click.play();
  }

}*/