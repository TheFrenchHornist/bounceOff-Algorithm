var fixedRect, movingRect;

function setup() {

  createCanvas(800,400);
  fixedRect = createSprite(200, 100, 50, 80);
  movingRect = createSprite(200, 300, 80, 30);

movingRect.velocityY = -5;
fixedRect.velocityY = +5;
}

function draw() {
  background(0, 0, 0);  

  if(movingRect.x - fixedRect.x < (movingRect.width/2 + fixedRect.width/2)
    && fixedRect.x - movingRect.x < (movingRect.width/2 + fixedRect.width/2)){
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);
  }

  if(movingRect.y - fixedRect.y < (movingRect.height + fixedRect.height)/2
  && fixedRect.y - movingRect.y < (movingRect.height + fixedRect.height)/2){
    movingRect.velocityY = movingRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
  }

  drawSprites();
}