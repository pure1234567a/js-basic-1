var cash = 6;
var tenCoin = 0;
var tenPiece = 0;
var fiveCoin = 0;
var fivePiece = 0;
var oneCoin = 0;

tenCoin = Math.floor(cash / 10);
tenPiece = cash % 10;

if (tenPiece > 0) {
    fiveCoin = Math.floor(tenPiece / 5);
    fivePiece = tenPiece % 5;

    if (fivePiece > 0) {
        oneCoin = fivePiece / 1;
    }
}

console.log('ten coin: ' + ' ' + tenCoin);
console.log('five coin' + ' ' + fiveCoin);
console.log('one coin' + ' ' + oneCoin);