// const para = document.querySelector('#demo');
// console.log(para);

// const parent = para.parentNode;
// console.log(parent.className);

// const nextBro = para.nextElementSibling;
// console.log(nextBro);

// const nextNext = nextBro.nextElementSibling;
// console.log(nextNext.textContent);

// const prevEle = nextBro.nextElementSibling;
// console.log(prevEle.textContent);

//B1
const para = document.getElementById("text");
para.style.color = "#777";
para.style.fontSize = "32px";
para.innerHTML = "Tôi có thể làm bất cứ điều gì tôi muốn với JavaScript.";

//B2
const para1 = document.querySelectorAll('li');
console.log(para1);
// for(let i = 0; i < para1.length; i++) {
//     para1[i].style.color = 'blue';
// }
para1.forEach(p => p.style.color = 'blue');

//B3
const text1 = document.querySelector("#text1");
const btn = document.querySelector("#btn");
btn.addEventListener('click', ()=>{
    text1.classList.toggle('hide');
})


//B4
const selectImg = document.querySelector("#texture-selector");
const imageFrame = document.querySelector("#texture-background");
selectImg.addEventListener('change', (e) => {
    imageFrame.innerHTML = '';
    let imgUrl = e.target.value;
    let imgEl = document.createElement('img');
    imgEl.src = imgUrl;
    imageFrame.appendChild(imgEl);
})

