//B1
const para = document.getElementById("text");
para.style.color = "#777";
para.style.fontSize = "2rem";
para.innerHTML = "Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.";

//B2
const para1 = document.querySelectorAll('li');
para1.forEach(p => p.style.color = 'blue');

//B3
// Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách
const list = document.querySelector('#list');
let newLi8 = document.createElement('li');
let newLi9 = document.createElement('li');
let newLi10 = document.createElement('li');
newLi8.textContent = "Item 8";
newLi9.textContent = "Item 9";
newLi10.textContent = "Item 10";
list.appendChild(newLi8);
list.appendChild(newLi9);
list.appendChild(newLi10);

// Sửa nội dung cho thẻ <li> 1 thành màu đỏ (color)
const li = list.querySelectorAll('li');
li[0].style.color = "red";

// Sửa background cho thẻ <li> 3 thành màu xanh (background-color)
li[2].style.backgroundColor = "blue";

// Remove thẻ <li> 4
li[3].remove();

// Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa ở bước trước,
//thẻ <li> mới có nội dung bất kỳ
let newItem = document.createElement('li');
newItem.textContent = "Hello techmaster"; 
list.insertBefore(newItem, li[4]);

