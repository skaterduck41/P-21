var wall,thickness;
var bullet, speed, weight; 


function setup() {
  createCanvas(1200, 400);


speed=random(223,321)
thickness=random(400,1500)
weight=random(30,52)

bullet=createSprite(50, 200, 50,50);   

bullet.velocityX = speed;

bullet.shapeColor=color(255,0,0);


  
  wall=createSprite(1200,200, thickness, height/2)
  wall.shapeColor=color(80,80,80)
}


function draw() {
  background(0);

 if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
  	bullet.velocityX=0;
  	var damage=0.5 * weight * speed* speed/22509;
	if(damage>10)
	{
  bullet.shapeColor=color(255,0,0);
  wall.shapeColor=color(255,0,0);

	}

	if(damage<10)
	{
    bullet.shapeColor=color(0,255,0);
    wall.shapeColor=color(0,255,0);
	}
  }  
  
  drawSprites();
 
}
