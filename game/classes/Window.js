export class Window {
    constructor(canvas){
        this.display = canvas;
        this.w = canvas.getAttribute('width');
        this.h = canvas.getAttribute('height');
    }
}