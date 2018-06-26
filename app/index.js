//CSS
import 'styles/index.scss';
//Classes
import {Game} from 'classes/Game.js';
import {Window} from 'classes/Window.js';
import {Unit} from 'classes/Unit.js';
    //Subclasses
    import {Player} from 'classes/subclasses/Player.js';
//Functions
import {releaseKey} from 'functions/releaseKey.js';
import {pushKey} from 'functions/pushKey.js';

//Init
let game = new Game(60, 60); //Init game obj. with actual/native fps nad modifier
let win = new Window(document.querySelector('#gameCanvas')); //Init window obj that holds canvas and his sizes
let gameInterval = window.setInterval(gameProcess, 1000/game.aFPS); //Set game loop interval

//Objects
let player = new Player(win.display, 50,50,100,100,0,0);

//Events indicators
window.addEventListener('keydown', function(evt){
    pushKey(evt, player);
});
window.addEventListener('keyup', function(evt){
    releaseKey(evt, player);
});

//Game loop
function gameProcess(){
    win.display.fillStyle ='red';
    win.display.fillRect(0,0,win.w,win.h);

    win.display.fillStyle ='black';
    player.drawObject();
}