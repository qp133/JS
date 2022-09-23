//BT1
function factorial(num) {
    let result = 1;
    for (var i = num; i > 0; i--) {
        result = result * i;
    }
    console.log(result);
    return result;
}
factorial(5);

//BT2
function reverseString(str) {
    let stringResult = "";
    for(var i = str.length-1; i >= 0; i--) {
        stringResult = stringResult + str[i];
    }
    console.log(stringResult);
}
reverseString("hello");

//BT3
function translate(national) {
    switch(national) {
        case "VN": {
            console.log("Xin chào");
            break;
        }
        case "EN": {
            console.log("Hello");
            break;
        }
        case "ES": {
            console.log("Ciao");
            break;
        }
        case "RU": {
            console.log("Privet");
            break;
        }
    }
}
translate("ES");

//BT4
function subString(str) {
    let newstr = "";
    for(let i = 0; i < str.length; i++) {
        newstr = str.substring(0,11);
    }
    newstr = newstr.concat("...");
    console.log(newstr);
}
subString("xinchaocacbandenvoiTechmaster");

//BT5
function game() {
    var a = ['bua', 'keo', 'bao'];
    var player = Math.floor(Math.random() * a.length);
    var computer = Math.floor(Math.random() * a.length);

    console.log(`Nguoi choi: ${a[player]}`);
    console.log(`May tinh: ${a[computer]}`);
    
    if(a[player] == "bua" && a[computer] == "bua" 
        || a[player] == "keo" && a[computer] == "keo"
        || a[player] == "bao" && a[computer] == "bao") {
            console.log("Hòa");
        }
    else if (a[player] == "bua" && a[computer] == "keo" 
        || a[player] == "bao" && a[computer] == "bua"
        || a[player] == "keo" && a[computer] == "bao" ) {
            console.log("Người chơi thắng"); 
    } else {
        console.log("Người chơi thua");
    }
}
game();