


var wall,thickness;
var bullet,speed,weight

function setup() {
  createCanvas(1600,400);
  
  thickness=random(22,83)
  speed= random(223,321)
  weight= random(30,52)
  
  bullet=createSprite(50, 200, 50, 50);
  wall=createSprite(1200,200,thickness,height/2);
  

}

function draw() {
  background(0);
  if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);
 
 if(damage>10)
 {
   bullet.shapeColour=colour(255,0,0)
 }
 
 if(damage<10)
 {
   bullet.shapeColour=colour(0,255,0)
 }
  }
  
  function hasCollided(lbullet,lwall)
  {
     bulletRightedge=lbullet.x+lbullet.width;
     wallLeftedge=lwall.x;
  if (bulletRightedge>=wallLeftedge)
  {
   return true
  }
   return false;
  }
}