import {guiUnit} from './../guiUnit.js';

export class Background extends guiUnit {
    constructor(x1,y1,w,h, img){
        super(x1,y1,w,h);
        this.img = img;
    }
}