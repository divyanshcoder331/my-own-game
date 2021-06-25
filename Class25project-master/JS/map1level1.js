class Map1level1{
    constructor(){
        this.ground = new Ground(displayWidth/2+500,displayHeight/2+150,3000,displayHeight/2-200);
        this.adventurer = new Adventurer(displayWidth/2,displayHeight/2,20,100);
        this.help = new Adventurer(displayWidth/2-100,displayHeight/2,20,100);
    }
   
    play(){
        this.adventurer.xPos += xVel;
        if(keyIsDown(39)){
            xVel += 20;
        }
        camera.position.x = displayWidth/2;
        camera.position.y = this.adventurer.y;
        this.ground.display();
        this.adventurer.display();
        this.help.display();
    }
}