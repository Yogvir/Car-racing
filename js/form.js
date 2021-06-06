class Form{
    constructor() {
        this.input = createInput("Name")
    this.button = createButton("PLAY")
    this.greeting= createElement("h2")
    
    }
    Hide() {
       this.button.hide();
       this.input.hide();
       this.greeting.hide();
    }
    display() {
        var title = createElement('h1');
        title.html("Car Racing Game");
        title.position(200, 100);

        
        this.input.position(200, 200);
        this.button.position(200, 250);

        this.button.mousePressed(()=> {
           this. input.hide();
            this.button.hide();

            player.name = this.input.value();
            playerCount = playerCount + 1;
            player.index = playerCount
            player.update();
            player.updateCount(playerCount);
           
            
            this.greeting.html("Hey! WelCome to my Game " + player.name);
           this. greeting.position(200,200)
            })
}
}