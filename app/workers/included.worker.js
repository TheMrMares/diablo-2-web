onmessage = function(msg) {
    const {id, payload} = msg.data;
    let data = payload

    let x = data.x
    let y = data.y
    let box = JSON.parse(data.box);
    let finalState = false;

    if((x >= box.x1 && x <= box.x2) && (y >= box.y1 && y <= box.y2)){
        finalState = true;
    }
    postMessage({id: id, payload: finalState});
}

// ## HERE ADD PROMISE WITH WORKER EVERYTIME WHEN YOU WANT WAIT FOR DATA
//createPromise({x: this.mx ,y:this.my, box:JSON.stringify(item)}, includedWorker, game).then(function(res){
    //console.log(res);
//});