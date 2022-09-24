//BT1, BT2
function minMax() {
    var arr = [1,2,3,4,5];
    let min = arr[0];
    let max = arr[0];
    arr.forEach(item => {
        if(item > max)  max = item;
        if(item < min)  min = item;
    });
    console.log(min);
    console.log(max);
}
minMax();

//BT4


//BT5
function repeatString2(str) {
    let newString2 = [];
    for(let x = 0; x <= 9; x++) {
        if(x == 0) {
            newString2.push(str);
        } else {
            newString2.push("-");
            newString2.push(str);
        }
    }
    let newString3 = newString2.join(" ");
    return newString3
}
console.log(repeatString2("a"));

