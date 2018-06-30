import {guiUnit} from './../guiUnit.js';

export class Background extends guiUnit {
    constructor(drawground,x1,y1,w,h, img, visible = true){
        super(drawground, x1,y1,w,h, visible);
        this.img = img;
    }
}