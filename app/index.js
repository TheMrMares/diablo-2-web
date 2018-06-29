//CSS
import 'styles/index.scss';

//Classes
import {Game} from 'classes/Game.js';
import {Window} from 'classes/Window.js';

    //Subclasses
    import {Player} from 'classes/subclasses/Player.js';

//Inits
let game = new Game(60, 60); //Init game obj. with actual/native fps and modifier
let win = new Window(document.querySelector('#gameCanvas'), false); //Init window obj that holds canvas and his sizes
let gameInterval = window.setInterval(gameProcess, 1000/game.aFPS); //Set game loop interval

//Workers
let cWorker = require("worker-loader?name=hash.worker.js!./workers/collision.worker.js");
let collisionWorker = new cWorker;
collisionWorker.postMessage(5);
collisionWorker.onmessage = function(e) {
	console.log(e.data)
}

//Objects
let player = new Player(win.display, 50,50,100,100,0,0, true);
game.objects.units.push(player);

//Events indicators
window.addEventListener('keydown', function(evt){
    win.pushKey(evt, player);
});
window.addEventListener('keyup', function(evt){
    win.releaseKey(evt, player);
});
window.addEventListener('mousemove', function(evt){
    win.mouseMove(evt);
});
window.addEventListener('click', function(evt){
    win.mouseClick(evt,player);
});

//Game loop
function gameProcess(){
    // Refreshing coordinates
    game.objects.units.forEach((item,index) => {
        item.updateCoordinates();
        item.saveCoordinates();
    });
    
    win.display.fillStyle ='red';
    win.display.fillRect(0,0,win.w,win.h);

    win.display.fillStyle ='black';
    player.drawObject();
}