var fixedRect, movingRect, object1, object2, object3, object4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  object1 = createSprite(0, 400, 50, 80);
  object1.shapeColor = "green";
  object1.debug = true;

  object2 = createSprite(1200, 400, 80,30);
  object2.shapeColor = "green";
  object2.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  object1.velocityX = +20
  object2.velocityX = -10
}

function draw() {
  background(0,0,0);  

  bounceofff(movingRect,fixedRect);
  bounceofff(object1,object2);
  
  drawSprites();
}