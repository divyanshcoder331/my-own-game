class Part{
    constructor(){
        this.part1 = createButton('level1');
        this.part2 = createButton('level2');
        this.part = [this.part1,this.part2];
    }
    hide(){
        this.part1.hide();
        this.part2.hide();
    }

    display(){
        this.part1.position(displayWidth/2-50,displayHeight/2-100);
        this.part2.position(displayWidth/2+30,displayHeight/2-100);

        this.part1.mousePressed(()=>{
            this.part1.hide();
            this.part2.hide();
            gameState = 3;
        })
        this.part2.mousePressed(()=>{
            this.part1.hide();
            this.part2.hide();
            gameState = 5;
        })
    }
}
