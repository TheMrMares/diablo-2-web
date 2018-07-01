export class Unit {
    constructor(drawground, x1 = 0, y1 = 0, w = 0, h = 0, vx = 0, vy = 0, visible){
        this.drawground = drawground;
        this.x1 = x1;
        this.y1 = y1;
        this.w = w;
        this.h = h;
        this.x2 = x1+w;
        this.y2 = y1+h;
        
        this.oldx1 = x1;
        this.oldy1 = y1;
        this.oldx2 = this.x2;
        this.oldy2 = this.y2;

        this.vx = vx;
        this.vy = vy;

        this.tx = null;
        this.ty = null;
        this.sx = null;
        this.sy = null;

        this.visible = visible;
    }
    saveCoordinates(){
        this.oldx1 = this.x1;
        this.oldy1 = this.y1;
        this.oldx2 = this.x2;
        this.oldy2 = this.y2;
    }
    refreshCoordinates() {
        this.x2 = this.x1 + this.w;
        this.y2 = this.y1 + this.h;
    }
    updateCoordinates(){
        this.x1 += this.vx;
        this.y1 += this.vy;
        this.reachTarget();
        this.refreshCoordinates();
    }
    drawObject() {
        if(this.visible == true){
            return this.drawground.fillRect(this.x1,this.y1,this.w,this.h);
        } else if(this.visible != true){
            return;
        }
    }
    moveTo(tx,ty) {
        this.tx = tx;
        this.ty = ty;
        this.sx = this.x1;
        this.sy = this.y1;
        let modifier = Math.sqrt( Math.pow(Math.abs(this.x1-tx),2) + Math.pow(Math.abs(this.y1-ty),2) );
        modifier = modifier/10;
        if(tx < this.x1){ 
            this.vx = -(Math.abs(this.x1-tx)/modifier);
        } else {
            this.vx = Math.abs(this.x1-tx)/modifier;
        }
        if(ty < this.y1){
            this.vy = -(Math.abs(this.y1-ty)/modifier);
        } else {
            this.vy = Math.abs(this.y1-ty)/modifier;
        }
    }
    reachTarget() {
        if(this.sx != null && this.sy != null && this.tx != null && this.ty != null){
            if(this.sx <= this.tx){
                if(this.x1 >= this.tx){
                    this.vx = 0;
                    this.sx = null;
                    this.tx = null;
                }
            } else {
                if(this.x1 <= this.tx){
                    this.vx = 0;
                    this.sx = null;
                    this.tx = null;
                }
            }
            if(this.sy <= this.ty){
                if(this.y1 >= this.ty){
                    this.vy = 0;
                    this.sy = null;
                    this.ty = null;
                }
            } else {
                if(this.y1 <= this.ty){
                    this.vy = 0;
                    this.sy = null;
                    this.ty = null;
                }
            }
        }
    }
}