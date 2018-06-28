export class guiUnit {
    constructor(x1,y1 ,w,h){
        this.x1 = x1;
        this.y1 = y1;
        this.w = w;
        this.h = h;
        this.x2 = x1+w;
        this.y2 = y1+h;
    }
    refreshCoordinates() {
        this.x2 = this.x1 + this.w;
        this.y2 = this.y1 + this.h;
    }
}