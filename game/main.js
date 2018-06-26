//Classes
import {Game} from './classes/Game.js';
import {Window} from './classes/Window.js';

//Init
let game = new Game(60, 60); //Init game obj. with actual/native fps nad modifier
let win = new Window(document.querySelector('#gameCanvas')); //Init window obj that holds canvas and his sizes
let gameInterval = window.setInterval(gameProcess, 1000/game.aFPS); //Set game loop interval

//Game loop
function gameProcess(){
    console.log(win);
}