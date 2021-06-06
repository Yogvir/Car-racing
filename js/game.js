class Game{
    constructor(){

    }
//read the gameState from database
    getState() {
    database.ref("gameState").on("value",function(data){
        gameState = data.val();
        
    })
}


    //update gameState to database
    updateState(state) {
    database.ref("/").update({
        gameState:state
    })
    }
    
    start() {
        if (gameState === 0) { 
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
}   
    }

    play(){
form.Hide();
textSize(30);
text ("Game Start",120,100);
        Player.getPlayerInfo();
        if (allPlayers != undefined) {
            var y_position = 130;
            for (var plr in allPlayers) {
                if (plr === "player" + player.index) { 
                    fill("red");
                }
                else{
                    fill('blue');
                }
                y_position += 20
                textSize(20);
                text(allPlayers[plr].name + " : " + allPlayers[plr].distance,120,y_position)
            }
           
        }
        //increment the distance travelled
        if(keyIsDown(UP_ARROW) && player.index !=null){
            player.distance += 50;
            player.update();
            
        }



    }

    
}

