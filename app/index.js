//CSS
import 'styles/index.scss';

//Classes
import {Game} from 'classes/Game.js';
import {Window} from 'classes/Window.js';
//Subclasses
import {Player} from 'classes/subclasses/Player.js';
//Functions
import {createImage} from './functions/createImage.js';
import {createPromise} from './functions/createPromise.js';
//Workers
import cWorker from './workers/collision.worker.js';
let collisionWorker = new cWorker;
import iWorker from './workers/included.worker.js';
let includedWorker = new iWorker;

//Inits
let game = new Game(60, 60, false); //Init game obj. with actual/native fps and modifier
let win = new Window(document.querySelector('#gameCanvas'), false); //Init window obj that holds canvas and his sizes
let gameInterval = window.setInterval(gameProcess, 1000/game.aFPS); //Set game loop interval

//Textures
let gui_menuBackground = createImage(require('./textures/gui/menu-background.png'));

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

//Game objects
let player = new Player(win.display, 50,50,100,100,0,0, true);
game.objects.players.push(player);

//Game loop
function gameProcess(){
    //Game started so actions for game...
    if(game.isStarted == false){
        // Refreshing coordinates
        game.objects.players.forEach((item,index) => {
            item.updateCoordinates();
            item.saveCoordinates();
        });
        win.display.fillStyle ='red';
        win.display.fillRect(0,0,win.w,win.h);

        win.display.drawImage(gui_menuBackground, 0, 0);

        win.display.fillStyle ='black';
        player.drawObject();
    // Game not started so actions for menu...
    } else if(game.isStarted == true){

    }
}

//Functions