export function createPromise(payload,worker, game){
    const messageId = game.globals.workerID++;
    const msg = {
        id: messageId,
        payload: payload
    }
    return new Promise(function(resolve,reject){
        game.globals.resolves[messageId] = resolve;
        game.globals.rejects[messageId] = reject;

        worker.postMessage(msg);
    });
}