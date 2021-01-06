class Bob{
    constructor(x,y,radius){
        var options = {
            restitution: 1,
            friction: 1,
            isStatic: false,
            density: 0.8
        }

        this.body = Bodies.circle(x,y,radius,options);
        this.x = x;
        this.y = y;
        this.radius = radius;

        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill(128);
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
}