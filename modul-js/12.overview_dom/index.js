// 1. Overview  DOM
const pFirst = document.querySelector('p');
// console.log(pFirst);
// console.log(typeof pFirst);
// console.dir(pFirst);

// 2. lấy ra nhiều object trong dom
const pAll = document.querySelectorAll('p');
for(let i = 0; i < pAll.length; i++) {
    console.log(pAll[i]);
}



//thay đổi giá trị cho object
pFirst.innerText = 'First change';


const pHot = document.querySelector('.hot');
pHot.innerHTML = pHot.innerHTML + '<h2>Xin chào các bạn</h2>';
console.dir(pHot);