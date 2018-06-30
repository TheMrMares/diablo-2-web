export class Game {
    constructor(nFPS, aFPS, isStarted = false){
        this.nFPS = nFPS;
        this.aFPS = aFPS;
        this.mFPS = nFPS/aFPS;
        this.objects = {
            players: [],
            monsters: [],
            npcs: [],
            obstacles: []
        };
        this.isStarted = isStarted;
    }
    refreshModifier() {
        this.mFPS = this.nFPS/this.aFPS;
    }
    startGame(){
        this.isStarted = true;
    }
    stopGame(){
        this.isStarted = false;
    }
}