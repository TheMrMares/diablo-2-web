export class Game {
    constructor(nFPS, aFPS, isStarted = false){
        this.nFPS = nFPS;
        this.aFPS = aFPS;
        this.mFPS = nFPS/aFPS;
        this.objects = {
            players: [],
            monsters: [],
            npcs: [],
            obstacles: [],
            guiTemplates: []
        };
        this.isStarted = isStarted;
        this.activeGui = 0;
        this.globals = {
            workerID: 0,
            resolves: {},
            rejects: {}
        }
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