//BT1
function checkElement(arr, element) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == element) {
            return true;
        }
    }
    return false;
}
console.log(checkElement([1,2,3,4,5], 6));

//const checkElement = (arr,num)=> arr.includes(num)?true:false;
//console.log(checkElement([1,2,3,4,5]), 0); => false

//BT2
function getElement(arr, element) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] > element) {
            result.push(arr[i]);
        }
    }
    console.log(result);
}
getElement([1,2,3,4,5], 3);

//const getElement = (arr,num) => arr.filter(x => x > num);
//console.log(getElementGreater([1,2,3,4,5]), 3);

//BT3
function randomHexCode() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for(var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color);
    return color;
}
randomHexCode();

//const randomHexCode = () => {
//     const letters = {0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F}
//}

//BT4
function randomRgbCode() {
    console.log(`rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`);
}
randomRgbCode();

//