class Chain{
    constructor(a,b,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;

        var options = {
            bodyA : a,
            bodyB : b,
            stiffness : 1,
            length : 1000,
            pointB:{x: this.offsetX, y: this.offsetY}
        }

        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }

    display(){
        var pos = this.chain.bodyA.position;
        var posB = this.chain.bodyB.position;
        var posPointX = posB.x + this.offsetX;
        var posPointY = posB.y + this.offsetY;
        stroke("brown");
        strokeWeight(5);
        line(pos.x,pos.y,posPointX,posPointY);
    }
}