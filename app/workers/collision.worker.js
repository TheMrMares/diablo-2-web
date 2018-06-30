onmessage = function(e) {
    let data = e.data;

    let obj = JSON.parse(data.obj);
    let box = JSON.parse(data.box);
    let finalState = false;

    if( ((obj.y1 >= box.y1 && obj.y1 <= box.y2) || (obj.y2 > box.y1 && obj.y2 <= box.y2)) ||
    ((box.y1 >= obj.y1 && box.y1 < obj.y2) || (box.y2 >= obj.y1 && box.y2 <= obj.y2)) ){
        if(obj.x2 >= box.x1 && obj.x2 < box.x2){
            finalState = true;
        }
        if(obj.x1 <= box.x2 && obj.x1 > box.x1){
            finalState = true;
        }
    }
    if( ((obj.x1 >= box.x1 && obj.x1 <= box.x2) || (obj.x2 >= box.x1 && obj.x2 <= box.x2)) ||
        ((box.x1 >= obj.x1 && box.x1 <= obj.x2) || (box.x2 >= obj.x1 && box.x2 <= obj.x2)) ){
        if(obj.y2 >= box.y1 && obj.y2 < box.y2){
            finalState = true;
        }
        if(obj.y1 <= box.y2 && obj.y1 > box.y1){
            finalState = true;
        }
    }
    postMessage(finalState);
}

// ## HERE ADD PROMISE WITH WORKER EVERYTIME WHEN YOU WANT WAIT FOR DATA
//createPromise(collisionWorker).then(function(data){
//    console.log(data);
//});

// ## HERE SEND DATA
//collisionWorker.postMessage({obj: JSON.stringify(player), box: JSON.stringify(pplayer)});