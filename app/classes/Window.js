export class Window {
    constructor(canvas, keyHold = false){
        this.canvas = canvas;
        this.display = canvas.getContext('2d');
        this.w = canvas.getAttribute('width');
        this.h = canvas.getAttribute('height');
        this.mx = null;
        this.my = null;
        this.keyHold = keyHold;
    }
    mouseMove(evt,game){
        let rect = this.canvas.getBoundingClientRect();
        this.mx = evt.clientX-rect.left;
        this.my = evt.clientY-rect.top;

        if(game.isStarted == true){
            
        } else if(game.isStarted == false){

            //move on buttons
            game.objects.guiTemplates[game.activeGui].objects.buttons.forEach((item,index)=>{
                if((this.mx >= item.x1 && this.mx <= item.x2) && (this.my >= item.y1 && this.my <= item.y2)){
                    item.x1 = item.x1-1;
                }
            });
        }
    }
    pushKey(evt,state, player){
        this.keyHold = true;
        console.log(evt.keyCode);
    }
    releaseKey(evt,state, player){
        this.keyHold = false;
        console.log(evt.keyCode);
    }
    mouseClick(evt,game,player){

        if(game.isStarted == true){
            player.moveTo(this.mx,this.my)
        } else if(game.isStarted == false){

            game.objects.guiTemplates[game.activeGui].objects.buttons.forEach((item,index)=>{
                if((this.mx >= item.x1 && this.mx <= item.x2) && (this.my >= item.y1 && this.my <= item.y2)){
                    item.x1 = item.x1-10;
                }
            });
        }
        
    }
}