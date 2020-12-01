  var wall,thickness;
  var bullet,speed,weight;

  function setup() {
  createCanvas(1300,400);

  bullet=createSprite(50, 200, 50,5);
  bullet.shapeColor="white";
  bullet.velocityX = 250;
    
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor="gray";
    
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
    
  }

  function draw() {
  background("black"); 

  if (wall.x)-bullet.x < (bullet.width+wall.width/2) 
  {
      
  var deformation=0.5*weight*speed*speed/22500;

  if (deformation>180) {
  bullet.shapeColor=color(255,0,0);     
  }

  if (deformation<180 && deformation>100) {
  bullet.shapeColor=color(230,230,0);
  }

  if (deformation<100) {
  bullet.shapeColor=color(0,255,0);
  }
    
  }


  bullet.collide(wall);

  

  drawSprites();
  }

  