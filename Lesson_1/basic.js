// let number = 10;
// console.log(typeof number);     //"number"

// let name = "Bùi Hiên";
// console.log(typeof name);       //"string"

// console.log(`Demo of ${number}`);

// let string = 1;
// let Object = "test";
// let error = 2;
// console.log(Object)
function sayHi() {
    console.log("Hi");
}

sayHi()

const func = (test)=> {
    console.log(`Print the ${test}`);
}
func("word");

//Bài 1
function mark(mark) {
    if (mark >= 85)   {
        return console.log("A");
    } else if (mark >= 70 && mark < 85) {
        return console.log("B");
    } else if (mark >= 40 && mark < 70){
        return console.log("C");
    } else {
        return console.log("D");
    }
}
mark(65);

//Bài 2
function compare(a,b) {
    if (a > b) {
        return console.log(a);
    } else {
        return console.log(b);
    }
}
compare(10,20);

//Bài 3
function numberCheck(number) {
    if (number == 0) {
        return console.log(`Số ${number} là số 0`);
    } else if (number > 0) {
        return console.log(`Số ${number} là số dương`);
    } else {
        return console.log(`Số ${number} là số âm`);
    }
}
numberCheck(-4);

//Bài 4
function numberCheck2(number) {
    if (number % 2 == 0) {
        return console.log(`${number} là số chẵn`);
    } else {
        return console.log(`${number} là số lẻ`);
    }
}
numberCheck2(3);

//Bài 5
function numberCheck3(number) {
    if (number % 3 == 0 && number % 5 == 0) {
        return console.log(`${number} đồng thời chia hết cho cả 3 và 5`);
    } else {
        return console.log(`${number} không đồng thời chia hết cho cả 3 và 5`);
    }
}
numberCheck3(15);

//Bài 6
function numberCheck4(a,b,c) {
    if (c == a + b) {
        console.log("c = a + b");
    } else {
        return console.log("c != a + b");
    }
}
numberCheck4(1,2,3);

//Switch-case
//Bài 1
function dayCheck(day) {
    switch(day) {
        case 0: {
            console.log("Hôm nay là chủ nhật");
            break;
        }
        case 1: {
            console.log("Hôm nay là thứ 2");
            break;
        }
        case 2: {
            console.log("Hôm nay là thứ 3");
            break;
        }
        case 3: {
            console.log("Hôm nay là thứ 4");
            break;
        }
        case 4: {
            console.log("Hôm nay là thứ 5");
            break;
        }
        case 5: {
            console.log("Hôm nay là thứ 6");
            break;
        }
        case 6: {
            console.log("Hôm nay là thứ 7");
            break;
        }
        default: {
            console.log("Không có ngày thích hợp");
            break;
        }
    }
}
dayCheck(5);

//Bài 2
function monthCheck(month) {
    switch(month) {
        case 1: 
        case 2: 
        case 3: {
            console.log("Mùa xuân");
            break;
        }
        case 4: 
        case 5: 
        case 6: {
            console.log("Mùa hạ");
            break;
        }
        case 7: 
        case 8: 
        case 9: {
            console.log("Mùa thu");
            break;
        }
        case 10: 
        case 11: 
        case 12: {
            console.log("Mùa đông");
            break;
        }
        default: {
            console.log("Không có mùa thích hợp");
            break;
        }
    }
}
monthCheck(5);

//Loop
//Bài 3:
function repeatString(string, number) {
    let result = "";
    for(let repeat = 0; repeat < number; repeat++) {
        result = result + string;
        if(repeat != number - 1) {
            result = result + "-"
        }
    }
    console.log(result);
}
repeatString("a", 5);

//Bài 4
function number() {
    let result = 0;
    for(let i = 0; i <= 100; i++) {
        if(i % 5 ==0) {
            result = result + i;
        }
    }
    console.log(result);
}
number();

//Bài 6
function sum(a,b) {
    let sum = 0;
    let temp = 0;
    if (a > b) {
        temp = a;
        a = b;
        b = temp;
    }
    for(i = a+1; i <= b-1; i++) {
        sum = sum + i;
    }
    console.log(sum);
}
sum(8,3);

//Bài 8

function sum1(a) {
    function kiemTraSoNguyenTo(number) {
        let sum = 0;
        for(i = 1; i <= number; i++) {
            if(number % number == 0 && number % 1 == 0) {
                sum += number;
            }
        }
        a = sum;
    }
    console.log(a);
}
sum1(5);

//Bài 9
// function bai9(y) {
//     let sum = 0;

// }



