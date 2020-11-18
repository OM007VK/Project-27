class Ball{

constructor(posX,posY,R){
var options= {restitution:.3,
               friction:0, 
               density:0.8}
this.body=Bodies.circle(posX,posY,R/2,options);
this.radius=R;
World.add(world,this.body)
 }

 display(){

    var pos=this.body.position;
    var angle=this.body.angle;
    push()
    rectMode(CENTER);  
         translate(pos.x,pos.y)
         rotate(angle);
         fill (100);
         circle(0,0,this.radius)
    pop()
 }
}