import {Unit} from './../Unit.js';

export class Player extends Unit {
    constructor(drawground, x1 = 0, y1 = 0, w = 0, h = 0, vx = 0, vy = 0){
        super(drawground, x1, y1, w, h, vx, vy);
    }
}