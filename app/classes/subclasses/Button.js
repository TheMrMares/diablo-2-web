import {guiUnit} from './../guiUnit.js';

export class Button extends guiUnit {
    constructor(drawground, x1,y1,w,h,text = null, action = null, visible = true){
        super(drawground, x1,y1,w,h, visible);
        this.text = text;
        this.action = action;
    }
    drawObject() {
        if(this.visible == true){
            return this.drawground.fillRect(this.x1,this.y1,this.w,this.h);
        } else if(this.visible != true){
            return;
        }
    }
    drawText(){
        if(this.visible == true && this.text != null){
            return this.drawground.fillText(this.text,this.x1+this.w/2,this.y1+this.h/1.25);
        } else if(this.visible != true || this.text == null){
            return;
        }
    }
}