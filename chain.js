class Chain{

    constructor(body1,topPoint){
        var options = {
            bodyA: body1,
            pointB: topPoint,
            stiffness: 0.01,
            length:200
        }
        this.pointB = topPoint
        this.chain = Constraint.create(options);
        World.add(world,this.chain)
     }
    
     display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        push()
        stroke("white");
          strokeWeight(2);
          line (pointA.x,pointA.y,pointB.x,pointB.y)
        pop()
     }
    }