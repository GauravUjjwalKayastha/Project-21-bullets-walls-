var speed,weight,wall,thickness,bullet,object1,object2;


function setup() {
  createCanvas(1400,400);
  
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  wall=createSprite(1200, 200, thickness, height/2);
  bullet=createSprite(50, 200, 60, 30);
  bullet.shapeColor="white";
  
}

function draw() {
  background("black"); 
  bullet.velocityX=speed;
  hasCollided(bullet,wall);


  if(hasCollided(bullet,wall)){
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
   bullet.velocityX=0;
  if(damage>10){
    wall.shapeColor=color(255,0,0);
  }
  if(damage<10){
    wall.shapeColor=color(0,255,0);
  }
}
  drawSprites();
}

function hasCollided(object1,object2){
  bulletRightEdge=object1.x+object1.width;
  wallLeftEdge=object2.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  
    return false;
}
