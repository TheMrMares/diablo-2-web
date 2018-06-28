export class Window {
    constructor(canvas, mouseHold = false){
        this.canvas = canvas;
        this.display = canvas.getContext('2d');
        this.w = canvas.getAttribute('width');
        this.h = canvas.getAttribute('height');
        this.mx = null;
        this.my = null;
        this.mouseHold = mouseHold;
    }
    mouseMove(evt){
        let rect = this.canvas.getBoundingClientRect();
        this.mx = evt.clientX-rect.left;
        this.my = evt.clientY-rect.top;
    }
    mouseClick(evt, player){
        player.moveTo(this.mx,this.my)
    }
    pushKey(evt, player){
        this.mouseHold = true;
        console.log(evt.keyCode);
    }
    releaseKey(evt, player){
        this.mouseHold = false;
        console.log(evt.keyCode);
    }
}