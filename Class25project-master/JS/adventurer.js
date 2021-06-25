class Adventurer{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:0.2,
			xPos:this.xPos,
			distance:this.distance

			}
		this.x=x;
		this.y=y;
		this.w=w;
        this.h=h;
		this.body=Bodies.rectangle(this.x, this.y, this.w, this.h)
		World.add(world, this.body);

	}
	display()
	{
			
			var pos=this.body.position;	
			push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255,0,255)
			rect( 0, 0, this.w, this.h);
			//ellipse(0,0,this.r, this.r);
			pop()
			
	}

}