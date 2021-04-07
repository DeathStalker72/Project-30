class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1 = loadImage('sling1.png');
        this.sling2 = loadImage('sling2.png');
        this.sling3 = loadImage('sling3.png');
        this.sling = Constraint.create(options);
        this.pointB = pointB
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,218,260);
        image(this.sling2,190,220);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
           
            stroke(48,22,8);
            strokeWeight(5);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            image(this.sling3,pointA.x - 10, pointA.y + 10,15,30);
            }
           
        }
    }
    
