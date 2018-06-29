onmessage = function(e) {
    let number = e.data*2;
    postMessage(number + ' worker said to Oliwia <3');
}