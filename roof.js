class Roof{

    constructor(posX,posY,width,height){
    
    var options= {isStatic: true}

    this.body=Bodies.rectangle(posX,posY,width,height,options);
    this.width=width;
    this.height = height;
    World.add(world,this.body)
    }
    
     display(){
    
        var pos=this.body.position;
        var angle=this.body.angle;
        push()           
             translate(pos.x,pos.y)
             rotate(angle);
             fill (100);
            rect(0,0,this.width,this.height)        
        pop()
     }
   }