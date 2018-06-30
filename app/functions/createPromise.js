
export function createPromise(collisionWorker){
    return new Promise(function(resolve){
        collisionWorker.onmessage = function(e) {
            resolve(e.data);
        }
    });
}