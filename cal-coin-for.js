module.exports.calCoinFor = (num) => {
    var coins = [10, 5, 1];
    input = num;
    res = [0, 0, 0 ];

    for (i = 0; i < coins.length; i++) {
        if (input >= coins[i]) {
            // console.log(' เหรียญ  ' + coins[i] + ' บาท' + '  จำนวน  ' + Math.floor(input / coins[i]));
            res[i] = Math.floor(input / coins[i]);
            input = input % coins[i];
        }
    }
    return res
}
