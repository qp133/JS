const grades = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Ethan', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'Donald', grade: 5, sex: 'M'},
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'}
]

console.log("1---------")
//Viết function tính thứ hạng trung bình của cả lớp
function avg() {
    let sum = 0;
    for(const key in grades) {
        let grade = grades[key].grade;
        sum += grade;
    }
    let avg = sum/grades.length;
    console.log(avg);
}
avg();

console.log("2---------")
//Viết function tính thứ hạng trung bình của nam trong lớp
function avgMale() {
    let sum = 0;
    let count = 0;
    for(const key in grades) {
        if(grades[key].sex.toUpperCase().includes("M")) {
            let grade = grades[key].grade;
            sum += grade;
            count++;
        }
    }
    let avg = sum/count;
    console.log(avg);
}
avgMale();

console.log("3---------")
// Viết function tính thứ hạng trung bình của Nữ trong lớp
function avgFemale() {
    let sum = 0;
    let count = 0;
    for(const key in grades) {
        if(grades[key].sex.toUpperCase().includes("F")) {
            let grade = grades[key].grade;
            sum += grade;
            count++;
        }
    }
    let avg = sum/count;
    console.log(avg);
}
avgFemale();

console.log("4---------")
// Viết function tìm học viên Nam có thứ hạng cao nhất trong lớp
function maxMale() {
    let male = [];
    for(const key in grades) {
        if(grades[key].sex.toUpperCase().includes("M")) {
            male.push(grades[key]);
        }
    }
    male.sort((a,b)=>(a.grade<b.grade)?1:-1)
    console.log(male[0]);
}
maxMale();

console.log("5---------")
// Viết function tìm học viên Nữ có thứ hạng cao nhất trong lớp
function maxFemale() {
    let female = [];
    for (const key in grades) {
        if(grades[key].sex.toUpperCase().includes("F")) {
            female.push(grades[key]);
        }
    }
    female.sort((a,b)=>(a.grade<b.grade)?1:-1);
    console.log(female[0]);
}
maxFemale();

console.log("6---------")
// Viết function tìm học viên Nam có thứ hạng thấp nhất trong lớp
function minMale() {
    let male = [];
    for(const key in grades) {
        if(grades[key].sex.toUpperCase().includes("M")) {
            male.push(grades[key]);
        }
    }
    male.sort((a,b)=>(a.grade>b.grade)?1:-1);
    console.log(male[0]);
}
minMale();

console.log("7---------")
// Viết function tìm học viên Nữ có thứ hạng thấp nhất trong lớp
function minFemle() {
    let female = [];
    for (const key in grades) {
        if(grades[key].sex.toUpperCase().includes("F")) {
            female.push(grades[key]);
        }
    }
    female.sort(function(a,b) {
        return a.grade - b.grade;
    })
    console.log(female[0]);
}
minFemle();

console.log("8---------")
// Viết function thứ hạng cao nhất của cả lớp
function maxGrade() {
    grades.sort((a,b) => (a.grade < b.grade)?1:-1);
    console.log(grades[0]);
}
maxGrade();

console.log("9---------")
// Viết function thứ hạng thấp nhất của cả lớp
function minGrade() {
    grades.sort((a,b) => (a.grade > b.grade) ? 1 : -1);
    console.log(grades[0]);
}
minGrade();

console.log("10---------")
// Viết function lấy ra danh sách tất cả học viên Nữ trong lớp
function femaleList() {
    for(const key in grades) {
        if(grades[key].sex.toUpperCase().includes("F")) {
            console.log(grades[key]);
        }
    }
}
femaleList();

console.log("11---------")
// Viết function sắp xếp tên học viên theo chiều tăng dần của bảng chữ cái
function sortByName() {
    grades.sort((a,b) => (a.name > b.name)?1:-1);
    for(const key in grades) {
        console.log(grades[key]);
    }
}
sortByName();

console.log("12---------")
// Viết function sắp xếp thứ hạng học viên theo chiều giảm dần
function sortByGrade() {
    grades.sort((a,b) => (a.grade < b.grade)?1:-1);
    for(const key in grades) {
        console.log(grades[key]);
    }
}
sortByGrade();

console.log("13---------")
// Viết function lấy ra học viên Nữ có tên bắt đầu bằng “J”
function findFemale() {
    for(const key in grades) {
        if(grades[key].sex.toUpperCase().includes("F") && grades[key].name.includes("J")) {
            console.log(grades[key]);
        }
    }
}
findFemale();

console.log("14---------")
// Viết function lấy ra top 5 người có thứ hạng cao nhất trong lớp
function findTopGrade() {
    let find = [];
    grades.sort((a,b) => (a.grade < b.grade)?1:-1);
    for(const key in grades) {
        find.push(grades[key]);
        if(key > 4) {
            break;
        }
        console.log(grades[key]);
    }
}
findTopGrade();