class Level{
    constructor(){
        this.lev1 = createButton('map1')
        this.lev2 = createButton('map2')
        this.level = [this.lev1,this.lev2];
    }

    hide(){
       this.level.hide();
        
    }

    display(){
        this.lev1.position(displayWidth/2-50,displayHeight/2-100);
        this.lev2.position(displayWidth/2+30,displayHeight/2-100);

        this.lev1.mousePressed(()=>{
            this.lev1.hide();
            this.lev2.hide();
            gameState = 2;
        })
        this.lev2.mousePressed(()=>{
            this.lev1.hide()
            this.lev2.hide();
            gameState = 4;
        })
    }
}