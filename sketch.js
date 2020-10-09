
var player;
var playerimg
var bg;
function preload(){
    playerimg=loadImage('images/girl1.png')
    bg=loadImage('images/forest2.jpg')
}

function setup(){
    createCanvas(displayWidth-30,displayHeight-30);
    player = createSprite(displayWidth/2,displayHeight-220,10,10);
    player.addImage(playerimg)

    player.scale=1.5
    player.shapeColor = "blue";
}

function draw(){
    background(bg);
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
   player.x =player.x + x;
   player.y =player.y + y;
}
