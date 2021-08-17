//creating all variables 
var aloo_Img,bg_Img,mushroom_Img,pea_Img,peaShooter_Img,sun_Img,sunflower_Img,zombie_Img;
var aloo,mushroom,pea,peashooter,sun,zombie;
var alooOption,mushroomOption,peashooterOption,sunflowerOption,alooOption2;
var points=0;
var sunGroup,zombieGroup;
var s1,s2,s3,s4;
var mushroomShooter,mushroomShooter_Img;
var ground,peaGroup,peashooterOption2;
var mushroomOption2,sunflowerOption2;
var x=mouseX;
var y=mouseY;
function preload()
{
  //loading  all images
aloo_Img=loadImage("aloo.png");
bg_Img=loadImage("bg.png");
mushroom_Img=loadImage("mushroom.png");
pea_Img=loadImage("pea.png");
peaShooter_Img=loadImage("peashooter.png");
sun_Img=loadImage("sun.png");
sunflower_Img=loadImage("sunflower.png");
zombie_Img=loadAnimation("zombie1.png","zombie2.png");
mushroomShooter_Img=loadImage("purpleBall.png");

}

function setup()
{
  //creating canvas 
createCanvas(1500,700);
//making a group in which we can add all sun sprites 
sunGroup=createGroup();
//making a group in which we can add all zombies 
zombieGroup=createGroup();
//making  a group in which we can add all zombies 
peaGroup=createGroup();

  //making alloo aption on top left of the screen 
alooOption=createSprite(150,40,20,20);
alooOption.addImage(aloo_Img);
alooOption.scale=0.4;
// making mushroom option
mushroomOption=createSprite(250,40,20,20);
mushroomOption.addImage(mushroom_Img);
mushroomOption.scale=0.2;
//making peaShooter  option 
peashooterOption=createSprite(340,40,20,20);
peashooterOption.addImage(peaShooter_Img);
peashooterOption.scale=0.4;
//making sunflower option 
sunflowerOption=createSprite(430,40,20,20);
sunflowerOption.addImage(sunflower_Img);
sunflowerOption.scale=0.5;
//making  sunflowers already in the game 
s1=createSprite(120,210,20,20);
s1.addImage(sunflower_Img);
s1.scale=0.5;

s2=createSprite(120,350,20,20);
s2.addImage(sunflower_Img);
s2.scale=0.5;

s3=createSprite(120,470,20,20);
s3.addImage(sunflower_Img);
s3.scale=0.5;


s4=createSprite(120,590,20,20);
s4.addImage(sunflower_Img);
s4.scale=0.5;
//making ground bu not using it
ground=createSprite(720,260,1500,10);
ground.visible=false;;

}

function draw(){
  //setting bg
background(bg_Img);

//writing points 
fill("black");
textSize(30);
text("SUN :"+points,1300,100);
//spawning zombies
spawnZ();
//spawning suns
spawnSun();

if(mousePressedOver(sun))
{
  sunGroup.destroyEach();
  points=points+10;
  
}

if(mousePressedOver(alooOption))
{
  alooOption.x=mouseX;
  alooOption.y=mouseY;
 // alooOption.collide(ground)
 
}
alooOption.x=x;
 alooOption.y=y;
if(points===100)
{
newAlooOption();

}
if(points===250)
{
  newPeaShooterOption();
}
if(points===350)
{
  newMushroomOption();
}
if(points===450){
  newSunflowerOption();
}
if(mousePressedOver(alooOption2))
{
  alooOption2.x=mouseX;
  alooOption2.y=mouseY;
}
if(mousePressedOver(peashooterOption2))
{
  peashooterOption2.x=mouseX;
  peashooterOption2.y=mouseY;
}
if(mousePressedOver(mushroomOption2))
{
  mushroomOption2.x=mouseX;
  mushroomOption2.y=mouseY
}
if(mousePressedOver(sunflowerOption2))
{
  sunflowerOption2.x=mouseX
  sunflowerOption2.y=mouseY
}
if(keyDown(RIGHT_ARROW))
{

 var  pea=createSprite(peashooterOption.x+3,peashooterOption.y,20,20);
  pea.velocityX=5;
  pea.addImage(pea_Img);
  pea.scale=0.2;
  peaGroup.add(pea);
  if(peaGroup.isTouching(zombieGroup)){
    zombieGroup.destroyEach();
  }
}

if(keyDown(LEFT_ARROW))
{

  var mushroomShooter=createSprite(mushroomOption.x+3,mushroomOption.y,20,20);
  mushroomShooter.velocityX=5;
  mushroomShooter.addImage(mushroomShooter_Img);
  mushroomShooter.scale=0.2;
}

if(mousePressedOver(mushroomOption))
{
  mushroomOption.x=mouseX;
  mushroomOption.y=mouseY;
}

if(mousePressedOver(sunflowerOption))
{
  sunflowerOption.x=mouseX;
  sunflowerOption.y=mouseY;
}
if(mousePressedOver(peashooterOption))
{
  peashooterOption.x=mouseX;
  peashooterOption.y=mouseY;
}

drawSprites()
}

function spawnSun()
{
  if(frameCount%85===0)
  {
    sun=createSprite(random(100,1400),20,20,20);
    sun.addImage(sun_Img);
    sun.scale=0.4;
    sun.velocityY=2;
    sunGroup.add(sun);
  }
}

function spawnZ()
{
  if(frameCount%90==0)
  {
    zombie=createSprite(1500,random(200,500),20,20);
    zombie.addAnimation("zombie",zombie_Img);
    zombie.velocityX=-4;
    zombie.scale=0.3;
    zombieGroup.add(zombie);
  }
}



function newAlooOption()
{
  alooOption2=createSprite(150,40,20,20);
alooOption2.addImage(aloo_Img);
alooOption2.scale=0.4;
points=points-100;

}

function newPeaShooterOption()
{
  peashooterOption2=createSprite(340,40,20,20);
peashooterOption2.addImage(peaShooter_Img);
peashooterOption2.scale=0.4;
points=points-250;


}

function newMushroomOption()
{
  mushroomOption2=createSprite(250,40,20,20);
mushroomOption2.addImage(aloo_Img);
mushroomOption2.scale=0.4;
points=points-150;

}

function newSunflowerOption()
{
sunflowerOption2=createSprite(430,40,20,20);
sunflowerOption2.addImage(peaShooter_Img);
sunflowerOption2.scale=0.4;
points=points-250;


}


//structure the code - indentation,relevant names,library(functions),-done
//zombies createion -try using arrays 
//planting seeds-done
//fixing pos of sprites-not happening
