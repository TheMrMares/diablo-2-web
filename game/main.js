//Classes
import {Game} from './classes/Game.js';
import {Window} from './classes/Window.js';
import {Unit} from './classes/Unit.js';
    //Subclasses
    import {Player} from './classes/subclasses/Player.js';
//Functions
import {pushKey} from './function/pushKey.js';

//Init
let game = new Game(60, 60); //Init game obj. with actual/native fps nad modifier
let win = new Window(document.querySelector('#gameCanvas')); //Init window obj that holds canvas and his sizes
let gameInterval = window.setInterval(gameProcess, 1000/game.aFPS); //Set game loop interval
//window.addEventListener('click');

//Test unit
let unit = new Unit(win.display, 50,50,100,100,0,0);
let player = new Player(win.display, 50,50,100,100,0,0);
console.log(unit);

//Game loop
function gameProcess(){
    win.display.fillStyle ='red';
    win.display.fillRect(0,0,win.w,win.h);

    win.display.fillStyle ='black';
    unit.drawObject();
}