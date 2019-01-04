var numText = require('./number-text');
var calCoin = require('./cal-coin-for');

numText.readText('101');
var cal = calCoin.calCoinFor('153');;
console.log(cal)
var coin = [10, 5, 1]
for (i = 0; i < cal.length; i++) {
    console.log('เหรียญ  ' + coin[i] + ' จำนวน ' + cal[i] + ' เหรียญ');
    // if (i == 0) {
    //     console.log('เหรียญ  10 บาท ' + 'จำนวน  ' + cal[i] + ' เหรียญ');
    // }
    // if (i == 1) {
    //     console.log('เหรียญ  5 บาท ' + 'จำนวน  ' + cal[i] + ' เหรียญ');
    // }
    // if (i == 2) {
    //     console.log('เหรียญ  1 บาท  ' + 'จำนวน  ' + cal[i] + ' เหรียญ');
    // }
}
