const readText = (num) => {
    var number = ['ศุนย์', 'หนึ่ง', 'สอง', 'สาม', 'สี่', 'ห้า', 'หก', 'เจ็ด', 'แปด', 'เก้า'];
    var position = ['หน่วย', 'สิบ', 'ร้อย', 'พัน', 'หมื่น', 'แสน', 'ล้าน',];
    var inputNumber = num;
    var res = '';
    for (i = 0; i < inputNumber.length; i++) {
        if (inputNumber[i] !== '0') {
            res = res + number[parseInt(inputNumber[i])];
            res = res + position[inputNumber.length - (i + 1)];
        }
    }
    res = res.replace('สองสิบ', 'ยี่สิบ');
    res = res.replace('หนึ่งสิบ', 'ยี่สิบ');
    res = res.replace('หนึ่งหน่วย', 'เอ็ด');
    res = res.replace('หน่วย', '');
    if (res == 'เอ็ด') {
        res = 'หนึ่ง';
    }
    console.log(res);
    return res;
}

module.exports = {
    readText
}

