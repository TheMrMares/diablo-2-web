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
    mouseMove(evt){
        let rect = this.canvas.getBoundingClientRect();
        this.mx = evt.clientX-rect.left;
        this.my = evt.clientY-rect.top;
    }
    pushKey(evt,state, player){
        this.keyHold = true;
        console.log(evt.keyCode);
    }
    releaseKey(evt,state, player){
        this.keyHold = false;
        console.log(evt.keyCode);
    }
    mouseClick(evt,state, player){
        if(state == true){
            player.moveTo(this.mx,this.my)
        } else if(state == false){
            console.log('jestes w menu..');
        }
        
    }
}