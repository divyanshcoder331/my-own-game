class Form{
    constructor(){
        this.button = createButton('Play');
        this.title = createElement('h2');
    }
  hide(){
    this.button.hide();
  }

  display(){
    //this.title = createElement('h2')
    this.title.html("THE MYTH ADVENTURER");
    this.title.position(displayWidth/2-50,0);

    this.button.position(displayWidth/2+30, displayHeight/2);

    this.button.mousePressed(()=>{
      this.button.hide();
      gameState += 1;
    });
  }
}