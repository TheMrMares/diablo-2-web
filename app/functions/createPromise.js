export function createPromise(collisionWorker){
    return new Promise(function(resolve, reject){
        collisionWorker.onmessage = function(e) {
            resolve(e.data);
        }
    });
} 