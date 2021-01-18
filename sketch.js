var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score =0;
var particle;
var turn = 0;
var gameState = 'play';
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  // if(frameCount%60===0){
    // particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    // score++;
  // }
 
  //for (var j = 0; j < particles.length; j++) {
   
   //  particles[j].display();
  // }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
  console.log(turn)
  console.log(gameState)
  console.log(particle);
  
}

function mousePressed()
{
  if(gameState!=='end')
  {
    turn++
    particle = new Particle(mouseX,10,10,10);
    particle.display();
   score++
     
      
    
  
  }
 
    
    if(particle.body.position.y>760){
    
       if(particle.body.position.x<300){
    
        score+= 500
        particle = null;
        if(turn>=5){ 
          gameState = 'end'
          textSize(30)
          text("GAME OVER",400,400);
        }
       }
       if(particle.body.position.x>301&&particle.body.position.x<600 ){
    
        score+= 100
        particle = null;
        if(turn>=5)
        { 
          gameState = 'end'
          textSize(30)
          text("GAME OVER",400,400);
        }
       }
       if(particle.body.position.x>601&&particle.body.position.x<900){
    
        score+= 200
        particle = null;
        if(turn>=5) {
          gameState = 'end'
          textSize(30)
          text("GAME OVER",400,400);
      }
       }
    
    }
    
    
    
    
   
}

