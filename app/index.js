//CSS
import 'styles/index.scss';

//Textures
let gui_menuBackground = createImage(require('./textures/gui/menu-background.png'));

//Classes
import {Game} from 'classes/Game.js';
import {Window} from 'classes/Window.js';
import {guiTemplate} from 'classes/guiTemplate.js';
//Subclasses
import {Player} from 'classes/subclasses/Player.js';
import {Button} from 'classes/subclasses/Button.js';
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
createGuis();
console.log(game.objects.guis);

//Events indicators
window.addEventListener('mousemove', function(evt){
    win.mouseMove(evt);
});
window.addEventListener('keydown', function(evt){
    win.pushKey(evt,game.isStarted, player);
});
window.addEventListener('keyup', function(evt){
    win.releaseKey(evt,game.isStarted, player);
});
window.addEventListener('click', function(evt){
    win.mouseClick(evt,game.isStarted,player);
});

//Game objects
let player = new Player(win.display, 50,50,100,100,0,0, true);
game.objects.players.push(player);
let button = new Button(win.display, 100,100,300,50,'Hello', true);

//Game loop
function gameProcess(){
    //Game not started so actions for menu...
    if(game.isStarted == false){
        game.objects.guis[game.activeGui].objects.buttons.forEach((item, index) =>{
            item.drawObject();
            item.drawText();
        });
    // Game started so actions for game...
    } else if(game.isStarted == true){
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
    }
}

//Functions
function createGuis() {
    game.objects.guis.push(
        new guiTemplate(win.display, 'main-menu', [
            new Button(win.display, 100,100,300,50,'Hello', true),
            new Button(win.display, 100,400,300,50,'Hello2', true)
        ])
    );
    game.objects.guis.push(
        new guiTemplate(win.display, 'character-menu', [
            new Button(win.display, 100,100,300,50,'Hello', true),
            new Button(win.display, 100,400,300,50,'Hello2', true)
        ])
    );
}