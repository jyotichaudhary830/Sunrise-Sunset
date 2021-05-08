const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
var bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg10, bg11, bg12;

function preload() {
    // create getBackgroundImg( ) here
    bg1 = loadImage("sunrise1.png");
    bg2 = loadImage("sunrise2.png");
    bg3 = loadImage("sunrise3.png");
    bg4 = loadImage("sunrise4.png");
    bg5 = loadImage("sunrise5.png");
    bg6 = loadImage("sunrise6.png");
    bg7 = loadImage("sunset7.png");
    bg8 = loadImage("sunset10.png");
    bg9 = loadImage("sunset11.png");
    bg10 = loadImage("sunset12.png");

    getBackgroundImg();


}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
    background(backgroundImg);
    // add condition to check if any background image is there to add

    Engine.update(engine);

    // write code to display time in correct format here


    }

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    console.log(responseJSON);


    //change the data in JSON format
    var datetime = responseJSON.datetime;
    console.log(datetime);

    // write code slice the datetime
    var hour = datetime.slice(11, 13);
    console.log(hour);


    // add conditions to change the background images from sunrise to sunset
    if(hour>=04 && hour<=06) {
        bg = "sunrise1.png";
    }else if(hour>=06 && hour<=08) {
        bg = "sunrise2.png";
    }else if(hour>=08 && hour<=10) {
        bg = "sunrise3.png";
    }else if(hour>=10 && hour<=12) {
        bg = "sunrise4.png";
    }else if(hour>=12 && hour<=14) {
        bg = "sunrise5.png";
    }else if(hour>=14 && hour<=16) {
        bg = "sunrise6.png";
    }else if(hour>=16 && hour<=18) {
        bg = "sunset7.png";
    }else if(hour>=18 && hour<=20) {
        bg = "sunset10.png";
    }else if(hour>=20 && hour<=22) {
        bg = "sunset11.png";
    }else if(hour>=22 && hour<=04) {
        bg = "sunset12.png";
    }

    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);

}
