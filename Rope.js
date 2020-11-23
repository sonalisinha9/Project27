class Rope{

    constructor(body1,body2, offsetX, offsety)
	{
        this.offsetX=offsetX
        this.offsetY=this.offsetY
		var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX, y:this.offsetY}			
			}
		this.rope= Constraint.create(options)
 		World.add(world, this.body);

	}


display()
{
    var pointA = this.chain.bodyA.position;
    var pointB = this.chain.bodyB.position;
    
    strokeWeight(5);
    line (pointA.x,pointA.y,pointB.x,pointB.y);

}
}