import {guiUnit} from './../guiUnit.js';

export class Button extends guiUnit {
    constructor(x1,y1,w,h, text){
        super(x1,y1,w,h);
        this.text = text;
    }
}