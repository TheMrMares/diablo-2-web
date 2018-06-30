export class guiUnit {
    constructor(drawground,x1,y1 ,w,h, visible = true){
        this.drawground = drawground;
        this.x1 = x1;
        this.y1 = y1;
        this.w = w;
        this.h = h;
        this.x2 = x1+w;
        this.y2 = y1+h;
        this.visible = visible;
    }
    refreshCoordinates() {
        this.x2 = this.x1 + this.w;
        this.y2 = this.y1 + this.h;
    }
}