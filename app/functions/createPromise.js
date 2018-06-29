
export function createPromise(collisionWorker){
    return new Promise(function(resolve){
        collisionWorker.onmessage = function(e) {
            resolve(e.data);
        }
    });
}

// ## HOW TO USE THAT FUNCTION?
// ## HERE ADD PROMISE WITH WORKER EVERYTIME WHEN YOU WANT WAIT FOR DATA
//createPromise(collisionWorker).then(function(data){
//    console.log(data);
//});

// ## HERE SEND DATA
//collisionWorker.postMessage({obj: JSON.stringify(player), box: JSON.stringify(pplayer)});