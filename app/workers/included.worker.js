onmessage = function(e) {
    let data = e.data;

    let x = JSON.parse(data.x);
    let y = JSON.parse(data.y);
    let box = JSON.parse(data.box);
    let finalState = false;

    if((x >= box.x1 && x <= box.x2) && (y >= box.y1 && y <= box.y2)){
        finalState = true;
    }
    postMessage(finalState);
}

// ## HERE ADD PROMISE WITH WORKER EVERYTIME WHEN YOU WANT WAIT FOR DATA
//createPromise(collisionWorker).then(function(data){
//    console.log(data);
//});

// ## HERE SEND DATA
//collisionWorker.postMessage({x: 100, y: 100, box: JSON.stringify(pplayer)});