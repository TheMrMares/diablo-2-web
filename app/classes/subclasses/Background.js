import {guiUnit} from './../guiUnit.js';

export class Background extends guiUnit {
    constructor(drawground,x1,y1,w,h, img, visible = true){
        super(drawground, x1,y1,w,h, visible);
        this.img = img;
    }
    drawObject(){
        if(this.visible == true){
            return this.drawground.drawImage(this.img,this.x1,this.y1);
        } else if(this.visible == false){
            return;
        }
    }
}