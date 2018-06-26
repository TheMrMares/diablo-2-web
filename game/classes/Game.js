export class Game {
    constructor(nFPS, aFPS){
        this.nFPS = nFPS;
        this.aFPS = aFPS;
        this.mFPS = nFPS/aFPS;
    }
    refreshModifier() {
        this.mFPS = this.nFPS/this.aFPS;
    }
}