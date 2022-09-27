// Truy cập vào thẻ h1 có id=“heading”
//thay đổi màu chữ thành ‘red’, và in hoa nội dung của thẻ đó
const heading = document.getElementById("heading");
heading.style.color = "red";
heading.style.textTransform = "upperCase";

// Thay đổi màu chữ của tất cả thẻ có class “para” thành màu “blue”
//và có font-size = “20px”
const para = document.querySelectorAll('.para');
para.forEach(element => {
    element.style.color = "blue";
    element.style.fontSize = "20px";
});

// Thêm thẻ a link đến trang ‘facebook’ ở đằng sau thẻ có class “para-3”
const p3 = document.querySelector(".para-3");
let link = document.createElement("a");
link.href = "https://facebook.com";
link.textContent = 'click';
p3.appendChild(link);

// Thay đổi nội dung của thẻ có id=“title” thành “Đây là thẻ tiêu đề”
const title = document.querySelector("#title");
title.innerHTML = "Đây là thẻ tiêu đề";

// Thêm class “text-bold” vào thẻ có class=“description”
//(định nghĩa class “text-bold” có tác dụng in đậm chữ)
const des = document.querySelector(".description");
des.classList.toggle("text-bold");
des.style.fontWeight = "bold";

// Thay thế thẻ có class=“para-3” thành thẻ button có nội dung là “Click me”
const btn = document.createElement("button");
btn.textContent = "Click me";
p3.parentNode.replaceChild(btn, p3);

// Copy thẻ có class=“para-2” và hiển thị ngay đằng sau thẻ đó
const p2 = document.querySelector(".para-2");
const p2Clone = p2.cloneNode(true);
p2.appendChild(p2Clone);

// Xóa thẻ có class=“para-1”
const p1 = document.querySelector(".para-1");
p1.remove();