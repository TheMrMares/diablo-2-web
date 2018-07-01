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
import {Background} from './classes/subclasses/Background';
//Functions
import {createImage} from './functions/createImage.js';
import {createPromise} from './functions/createPromise.js';

//Inits
let game = new Game(60, 60, false); //Init game obj. with actual/native fps and modifier
let win = new Window(document.querySelector('#gameCanvas'), false); //Init window obj that holds canvas and his sizes
let gameInterval = window.setInterval(gameProcess, 1000/game.aFPS); //Set game loop interval
createGuis();

//Workers
let workers = [];
import cWorker from './workers/collision.worker.js';
const collisionWorker = new cWorker;
import iWorker from './workers/included.worker.js';
const includedWorker = new iWorker;
//Push created workers to add handlers for them
workers.push(collisionWorker,includedWorker);
workers.forEach((item,index)=>{
    item.onmessage = function(msg){
        const {id, payload} = msg.data
        const resolve = game.globals.resolves[id];
        const reject = game.globals.rejects[id];
        resolve(payload);
        delete game.globals.resolves[id];
        delete game.globals.rejects[id];
    }
});

//Events indicators
window.addEventListener('mousemove', function(evt){
    win.mouseMove(evt,game);
});
window.addEventListener('keydown', function(evt){
    win.pushKey(evt,game.isStarted, player);
});
window.addEventListener('keyup', function(evt){
    win.releaseKey(evt,game.isStarted, player);
});
window.addEventListener('click', function(evt){
    win.mouseClick(evt,game,player,createPromise,includedWorker);
});

//Game objects
let player = new Player(win.display, 50,50,100,100,0,0, true);
game.objects.players.push(player);

//Game loop
function gameProcess(){
    console.log(game.globals.workerID);
    //Game not started so actions for menu...
    if(game.isStarted == false){
        game.objects.guiTemplates[game.activeGui].objects.background.drawObject();
        game.objects.guiTemplates[game.activeGui].objects.buttons.forEach((item, index) =>{
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
//CREATING GUIS
function createGuis() {
    game.objects.guiTemplates.push(
        new guiTemplate(
            win.display, //where draw
            'main-menu',   //name
        new Background(win.display, 0, 0, 800, 600, gui_menuBackground, true) //bckg obj
        ,[
            new Button(win.display, 100,100,300,50,'Hello', null, true), //add all buttons
            new Button(win.display, 100,200,300,50,'Hello2', null, true),
            new Button(win.display, 100,300,300,50,'Hello2', null, true)
        ])
    );
}