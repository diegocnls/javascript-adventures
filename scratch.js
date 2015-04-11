$('document').ready(function(){

    function Cat(){
        this.costume = 1;
        this.xpos = 0;
        this.ypos = 0;
        this.rate = 0;        
    } 

    var gamePlay = false;
    

    function startGame(){
        gamePlay = true;
        var sprite = new Cat();
        sprite.xpos = -50;
        sprite.ypos = -14;
        sprite.lives = 3;

        while(gamePlay === true){
            if(spaceKey.pressed){
                sprite.rate = 4;
            }    
        }
        
    } 


    startGame();  
});
